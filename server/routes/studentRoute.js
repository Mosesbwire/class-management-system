const express = require('express')
const { ensureAuthenticated } = require('../config/auth')
const studentRouter = express.Router()

const {create,
        login,
        logout
} = require('../controllers/studentController')

studentRouter.post('/signup', create)
studentRouter.post('/login', login)
studentRouter.post('/logout', logout)




module.exports = studentRouter