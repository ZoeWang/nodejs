// 服务器是如何处理请求的
// var http = require("http");

// http.createServer(function(request, response){
// 	response.writeHead(200, {"Content-Type":"text/plain"});
// 	response.write("Hello World");
// 	response.end();
// }).listen(8888);

// 包装到模块中
// function start(){
// 	//回调函数
// 	function onRequest(request, response) {
// 		console.log("Request received.");
// 		response.writeHead(200,{"Content-Type":"text/plain"});
// 		response.write("Hello World");
// 		response.end();
// 	}

// 	http.createServer(onRequest).listen(8888);
// 	console.log("Server has started.");
// }

// exports.start = start;




// 如何来进行路由
// 以非阻塞操作进行请求响应
// var http = require("http");
// var url = require("url");

// function start(route, handle){
// 	function onRequest(request, response){
// 		var pathname = url.parse(request.url).pathname;
// 		console.log("Request for "+ pathname +" received.");

// 		route(handle, pathname, response);

// 	}

// 	http.createServer(onRequest).listen(8888);
// 	console.log("Server has started.");
// }

// exports.start = start;


// 处理post数据
var  http = require("http");
var url = require("url");

function start(route, handle){
	// function onRequest(request, response){
	// 	var postData = "";
	// 	var pathname = url.parse(request.url).pathname;
	// 	console.log("Request for "+ pathname +" received.");

	// 	request.setEncoding("utf8");

	// 	request.addListener("data", function(postDataChunk){
	// 		postData += postDataChunk;
	// 		console.log("Received POST data chunk '"+ postDataChunk+ "'.");
	// 	});

	// 	request.addListener("end", function(){
	// 		route(handle, pathname, response, postData);
	// 	});
	// }
	function onRequest(request, response){
		var pathname = url.parse(request.url).pathname;
		console.log("Request for "+ pathname +" received.");
		route(handle, pathname, response, request);
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;







