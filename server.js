if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('./routes'))

mongoose.connect(process.env.MONGO_URI) ||
  'mongodb://localhost/social-media-api',
  {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
// Use this to log mongo queries being executed!
mongoose.set('debug', true)

app.listen(PORT, () => console.log(`connected to ${PORT}`))
