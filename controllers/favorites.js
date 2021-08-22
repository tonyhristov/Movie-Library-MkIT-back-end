const models = require('../models')

const getCurrentUser = (req, res, next) => {
   models.User.findById(req.body.userId)
      .then((user) => res.send(user))
      .catch((err) => res.status(500).send('Error'))
}

module.exports = {
   getFavorites: (req, res, next) => {
      models.User.findById(req.params.id)
         .then((user) => res.send(user.favorites))
         .catch((err) => res.status(500).send('Error'))
   },

   addFavorite: (req, res, next) => {
      models.User.findByIdAndUpdate(req.body.userId, {
         $addToSet: {
            favorites: req.body.movieId,
         },
      })
         .then((user) => {
            getCurrentUser(req, res, next)
         })
         .catch((err) => console.log(err))
   },

   removeFavorite: (req, res, next) => {
      models.User.findByIdAndUpdate(req.body.userId, {
         $pullAll: {
            favorites: [req.body.movieId],
         },
      })
         .then((user) => {
            getCurrentUser(req, res, next)
         })
         .catch((err) => console.log(err))
   },
}
