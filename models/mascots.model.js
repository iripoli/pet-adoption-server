const mongoose = require('mongoose')

const { Schema } = mongoose

const personalityArray = [
  'bueno con niños',
  'cauteloso',
  'timido',
  'ruidoso',
  'jugueton',
  'alegre'
]

const animalNeeds = ['caja', 'comida', 'jardin', 'jaula']

const mascotSchema = new Schema(
  {
    species: { type: String, required: true },
    birth: { type: Date, required: true },
    gender: { type: String, required: true },
    size: { type: String, required: true },
    weight: { type: String, required: true },
    history: { type: String },
    personality: [
      {
        type: String,
        enum: personalityArray,
        required: true
      }
    ],
    city: { type: String, required: true },
    location: {
      latitude: {
        type: Number,
        required: true
      },
      longitude: {
        type: Number,
        required: true
      }
    },
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    health: {
      vaccinated: { type: Boolean, required: true },
      dewormed: { type: Boolean, required: true },
      healthy: { type: Boolean, required: true },
      sterilized: { type: Boolean, required: true },
      registered: { type: Boolean, required: true },
      microchip: { type: Boolean, required: true },
      info: { type: String, required: true }
    },
    adoption: {
      requirements: {
        otherAnimals: { type: Boolean, required: true },
        coexistsWithAnimaltype: { type: String, required: true },
        friendly: { type: Boolean, required: true },
        animalNeeds: [
          {
            type: String,
            enum: animalNeeds,
            required: true
          }
        ],
        animalExpensesMonthly: { type: Number, required: true },
        animalFood: { type: String, required: true }
      },
      adoptionFee: { type: Number, required: true },
      shipToAnotherCity: { type: String, required: true }
    }
  },
  {
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc._id
        delete ret._id
        delete ret.__v
        return ret
      }
    }
  }
)

const Mascot = mongoose.model('Mascot', mascotSchema)

module.exports = Mascot
