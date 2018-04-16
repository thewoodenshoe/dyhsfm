const express = require('express') // http server
const bodyParser = require('body-parser') // transform incoming requests as json
const path = require('path') // access the filesystem
const passport = require('passport') // authentication
const cookieParser = require('cookie-parser')
const session = require('express-session')

// setup 
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'build')))
app.use(cookieParser())
app.use(session({
  secret: 'my secret is unknown',
  resave: false,
  saveUninitialized: true,
  //  cookie: { secure: true } // for https
}))

// setup passport
app.use(passport.initialize()) // initialize middleware (functions that have access to req/ res)
app.use(passport.session())
require('./config/passportConfig')(passport)


// handle POST requests -- req.body is specifically for post requests
//app.post('/login', passport.authenticate('local-login'), userResponse)
//app.post('/login', passport.authenticate('local-login', { successRedirect: '/', failureRedirect: '/' })) //req.user contains the user. ie: req.user.username


app.post('/signup', passport.authenticate('passport-local', { successRedirect: '/', failureRedirect: '/' }))

app.post('/signup2', function (req, res) {
  //console.log(`Name: ${req.body.firstName} ${req.body.lastName}. Email: ${req.body.email} and password: ${req.body.password}`)
  const db = require('./config/databaseConfig')
  db.register(req.body)
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