/**
 * cheerio是一个在node里面使用的，类似于jquery的工具
 */
let cheerio = require('cheerio');
let html = `<span class="text_1"><ul>
<li style="overflow:hidden"><a href="/news/marketanalysis/view/1470676.shtml" target="_blank"><span class="six"></span>每周市场动态（2017.8.5-2017.8.11）</a></li><li style="overflow:hidden"><a href="/news/marketanalysis/view/1470147.shtml" target="_blank"><span class="six"></span>2017年7月份猪肉价格走势分析</a></li><li style="overflow:hidden"><a href="/news/marketanalysis/view/1470146.shtml" target="_blank"><span class="six"></span>2017年7月份鸡蛋价格走势分析</a></li><li style="overflow:hidden"><a href="/news/marketanalysis/view/1470112.shtml" target="_blank"><span class="six"></span>每周市场动态（2017.7.29-2017.8.4）</a></li><li style="overflow:hidden"><a href="/news/marketanalysis/view/1469802.shtml" target="_blank"><span class="six"></span>每周市场动态（2017.7.22-2017.7.28）</a></li>		
        </ul></span>`;
//把html字符串转成一个jquery对象
let $ = cheerio.load(html);
$('li.conLiji em').each(function(index,item){
   //把原生的对象转成jquery对象
   let $this = $(item);
   console.log($this.text());//innerText

});



