let files = [
  {filename:'1.txt',content:'1'},
  {filename:'2.txt',content:'2'},
  {filename:'3.txt',content:'3'}
]
let fs = require('fs');
//1.回调嵌套
//2.事件
/*let EventEmitter = require('events');
let e = new EventEmitter();
let count =0;
e.on('write',function(){
  if(++count==3){
    console.log('全部写完了');
  }
});
e.emit('write');
e.emit('write');
e.emit('write');*/
//3.promise
/*let write = function(file){
   return new Promise(function(resolve,reject){
     fs.writeFile(file.filename,file.content,function(err,data){
       if(err)
         reject(err)//变成失败态
       else
         resolve(data);//变成成功态
     })
   });
}
let promises = files.map(file=>write(file));
Promise.all(promises).then(function(){
  console.log('ok');
});*/
//4.
let async = require('async');
//用来迭代一个数组，会把入数组中的每个元素依次传入第二个参数的函数里
//item指是每个元素 cb是一个回调函数，调用它则意味着异步任务执行完毕
async.forEach(files,function(item,cb){
  fs.writeFile(item.filename,item.content,cb);
},function(err){
  console.log('全部写入完毕');
});
