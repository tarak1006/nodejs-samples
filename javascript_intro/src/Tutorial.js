//Learn how to declare variables and how to use typeof operator to find the type of a variable.

exports.Variables = function(){

	console.log("Javascript.Tutorials Variables");

	var str = "hello";

	console.log("value of variable str is: ",str);

	console.log("Type of Variable str is: ", typeof(str));

}

// JS is a weakly typed language. So, a variable can initially have a string value and then be
// reassigned to have an integer value (the type of variable will change with the reassignment)
exports.WeakTyping = function(){

	console.log("\nJavascript.Tutorials WeakTyping");

	var str = "hello";

	console.log("value of variable str is: ",str);

	console.log("Type of Variable str is: ", typeof(str));

	//Assign an integer value to str. Strongly-typed languages such as Java will give a compilation error,
	// but javascript accepts this. variable str now will be of type number.

	str = 5;

	console.log("value of variable str is: ",str);

	console.log("Type of Variable str is: ", typeof(str));
}

// This function will introduce you to string, number, boolean and array data types.
exports.DataTypes = function(){

	console.log("\nJavascript.Tutorials DataTypes");

    //string data type.
	var str = "hello";

	console.log("\nvalue of variable str is: ",str);
	console.log("Type of Variable str is: ", typeof(str));
	console.log("length of string is: ", str.length);

	//Assign an integer value to str. Strongly-typed languages such as Java will give a compilation error,
	// but javascript accepts this. variable str now will be of type number.

	i = 5;
	console.log("\nvalue of variable i is: ",i);
	console.log("Type of Variable i is: ", typeof(i));

	var b = (i === 5);
	console.log("\nvalue of variable b is: ",b);
	console.log("Type of Variable b is: ", typeof(b));

	var arr = [1,2, 3];
	console.log("\nvalue of variable arr is: ",arr);
	console.log("Type of Variable arr is: ", typeof(arr));
}

// Learn how to push elements to an array, iterate on an array
// and access its elements.
exports.Arrays = function(){
	console.log("\nJavascript.Tutorials Arrays");

	var arr = new Array();

	arr.push(4);

	arr.push(5);

	//In Javascript, an array can contain elements of different types.
	arr.push("Bill");

	arr.push("Gates");

	console.log("length of array is: ",arr.length);

	for(var i = 0; i < arr.length; i++){
		console.log("Array element ",i,"has value: ",arr[i]);
	}

}

function Person(firstName, lastName){

	this.firstName = firstName;

	this.lastName = lastName;

}

// learn how to create objects as well explore typeof/instanceof opertors.

exports.Objects = function(){
	console.log("\nJavascript.Tutorials Objects");

	var p = new Person("Bill","Gates");
	console.log("\nvalue of object p is: ",p);
	console.log("Type of object p is: ", typeof(b));
	console.log("Object p is instanceof Person is: ", p instanceof Person);
	console.log("Object p is instanceof Date is: ", p instanceof Date);


}

// Learn how to use instanceof operator.
exports.InstanceOf = function(){

	console.log("\nJavascript.Tutorials InstanceOf");
	
	var d = new Date();
	var isDateInstance = d instanceof Date;
	console.log("new Date() is instanceof Date is: ", isDateInstance);

	var p = new Person("Bill","Gates");
	console.log("Object p is instanceof Person is: ", p instanceof Person);
	console.log("Object p is instanceof Date is: ", p instanceof Date);

	var arr = [1,2,3];
	console.log("Type of arr is: ", typeof(arr));
	console.log("arr is instanceof Array is: ", arr instanceof Array);

}

// Learn how to use JSON.stringify() and JSON.parse() to serialize/deserialize objects.

exports.Serialization = function(){
	console.log("\nJavascript.Tutorials Serialization");
	var p = new Person("Bill","Gates");

	var str = JSON.stringify(p);
	console.log("Object p represented as a string is: ",str);

	var person2 = JSON.parse(str); // parses str and creates an object.

	console.log("Parsing string back into person2 object. Value of person2.firstName is: ", person2.firstName);

}

// Run node Tutorial.js and node will execute all the function calls given below.
exports.Variables();
exports.WeakTyping();
exports.DataTypes();
exports.Arrays();
exports.Objects();
exports.InstanceOf();
exports.Serialization();

