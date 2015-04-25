var oncall = require('./')
var test = require('tape')

var example = {
  test1: function(a, b) {
    return '1' + a + b
  },
  testa: function(a, b) {
    return 'a' + a + b
  }
}

test('oncall', function (t) {
  var calls = oncall(example)
  t.plan(6)
  calls.on('test1', function (a, b) {
    t.equals(a, '2', 'test1 param 1')
    t.equals(b, '3', 'test1 param 2')
  })
  calls.on('testa', function (a, b) {
    t.equals(a, 'b', 'testa param 1')
    t.equals(b, 'c', 'testa param 1')
  })
  t.equals(example.test1('2', '3'), '123', 'return value test1')
  t.equals(example.testa('b', 'c'), 'abc', 'return value testa')
})

