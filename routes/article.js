const express = require('express')
const router = express.Router()

const articleModel = require('../model')

router.use('/', articleModel)

module.exports = router
