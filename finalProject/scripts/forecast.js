const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&appid=b70f6624d9d608896871085b4ad7d933';

async function fetchForecast() {
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayForecast(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

fetchForecast();

function displayForecast(forecastData) {
  const forecastItems = document.querySelectorAll('.forecast-item');
  const forecastDays = document.querySelectorAll('.forecast-item h3');
  const forecastIcons = document.querySelectorAll('.forecast-item img');

  for (let i = 0; i < forecastItems.length; i++) {
    const forecast = forecastData.list[(i + 1) * 8];
    const temp = Math.round((forecast.main.temp - 32) / 1.8);
    
    const icon = forecast.weather[0].icon;
    const date = new Date(forecast.dt_txt).toLocaleDateString('en-US', { weekday: 'short' });

    forecastDays[i].textContent = date;
    forecastIcons[i].src = `https://openweathermap.org/img/w/${icon}.png`;
    forecastIcons[i].alt = forecast.weather[0].description;
    forecastItems[i].querySelector('p').textContent = `${temp}°C`;
  }
}
