const express = require('express')
const assingmentRouter = express.Router()
const { ensureAuthenticated } = require('../config/auth')

const {create,
        getAllAssingments,
        getAssingment
} = require('../controllers/assingmentController')

assingmentRouter.post('/create', ensureAuthenticated,create)
assingmentRouter.get('/:id', ensureAuthenticated, getAssingment)



module.exports = assingmentRouter
