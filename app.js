 
var fs  = require('fs');

// var data = fs.readFileSync('./read.txt', 'utf8');
var data = fs.readFile('./read.txt', 'utf8', function(err,data){
  console.log(data);
});

//fs.writeFileSync('./write.txt', data);
