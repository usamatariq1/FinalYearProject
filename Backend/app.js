var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser= require('body-parser')
var logger = require('morgan');
var indexRouter = require('./server/routes/index');
var usersRouter = require('./server/routes/users');
var patientRouter = require('./server/routes/patient');
var labAssistantRouter = require('./server/routes/labAssistant');
var passport = require('passport');
require("./server/passport")(passport);
var adminRouter = require('./server/routes/admin');

var nodemailer = require('nodemailer');

var session = require('express-session');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/endoscopy',{ useFindAndModify: false });

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret:'thesecret',
  saveUninitialized:false,
  resave:false
}));
app.use(passport.initialize())
app.use(passport.session())

var cors = require('cors');
app.use(cors());



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/patient', patientRouter);
app.use('/labAssistant', labAssistantRouter);
app.use('/admin', adminRouter);

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
