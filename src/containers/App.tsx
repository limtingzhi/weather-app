import { useState, useCallback } from 'react';
import SearchInput from '../components/SearchInput';
import './App.css';

function App() {
  const [city, setCity] = useState<string>('');
  const [country, setCountry] = useState<string>('');

  const searchWeatherInfo = useCallback(async () => {
    // TODO: Call API
  }, []);

  return (
    <>
      <SearchInput
        city={city}
        country={country}
        setCity={setCity}
        setCountry={setCountry}
        searchWeatherInfo={searchWeatherInfo}
      />
      <div>Today’s Weather</div>
    </>
  );
}

export default App;
