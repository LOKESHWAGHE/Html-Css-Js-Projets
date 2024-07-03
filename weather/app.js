const apikey="863242cfb2b1d357e6093d9a4df19a4b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=banglore"

const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search i");
const weatherIcon = document.querySelector("weather-icon");

async function checkWeather(city){
const response = await fetch(apiUrl + city + `&appid=${apikey}`);
var data= await response.json();

console.log(data);
document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = data.temp + "°c";
document.querySelector(".humidity").innerHTML = data.humidity + " %";
document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

if(data.weather[0].main=="Clouds"){
    weatherIcon.src="images/clouds.png";
}
else if(data.weather[0].main=="Clear"){
    weatherIcon.src="images/Clear.png";
}
else if(data.weather[0].main=="Rain"){
    weatherIcon.src="images/Rain.png";
}
else if(data.weather[0].main=="Drizzle"){
    weatherIcon.src="images/Drizzle.png";
}
else if(data.weather[0].main=="Mist"){
    weatherIcon.src="images/Mist.png";
}

}


searchbtn.addEventListener("click" ,()=>{
    checkWeather(searchBox.value);
})
