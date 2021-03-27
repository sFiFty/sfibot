import React from 'react';
import { Space } from 'antd';
import { useTranslation, nameSpaces, common as tCommon } from "locales";
import Navigation from 'components/Navigation';
import LanguageSelector from 'components/LanguageSelector';
import UserBox from 'components/UserBox';
import { StyledHeader, LogoContainer, HeaderContainer } from './HeaderStyled';

const Header = () => {
  const { t } = useTranslation(nameSpaces.common);
  return (
    <StyledHeader>
      <HeaderContainer>
        <LogoContainer>
          <h1>SFIBOT</h1>
          <h3>{t(tCommon.slogan)}</h3>
        </LogoContainer>
        <Navigation />
        <Space direction="horizontal">
          <LanguageSelector />
          <UserBox />
        </Space>
      </HeaderContainer>
    </StyledHeader>
  )
};

export default Header;

