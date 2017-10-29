/**
 * Created by lixinyi on 2017/10/29.
 */
/*
	buffer类
	用于操作二进制数据流
 */
//以下 new 这种方式已经被旧版本node 废弃了
//new Buffer(siez); 创建buffer对象 为之分配一个内存空间，长度固定，无法更改
//new Buffer(array);
new Buffer(buffer)
var bf = new Buffer(5);
console.log(bf); //<Buffer 75 63 74 42 79>
bf[1] = 2;
// bf[6] = 2; 长度固定 6 读取不到
console.log(bf); //<Buffer 75 02 74 42 79>

// 新版使用
/*
	类方法：Buffer.from(buffer) array arrayBuffer string

 */