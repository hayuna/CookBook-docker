const { Schema, model } = require('mongoose')

const dishSchema = new Schema({
    name: String,
    picture: String,
    recipe: String,
    ingredients: [
        { type: Schema.ObjectId, ref: 'Ingredient' }
    ]
})

module.exports = model('Dish', dishSchema)