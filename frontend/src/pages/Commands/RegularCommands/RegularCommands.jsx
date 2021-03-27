import React, { useState } from 'react';
import { Spin, Drawer, Card } from 'antd';
import { useTranslation, nameSpaces, commands as tCommands } from "locales";
import { useCommands, changeCommand, addCommand, removeCommand } from 'hooks/useCommand';
import CommandsList from './CommandsList';
import CommandForm from './CommandForm';

const Commands = () => {
  const { t } = useTranslation(nameSpaces.commands);
  const { isLoading, data: commands, refetch } = useCommands();

  const [commandToEdit, setCommandToEdit] = useState(null);
  const [isCommandDrawerOpen, setIsCommandDrawerOpen] = useState(false);

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
    <>
      {
        isLoading ? (
          <Spin />
        ) : (
            <Card>
              <CommandsList commands={commands} setCommandToEdit={onSetCommandToEdit} onDeleteCommand={onDeleteCommand} />
            </Card>
        )
      }
      <Drawer
        width="30%"
        title={isDrawerForUpdate ? t(tCommands.drawerUpdateTitle) : t(tCommands.drawerCreateTitle)}
        placement="right"
        visible={isCommandDrawerOpen}
        onClose={onDrawerClose}
      >
        <CommandForm
          command={commandToEdit}
          onAddCommand={onAddCommand}
          onUpdateCommand={onUpdateCommand}
          isUpdate={isDrawerForUpdate}
        />
      </Drawer>
    </>
  )
};

export default Commands;

