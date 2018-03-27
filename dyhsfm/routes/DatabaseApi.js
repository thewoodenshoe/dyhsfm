var mysql      = require('mysql');

// dummy dbase and password for now. can be seen in GIT, i know.
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'stewart01', 
  database : 'dyhsfm',
})

connection.connect(function(err){
  if(!err) {
     console.log("Database is connected.")
  }
  else {
    connection.password = ''
    connection.connect(function(err){
      if(!err) {
        console.log("Database is connected (no pw).")
      }
      else {
        console.log("Error connecting database: " +err)
      }
    })
  }
})

 // exports.login = function(email, password){
 //   connection.query('select * from users where email = ?',[email], function (error, results, fields) {
 exports.login = function(req,res){
    let email= req.body.email
    let password = req.body.password
    connection.query('select * from users where email = ?',[email], function (error, results, fields) {
    if (error) {
      console.log("error ocurred",error);
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    } else {
      if(results.length >0){
        if([0].password == password){
          console.log('login sucessfull')
          res.send({
            "code":200,
            "success":"login sucessfull"
              });
        }
        else{
          console.log('Email and password does not match')
          res.send({
            "code":204,
            "success":"Email and password does not match"
              });
        }
      }
      else{
        console.log('email does not exists')
        res.send({
          "code":204,
          "success":"Email does not exists"
            });
      }
    }
    });
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
