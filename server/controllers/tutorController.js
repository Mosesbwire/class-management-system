const Tutor = require('../models/tutorModel')
const path = require('path')
const passport = require('passport')



async function create(req,res){
    // handle request errors -- handle model validation before creating obj
    let tutor = new Tutor()

    tutor.first_name = req.body.firstname
    tutor.last_name = req.body.lastname
    tutor.e_mail_address =req.body.email
    tutor.password = await tutor.generateHash(req.body.password)
    
    tutor.save(function(err){
        if(err){
            //TODO /// send error response to client 
            
            console.log(err)
        }else{
            res.status(201).json(tutor)
        }
    })
}


function login(req,res,next){
    passport.authenticate('local',{}, (err,user,info)=>{

        // todo handle errors here
        if(!user){
            return res.status(401).json(info)
        }

        res.json(user)
    })(req,res,next)
}

function logout(req,res,next){
    req.logout((err)=>{
        if(err) {return next(err)}


        res.status(200).json({msg: 'logged out'})
    })
   
}

module.exports = {
    create,
    login,
    logout
}

