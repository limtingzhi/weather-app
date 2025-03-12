import { useCallback } from 'react';
import { SearchHistoryItem } from '../typings/typings';
import { formatDate } from '../utils/formats';
import SearchIcon from './Icons/SearchIcon';
import TrashIcon from './Icons/TrashIcon';
import './SearchHistory.css';

interface Props {
  deleteHistory: (timestamp: number) => void;
  history: SearchHistoryItem[];
  searchWeatherInfo: (city: string, country: string) => void;
  setCity: (city: string) => void;
  setCountry: (country: string) => void;
}

const SearchHistory = (props: Props) => {
  const { deleteHistory, history, searchWeatherInfo, setCity, setCountry } = props;

  const retrySearchWeatherInfo = useCallback((city: string, country: string) => {
    setCity(city);
    setCountry(country);
    searchWeatherInfo(city, country);
  }, [searchWeatherInfo, setCity, setCountry]);

  if (history.length === 0) {
    return;
  }

  return (
    <div className="search-history">
      <div className="search-history__title">Search History</div>
      {history.map(h => (
        <div key={h.timestamp} className="search-history__item">
          <div className="search-history__info">
            <div className="search-history__info-location">{`${h.city}, ${h.country}`}</div>
            <div className="search-history__info-date">{formatDate(h.timestamp)}</div>
          </div>
          <div className="search-history__btns">
            <button
              className="search-history__btn"
              onClick={() => retrySearchWeatherInfo(h.city, h.country)}
              type="button"
            >
              <SearchIcon className="search-history__btn-icon" />
            </button>
            <button
              className="search-history__btn"
              onClick={() => deleteHistory(h.timestamp)}
              type="button"
            >
              <TrashIcon className="search-history__btn-icon" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchHistory;
