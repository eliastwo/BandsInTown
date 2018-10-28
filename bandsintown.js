// dependency for inquirer npm package
const request = require("request");
const inquirer = require("inquirer");
//var parser = require('http-string-parser');

// constructor function used to create programmers objects
  var BandsInTown = function(bandName, begDate, endDate) {
  this.bandName = bandName;
  this.begDate = begDate;
  this.endDate = endDate;
};

var myURL = "https://rest.bandsintown.com/artists/";
var apiKey = "8c8fae7fa29b078a7f5900f24997754c";

function bandsInTownRequest() {

const url = (myURL + newBands.bandName + "/events?app_id=" + apiKey + "&date=" + newBands.begDate + "%2c" + newBands.endDate);
	request.get(url, (error, response, body) => {
		let json = JSON.parse(body);
			bandsData = body;
			var response1 = JSON.parse(body);
			
			for(var i = 0; i < response1.length; i++) {
			console.log("The date of the concert is: ", response1[i].datetime);
			console.log("The date tickets go on sale: ", response1[i].on_sale_datetime);
			console.log("The venue name is: ", response1[i].venue.name);
			console.log("The venue city is: ", response1[i].venue.city);
			console.log("The venue country is: ", response1[i].venue.country);
			console.log("-----------------------------------");
			};
		})
};

var newBands = '';

inquirer.prompt([{
  name: 'name',
  type: 'input',
  message: 'What is the name of the band?',
}, {
  name: 'begDate',
  type: 'input',
  message: 'Which is the beginning date of the tour you are searching?',
}, {
  name: 'endDate',
  type: 'input',
  message: 'Which is the end date of the tour you are searching?',
}
]).then((answers) => {
	newBands = new BandsInTown(answers.name, answers.begDate, answers.endDate);
	console.log(newBands);
	
	bandsInTownRequest();
}); 



	
