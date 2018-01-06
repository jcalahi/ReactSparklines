import axios from 'axios';
import { ROOT_URL, FETCH_WEATHER } from '../constants';

export function fetchWeather(cityName) {
  const url = `${ROOT_URL}&q=${cityName},ph`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
