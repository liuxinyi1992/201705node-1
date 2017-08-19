/**
 * 编写一个socket.io应用
 * socket.io+express联系使用
 **/
let express = require('express');
let path = require('path');
let app = express();
//指定静态文件根目录
app.use(express.static(path.resolve('../node_modules')));
app.get('/',function(req,res){
  res.sendFile(path.resolve('index.html'));
});
//创建一个http服务器，把app作为请求监听函数
let server = require('http').createServer(app);
//引用socket.io服务器，执行它，传入http服务器的实例,返回io实例
let io = require('socket.io')(server);
//监听客户端的连接成功事件
io.on('connection',function(socket){
   console.log('连接成功');
   socket.on('message',function(msg){
     console.log(msg);
     socket.send("服务器说:"+msg);
   });
});
//EventEmitter
//现在websocket服务器和http服务器共用了8080端口
server.listen(8080);


