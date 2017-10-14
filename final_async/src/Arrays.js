var Arrays = function() {

    /**
     Utility function used to find the maximum element in the given array..

     The array is given as input.

     Return the max element of array in the callback in error first way.
     */
    this.findMax = function (array, callback) {

if(array===undefined || array.length==0){
            callback(null,null);
        }

        else{

            callback(null,Math.max.apply(null,array));

        }
    };

    /**
     Utility function used to find maximum element of given arrays

     Each line in the file "files/arrays.txt" corresponds to a Array..

     Use the above mentioned function findMax to find max element in all the arrays..

     Test case fails if the findMax method is not used..

     Return list of max elements via the callback..

     Example input [[3, 6, 1], [5, 7, 8, 1], [5,8,3]] output [6, 8, 8]
     */
    this.getMaxArray = function (callback) {
       /*      var fs=require('fs');
         var fileName ="E:/MRND/javascript/async-2/files" + "/arrays.txt";
         var input=fs.createReadStream(fileName);
         var r1=require('readline').createInterface({
            input:input,
            terminal:false 
         });
        var res=new Array();
        var k=0
        var arrays=new Arrays();

        r1.on('line',function(line){
            var str=line.toString();
            var arr=str.split(' ');
          for(i=0;i< arr.length;i++){
              console.log(arr[i]);}
            
            arrays.findMax(arr,function(err,maxElem){
                res[k]=maxElem;
                console.log('nnkndxknx',res[k]);
                k++;
            });
            //console.log('this is a line ->' + line);
         });

       setTimeout(function cb(){
        console.log('tarak',res);
          return callback(null,res);
       },500);
        // console.log('hello world');

        

    */

      
     var fname="E:/MRND/javascript/final_async/files"+"/arrays.txt";
    var lines = require('fs').readFileSync(fname, 'utf-8')
    .split('\n');
    console.log(lines);
    res = [];
    for(i in lines){
        console.log('testing',i);
        res[i]= (lines[i].split(' ')).map(Number);
    }
ans=[];
    console.log(res);
    for(i=0;i<(res.length-1);i++){
    this.findMax(res[i].slice(0,-1),function(err,maxElem){
     ans[i]=maxElem;
    });
}



console.log(ans);
callback(null,ans);
};
    


};

module.exports = Arrays;
