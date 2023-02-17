const fahrenheit = 73.4
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
 
