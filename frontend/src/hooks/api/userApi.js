import { twitch as axios } from 'utils/axiosInstances';

export const getTwitchUser = async () => {
  const response = await axios.get(`/users`);
  return response.data.data[0];
};
