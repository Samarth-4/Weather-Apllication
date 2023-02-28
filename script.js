// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// d3688c67a41761d842ff4d952ddaaaba


const url = "https://api.openweathermap.org/data/2.5/weather?q="
const searchInputBox = document.getElementById('input-box');
const key = `7df0c19e4c1b9a412447f3062f0b979d`
searchInputBox.addEventListener('keypress',(event)=>{
    if(event.keyCode == 13){
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display="block";
    }
});

function getWeatherReport(city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="
    + city + "&units=metric&appid=" + key)
    .then(weather =>{
        
        return weather.json();
    }).then(showWeatherReport);
}



function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText= `${weather.name}, ${weather.sys.country}`
    
    let temp = document.getElementById('temp');
    temp.innerHTML= `${Math.round(weather.main.temp)}&deg;C`;
    
    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML= `${Math.floor(weather.main.temp_min)}&deg; C (min) / ${Math.ceil(weather.main.temp_max)}&deg; C (max)`
    
    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;
    
    let date =document.getElementById('date');
    let todayDate = new Date();
    Date.innerText = dateManage(todayDate);


    if(weatherType.textContent == 'Clear'){
        document.body.style.backgroundImage = "url(images/clear.jpg";
    }
    else if(weatherType.textContent == 'Clouds'){
        document.body.style.backgroundImage = "url(images/cloudy.jpg";
    }
    else if(weatherType.textContent == 'Haze'){
        document.body.style.backgroundImage = "url(images/cloudy.jpg";
    }
    else if(weatherType.textContent == 'Rain'){
        document.body.style.backgroundImage = "url(images/rain.jpg";
    }
    else if(weatherType.textContent == 'Snow'){
        document.body.style.backgroundImage = "url(images/snow.jpg";
    }
    else if(weatherType.textContent == 'Thunderstorm'){
        document.body.style.backgroundImage = "url(images/thunder.jpg";
    }
}


function dateManage(dateArg){
    let days =["Sunday", "Monaday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months =["January","February","March","April","May","June","July","August","September","October","November","December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}