const controllers = require('../controllers/')
const router = require('express').Router()

router.get('/', controllers.user.get)

router.post('/register', controllers.user.post.register)

router.post('/login', controllers.user.post.login)

module.exports = router
