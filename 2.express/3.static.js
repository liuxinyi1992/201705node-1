let express = require('express');
let app = express();
let fs = require('fs');
let path = require('path');
//静态文件中间件
function static(dirname){
  return function(req,res,next){
    console.log(dirname);
    console.log(req.path);
    //先拼出绝对路径
    let filename = path.join(dirname,req.path);
    let index = filename.lastIndexOf('\\');
    //判断是否是文件
    if(filename.slice(index).indexOf('.')!=-1){
      //判断此文件是否存在
      let exists = fs.existsSync(filename);
      //如果存在则从硬盘里读出并返回
      if(exists){
        fs.createReadStream(filename).pipe(res);
      }else{
        next();
      }
    }else{
      next();
    }
  }
}
app.use(static(path.resolve('public')));
app.get('/',function(req,res){
  res.sendFile('./public/index.html',{root:__dirname})
});
app.listen(8080);