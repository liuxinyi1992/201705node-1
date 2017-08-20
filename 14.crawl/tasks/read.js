/**
 * 读取网页数据，返回电影列表
 */
let request = require('request');
let iconv = require('iconv-lite');
let cheerio = require('cheerio');
let debug = require('debug')('crawl:read');
let read = (url,cb)=>{
  request({url,encoding:null},function(err,response,body){
    if(!err && response.statusCode == 200){
      //把GBK格式的Buffer转成UTF8字符串
      body = iconv.decode(body,'gbk');
      //把html字符串转成jquery对象
      let $ = cheerio.load(body);
      let movies = [];
      //从中选择我们需要的集合
      $('.keyword a.list-title').each(function(){
        let $this = $(this);//先取得当前迭代的对象
        let movie = {
          name:$this.text(),//A标签 的文本就是电影名称
          url:$this.attr('href') //A标签 href就是超链接
        }
        debug(`读到电影: ${movie.name}`);
        movies.push(movie);
      });
      cb(err,movies);
    }
  });
}

/*read('http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1',function(err,movies){
  console.log(movies);
});*/
module.exports = read;