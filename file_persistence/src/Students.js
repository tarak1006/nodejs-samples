var http = require("http");
var url = require("url");

/**
 * This method will spin up a http request.
 *
 * All the requests hitting the server, will be processed by the callback of createServer.
 *
 * There are four type of requests that we are expected to hit the server with..
 *
 * These requests will essentially help you to perform CRUD operations on the student data. The student's data should be
 * stored in files/students.txt file.
 *
 * --> You can enhance the FilePersistence.js file to perform update and delete operations as well.
 *
 * --> Based on the type of HTTP request received, corresponding operation can be performed on the student's data.
 *
 * ----------------------------
 * 1) GET
 * ----------------------------
 * We hit the get request to the server say http://localhost:8080 to get the details of all the students..
 *
 * Pass the filters as part of query parameters.
 *
 * for example : http://localhost:8080?totalMarks=65&operator=GT
 *
 * The above request, responds with all the students whose total marks are greater than 65.
 *
 * **** NOTE **** The operator filter can take values EQ, NE, GT, LT, GTE, LTE. It is applicable only for totalMarks.
 *
 * To apply multiple filters, use http://localhost:8080?totalMarks=75&operator=GTE&firstName=nikhil
 *
 * The above request, responds with all the students whose first name is nikhil and whose total marks are >= 75.
 *
 * Sample response :
 * [{
 *      "id" : 32,
 *      "firstName" : "nikhil",
 *      "lastName" : "krishna" ,
 *      "gender" : "male",
 *      "totalMarks" : 80
 *
 * }, {
 *      "id" : 52,
 *      "firstName" : "nikhil",
 *      "lastName" : "joshi" ,
 *      "gender" : "male",
 *      "totalMarks" : 78
 * }]
 *
 * ----------------------------
 * 2) POST
 * ----------------------------
 * To create a new student, hit the server with a PoST request. Send the student information as a body param.
 *
 * Sample request body
 *{
*      "id" : 32,
*      "firstName" : "nikhil",
*      "lastName" : "krishna" ,
*      "gender" : "male",
*      "totalMarks" : 80
*
 * }
 *
 * Error cases : Should throw an error in case of invalid values, duplicate records. Please refer to FilePersistence lesson
 * of javascript-async lesson for the list of all the error scenarios.
 *
 * ----------------------------
 * 3) PUT
 * ----------------------------
 *
 * To update an existing record, make use of PUT request. Send the student information as a body param.
 *
 * Error cases: If student doesn't exist, throw an error.
 *
 * **** NOTE **** DO NOT UPDATE null / undefined values.
 *
 * for example : if lastName of a student is given as null, ignore it and update other properties of the student.
 *
 * * Sample request body
 *{
*      "id" : 32,
*      "firstName" : "nikhil_updated",
*
  * }
 *
 * ----------------------------
 * 4) DELETE
 * ----------------------------
 * To delete an existing record, use the DELETE request. Send the id of the student as a query param
 *
 * http://localhost:8080?id=32
 *
 * Error cases: If student doesn't exist, throw an error.
 *
 *              If query params are not send, throw an error. DELETE http://localhost:8080 should not delete all the students.
 *              it should throw an error.
 *
 * Note : In case of any error scenario, send the statusCode for response as 400 which stands for BAD REQUEST.
 */
 sample=[]
var server = http.createServer(function(req, res) {
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



////////file reading
var fname="E:/MRND/javascript/file_persistence/files"+"/students.txt";
    var lines = require('fs').readFileSync(fname, 'utf-8')
    .split('\n');
   // console.log(lines);
    var file_arr =[];
    for(i=0;i<lines.length-1;i++){
       // console.log('testing',i);
        //console.log(JSON.parse(lines[i]));
        file_arr[i]= JSON.parse(lines[i]);
    }
   // console.log(file_arr);
    /////file reading and storing end



		if(req.method=="GET"){
			console.log('haii subbu')
			var url_split=req.url.split('?');
			console.log(req.url);
			console.log(url_split[0])
			console.log(url_split[1])

			if(url_split.length==1)
				res.end(JSON.stringify(file_arr));
			else{

			var params=url_split[1].split('&');
			var pair;
var filters={}

params.forEach(function(d) {
    pair = d.split('=');
    console.log(pair)
    filters[pair[0]]=pair[1];
});
console.log(filters)
var filters_length=filters.length
/*for(i=0;i<file_arr.length;i++)
{
	count=0
for(j=0;j<pair_temp_length;j++){
	if(file_arr[i][pair_temp[j]]==pair_temp[pair_temp[0]]){
		count++;
	}
}
if(count==pair_temp_length){
	res.end(JSON.stringify(file_arr[i]))
}

}
*/

 if(filters==null)
        res.end(" ")
    else{
if(filters["operator"]===undefined || filters["operator"]==="EQ")
{
    for(j=0;j<file_arr.length;j++){
        //console.log(file_arr[j][,arr[j][filters[i]["value"]])
        if(file_arr[j]["totalMarks"]!=parseInt(filters["totalMarks"])){
            console.log(file_arr[j]["totalMarks"],filters["totalMarks"])
            file_arr[j]["id"]=0
    }
    
    }
}
else if(filters["operator"]==="GTE")
{
    for(j=0;j<file_arr.length;j++){
        //console.log(file_arr[j][,arr[j][filters[i]["value"]])
        if(file_arr[j]["totalMarks"]<parseInt(filters["totalMarks"])){
            console.log(file_arr[j]["totalMarks"],filters["totalMarks"])
            file_arr[j]["id"]=0
    }
    
    }
}
else if(filters["operator"]==="GT")
{
    for(j=0;j<file_arr.length;j++){
    	console.log("hii broo");
        //console.log(file_arr[j][,arr[j][filters[i]["value"]])
        if(file_arr[j]["totalMarks"]<=filters["totalMarks"]){
            console.log(file_arr[j]["totalMarks"],filters["totalMarks"])
            file_arr[j]["id"]=0
    }
	}
    
}

else if(filters["operator"]==="LT")
{
    for(j=0;j<file_arr.length;j++){
        //console.log(file_arr[j][,arr[j][filters[i]["value"]])
        if(file_arr[j]["totalMarks"]<parseInt(filters["totalMarks"])){
            console.log(file_arr[j]["totalMarks"],filters["totalMarks"])
            file_arr[j]["id"]=0
    }
    }
 }
    
    
else if(filters["operator"]==="LTE")
{
    for(j=0;j<file_arr.length;j++){
        //console.log(file_arr[j][,arr[j][filters[i]["value"]])
        if(file_arr[j]["totalMarks"]>parseInt(filters["totalMarks"])){
            console.log(file_arr[j]["totalMarks"],filters["totalMarks"])
            file_arr[j]["id"]=0
    }
}
    
}
else if(filters["operator"]==="NE")
{
    for(j=0;j<file_arr.length;j++){
        //console.log(file_arr[j][,arr[j][filters[i]["value"]])
        if(file_arr[j]["totalMarks"]!=parseInt(filters["totalMarks"])){
            console.log(file_arr[j]["totalMarks"],filters["totalMarks"])
            file_arr[j]["id"]=0
    }
}
    
}
var filter_keys=Object.keys(filters);
for(var i in filter_keys){
	if (filter_keys[i]!="totalMarks" && filter_keys[i]!="operator") {
		for(j=0;j<file_arr.length;j++){
        console.log(file_arr[j][filter_keys[i]],filters[filter_keys[i]])
        if(file_arr[j][filter_keys[i]]!=filters[filter_keys[i]]){
            //console.log(file_arr[j][filters[i]],filters[filters[i]])
            file_arr[j]["id"]=0
    }
    
    }


	}
}///remaining params filtering

var result=[]
for(i in file_arr){
    if(file_arr[i]["id"]!=0){
       result.push(file_arr[i]);
    }
}
res.end(JSON.stringify(result))
}//else





		


		
		

		
	
}
		
		
}//get loop end

		
		else if(req.method=="POST"){
			 var fname=__dirname+ "/../files/students.txt";
			 var student=JSON.parse(bodyStr);
			// console.log('haii tarak')
			/*  var fname="E:/MRND/javascript/file_persistence/files"+"/students.txt";
    var lines = require('fs').readFileSync(fname, 'utf-8')
    .split('\n');
   // console.log(lines);
    var arr =[];
    for(i=0;i<lines.length-1;i++){
        console.log('testing',i);
        console.log(JSON.parse(lines[i]));
        arr[i]= JSON.parse(lines[i]);
    }
    console.log(arr);
*/
    if(student.id==null && student.lastName==null && student.firstName==null){
        var err1=new Error();

        err1.code=1003
    
    }
    else if( sample.includes(student.id)== true)
    {
       res.statusCode=400
       res.end("");
   
    }
    else if(  student.totalMarks<100 && student.totalMarks>0 && 
        (student.gender=="male" || student.gender=="female")){
        sample.push(student.id);
        var str=JSON.stringify(student)+ '\n';
        require('fs').appendFileSync(fname,str);
       res.end(" ");
          
    }
        else{
            var err1=new Error();
            err1.code=1001
            
        }
    }

	else if(req.method=="PUT"){
		var flag=0;
        require('fs').truncateSync(fname);
        var a=JSON.parse(bodyStr)
        //console.log('ajay')
        //console.log(a)
        if(file_arr.length==0){
        	res.statusCode=400;
        	res.end("");
        }
        else{


        for(var i in file_arr){
        	if(file_arr[i]["id"]==a["id"]){
        		flag=1
        		if(a["totalMarks"]!=null || a["totalMarks"]!=undefined){
        			if(a["totalMarks"]<=100 && a["totalMarks"]>=0)
        			file_arr[i]["totalMarks"]=a["totalMarks"]
        		else
        			res.statusCode=400;
        		}
        		else{
        			res.statusCode=200;
        		}
        		if(a["firstName"]!=null || a["firstName"]!=undefined){
        			file_arr[i]["firstName"]=a["firstName"]
        		}
        		else{
        			res.statusCode=200;
        		}
        		if(a["lastName"]!=null || a["lastName"]!=undefined){
        			file_arr[i]["lastName"]=a["lastName"]
        		}
        		else{
        			res.statusCode=200;
        		}
        		if(a["gender"]!=null || a["gender"]!=undefined){
        			if(a["gender"]=="male"|| a["gender"]=="female")
        			file_arr[i]["gender"]=a["gender"]
        		    else
        		    	res.statusCode=400;
        		}
        		else{
        			res.statusCode=200;
        		}
        		break;
        	}
        }
         for(var i in file_arr){

        var str=JSON.stringify(file_arr[i])+ '\n';
        require('fs').appendFileSync(fname,str);
       
    }
      /*  if(a["firstName"]==null || a["firstName"]==undefined || a["lastName"]==null || a["lastName"]==undefined || a["gender"]==null || a["gender"]==undefined|| a["totalMarks"]==null || a["totalMarks"]==undefined)
        {
        	res.statusCode=200;
        	res.end(" ");
        }*/
       
        if(flag==0){
        	res.end(null)//throw error case if student not found
        }

        else{

    res.end(" ")
}
}

	}

	else{
		var flag=0;
		console.log('=======')
		 console.log(file_arr)
		console.log('haii alan')
        require('fs').truncateSync(fname);
        var params=req.url.split('?');
        if(params.length>1)
        {
        var pair=params[1].split('=');
        var a=parseInt(pair[1])
        console.log(a)
        if(file_arr.length >0){

        for(var i in file_arr){
        	console.log('haii eswra  1' )
        	console.log(i)
        	if(file_arr[i]["id"]==a){
        			file_arr[i]["id"]=0

        		
        	}
        }

         for(var i in file_arr){
         if(file_arr[i]["id"]!=0){
        var str=JSON.stringify(file_arr[i])+ '\n';
        require('fs').appendFileSync(fname,str);
       }
   				 }
   				 res.statusCode=200
   				 res.end(" ");

			}
		
	
		
			else{
   				res.statusCode=400;
   				res.end(" ");
				}
   
}
 

 else{
		res.statusCode=400;
		res.end(" ");
		}


}



        
        

            

		
	
});

    //console.log("request received ",request.method);





});

server.listen(8080);

console.log("server running at localhost:8080");