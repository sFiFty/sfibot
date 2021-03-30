import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

let twitchToken = localStorage.getItem('twitch_token');

const main = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
});

const twitch = applyCaseMiddleware(axios.create({
  baseURL: process.env.REACT_APP_TWITCH_API_URL,
  timeout: 10000,
  headers: {
    get: {
      'Client-ID': process.env.REACT_APP_TWITCH_CLIENT_ID,
      Authorization: `Bearer ${twitchToken}`,
    },
  },
}));

twitch.interceptors.request.use((config) => {
  twitchToken = localStorage.getItem('twitch_token');
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${twitchToken}`,
    },
  };
});

export {
  main,
  twitch,
};
