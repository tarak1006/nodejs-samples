var tasks = require("./../models/tasks");

/**
 * This file will contain the methods to handle requests to /tasks url.
 *
 * Invoke appropriate methods from models/tasks file to perform corresponding DB operations.
 */
var express = require('express');
var router = express.Router();



router.get('/:id', function(req, res, next) {
    tasks.getTaskById(req.params.id,fuction(err,result){

    	res.end(JSON.stringify(result));

    });
   
    

});
router.get('/', function(req, res, next) {
	tasks.getTasks(fuction(err,result){

    	res.end(JSON.stringify(result));

    });
    
   
    //res.send(JSON.stringify(requested_contact));
});
router.post('/',function(req,res,next){
    var task=JSON.parse(req.body);
    tasks.createTask(task,fuction(err,result){

    	res.end(JSON.stringify(result));

    });
    
        res.end(JSON.stringify(contact));

    
});
router.put('/:id',function(req,res,next){
        var a=JSON.parse(req.body);
        tasks.updateTaskById (req.params.id,a,fuction(err,result){

    	res.end(JSON.stringify(result));

    });
     
          // res.statusCode=200;
          // res.end("");

});


router.del('/:id', function(req, res, next) {
	tasks.deleteTaskById (req.params.id,fuction(err,result){

    	res.end(JSON.stringify(result));

    });

    
   
    
});
