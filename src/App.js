import axios from 'axios';
import { useState, useEffect } from 'react';
import './app.scss';
import City from './components/City/City';
import Days from './components/Days/Days';

function App() {

  const [weatherData, setWeatherData] = useState([]);
  const [cityName, setCityName] = useState('accra');

  useEffect(() => {
    getWeatherData();
  }, [cityName])

  const getWeatherData = async () => {
    const response = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&key=38ff7a5f9aa44a4fb8a39690b036d5cb`);
    setWeatherData(response.data);
    console.log(response.data);
  }

  const getCityName = (e) => {
    setCityName(e.target.value);
  }

  return (
    <div className="weather__app">

      <City
        cityValue={cityName}
        selectCity={getCityName}
      />

      <div className='weather__app__days__wrapper'>
        {
          weatherData.data && weatherData.data.length > 0 && weatherData.data.map((item, idx) => (
            // idx <= 13 && (
            <Days
              dateTime={item.datetime}
              weather={item.weather.description}
              maxTemp={item.max_temp}
              minTemp={item.min_temp}
              windSpeed={item.wind_spd}
              icon={item.weather.icon}
              windDir={item.wind_cdir}
              idex={idx}
            />
            //)
          ))
        }
      </div>

    </div>
  );
}

export default App;
