var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
const db = require('./databaseConfig') // access to the database

module.exports = function(passport, user) {
    passport.use(new LocalStrategy(
        function(username, password, done) {
            if ( username == "demo") {
            return done(null, false, { message: 'error' })
            }
            else {
            let user = {}
            user.age = 38
            user.firstName = "Alexander"
            user.lastName = "Hermans"
            return done(null, user)
            }
    })
    )        
}