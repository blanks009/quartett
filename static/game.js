var socket = io();
socket.on('message', function(data) {
  console.log(data);
});

function helloServer() {
    socket.emit('hello', 'Hallo Server');
};