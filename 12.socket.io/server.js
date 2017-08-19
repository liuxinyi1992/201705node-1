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
   socket.on('message',function(msg){
    //socket.send(msg);//socket.emit('message',msg);
     //广播,通知所有的客户端 。
    io.emit('message',msg);
   });
});
//EventEmitter on('type')=emit('type')
/**
 * Namespace.prototype.send = function(...args){
    args.unshift('message');['message','hello']
    socket.emit('message','hello');
  };
 */
//现在websocket服务器和http服务器共用了8080端口
server.listen(8080);

/**
 * 一、实现匿名聊天
 *   1. 绑定表单提交事件，在表单提交的时候先得到文件框的值然后发送给后台
 *   2. 后台收到消息后把此消息广播给所有的客户端。
 *   3. 所有客户端收到消息后把消息添加到自己的ul里。
 */
