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

const StyledMainLayout = styled(AntLayout)`
  height: 100%;
`;

const ContentContainer = styled(AntLayout)`
  flex-direction: row;
`;

const StyledContent = styled(Content)`
  background-color: ${({ theme }) => theme.colors.white};
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
      <StyledMainLayout>
        <Header />
        <ContentContainer>
          <Navigation />
          <StyledContent>
            {renderContent(isLoading, isError)}
            <Route exact path="/twitch-auth" component={Login} />
          </StyledContent>
        </ContentContainer>
        <Footer />
      </StyledMainLayout>
    </Router>
  )
};

export default Layout;

