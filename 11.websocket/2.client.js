let Socket = require('ws');
let socket = new Socket('ws://localhost:8080');
//当客户端连接上服务器，连接成功之后会调用此回调函数
socket.on('open',function(){
  console.log('连接成功');
  socket.send('你好');
});
//监听服务器发过来的消息
socket.on('message',function(msg){
  console.log(msg);
});