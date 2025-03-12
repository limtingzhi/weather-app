import { useState } from 'react';
import SearchHistory from '../components/SearchHistory';
import SearchInput from '../components/SearchInput';
import WeatherInfo from '../components/WeatherInfo';
import { useHistory } from '../hooks/useHistory';
import { useSearchWeatherInfo } from '../hooks/useSearchWeatherInfo';
import './App.css';

function App() {
  const [city, setCity] = useState<string>('');
  const [country, setCountry] = useState<string>('');

  const { history, updateHistory, deleteHistory } = useHistory();
  const {
    isLoading, errorMsg, weatherInfo, searchWeatherInfo,
  } = useSearchWeatherInfo({ updateHistory });

  return (
    <div className="weather-app">
      <SearchInput
        city={city}
        country={country}
        setCity={setCity}
        setCountry={setCountry}
        searchWeatherInfo={searchWeatherInfo}
      />
      {isLoading && (
        <div className="weather-app__loading-msg">Loading...</div>
      )}
      {errorMsg && (
        <div className="weather-app__error-msg">{errorMsg}</div>
      )}
      {(weatherInfo !== null || history.length !== 0) && (
        <div className="weather-app__results">
          <WeatherInfo weatherInfo={weatherInfo} />
          <SearchHistory
            deleteHistory={deleteHistory}
            history={history}
            searchWeatherInfo={searchWeatherInfo}
            setCity={setCity}
            setCountry={setCountry}
          />
        </div>
      )}
    </div>
  );
}

export default App;
