import { useState, useCallback } from 'react';
import SearchInput from '../components/SearchInput';
import WeatherInfo from '../components/WeatherInfo';
import { SearchHistoryItem, WeatherInfoType } from '../typings/typings';
import './App.css';

const MAX_HISTORY = 10;

function App() {
  const [city, setCity] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfoType | null>(null);
  const [history, setHistory] = useState<SearchHistoryItem[]>([]);

  const updateHistory = useCallback(() => {
    const tempHistory = [...history];

    const search: SearchHistoryItem = {
      city,
      country,
      timestamp: Date.now(),
    };

    tempHistory.unshift(search);

    if (tempHistory.length > MAX_HISTORY) {
      tempHistory.pop();
    }

    setHistory(tempHistory);
  }, [city, country, history]);

  const searchWeatherInfo = useCallback(async () => {
    if (city.trim() === '' || country.trim() === '') {
      setErrorMsg('Please enter both a city and a country.');
      return;
    }

    updateHistory();

    // TODO: Call API
    const mockWeatherInfo = {
      humidity: 60,
      maxTemp: 29,
      minTemp: 26,
      temp: 26,
      timestamp: 1726660758,
      weather: 'Rain',
    };

    setWeatherInfo(mockWeatherInfo);
  }, [city, country, updateHistory]);

  return (
    <>
      <SearchInput
        city={city}
        country={country}
        setCity={setCity}
        setCountry={setCountry}
        searchWeatherInfo={searchWeatherInfo}
      />
      {errorMsg && <div>{errorMsg}</div>}
      <WeatherInfo
        city={city}
        country={country}
        weatherInfo={weatherInfo}
      />
    </>
  );
}

export default App;
