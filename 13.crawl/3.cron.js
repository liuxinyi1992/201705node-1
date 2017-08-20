let CronJob = require('cron').CronJob;
/**
 * 1. 参数是任务的执行时机
 * 2. 任务的定义
 *  秒   分钟  小时  日期    月份  星期
 * 0-59 0-59  0-23  1-31  0-11  0-6
 * * 代表通配符，任何的值都能匹配
 * 固定的值
 * 范围 表示在指定范围内执行
 * 枚举值 任何一个值
 * 星/5 每隔多长时间执行一次 每隔5秒执行一次
 * 规定 每周一或周五，晚上10点每分钟2次
 *
 */
let job = new CronJob('*/30 * 22 * * 1,5',function(){
  console.log(new Date().toLocaleString());
});
job.start();
