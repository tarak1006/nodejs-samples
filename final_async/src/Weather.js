/**

  Refer the the following link to understand how async works

  http://exploringjs.com/es6/ch_async.html

  For the purpose of this tutorial we have used the open weather API

  https://openweathermap.org/api

  To use the API, You need to have a appID

  Create an account at http://home.openweathermap.org/users/sign_in and refer to the API keys tab for your appID

  Try various cases with the API to see it's behaviour

 */

/**
 Utility function used to find the weather of a city by name..

 cityName is given as a input.

 appID is the your corresponding API Key

 Returns the JSON of weather data in the callback in error first way.

 */
var request1=require("request")
 var getWeatherByCityName = function (cityName, appID, callback) {

    console.log(appID)
    var queryParams = { q:cityName, APPID:appID };
    console.log('subhash')
    request1({url:"http://api.openweathermap.org/data/2.5/weather", qs:queryParams}, function(err, response, body){
        console.log('haii tarak');
        callback(err,response,body);
    });
       
};



/**
 Function used to find current temperature of a city in Celsius.

 Use getWeatherByCityName to fetch the weather details of a particular city

 cityName is given as a input. 

 Return the temperature of a city in celsius in the callback in error first way.

 Handle the error scenarios appropriately and map the error message in response body to the error object
 */
exports.findCurrentTemperatureByCityName = function (cityName, callback) {
  if(cityName==""){
    var err=new Error();
    err.code="502";
    callback(err,null);

  }
  else{
	getWeatherByCityName(cityName,'a92792a2958941e16394a207c7d1456a',function(err,response,weather){
		var temperature;
    
    var a=JSON.parse(weather)
		
		temperature=(parseInt(a["main"]["temp"]-273.15));
   
		callback(err,temperature);
	});
}

    
    
};
