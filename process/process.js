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
    i/o操作方法 这个东西就比较厉害了
    。。。
    其实就是一个进程对象
 */
// console.log(process.argv);

// i/o输入输出对象
// 输出 stdout
function Log(data) {
	process.stdout.write(data);
}
Log('哈喽啊');

// 输入 stdin (旧版本node 输入流默认关闭的 需要process.stdin.resume()开启)
// chunk 为用户输入的值
process.stdin.on('data',function (chunk) {
	console.log('用户操作键盘输入了：'+chunk);
});
