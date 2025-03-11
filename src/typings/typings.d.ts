interface WeatherInfoType {
  city: string;
  country: string;
  humidity: number;
  maxTemp: number;
  minTemp: number;
  temp: number;
  timestamp: number;
  weather: string;
}

interface SearchHistoryItem {
  city: string;
  country: string;
  timestamp: number;
}

export {
  WeatherInfoType,
  SearchHistoryItem,
};
