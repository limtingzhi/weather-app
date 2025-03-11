import { useCallback } from 'react';
import { SearchHistoryItem } from '../typings/typings';
import { formatDate } from '../utils/formats';

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
    <div>
      <div>Search History</div>
      {history.map(h => (
        <div key={h.timestamp}>
          <div>
            <div>{`${h.city}, ${h.country}`}</div>
            <div>{formatDate(h.timestamp)}</div>
          </div>
          <div>
            <button
              onClick={() => retrySearchWeatherInfo(h.city, h.country)}
              type="button"
            >
              Search
            </button>
            <button
              onClick={() => deleteHistory(h.timestamp)}
              type="button"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchHistory;
