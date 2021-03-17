import React from 'react';
import Layout from 'components/Layout';
import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
  body {
    margin: 0px;
  }
  #root {
    height: 100%;
  }
`;

const App = () => {

  return (
    <>
      <GlobalStyled />
      <Layout />
    </>
  );
};

export default App;
