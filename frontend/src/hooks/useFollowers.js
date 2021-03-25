import { useQuery } from 'react-query';
import { getFollowers } from './api/viewersApi';

export const useFollowers = (userId) => {
  useQuery('followers', async () => getFollowers(userId), { retry: false });
}