var http = require("http");
http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type":"text/html"});
	response.write("Hello World!");
	response.end();
}).listen(8000);


// mongo DB express angularjs nodejs

// nodejs执行环境
// Google V8
// 文件系统
// 网络功能（HTTP/TCP/UDP/DNS/TLS/SSL）
// 二进制数据 
// 数据流
// 加密与解密

// 调试工具
// webStorm nodemon node-inspector

// Mac 安装环境
// Xcode_6.3.dmg 2.77G
// homebrew  复制 ruby 那一行代码 到当前终端安装
// 在这个下面安装 node.js  命令 brew install nodejs
// 之后安装 文档数据库 mongodb 命令 brew install mongodb 
// 安装缓存 redis 命令 brew install redis

// 查看redis客户端版本  redis-cli --version
// 创建一个文件 vi test.js

// webStorm 安装 官网下载

// $ npm install express --save  安装后在node_modules 文件夹下面
