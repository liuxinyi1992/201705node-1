let path = require('path');
//都是从当前目录出发，获得绝对路径
//只管解析路径，跟硬盘上是否有此路径没有一点关系
console.log(path.resolve('../views'));
console.log(path.join(__dirname, '../views'));