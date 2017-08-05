let express = require('express');
let router = express.Router();
router.get('/big',function(req,res){
  res.send('大碗八宝粥');
});
router.get('/small',function(req,res){
  res.send('小碗八宝粥');
});
module.exports = router;