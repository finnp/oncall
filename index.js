var EventEmitter = require('events').EventEmitter

module.exports = function (obj) {
  var calls = new EventEmitter()
  for(methodName in obj) {
    if (typeof obj[methodName] !== 'function') continue

    var originalMethod = obj[methodName]
    obj[methodName] = (function (methodName, originalMethod) {
      return function() {
        calls.emit
          .bind(calls, methodName)
          .apply(calls, arguments)
        return originalMethod.apply(obj, arguments)
      }
    })(methodName, originalMethod)
  }
  return calls
}