var http =  require('http');
var fs  = require('fs');

var server = http.createServer(function(req, res){
    if(req.url === '/home' || req.url === '/' ){
      res.writeHead(200,{'Content-Type': 'text/html'})
      var myReadStream = fs.createReadStream(__dirname+'/index.html', 'utf8')
      myReadStream.pipe(res)
    } else if(req.url === '/contact' ){
      res.writeHead(200,{'Content-Type': 'text/html'})
      var myReadStream = fs.createReadStream(__dirname+'/contact.html', 'utf8')
      myReadStream.pipe(res)
    } else if(req.url === '/api/getUserData' ){
      res.writeHead(200,{'Content-Type': 'application/json'})
      var data =[{userName: 'yashwant', id: 1}, {userName: 'sakshi', id: 2}]
      res.end(JSON.stringify(data));
    }else {
      res.writeHead(200,{'Content-Type': 'text/html'})
      var myReadStream = fs.createReadStream(__dirname+'/404.html', 'utf8')
      myReadStream.pipe(res)
    }
});

server.listen(3000, '127.0.0.1');

console.log('node is listening ')