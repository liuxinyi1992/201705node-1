let request = require('request');
let cheerio = require('cheerio');
let iconv = require('iconv-lite');
let url = 'http://top.baidu.com/category?c=1';
//手工强行指定编码为null,这样的话request模块将不再帮我们转换成字符串
request({url,encoding:null},function(err,response,body){
  if(!err && response.statusCode == 200){
    //把GBK格式的buffer转成utf8的字符串
    body = iconv.decode(body,'gbk');
    let $ = cheerio.load(body);
    let movies = [];
    $('.hd .title a').each(function(){
      let $this = $(this);
      let movie = {
        name:$this.text(),
        url:$this.attr('href')
      }
      movies.push(movie);
    });
    console.log(movies);
  }
});

