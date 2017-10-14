/**
 *
* OVERVIEW: In this activity, you will implement a REST service to manage contacts. The rest service will store/retrieve contacts
* in memory. The rest service will implement the following operations:

	GET /contacts/id  This will read the specified contact from in memory data structure and return it in the response.
	Format for the Response body is:
	{"firstName":"Bill","lastName":"Gates","phone":"32003200"}

	POST /contacts  This will accept a JSON payload, create the contact in memory data structure and return id in the response.
	Format of JSON request body is: {"firstName":"Bill","lastName":"Gates","phone":"32003200"}
	Format of the JSON response is: {id:<id-of-new-contact}

	PUT /contacts/id  This will update the specified contacts details with the details in the JSON payload.
	Only fields that are specified in the request body need to be updated. Other fields of that contact should
	remain unchanged.
	Format of JSON request body is: {"firstName":"Bill","lastName":"Gates","phone":"32003200"}
	Format of the JSON response is: {id:<id-of-updated-contact>}

* ERROR CASES: Handle all error cases including:
*		Any Url other than urls shown above should return 404
*		Return bad request if any query string parameters are passed.
*		Return 404 if a non-existent contact id is passed.

* NOTES:
      1) Ensure you are starting the nodejs http server by running node ContactsHttpServer.js before running the tests.
*/

var url = require('url');
var http = require('http');
var querystring = require('querystring');
var PORT = 3000;

// Add your code for the contact server below

var result=[]
var id=100
var index=0
http.createServer(function(req, res) {
	var bodyStr = "";

	//This is the onData event listener that
	// gets called when there is a body in the incoming
	// http request
	req.on('data',function(chunk){
		console.log("recvd " + chunk.toString())
		bodyStr += chunk.toString();
	});

	//Actual request processing is done as part of the onEnd event
	// listener as shown below.
	req.on('end', function() {
		console.log('result array is')
		console.log(result)
		console.log('id now is')
		console.log(id)
		var str = "Received " + req.method + " request for " + req.url + " body: " + bodyStr;
		console.log(str);

		
	

		//response.end will send the response (including status and body)
		//response.statusCode(200);
		if(req.method=="GET"){
			console.log('march 18th',req.url);
			var url=req.url.split('/');
			console.log(url)
			console.log(url[url.length-1])
			console.log(url[url.length-2])
			if (url[url.length-2]=="contacts"){
				console.log('entered inside get for retieval')
			if(isNaN(url[url.length-1])==false){
				
				if(parseInt(url[url.length-1])<id && parseInt(url[url.length-1])>=100){
					
				res.end(JSON.stringify(result[parseInt(url[url.length-1])-100]))
			}
			else{

				res.statusCode=404;
				res.end(" ");

			}
			}
			else{
				res.statusCode=404;
				res.end(" ");

			}	
		}
		else{
			res.statusCode=404;
			res.end(" ");
		}
		
		

		}
		else if(req.method=="POST"){

			var temp_contact = JSON.parse(bodyStr);
		temp_contact.id=id;
		result.push(temp_contact);
		console.log(result[0])

		id++;
		res.end(JSON.stringify(temp_contact));

		}
		else if(req.method=="PUT"){
			var url=req.url.split('/');
			if(isNaN(url[url.length-1])==false){
				if(parseInt(url[url.length-1])<id && parseInt(url[url.length-1])>=100){
					var k=parseInt(url[url.length-1])-100;
					
				var a=JSON.parse(bodyStr);
			
				var b=Object.keys(a)
           for(i=0;i<Object.keys(a).length;i++){
           //result[k][a[i]]=a[a[i]];
           result[k][b[i]]=a[b[i]];
          
           }
           
           res.end(" ");

			}
			else{
				res.statusCode=404;
				res.end(" ");

			}
			}
			else{
				res.statusCode=404;
				res.end(" ");
			}	
            

		}
		else{
			res.statusCode=404;
				res.end(" ");

		}
		
	});

}).listen(PORT, function(err){
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log("server is listening on " + PORT);
});
