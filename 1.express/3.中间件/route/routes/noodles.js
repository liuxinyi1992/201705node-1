let express = require('express');
let router = express.Router();
//当客户端访问 /noddles/knife的话会交由此函数处理
router.get('/knife',function(req,res){
  res.send('刀削面');
});
router.get('/pull',function(req,res){
  res.send('拉面');
});
module.exports = router;