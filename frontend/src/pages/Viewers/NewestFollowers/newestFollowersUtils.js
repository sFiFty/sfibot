import { visitors } from 'locales';
import { getDateTime } from 'utils/dateHelpers';

export const generateColumns = (translate, translateDates) => {
  return [
    {
      title: translate(visitors.userName),
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: translate(visitors.followDate),
      dataIndex: 'date',
      key: 'date',
      render: (date, record) => getDateTime(date, translateDates, true)
    }
  ];
}

export const generateTableData = (followersData) => {
  return followersData.map(follower => (  {
    key: follower.fromId,
    name: follower.fromName,
    date: follower.followedAt
  }))
}