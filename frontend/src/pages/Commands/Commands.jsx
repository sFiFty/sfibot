import React, { useState } from 'react';
import { Spin, Drawer, Card } from 'antd';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { useTranslation, nameSpaces, commands as tCommands } from "locales";
import PageHead from 'components/PageHead'
import { PageWrapper } from 'styles/StyledWrappers';
import RegularCommands from './RegularCommands';
import Inputs from './Inputs';

const TAB_IDS = {
  regularCommands: 'regularCommands',
  timers: 'timers',
  inputs: 'inputs',
}

const Commands = () => {
  const { t } = useTranslation(nameSpaces.commands);

  const openAddCommandForm = () => {
    // TODO
  }

  const tabs = [
    {
      name: t(tCommands.regularCommands),
      id: TAB_IDS.regularCommands
    },
    {
      name: t(tCommands.timers),
      id: TAB_IDS.timers
    },
    {
      name: t(tCommands.inputs),
      id: TAB_IDS.inputs
    },
  ]

  const [activeTab, setActiveTab] = useState(tabs[0]);


  return (
    <PageWrapper>
      <PageHead
        pageName={t(tCommands.pageHead)}
        icon={faExclamationCircle}
        tabs={tabs}
        onTabChange={setActiveTab}
        addAction={openAddCommandForm}
        addButtonTitle={t(tCommands.addNewButton)}
      />
      {
        activeTab.id === TAB_IDS.regularCommands && (
          <RegularCommands />
        )
      }
      {
        activeTab.id === TAB_IDS.inputs && (
          <Inputs />
        )
      }
    </PageWrapper>
  )
};

export default Commands;

