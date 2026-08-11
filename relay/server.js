import http from 'node:http';
import {WebSocketServer,WebSocket} from 'ws';

const port=Number(process.env.PORT||8080);
const cors={'content-type':'application/json','access-control-allow-origin':'*','access-control-allow-methods':'GET,POST,OPTIONS','access-control-allow-headers':'content-type'};
function json(res,status,value){res.writeHead(status,cors);res.end(JSON.stringify(value))}
function readJson(req,limit=24*1024*1024){return new Promise((resolve,reject)=>{let size=0,body='';req.on('data',chunk=>{size+=chunk.length;if(size>limit){reject(Error('too-large'));req.destroy();return}body+=chunk});req.on('end',()=>{try{resolve(JSON.parse(body||'{}'))}catch{reject(Error('invalid-json'))}});req.on('error',reject)})}
const scheduleSchema={
  type:'object',additionalProperties:false,required:['studentName','school','notes','schedules'],
  properties:{
    studentName:{type:'string'},school:{type:'string'},notes:{type:'string'},
    schedules:{type:'array',items:{
      type:'object',additionalProperties:false,required:['name','weekdays','dates','rows'],
      properties:{
        name:{type:'string'},
        weekdays:{type:'array',items:{type:'integer',minimum:1,maximum:5}},
        dates:{type:'array',items:{type:'string',pattern:'^\\d{4}-\\d{2}-\\d{2}$'}},
        rows:{type:'array',items:{type:'object',additionalProperties:false,required:['title','start','end'],properties:{title:{type:'string'},start:{type:'string',pattern:'^([01]\\d|2[0-3]):[0-5]\\d$'},end:{type:'string',pattern:'^([01]\\d|2[0-3]):[0-5]\\d$'}}}}
      }
    }}
  }
};
async function parseSchedule(req,res){
  if(!process.env.OPENAI_API_KEY)return json(res,503,{error:'Schedule import is not configured on this relay.'});
  try{
    const body=await readJson(req),roomId=String(body.roomId||'').toLowerCase(),images=Array.isArray(body.images)?body.images.slice(0,5):[];
    if(!/^[a-f0-9]{64}$/.test(roomId)||!rooms.has(roomId))return json(res,403,{error:'Connect Daylight to your family before importing a schedule.'});
    if(!images.length||images.some(image=>!/^data:image\/(png|jpeg|webp);base64,/i.test(image)||image.length>8_500_000))return json(res,400,{error:'Choose up to five PNG, JPEG, or WebP images.'});
    const prompt=`Read the attached school bell schedule image(s). Extract only information visibly supported by the images. The intended child is ${String(body.studentName||'unspecified')}. Preserve distinct regular, weekday, block, minimum-day, and dated special schedules. Use weekday numbers 1=Monday through 5=Friday. Use 24-hour HH:MM times. Put explicit dates in dates; use weekdays only for recurring schedules. Do not guess unreadable values; explain uncertainty in notes.`;
    const response=await fetch('https://api.openai.com/v1/responses',{method:'POST',headers:{authorization:`Bearer ${process.env.OPENAI_API_KEY}`,'content-type':'application/json'},body:JSON.stringify({model:process.env.OPENAI_SCHEDULE_MODEL||'gpt-5.6-terra',input:[{role:'user',content:[{type:'input_text',text:prompt},...images.map(image_url=>({type:'input_image',image_url}))]}],text:{format:{type:'json_schema',name:'daylight_bell_schedule',strict:true,schema:scheduleSchema}}})});
    const data=await response.json();if(!response.ok)throw Error(data.error?.message||'AI request failed');
    const outputText=data.output?.flatMap(item=>item.content||[]).find(item=>item.type==='output_text')?.text;
    if(!outputText)throw Error('No schedule was returned');return json(res,200,{schedule:JSON.parse(outputText)});
  }catch(error){return json(res,error.message==='too-large'?413:500,{error:error.message==='too-large'?'Images are too large.':String(error.message||'Schedule import failed.')})}
}
const oauthAttempts=new Map();
function oauthAllowed(req){const forwarded=String(req.headers['x-forwarded-for']||req.socket.remoteAddress||'unknown').split(',')[0].trim(),now=Date.now(),recent=(oauthAttempts.get(forwarded)||[]).filter(time=>now-time<60000);if(recent.length>=20)return false;recent.push(now);oauthAttempts.set(forwarded,recent);if(oauthAttempts.size>5000)for(const[key,times]of oauthAttempts)if(!times.some(time=>now-time<60000))oauthAttempts.delete(key);return true}
function epicOAuthCallback(req,res){
  const headers={'cache-control':'no-store, max-age=0','pragma':'no-cache','referrer-policy':'no-referrer','content-security-policy':"default-src 'none'; frame-ancestors 'none'; base-uri 'none'",'x-content-type-options':'nosniff','permissions-policy':'camera=(), microphone=(), geolocation=()'};
  if(!oauthAllowed(req)){res.writeHead(429,{...headers,'content-type':'text/plain; charset=utf-8','retry-after':'60'});return res.end('Too many callback attempts. Try again shortly.')}
  const incoming=new URL(req.url,'https://daylight-sync-relay.onrender.com'),state=incoming.searchParams.get('state')||'',code=incoming.searchParams.get('code')||'',error=incoming.searchParams.get('error')||'';
  if(!/^[A-Za-z0-9_-]{20,256}$/.test(state)||(!code&&!error)||code.length>4096||error.length>256){res.writeHead(400,{...headers,'content-type':'text/plain; charset=utf-8'});return res.end('Invalid Daylight authorization response.')}
  const local=new URL('http://localhost:49173/callback');for(const name of ['code','state','error','error_description']){const value=incoming.searchParams.get(name);if(value&&value.length<=4096)local.searchParams.set(name,value)}
  res.writeHead(302,{...headers,'location':local.toString()});res.end();
}
const server=http.createServer(async(req,res)=>{if(req.method==='OPTIONS')return json(res,204,{});if(req.method==='GET'&&String(req.url||'').startsWith('/oauth/epic/callback'))return epicOAuthCallback(req,res);if(req.method==='POST'&&req.url==='/api/parse-schedule')return parseSchedule(req,res);return json(res,200,{service:'Daylight Sync Relay',status:'online',scheduleImport:Boolean(process.env.OPENAI_API_KEY)});});
const wss=new WebSocketServer({server});
const rooms=new Map();

function room(code){if(!rooms.has(code))rooms.set(code,new Set());return rooms.get(code)}
function send(peer,data){if(peer.readyState===WebSocket.OPEN)peer.send(JSON.stringify(data))}
wss.on('connection',socket=>{
  socket.on('message',raw=>{try{
    const message=JSON.parse(raw),roomId=String(message.roomId||'').trim().toLowerCase();
    if(!/^[a-f0-9]{64}$/.test(roomId))return send(socket,{type:'error',message:'A valid private room is required.'});
    if(socket.room&&socket.room!==roomId)rooms.get(socket.room)?.delete(socket);
    socket.room=roomId;room(roomId).add(socket);
    if(message.type==='hello'){
      send(socket,{type:'ready',devices:room(roomId).size});
      for(const peer of room(roomId))if(peer!==socket)send(peer,{type:'sync-request',roomId,deviceId:message.deviceId});
    }
    if(message.type==='snapshot'&&message.encrypted?.iv&&message.encrypted?.data){
      const safe={type:'snapshot',roomId,deviceId:String(message.deviceId||''),encrypted:message.encrypted};
      for(const peer of room(roomId))if(peer!==socket)send(peer,safe);
    }
  }catch{send(socket,{type:'error',message:'Invalid message.'})}});
  socket.on('close',()=>{if(!socket.room)return;const peers=rooms.get(socket.room);peers?.delete(socket);if(!peers?.size)rooms.delete(socket.room)});
});
server.listen(port,()=>console.log(`Daylight relay listening on ${port}`));
