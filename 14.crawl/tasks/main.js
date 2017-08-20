let {Movie} = require('../model');
let read = require('./read');
let write = require('./write');
let async = require('async');
let debug = require('debug')('crawl:main');
const url = 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
function start(){
  async.waterfall([
    //为了防止出现重复数据，我们在任务的最开始先清空一个集合
    function(cb){//第一个任务只有一个参数
       Movie.remove({},cb);
    },
    function(data,cb){
       read(url,cb);// err,movies
    },
    function(movies,cb){
      write(movies,cb);
    }
  ],function(err){
    debug('全部任务完成!');
    process.exit(0);//正常结束当前进程
  });
}
//开始执行任务
start();
module.exports = start;