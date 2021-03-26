import { useQuery } from 'react-query';
import { getFollowers } from './api/viewersApi';

export const useFollowers = (userId) => useQuery('followers', () => getFollowers(userId), { retry: false });