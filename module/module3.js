/**
 * Created by lixinyi on 2017/10/26.
 */

/*
	一个模块中通过var声明的变量，不能直接被外部模块访问，那么怎么抛出呢？
	1、把定义的变量作为全局对象global的属性，但是一般不这样用
	2、通过module.exports对象抛出
 */

var a = 100;
// global.a = 100;
// console.log(exports === module.exports); true
// module.exports对象 如果被重写，那么上面则不对等了，破坏了指向关系，不推荐使用
// exports对象 如果被重写，那么上面也不对等了，同样的破坏了指向关系，不推荐使用
// 推荐在exports对象下扩展
exports.a = a;