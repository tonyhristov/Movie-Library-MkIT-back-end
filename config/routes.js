const router = require('../routes/')

module.exports = (app) => {
   app.use('/user', router.user)

   app.use('*', (req, res, next) => {
      res.send('Something went wrong')
   })
}
