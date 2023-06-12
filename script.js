const inputBox=document.querySelector('.intputBox');
const searchBtn=document.getElementById('searchButton');
const weatherImg=document.querySelector('.weatherImg');
const temp=document.querySelector('.temperature');
const feelsLike=document.querySelector('.feelsLike');
const tempDisciption=document.querySelector('.description');
const humid=document.getElementById('humidity');
const wind=document.getElementById('wind');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weatherBody');
console.log("hello");

async function checkWeather(city){
    const api_key = "3abfe4fec6118db598e66e0b089";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    // console.log(weather_data.cod);
    if(weather_data.cod == `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    feelsLike.innerHTML = `${Math.round(weather_data.main.feels_like- 273.15)}°C`;
    tempDisciption.innerHTML = `${weather_data.weather[0].description}`;

    humid.innerHTML = `${weather_data.main.humidity}%`;
    wind.innerHTML = `${weather_data.wind.speed}Km/H`;
   


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weatherImg.src = "images/clouds.png";
            break;
        case 'Clear':
            weatherImg.src = "images/sun.png";
            break;
        case 'Rain':
            weatherImg.src = "images/rain.png";
            break;
        case 'Mist':
            weatherImg.src = "images/mist.png";
            break;
        case 'Snow':
            weatherImg.src = "images/snow.png";
            break;

    }

    console.log(weather_data);
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});
