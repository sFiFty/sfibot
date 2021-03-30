import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation, nameSpaces } from 'locales';
import { Table } from 'antd';
import { generateColumns, generateCommandsTableData } from './commandsListUtils';

const CommandsList = ({ commands, setCommandToEdit, onDeleteCommand }) => {
  const { t } = useTranslation(nameSpaces.commands);
  const columns = generateColumns(t, setCommandToEdit, onDeleteCommand);
  const tableData = generateCommandsTableData(commands);
  return (
    <Table dataSource={tableData} columns={columns} />
  );
};

CommandsList.propTypes = {
  commands: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    response: PropTypes.string.isRequired,
  })).isRequired,
  setCommandToEdit: PropTypes.func.isRequired,
  onDeleteCommand: PropTypes.func.isRequired,
};

export default CommandsList;
