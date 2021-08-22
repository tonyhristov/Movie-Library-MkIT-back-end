const user = require('./userRouter')
const movies = require('./moviesRouter')
const favorites = require('./favorites')

module.exports = {
   user,
   movies,
   favorites,
}
