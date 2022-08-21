const LocalStrategy = require('passport-local')
const bcrypt = require('bcrypt')

const Tutor = require('../models/tutorModel')
const Student = require('../models/studentModel')



module.exports = function(passport){

passport.use('local',new LocalStrategy(function verify(username, password,cb){

  
  Tutor.findOne({email: username}, function(err,tutor){
    if(err){return cb(err)}
    
    if(!tutor){
      return cb(null,false, {message: 'The email provided does not exist'})
    }

    bcrypt.compare(password, tutor.password, (err, isMatch)=>{
      if(err) { return cb(err)}
  
      if(!isMatch){ return cb(null, false, {message: 'Incorrect password'}) }
  
      return cb(null, tutor)
    })
  })
}))
passport.use('local-student',new LocalStrategy(function verify(username, password,cb){

  
  Student.findOne({email: username}, function(err,student){
    if(err){return cb(err)}
    
    if(!student){
      return cb(null,false, {message: 'The email provided does not exist'})
    }

    bcrypt.compare(password, student.password, (err, isMatch)=>{
      if(err) { return cb(err)}
  
      if(!isMatch){ return cb(null, false, {message: 'Incorrect password'}) }
  
      return cb(null, student)
    })
  })
}))


passport.serializeUser(function(user, cb) {
   
    process.nextTick(function() {
      cb(null, { id: user._id, username: user.email });
    });
  });
  
passport.deserializeUser(function(user, cb) {
    console.log('in deserialize....')
    process.nextTick(function() {
      return cb(null, user);
    });
  });

}



