/**
 * 1. /users/add?name=zfpx  增加用户 {id:1,name:'zfpx'}
 * 2. /users 查看所有的用户
 * 3. /users/:id 查看某个id对应的用户
 */
let users = [];
let express = require('express');
let app = express();
app.use(function(req,res,next){
  res.setHeader('Content-Type','text/html;charset=utf-8');
  next();
});
//我们可以自己写一个res.send方法
//中间件一个用途就是添加一些公用的方法， 在路由函数里调用
app.use(function(req,res,next){
  res.s = function(){

  }
});
app.get('/users/add',function(req,res){
  //先从查询参数中拿到name的值
  let name = req.query.name;
  //拼出一个对象
  let user = {name};
  //给新添加的对象增加ID属性
  user.id = users.length>0?users[users.length-1].id+1:1;
  //把新添加的用户添加到用户数组中
  users.push(user);
  res.end('添加用户成功');
});
app.get('/users',function(req,res){
  //end只能接收字符串或者Buffer,不能接收对象等其它类型
  //res.send方法可以接收任意类型的参数，包括对象或数组
  res.send(users);
});
app.get('/users/:id',function(req,res){
  //先拿到路径参数中的ID属性
  let id = req.params.id;
  //获得对应的用户
  let user = users.find(function(item){
    return item.id == id;
  });
  res.send(user);
});
app.listen(8080);

