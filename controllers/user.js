const models = require('../models')
const config = require('../config/config')
const utils = require('../utils')
const bcrypt = require('bcrypt')

module.exports = {
   get: (req, res, next) => {
      models.User.findById(req.query.id)
         .then((user) => res.send(user))
         .catch((err) => res.status(500).send('Error'))
   },

   post: {
      register: (req, res, next) => {
         const { username, password } = req.body
         models.User.create({ username, password })
            .then((createdUser) => {
               const token = utils.jwt.createToken({ id: createdUser._id })
               res.header('Authorization', token).send(createdUser)
            })
            .catch((err) => {
               console.log(err)
            })
      },
   },
}
