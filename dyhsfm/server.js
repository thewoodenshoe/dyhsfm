const express = require('express');
const bodyParser = require('body-parser') // transform incoming requests as json
const path = require('path');
const dbApi = require('./routes/DatabaseApi');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/test', function (req, res) {
   console.log('in app.get / test on express 8080')
   return res.send('app.get / test');
});

// Ramiro: dit zou afgevuurd moeten worden toch?
app.post('/test', function (req, res) {
  console.log('in app.post / test on express 8080')
  return res.send('app.post / test');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(8080, () => console.log('Example app listening on port 8080'))