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


//Create Server 
