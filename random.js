
   // const hourlyUrl=`https://api.openweathermap.org/data/2.5/forecast?q=${cityInput.value}&appid=4de1bf9fb74caa5a2b9eaf7f5b6886c2`
        // let fetchHourly= await fetch(hourlyUrl)

        // let hourlyResult= await fetchHourly.json()
        // // hourlyWeather(hourlyResult)
        // displayForecast(hourlyResult)







// function hourlyWeather(hourlyData){
//     console.log(hourlyData)

// }

// function displayForecast(forecastData) {
//     console.log(forecastData);
    
//     // Extracting the relevant data from the API response
//     const forecastList = forecastData.list;
//     let forecastHtml = '';

//     forecastList.forEach((forecast, index) => {
//         if (index % 8 === 0) { // Every 8th entry is a 24-hour block (since data is every 3 hours)
//             const date = new Date(forecast.dt * 1000);
//             const day = date.toLocaleString('en-US', { weekday: 'long' });
//             const temp = Math.floor(forecast.main.temp - 273.15); // Convert from Kelvin to Celsius
//             const weatherMain = forecast.weather[0].main;
//             const humidity = forecast.main.humidity;
//             const icon = forecast.weather[0].icon;
//             const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;

//             // Generate HTML to display forecast for the day
//             forecastHtml += `
//                 <div class="forecast-day">
//                     <h3>${day}</h3>
//                     <img src="${iconUrl}" alt="${weatherMain}">
//                     <p>${weatherMain}</p>
//                     <p>Temp: ${temp}°C</p>
//                     <p>Humidity: ${humidity}%</p>
//                 </div>
//             `;
//         }
//     });

//     // Insert the forecast HTML into the page (assuming you have a container with id 'forecast')
//     document.getElementById('forecast').innerHTML = forecastHtml;
// }











// const weatherData = {
//     sunrise: 1736477703,  // Example sunrise Unix timestamp (in seconds)
//     sunset: 1736512384,   // Example sunset Unix timestamp (in seconds)
//     timezone: 18000       // Timezone offset in seconds (e.g., UTC+5)
// };

// // Convert Unix timestamp (seconds) to a human-readable time
// function convertUnixToTime(unixTimestamp, timezoneOffset) {
//     // Convert the Unix timestamp to milliseconds
//     const localTime = new Date((unixTimestamp + timezoneOffset) * 1000);  // Multiply by 1000 to convert to ms
//     return localTime.toLocaleTimeString();  // Get the time in human-readable format
// }

// // Calculate the sunrise and sunset times
// const sunriseTime = convertUnixToTime(weatherData.sunrise, weatherData.timezone);
// const sunsetTime = convertUnixToTime(weatherData.sunset, weatherData.timezone);

// // Output the results
// console.log(`Sunrise: ${sunriseTime}`);
// console.log(`Sunset: ${sunsetTime}`);