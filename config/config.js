require('dotenv').config()

const env = process.env.NODE_ENV

const config = {
   development: {
      port: process.env.PORT,
      secret: process.env.SECRET,
      dbURL: process.env.DB_URL,
      authCookieName: process.env.COOKIE,
   },
   production: {},
}

module.exports = config[env]
