var socket = io();
socket.on('greet', function(data) {
  alert(data);
});

function helloServer() {
    socket.emit('hello', document.getElementById("name").value);
};