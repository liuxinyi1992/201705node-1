/**
 * 编写一个socket.io应用
 * socket.io+express联系使用
 **/
let express = require('express');
let path = require('path');
let {Message} = require('./model');
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
//这里记录了所有的用户名和它们的socket对象间的对应关系
let sockets = {};
io.on('connection', function (socket) {
  //设置一个变量，表示此客户端的用户名,每个客户端都有自己的名字，所以应该是私有变量
  let username;
  socket.on('message', function (msg) {
    //判断此客户端是第一次消息，还是不是第一次，如果是第一次，则设置用户名，如果不是第一次则使用用户名
    if (username) {//正常发言
      let reg = /@([^\s]+) (.+)/;//@1 hello
      let result = msg.match(reg);
      if(result){//如果为true就是匹配上，那么就是私聊
        let toUser = result[1];//想私聊对方的用户名
        let content = result[2];//对方的内容
        //通过用户名找到对方的socket,然后发送消息
        sockets[toUser].send({
          username,content,createAt:new Date().toLocaleString()
        });
      }else{
        //广播,通知所有的客户端 。用户名是当前用户， 内容就是本次消息
        Message.create({username,content:msg},function(err,doc){
          io.emit('message',doc);
        });
      }
    } else {//没有设置过的话就是第一次发言。
      username = msg;//把消息当成用户名
      //把此用户名它的socket对象关联在起来了，
      sockets[username] = socket;
      //当客户端第一次来的时候，要广播一条消息
      io.emit('message',{username:'系统',content:`欢迎${username}加入本聊天室`,createAt:new Date().toLocaleString()});
    }
  });
  //监听客户端发过来的要求获得所有的最近20条消息的事件
  socket.on('getAllMessages',function(){
    Message.find({}).sort({createAt:-1}).limit(20).exec(function(err,messages){
      // 最新的在最前面
      messages.reverse();// 需要再倒序排列一下
      socket.emit('allMessages',messages);
    });
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
 * 三、私聊
 *   1.当点击用户名的时候，在输入框架显示  @用户名 ，等待用户输入想说的话。
 *   2. 当回车的时候把消息发给服务器，服务器来判断是否是私聊。如果是的话，只把此消息发给对应用户。其它人则看不到。
 * 四、数据持久化，当服务器收到消息的时候保存到数据里，以后每次客户端初次访问服务器的时候把最近的20条消息发送给客户端
 *
 */
