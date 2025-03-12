import { useCallback } from 'react';
import ClearIcon from './Icons/ClearIcon';
import SearchIcon from './Icons/SearchIcon';
import './SearchInput.css';

interface Props {
  city: string;
  country: string;
  setCity: (city: string) => void;
  setCountry: (country: string) => void;
  searchWeatherInfo: (city: string, country: string) => void;
}

const SearchInput = (props: Props) => {
  const { city, country, setCity, setCountry, searchWeatherInfo } = props;

  const submit = useCallback(() => {
    searchWeatherInfo(city, country);
  }, [city, country, searchWeatherInfo]);

  const clearInputs = useCallback(() => {
    setCity('');
    setCountry('');
  }, [setCity, setCountry]);

  return (
    <div className="search-input">
      <div className="search-input__inputs">
        <div className="search-input__group">
          <input
            autoComplete="off"
            className="search-input__input"
            id="city"
            onChange={e => setCity(e.target.value)}
            placeholder=" "
            type="text"
            value={city}
          />
          <label
            className="search-input__label"
            htmlFor="city"
          >
            City
          </label>
        </div>
        <div className="search-input__group">
          <input
            autoComplete="off"
            className="search-input__input"
            id="country"
            onChange={e => setCountry(e.target.value)}
            placeholder=" "
            type="text"
            value={country}
          />
          <label
            className="search-input__label"
            htmlFor="country"
          >
            Country
          </label>
        </div>
      </div>
      <div className="search-input__btns">
        <button
          className="search-input__btn"
          onClick={submit}
          type="submit"
        >
          <SearchIcon className="search-input__btn-icon" />
        </button>
        <button
          className="search-input__btn"
          onClick={clearInputs}
          type="reset"
        >
          <ClearIcon className="search-input__btn-icon" />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
