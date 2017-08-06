let str = 'name@zfpx; age@8';
let querystring = require('querystring');
//第二个参数是指的不同字段之间的分隔符,如果没有给默认就是&
//第三个参数是字段的key和value之间的分隔符，如果没有默认没有传默认就是=
console.log(querystring.parse(str,'; ','@'));