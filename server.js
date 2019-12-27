const events = require('events');
const express = require('express');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
  socket.on('btnclick', () => {
    console.log('btn clicked yo');
  })
});

http.listen(3000, () => console.log('App listening on port 3000'));
