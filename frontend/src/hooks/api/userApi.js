import { twitch as axios } from 'utils/instances';

export const getTwitchUser = async () => {
  const response = await axios.get(`/users`);
  return response.data;
};
