/**
 * Write up methods to perform operations on tasks table.
 */

/**
 * Method is used to retrieve all the tasks..
 * @param callback callback handler with error and result.
 */

 var dbHelper = require("./../../src/models/databaseHelper");
exports.getTasks = function(callback) {
	var connection = dbHelper.getConnection(dbConfig);
        
	
	connection.connect();
	
	connection.query("select * from students",function(err, result){
			if(err){
				console.log(err);
			}
			dbHelper.endConnection();

			callback(err,result);
		});

};

/**
 * Method is used to get task with given id.
 * @param id Id to the task
 * @param callback callback handler with error and result.
 */
exports.getTaskById = function(id, callback) {
	var connection = dbHelper.getConnection(dbConfig);
        
	
	connection.connect();
connection.query("select * from students WHERE id = ?", 
			[id],function(err, result){
			if(err){
				console.log(err);
			}
			dbHelper.endConnection();

			callback(err,result);
		});

};

/**
 * Method is used to update a task with given id.
 * @param id Id to the task
 * @param task json object having tasks fields to be updated ("title", "descriptions")
 * @param callback callback handler with error and result.
 */
exports.updateTaskById = function(id, task, callback) {
 		var connection = dbHelper.getConnection(dbConfig);
        
	
	connection.connect();
	if(task["description"]!=undefined){
 		connection.query('UPDATE students SET description = ? Where id = ?',
  [task["description"], id], function (err, result) {
    if (err) throw err;

    console.log('update');
    console.log(result);


    connection.query("select * from students WHERE id=?",[id]
    	,function(err, result){
			if(err){
				console.log(err);
			}
			 console.log(result);
			
			 dbHelper.endConnection();
			 callback(err,result[0]);
		});
    
		});

 	}
 
  	//callback(err,result);
 



};

/**
 * Method is used to delete a given task
 * @param id Id to the task
 * @param callback callback handler with error and result.
 */
exports.deleteTaskById = function(id, callback) {
	var connection = dbHelper.getConnection(dbConfig);
        
	
	connection.connect();
	connection.query(
  'DELETE FROM students WHERE id = ?',
  [id],
  function (err, result) {
    if (err) throw err;

   
   console.log('Deleted ' + result.affectedRows + ' rows');
   dbHelper.endConnection();

   callback(err,result);
  });



};

/**
 * Method is used to delete a task.
 * @param task json object having tasks fields ("id, tasks", "descriptions")
 * @param callback callback handler with error and result.
 */
exports.createTask = function(task, callback) {
	var connection = dbHelper.getConnection(dbConfig);
        
	
	connection.connect();
	connection.query("insert into students SET ?",
	[task],

    function(err, result){
     	if(err){
     		console.log(err);
     		process.exit(1);
     	}
     	console.log("tarak");
     	console.log("Contact insert result: ", result);
     	dbHelper.endConnection();
     	callback(err,result);


     	});

};

/**
 * Method is used to create the table for tasks
 * @param callback callback handler with error and result.
 */
exports.setupTasksTable = function (callback) {
	
	 var dbConfig = dbHelper.getDBConfig();
        

CREATE SCHEMA dbConfig["database"];

CREATE  TABLE dbConfig["database"].`students` (

  `id` INT NOT NULL AUTO_INCREMENT,

  `title` VARCHAR(70) NOT NULL ,

  `description` VARCHAR(150) NOT NULL ,
  PRIMARY KEY (`id`) );

};