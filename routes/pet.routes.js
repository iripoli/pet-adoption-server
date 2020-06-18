const express = require('express')

const router = express.Router()

const mascotController = require('../controllers/mascots.controller')

router.get('/ping', (req, res, next) => {
  res.status(200).json('mascot endpoint working')
})

router.get('/list', mascotController.getAll)

router.get('/:id', mascotController.getMascotById)

router.put('/edit/:id', mascotController.updateMascot)

router.delete('/delete/:id', mascotController.deleteMascot)

router.post('/create', mascotController.create)

module.exports = router
