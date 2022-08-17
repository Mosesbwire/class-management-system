const express = require('express')
const multer = require('multer')
const upload = multer({dest: 'assingments/'})
const assingmentRouter = express.Router()
const { ensureAuthenticated } = require('../config/auth')

const {create,
        getAllAssingments,
        getAssingment
} = require('../controllers/assingmentController')

assingmentRouter.post('/create', ensureAuthenticated, upload.single('file'), create)
assingmentRouter.get('/assingments', ensureAuthenticated,getAllAssingments)
assingmentRouter.get('/:id', ensureAuthenticated, getAssingment)



module.exports = assingmentRouter
