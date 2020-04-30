const express = require('express')
const app = express()
const morgan = require('morgan');
const db = require('./server/db')






const authen = async () => {
  try {
    await db.authenticate()
    console.log('connected to the database');

  } catch (error) {
    console.log(error.message)
  }
}

authen()

const port = process.env.PORT || 5000

app.use(port, () => console.log(`connection established at ${port}`))
