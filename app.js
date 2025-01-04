let temperature=document.getElementById('temp')
let placeLocation = document.getElementById('loc')
let weather = document.getElementById('weth')
let image = document.getElementById('img')
let feelLike = document.getElementById('feellike')
let humDity = document.getElementById('humidity')
let pressure = document.getElementById('pressure')
let visibility = document.getElementById('visibility')

let cityInput = document.getElementById('cityInp')
async function checkWeather(){
    try{
        if(cityInput.value.trim()==''){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please Enter City Name",
               
              });

        }
        const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=4de1bf9fb74caa5a2b9eaf7f5b6886c2`
        let fetchReslut= await fetch(baseUrl)
        
        if(!fetchReslut.ok && fetchReslut.statusText === 'Not Found') {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "City Not Found!",
               
              })
        }
        let showResult= await fetchReslut.json()
            showWeather(showResult)
    }
    catch(error){
        console.log("Error:", error);

    }
}
function showWeather(weatherData){
    console.log(weatherData)
    temperature.innerText=`${Math.floor(weatherData.main.temp - 273.15)}\u00B0C`
    feelLike.innerText=`${Math.floor(weatherData.main.feels_like- 273.15)}\u00B0C`
    humDity.innerText=`${weatherData.main.humidity}%`
    pressure.innerText=`${weatherData.main.pressure}pha`
    visibility.innerText=`${Math.ceil(weatherData.visibility/ 1000)}km`
    placeLocation.innerText = weatherData.name
    weather.innerText = `${weatherData.weather[0].main}`;

    if (weatherData.weather[0].main=='Smoke'){
        image.src="./assets/smoke.webp";
    } else if(weatherData.weather[0].main=='Fog'){
        image.src="./assets/fog.png";
    } else if(weatherData.weather[0].main=='Mist'){
        image.src="./assets/mist.png";
    } else if(weatherData.weather[0].main=='Rain'){
        image.src="./assets/rain.webp";
    } else if(weatherData.weather[0].main=='Clouds'){
        image.src="./assets/cloud.png";
    } else if(weatherData.weather[0].main=='Clear'){
        image.src="./assets/clear.png";
    }else if(weatherData.weather[0].main=='Haze'){
        image.src="./assets/haze.png";
    }else{
        image.src="./assets/blank.png";

    }



let days= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let todayDays=new Date().getDay();
let dayElement = document.getElementById('day');  // Fixed: Corrected the undefined reference to 'day'
dayElement.innerHTML = `${days[todayDays]}`;

let date=new Date();
let newDate = date.toString().slice(4, 15);
document.getElementById('date').innerHTML = `${newDate}`


locImg.innerHTML=` <i id="loc" class="fa-solid fa-location-dot" style="color: #ffffff;"></i>`
       
}
