const test = require('./controller/test')
const home_search = require('./controller/home_search.js')

module.exports = (server) => {
  server.use('/api/test', test)
  server.use('/api/home_search', home_search)
}
