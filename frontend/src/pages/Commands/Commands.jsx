import React, { useState, useCallback } from 'react';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { useTranslation, nameSpaces, commands as tCommands } from 'locales';
import PageHead from 'components/PageHead';
import { PageWrapper } from 'styles/StyledWrappers';
import RegularCommands from './RegularCommands';
import Inputs from './Inputs';

const TAB_IDS = {
  regularCommands: 'regularCommands',
  timers: 'timers',
  inputs: 'inputs',
};

const Commands = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { t } = useTranslation(nameSpaces.commands);

  const openAddCommandForm = () => {
    setIsDrawerOpen(true);
  };

  const tabs = [
    {
      name: t(tCommands.regularCommands),
      id: TAB_IDS.regularCommands,
    },
    {
      name: t(tCommands.timers),
      id: TAB_IDS.timers,
    },
    {
      name: t(tCommands.inputs),
      id: TAB_IDS.inputs,
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const getAddButtonTitle = useCallback(() => {
    if (activeTab.id === TAB_IDS.regularCommands) {
      return t(tCommands.addRegularButton);
    }
    if (activeTab.id === TAB_IDS.timers) {
      return t(tCommands.addTimerButton);
    }
    return t(tCommands.addInputButton);
  }, [activeTab.id, t]);

  return (
    <PageWrapper>
      <PageHead
        pageName={t(tCommands.pageHead)}
        icon={faExclamationCircle}
        tabs={tabs}
        onTabChange={setActiveTab}
        addAction={openAddCommandForm}
        addButtonTitle={getAddButtonTitle()}
      />
      {
        activeTab.id === TAB_IDS.regularCommands && (
          <RegularCommands
            isDrawerOpen={isDrawerOpen}
            setIsDrawerOpen={setIsDrawerOpen}
          />
        )
      }
      {
        activeTab.id === TAB_IDS.inputs && (
          <Inputs
            isDrawerOpen={isDrawerOpen}
            setIsDrawerOpen={setIsDrawerOpen}
          />
        )
      }
    </PageWrapper>
  );
};

export default Commands;
