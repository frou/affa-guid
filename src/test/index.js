var chai = require('chai')
var expect = chai.expect

var affaGuid = require('..')

describe('affa guid', function () {
  var N = 1000
  var generated = {}

  before(function () {
    for (var i = 0; i < N; i++) {
      generated[affaGuid()] = true
    }
  })

  it('Generates UUIDs that are all lowercase, start with a letter, and have no dashes', function () {
    for (var uuid in generated) {
      // eslint-disable-next-line no-unused-expressions
      expect(/^[a-f][a-f0-9]{31}$/.test(uuid)).to.be.true
    }
  })

  it('Generates UUIDs that are unique each time', function () {
    expect(Object.keys(generated).length).to.equal(N)
  })
})
