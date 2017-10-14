/*
OVERVIEW: 	Implement a function that sums all the numbers in the given array.
			Example: SumOfArray([1,2,3]) should return a value of 6.

INPUTS: 	arrayOfNums: An array of numbers

OUTPUT: 	Sum of all the numbers

ERROR CASES: If arrayOfNums is null, return NaN.
			 If arrayOfNums is not an array, return NaN. Since Javascript is weakly typed, it is possible to
			 invoke calls such SumOfArray("hello").
			 You can use instanceof operator as described in the project page to check this.
*/
exports.SumOfArray = function(arrayOfNums){
	if(Array.isArray(arrayOfNums)!=true || arrayOfNums==null){
		return NaN
	}
	else{
		return arrayOfNums.reduce(function(a,b){return a+b;},0);
	}


}

/*
OVERVIEW: 	Implement a function that sums only the unique umbers in the given array.
			Example: SumOfUniqueNumbers([2,3,3,2]) should return a value of 2+3=5.

INPUTS: 	arrayOfNums: An array of numbers

OUTPUT: 	Sum of the unique numbers

ERROR CASES: If arrayOfNums is null, return NaN.
			 If arrayOfNums is not an array, return NaN. Since Javascript is weakly typed, it is possible to
			 invoke calls such SumOfArray("hello").
			 You can use instanceof operator as described in the project page to check this.
*/
Array.prototype.getUnique=function(){
	var u={},a=[];
	for( var i=0,l=this.length;i<l;++i){
		if(u.hasOwnProperty(this[i])){
			continue;
		}
		a.push(this[i]);
		u[this[i]]=1;
	}
	return a;
	}


exports.SumOfUniqueNumbers = function(arrayOfNums){
	if(arrayOfNums==null || arrayOfNums.constructor!=Array)
		return NaN
	var b=[]
    b=arrayOfNums.getUnique()
    return b.reduce(function(a,b){return a+b;},0);
    

}

/*
OVERVIEW: 	Implement a function that sums the diagonal elements in the given array.
			Example: SumOfUniqueNumbers([[11,12,13],[12,13,14],[13,14,15]]) should sum the elements at indexes (1,1),(2,2),(3,3).
			This will be sum of 11 + 13 + 15 = 39

INPUTS: 	array2d: An array of numbers

OUTPUT: 	Sum of the diagonal cells of the array.

ERROR CASES: If array2d is null, return NaN.
			 If array2d is not an array, return NaN. 
			 If array2d is not a 2-d array, return NaN.
			 If array2d is a 2-d array with different dimensions, return NaN.
*/

exports.SumOfDiagonalCells = function(array2d){
	if (array2d==null|| Array.isArray(array2d)!=true||array2d.length!=array2d[0].length||array2d[0][0]==undefined)
		return NaN;

    var sum=0,i;
    for(i=0;i<array2d.length;i++)
    	sum=sum+array2d[i][i];

      return sum;

}
console.log(exports.SumOfUniqueNumbers([1,2,3,3,3,1,1,4,4,4,5,3,2,4,5]));



