const request = require('request');
const argv = require('yargs').argv;

let apiKey = '61e99cb67a9c33213360ce82a1093c12';
let city =  argv.c ||'dallas';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

request(url, function(err, response, body){
	if(err){
		console.log('error:', error);
	}else{
		let weather =  JSON.parse(body)
		let message = `It's ${weather.main.temp} degrees in ${weather.name}!`
		console.log(message);
	}
});
