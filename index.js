//I defined two headers, one for text/html, and the other for text/css
var commonHeaders = {'Content-Type': 'text/html'};
var cssHeaders = {'Content-Type': 'text/css'};

function css(request, response) {
    response.writeHead(200, {'Content-type' : 'text/css'});
    var fileContents = fs.readFileSync('./css/styles.css', {encoding: 'utf8'});
    response.write(fileContents);
  
} 

const http = require('http');

const fs = require('fs');

const server = http.createServer((request, response) => {
    response.writeHead(200, commonHeaders);
    fs.readFile('./Acceuil.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
