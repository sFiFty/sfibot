import React, { useEffect } from 'react';
import logo from './logo.svg';
import tmi from 'tmi.js';
import './App.css';

const BOT_USERNAME = 'sfibot';
const CHANNEL_NAME = 'sfiftyk';
const OAUTH_TOKEN = 'oauth:qerwdex5g8sfbva95t9m2tho94xlst';

const opts = {
  identity: {
    username: BOT_USERNAME,
    password: OAUTH_TOKEN
  },
  channels: [
    CHANNEL_NAME
  ]
};

function App() {
  const client = new tmi.client(opts);
  const onConnectedHandler = (addr, port) => {
    console.log(`* Connected to ${addr}:${port}`);
  }

  const onMessageHandler = (target, context, msg, self) => {
    
    if (context['display-name'] === 'sfibot') {
      return;
    }

    if (msg === 'как тебя зовут?') {
      client.say(target, `Меня зовут sfibot`);
    }
    console.log('target', target);
    console.log('context', context);
    console.log('msg', msg);
    console.log('self', self);
  }

  useEffect(() => {
    client.connect();
    client.on('connected', onConnectedHandler);
    client.on('message', onMessageHandler);
  }, [0])
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
