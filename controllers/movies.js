const fetch = require('node-fetch')
const request = require('request')

module.exports = {
   getMovies: (req, res, next) => {
      const { movie } = req.body

      fetch(`https://api.tvmaze.com/search/shows?q=${movie}`)
         .then((res) => res.json())
         .then((json) => res.send(json))
   },
}
