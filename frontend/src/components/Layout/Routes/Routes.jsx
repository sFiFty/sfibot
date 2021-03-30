import React from 'react';
import { Route } from 'react-router-dom';
import Commands from 'pages/Commands';
import Viewers from 'pages/Viewers';
import Dashboard from 'pages/Dashboard';
import Requests from 'pages/Requests';

const Routes = () => (
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
    <Route exact path="/requests">
      <Requests />
    </Route>
  </>
);

export default Routes;
