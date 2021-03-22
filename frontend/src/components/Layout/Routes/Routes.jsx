import React from 'react';
import { Route } from "react-router-dom";
import Commands from 'pages/Commands';
import Chat from 'pages/Chat';

const Routes = () => {
  return (
    <>
      <Route exact path="/">
        <Commands />
      </Route>
      <Route exact path="/chat">
        <Chat />
      </Route>
    </>
  )
}

export default Routes;
