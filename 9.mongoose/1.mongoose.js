//1. 安装 mongoose  npm i mongoose
//2.引入mongoose
let mongoose = require('mongoose');
//3.连接数据库
//创建连接的时候，参数是连接字符串 mongodb://IP或域名:端口号/数据库名称
//协议定死，IP或域名写你要操作的IP或域名 数据库名称可以事先不存在,实际写入的时候，如果mongodb发现此数据库不存在，则会帮你自动创建
//此方法会返回一个连接对象
let conn = mongoose.createConnection('mongodb://127.0.0.1/201705node');

//4.定义集合的骨架模型,规定了各个集合中的文档的属性名和属性的类型
//规定用户集合中的文档有哪些属性?
//schema只规定名字和类型，但是它并不能操作数据库，与数据连接没有关系
let UserSchema = new mongoose.Schema({
  username:String,
  age:Number
});
//5.定义用户的模型,模型是通过数据库连接创建的，可以关联某个数据库并操作某个数据库
//模型名一般首字母要大写,定义模型有两个参数，1 模型名称 2 此模型对应Schema
//集合名称=模型名->转小写(user)->复数(users)
let User = conn.model('User',UserSchema);
//1.如何向数据库的集合插入一个文档对象, create方法的意思是向数据库的users集合中插入一个文档
//2. 如何写入失败了会把失败的原因放在err里
//3. doc是保存成功之后文档对象
//4. 保存对象的时候，会忽略掉没有在schema定义的字段,如果给的字段少于schema中定义的字段，则只会保存提供的字段,如果给定的字段类型不匹配，则会尝试类型转换，如果转换成功则还是成功保存，如果转换失败则报错
//Cast to Number failed for value "aa200" at path "age"'
/*User.create({username:'zfpx4',age:"aa200"},function(err,doc){
  console.log(err);//null意味着没有错误
  console.log(doc);
  /!**
   * { __v: 0,//mongodb生成
      username: 'zfpx1',
      age: 1,
      // identify 标识 主键 最主要的键
      //每个文档都有一个唯一的，与业务无关的，每当保存文档的时候，mongodb会自动帮生个文档生成一个唯一的，无业务含义的_id字段。通过它标识每个文档
      _id: 598e7632d5fdf415904843db
      }
     外键指的是存在当前集合中的别的集合的主
   *!/
});*/

//修改文档
//1.参数是更新的条件，是一个对象
//2.参数是更新后的值,指定要更新哪个字段，改成什么值
//3.修改的时候默认只匹配第一条
//4. multi 多个的意思 multiply multiple
User.update({username:'zfpx1'},{age:11},{multi:true},function(err,result){
  console.log(err);
  //ok=1表示成功
  // nModified=1表示修改成功的条数为1条,如果修改前的值和修改后的值是一样，则不需要发生修改
  // n 表示需要修改的条数 1,其实就是根据条件匹配的条数
  console.log(result);//{ ok: 1, nModified: 1, n: 1 }
});
