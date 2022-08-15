const LocalStrategy = require('passport-local')
const bcrypt = require('bcrypt')

const Tutor = require('../models/tutorModel')

module.exports = function(passport){

passport.use('local',new LocalStrategy(function verify(username, password,cb){
  
  Tutor.findOne({e_mail_address: username},function(err,tutor){
      if(err) { return cb(err) }
      if(!tutor){ return cb(null,false,{message: 'Email provided does not exist'}) } 


      bcrypt.compare(password, tutor.password, (err, isMatch)=>{
          if(err) { return cb(err)}

          if(!isMatch){ return cb(null, false, {message: 'Incorrect password'}) }

          return cb(null, tutor)
      })
      
  })

}))


passport.serializeUser(function(user, cb) {
   
    process.nextTick(function() {
      cb(null, { id: user._id, username: user.e_mail_address });
    });
  });
  
passport.deserializeUser(function(user, cb) {
    console.log('in deserialize....')
    process.nextTick(function() {
      return cb(null, user);
    });
  });

}



