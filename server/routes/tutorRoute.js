const express = require('express')
const { ensureAuthenticated } = require('../config/auth')


const {
    create,
    login,
    logout,
    getDashboard
    } = require('../controllers/tutorController')

const tutorRouter = express.Router()

tutorRouter.post('/sign-up', create)
tutorRouter.post('/login',login)
tutorRouter.get('/dashboard',ensureAuthenticated, getDashboard)
tutorRouter.post('/logout',logout)


module.exports = tutorRouter
