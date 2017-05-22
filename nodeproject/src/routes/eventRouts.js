var express = require('express');
var eventRouter = express.Router()

var eventsData = [{ 
                name:'Event 1',
                date: '2016.04.04',
                description: 'opra'},
                { 
                name:'Event 2',
                date: '2016.05.05',
                description: 'opra'},
                { 
                name:'Event 3',
                date: '2016.06.06',
                description: 'opra'},
                { 
                name:'Event 4',
                date: '2016.07.07',
                description: 'opra'}];
                
eventRouter.route('/')
  .get(function(req,res){
   //res.send('Hello Events');
  res.render('events',{ 
  list: ['first val---','second val','third val'],
  nav: [
   {Link:'Services',Text:'Services'},
  {Link:'Portfolio',Text:'Portfolio'},
  {Link:'About',Text:'About'},
  {Link:'Team',Text:'Team'},
  {Link:'Contact',Text:'Contact'}
  ],
  events : eventsData
  
 });
  })
  
eventRouter.route('/:id')
 .get(function(req,res){
     var id = req.params.id;
  res.render('event',{ 
  list: ['first val---','second val','third val'],
  nav: [
   {Link:'Services',Text:'Services'},
  {Link:'Portfolio',Text:'Portfolio'},
  {Link:'About',Text:'About'},
  {Link:'Team',Text:'Team'},
  {Link:'Contact',Text:'Contact'}
  ],
  events : eventsData[id]
  
 });
 })

module.exports =eventRouter;