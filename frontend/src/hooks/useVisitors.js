import { useQuery } from 'react-query';
import { getFollowers, getTopChatters } from './api/viewersApi';

export const useFollowers = (userId) => useQuery('followers', () => getFollowers(userId), { retry: false });

export const useTopChatters = () => useQuery('topChatters', getTopChatters, { retry: false });
