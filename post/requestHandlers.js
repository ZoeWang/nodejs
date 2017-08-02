//Node.js模块child_process实现一个既简单又实用的非阻塞操作：exec()
// var exec = require("child_process").exec;
// // 每一个请求处理程序添加一个占位用函数
// function start(response){
// 	console.log("Request handler 'start' was called.");

// 	// exec("ls -lah", function(error, stdout, stderr){
// 	// 	response.writeHead(200,{"Content-Type":"text/plain"});
// 	// 	response.write(stdout);
// 	// 	response.end();
// 	// })

// 	//延迟10秒
// 	exec("find /",
// 		{ timeout:10000, maxBuffer:20000*1024},
// 		function(error, stdout, stderr){
// 			response.writeHead(200,{"Content-Type":"text/plain"});
// 			response.write(stdout);
// 			response.end();
// 		});
// }

// function upload(response){
// 	console.log("Request handler 'upload' was called.");
// 	response.writeHead(200,{"Content-Type":"text/plain"});
// 	response.write("Hello World");
// 	response.end();
// }

// exports.start = start;
// exports.upload = upload;

//实例：处理post 请求
var querystring = require("querystring"),
	fs = require("fs"),
	formidable = require("formidable");

// function start(response, postData){
// 	console.log("Request handler 'start' was called.");

// 	var body = '<html>'+
// 		'<head>'+
// 		'<meta http-equiv="Content-Type" content="text/html; '+
// 		'charset=UTF-8" />'+
// 		'</head>'+
// 		'<body>'+
// 		'<form action="/upload" enctype="multipart/form-data" method="post">'+
// 		'<textarea name="text" rows="20" cols="60"></textarea>'+
// 		'<input type="submit" value="Submit text" />'+
// 		'</form>'+
// 		'</body>'+
// 		'</html>';

// 		response.writeHead(200,{"Content-Type":"text/html"});
// 		response.write(body);
// 		response.end();
// }
function start(response){
	console.log("Request handler 'start' was called.");

	var body = '<html>'+
		'<head>'+
		'<meta http-equiv="Content-Type" content="text/html; '+
		'charset=UTF-8" />'+
		'</head>'+
		'<body>'+
		'<form action="/upload" enctype="multipart/form-data" method="post">'+
		'<input type="file" name="upload" multiple = "multiple">'+
		'<input type="submit" value="Submit text" />'+
		'</form>'+
		'</body>'+
		'</html>';

		response.writeHead(200,{"Content-Type":"text/html"});
		response.write(body);
		response.end();
}

// function upload(response, postData){
// 	console.log("Request handler 'upload' was called.");
// 	response.writeHead(200,{"Content-Type":"text/plain"});
// 	response.write("You've sent the text: "+querystring.parse(postData).text);
// 	response.end();
// }
function upload(response, request){
	console.log("Request handler 'upload' was called.");

	var form = new formidable.IncomingForm();
	console.log("about to parse");
	form.parse(request, function(error, fields, files){
		console.log("parsing done");
		fs.renameSync(files.upload.path,"/tmp/test.png");
		response.writeHead(200,{"Content-Type":"text/plain"});
		response.write("received image:<br/>");
		response.write("<img src='/show' />");
		response.end();
	})

	
}


// function show(response, postData){
// 	console.log("Request handler 'show' was called.");
// 	fs.readFile("/tmp/test.png","binary",function(error, file){
// 		if(error){
// 			response.writeHead(500,{"Content-Type":"text/plain"});
// 			response.write(error + "\n");
// 			response.end();
// 		}else{
// 			response.writeHead(200,{"Content-Type":"image/png"});
// 			response.write(file,"binary");
// 			response.end();
// 		}
// 	});
// }

function show(response){
	console.log("Request handler 'show' was called.");
	fs.readFile("/tmp/test.png","binary",function(error, file){
		if(error){
			response.writeHead(500,{"Content-Type":"text/plain"});
			response.write(error + "\n");
			response.end();
		}else{
			response.writeHead(200,{"Content-Type":"image/png"});
			response.write(file,"binary");
			response.end();
		}
	});
}

exports.start = start;
exports.upload = upload;
exports.show = show;
