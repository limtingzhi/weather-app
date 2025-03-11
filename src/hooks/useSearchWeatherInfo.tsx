import { useCallback, useState } from 'react';
import { WeatherInfoType } from '../typings/typings';

interface Props {
  updateHistory: (city: string, country: string) => void;
}

interface UseSearchWeatherInfo {
  errorMsg: string | null;
  isLoading: boolean;
  searchWeatherInfo: (city: string, country: string) => void;
  weatherInfo: WeatherInfoType | null;
}

const useSearchWeatherInfo = (props: Props): UseSearchWeatherInfo => {
  const { updateHistory } = props;
  const {
    VITE_OPEN_WEATHER_MAP_API_URL: apiURL,
    VITE_OPEN_WEATHER_MAP_API_KEY: apiKey,
  } = import.meta.env;

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfoType | null>(null);

  const searchWeatherInfo = useCallback(async (city: string, country: string) => {
    const trimmedCity = city.trim();
    const trimmedCountry = country.trim();

    if (trimmedCity === '' || trimmedCountry === '') {
      setErrorMsg('Please enter both a city and a country.');
      return;
    }

    setIsLoading(true);
    setErrorMsg(null);
    setWeatherInfo(null);
    updateHistory(trimmedCity, trimmedCountry);

    try {
      const geoURL = `${apiURL}/geo/1.0/direct?q=${city},${country}&limit=1&appid=${apiKey}`;
      const coordinatesResponse = await fetch(geoURL);
      const coordinates = await coordinatesResponse.json();

      if (
        coordinates.length === 0
        || coordinates[0].name.toLowerCase() !== trimmedCity.toLowerCase()
        || coordinates[0].country.toLowerCase() !== trimmedCountry.toLowerCase()
      ) {
        throw new Error('City and country do not match any known location.');
      }

      const { lat, lon } = coordinates[0];

      const weatherURL = `${apiURL}/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
      const weatherResponse = await fetch(weatherURL);
      const weatherData = await weatherResponse.json();

      if (weatherData.cod !== 200) {
        throw new Error('Unable to retrieve weather information.');
      }

      setWeatherInfo({
        city: trimmedCity,
        country: trimmedCountry,
        humidity: weatherData.main.humidity,
        maxTemp: weatherData.main.temp_max,
        minTemp: weatherData.main.temp_min,
        temp: weatherData.main.temp,
        timestamp: weatherData.dt,
        weather: weatherData.weather[0].main,
      });
    } catch (error: any) {
      setErrorMsg(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [apiKey, apiURL, updateHistory]);

  return { isLoading, errorMsg, weatherInfo, searchWeatherInfo };
};

export {
  useSearchWeatherInfo,
};
