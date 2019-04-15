const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

//setup environment
dotenv.config()

//mongo db connect
mongoose.connect(process.env.MONGODB_URL, { useNewUrlparser: true })

const app = express()

//run app
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`server running on port ${PORT}`))
