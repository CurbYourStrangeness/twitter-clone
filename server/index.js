const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/users')

//setup environment
require('dotenv').config()

//mongo db connect
mongoose.connect(process.env.MONGODB_URL, {
  useCreateIndex: true,
  useNewUrlParser: true
})

const app = express()
app.use(routes)

//run app
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`server running on port ${PORT}`))
