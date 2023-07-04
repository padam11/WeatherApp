export class Weather {
  constructor() {
    this.apiKeys = '8ab050093f4fbd71760ac840b7660a0c';
  }
  async retrieveWeather(city)
  {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKeys}`);
    
    const resData = await response.json();
    
    return {
      resData
    }
  }
  
  
}
