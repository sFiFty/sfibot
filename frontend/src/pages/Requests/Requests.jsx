import React from 'react';
import { Spin, Table, Card } from 'antd';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { useTranslation, nameSpaces, requests as tRequests } from 'locales';
import PageHead from 'components/PageHead';
import { PageWrapper } from 'styles/StyledWrappers';
import { useRequests, changeRequest } from 'hooks/useRequests';
import { generateColumns, generateCommandsTableData } from './requestsUtils';

const Requests = () => {
  const { t } = useTranslation(nameSpaces.requests);
  const { t: tDate } = useTranslation(nameSpaces.date);
  const {
    isLoading, isError, data: requests, refetch,
  } = useRequests();
  if (isLoading) {
    return <Spin />;
  }
  if (isError) {
    // TODO add error handling
    return null;
  }

  const onRequestStatusChange = async (isCompleted, id) => {
    await changeRequest({ id, isCompleted });
    refetch();
  };

  const columns = generateColumns(t, tDate, onRequestStatusChange);
  const tableData = generateCommandsTableData(requests);

  return (
    <>
      <PageWrapper>
        <PageHead
          pageName={t(tRequests.pageHead)}
          icon={faPlayCircle}
        />
        <Card>
          <Table dataSource={tableData} columns={columns} />
        </Card>
      </PageWrapper>
    </>
  );
};

export default Requests;
