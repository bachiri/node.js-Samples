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
	//if you type http://127.0.0.1:8124/index.html the result will be uri=/index.html
var uri=url.parse(request.url).pathname;
 

	//process.cwd() will return current working directory of the process ex for me 
	// [/Users/bachiri/Desktop/Projects/node.js-Samples/simpleServer]
var fileName=path.join(process.cwd(),unescape(uri));
	
	//this variable will check if the file exist or not 
var stats;
	

try{//Returns an instance of fs.Stats 
	stats=fs.lstatSync(fileName);
	
}catch(e){
	response.writeHead(404,{'Content-Type':'text/plain'});
	response.write('404 Not Found');
	response.end();
	return;
} 

	// check if it File directory
	//if File
if(stats.isFile()){
		//get The mime type from extension 
	var mimeType=mimeTypes[path.extname(fileName).split(".").reverse()[0]];
	response.writeHead(200,{'Content-Type':mimeType});

		//Create var stream 
	var fileStream=fs.createReadStream(fileName);
	


	//Piping streams is taking the output of one stream and feeding it into the input of another.
	//so from fileStrem to response
	/*	___________         ___________	
		|fileStream| Pipe()|response   |
		|__________|===>   |___________|*/
	fileStream.pipe(response);



}//if Directory
else if (stats.isDirectory()){



}else{
response.writeHead(500,{'Content-Type':'text/plain'});
	response.write('500 Internal Error');
	response.end();


}




 
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');


