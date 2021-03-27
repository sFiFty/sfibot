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
  const firestoreResponse = await commandsRef.doc(id).set(command);
  return {
    data: command,
    firestoreResponse
  }
}

const updateOne = async (command) => {
  const id = command.id;
  const firestoreResponse = await commandsRef.doc(id).update(command);
  return {
    data: command,
    firestoreResponse
  }
}

const deleteOne = (id) => commandsRef.doc(id).delete();

module.exports = { getAll, addNew, updateOne, deleteOne };