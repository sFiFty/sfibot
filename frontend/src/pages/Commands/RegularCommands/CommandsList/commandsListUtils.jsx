import React from 'react';
import { Space, Button } from 'antd';
import { commands as tCommands } from 'locales';

export const generateColumns = (translate, setCommandToEdit, onDeleteCommand) => [
  {
    title: translate(tCommands.columnName),
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: translate(tCommands.columnResponse),
    dataIndex: 'response',
    key: 'response',
  },
  {
    title: '',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Button onClick={() => setCommandToEdit(record.key)}>
          {translate(tCommands.columnActionEdit)}
        </Button>
        <Button danger onClick={() => onDeleteCommand(record.key)}>
          {translate(tCommands.columnActionDelete)}
        </Button>
      </Space>
    ),
  },
];

export const generateCommandsTableData = (commands) => commands.map((command) => ({
  key: command.id,
  name: command.name,
  response: command.response,
}));
