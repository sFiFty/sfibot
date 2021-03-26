import React, { useState } from 'react';
import { useTranslation, nameSpaces, visitors as tVisitors } from "locales";
import PageHead from 'components/PageHead';
import { PageWrapper } from 'styles/StyledWrappers';
import NewestFollowers from './NewestFollowers';
import TopChatters from './TopChatters';
import Subscribers from './Subscribers';

const TAB_IDS = {
  newestFollowers: 'newestFollowers',
  topChatters: 'topChatters',
  subscribers: 'subscribers',
}

const Viewers = () => {
  const { t } = useTranslation(nameSpaces.visitors);
  
  const tabs = [
    {
      name: t(tVisitors.tabNewestFollowers),
      id: TAB_IDS.newestFollowers
    },
    {
      name: t(tVisitors.tabTopChatters),
      id: TAB_IDS.topChatters
    },
    {
      name: t(tVisitors.tabNewestSubscribers),
      id: TAB_IDS.subscribers
    },
  ]
  
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const onViewModChange = (tab) => setActiveTab(tab);
  const onAddAction = () => {

  }

  return (
    <PageWrapper>
      <PageHead
        pageName={t(tVisitors.pageHead)}
        tabs={tabs}
        onTabChange={onViewModChange}
      />
      <div>
        {
          activeTab.id === TAB_IDS.newestFollowers && (
            <NewestFollowers />
          )
        }
        {
          activeTab.id === TAB_IDS.topChatters && (
            <TopChatters />
          )
        }
        {
          activeTab.id === TAB_IDS.subscribers && (
            <Subscribers />
          )
        }
      </div>
    </PageWrapper>
  )
}

export default Viewers;
