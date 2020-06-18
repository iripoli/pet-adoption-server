const User = require('../models/User')

const updateUser = async (req, res, next) => {
  try {
    const { email } = req.body
    const { name, phone, address, adoptionForm, familyForm } = req.body
    const user = await User.findOneAndUpdate(
      { email },
      { name, phone, address, adoptionForm, familyForm }
    )
    return res.status(200).json(user)
  } catch (e) {
    return next(e)
  }
}
const getUserInfo = async (req, res, next) => {
  try {
    const { email } = req.body
    const user = await User.findOne({ email })
    return res.status(200).json(user)
  } catch (e) {
    return next(e)
  }
}

module.exports = {
  updateUser,
  getUserInfo
}
