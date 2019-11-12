const path = require('path');
const express = require('express');

const api = require('./routes/api'); // импортируем роутер

const indexHTML = path.resolve(__dirname,'../client/public/index.html');
const app = express();

app.use('/', express.static('public'));
app.use('/api', api);

app.get('/*', (req, res) => res.sendFile(indexHTML));

app.listen(3000);
