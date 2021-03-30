import { visitors } from 'locales';
import { getDateTime } from 'utils/dateHelpers';

export const generateColumns = (translate, translateDates) => [
  {
    title: translate(visitors.userName),
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: translate(visitors.followDate),
    dataIndex: 'date',
    key: 'date',
    render: (date) => getDateTime(date, translateDates, true),
  },
];

export const generateTableData = (followersData) => followersData.map((follower) => ({
  key: follower.fromId,
  name: follower.fromName,
  date: follower.followedAt,
}));
