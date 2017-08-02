// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
// 绑定事件及事件的处理程序
// eventEmitter.on('eventName', eventHandler);
// 触发事件
// eventEmitter.emit('eventName');

// 创建事件处理程序
var	connectHandler = function connected() {
	console.log('连接成功');

	// 触发 data_received事件
	eventEmitter.emit('data_received');
} 

// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);

// 使用匿名函数绑定data_received 事件
eventEmitter.on('data_received', function() {
	console.log('数据接收成功');
});


// 触发 connection 事件
eventEmitter.emit('connection');

console.log('程序执行完毕');


// node 执行异步操作的函数将回调函数作为最后一个参数， 回调函数接收错误对象作为第一个参数
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
   if (err){
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
});
console.log("The program execution is completed");