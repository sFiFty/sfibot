import { twitch as twitchAxios, main as axios } from 'utils/axiosInstances';

const REQUEST_LIMIT = 100;

export const getFollowers = async (userId) => {
  const response = await twitchAxios.get(`/users/follows?to_id=${userId}&first=${REQUEST_LIMIT}`);
  return response.data;
};

export const getTopChatters = async () => {
  const response = await axios.get('/visitors');
  return response.data;
};
