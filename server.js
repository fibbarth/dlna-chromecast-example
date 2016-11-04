// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");

var dlnacasts = require('dlnacasts')()

dlnacasts.on('update', function (player) {
console.log(player);
  console.log('all players: ', dlnacasts.players)
  player.play('link mp4', {title: 'my video', type: 'video/mp4'})
});

dlnacasts.update();

var chromecasts = require('chromecasts')()

chromecasts.on('update', function (player) {
  console.log('all players: ', chromecasts.players)
  player.play('link mp4', {title: 'Teste2', type: 'video/mp4'})
});

chromecasts.update();

