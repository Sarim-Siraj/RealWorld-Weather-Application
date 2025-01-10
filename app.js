let temperature=document.getElementById('temp')
let placeLocation = document.getElementById('loc')
let weather = document.getElementById('weth')
let image = document.getElementById('img')
let imaged = document.getElementById('imgd')
let imagem = document.getElementById('imgm')
let imageme = document.getElementById('imgme')
let imagec = document.getElementById('imgc')
let feelLike = document.getElementById('feellike')
let humDity = document.getElementById('humidity')
let pressure = document.getElementById('pressure')
let visibility = document.getElementById('visibility')
let search = document.querySelector('.search');
let notFound = document.querySelector('.notFound');
let weatherapi = document.querySelector('.weatherapi');
let weatherapi2 = document.querySelector('.weatherapi2');
let dubaiTemperature = document.getElementById('dubaiTem')
let meccaTemperature = document.getElementById('makkahTem')
let medinaTemperature = document.getElementById('medinaTem')
let canadaTemperature = document.getElementById('canadaTem')
let dubai="Dubai"
let makkah="mecca"
let medina="medina"
let canada="canada"

window.onload = function() {
    search.style.display = 'block';
    weatherapi.style.display = 'none';
    weatherapi2.style.display = 'none';
    notFound.style.display = 'none';
};

let cityInput = document.getElementById('cityInp')
async function checkWeather(){
    try{
        if(cityInput.value.trim()==''){
            search.style.display = 'block';
            weatherapi.style.display = 'none';
            
            weatherapi2.style.display = 'none';
            return
              

        }
        else{
            search.style.display = 'none';  
            weatherapi.style.display = 'block'
            weatherapi2.style.display = 'block'
            notFound.style.display = 'none';
            
        }
        const baseUrl=`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=4de1bf9fb74caa5a2b9eaf7f5b6886c2`
        let fetchReslut= await fetch(baseUrl)
        
        if(!fetchReslut.ok && fetchReslut.statusText === 'Not Found') {
            notFound.style.display = 'block';
            weatherapi.style.display = 'none';
            weatherapi2.style.display = 'none';
            
        }else{
            notFound.style.display = 'none';
            weatherapi.style.display = 'block';
            weatherapi2.style.display = 'block';
         


        }
        let showResult= await fetchReslut.json()
        showWeather(showResult)
        
        const baseUrldubai=`https://api.openweathermap.org/data/2.5/weather?q=${dubai}&appid=4de1bf9fb74caa5a2b9eaf7f5b6886c2`
        let fetchReslutdubai= await fetch(baseUrldubai)
        let showResultdubai= await fetchReslutdubai.json()
        dubaiResult(showResultdubai)
        const baseUrlmakkah=`https://api.openweathermap.org/data/2.5/weather?q=${makkah}&appid=4de1bf9fb74caa5a2b9eaf7f5b6886c2`
        let fetchReslutmakkah= await fetch(baseUrlmakkah)
        let showResultmakkah= await fetchReslutmakkah.json()
        meccaResult(showResultmakkah)
        const baseUrlmedina=`https://api.openweathermap.org/data/2.5/weather?q=${medina}&appid=4de1bf9fb74caa5a2b9eaf7f5b6886c2`
        let fetchReslutmedina= await fetch(baseUrlmedina)
        let showResultmedina= await fetchReslutmedina.json()
        medinaResult(showResultmedina)
        const baseUrlcanada=`https://api.openweathermap.org/data/2.5/weather?q=${canada}&appid=4de1bf9fb74caa5a2b9eaf7f5b6886c2`
        let fetchReslutcanada= await fetch(baseUrlcanada)
        let showResultcanada= await fetchReslutcanada.json()
  
        canadaResult(showResultcanada)
    }
    catch(error){
        console.log("Error:", error);

    }
}
function dubaiResult(dubaiWeather){
    console.log(dubaiWeather)
    dubaiTemperature.innerHTML=`${Math.floor(dubaiWeather.main.temp - 273.15)}\u00B0C`
    weather.innerText = `${dubaiWeather.weather[0].main}`;
    if (dubaiWeather.weather[0].main == 'Smoke') {
        imaged.src = "./assets/smoke.webp";
    } else if (dubaiWeather.weather[0].main == 'Fog') {
        imaged.src = "./assets/fog.png";
    } else if (dubaiWeather.weather[0].main == 'Mist') {
        imaged.src = "./assets/mist.png";
    } else if (dubaiWeather.weather[0].main == 'Rain') {
        imaged.src = "./assets/rain.webp";
    } else if (dubaiWeather.weather[0].main == 'Clouds') {
        imaged.src = "./assets/cloud.png";
    } else if (dubaiWeather.weather[0].main == 'Clear') {
        imaged.src = "./assets/clear.png";
    } else if (dubaiWeather.weather[0].main == 'Haze') {
        imaged.src = "./assets/haze.png";
    } else {
        imaged.src = "./assets/blank.png"; // Default image if no match
    }
}


function meccaResult(meccaWeather){
    console.log(meccaWeather)
    meccaTemperature.innerHTML=`${Math.floor(meccaWeather.main.temp - 273.15)}\u00B0C`
    weather.innerText = `${meccaWeather.weather[0].main}`;

    // Change the image based on the weather condition in Mecca
    if (meccaWeather.weather[0].main == 'Smoke') {
        imagem.src = "./assets/smoke.webp";
    } else if (meccaWeather.weather[0].main == 'Fog') {
        imagem.src = "./assets/fog.png";
    } else if (meccaWeather.weather[0].main == 'Mist') {
        imagem.src = "./assets/mist.png";
    } else if (meccaWeather.weather[0].main == 'Rain') {
        imagem.src = "./assets/rain.webp";
    } else if (meccaWeather.weather[0].main == 'Clouds') {
        imagem.src = "./assets/cloud.png";
    } else if (meccaWeather.weather[0].main == 'Clear') {
        imagem.src = "./assets/clear.png";
    } else if (meccaWeather.weather[0].main == 'Haze') {
        imagem.src = "./assets/haze.png";
    } else {
        imagem.src = "./assets/blank.png"; // Default image if no match
    }

}
function medinaResult(medinaWeather){
    console.log(medinaWeather)
    medinaTemperature.innerHTML=`${Math.floor(medinaWeather.main.temp - 273.15)}\u00B0C`
    weather.innerText = `${medinaWeather.weather[0].main}`;
    if (medinaWeather.weather[0].main == 'Smoke') {
        imageme.src = "./assets/smoke.webp";
    } else if (medinaWeather.weather[0].main == 'Fog') {
        imageme.src = "./assets/fog.png";
    } else if (medinaWeather.weather[0].main == 'Mist') {
        imageme.src = "./assets/mist.png";
    } else if (medinaWeather.weather[0].main == 'Rain') {
        imageme.src = "./assets/rain.webp";
    } else if (medinaWeather.weather[0].main == 'Clouds') {
        imageme.src = "./assets/cloud.png";
    } else if (medinaWeather.weather[0].main == 'Clear') {
        imageme.src = "./assets/clear.png";
    } else if (medinaWeather.weather[0].main == 'Haze') {
        image.src = "./assets/haze.png";
    } else {
        imageme.src = "./assets/blank.png"; // Default image if no match
    }
}
function canadaResult(canadaWeather){
    console.log(canadaWeather)
    canadaTemperature.innerHTML=`${Math.floor(canadaWeather.main.temp - 273.15)}\u00B0C`
    weather.innerText = `${canadaWeather.weather[0].main}`;
    if (canadaWeather.weather[0].main == 'Smoke') {
        imagec.src = "./assets/smoke.webp";
    } else if (canadaWeather.weather[0].main == 'Fog') {
        imagec.src = "./assets/fog.png";
    } else if (canadaWeather.weather[0].main == 'Mist') {
        imagec.src = "./assets/mist.png";
    } else if (canadaWeather.weather[0].main == 'Rain') {
        imagec.src = "./assets/rain.webp";
    } else if (canadaWeather.weather[0].main == 'Clouds') {
        imagec.src = "./assets/cloud.png";
    } else if (canadaWeather.weather[0].main == 'Clear') {
        imagec.src = "./assets/clear.png";
    } else if (canadaWeather.weather[0].main == 'Haze') {
        imagec.src = "./assets/haze.png";
    } else {
        imagec.src = "./assets/blank.png"; // Default image if no match
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












