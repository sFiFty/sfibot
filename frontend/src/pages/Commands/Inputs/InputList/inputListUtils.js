import { Space, Button } from 'antd';
import { inputs } from 'locales';

export const generateColumns = (translate, setInputToEdit, onDeleteInput) => {
  return [
    {
      title: translate(inputs.columnName),
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: translate(inputs.columnInputName),
      dataIndex: 'inputName',
      key: 'inputName',
    },
    {
      title: '',
      key: 'action',
      render: (text, record) => {
        return (
          <Space size="middle">
            <Button onClick={() => setInputToEdit(record.key)}>{translate(inputs.columnActionEdit)}</Button>
            <Button danger onClick={() => onDeleteInput(record.key)}>{translate(inputs.columnActionDelete)}</Button>
          </Space>
        )
      },
    },
  ]
}

export const generateCommandsTableData = (inputs) => {
  return inputs.map((input) => (  {
    key: input.id,
    name: input.commandName,
    inputName: input.inputName,
  }))
}