let express = require('express');
let router = express.Router();
router.get('/signup',function(req,res){
  //1参数是模板的相对路径，相对于模板根目录的路径
  res.render('user/signup',{title:'用户注册'});
});
router.post('/signup',function(req,res){
  res.send('提交注册表单');
});
router.get('/signin',function(req,res){
  res.send('登录');
});
router.post('/signin',function(req,res){
  res.send('提交登录表单');
});
module.exports = router;