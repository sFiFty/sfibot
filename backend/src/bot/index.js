const tmi = require('tmi.js');
const { getAll } = require('../firestoreApi/commands');

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

const onMessageHandler = async (target, context, msg, self) => {
  
  if (context['display-name'] === 'sfibot') {
    return;
  }

  const commands = await getAll();

  commands.forEach(command => {
    if (msg === command.name) {
        client.say(target, command.response);
    }
  })


  console.log('target', target);
  console.log('context', context);
  console.log('msg', msg);
  console.log('self', self);
}

client.on('connected', onConnectedHandler);
client.on('message', onMessageHandler);

module.exports = { client };
