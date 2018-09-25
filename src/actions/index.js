
import axios from 'axios';
const api_key = '60f06e0d120cda0b9ef142517a328b35';
const root_url = `http://api.openweathermap.org/data/2.5/forecast?appid=${api_key}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${root_url}&q=${city},us`;
    const request = axios.get(url);
    console.log('request', request);
    
    return{
        type : FETCH_WEATHER,
        payload : request
    }
}