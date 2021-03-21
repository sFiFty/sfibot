import React from 'react';
import i18n from "i18next";
import { Select, Layout } from 'antd';
import styled from 'styled-components';
const { Header: AntHeader } = Layout;

const { Option } = Select;

const StyledHeader = styled(AntHeader)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Header = () => {
  const handleChange = (value) => i18n.changeLanguage(value);
  return (
    <StyledHeader>
      <Select defaultValue="EN" style={{ width: 120 }} onChange={handleChange}>
        <Option value="en">EN</Option>
        <Option value="ru">RU</Option>
      </Select>

    </StyledHeader>
  )
};

export default Header;

