const Mascot = require('../models/Mascot')

const create = async (req, res, next) => {
  try {
    const {
      species,
      birth,
      gender,
      size,
      weight,
      history,
      personality,
      location,
      city,
      name,
      imageUrl,
      health,
      adoption
    } = req.body

    const newMascot = new Mascot({
      species,
      birth,
      gender,
      size,
      weight,
      history,
      location,
      personality,
      city,
      name,
      imageUrl,
      health,
      adoption
    })

    await newMascot.validate()

    const createdMascot = await newMascot.save()
    return res.status(200).json(createdMascot)
  } catch (err) {
    next(err)
  }
}

const getAll = async (req, res, next) => {
  try {
    const mascotList = await Mascot.find()
    return res.status(200).json(mascotList)
  } catch (err) {
    next(err)
  }
}

const getMascotById = async (req, res, next) => {
  try {
    const { id } = req.params
    const mascot = await Mascot.findById(id)
    return res.status(200).json(mascot)
  } catch (err) {
    next(err)
  }
}

const updateMascot = async (req, res, next) => {
  try {
    const { id } = req.params
    const {
      species,
      birth,
      gender,
      size,
      weight,
      history,
      personality,
      location,
      city,
      name,
      imageUrl,
      health,
      adoption
    } = req.body
    const mascot = await Mascot.findByIdAndUpdate(id, {
      species,
      birth,
      gender,
      size,
      weight,
      history,
      location,
      personality,
      city,
      name,
      imageUrl,
      health,
      adoption
    })
    await mascot.validate()
    const updatedMascot = await mascot.save()
    return res.status(200).json(updatedMascot)
  } catch (err) {
    next(err)
  }
}

const deleteMascot = async (req, res, next) => {
  try {
    const { id } = req.params
    await Mascot.findByIdAndDelete(id)
    const newMascotList = await Mascot.find()
    return res.status(200).json(newMascotList)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  create,
  getAll,
  getMascotById,
  updateMascot,
  deleteMascot
}
