
const port = process.env.PORT || 1337;


// HTTP Module for Creating Server and Serving Static Files Using Node.js
// Static Files: HTML, CSS, JS, Images
// Get Complete Source Code from Pabbly.com

var http = require('http');
var fs = require('fs');
var path = require('path');

var SERVER_URL_PREFIX; 

http.createServer(function(req, res){
    SERVER_URL_PREFIX  = process.env.SERVER_URL_PREFIX; 

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
    }else if(req.url.match("\.woff2$")){
        var fontPath = path.join(__dirname, './', "fonts/fontawesome-webfont.woff");
        var fileStream = fs.createReadStream(fontPath);
        res.writeHead(200, {"Content-Type": "application/font-woff2"});
        console.log(fontPath);
        fileStream.pipe(res);
    }else if(req.url.match("\.woff$")){
        var fontPath = path.join('./fonts/fontawesome-webfont.woff');
        var fileStream = fs.createReadStream(fontPath);
        res.writeHead(200, {"Content-Type": "application/font-woff"});
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