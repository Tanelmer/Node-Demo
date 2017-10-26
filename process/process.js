/**
 * Created by lixinyi on 2017/10/26.
 */
/*
	process对象是一个全局对象
	重要属性
	argv 属性 一个包含命令行参数的数组.
    第一个元素为process.execPath。如果需要获取argv[0]的值请参见 process.argv0。
    第二个元素为当前执行的JavaScript文件路径。剩余的元素为其他命令行参数。
    execPath 属性 返回启动Node.js进程的可执行文件所在的绝对路径。
    env 属性 返回用户环境信息
    i/o操作方法
    。。。
    其实就是一个进程对象
 */
console.log(process.argv);