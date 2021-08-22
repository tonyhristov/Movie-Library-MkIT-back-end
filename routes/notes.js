const controllers = require('../controllers')
const router = require('express').Router()

router.get('/getNote', controllers.notes.getNote)
router.put('/addNote', controllers.notes.addNote)
router.put('/removeNote', controllers.notes.removeNote)

module.exports = router
