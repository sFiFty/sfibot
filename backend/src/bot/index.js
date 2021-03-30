const tmi = require('tmi.js');
require('dotenv').config();
const { getAll } = require('../firestoreApi/commands');
const { getAll: getAllInputs } = require('../firestoreApi/inputs');
const { addNew: addNewRequest } = require('../firestoreApi/requests');
const { isExist, incrementVisitorMessageCount, addNew } = require('../firestoreApi/visitors');

let commands = [];
let inputs = [];
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

const configureRegularCommands = async (target, message) => {
  if (commands.length === 0) {
    commands = await getAll();
  }
  commands.forEach(command => {
    if (message === command.name) {
      client.say(target, command.response);
    }
  })
}

const configureInputs = async (message, context) => {
  if (!message) {
    return;
  }
  if (inputs.length === 0) {
    inputs = await getAllInputs();
  }
  inputs.forEach(input => {
    if (message.includes(input.commandName)) {
      addNewRequest({
        content: message.replace(input.commandName, '').trim(),
        createdAt: new Date(),
        updateAt: null,
        inputCommandName: input.commandName,
        inputName: input.inputName,
        userId: context['user-id'],
        username: context.username,
        isCompleted: false
      })
    }
  })
}

const configureTimers = () => {
  // TODO
}

const onConnectedHandler = (addr, port) => {
  console.log(`* Connected to ${addr}:${port}`);
}

const onMessageHandler = async (target, context, message, self) => {

  if (context['display-name'] === 'sfibot') {
    return;
  }

  configureRegularCommands(target, message);
  configureInputs(message, context)

  const isVisitorExist = await isExist(context['user-id'])

  if (isVisitorExist) {
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
  console.log('msg', message);
  console.log('self', self);
}

client.on('connected', onConnectedHandler);
client.on('message', onMessageHandler);
client.connect();


