const router = require('../routes/')

module.exports = (app) => {
   app.use('/api/user', router.user)
   app.use('/api/movies', router.movies)
   app.use('/api/favorites', router.favorites)

   app.use('*', (req, res, next) => {
      res.send('Something went wrong')
   })
}
