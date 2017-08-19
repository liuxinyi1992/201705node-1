let mongoose = require('mongoose');
mongoose.Promise = Promise;
let conn = mongoose.createConnection('mongodb://127.0.0.1/201705chat');
//定义模型骨架
let MessageSchema = new mongoose.Schema({
  username:String,//用户名
  content:String,//内容
  createAt:{type:Date,default:Date.now}//创建的时间
});
//定义并且导出一个模型，第1参数是模型的名称 第2参数是骨架模型
exports.Message = conn.model('Message',MessageSchema);
