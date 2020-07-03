const dishSchema = require('../models/dish.model')

const getAll = async (req, res) => {
    console.log('getAll')
    try {
        const response = await dishSchema.find().sort({ name: -1 }).limit(10).populate('ingredients')
        res.json(response)
    } catch (err) {
        res.send(err)
    }
}

const addDish = async (req, res) => {
    try {
        const dish = await dishSchema.insertMany(req.body)
        res.json(dish[0])
    } catch (err) {
        res.send(err)
    }
}

const getDish = async (req, res) => {
    try {
        const dish = await dishSchema.findOne({ _id: req.params.id }).populate('ingredients')
        res.json(dish)
    } catch (err) {
        res.send(err)
    }
}

module.exports = { getAll, addDish, getDish }
