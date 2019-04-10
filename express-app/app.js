const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`);
});

app.get('/woman', (request, response) => {
  response.sendFile(`${__dirname}/views/woman.html`);
});

app.listen(3000);
