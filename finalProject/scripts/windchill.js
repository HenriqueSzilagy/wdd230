const url = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=b70f6624d9d608896871085b4ad7d933'

const captionDesc = document.querySelector('#figcaption');
const weatherIcon = document.querySelector('#weather-icon');

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
         displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  apiFetch();

  
  function  displayResults(weatherData) {
    const fahrenheit = weatherData.main.temp;
    
    const celsius = Math.round((fahrenheit - 32) / 1.8);
    const windSpeedm = weatherData.wind.speed
    const windSpeed = windSpeedm * 1.609344
    const windChillF = Math.round(35.74 + 0.6215 * fahrenheit - 35.75 * windSpeed ** 0.16 + 0.4275 * fahrenheit * windSpeed ** 0.16);
    const windChill = Math.round((windChillF - 32) / 1.8);
    document.getElementById('temperature').innerHTML = `${celsius}°C`;
    document.getElementById('windSpeed').innerHTML = `Wind Speed: ${(windSpeed.toFixed(1))} km/h`;

    if (celsius <= 10 && windSpeed >= 4.8 ){
        
        document.getElementById('windChill').innerHTML = `Wind Chill: ${windChill}°C`;
    } else {
        document.getElementById('windChill').innerHTML = "Wind Chill: N/A";
    }
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    
    captionDesc.innerHTML = `${desc}`;

}














const windSpeed = 24

const celsius = Math.round((fahrenheit - 32) / 1.8);

const windChillF = Math.round(35.74 + 0.6215 * fahrenheit - 35.75 * windSpeed ** 0.16 + 0.4275 * fahrenheit * windSpeed ** 0.16);


const windChill = Math.round((windChillF - 32) / 1.8);

document.getElementById('temperature').innerHTML = `${celsius}°C`;
document.getElementById('windSpeed').innerHTML = `Wind Speed: ${windSpeed} km/h`;

if (celsius <= 10 && windSpeed >= 4.8 ){
    
    document.getElementById('windChill').innerHTML = `Wind Chill: ${windChill}°C`;
} else {
    document.getElementById('windChill').innerHTML = "Wind Chill: N/A";
}

