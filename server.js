const express = require('express') // http server
const bodyParser = require('body-parser') // transform incoming requests as json
const path = require('path') // access the filesystem
const passport = require('passport') // authentication

// setup 
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'build')))
app.use(passport.initialize()) // initialize middleware (functions that have access to req/ res)
/* turn on later */ // app.use(passport.session())

//const passportConfig = require('./config/passportConfig')
//passportConfig(passport)

// handle requests
//app.post('/login', passport.authenticate('local'), function(req, res) { res.redirect('/users/' + req.user.username) })
//app.post('/login', passport.authenticate('local-login'), userResponse)
app.post('/login', passport.authenticate('passport-local', { successRedirect: '/', failureRedirect: '/' })) //req.user contains the user. ie: req.user.username
//app.post('/signup', passport.authenticate('passport-local', { successRedirect: '/login  ', failureRedirect: '/' }))
app.post('/signup', function (req, res) {
  console.log('param:' + JSON.stringify(req.params.email))
  res.redirect('/login')
})

// handle main
// TO DO: if you are not authenticated, redirect to login page
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// http server
const portNr = 8080
app.listen(portNr, () => console.log(`Http server (express) on port ${portNr}`))