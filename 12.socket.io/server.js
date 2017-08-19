/**
 * 编写一个socket.io应用
 * socket.io+express联系使用
 **/
let express = require('express');
let path = require('path');
let app = express();
//指定静态文件根目录
app.use(express.static(path.resolve('../node_modules')));
app.get('/', function (req, res) {
  res.sendFile(path.resolve('index.html'));
});
//创建一个http服务器，把app作为请求监听函数
let server = require('http').createServer(app);
//引用socket.io服务器，执行它，传入http服务器的实例,返回io实例
let io = require('socket.io')(server);
//监听客户端的连接成功事件
io.on('connection', function (socket) {
  //设置一个变量，表示此客户端的用户名,每个客户端都有自己的名字，所以应该是私有变量
  let username;
  socket.on('message', function (msg) {
    //判断此客户端是第一次消息，还是不是第一次，如果是第一次，则设置用户名，如果不是第一次则使用用户名
    if (username) {//正常发言
      //广播,通知所有的客户端 。用户名是当前用户， 内容就是本次消息
      io.emit('message', {username,content:msg,createAt:new Date().toLocaleString()});
    } else {//没有设置过的话就是第一次发言。
      username = msg;//把消息当成用户名
      //当客户端第一次来的时候，要广播一条消息
      io.emit('message',{username:'系统',content:`欢迎${username}加入本聊天室`,createAt:new Date().toLocaleString()});
    }
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
 * 二、实现具名聊天
 *   1. 当客户端第一次向服务器发送消息的时候
 *   2. 服务器会判断此客户端是否设置过用户名，如果没有设置过，则把第一条消息当成用户名，如果设置过，就当成普通消息
 */
