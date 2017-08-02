var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
//require router middleware
var index = require('./routes/index');
var users = require('./routes/users');
var temp = require('./controllers/test-template');
//get app
var app = express();
//config
var sessionConfig = {
  secret : 'MN23SEcretWASD',
  resave : false,
  saveUninitailized : true,
  key : 'myapp-session',
  cookie : {
    maxAge : 4.32e7
  }
};
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
//use general middleware
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session(sessionConfig));
app.use(express.static(path.join(__dirname, 'public')));
//use router middleware
app.use('/', index);
app.use('/users', users);
app.get('/test', temp);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handler middleware
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
