/**
 * cheerio是一个在node里面使用的，类似于jquery的工具
 */
let cheerio = require('cheerio');
let html = `<li class="conLi conLiji">
  <em style="width:100px;text-align:left;padding-left:5px;">芹菜</em>
  <em style="width:80px;">0.60</em>
  <em style="width:80px;">0.80</em>
  <em style="width:80px;">1.00</em>
  <em style="width:80px;">普通</em>
  <em style="width:80px;">斤</em>
  <em style="width:106px;">2017-08-19</em>
</li>`;
//把html字符串转成一个jquery对象
let $ = cheerio.load(html);
$('li.conLiji em').each(function(index,item){
   //把原生的对象转成jquery对象
   let $this = $(item);
   console.log($this.text());//innerText

});



