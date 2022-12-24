const fetchWeather = () => {
    navigator.geolocation.getCurrentPosition(position => {
      
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      
      
      fetch(`https://weather-proxy.freecodecamp.rocks/api/current?lat=${latitude}&lon=${longitude}`)
        .then(response => response.json())
        .then(data => {
          
          const temperature = Math.round(data.main.temp); 
          const conditions = data.weather[0].description;
          const iconUrl = data.weather[0].icon;
          const city = data.name;
          const country = data.sys.country;
          
          
          const weatherHtml = `
            <p>Location: ${city}, ${country}</p>
            <p>Temperature: ${temperature}&deg;C</p> 
            <p>Conditions: ${conditions}</p>
            <img src="${iconUrl}" alt="Weather icon">
          `;
          
          
          const weatherContainer = document.getElementById('weather-container');
          weatherContainer.innerHTML = weatherHtml;
        });
    });
  }
  
 
  fetchWeather();
  


