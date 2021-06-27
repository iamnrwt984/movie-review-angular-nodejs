var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose");
var cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var moviesrouter = require("./routes/movies")

var app = express();


var db = mongoose.connect("mongodb://localhost:27017/moviereview");

db.then((connected) => {
  console.log("connected successfully")
} ,
(err) => {
  console.log(err);
})

/* app.all("*" , (req,res,next) => {
  if(req.secure){
    return next();
  }
  else{
    res.redirect("https://localhost:3443/" + req.url);

  }
}) */

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 ,
  methods: "GET, POST"
}


app.use(cors(corsOptions));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/movies" , moviesrouter );

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
