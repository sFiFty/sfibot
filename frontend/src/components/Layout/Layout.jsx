import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components';
import { Layout as AntLayout, Spin } from 'antd';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Navigation from 'components/Navigation';
import Login from 'pages/Login';
import Landing from 'pages/Landing';
import { useUser } from 'hooks/useUser';
import Routes from './Routes';

const { Content } = AntLayout;

const StyledLayout = styled(AntLayout)`
  height: 100%;
`;

const Layout = () => {
  const { isLoading, isError } = useUser();

  const renderContent = (isUserLoading, isUserError) => {
    if (isUserLoading) {
      return <Spin />
    }
    if (isUserError) {
      return <Landing />
    }
    return <Routes />
  }

  return (
    <Router>
      <StyledLayout>
        <Header />
        <AntLayout>
          <Navigation />
          <Content>
            {renderContent(isLoading, isError)}
            <Route exact path="/twitch-auth" component={Login} />
          </Content>
        </AntLayout>
        <Footer />
      </StyledLayout>
    </Router>
  )
};

export default Layout;

