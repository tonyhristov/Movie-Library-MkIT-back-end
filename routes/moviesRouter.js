const controllers = require('../controllers')
const router = require('express').Router()

router.get('/', controllers.movies.getMovies)

module.exports = router
