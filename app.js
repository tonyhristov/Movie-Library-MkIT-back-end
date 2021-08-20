const express = require('express')
const config = require('./config/config')
const dbConnection = require('./config/database')

const app = express()

dbConnection()
   .then(() => {
      require('./config/routes')(app)

      require('./config/routes')(app)

      app.use(function (err, req, res, next) {
         console.error(err)
         res.status(500).send(err.message)
         console.log('*'.repeat(90))
      })

      app.listen(config.port, console.log(`Listening on port ${config.port}!`))
   })
   .catch(console.error)
