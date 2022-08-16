const express = require('express')
const classRouter = express.Router()
const { ensureAuthenticated} = require('../config/auth')

const { create,
        getAllClasses,
        getClass
} = require('../controllers/classController')


classRouter.post('/create', ensureAuthenticated, create)
classRouter.get('/classes',ensureAuthenticated, getAllClasses)
classRouter.get('/:id',ensureAuthenticated,getClass)



module.exports = classRouter