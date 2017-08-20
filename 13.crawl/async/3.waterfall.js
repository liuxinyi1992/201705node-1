/**
 * 瀑布 从上往下落水
 * 也是串行的，也就是说需要上一个执行完成后才能执行下一个任务
 * 但是上一个任务的返回值会传给下一个任务
 */
let async = require('async');
async.waterfall([
  //数组中第一个函数只有一个参数
  function (cb) {
    setTimeout(function () {
      console.log('蛋');
      cb(null, '蛋');
    }, 2000)
  },
  //从第二个任务开始，有两个参数，第1个参数就是上一下任务的返回值，第二个参数才是 cb
  function (data, cb) {
    setTimeout(function(){
        console.log('炒'+data);
        cb('我错了','炒'+data);
    },1000)
  },
  function(data,cb){
    setTimeout(function(){
      console.log('吃'+data);
      cb('吃'+data);
    },2000)
  }
], function (err, result) {
  console.log(err);
  console.log(result);
});
