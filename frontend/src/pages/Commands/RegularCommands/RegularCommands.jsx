import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Spin, Drawer, Card } from 'antd';
import { useTranslation, nameSpaces, commands as tCommands } from 'locales';
import {
  useCommands, changeCommand, addCommand, removeCommand,
} from 'hooks/useCommand';
import CommandsList from './CommandsList';
import CommandForm from './CommandForm';

const RegularCommands = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const { t } = useTranslation(nameSpaces.commands);
  const { isLoading, data: commands, refetch } = useCommands();

  const [commandToEdit, setCommandToEdit] = useState(null);

  const onSetCommandToEdit = (commandId) => {
    setCommandToEdit(commands.find((c) => c.id === commandId));
    setIsDrawerOpen(true);
  };

  const isDrawerForUpdate = !!commandToEdit;

  const handleDrawerClose = () => {
    setCommandToEdit(null);
    setIsDrawerOpen(false);
  };

  const onUpdateCommands = async () => {
    await refetch();
    handleDrawerClose();
  };

  const onAddCommand = async (data) => {
    await addCommand(data);
    await onUpdateCommands();
  };

  const onUpdateCommand = async (data) => {
    await changeCommand(data);
    await onUpdateCommands();
  };

  const onDeleteCommand = async (id) => {
    await removeCommand(id);
    await refetch();
  };
  return (
    <>
      {
        isLoading ? (
          <Spin />
        ) : (
          <Card>
            <CommandsList
              commands={commands}
              setCommandToEdit={onSetCommandToEdit}
              onDeleteCommand={onDeleteCommand}
            />
          </Card>
        )
      }
      <Drawer
        width="30%"
        title={isDrawerForUpdate ? t(tCommands.drawerUpdateTitle) : t(tCommands.drawerCreateTitle)}
        placement="right"
        visible={isDrawerOpen}
        onClose={handleDrawerClose}
      >
        <CommandForm
          key={commandToEdit ? commandToEdit.id : undefined}
          command={commandToEdit}
          onAddCommand={onAddCommand}
          onUpdateCommand={onUpdateCommand}
          isUpdate={isDrawerForUpdate}
        />
      </Drawer>
    </>
  );
};

RegularCommands.propTypes = {
  isDrawerOpen: PropTypes.bool.isRequired,
  setIsDrawerOpen: PropTypes.func.isRequired,
};

export default RegularCommands;
