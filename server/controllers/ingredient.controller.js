const ingredientSchema = require('../models/ingredient.model')

const getAll = async (req, res) => {
    try {
        const response = await ingredientSchema.find().sort({ name: -1 }).limit(10)
        res.json(response)
    } catch (err) {
        res.send(err)
    }
}

const addIngredient = async (req, res) => {
    try {
        const ingredient = await ingredientSchema.insertMany(req.body)
        res.json(ingredient[0])
    } catch (err) {
        res.send(err)
    }
}

module.exports = { getAll, addIngredient }
