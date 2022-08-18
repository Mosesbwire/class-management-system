const express = require('express')
const multer = require('multer')
const assingmentRouter = express.Router()
const { ensureAuthenticated } = require('../config/auth')

const {create,
        getAllAssingments,
        getAssingment,
        download
} = require('../controllers/assingmentController')


const multerStorage = multer.diskStorage({
        destination: (req,file,cb)=>{
                cb(null,'assingments/lecturer-uploads')
        },
        filename: (req,file,cb)=>{
                console.log(file.originalname)
                const ext = file.mimetype.split('/')[1]
                cb(null, `${file.originalname}-${Date.now()}.${ext}`)
        }
})

const multerFilter = (req,file,cb)=>{
        if(file.mimetype.split('/')[1] === 'pdf'){
                cb(null,true)
        }else {
                cb(new Error("Not a pdf file: Only pdf files acceptd"), false)
        }
}

const upload = multer({
        storage: multerStorage,
        fileFilter: multerFilter
})



assingmentRouter.post('/create', ensureAuthenticated, upload.single('file'), create)
assingmentRouter.get('/assingments', ensureAuthenticated,getAllAssingments)
assingmentRouter.get('/:id', ensureAuthenticated, getAssingment)
assingmentRouter.get('/download/:id', download)



module.exports = assingmentRouter
