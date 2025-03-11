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
  const { errorMsg, weatherInfo, searchWeatherInfo } = useSearchWeatherInfo({ updateHistory });

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
        weatherInfo={weatherInfo}
      />
      <SearchHistory
        deleteHistory={deleteHistory}
        history={history}
        searchWeatherInfo={searchWeatherInfo}
        setCity={setCity}
        setCountry={setCountry}
      />
    </>
  );
}

export default App;
