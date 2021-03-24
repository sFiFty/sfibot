import { Space, Button } from 'antd';
import { commands } from 'locales';

export const generateColumns = (translate, setCommandToEdit, onDeleteCommand) => {
  return [
    {
      title: translate(commands.columnName),
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: translate(commands.columnResponse),
      dataIndex: 'response',
      key: 'response',
    },
    {
      title: '',
      key: 'action',
      render: (text, record, test) => {
        return (
          <Space size="middle">
            <Button onClick={() => setCommandToEdit(record.key)}>{translate(commands.columnActionEdit)}</Button>
            <Button danger onClick={() => onDeleteCommand(record.key)}>{translate(commands.columnActionDelete)}</Button>
          </Space>
        )
      },
    },
  ]
}

export const generateCommandsTableData = (commands) => {
  return commands.map((command) => (  {
    key: command.id,
    name: command.name,
    response: command.response,
  }))
}