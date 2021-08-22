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

      login: (req, res, next) => {
         const { username, password } = req.body

         models.User.findOne({ username })
            .then((user) => Promise.all([user, user.matchPassword(password)]))
            .then(([user, match]) => {
               if (!match) {
                  res.status(401).send('Invalid password')
               }

               const token = utils.jwt.createToken({
                  id: user._id,
               })
               res.header('Authorization', token).send(user)
            })
            .catch(next)
      },
   },
}
