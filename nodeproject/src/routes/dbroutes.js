var express = require('express');
var dbRouter = express.Router()
var mongodb = require('mongodb').MongoClient;
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
                

dbRouter.route('/AddEventData')
  .get(function(req,res){
     // res.send('Successsss!!');
        var url= '/mongodb://localhost:27017/eventsDb';
        mongodb.connect(url, function(err , db){
            var collection = db.collection('events');
            collection.insertMany(eventsData, function(err, results){
                res.send(results);
                db.close();
            });
            
        });
  
 });
 
module.exports = dbRouter;