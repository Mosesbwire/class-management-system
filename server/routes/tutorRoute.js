const express = require('express')

const passport = require('passport')


const {
    create,
    login,
    logout
    } = require('../controllers/tutorController')

const tutorRouter = express.Router()

tutorRouter.post('/sign-up', create)
tutorRouter.post('/login',login)
tutorRouter.post('/logout',logout)


module.exports = tutorRouter
