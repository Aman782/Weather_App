let city = document.querySelector('.card-title');
let listItem = document.querySelectorAll('.list-group-item');
let inputBox = document.querySelector('.form-control');
let searchBtn = document.querySelector('.search');

const ApiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const ApiKey = "4ce38d2fb3f8136d0b0b061a0b4a8dcb"
async function weatherApp(userGivenCity){
    let data = await fetch(ApiURL + userGivenCity + `&appid=${ApiKey}`);
    data = await data.json();
    console.log(data);
    city.innerHTML = data.name;
    listItem[0].innerHTML = "Temperature: " + data.main.temp + "°C";
    listItem[1].innerHTML = "Pressure: " + data.main.pressure + "mb";
    listItem[2].innerHTML = "Humidity: " + data.main.humidity + "%";
    listItem[3].innerHTML = "Wind Speed: " + data.wind.speed + "km/h";
    
    
}

searchBtn.addEventListener('click', ()=>{
    let userInput = inputBox.value;
    console.log(userInput);
    weatherApp(userInput);
    inputBox.value = "";
});