let ip;
let weather_api = 'https://api.open-meteo.com/v1/jma?latitude=52.52&longitude=13.41&current=temperature_2m,is_day,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,wind_speed_10m,wind_direction_10m,is_day&timezone=Asia%2FTokyo&forecast_days=1'
let windSpeed, windDirection, temp, dayNight;

function preload(){
  snowflake = loadImage('snowflake.png');
}

async function forecast(){
	let data = await fetch(weather_api); 
	let j_data = await data.json();
	ip = j_data.ip;
  temp = j_data.current.temperature_2m; 
	dayNight = j_data.current.is_day;
  windSpeed = j_data.current.wind_speed_10m;
  windDirection = j_data.current.wind_direction_10m;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  forecast();
  greeting = createElement('h2', 'Wind in Japan');
	greeting.style('color', 'white')
  greeting.position(20, 10)
}

function draw() {
  
  if(dayNight == 0){ 
    background(22, 12, 41);
  } else {
    background(0, 150, 255);
  }
  fill(255);
  text("The colour of the screen indicates whether it is day or night in Japan currently. ", 20, 75);

  text("The current temperature in Japan is: " + temp + " °C", 20, 90);
  if(temp >= 20){ 
    fill(255, 255, 0)
    noStroke();
    ellipse(500, 70, 50, 50);
  } else if(temp < 12) {
    image(snowflake, 454, 40, 100, 100);
  }
  
  text("The current wind speed is: " + windSpeed + " km/h", 20, 105);
  text("The current wind direction is: " + windDirection + "°", 20, 120);
  if(windDirection > 180){
    text(windSpeed + " km/h", 120, 200);
    noStroke();
    triangle(30, 200, 100, 150, 100, 250);
  } else if(windDirection = 180) {
    text(windSpeed + " km/h", 120, 200);
    noStroke();
    triangle(30, 150, 100, 150, 67, 250);
  } else {
    text(windSpeed + " km/h", 120, 200);
    noStroke();
    triangle(30, 150, 30, 250, 100, 200);
  }
  
}
