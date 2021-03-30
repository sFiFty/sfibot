import { main as axios } from 'utils/axiosInstances';

const ROUTE = '/commands';

export const getCommands = async () => {
  const response = await axios.get(ROUTE);
  return response.data;
};

export const editCommand = async (data) => {
  const response = await axios.patch(ROUTE, data);
  return response.data;
};

export const createCommand = async (data) => {
  const response = await axios.post(ROUTE, data);
  return response.data;
};

export const deleteCommand = async (id) => {
  const response = await axios.delete(`${ROUTE}/${id}`);
  return response.data;
};
