import http from 'node:http';
import {WebSocketServer,WebSocket} from 'ws';

const port=Number(process.env.PORT||8080);
const server=http.createServer((req,res)=>{res.writeHead(200,{'content-type':'application/json','access-control-allow-origin':'*'});res.end(JSON.stringify({service:'Daylight Sync Relay',status:'online'}));});
const wss=new WebSocketServer({server});
const rooms=new Map();

function room(code){if(!rooms.has(code))rooms.set(code,new Set());return rooms.get(code)}
function send(peer,data){if(peer.readyState===WebSocket.OPEN)peer.send(JSON.stringify(data))}
wss.on('connection',socket=>{
  socket.on('message',raw=>{try{const message=JSON.parse(raw);const code=String(message.pairingCode||'').trim().toUpperCase();if(!code||code.length<6)return send(socket,{type:'error',message:'A valid pairing code is required.'});if(socket.room&&socket.room!==code)rooms.get(socket.room)?.delete(socket);socket.room=code;room(code).add(socket);if(message.type==='hello')send(socket,{type:'ready',devices:room(code).size});if(message.type==='snapshot'){for(const peer of room(code))if(peer!==socket)send(peer,message)}}catch{send(socket,{type:'error',message:'Invalid message.'})}});
  socket.on('close',()=>{if(!socket.room)return;const peers=rooms.get(socket.room);peers?.delete(socket);if(!peers?.size)rooms.delete(socket.room)});
});
server.listen(port,()=>console.log(`Daylight relay listening on ${port}`));
