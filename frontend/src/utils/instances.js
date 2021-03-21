import axios from "axios";

let twitch_token = localStorage.getItem('twitch_token');

const main = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
});

const twitch = axios.create({
  baseURL: process.env.REACT_APP_TWITCH_API_URL,
  timeout: 10000,
  headers: {
    get: {
      'Client-ID': process.env.REACT_APP_TWITCH_CLIENT_ID,
      'Authorization': `Bearer ${twitch_token}`
    }
  }
});

twitch.interceptors.request.use(function (config) {
  twitch_token = localStorage.getItem('twitch_token');
  console.log(twitch_token)
  config.headers.Authorization = `Bearer ${twitch_token}`;
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export {
  main,
  twitch
};