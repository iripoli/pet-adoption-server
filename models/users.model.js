const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true },
    phone: { type: String },
    password: { type: String, required: true },
    address: {
      street: { type: String },
      number: { type: String },
      floor: { type: String },
      door: { type: String },
      postalCode: { type: String },
      city: { type: String },
      country: { type: String }
    },
    adoptionForm: {
      otherAnimals: { type: Boolean },
      type: { type: String },
      friendly: { type: Boolean },
      reasonToAdopt: { type: String },
      animalNeeds: { type: String },
      animalExpenses: { type: String },
      animalFood: { type: String },

    },
    familyForm: {
      address: {
        street: { type: String },
        number: { type: String },
        floor: { type: String },
        door: { type: String },
        postalCode: { type: String },
        city: { type: String },
      },
      rent: { type: Boolean },
      rentAllowAnimals: { type: Boolean },
      moveSoon: { type: Boolean },
      garden: { type: Boolean },
      liveWithPeople: { type: Boolean },
      adoptionAgreement: { type: Boolean },
      visitingAllow: { type: Boolean }
    }
  },
  {
    timestamps: true
  }

)

const User = mongoose.model('User', userSchema)
module.exports = User
