class Weather {
    constructor() {
      this.apiKeys = '1c36715b23ed05789a7db7679968263f';
    }
    async retrieveWeather(city)
    {
      const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKeys}');
      const res = await response.json();
      return
      {
        res
      }
      
    }
  }