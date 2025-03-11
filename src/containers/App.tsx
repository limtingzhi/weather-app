import { useState, useCallback } from 'react';
import SearchInput from '../components/SearchInput';
import './App.css';

function App() {
  const [city, setCity] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const searchWeatherInfo = useCallback(async () => {
    if (city.trim() === '' || country.trim() === '') {
      setErrorMsg('Please enter both a city and a country.');
      return;
    }

    // TODO: Call API
  }, [city, country]);

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
      <div>Today’s Weather</div>
    </>
  );
}

export default App;
