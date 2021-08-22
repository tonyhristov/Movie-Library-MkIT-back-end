const user = require('./userRouter')
const movies = require('./moviesRouter')
const favorites = require('./favorites')
const rating = require('./rating')
const notes = require('./notes')

module.exports = {
   user,
   movies,
   favorites,
   rating,
   notes,
}
