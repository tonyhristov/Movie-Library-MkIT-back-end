const controllers = require('../controllers')
const router = require('express').Router()

router.get('/', controllers.movies.getMovies)
router.get('/getMovie', controllers.movies.getMovie)

module.exports = router
