var http= require ('http');
var server = http.createServer(function(re,res)
{
	res.writeHead(200,{
		'Content-Type':'Text/html'
	})
	res.write(re.url);
	res.write('<h1>hello world</h1>');
	res.end();
})
server.listen(8000);
console.log('server running');