//app.get();   app内部维护了一个数组
let ware1 = (req,res,next)=>{
  setTimeout(function(){console.log(1);next();},3000)
}
let ware2 = (req,res,next)=>{
  setTimeout(function(){console.log(2);next();},2000)
}
let ware3 = (req,res,next)=>{
  setTimeout(function(){console.log(3);},1000)
}
let wares = [ware1,ware2,ware3];
let index = 0;
function next(){
  let ware = wares[index++];
  ware(null,null,next);
}
next();