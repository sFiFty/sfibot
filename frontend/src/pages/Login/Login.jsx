import React from 'react';
import { Redirect } from 'react-router';
import queryString from 'query-string';

const Login = ({ location }) => {
  const parsed = queryString.parse(location.hash);
  console.log(parsed)
  localStorage.setItem('twitch_token', parsed.access_token)
  return (
    <Redirect to="/" />
  )
}

export default Login;
