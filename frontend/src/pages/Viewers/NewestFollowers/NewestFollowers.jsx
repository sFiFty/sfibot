import React from 'react';
import { Spin, Table } from 'antd';
import { useTranslation, nameSpaces } from 'locales';
import { useFollowers } from 'hooks/useVisitors';
import useUser from 'hooks/useUser';
import { generateColumns, generateTableData } from './newestFollowersUtils';

const NewestFollowers = () => {
  const { t } = useTranslation(nameSpaces.visitors);
  const { t: tDate } = useTranslation(nameSpaces.date);
  const { data: user } = useUser();
  const { isLoading, isError, data: followers } = useFollowers(user.id);

  if (isError) {
    // TODO: add error handling
    return null;
  }

  if (isLoading) {
    return (
      <div><Spin /></div>
    );
  }

  const columns = generateColumns(t, tDate);
  const tableData = generateTableData(followers.data);

  return <Table dataSource={tableData} columns={columns} />;
};

export default NewestFollowers;
