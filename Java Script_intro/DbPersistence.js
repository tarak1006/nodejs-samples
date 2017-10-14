var mysql = require('mysql');

var theConnection = null;

/*
 OVERVIEW: 	Implement GetConnection so it connects to the mysql db containing
 the contacts table. Read up http://mission-rnd.github.io/nodejs_mysql.htm
 to know what the contacts table schema should be.

 OUTPUT:		The function should set theConnection variable to a valid connection.

 ERROR CASES: Return null in case of an error connecting to the db.

 NOTES: 		1) Ensure you'e started mysql server and created the contacts table before running the tests.
 2) Ensure connection is opened only if theConnection is null.
 */


exports.GetConnection = function(){
	if (theConnection!=null)
		return null;
	else
		return mysql.createConnection({
						host: "localhost",
						user: "root",
						password: "kandula123",
						database: "sample2"
					});
theConnection.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return null;
  }
  console.log('Connection established');
});

};

exports.EndConnection = function(){
	theConnection.end();

};

/*
 OVERVIEW: 	AddContact function takes a contact object and inserts it into the contacts table in mysql db.

 INPUTS:		contact - Javascript object with properties (firstName, lastName, phone)
 callback(err, result) - Function to invoke after insertion where err and result are the mysql err
 and result objects respectively

 OUTPUT:		None

 ERROR CASES: error object should be passed to callback().

 NOTES: 		  Pay attention to the casing of contact object properties (firstName, lastName, phone). If these are different from the casing
 of the fields in the contacts table, ensure you are doing the needed mapping/conversions.

 */
exports.AddContact = function(contact, callback){
	var theConnection= mysql.createConnection({
						host: "localhost",
						user: "root",
						password: "kandula123",
						database: "sample2"
					});
	theConnection.connect();
	theConnection.query("insert into contacts2 SET ?",
	[contact],

    function(err, result){
     	if(err){
     		console.log(err);
     		process.exit(1);
     	}
     	console.log("tarak");
     	console.log("Contact insert result: ", result);
     	theConnection.end();
     	callback(err,result);


     	});

		

};
/*
 OVERVIEW: 	ReadContact function takes a contact id and reads the contact record from mysql

 INPUTS:		id - integer id representing contact id

 callback(err, contact) - Function to invoke after reading

 OUTPUT:		callback() should be invoked with a Javascript object reprsenting the contact record read from the db.

 ERROR CASES: error object should be passed to callback().


 */
exports.ReadContact = function(id, callback){
	var theConnection= mysql.createConnection({
						host: "localhost",
						user: "root",
						password: "kandula123",
						database: "sample2"
					});
	theConnection.connect();
theConnection.query("select id,firstname as firstName, lastname as lastName, phone from contacts2 WHERE id = ?", 
			[id],function(err, result){
			if(err){
				console.log(err);
			}
			theConnection.end();
			callback(err,result);
		});
};

/*
 OVERVIEW: 	ReadContacts function reads all the records from contacts table.

 INPUTS:		callback(err, contacts) - Function to invoke after reading

 OUTPUT:		callback() should be invoked with a Javascript array reprsenting all the contact records read from the db.

 ERROR CASES: error object should be passed to callback().


 */
exports.ReadContacts = function(callback){
	var theConnection= mysql.createConnection({
						host: "localhost",
						user: "root",
						password: "kandula123",
						database: "sample2"
					});
	theConnection.connect();
	theConnection.query("select id,firstname as firstName, lastname as lastName, phone from contacts2",function(err, result){
			if(err){
				console.log(err);
			}
			theConnection.end();
			callback(err,result);
		});

};

/*
 OVERVIEW: 	UpdateContact function updates a specified contact record..

 INPUTS:		id - contact id tht needs to be updated.
 newPhoneNumber - new phone number for the contact
 callback(err, result) - Callback to be invoked.

 OUTPUT:		callback() should be invoked with a Javascript object representing the UPDATED row (ie read the updated row and pass that
 to the callback).

 ERROR CASES: error object should be passed to callback().


 */
exports.UpdateContact = function(id, newPhoneNumber, callback){
	var theConnection= mysql.createConnection({
						host: "localhost",
						user: "root",
						password: "kandula123",
						database: "sample2"
					});
	theConnection.connect();

	theConnection.query(
  'UPDATE contacts2 SET phone = ? Where id = ?',
  [newPhoneNumber, id],
  function (err, result) {
    if (err) throw err;

    console.log('update');
    console.log(result);
    theConnection.query("select * from contacts2 WHERE id=?",[id]
    	,function(err, result){
			if(err){
				console.log(err);
			}
			 console.log(result);
			
			 theConnection.end();
			callback(err,result[0]);
		});
  	//callback(err,result);
  });

};

/* OVERVIEW: 	DeleteContact function deletes a specified contact record..

 INPUTS:		id - contact id tht needs to be deleted.
 callback(err, result) - Callback to be invoked.

 OUTPUT:		callback() should be invoked with the corresponding err,result objects from mysql.

 ERROR CASES: error object should be passed to callback().


 */
exports.DeleteContact = function(id, callback){
	var theConnection= mysql.createConnection({
						host: "localhost",
						user: "root",
						password: "kandula123",
						database: "sample2"
					});
	theConnection.connect();
	theConnection.query(
  'DELETE FROM contacts2 WHERE id = ?',
  [id],
  function (err, result) {
    if (err) throw err;

   
   console.log('Deleted ' + result.affectedRows + ' rows');
   theConnection.end();
   callback(err,result);
  });

};

