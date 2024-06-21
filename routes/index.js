const express = require('express')
const router = express.Router()

const article = require('./article')
router.use('/', article)

module.exports = router