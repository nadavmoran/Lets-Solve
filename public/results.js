const socket = io();
socket.on('broadcast', function(data) {
  console.log(data);
  results = document.getElementById('results');
  results.innerHTML = data.name + ':' + data.result;
});
