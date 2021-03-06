const express = require('express');
const path = require('path');

const port = +process.env.VIRTUAL_PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, '/build')));

app.listen(port, () =>
  console.log('Server Running on Port ' + port));
