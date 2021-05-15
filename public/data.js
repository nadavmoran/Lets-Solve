function sendData() {
  var time = 1.3;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ time })
  };
  let response =  fetch('/api', options);
  let data = response.json();
  console.log(data);
}
