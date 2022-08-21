const Student = require('../models/studentModel')
const passport = require('passport')


async function create(req,res,next){
    const student = new Student()
    
        student.firstName = req.body.firstName,
        student.lastName = req.body.lastName,
        student.email = req.body.username
        console.log(req.body)
        student.password = await student.generateHash(req.body.password)

    student.save(function(err){
        if (err){ return next(err)}

        req.logIn(student,function(err){
            if(err){ return next(err)}

            res.status(201).json(student)
        })
    })
}

function login(req,res,next){
    passport.authenticate('local-student', {}, (err,user,info)=>{

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
    req.logOut(function(err){
        if(err){ return next(err)}

        res.status(200).json({message: 'Logged out'})
    })
}


module.exports = {
    create,
    login,
    logout
}