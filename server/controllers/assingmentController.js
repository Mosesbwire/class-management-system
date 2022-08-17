const Assingment = require('../models/assingmentModel')


function create(req,res, next){
    const assingment = new Assingment({
        name: req.body.name,
        score: req.body.score,
        tutor: req.user.id,
        dueDate: req.body.date,
        file: JSON.stringify(req.file),
        course: req.body.course
    })

    assingment.save(function(err){
        if(err){ return next(err)}

        res.status(200).json(assingment)
    })
}

function getAllAssingments(req,res,next){
    // req.user is tutor -- student cannot access. add authorization
    if(req.user.id){
        Assingment.find({tutor: req.user.id}, (err, assingments)=>{
            if(err) { return next(err)}

            if(assingments === null){
                return res.status(204).json({message: 'No assingments available'})
            }

            res.status(200).json(assingments)
        })
    }

}

function getAssingment(req,res,next){
    Assingment.findById(req.params.id, (err,assingment)=>{
        if(err) { return next(err)}

        res.status(200).json(assingment)
    })
}


module.exports = {
    create,
    getAllAssingments,
    getAssingment
}