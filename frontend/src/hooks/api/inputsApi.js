import { main as axios } from 'utils/axiosInstances';

const ROUTE = '/inputs';

export const getInputs = async () => {
  const response = await axios.get(ROUTE);
  return response.data;
};

export const editInput = async (data) => {
  const response = await axios.patch(ROUTE, data);
  return response.data;
};

export const createInput = async (data) => {
  const response = await axios.post(ROUTE, data);
  return response.data;
};

export const deleteInput = async (id) => {
  const response = await axios.delete(`${ROUTE}/${id}`);
  return response.data;
};