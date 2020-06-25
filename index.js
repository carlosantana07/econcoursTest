
const port = process.env.PORT || 1337;


// HTTP Module for Creating Server and Serving Static Files Using Node.js
// Static Files: HTML, CSS, JS, Images
// Get Complete Source Code from Pabbly.com

var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(req, res){
    

    if(req.url === "/"){
        fs.readFile("./acceuil.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });
    }else if(req.url.match("\.css$")){
        var cssPath = path.join(__dirname, './', req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "text/css"});
        fileStream.pipe(res);

    }else if(req.url.match("\.html$")){
        var htmlPath = path.join(__dirname, './', req.url);
        var fileStream = fs.createReadStream(htmlPath);
        res.writeHead(200, {"Content-Type": "text/html"});
        fileStream.pipe(res);
    }else if(req.url.match("\.js$")){
        var jsPath = path.join(__dirname, './', req.url);
        var fileStream = fs.createReadStream(jsPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "text/js"});
        fileStream.pipe(res);

    }else if(req.url.match("\.png$")){
        var imagePath = path.join(__dirname, './', req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "image/png"});
        fileStream.pipe(res);
    }else if(req.url.match("\.jpg")){
        var imagePath = path.join(__dirname, './', req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "image/jpg"});
        fileStream.pipe(res);
    }else if(req.url.match("\.woff?v=4.4.0$")){
        var fontPath = path.join(__dirname, './', "fonts/fontawesome-webfont.woff");
        var fileStream = fs.createReadStream(fontPath);
        res.writeHead(200, {"Content-Type": "application/font-woff"});
        console.log(fontPath);
        fileStream.pipe(res);
    }else if(req.url.match("\.woff2?v=4.4.0$")){
        var fontPath = path.join('./fonts/fontawesome-webfont.woff2');
        var fileStream = fs.createReadStream(fontPath);
        res.writeHead(200, {"Content-Type": "application/font-woff2"});
        console.log("font2: "+fontPath);
        fileStream.pipe(res);
    }else if(req.url.match("\.ttf$")){
        var fontPath = path.join('./', req.url);
        var fileStream = fs.createReadStream(fontPath);
        res.writeHead(200, {"Content-Type": "application/font-woff2"});
        console.log("font2: "+fontPath);
        fileStream.pipe(res);
    }else{
        res.writeHead(404, {"Content-Type": "text/html"});
        
    res.end("Ressources: "+ req.url);
    }

}).listen(port);

/*const http = require("http"),
      fs = require("fs"),
      path = require("path"),
      log = console.log;

//this will response with file type with specifiq content and encode
function response(res,file,contentType,encode){
    if(file != "404"){
        res.writeHead(200,{"Content-type":contentType});
        if(encode){
            var stream = fs.createReadStream(path.join(__dirname,file),encode);
        }else{
            var stream = fs.createReadStream(path.join(__dirname,file));
        }
        stream.pipe(res);
    }else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end(`
            ${contentType}
        `);
    }
}
//response as text 
function responseText(res,file,contentType){ response(res,file,contentType,"utf-8"); }
//response as binary
function responseBinary(res,file,contentType){response(res,file,contentType); }

//check the filetype and respose as the type..
function checkReqAndSend(req,res){
    if(req.match(/\.css$/)){
        responseText(res,req,"text/css");
    }else if(req.match(/\.js$/)){
        responseText(res,req,"text/js");
    }else if(req.match(/\.json$/)){
        responseText(res,req,"application/json");
    }else if(req.match(/\.html$/)){
        responseText(res,req,"text/html");
    }else if(req.match(/\.svg$/)){ //svg Binary file
        responseBinary(res,req,"image/svg+xml");
    }else if(req.match(/\.woff2$/)){
        responseBinary('/fonts/fontawesome-webfont.woff2','/fonts/fontawesome-webfont.woff2',"application/font-woff2");
    }else if(req.match(/\.woff$/)){
        responseBinary(res,req,"application/font-woff");
    }else if(req.match(/\.eot$/)){
        responseBinary(res,req,"text/vnd.ms-fontobject eot");
    }else if(req.match(/\.ttf$/)){
        responseBinary(res,req,"text/octet-stream");
    }else if(req.match(/\.map$/)){ //done
        responseBinary(res,req,"text/octet-stream");
    }else if(req.match(/\.jpg$/)){ 
        responseBinary(res,req,"image/jpg");
    }else if(req.match(/\.png$/)){
        responseBinary(res,req,"image/png");
    }else if(req.match(/\.jpeg$/)){
        responseBinary(res,req,"image/jpeg");
    }else if(req.match(/^\/[a-zA-Z]{1}[a-zA-Z0-9]{2,8}$/)){
        var file = path.join(__dirname,"public",req)+".html";
        fs.access(file,function(err){
            if(err){
                 response(res,"404",
                        `<h1 style="color:green; font-size:5em; font-weight:100;">
                        Ok Successful route But We Don't find the file...
                    </h1>`);
            }else{
                responseText(res,`${req}.html`,"text/html");
            }
        });
    }else{
        response(res,"404",res.url);
    }
}


//make the server...
http.createServer(function(req,res){
    log(req.url);
    if(req.url === "/"){
        res.writeHead(200,{"Content-type":"text/html"});
        fs.readFile(path.join(__dirname,"acceuil.html"),function(err,data){
            err ? log("Error sending html") : res.end(data);
        });
    }else{
        checkReqAndSend(req.url,res);
    }
}).listen(port,function(err){
    if(!err){log("server listen on localhost:3000");}
    else{log("Error to create server");}
});
*/