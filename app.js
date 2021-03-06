require('dotenv').config()
require('./config/db.config')

const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors');

const passport = require('passport')
require('./config/passport')

const indexRouter = require('./routes/index.routes')
const mascotRouter = require('./routes/pet.routes')
const authRouter = require('./routes/auth.routes')
const userRouter = require('./routes/user.routes')

const app = express()


app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(passport.initialize())


//=========ROUTES===================
// app.use('/mascot', mascotRouter)
// app.use('/user', userRouter)
app.use('/auth', authRouter)
app.use('/', indexRouter)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.status(err.status || 500).json(err.message)
})

module.exports = app