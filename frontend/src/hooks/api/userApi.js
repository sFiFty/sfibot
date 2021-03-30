import { twitch as axios } from 'utils/axiosInstances';

export default async () => {
  const response = await axios.get('/users');
  return response.data.data[0];
};
