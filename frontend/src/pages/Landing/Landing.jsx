import React from 'react';

const Landing = () => {
  return (
    <a href={`https://id.twitch.tv/oauth2/authorize?client_id=${process.env.REACT_APP_TWITCH_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_TWITCH_REDIRECT_URL}&response_type=token`}>
      Twitch login
    </a>
  )
}

export default Landing;
