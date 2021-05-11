const express = require('express');
const app = express();
app.listen((3500), () => console.log('listen at 3500'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const results = {};
const names = {};

app.post('/api', (request, response) => {
  const data = request.body;
  console.log(data);
  if (data.name != null)
    names[response] = data.name;
  if (data.time != null)
    results[names[response]] = time;
  console.log(results);
});
