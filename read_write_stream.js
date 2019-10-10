var http =  require('http');
var fs  = require('fs');

var myReadStream = fs.createReadStream(__dirname+'/read.txt', 'utf8')
var myWriteStream = fs.createWriteStream(__dirname+'/write.txt', 'utf8')

myReadStream.on('data', function(chunk){
  console.log('new chunk received:')
  myWriteStream.write(chunk)
})