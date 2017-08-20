//这个模块用来写日志的
//console.log();
let debug = require('debug');
let loggerA = debug('loggerA');
let loggerB = debug('loggerB');
/**
 * debug打印日志的时候是判断当前环境变量中DEBUG变量的值和当前此日志记录器的名称是否相匹配，如果匹配则在控制台输出日志，如果不匹配则什么都不做
 * windows下设置环境变量的方法
 *  set   DEBUG=loggerA
 *  echo %DEBUG%
 * mac下设置环境变量的方式
 *  export DEBUG=loggerA
 *  echo $DEBUG
 */
loggerA('a');
loggerB('b');
