const http = require('http');


let server = http.createServer((request, response)=>{
	if (request.url === '/'){
		response.writeHead(200,{'content-type' : 'text/html'});
		response.write('<html><body><h1>Hello World</h1><p>This is root page</p></body></html>')
		response.end();
	}else if(request.url === '/profile'){
		response.writeHead(200,{'content-type' : 'text/html'});
		response.write('<html><body><h1>Hello Iims</h1><p>This is iims page</p></body></html>')
		response.end();
	}	
	else{
		response.writeHead(404,{'content-type': 'text'/'html'});
		response.write('<html><body><h1>404 Page not found</h1><p></body></html>')
	}
});

server.listen(8000);
console.log('Server is running on port:', 8000);