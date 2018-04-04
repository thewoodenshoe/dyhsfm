const express = require('express') // http server
const bodyParser = require('body-parser') // transform incoming requests as json
const path = require('path'); // access the filesystem
const passport = require('passport'); // authentication

// setup 
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'build')))
app.use(passport.initialize()) // initialize middleware
/* turn on later */ // app.use(passport.session())

// handle POST requests
//app.post('/login', passport.authenticate('local'), function(req, res) { res.redirect('/users/' + req.user.username) })
//app.post('/login', passport.authenticate('local-login'), userResponse)
app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/' })) //req.user contains the user. ie: req.user.username
app.post('/signup', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/' }))


// handle main
// TO DO: if you are not authenticated, redirect to login page
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// http server
const portNr = 8080
app.listen(portNr, () => console.log(`Http server (express) on port ${portNr}`))