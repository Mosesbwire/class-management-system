const express = require('express')
const { ensureAuthenticated } = require('../config/auth')

const assingmentInstanceRouter = express.Router()

const {create,
        getAssingments,
        gradeAssingment,
        downloadAssingment
} = require('../controllers/assingmentInstanceController')


assingmentInstanceRouter.post('/submit', ensureAuthenticated, create)
assingmentInstanceRouter.post('/grade', ensureAuthenticated,gradeAssingment)
assingmentInstanceRouter.get('/assingments', ensureAuthenticated,getAssingments)
assingmentInstanceRouter.get('/download/:id',downloadAssingment)


module.exports = assingmentInstanceRouter