import React from 'react';
import { Route } from "react-router-dom";
import Commands from 'pages/Commands';
import Viewers from 'pages/Viewers';
import Dashboard from 'pages/Dashboard';

const Routes = () => {
  return (
    <>
      <Route exact path="/">
        <Commands />
      </Route>
      <Route exact path="/Viewers">
        <Viewers />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
    </>
  )
}

export default Routes;
