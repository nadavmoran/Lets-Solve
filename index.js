const express = require('express');
const app = express();
app.listen((3500), () => console.log('listen at 3500'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));
app.post('/api', (request, response) => {
  const data = request.body;
  console.log(data.time);
});
