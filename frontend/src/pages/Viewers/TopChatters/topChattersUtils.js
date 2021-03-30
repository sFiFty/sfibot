import { visitors } from 'locales';

export const generateColumns = (translate) => [
  {
    title: translate(visitors.userName),
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: translate(visitors.messagesCount),
    dataIndex: 'messagesCount',
    key: 'messagesCount',
  },
];

export const generateTableData = (followersData) => followersData.map((follower) => ({
  key: follower.fromId,
  name: follower.username,
  messagesCount: follower.messagesCount,
}));
