#once-upon

Executes a callback at most once upon the first of any number of events.

### example

```js
var once = require('once-upon');
var E = require('events').EventEmitter;
var ee = new E;

once('jump eat sleep', ee, function(){
  console.log('I will be called at most once');
});

ee.emit('eat'); // "I will be called at most once"
ee.emit('sleep');
ee.emit('jump');
```

### install

```
npm install once-upon
```

### License

MIT

