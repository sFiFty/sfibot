import React from 'react';
import { useTranslation, nameSpaces, visitors as tVisitors } from "locales";

const Subscribers = () => {
  const { t } = useTranslation(nameSpaces.visitors);
  return (
    <div>
      Subscribers
    </div>
  )
}

export default Subscribers;
