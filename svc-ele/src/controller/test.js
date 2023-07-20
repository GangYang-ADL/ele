const test = require('../../data/test')

module.exports = (req, res, next) => {
  console.log('controller/test.js')
  const testData = test()
  testData.desc = 'this is a testing graph'
  // res.fail('Fail to load')
  res.success(testData)
}
