//查询字符串
// http://localhost:8080/?name=zfpx&age=9
// k1=v1&k2=v2
let querystring = require('qs');
let obj = {name:'zfpx',age:8,home:{city:'北京'}};
let str = querystring.stringify(obj);
console.log(str);
console.log(querystring.parse(str));
