import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import { useTranslation, nameSpaces } from 'locales';
import generateNavigationData from './navigationUtils';

const StyledMenu = styled(Menu)`
  background-color: ${({ theme }) => theme.colors.mainBgColor};
  border-bottom: none;
  &.ant-menu {
    line-height: 40px;
    .ant-menu-item {
      border-bottom: none;
      &:hover {
        border-bottom: none;
      }
      a {
        font-size: ${({ theme }) => theme.fontSizes.large};
      }
    }
  }
`;

const Navigation = ({ location }) => {
  const { t } = useTranslation(nameSpaces.common);
  const navigationData = generateNavigationData(t);
  return (
    <StyledMenu
      defaultSelectedKeys={[location.pathname]}
      defaultOpenKeys={['sub1']}
      mode="horizontal"
    >
      {
        navigationData.map((navigationItem) => (
          <Menu.Item key={navigationItem.route}>
            <Link to={navigationItem.route}>
              {navigationItem.name}
            </Link>
          </Menu.Item>
        ))
      }
    </StyledMenu>
  );
};

Navigation.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(Navigation);
