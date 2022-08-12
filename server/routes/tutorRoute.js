const express = require('express')

const passport = require('passport')


const {
    create,
    login,
    } = require('../controllers/tutorController')

const tutorRouter = express.Router()

tutorRouter.post('/sign-up', create)
tutorRouter.post('/login',login)


module.exports = tutorRouter
