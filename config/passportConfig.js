var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
//const db = require('./databaseConfig') // access to the database

passport.use(new LocalStrategy(
    function(username, password, done) {
        if ( username == "test") {
           return done(null, false, { message: 'error' })
        }
        else {
           let user = {}
           user.age = 12
           return done(null, user)
        }
  })
)

return done(null, user)
          
    