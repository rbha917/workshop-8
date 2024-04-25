# workshop-8

### Link to sketch: https://rbha917.github.io/workshop-8/ 

## APIs (Application Programming Interfaces)
- ways of retrieving data from an outside source that can be used in code
- let ip; //define ip address//
- let ip_api = 'https://api.ipify.org?format=json'; //store api url//
### Asynchronous Function
async function getIP(){ //requests data from the api//
	let data = await fetch(ip_api); 
	let j_data = await data.json();
	ip = j_data.ip;
}
- under setup: getIP();
- under draw: text(ip, 20, 100); //displays api on sketch//
- Free open-source APIs website: https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/
- paste url into browser to see what data it contains 
### Joke API Example
- define variables
let intro, punchline;
let joke_api = 'paste url here';
- function to get joke
async function getJoke(){
	let data = await fetch(joke_api); 
	let j_data = await data.json();
	ip = j_data.ip;
	intro = j_data.setup;
	punchline = j_data.delivery; //using the data provided in the API, set up relevant variables to retrieve that data//
}
- under setup: getJoke();
- under draw: 
text(intro, x, y);
text(punchline, x, y);
- under setup: setInterval(getJoke, 3000); //refresh api so that it will get a new joke every 3 seconds//
- read api documentation in case there are limitations on how many times they can be called in a day
- Free weather api website: https://open-meteo.com/en/docs
### Current Temperature Example
let currentTemp, dayNight;
let weather_api = 'paste url here';
- new function
async function getWeather(){
	let data = await fetch(weather_api); 
	let j_data = await data.json();
	ip = j_data.ip;
	currentTemp = j_data.current.temperature_2m; //if data is nested under a folder then this is the format to retrieve it//
	dayNight = j_data.current.is_day;
}
- setup: getWeather();
- draw
text("Current temperature is: " + currentTemp, x, y);
text("Day or night? " + dayNight, x, y);

if(dayNight == 0){ //ways to use data and display it visually//
	fill(0);
} else {
	fill(255, 255, 0);
}
ellipse(x, y, 40, 40);
}
- accessing api data from arrays
let tempTwoHrs = [];
- edit function
async function getWeather(){
	let data = await fetch(weather_api); 
	let j_data = await data.json();
	ip = j_data.ip;
	currentTemp = j_data.current.temperature_2m; 
	dayNight = j_data.current.is_day;
	tempTwoHrs = j_data.hourly.temperature_2m[2]; //if you remove the array number from the end it will print the whole array, you can change this number for which hour you want to use//
}
- edit draw
text("Temperature in 2hrs will be: " + tempTwoHrs, x, y);
