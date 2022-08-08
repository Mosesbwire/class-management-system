const express = require('express')

const {signUp,
       create

    } = require('../controllers/tutorController')

const tutorRouter = express.Router()

tutorRouter.get('/sign-up', signUp)
tutorRouter.post('/sign-up', create)


module.exports = tutorRouter
