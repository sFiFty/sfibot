import React from 'react';
import { Space, Button } from 'antd';
import { inputs as tInputs } from 'locales';

export const generateColumns = (translate, setInputToEdit, onDeleteInput) => [
  {
    title: translate(tInputs.columnName),
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: translate(tInputs.columnInputName),
    dataIndex: 'inputName',
    key: 'inputName',
  },
  {
    title: '',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Button onClick={() => setInputToEdit(record.key)}>
          {translate(tInputs.columnActionEdit)}
        </Button>
        <Button danger onClick={() => onDeleteInput(record.key)}>
          {translate(tInputs.columnActionDelete)}
        </Button>
      </Space>
    ),
  },
];

export const generateCommandsTableData = (inputs) => inputs.map((input) => ({
  key: input.id,
  name: input.commandName,
  inputName: input.inputName,
}));
