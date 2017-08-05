//如果写的是一个模块的名字的话，会先从内置模块里找，再去node_modules下面找
let express = require('express');
//express是一个方法(函数),这个方法可以执行，执行后会返回一个新函数
let app = express();
//监听8080端口
app.listen(8080);

