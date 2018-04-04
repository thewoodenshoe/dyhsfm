var mysql      = require('mysql');

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

exports.login = function(req,res){
    let email = req.body.email
    let password = req.body.password
    // for testing purpose to bypass db connections
    if ( email == 'success@test.com') {
      console.log('TESTCASE: login sucessfull')
      res.send({
        "code":200,
        "success":"login sucessfull"
          })
    } else if ( email == 'fail@test.com') {
      console.log('TESTCASE: login failed')
      res.send({
        "code":400,
        "failed":"error ocurred"
          })
    } else {
      //console.log(`Send via login page. Email: ${email} with password: ${password}`)
      connection.query('select * from users where email = ?',[email], function (error, results, fields) {
        if (error) {
          console.log("Error DatabaseApi #1: ",error);
          res.send({
            "code":400,
            "failed":"error ocurred"
          })
        } else {
          if (results.length > 0) {
            if( results[0].password == password){
              console.log('login sucessfull')
              res.send({
                "code":200,
                "success":"login sucessfull"
                  })
            }
            else{
              console.log('Email and password does not match')
              res.send({
                "code":204,
                "success":"Email and password does not match"
                  })
            }
          }
          else{
            console.log('email does not exists')
            res.send({
              "code":204,
              "success":"Email does not exists"
                })
          }
        }
      })
    }
  }

  exports.register = function(req,res){
    // console.log("req",req.body);
    var today = new Date();
    var users={
      "first_name" : req.body.firstName,
      "last_name"  : req.body.lastName,
      "email"      : req.body.email,
      "password"   : 'stewart01',
      "created"    : today,
      "modified"   : today
    }
    connection.query('insert into users set ?',users, function (error, results, fields) {
    if (error) {
      console.log("error ocurred",error);
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    }else{
      console.log('Insert successfull: ', results);
      res.send({
        "code":200,
        "success":"user registered sucessfully"
          });
    }
    });
  }
