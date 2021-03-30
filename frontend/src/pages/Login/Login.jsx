import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import queryString from 'query-string';

const Login = ({ location }) => {
  const parsed = queryString.parse(location.hash);
  localStorage.setItem('twitch_token', parsed.access_token);
  return (
    <Redirect to="/" />
  );
};

Login.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string.isRequired,
  }).isRequired,
};

export default Login;
