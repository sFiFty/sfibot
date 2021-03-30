import React from 'react';
import { Checkbox } from 'antd';
import { requests as tRequests } from 'locales';
import { getDateTime } from 'utils/dateHelpers';

export const generateColumns = (translate, translateDates, onRequestStatusChange) => [
  {
    title: translate(tRequests.username),
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: translate(tRequests.content),
    dataIndex: 'content',
    key: 'content',
  },
  {
    title: translate(tRequests.type),
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: translate(tRequests.date),
    dataIndex: 'date',
    key: 'date',
    render: (date) => getDateTime(date, translateDates, true),
  },
  {
    title: translate(tRequests.isCompleted),
    dataIndex: 'completed',
    key: 'completed',
    render: (isCompleted, record) => (
      <Checkbox
        checked={isCompleted}
        onChange={(event) => onRequestStatusChange(event.target.checked, record.key)}
      />
    ),
  },
];

export const generateCommandsTableData = (requests) => requests.map((request) => ({
  key: request.id,
  username: request.username,
  content: request.content,
  type: request.inputName,
  date: request.createdAt,
  completed: request.isCompleted,
}));
