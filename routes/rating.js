const controllers = require('../controllers')
const router = require('express').Router()

router.get('/getRating', controllers.rating.getRating)
router.put('/addRating', controllers.rating.addRating)
router.put('/removeRating', controllers.rating.removeRating)

module.exports = router
