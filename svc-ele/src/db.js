const test = require('../data/test')
const homePage = require('../data/home_page')

function responseData(data) {
  return {
    code: 0,
    msg: 'success',
    data,
  }
}

module.exports = () => {
  return {
    test: test(),
    home_page: responseData(homePage()),
  }
}
