import { combineReducers } from 'redux';
import WeatherReducer from './weather-reducer';

const rootReducer = combineReducers({
    fetchWeather: WeatherReducer
});

export default rootReducer;
