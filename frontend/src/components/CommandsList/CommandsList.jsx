import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
import { Table } from 'antd';
import { generateColumns, generateCommandsTableData } from './commandsListUtils';

const CommandsList = ({ commands, setCommandToEdit }) => {
  const { t } = useTranslation();
  const columns = generateColumns(t, setCommandToEdit);
  const tableData = generateCommandsTableData(commands);
  return (
    <Table dataSource={tableData} columns={columns} />
  )
}

CommandsList.propTypes = {
  commands: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    response: PropTypes.string.isRequired
  })),
  setCommandToEdit: PropTypes.func.isRequired
}

export default CommandsList;
