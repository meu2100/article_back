const express = require('express')
const router = express.Router()
const article = require('./article')

router.use('/', article)

router.get('/', (req, res)=>{
  res.send('這裡製作article的curd')
})


module.exports = router