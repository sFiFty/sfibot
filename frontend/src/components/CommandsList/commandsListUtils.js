import { Space, Button } from 'antd';
import localesConstanst from 'locales/localesConstanst';

const { commands: tCommands } = localesConstanst;

export const generateColumns = (translate, setCommandToEdit) => {
  return [
    {
      title: translate(tCommands.columnCommandName.path),
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: translate(tCommands.columnResponseName.path),
      dataIndex: 'response',
      key: 'response',
    },
    {
      title: '',
      key: 'action',
      render: (text, record, test) => {
        return (
          <Space size="middle">
            <Button onClick={() => setCommandToEdit(record.key)}>{translate(tCommands.columnActionEdit.path)}</Button>
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