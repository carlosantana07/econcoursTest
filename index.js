
const port = process.env.PORT || 1337;


var SERVER_URL_PREFIX; 


const express = require('express');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('./'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + './Acceuil.html');
});

// listen for requests :)
const listener = app.listen(port, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});