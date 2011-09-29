var express = require('express');

var app = express.createServer();

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use({ src: __dirname + '/public' });
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req,res){
  res.render('index');
});



app.listen(3000);
