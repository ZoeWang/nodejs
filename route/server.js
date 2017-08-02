// http://localhost:8888/start?foo=bar&hello=world
// url.parse(string).query    = foo=bar&hello=world
// url.parse(string).pathname    = start
// querystring(string)["foo"]    =  bar
// querystring(string)["hello"]   =  world

var http = require("http");
var url = require("url");

function start(route) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;

	    console.log("Request for " + pathname + " received.");

	    route(pathname);

	    response.writeHead(200, {"Content-Type": "text/plain"});
	    response.write("Hello route");
	    response.end();
	}

	http.createServer(onRequest).listen(1337);
	console.log("Server has started.");
}

exports.start = start;