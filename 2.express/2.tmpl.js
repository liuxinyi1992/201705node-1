let tmpl = 'I like ${name} is ${age}';
//let data = {name:'zf',age:8};
let name = 'zfpx';
let age = 8;
function render(tmpl){
   return tmpl.replace(/\$\{(\w+)\}/g,function(){
     return eval(arguments[1]);
   });
}
console.log(render(tmpl));;
//I like zf