const express = require('express')
const router = express.Router()
const {emailValid, passwordValid} = require('../middleware/middle')
const {register, login, photo, update, userinfo} = require('../controllers/main-controller')

router.post('/register', emailValid, passwordValid, register)
router.post('/login', emailValid, login)
router.post('/photo', photo)
router.post('/update', emailValid, update)
router.post('/userinfo', userinfo)

module.exports = router