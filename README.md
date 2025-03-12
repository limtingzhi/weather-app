# Weather App

A simple weather application where users can input a city and a country to retrieve and display weather information from [OpenWeatherMap API](https://openweathermap.org/api).

## Assumptions

- **Country Input:** Please use ISO 3166 country codes (e.g., "SG" for Singapore). You can find a list of codes [here](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
- **Search History:** The last 10 searches are stored in the application's state and will be cleared on refresh.
- **Weather Icons:** The cloud icon has a transparent background, which makes the border visible.

## Setup

1. **Create `.env` File:** Create a `.env` file in the root directory of the project based on `.env.sample`.
2. **Add API Key:** Add your OpenWeatherMap API key to the `.env` file:

    ```
    VITE_OPEN_WEATHER_MAP_API_KEY=your_api_key
    ```

3. **Install Dependencies:** Run `npm install` to install project dependencies.
4. **Start Application:** Run `npm run dev` to start the development server.
5. **Access Application:** The application can be accessed at [http://localhost:8090](http://localhost:8090).
