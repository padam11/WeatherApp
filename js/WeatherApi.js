class Weather {
    constructor() {
      this.apiKeys = '4083ffefa5e952229d5aba76062c714c';
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