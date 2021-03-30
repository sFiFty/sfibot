import { useQuery } from 'react-query';
import {
  getInputs,
  editInput,
  createInput,
  deleteInput,
} from './api/inputsApi';

export const useInputs = () => useQuery('inputs', getInputs, { retry: false });

export const changeInput = (data) => editInput(data);

export const addInput = (data) => createInput(data);

export const removeInput = (id) => deleteInput(id);
