const express = require('express');
const bodyParser = require('body-parser') // transform incoming requests as json
const path = require('path');
const dbApi = require('./routes/DatabaseApi');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/api/login', function (req, res) {
  return res.send("ping pong");
 });

app.post('/api/login',dbApi.login)

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(8080, () => console.log('Example app listening on port 8080'))