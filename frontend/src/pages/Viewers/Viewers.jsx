import React, { useState } from 'react';
import { useTranslation, nameSpaces, visitors as tVisitors } from "locales";
import PageHead from 'components/PageHead';
import { PageWrapper } from 'styles/StyledWrappers';
import Followers from './Followers';
import TopChatters from './TopChatters';
import Subscribers from './Subscribers';

const Viewers = () => {
  const { t } = useTranslation(nameSpaces.visitors);
  
  const tabs = {
    followers: t(tVisitors.tabFollowers),
    topChatters: t(tVisitors.tabTopChatters),
    subscribers: t(tVisitors.tabSubscribers)
  }
  
  const [activeTab, setActiveTab] = useState(Object.values(tabs)[0]);

  const onViewModChange = (tabName) => setActiveTab(tabName);
  const onAddAction = () => {

  }
  return (
    <PageWrapper>
      <PageHead
        pageName={t(tVisitors.pageHead)}
        tabs={Object.values(tabs)}
        onTabChange={onViewModChange}
      />
      <div>
        {
          activeTab === tabs.followers && (
            <Followers />
          )
        }
        {
          activeTab === tabs.topChatters && (
            <TopChatters />
          )
        }
        {
          activeTab === tabs.subscribers && (
            <Subscribers />
          )
        }
      </div>
    </PageWrapper>
  )
}

export default Viewers;
