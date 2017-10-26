/**
 * Created by lixinyi on 2017/10/26.
 */
/*
   ecmascript5 - window对象
   node - global对象
   一个文件就是一个模块
   每个模块都有自己的作用域
   声明一个变量a，他不是全局的，他只能在当前模块的作用下访问
 //   __filename:当前模块文件被解析过后的绝对路径
 //   __dirname:当前模块目录绝对路径
 */
/*
   模块加载系统
   requireJS cmd

   模块加载机制
   require中参数为模块的相对、绝对、或者node核心模块或者是node modules
   require('request'); //加载request module
   require('./module2.js'); // 找全名
   require('./module2'); // 如果未找到，会自动加上js后缀
   文件查找机制
   文件名称 -> .js -> .json -> .node
*/
// console.log(__filename);
