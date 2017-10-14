/*
OVERVIEW: 	Reverse the characters in the given string.
			Example: ReverseString("abc") should return the string "cba"

INPUTS: 	str - string to reverse
OUTPUT: 	a new string that is reverse of str

ERROR CASES: Return null if str is null or not of type string.

*/
exports.ReverseString = function(str){
	if(typeof(str)!='string' || str==null)
		return null;
	else
		return str.split('').reverse().join('');



}

/*
OVERVIEW: 	Input is a string of the form "<lastname>,<firstname>;<lastname2>;<firstname2>;..."
			The function should extract all the first names from the string and return them in an array.
			Example: GetFirstNames("Gates,Bill;Jobs,Steve;Page,Larry") should return an array ["Bill","Steve","Larry"]


INPUTS: 	str - string with list of names in the above format.
OUTPUT: 	an array containing the first names.

ERROR CASES: Return null if str is null or not of type string.

NOTES: You can use built-in JS Functions to solve this problem.

*/

exports.GetFirstNames = function(str){
	if(str==null || typeof(str)!='string')
		return null;
	else if(str==';'|| str=='')
		return "";
	else{
		b=[]
		str=str.replace(/;/g,',');
	
	    var a=str.split(',');
	   
	    for(i=1;i<a.length;i=i+2)
	    	b.push(a[i]);
        }
	    return b;
}


/*
OVERVIEW: 	Given an array of sentences, create a paragraph by concatenating all the strings and adding
			fullstop (.) after each senetences.
			Example: If the input array is: ["One Fish","Two Fish","Red Fish"], the function should return
			the string: "One Fish.Two Fish.Red Fish"


INPUTS: 	arrayOfStrings - array of strings
OUTPUT: 	a string that combines all the strings from arrayOfStrings as described above.

ERROR CASES: 	1) Return null if arrayOfStrings is null
				2) Return "" if arrayOfStrings is empty.

NOTES: You can use built-in JS Functions to solve this problem.

*/
exports.CreateParagraph = function(arrayOfStrings){
	if(arrayOfStrings==null)
		return null;
	else if(arrayOfStrings.length==0)
		return "";

	else{
		return arrayOfStrings.join('.')+'.';
		/*
		console.log(arrayOfStrings);
		var str='';
		for(i=0;i<(arrayOfStrings.length-1);i++)
			str=str+(arrayOfStrings[i]+'.');
		console.log(str);
		str+=arrayOfStrings[i];

		return str;
		*/
	}
}

console.log(exports.CreateParagraph(["hello"]));




