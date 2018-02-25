var uuid = require('uuid/v4')
var randomInt = require('random-int')

module.exports = function () {
  var conventional = uuid()
  var dedashed = conventional.replace(/-/g, '')
  var ASCIIa = 97
  var ASCIIf = 102
  var letterPrefix = String.fromCharCode(randomInt(ASCIIa, ASCIIf))
  return letterPrefix + dedashed.slice(1)
}
