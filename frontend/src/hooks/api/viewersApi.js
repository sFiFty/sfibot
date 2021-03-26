import { twitch as axios } from 'utils/axiosInstances';

const REQUEST_LIMIT = 100;

export const getFollowers = async (userId) => {
  const response = await axios.get(`/users/follows?to_id=${userId}&first=${REQUEST_LIMIT}`);
  return response.data;
};
