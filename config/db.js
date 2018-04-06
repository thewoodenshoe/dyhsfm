let mysql      = require('mysql')

// dummy dbase and password for now. can be seen in GIT, i know.
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '', 
  database : 'dyhsfm',
})

connection.connect(function(err){
    if(!err) {
       console.log("Connection established to the database.")
    }
    else {
      connection.password = 'stewart01'
      connection.connect(function(err){
        if(!err) {
          console.log("Connection established to the database..")
        }
        else {
          console.log("Error connecting database: " +err)
        }
      })
    }
  })

  module.exports = connection