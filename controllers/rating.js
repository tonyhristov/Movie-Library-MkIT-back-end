const { model } = require('mongoose')
const models = require('../models')

const getCurrentUser = (req, res, next) => {
   models.User.findById(req.body.userId)
      .then((user) => res.send(user))
      .catch((err) => res.status(500).send('Error'))
}

module.exports = {
   getRating: (req, res, next) => {
      models.User.findById(req.params.id)
         .then((user) => res.send(user.ratings.movieId))
         .catch((err) => res.status(500).send('Error'))
   },

   addRating: (req, res, next) => {
      const userId = req.body.userId
      const movieId = req.body.movieId
      const rating = req.body.rating

      models.User.findByIdAndUpdate(userId, {
         $addToSet: {
            ratings: { [movieId]: rating },
         },
      })
         .then((user) => {
            getCurrentUser(req, res, next)
         })
         .catch((err) => console.log(err))
   },

   removeRating: (req, res, next) => {
      const userId = req.body.userId
      const movieId = req.body.movieId
      const rating = req.body.rating

      models.User.findByIdAndUpdate(userId, {
         $pull: { ratings: { [movieId]: rating } },
      })
         .then((user) => {
            getCurrentUser(req, res, next)
         })
         .catch((err) => console.log(err))
   },
}
