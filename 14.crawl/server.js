let express = require('express');
let {Movie} = require('./model');
let start = require('./tasks/main');
let app = express();
app.get('/',function(req,res){
  Movie.find({},function(err,movies){
    res.json(movies);
  })
});
app.listen(8080);

let CronJob = require('cron').CronJob;
let job = new CronJob("0 0 * * * * ",start);
job.start();