import cloudImage from '../assets/cloud.png';
import sunImage from '../assets/cloud.png';
import { WeatherInfoType } from '../typings/typings';
import { formatDate } from '../utils/formats';

interface Props {
  weatherInfo: WeatherInfoType | null;
}

const WeatherInfo = (props: Props) => {
  const { weatherInfo } = props;

  if (weatherInfo === null) {
    return;
  }

  const date = formatDate(weatherInfo.timestamp);

  const weatherImage = weatherInfo.weather === 'Clear' ? sunImage : cloudImage;

  return (
    <div>
      <img alt="weather" src={weatherImage} />
      <div>Today’s Weather</div>
      <div>{`${weatherInfo.temp}°`}</div>
      <div>{`H: ${weatherInfo.maxTemp}° L: ${weatherInfo.minTemp}°`}</div>
      <div>{`${weatherInfo.city}, ${weatherInfo.country}`}</div>
      <div>{weatherInfo.weather}</div>
      <div>{`Humidity: ${weatherInfo.humidity}%`}</div>
      <div>{date}</div>
    </div>
  );
};

export default WeatherInfo;
