//Modules
var http = require('http');
var url=require('url');
var path=require('path');
var fs=require('fs'); 

//Array of Mime types 
var mimeTypes={
	"html":"text/html",
	 "jpeg":"text/jpeg",
	 "jpg":"text/jpeg",
	 "png":"text/png",
	 "js":"text/javascript",
	 "css":"text/css",
}

http.createServer(function (request, response) {
	//get the url
  var uri=url.parse(request.url).pathname;

  //if you type http://127.0.0.1:8124/index.html the result will be uri=/index.html
var fileName=path.join(process.cwd(),unescape(uri));
//process.cwd() will return current working directory of the process ex for me 
// [/Users/bachiri/Desktop/Projects/node.js-Samples/simpleServer]
var stats;
//this variable will check if the file exist or not 

try{
	stats=fs.lstatSync(fileName);
	//Returns an instance of fs.Stats 
}catch(e){
	response.writeHead(404,{'Content-Type':'text/plain'});
	response.write('404 Not Found');
	response.end();
	return;
} 

// check if it File directory
//if File
if(stats.isFile()){


}//if Directory
else if (stats.isDirectory()){



}else{
response.writeHead(500,{'Content-Type':'text/plain'});
	response.write('500 Internal Error');
	response.end();


}




  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('process.cwd =>:'+process.cwd());
  response.write('\n uri :=>'+uri);
  response.write('\n FileName :=>'+fileName);
  response.end('\n unescape(uri) :=>'+unescape(uri));
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');


