
var express = require('express');
var path = require('path');
var app = express();
var fs=require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
function getFilePath() {

    var path = require('path');
    return path.join(__dirname, '../..', 'public/images');
}
/* Fill the code in routes/users.js so that it can return list of users.
   Defining routes in a dedicated folder and maintaining various routes for various flows helps in designing and writing rich functional servers.
   Figure out the way how you can use the below users route for this app
 */
var users = require('../routes/users');

app.use('/users',users);

/* Use the contacts route in this app to expose the contacts functionality for base_url/contacts

Add code to register route for contacts resources.
 */
 var contacts = require('../routes/contacts');

app.use('/contacts',contacts);


// sample route which matches a get request for the base url(http://localhost:3000/)

app.get('/', function (req, res) {
    res.send('This is a message from the sample route');
});


/*app.get('/*', function (req, res) {
  res.statusCode=404;
  var a={};
  a.status=404;
  a.message="The requested URL was not found";
   res.end(JSON.stringify(a));
  

});

*/
/*
write up a simple post route for the base URl which just echoes the json body sent to it.
*/
app.post('/',function(req,res){
  console.log("post started");
  console.log(req.body);
res.end(JSON.stringify(req.body));


});


/* write to route to serve the missionRnD.png in public/images folder for URL base_url/images/missionRnD.png
 */
//app.use(express.static('public'));
app.get('/images/:img', function (req, res) {
  console.log(getFilePath())
 var fileContents = fs.readFileSync('E:/MRND/javascript/express_intro_2/public/images' + "/missionRnD.png", 'utf8');      
    res.end(fileContents);
});

/* catch 404
   return a error message with json {"status":404,"message":"The requested URL was not found"}
  */

app.use(function (req, res, next) {
  a={}
  res.statusCode=404;
  a.status=404;
  a.message="The requested URL was not found";
  res.end(JSON.stringify(a));
});
/*
app.get('*',function(req, res){
  //try later res.send('what???', 404);

  res.statusCode=404;
  res.end("");
});
*/

var server = app.listen(3001, function () {
    var port = server.address().port;
    console.log("Example app listening at port %s", port)
});