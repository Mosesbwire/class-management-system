const Tutor = require('../models/tutorModel')
const path = require('path')
const passport = require('passport')



async function create(req,res, next){
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
            console.log(tutor)
            

            req.logIn(tutor,function(err){
               
                if(err) { next(err) }

                res.status(201).json(tutor)
               
            })
           
        }
    })
}


function login(req,res,next){
    passport.authenticate('local',{}, (err,user,info)=>{
       
        // todo handle errors here
        if(!user){
            return res.status(401).json(info)
        }
        req.logIn(user,function(err){
            if(err) {return next(err)}
            return res.json(req.user)
        })

        
        
    })(req,res,next)
}

function logout(req,res,next){
    console.log(req.session)
    req.logOut((err)=>{
        if(err) {return next(err)}
        
        res.status(200).json({msg: 'logged out'})
    })
   
}

function getDashboard(req,res,next){
    console.log('getting dashboard')
    console.log(req.session)
    res.status(200).json({msg: 'logged in'})
}

module.exports = {
    create,
    login,
    logout,
    getDashboard
}

