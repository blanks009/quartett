//Server initialisieren
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');

//prepare Server
var app = express();
var server = http.Server(app);
var io = socketIO(server);

app.set('port', process.env.PORT || 3000);
app.use('/static', express.static(__dirname + '/static'));

// Routing
//Ein Spiel starten
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'index.html'));
});
//Einem Spiel beitreten
app.get('/room', function(request, response) {
    response.sendFile(path.join(__dirname, 'index.html'));
});

// Starts the server.
server.listen(process.env.PORT || 3000, function() {
    console.log('Starting server on port 5000');
});


// Add the WebSocket handlers
io.on('connection', function(socket) {
    socket.on('hello', function(data) {
        io.sockets.emit('greet', 'Willkommen ' + data + '!' );      
    });
});

//setInterval(function() {
 //   io.sockets.emit('message', 'hi!');
 // }, 1000);


