let express = require('express');
let router = express.Router();
router.get('/signup',function(req,res){
 res.send('注册');
});
module.exports = router;