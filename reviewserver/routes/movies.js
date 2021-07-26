var express = require('express');
const { response } = require('../app');
var router = express.Router();
var cors = require("../cors")
var http = require("http")
var verify = require("../auth")
var user = require("../models/users")

var movies  = require("../models/movie")


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router
.post("/search"  ,   (req,res,next) => {
  console.log("body :" ,   req.body.original_title)
  movies.findOne({"original_title" : req.body.original_title})
  .populate("Comments.author")
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
  console.log("this is my reqest" , req)
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
    if (doc != null){

      user.findOne({_id : req.user._id})
      .then((doc) => {
        console.log("doc1" , doc)
        if(doc != null && doc.reviewed_movies.includes(req.body._id) == false){
          user.findOneAndUpdate({_id :  doc._id} , {
            $push : {
              reviewed_movies : req.body._id
            }
          })
          .then((res) => {console.log("reviewed movies added successfully")})
          .catch(err => next(err))

        }
      
      })
      
      
      res.statusCode = 200;
      res.setHeader("Content-Type","application/json");
      res.json({"message" : "comment posted successfully" , "doc" : doc})

    }
    else{
      res.statusCode = 401;
      res.setHeader("Content-Type","application/json");
      res.json({"message" : "unsuccessful" , "doc" : doc})

    }
     

  })
  .catch((err) => {next(err)})

})



module.exports = router;
