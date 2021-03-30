import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation, nameSpaces } from 'locales';
import { Table } from 'antd';
import { generateColumns, generateCommandsTableData } from './inputListUtils';

const InputList = ({ items, setItemToEdit, onDelete }) => {
  const { t } = useTranslation(nameSpaces.inputs);
  const columns = generateColumns(t, setItemToEdit, onDelete);
  const tableData = generateCommandsTableData(items);
  return (
    <Table dataSource={tableData} columns={columns} />
  );
};

InputList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    commandName: PropTypes.string.isRequired,
    inputName: PropTypes.string.isRequired,
  })).isRequired,
  setItemToEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default InputList;
