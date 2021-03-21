import React from 'react';
import Commands from 'pages/Commands';

import { Route } from "react-router-dom";

const Routes = () => {
  return (
    <>
      <Route exact path="/">
        <Commands />
      </Route>
    </>
  )
}

export default Routes;
