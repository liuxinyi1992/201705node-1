let express = require('express');
//使用express的Router方法生成一个路由中间件的实例
let router = express.Router();//mini-app
//此处的路径是完整的url路径去掉前缀的路径
//   /soup/eight
router.get('/eight',function(req,res){
  res.send('八宝粥');//send会自动处理编码
});
module.exports = router;