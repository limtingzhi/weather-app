import { WeatherInfoType } from '../typings/typings';

interface Props {
  city: string;
  country: string;
  weatherInfo: WeatherInfoType | null;
}

const WeatherInfo = (props: Props) => {
  const { city, country, weatherInfo } = props;

  if (weatherInfo === null) {
    return;
  }

  const date = new Date(weatherInfo.timestamp);
  const formattedDate = date.toLocaleDateString('en-SG').replace(/\//g, '-');
  const formattedTime = date.toLocaleTimeString('en-SG', { hour: '2-digit', minute: '2-digit' });

  return (
    <div>
      <div>Today’s Weather</div>
      <div>{`${weatherInfo.temp}°`}</div>
      <div>{`H: ${weatherInfo.maxTemp}° L: ${weatherInfo.minTemp}°`}</div>
      <div>{`${city}, ${country}`}</div>
      <div>{weatherInfo.weather}</div>
      <div>{`Humidity: ${weatherInfo.humidity}%`}</div>
      <div>{`${formattedDate} ${formattedTime}`}</div>
    </div>
  );
};

export default WeatherInfo;
