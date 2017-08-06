let express = require('express');
//生成一个路由中间件的实例
let router = express.Router();
//定义一个路由，当客户端以GET方式访问/路径的时候，执行对应的回调函数
router.get('/',function(req,res){
  res.send('首页');
});
module.exports = router;
