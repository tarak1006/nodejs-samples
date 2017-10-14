/**
    ------------ ERROR CODES ------------   
    1001 - Invalid inputs
    1002 - Invalid filters
    1003 - Mandatory values not sent.
    1004 - Record already exists..
*/

/**
We assume the files that are used as data source for this activity reside in the file "files/students.txt"
*/

var Student = function(id, firstName, lastName, gender, totalMarks){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.totalMarks = totalMarks;
};

/**
Method used to read students data from the file..

If no filters are given, return list of all the students details. 

Else, apply all the given filters. 

------------------
Schema of a filter..
------------------

filters contains list of filters that have to be applied on the students data. 

Each filter contains the following properties.. 

"key", "value", "optype".

** key and value are mandatory properties. 
Throw error in case they are missing. (Refer error codes at Page Top!)

Default value for optype = "EQ". 

List of valid optype -> EQ, NE, GT, LT, GTE, LTE 
(Equals, NotEquals, GreaterThan, LessThan, GreaterThanEquals, LessThanEquals)

Example filter --- 
[{
    "key" : "gender",
    "value": "male"
},{
    "key" : "totalMarks",
    "value": 90,
    "optype": "GTE"
}]
Return all the male students having marks greater than or equal to 90!!
*/
exports.getStudents = function (filters, callback) {

        
    var fname="E:/MRND/javascript/final_async/files"+"/students.txt";
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
    if(filters==null)
        callback(null,arr);
    else{
    for(i in filters){
if(filters[i]["optype"]===undefined || filters[i]["optype"]==="EQ")
{
    for(j=0;j<arr.length;j++){
        //console.log(arr[j][filters[i]["key"]],arr[j][filters[i]["value"]])
        if(arr[j][filters[i]["key"]]!=filters[i]["value"]){
            //console.log(arr[j][filters[i]["key"]]===arr[j][filters[i]["value"]])
            arr[j]["id"]=0
    }
   // console.log("failing test case");
        //console.log(arr)
    }
}
else if(filters[i]["optype"]==="GTE")
{
    for(j=0;j<arr.length;j++){
        //console.log(arr[j][filters[i]["key"]],arr[j][filters[i]["value"]])
        if(arr[j][filters[i]["key"]]<filters[i]["value"]){
            //console.log(arr[j][filters[i]["key"]]===arr[j][filters[i]["value"]])
            arr[j]["id"]=0
    }

        //console.log(arr[j])
    }
}
else if(filters[i]["optype"]==="GT")
{
    for(j=0;j<arr.length;j++){
        //console.log(arr[j][filters[i]["key"]],arr[j][filters[i]["value"]])
        if(arr[j][filters[i]["key"]]<=filters[i]["value"]){
            //console.log(arr[j][filters[i]["key"]]===arr[j][filters[i]["value"]])
            arr[j]["id"]=0
    }

        //console.log(arr[j])
    }
}else if(filters[i]["optype"]==="LT")
{
    for(j=0;j<arr.length;j++){
        //console.log(arr[j][filters[i]["key"]],arr[j][filters[i]["value"]])
        if(arr[j][filters[i]["key"]]>=filters[i]["value"]){
            //console.log(arr[j][filters[i]["key"]]===arr[j][filters[i]["value"]])
            arr[j]["id"]=0
    }

       // console.log(arr[j])
    }
}
else if(filters[i]["optype"]==="LTE")
{
    for(j=0;j<arr.length;j++){
       // console.log(arr[j][filters[i]["key"]],arr[j][filters[i]["value"]])
        if(arr[j][filters[i]["key"]]>filters[i]["value"]){
           // console.log(arr[j][filters[i]["key"]]===arr[j][filters[i]["value"]])
            arr[j]["id"]=0
    }

        //console.log(arr[j])
    }
}
else if(filters[i]["optype"]==="NE")
{
    for(j=0;j<arr.length;j++){
        //console.log(arr[j][filters[i]["key"]],arr[j][filters[i]["value"]])
        if(arr[j][filters[i]["key"]]==filters[i]["value"]){
           // console.log(arr[j][filters[i]["key"]]===arr[j][filters[i]["value"]])
            arr[j]["id"]=0
    }

        // console.log(arr[j])
    }
}
}

var res=[]
var k=0
for(i in arr){
    if(arr[i]["id"]!=0){
       res[k]=arr[i];
       k++;
    }
}
callback(null,res);
}


};

/**
Method is to create a new student in the data source (i.e, a file.)

student contains the required student's data. 

mandatory fields are id, lastName, firstName, gender and totalMarks. 

--valid values for gender are "male" and "female". 

--valid values for totalMarks is range 0 - 100. 

Throw appropriate errors for invalid values. (Refer error codes from the page top)
*/
var sample=[]
exports.createStudent = function (student, callback) {
    
    var fname=__dirname+ "/../files/students.txt";
    if(student.id==null || student.lastName==null || student.firstName==null || student.gender==null || student.totalMarks==null){
        var err1=new Error();

        err1.code=1003
        callback(err1)
    }
    else if( sample.includes(student.id)== true)
    {
        var err1=new Error();
        err1.code=1004
        callback(err1)
    }
    else if(  student.totalMarks<100 && student.totalMarks>0 && 
        (student.gender=="male" || student.gender=="female")){
        sample.push(student.id);
        var str=JSON.stringify(student)+ '\n';
        require('fs').appendFileSync(fname,str);
        callback(null);
          
    }
        else{
            var err1=new Error();
            err1.code=1001
            callback(err1)
        }
    
    
   // var obj=JSON.parse(string)



    

};