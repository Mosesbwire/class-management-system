const Tutor = require('../models/tutorModel')
const path = require('path')

// responds with sign up page


async function create(req,res){

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


module.exports = {
    create
}

