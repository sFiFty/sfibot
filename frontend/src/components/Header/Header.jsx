import React from 'react';
import i18n from "i18next";
import { Select } from 'antd';
import { useTranslation, nameSpaces, common as tCommon } from "locales";
import { StyledHeader, LogoContainer } from './HeaderStyled';

const { Option } = Select;

const Header = () => {
  const { t } = useTranslation(nameSpaces.common);
  const handleChange = (value) => i18n.changeLanguage(value);
  return (
    <StyledHeader>
      <LogoContainer>
        <h1>SFIBOT</h1>
        <h3>{t(tCommon.slogan)}</h3>
      </LogoContainer>
      <Select defaultValue="EN" style={{ width: 120 }} onChange={handleChange}>
        <Option value="en">EN</Option>
        <Option value="ru">RU</Option>
      </Select>
    </StyledHeader>
  )
};

export default Header;

