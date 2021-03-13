const { db } = require('../utils/admin');

const getAll = async () => {
    const commandsRef = db.collection("commands");
    const dbCommands = await commandsRef.get();
    const commands = [];
    dbCommands.forEach(command => {
      commands.push(command.data());
    })
   return commands;
}

module.exports = { getAll };