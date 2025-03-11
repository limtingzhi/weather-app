import { useCallback } from 'react';

interface Props {
  city: string;
  country: string;
  setCity: (city: string) => void;
  setCountry: (country: string) => void;
  searchWeatherInfo: () => void;
}

const SearchInput = (props: Props) => {
  const { city, country, setCity, setCountry, searchWeatherInfo } = props;

  const clearInputs = useCallback(() => {
    setCity('');
    setCountry('');
  }, [setCity, setCountry]);

  return (
    <div>
      <input
        autoComplete="off"
        name="city"
        onChange={e => setCity(e.target.value)}
        placeholder="City"
        type="text"
        value={city}
      />
      <input
        autoComplete="off"
        name="country"
        onChange={e => setCountry(e.target.value)}
        placeholder="Country"
        type="text"
        value={country}
      />
      <button onClick={searchWeatherInfo} type="submit">
        Search
      </button>
      <button onClick={clearInputs} type="reset">
        Clear
      </button>
    </div>
  );
};

export default SearchInput;
