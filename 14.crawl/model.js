//1.引入mongoose
let mongoose = require('mongoose');
//2.连接数据库
let conn = mongoose.createConnection('mongodb://127.0.0.1/201705crawl');
//3.创建schema
let MovieSchema = new mongoose.Schema({
  name:String,
  url:String
});
//4.创建并导出Model
exports.Movie = conn.model('Movie',MovieSchema);
