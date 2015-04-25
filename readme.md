# oncall
[![NPM](https://nodei.co/npm/oncall.png)](https://nodei.co/npm/oncall/)

Emit events for method calls on an object. Keep in mind that this will modify the 
original objects methods.

```js
var oncall = require('oncall')
var cat = {
  meow: function(sound) {
    return sound
  }
}

var calls = oncall(cat)
calls.on('meow', function(sound) {
  console.log('meow called with', sound)
})

cat.meow('MEOOOW') // prints "meow called with MEOOOW"
```