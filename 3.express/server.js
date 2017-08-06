/**
 * GET /user/signup 获取注册表单
 * POST /user/signup 提交注册表单
 * GET /user/signin 获取登录表单
 * POST /user/signin 提交登录表单
 * GET / 首页(欢迎页)
 */
//express其实是一个函数
let express = require('express');
//index提供首页的路由
let index = require('./routes/index');
//user提供的是跟用户相关的路由
let user = require('./routes/user');
//执行后又返回一个函数，请求监听函数
let app = express();
app.use('/',index);
// /user指的是前缀，就是说以/user开头
app.use('/user',user);
app.listen(8080);