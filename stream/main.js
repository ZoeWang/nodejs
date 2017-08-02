var fs = require("fs");
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('input.txt');

// 设置编码为utf8
readerStream.setEncoding('UTF8');

// 处理流事件——> data, end, and error
readerStream.on('data', function(chunk) {
	data += chunk;
});

readerStream.on('end', function(){
	console.log(data);
});

readerStream.on('error', function(err) {
	console.log(err.stack);
});

console.log("可读流执行完毕");


// 写入流
var data2 = '写入流';

 // 创建一个可以写入的流，写入到文件 output.txt 中
var writeStream = fs.createWriteStream('output.txt');

// 使用utf8 编码写入数据
writeStream.write(data2, 'UTF8');

// 标记文件末尾
writeStream.end();

// 处理流事件 --> data, end, and error
writeStream.on('finish', function() {
    console.log("写入完成。");
});

writeStream.on('error', function(err){
   console.log(err.stack);
});

console.log("写入流执行完毕");


// 管道流操作实例
var r = fs.createReadStream('input.txt');
var w = fs.createWriteStream('output.txt');
r.pipe(w);
console.log('管道流实例执行完毕');



