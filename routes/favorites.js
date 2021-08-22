const controllers = require('../controllers')
const router = require('express').Router()

router.get('/getFavorites/:id', controllers.favorites.getFavorites)
router.put('/addFavorite', controllers.favorites.addFavorite)
router.put('/removeFavorite', controllers.favorites.removeFavorite)

module.exports = router
