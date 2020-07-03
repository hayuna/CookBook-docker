const router = require('express').Router()
const DishController = require('../controllers/dish.controller')

router
    .route('/')
    .get(DishController.getAll)
    .post(DishController.addDish)

router
    .route('/:id')
    .get(DishController.getDish)

module.exports = router