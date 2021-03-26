import React from 'react';
import styled from 'styled-components';
import { Avatar, Spin, Dropdown, Menu } from 'antd';
import { useUser } from 'hooks/useUser';

const StyledAvatar = styled(Avatar)`
  cursor: pointer;
`;

const StyledMenu = styled(Menu)`
  padding: 10px 5px;
`;

const logout = () => {
  localStorage.removeItem('twitch_token');
  window.location.reload();
};

const menu = (
  <StyledMenu>
    <Menu.Item onClick={logout}>
      Logout
    </Menu.Item>
  </StyledMenu>
);

const UserBox = () => {
  const { data: user, isLoading } = useUser();
  if (isLoading) {
    return <Spin />
  }
  if (!user) {
    return null;
  }
  return (
    <Dropdown overlay={menu} trigger="click">
      <StyledAvatar src={user.profileImageUrl} />
    </Dropdown>
  )
};

export default UserBox;

