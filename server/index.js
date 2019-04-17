const express = require('express')
const dotenv = require('dotenv').config({ path: '.env' })
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const users = require('./routes/users')

//setup environment
dotenv.config()

//mongo db connect
mongoose.connect(process.env.MONGODB_URL, { useNewUrlparser: true })

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use('/api/users', users)
//run app
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`server running on port ${PORT}`))
