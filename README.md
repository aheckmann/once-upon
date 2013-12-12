#once-upon
===========

Executes a callback at most once upon the first of any number of events.

### example

var once = require('once-upon');
var E = require('events').EventEmitter;

onceUpon('SIGINT SIGTERM', process, function(){
  console.log('I will be called at most once');
});


process.emit('SIGTERM'); // "I will be called at most once"

### install

```
> npm install once-upon
```

### License

MIT

