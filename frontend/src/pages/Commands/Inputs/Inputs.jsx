import React, { useState } from 'react';
import { Spin, Drawer, Card } from 'antd';
import { useTranslation, nameSpaces, inputs as tInputs } from "locales";
import { useInputs, changeInput, addInput, removeInput } from 'hooks/useInputs';
import InputList from './InputList';
import InputForm from './InputForm';

const Inputs = () => {
  const { t } = useTranslation(nameSpaces.inputs);
  const { isLoading, data: items, refetch } = useInputs();

  const [itemToEdit, setItemToEdit] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const onSetItemToEdit = (itemId) => {
    setItemToEdit(items.find(i => i.id === itemId));
    setIsDrawerOpen(true);
  }

  const isDrawerForUpdate = !!itemToEdit;

  const onDrawerClose = () => {
    setItemToEdit(null);
    setIsDrawerOpen(false);
  }

  const onRefreshCommands = async () => {
    await refetch();
    onDrawerClose();
  }

  const onAdd = async (data) => {
    await addInput(data);
    await onRefreshCommands();
  }

  const onUpdate = async (data) => {
    await changeInput(data);
    await onRefreshCommands();
  }

  const onDelete = async (id) => {
    await removeInput(id);
    await refetch();
  }
  
  return (
    <>
      {
        isLoading ? (
          <Spin />
        ) : (
            <Card>
              <InputList items={items} setItemToEdit={onSetItemToEdit} onDelete={onDelete} />
            </Card>
        )
      }
      <Drawer
        width="30%"
        title={isDrawerForUpdate ? t(tInputs.drawerUpdateTitle) : t(tInputs.drawerCreateTitle)}
        placement="right"
        visible={isDrawerOpen}
        onClose={onDrawerClose}
      >
        <InputForm
          item={itemToEdit}
          onAdd={onAdd}
          onUpdate={onUpdate}
          isUpdate={isDrawerForUpdate}
        />
      </Drawer>
    </>
  )
};

export default Inputs;

