import cloudImage from '../assets/cloud.png';
import sunImage from '../assets/sun.png';
import { WeatherInfoType } from '../typings/typings';
import { formatDate } from '../utils/formats';
import './WeatherInfo.css';

interface Props {
  weatherInfo: WeatherInfoType | null;
}

const WeatherInfo = (props: Props) => {
  const { weatherInfo } = props;

  if (weatherInfo === null) {
    return;
  }

  const date = formatDate(weatherInfo.timestamp * 1000);

  const weatherImage = weatherInfo.weather === 'Clear' ? sunImage : cloudImage;

  return (
    <div className="weather-info">
      <img alt="weather" className="weather-info__img" src={weatherImage} />
      <div className="weather-info__left">
        <div>Today’s Weather</div>
        <div className="weather-info__temp">{`${Math.round(weatherInfo.temp)}°`}</div>
        <div>{`H: ${Math.round(weatherInfo.maxTemp)}° L: ${Math.round(weatherInfo.minTemp)}°`}</div>
        <div className="weather-info__location">{`${weatherInfo.city}, ${weatherInfo.country}`}</div>
      </div>
      <div className="weather-info__right">
        <div>{weatherInfo.weather}</div>
        <div>{`Humidity: ${weatherInfo.humidity}%`}</div>
        <div>{date}</div>
      </div>
    </div>
  );
};

export default WeatherInfo;
