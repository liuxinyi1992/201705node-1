/**
 * 路由中间件
 */
let express = require('express');
let app = express();
//引入粥的路由中间件
let soup = require('./routes/soup');
//引入面条的路由中间件
let noodles = require('./routes/noodles');
//使用中间件的时候可以指定二个参数，第一个参数是
//app做判断的时候会判断请求的路径是否以/soup开头，如果是的话，会执行第二个路由中间件
app.use('/soup',soup);

app.listen(8080);
