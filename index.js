const express = require ('express');
const app = express();
const server = app.listen((3500), () => console.log('listen at 3500'));
const io = require('socket.io')(server);

const results = {results: []};

app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

app.post('/time', (request, response) => {
  var data = request.body;
  console.log(data, typeof(data));
  results.name = data.name;
  results.results.push(data.result);
  io.sockets.emit('broadcast', results);
});
