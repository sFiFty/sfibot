import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Menu, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useTranslation, nameSpaces } from "locales";
import generateNavigationData from './navigationUtils';

const NavigationContainer = styled.aside`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 0px 20px;
`;

const Navigation = ({ location }) => {
  const { t } = useTranslation(nameSpaces.common);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigationData = generateNavigationData(t);
  return (
    <NavigationContainer>
      <Button type="primary" onClick={() => setIsCollapsed(!isCollapsed)}>
        {
          isCollapsed ? (
            <FontAwesomeIcon icon={faChevronRight} />
          ) : (
            <FontAwesomeIcon icon={faChevronLeft} />
          )
        }
      </Button>
      <Menu
        defaultSelectedKeys={[location.pathname]}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={isCollapsed}
      >
        {
          navigationData.map(navigationItem => (
            <Menu.Item key={navigationItem.route} icon={navigationItem.icon}>
              <Link to={navigationItem.route}>
                {navigationItem.name}
              </Link>
            </Menu.Item>
          ))
        }
      </Menu>
    </NavigationContainer>
  )
};

export default withRouter(Navigation);

