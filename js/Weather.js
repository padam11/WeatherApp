import { Weather } from './WeatherApi.js'
import { UserInterface } from './WeatherUser.js'
//const weath = new eather;
const ui = new UserInterface;
const weather = new Weather;

const btn = document.getElementById('btn');

btn.addEventListener("click", weatherData);

function weatherData(e)
{

  const city = document.getElementById('city').value;
  e.preventDefault();
  weather.retrieveWeather(city).then(data => {
    if (city !== '')
      {
        if (data.resData.message === 'city not found')
          {
            ui.showAlert('City not found', 'alert red');
            ui.clearInput();
          }
        else
          {
            ui.showUserData(data.resData);
            ui.clearInput();
          }
      }
    else
      {
        ui.showAlert('Please enter a city.', 'alert red');
      }
  })
}








