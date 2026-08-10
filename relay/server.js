import http from 'node:http';
import {WebSocketServer,WebSocket} from 'ws';

const port=Number(process.env.PORT||8080);
const server=http.createServer((req,res)=>{res.writeHead(200,{'content-type':'application/json','access-control-allow-origin':'*'});res.end(JSON.stringify({service:'Daylight Sync Relay',status:'online'}));});
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
