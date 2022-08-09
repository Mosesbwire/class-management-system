const express = require('express')

const {
    create

    } = require('../controllers/tutorController')

const tutorRouter = express.Router()

tutorRouter.post('/sign-up', create)


module.exports = tutorRouter
