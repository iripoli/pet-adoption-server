const mongoose = require('mongoose')

const DB_URI = process.env.DB_URI || 'mongodb+srv://iripoli96:julian96@pet-adoption-db-wmzu7.mongodb.net/pet-adoption'

mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Connected to DB ${DB_URI}`))
  .catch((err) => console.log(`Could not connect to DB ${DB_URI}`, err.message))
