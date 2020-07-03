const router = require('express').Router()
const IngredientController = require('../controllers/ingredient.controller')

router
    .route('/')
    .get(IngredientController.getAll)
    .post(IngredientController.addIngredient)

module.exports = router