import React, { useState } from 'react';
import { useTranslation, nameSpaces, visitors as tVisitors } from "locales";
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
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
  const onAddAction = () => {

  }

  return (
    <PageWrapper>
      <PageHead
        pageName={t(tVisitors.pageHead)}
        icon={faUserFriends}
        tabs={tabs}
        onTabChange={setActiveTab}
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
