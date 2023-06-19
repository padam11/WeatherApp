import { Weather } from './WeatherApi.js'
import { UserInterface } from './WeatherUser.js'
const weath = new Weather;
const ui = new UserInterface;

const btn = document.getElementById('btn');

btn.addEventListener("click", weatherData);

function weatherData(e)
{
  const city = document.getElementById('city').value;
  e.preventDefault();
  weath.retrieveWeather(city).then(data => {
    if (city != '')
      {
        if (data.res.message == 'city not found')
          {
            ui.showAlert('City not found', 'alert red');
            ui.clearInput();
          }
        else
          {
            ui.showUserData(data.res);
            ui.clearInput();
          }
      }
    else
      {
        ui.showAlert('Please enter a city.', 'alert red');
      }
  })
}
