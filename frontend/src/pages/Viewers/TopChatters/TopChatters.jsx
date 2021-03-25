import React from 'react';
import { useTranslation, nameSpaces, visitors as tVisitors } from "locales";

const TopChatters = () => {
  const { t } = useTranslation(nameSpaces.visitors);
  return (
    <div>
      TopChatters
    </div>
  )
}

export default TopChatters;
