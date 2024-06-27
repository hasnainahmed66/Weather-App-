const apiKey = "4e354c31df222fbac3e55f4ed1eb061d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather-icon")

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
      
        // if(data.weather[0].main== "clouds"){
        //     weatherIcon.src ="images/clouds.png ";
        // }
        
        // if(data.weather[0].main== "clear"){
        //     weatherIcon.src ="images/clear.png ";
        // }
    
        // if(data.weather[0].main== "rain"){
        //     weatherIcon.src ="images/rain.png ";
        // }
        
        // if(data.weather[0].main== "Drizzle"){
        //     weatherIcon.src ="images/drizzel.png ";
        // }
        
        // if(data.weather[0].main== "mist"){
        //     weatherIcon.src ="images/mist.png ";
        // } 
    }
     catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Error fetching weather data. Please try again.');
    }
}

searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if (city) {
        checkWeather(city);
    } else {
        alert('Please enter a city name.');
    }
});