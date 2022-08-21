const Class = require('../models/classModel')
// const Tutor = require('../models/tutorModel')


function create(req,res,next){
    const course = new Class({
        tutor: req.user.id,
        name: req.body.name,
        totalHours: req.body.hours,
        totalNumberOfTopics: req.body.topics,

    })

    course.save(function(err){
        if(err){ return next(err)}

        res.status(201).json(course)
    })
}

function getAllClasses(req,res,next){
    Class.find({tutor: req.user.id},(err,classes)=>{
        if(err){ return next(err)}

        if(classes === null){
            return res.status(204).json({message: 'You currently have no classes'})
        }

        res.status(200).json(classes)

    })
    
}

async function getClass(req,res,next){
    const classId = req.params.id
    Class.findById(classId, (err,course)=>{
        if(err){ return next(err)}

        res.status(200).json(course)
    })
}

function joinClass(req,res,next){
    Class.findById(req.params.id, (err,course)=>{
        if(err){ return next(err)}

        course.students.push({student: req.user.id})
        course.save(function(err){
            if(err){ return next(err)}

            res.status(200).json(course)
        })

    })
    

}

module.exports = {
    create,
    getAllClasses,
    getClass,
    joinClass
}