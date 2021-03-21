import { useQuery, queryCache } from 'react-query';
import {
  getCommands,
  editCommand,
  createCommand,
  deleteCommand
} from './api/commandsApi';

export const useCommands = () => useQuery('commands', getCommands);

export const changeCommand = (data) => editCommand(data);

export const addCommand = (data) => createCommand(data);

export const removeCommand = (id) => deleteCommand(id);