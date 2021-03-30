import { main as axios } from 'utils/axiosInstances';

const ROUTE = '/requests';

export const getRequests = async () => {
  const response = await axios.get(ROUTE);
  return response.data;
};

export const editRequest = async (data) => {
  const response = await axios.patch(ROUTE, data);
  return response.data;
};
