import { Space, Button } from 'antd';


export const generateColumns = (translate, setCommandToEdit) => {
  return [
    {
      title: translate('commandsList.columnCommandName'),
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: translate('commandsList.columnResponseName'),
      dataIndex: 'response',
      key: 'response',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record, test) => {
        return (
          <Space size="middle">
            <Button onClick={() => setCommandToEdit(record.key)}>Edit</Button>
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