let express = require('express');
let router = express.Router();
//存放着所有的用户信息
let users = [];
router.get('/signup', function (req, res) {
  //1参数是模板的相对路径，相对于模板根目录的路径
  //模板的路径一定是一个相对路径
  let error = req.cookies.error;
  //删除cookie
  res.clearCookie('error');
  res.locals.error = error;
  res.render('user/signup', {title: '用户注册'});
});
router.post('/signup', function (req, res) {
  let user = req.body;// {username,password}
  let oldUser = users.find(item=>item.username == user.username);
  if(oldUser){
    //会把cookie发给客户端，客户端会保存在本地，下次再请求服务器的时候带回服务器
    res.cookie('error','此用户名已经被占用，请你换个名字吧，比如说'+user.username+'2');
    res.redirect('back');
  }else{
    users.push(user);//把新添加的用户添到数组中去
    // redirect 重新指向
    //放的是一个URL绝对路径，一定一定要以/开头
    res.redirect('/user/signin');
  }
});
router.get('/signin', function (req, res) {
  let error = req.cookies.error;
  res.render('user/signin', {title: '用户登录',error});
});
router.post('/signin', function (req, res) {
  let user = req.body;
  //res.render redirect 都会包含一个 res.end操作
  let oldUser = users.find(item => item.username == user.username && item.password == user.password);
  if (oldUser) {
    res.cookie('success','恭喜你登录成功');
    res.cookie('username',user.username);
    res.redirect('/');
  } else {
    res.cookie('error','你的用户名和密码输入不正确，请重新输入');
    res.redirect('back');
  }
});
module.exports = router;