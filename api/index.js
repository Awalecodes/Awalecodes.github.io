const bodyParser = require('body-parser');
const cors = require('cors')
const express = require('express');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  next();
})

app.options('*', (request, response) => {
  response.sendStatus(200);
})

app.get('/products', (request, response) => {
  response.json([
    { id: 1, name: 'Shave', price: 25 },
    { id: 2, name: 'Haircut', price: 15 },
    { id: 3, name: 'Shampoo', price: 10 },
    { id: 4, name: 'Massage', price: 30 },
  ]);
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})