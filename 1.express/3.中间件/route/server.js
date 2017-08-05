/**
 * 路由中间件
 * 设计原则
 * 开闭原则 对修改关闭，对扩展开放
 */
let express = require('express');
let app = express();
//写中间件的时候一定或者结束响应，或者调用next
//引入粥的路由中间件
let soup = require('./routes/soup');
//引入面条的路由中间件
let noodles = require('./routes/noodles');
//使用中间件的时候可以指定二个参数，第一个参数是
//app做判断的时候会判断请求的路径是否以/soup开头，如果是的话，会执行第二个路由中间件
app.use('/soup',soup);
app.use('/noodles',noodles);
app.listen(8080);
