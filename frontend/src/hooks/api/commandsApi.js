import { main as axios } from 'utils/axiosInstances';

export const getCommands = async () => {
  const response = await axios.get(`/commands/`);
  return response.data;
};

export const editCommand = async (data) => {
  const response = await axios.patch(`/commands/`, data);
  return response.data;
};

export const createCommand = async (data) => {
  const response = await axios.post(`/commands/`, data);
  return response.data;
};

export const deleteCommand = async (id) => {
  const response = await axios.delete(`/commands/${id}`);
  return response.data;
};