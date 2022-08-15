var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const session = require('express-session')
const passport = require('passport')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const tutorRouter = require('./routes/tutorRoute')

var app = express();
require('./config/passport')(passport)
dotenv.config()

const mongoDB = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@class.otxyqq2.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB CONNECTION ERROR'))

app.use(cors({
    origin: 'http://localhost:5500',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true
    
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(session({
    secret: 'this is a secret',
    resave: false,
    saveUninitialized: false,
}))
app.use(passport.initialize())
app.use(passport.session())



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tutor', tutorRouter)



module.exports = app;
