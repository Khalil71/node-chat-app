const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');

  socket.emit('newEmail', {
    from: 'mick@example.com',
    text: 'Hey, wats up',
    createAt: 123
  });

  socket.emit('newMessage', {
    from:'jayjay',
    text:'when are we?',
    createAt: 333
  });

  socket.on('createMessage', (createdMessage) => {
    console.log('createMessage', createdMessage);
  });

  socket.on('disconnect', () => {
    console.log('client has disconnected');
  });

});

server.listen(port, () => {
  console.log(`server is up on ${port}`);
});
