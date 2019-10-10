var event  = require('events')

var myEmitter  =  new event.EventEmitter();
myEmitter.on('someEvent', function(msg){
console.log('is working ' +msg)
})


module.exports  = myEmitter;

 
// var myEmitter  = require('./events')
// myEmitter.emit('someEvent','yooyyyy');
