const { db } = require('../utils/admin');
const { v4: uuidv4 } = require('uuid');
const commandsRef = db.collection("commands");

const getAll = async () => {
  const dbCommands = await commandsRef.get();
  const commands = [];
  dbCommands.forEach(command => commands.push({ ...command.data(), id: command.id }));
  return commands;
}

const addNew = async (command) => {
  const id = uuidv4();
  const firestoreResponse = commandsRef.doc(id).set(command);
  return {
    data: command,
    firestoreResponse
  }
}

module.exports = { getAll, addNew };