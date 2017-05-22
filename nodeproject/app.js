var express = require('express');
var app = express();
var port = process.env.PORT;
var eventRouter = require('./src/routes/eventRouts');
var dbRouter = require('./src/routes/dbroutes');
app.use(express.static('public'));

app.use(express.static('bower_components'));

app.set('views','./src/views');
app.set('view engine', 'ejs');
 
 app.use('/events', eventRouter)
 app.use('/Db', dbRouter)

app.get('/',function(req,res){
 //res.send('Aloha world');  
 
 res.render('index',{ 
  list: ['first val','second val','third val'],
  nav: [
   {Link:'Services',Text:'Services'},
  {Link:'Portfolio',Text:'Portfolio'},
  {Link:'About',Text:'About'},
  {Link:'Team',Text:'Team'},
  {Link:'Contact',Text:'Contact'}
  ]
  
 });
});
app.get('/routing',function(req,res){
 res.send('Aloha routing');   
});
app.listen(port,function(err){
   console.log('Server runs on port '+port); 
});