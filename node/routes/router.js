const express = require('express')
const router = express.Router()
const {emailValid, passwordValid, isSecretValid} = require('../middleware/middle')
const {register, login, photo, update, userinfo, imageurl, createpost, getposts, getsinglepost} = require('../controllers/main-controller')

router.post('/register', emailValid, passwordValid, register)
router.post('/login', emailValid, login)
router.post('/photo', photo)
router.post('/update', emailValid, update)
router.post('/userinfo', isSecretValid, userinfo)
router.post('/imageurl', isSecretValid, imageurl)
router.post('/createpost', isSecretValid, createpost)
router.post('/allposts', isSecretValid, getposts)
router.get('/singlepost/:id', getsinglepost)

module.exports = router