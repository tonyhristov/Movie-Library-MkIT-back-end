const router = require('../routes/')

module.exports = (app) => {
   app.use('/api/user', router.user)
   app.use('/api/movies', router.movies)

   app.use('*', (req, res, next) => {
      res.send('Something went wrong')
   })
}
