/*
OVERVIEW: 	Given a date in string format, return the day it corresponds to.
			Example: GetDay("Jan 12, 2000") should return 12.

INPUTS: 	dateString: String representing a date.

OUTPUT: 	number representing the day part of the date.

ERROR CASES: Return NaN if dateString is null or is not a valid Date.

NOTES: 		You can use built-in JS Classes such as Date class.

*/
/*
new Date('foo-bar 2014').toString();
// returns: "Invalid Date"

Date.parse('foo-bar 2014');
// returns: NaN
*/
exports.GetDay = function(dateString){
	if(Date.parse(dateString)==NaN || dateString==null)
		return NaN;
	else{
		var d=new Date(dateString);
		return d.getDate();
	}

}

