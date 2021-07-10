var express = require('express');
var router = express.Router();
var user = require("../models/users");
var bcrypt = require("bcrypt")
var jwt = require("jsonwebtoken");
var config = require("../config");
var verify = require("../auth")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/signup" , (req,res,next) => {
  user.findOne({"email" :  req.body.email})
  .then((doc) => {
    console.log("founded user : " , doc)
    if (doc != null){
      res.statusCode = 303;
      res.setHeader("Content-Type" , "application/json")
      res.json({message : "User already exists ! "})
    }
    else{
      bcrypt.hash(req.body.password , 10)
      .then((hashedpassword) => {
        user.create({email : req.body.email , password : hashedpassword})
        .then((user) => {console.log("user created"); res.json({message : "user created successfully"})})
        .catch((err) => next(err))
      })
      .catch((err) => {next(err)})


    }
  })
  .catch((err) => next(err))
  
})

router.post("/login" , (req , res , next) => {
  user.findOne({email : req.body.email})
  .then((doc) => {
    if(doc !== null ){
      bcrypt.compare(req.body.password , doc.password)
      .then((confirmed) => {
        if (confirmed === true){
        
          var token = jwt.sign({user : doc.email} , config.secret , {expiresIn : 3600})
          res.json({message : "User logged in " , token : token});
          res.statusCode = 200;
          res.setHeader("Content-Type" , "application/json");

        }
        else{
          res.json({message : "password incorrect" });
          res.statusCode = 403;
          res.setHeader("Content-Type" , "application/json");
        }
     
    })
    .catch((err) => next(err))
  }
  else{
    res.statusCode = 404;
    res.setHeader("Content-Type" , "aplication/json");
    res.json({message : "User not found"});

  }

    }
    )  
  .catch((err) => {
    next(err)
  })
})

router
.post("/addfavourite" ,verify.verifyuser, (req,res,next) => {

  user.findOneAndUpdate({email : req.user.email} , { 
    $push : {
      favourites : req.body._id 
    }
  })
  .then((doc) => {
    res.statusCode = 200;
    res.setHeader("Content-Type" , "aplication/json");
    res.json({message : "successful" , "doc : " : doc});
  })
  .catch((err) => {
    res.statusCode = 404;
    res.setHeader("Content-Type" , "aplication/json");
    res.json({message : "User not found"});
  })
  
})

router
.get("/favourite" , verify.verifyuser , (req,res,next) => {
  user.findOne({email : req.user.email})
  .populate("favourites")
  .then((doc) => {
    res.statusCode = 200
    res.setHeader("Content-Type" , "aplication/json");
    console.log("favourite11 : " , doc)
  })
  .catch((err) => next(err))
})


module.exports = router;
