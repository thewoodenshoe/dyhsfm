const express = require('express');
const bodyParser = require('body-parser') // transform incoming requests as json
const path = require('path');
const dbApi = require('./routes/DatabaseApi');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));

app.post('/mytest', function (req, res) {
  // the objective is to redirect to DatabaseApi.Login and return a session ID.
  // so my though process is: capture the parameters (email and password)
  // then send them to the login function.

  // step 1: capture parameters.
  // trying option 1, no result 
  console.log('In server 1: ' + JSON.stringify(req.body.email)) // returns undefined
  console.log('In server 2: ' + JSON.stringify(req.body.email))  // returns undefined
  
  
  // below will return: n server 3: {"{\"email\":\"stewart.paul@gmail.com\"}":""}  (good news)
  // so i think i gotta work with this. I get TEXT (req.body is always text and i stringified it in the client)
  console.log('In server 3: ' + JSON.stringify(req.body))
  // so i want to do something like this. 
  let myEmail = JSON.stringify(req.body.email)
  // above doesnt work, so i figured I need to parse the text  to JSON first. But below crashes on a parse error?
  // I figured I dont sent it correctly in my client (login.js?) but it seems right?!
  let myObj = JSON.parse(req.body)


  
  // dummy return
  return res.send('{id: 1}');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(8080, () => console.log('Example app listening on port 8080'))