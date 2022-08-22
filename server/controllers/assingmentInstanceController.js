const AssingmentInstance = require('../models/assingmentInstanceModel')
const path = require('path')

function create(req,res,next){
    const instance = new AssingmentInstance({
        student: req.user.id,
        assingment: assingment,
        filename: req.filename,
        submissionDate: Date.now()
    })

    instance.save(function(err){
        if(err){ return next(err)}

        res.status(200).json({message: 'Assingment submitted successfully'})
    })
}

function gradeAssingment(req,res,next){
    AssingmentInstance.findById(req.params.id, (err,assingment)=>{
        if(err) { return next(err) }

        assingment.score = req.body.score
        assingment.save(function(err){
            if(err) {return next(err)}

            res.status(200).json({message: `Assingment grade: ${assingment.score}`})
        })
    })
}

function downloadAssingment(req,res,next){
    AssingmentInstance.findById(req.params.id, function(err,assingment){
        if(err){ return next(err)}
        res.download(path.join(__dirname, '..','assingments', 'student-uplods', `${assingment.filename}`),
            (err)=>{
                if(err){ return next(err)}

                console.log('download was successful')
            }
        )
    })
}

function getAssingments(req,res,next){
    AssingmentInstance.find({student: req.user.id}, (err,assingments)=>{
        if(err){ return next(err)}

        res.status(200).json(assingments)
    })
}




module.exports = {
    create,
    gradeAssingment,
    getAssingments,
    downloadAssingment
}

