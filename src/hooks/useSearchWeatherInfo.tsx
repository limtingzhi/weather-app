import { useCallback, useState } from 'react';
import { WeatherInfoType } from '../typings/typings';

interface Props {
  updateHistory: (city: string, country: string) => void;
}

interface UseSearchWeatherInfo {
  errorMsg: string | null;
  searchWeatherInfo: (city: string, country: string) => void;
  weatherInfo: WeatherInfoType | null;
}

const useSearchWeatherInfo = (props: Props): UseSearchWeatherInfo => {
  const { updateHistory } = props;

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfoType | null>(null);

  const searchWeatherInfo = useCallback(async (city: string, country: string) => {
    const trimmedCity = city.trim();
    const trimmedCountry = country.trim();

    if (trimmedCity === '' || trimmedCountry === '') {
      setErrorMsg('Please enter both a city and a country.');
      return;
    }

    updateHistory(trimmedCity, trimmedCountry);

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
  }, [updateHistory]);

  return { errorMsg, weatherInfo, searchWeatherInfo };
};

export {
  useSearchWeatherInfo,
};
