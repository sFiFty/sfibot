import React from 'react';
import { Select } from 'antd';
import { Layout } from 'antd';
import styled from 'styled-components';
import { changeLanguage } from 'locales';
const { Header: AntHeader } = Layout;

const { Option } = Select;

const StyledHeader = styled(AntHeader)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Header = () => {
  const handleChange = (value) => {
    changeLanguage(value)
  }
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

