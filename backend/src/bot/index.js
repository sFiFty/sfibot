const tmi = require('tmi.js');
require('dotenv').config();
const { getAll } = require('../firestoreApi/commands');
const { isExist, incrementVisitorMessageCount, addNew } = require('../firestoreApi/visitors');

const opts = {
  identity: {
    username: process.env.TWITCH_BOT_USERNAME,
    password: process.env.TWITCH_TOKEN
  },
  channels: [
    process.env.TWITCH_CHANNEL_NAME
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

  const isVisitorExistis = await isExist(context['user-id'])

  if (isVisitorExistis) {
    incrementVisitorMessageCount(context['user-id']);
  } else {
    addNew({
      id: context['user-id'],
      displayName: context['display-name'],
      username: context.username,
      messagesCount: 1
    })
  }

  console.log('target', target);
  console.log('context', context);
  console.log('msg', msg);
  console.log('self', self);
}

client.on('connected', onConnectedHandler);
client.on('message', onMessageHandler);
client.connect();


