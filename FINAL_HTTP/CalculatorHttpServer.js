/**
* OVERVIEW: Implement a CalculatorService that supports the following http operations:
* 		GET /calculator?op=<operation>op1=<num>&op2=<num>
*		POST 	/calculator and request body is a json object {"op":"<operation>","op1":"<num1>","op2":"<num2>"}
*		
*		Both GET/POST opertions should return 200 code on success and the response body should be the
*		sum of the 2 numbers
*
*	    Supported Operations:add,sub,mul,div
*
* ERROR CASES: Handle all error cases including:
*		Any Url other than /calculator/sum should return 404. 
*		Return status code for "bad request" if op1 and op2 are not numbers.
*	    Return status code for "method not allowed" if the request method is neither GET or POST
*	    LookUp the error code for bad request and method not allowed

* NOTES: Ensure you are starting the nodejs http server by running node CalculatorHttpServer.js before running the tests.
*/

var http = require('http');
var querystring = require('querystring');
var url = require('url');
var PORT = 3000;

// Add your code to startup http server and process request here.

http.createServer(function(req, response) {
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

		var str = "Received " + req.method + " request for " + req.url + " body: " + bodyStr;
		console.log(str);

		/*var responseBody = new Object();
		responseBody.method = request.method;
		responseBody.incomingRequestUrl = request.url;
		*/
		
		if(req.method=='POST'){
		var a=JSON.parse(bodyStr);
		if(req.url.slice(1)!="calculator")
		{
			response.statusCode=404;
			response.end(" ");
		}
		if(isNaN(a.op1)==false && isNaN(a.op2)==false){
			console.log("haii tarak post");
		if(a.op=="add"){
			var k=a.op1+a.op2;
			console.log(k)
			response.statusCode=200;
			response.end(k.toString());
		}
		else if(a.op=="sub"){
			var k=a.op1-a.op2;
			console.log(k)
			response.statusCode=200;
			response.end(k.toString());
		}
		else if(a.op=="mul"){
			var k=a.op1*a.op2;
			console.log(k)
			response.statusCode=200;
			response.end(k.toString());
		}
		else if(a.op=="div"){
			var k=a.op1/a.op2;
			console.log(k)
			response.statusCode=200;
			response.end(k.toString());
		}
		else{
            response.statusCode=400;
            response.end(" ");
		}


	}

	else{
		response.statusCode=400;
		response.end(" ");

	}
}
else if (req.method=="GET"){
	console.log('subhash')
	try{
		console.log('subhash2');
		console.log(req.url);
		var query_params = req.url.split('?');
        console.log('subbu3')
		console.log(query_params[0])
		console.log(query_params[1])
	if(query_params[0].slice(1)!="calculator")
	{
		response.statusCode=404;
		response.end(" ");

	}


var params = query_params[1].split('&');
console.log(params)

var pair;
var a={}

params.forEach(function(d) {
    pair = d.split('=');
    console.log(pair)
    a[pair[0]]=pair[1];
});
console.log(a);
if(isNaN(a.op1)==false && isNaN(a.op2)==false){
	console.log("haii tarak get");
		if(a.op=="add"){
			var k=parseInt(a.op1)+parseInt(a.op2);
			console.log(k)
			response.statusCode=200;
			response.end(k.toString());
			
		}
		else if(a.op=="sub"){
			var k=parseInt(a.op1)-parseInt(a.op2);
			console.log(k)
			response.statusCode=200;
			response.end(k.toString());
			
		}
		else if(a.op=="mul"){
			var k=parseInt(a.op1)*parseInt(a.op2);
			console.log(k)
			response.statusCode=200;
			response.end(k.toString());
		}
		else if(a.op=="div"){
			var k=parseInt(a.op1)/parseInt(a.op2);
			console.log(k)
			response.statusCode=200;
			response.end(k.toString());
		}
		else{
            reponse.statusCode=400;
            response.end(" ");
		}

}
else{
		response.statusCode=400;
		response.end(" ");

	}

//try block ending
}
catch(e){
	response.statusCode=404;
	response.end(" ");
}


}


else{
	response.statusCode=405;
	response.end(" ");
}
		//response.end will send the response (including status and body)
		//response.statusCode(200);

		
	});


}).listen(PORT, function(err){
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log("server is listening on " + PORT);
});

