const { model } = require('mongoose')
const models = require('../models')

const getCurrentUser = (req, res, next) => {
   models.User.findById(req.body.userId)
      .then((user) => res.send(user))
      .catch((err) => res.status(500).send('Error'))
}

module.exports = {
   getNote: (req, res, next) => {
      const userId = req.body.userId
      const movieId = req.body.movieId
      const note = req.body.note

      models.User.findById(userId)
         .then((user) => {
            const notesArr = user.notes

            notesArr.forEach(function (arrayItem) {
               const note = Object.keys(arrayItem)
               if (note[0] == movieId) {
                  res.send(arrayItem)
               }
            })
         })
         .catch((err) => res.status(500).send('Error'))
   },

   addNote: (req, res, next) => {
      const userId = req.body.userId
      const movieId = req.body.movieId
      const note = req.body.note

      models.User.findByIdAndUpdate(userId, {
         $addToSet: {
            notes: { [movieId]: note },
         },
      })
         .then((user) => {
            getCurrentUser(req, res, next)
         })
         .catch((err) => console.log(err))
   },

   removeNote: (req, res, next) => {
      const userId = req.body.userId
      const movieId = req.body.movieId
      const note = req.body.note

      models.User.findByIdAndUpdate(userId, {
         $pull: { notes: { [movieId]: note } },
      })
         .then((user) => {
            getCurrentUser(req, res, next)
         })
         .catch((err) => console.log(err))
   },
}
