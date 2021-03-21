import axios from "axios";

const twitch_token = localStorage.getItem('twitch_token');

export default axios.create({
  baseURL: process.env.REACT_APP_TWITCH_API_URL,
  timeout: 10000,
  headers: {
    get: {
      'Client-ID': process.env.REACT_APP_TWITCH_CLIENT_ID,
      'Authorization': `Bearer ${twitch_token}`
    }
  }
});