var assert = require('assert')
var affaGuid = require('..')

describe('affa guid', function () {
  var N = 1000

  before(function () {
    assert(N >= 2, 'Tests need multiple UUIDs to be generated')
  })

  var generated

  beforeEach(function () {
    generated = {}
    for (var i = 0; i < N; i++) {
      generated[affaGuid()] = true
    }
  })

  it('Generates UUIDs that are all lowercase, start with a letter, and have no dashes', function () {
    for (var uuid in generated) {
      assert(/^[a-f][a-f0-9]{31}$/.test(uuid), uuid)
    }
  })

  it('Generates UUIDs that are unique each time', function () {
    assert(Object.keys(generated).length === N)
  })
})
