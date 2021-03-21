import { useQuery } from 'react-query';
import { getTwitchUser } from './api/userApi';

export const useUser = () => useQuery('user', getTwitchUser, { retry: false });
