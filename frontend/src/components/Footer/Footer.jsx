import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import { useTranslation, nameSpaces, common as tCommon } from "locales";
const { Footer: AntFooter } = Layout;

const StyledFooter = styled(AntFooter)`
  text-align: center;
`;

const Footer = () => {
  const { t } = useTranslation(nameSpaces.common);
  return (
    <StyledFooter>{t(tCommon.footerMadeBy)}</StyledFooter>
  )
};

export default Footer;

