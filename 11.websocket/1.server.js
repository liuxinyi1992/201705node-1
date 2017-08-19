//引入ws模块
let Server = require('ws').Server;
//创建一个websocket服务器的实例
let server = new Server({port:8080});
//每个服务器监听客户端的请求，当客户端请求到来的时候执行对应的回调函数
//socket代表此服务器跟此客户端的连接对象
server.on('connection',function(socket){
  console.log('连接成功');
  //监听客户端发过来的消息
  socket.on('message',function(msg){
    console.log(msg);
    //向客户端发消息
    socket.send('服务器说:'+msg);
  });
});
