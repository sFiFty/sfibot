import { useQuery } from 'react-query';
import getTwitchUser from './api/userApi';

export default () => useQuery('user', getTwitchUser, { retry: false });
