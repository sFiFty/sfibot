import React from 'react';
import { Spin, Table } from 'antd';
import { useTranslation, nameSpaces } from 'locales';
import { useTopChatters } from 'hooks/useVisitors';
import { generateColumns, generateTableData } from './topChattersUtils';

const TopChatters = () => {
  const { t } = useTranslation(nameSpaces.visitors);
  const { isLoading, isError, data: topChatters } = useTopChatters();

  if (isError) {
    // TODO: add error handling
    return null;
  }

  if (isLoading) {
    return (
      <div><Spin /></div>
    );
  }

  topChatters.sort((tc1, tc2) => tc2.messagesCount - tc1.messagesCount);

  const columns = generateColumns(t);
  const tableData = generateTableData(topChatters);

  return <Table dataSource={tableData} columns={columns} />;
};

export default TopChatters;
