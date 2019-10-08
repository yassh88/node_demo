var event  = require('events')
var util  = require('util');

var Person = function(name){
  this.name =name;
}

util.inherits(Person,event.EventEmitter)

var james = new Person('james');
var marry = new Person('marry');
var yash = new Person('yash');
var jhone = new Person('jhone');

var people = [james, marry, yash, jhone];

people.forEach(function(person){
  person.on('speak',function(say){
    console.log(person.name + ' said '+ say)
  });
})

module.exports = {james,marry, yash, jhone}