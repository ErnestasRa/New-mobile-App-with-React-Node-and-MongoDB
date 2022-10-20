const express = require("express")
const router = express.Router()
const {emailValid, passwordsValid, userValid, secretValid} = require("../midleware/middle")

const {register, login, getPhoto} = require("../controllers/mainController")


router.post("/register", emailValid, passwordsValid, userValid, register)
router.post("/login", login)
router.get("/getPhoto/:secret", secretValid, getPhoto)


module.exports = router