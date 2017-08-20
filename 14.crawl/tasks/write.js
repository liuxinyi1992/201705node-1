let {Movie} = require('../model');
let write = (movies,cb)=>{
 Movie.create(movies,cb);
}
module.exports = write;