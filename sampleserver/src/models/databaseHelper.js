/**
 * Method is used to create a connection to the database.
 * @param dbconfig - contains host, port, database, user and password.
 * @returns {*} connection
 */
 var mysql = require('mysql');

var theConnection = null;
exports.getConnection = function(dbconfig) {
	try{
		theConnection=mysql.createConnection({
						host: dbconfig["host"],
						user: dbconfig["user"],
						password: dbconfig["password"],
						database: dbconfig["database"],
						port:a["port"]
					});
		return theConnection;
	}
	catch(e){
		return null;
	}


};

/**
 * Method is used to terminate the database connection
 */
exports.endConnection = function() {
	theConnection.end();
};

/**
 * Method is used to retrieve the dbConfig used to connect to a database
 * @returns {{host: string, user: string, password: string, database: string, port: number}}
 */
exports.getDBConfig = function() {
	var a={host:"localhost", user: "root", password:"kandula123", database: "sampleserver_db", port: "3001"

	}
	return a;

};

