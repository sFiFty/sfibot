import React, { useState } from 'react';
import { Spin, Drawer, Button, Space, Card, Divider } from 'antd';
import { useTranslation, nameSpaces, commands as tCommands } from "locales";
import { useCommands, changeCommand, addCommand, removeCommand } from 'hooks/useCommand';
import CommandsList from 'components/CommandsList';
import CommandForm from 'components/CommandForm';

const Commands = () => {
  const { t } = useTranslation(nameSpaces.commands);
  const { isLoading, data: commands, refetch } = useCommands();
  const [commandToEdit, setCommandToEdit] = useState(null);
  const [isCommandDrawerOpen, setIsCommandDrawerOpen] = useState(false);

  const openAddCommandForm = () => {
    setCommandToEdit(null);
    setIsCommandDrawerOpen(true);
  }
  
  const onSetCommandToEdit = (commandId) => {
    setCommandToEdit(commands.find(c => c.id === commandId));
    setIsCommandDrawerOpen(true);
  }

  const isDrawerForUpdate = !!commandToEdit;

  const onDrawerClose = () => {
    setCommandToEdit(null);
    setIsCommandDrawerOpen(false);
  }

  const onUpdateCommands = async () => {
    await refetch();
    onDrawerClose();
  }
  
  const onAddCommand = async (data) => {
    await addCommand(data);
    await onUpdateCommands();
  }

  const onUpdateCommand = async (data) => {
    await changeCommand(data);
    await onUpdateCommands();
  }

  const onDeleteCommand = async (id) => {
    await removeCommand(id);
    await refetch();
  }

  return (
    <Card>
      {
        isLoading ? (
          <Spin />
        ) : (
          <Space direction="vertical" size="middle">
            <Button onClick={openAddCommandForm}>{t(tCommands.addNewButton)}</Button>
            <Divider />
            <CommandsList commands={commands} setCommandToEdit={onSetCommandToEdit} onDeleteCommand={onDeleteCommand} />
            {
              isCommandDrawerOpen && (
                <Drawer
                  width="50%"
                  title={isDrawerForUpdate ? t(tCommands.drawerUpdateTitle) : t(tCommands.drawerCreateTitle)}
                  placement="right"
                  visible
                  onClose={onDrawerClose}
                >
                  <CommandForm
                    command={commandToEdit}
                    onAddCommand={onAddCommand}
                    onUpdateCommand={onUpdateCommand}
                    isUpdate={isDrawerForUpdate}
                  />
                </Drawer>
              )
            }
          </Space>
        )
      }
    </Card>
  )
};

export default Commands;
