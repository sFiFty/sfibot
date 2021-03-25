import { twitch as axios } from 'utils/instances';

export const getFollowers = async (userId) => {
  const response = await axios.get(`/users/follows?to_id=${userId}`);
  return response.data;
};
