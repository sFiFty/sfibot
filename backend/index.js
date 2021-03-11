const tmi = require('tmi.js');

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

const client = new tmi.client(opts);
const onConnectedHandler = (addr, port) => {
  console.log(`* Connected to ${addr}:${port}`);
}

setInterval(() => {
  console.log(123)
  client.say(`#${CHANNEL_NAME}`, `Check my last tiktok video - https://www.tiktok.com/@sfiftyk/video/6938354244659498246`);
}, 300000)

const onMessageHandler = (target, context, msg, self) => {
  console.log(target)
  if (self) {
    return;
  }


  if (msg === 'как тебя зовут?') {
    client.say(target, `Меня зовут sfibot`);
  }
  console.log('target', target);
  console.log('context', context);
  console.log('msg', msg);
}

client.connect();
client.on('connected', onConnectedHandler);
client.on('message', onMessageHandler);