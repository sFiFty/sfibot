import React from 'react';
import i18n from 'i18next';
import { Select } from 'antd';

const { Option } = Select;

const LanguageSelector = () => {
  const handleChange = (value) => i18n.changeLanguage(value);
  return (
    <Select size="small" defaultValue="EN" style={{ width: 55, fontSize: 12 }} onChange={handleChange}>
      <Option value="en">EN</Option>
      <Option value="ru">RU</Option>
    </Select>
  );
};

export default LanguageSelector;
