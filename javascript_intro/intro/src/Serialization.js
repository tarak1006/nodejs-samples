/*
OVERVIEW: 	Write a function that parses a string into an integer.
			Example: ParseNumber("1234") should return 1234

INPUTS: 	str - Input string

OUTPUT: 	Return the number that is represented by str

ERROR CASES: Return NaN if str is null or if it does not represent a number.

NOTES: You can use built-in JS Functions to implement your solution.
*/
exports.ParseNumber = function(str){
if(str==null || isNaN(str)==true)
	return NaN
else
	return parseInt(str);


}

/*
OVERVIEW: 	Write a function that converts a number into its string representation.
			Example: ConvertNumberToString(123) returns a string: "123"

INPUTS: 	num - Input number

OUTPUT: 	Return a string that represents num

ERROR CASES: Return Empty String if num is not of type number.

NOTES: You can use built-in JS Functions to implement your solution.
*/
exports.ConvertNumberToString = function(num){
	if(typeof(num)!="number")
		return "";
	else
		return num.toString();

}


/*
OVERVIEW: 	Write a function that parses a string into a Date object.
			Example: ParseDate("Jan 1 2000") should return an instance
			of the built-in Date object representing Jan 1 2000.

INPUTS: 	str - Input string

OUTPUT: 	Return the Date that is represented by str

ERROR CASES: Return null if str is null or if it does not represent a date.

NOTES: You can use built-in JS Functions to implement your solution.
*/

exports.ParseDate = function(str){
	if(Date.parse(str)==NaN || str==null)
		return null;
	else{
		var d=new Date(str);
		return d;

	}



}

/*
OVERVIEW: 	Write a function that converts a Date object into string.
			Example: ConvertDateToString(new Date(2000,1,1)) should
			return "Jan 1 2000"

INPUTS: 	dateValue - an instance of JS Date class

OUTPUT: 	Return the string representing the date.

ERROR CASES: Return "" if dateValue is null or is not of type Date.

NOTES: You can use built-in JS Functions to implement your solution.
*/

exports.ConvertDateToString = function(dateValue){
	if (dateValue==null || dateValue instanceof Date !=true)
		return "";
	else{
		return dateValue.toDateString();
	}


}

/*
OVERVIEW: 	Parse a string containing a comma seperated sequence of numbers
			and return an array containing the numbers. 

			Example: ParseStringOfNumbers("1,2,3") should return the array [1,2,3]

INPUTS: 	str - input string.

OUTPUT: 	Return an array the string representing the date.

ERROR CASES: Return Empty array if str is null or not of type string.

NOTES: You can use built-in JS Functions to implement your solution.
*/

exports.ParseStringOfNumbers = function(str){
	if(str=="" || typeof(str)!='string'){		
		return [];
	}
	else{
		var b=str.split(',').map(Number);
		//b.map(Number);
		return b;

	}
}
console.log(exports.ParseStringOfNumbers("")) 
/*
OVERVIEW: 	Convert an array of numbers into a string representation where the numbers are comma seperated.

			Example: ConvertArrayOfNumbersToString([]) ("1,2,3") should return the array [1,2,3]

INPUTS: 	obj - array of numbers.

OUTPUT: 	Return a string with all the numbers in the array seperated by commas.

ERROR CASES: Return "" if obj is null or is not an array

NOTES: You can use built-in JS Functions to implement your solution.
*/

exports.ConvertArrayOfNumbersToString = function(obj){
	if(obj==null || obj.constructor!=Array)
		return "";
	else
		return obj.toString();


}


/*
OVERVIEW: 	Parse a string as JSON and create a JavaScript object representing the same. 

			Example: ConvertStringToObject('{"make":"honda","color":"red"}'') should return an object with 
			{make: "honda","color":"red"} as its properties/values.

INPUTS: 	str - JSON string

OUTPUT: 	Javascript object representing the json.

ERROR CASES: Return null if str is null or not a valid json string.

NOTES: 		1) You can use built-in JS Functions to implement your solution.
			2) Learn about try/catch exception handling to ensure your solution can handle invalid json strings.
*/

exports.ConvertStringToObject = function(str){
	try{
       return JSON.parse(str);
	}
	catch(e){
		return null;
	}

}

/*
OVERVIEW: 	Create a json string representing the object.

			Example: ConvertObjectToString({make: "honda","color":"red"}) should return the string'{"make":"honda","color":"red"}'

INPUTS: 	str - JSON string

OUTPUT: 	Javascript object representing the json.

ERROR CASES: Return null if str is null or not a valid json string.

NOTES: 		You can use built-in JS Functions to implement your solution.
*/

exports.ConvertObjectToString = function(obj){
	try{
		//console.log(JSON.stringify(obj));
		return JSON.stringify(obj);
	}
	catch(e){
		return null;

	}


}


//console.log(exports.ConvertObjectToString({ "name":"John", "age":30, "city":"New York"}));


