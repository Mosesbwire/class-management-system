const Tutor = require('../models/tutorModel')
const path = require('path')

// responds with sign up page


function create(req,res){

    let tutor = new Tutor({
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        e_mail_address: req.body.email,
        password: req.body.password
    })

    tutor.save(function(err){
        if(err){
            //TODO /// send error response to client 
            
            console.log('tutor could not be created')
        }else{
            res.status(201).json(tutor)
        }
    })
}


module.exports = {
    create
}

