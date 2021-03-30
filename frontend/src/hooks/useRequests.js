import { useQuery } from 'react-query';
import { getRequests, editRequest } from './api/requestsApi';

export const useRequests = () => useQuery('requests', getRequests, { retry: false });

export const changeRequest = (data) => editRequest(data);
