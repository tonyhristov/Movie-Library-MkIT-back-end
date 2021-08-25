const { model } = require('mongoose')
const models = require('../models')

const getCurrentUser = (req, res, next) => {
   models.User.findById(req.body.userId)
      .then((user) => res.send(user))
      .catch((err) => res.status(500).send('Error'))
}

module.exports = {
   getRating: (req, res, next) => {
      const userId = req.headers.userid
      const movieId = req.headers.movieid
      let arr = []

      models.User.findById(userId)
         .then((user) => {
            const ratingArr = user.ratings

            ratingArr.forEach(function (arrayItem) {
               const rating = Object.keys(arrayItem)
               if (rating[0] == movieId) {
                  arr.push(arrayItem)
               }
            })
            res.send(arr.pop())
         })
         .catch((err) => console.log(err))
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
