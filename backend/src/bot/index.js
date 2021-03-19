const tmi = require('tmi.js');
const { getAll } = require('../firestoreApi/commands');

const opts = {
  identity: {
    username: process.env.TWITCH_BOT_USERNAME,
    password: process.env.TWITCH_CHANNEL_NAME
  },
  channels: [
    process.env.TWITCH_TOKEN
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
