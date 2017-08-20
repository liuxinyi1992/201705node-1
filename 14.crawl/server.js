let express = require('express');
let {Movie} = require('./model')
let app = express();
app.get('/',function(req,res){
  Movie.find({},function(err,movies){
    res.json(movies);
  })
});
app.listen(8080);