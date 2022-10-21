const express = require("express")
const app = express()
const cors = require("cors")
const mainRouter = require('./routes/router')
const mongoose = require('mongoose')

app.use(cors())

app.use(express.json())


app.listen(4000)

app.use('/', mainRouter)

app.get("/info", (req, res) => {

    const info = "Oj seneliumbai viskas labai gerai su serveriu"

    res.send({info})
})



