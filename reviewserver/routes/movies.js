var express = require('express');
const { response } = require('../app');
var router = express.Router();
var cors = require("../cors")
var http = require("http")
var verify = require("../auth")

var movies  = require("../models/movie")


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router
.post("/search"  ,   (req,res,next) => {
  console.log("body :" ,   req.body.original_title)
  movies.findOne({"original_title" : req.body.original_title})
  .then((doc) => {
    if(doc !== null){
      console.log("founded movies : " , doc);

      res.statusCode = 200;
      res.setHeader("Content-Type","application/json");
      res.json({"message" : "movie found" , "founded" : doc})  
    }
    else{
      res.statusCode = 404;
      res.json({"message" : "movie not found"})

    }
    
  } , (err) => {
    console.log(err);
    next(err)
  })
  .catch((err) => next(err))


})

router.post("/addcomment", verify.verifyuser , (req,res,next) => {
  movies.findOneAndUpdate({original_title : req.body.original_title} , {
    $push : {
      Comments : {
        rating : req.body.rating ,
        comment : req.body.comment ,
        author : req.user._id

      }

    }
  } , {useFindAndModify : false})
  .then((doc) => {
      res.statusCode = 200;
      res.setHeader("Content-Type","application/json");
      res.json({"message" : "comment posted successfully" , "doc" : doc})

  })
  .catch((err) => {next(err)})

})



module.exports = router;
