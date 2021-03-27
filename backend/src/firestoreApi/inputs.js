const { db } = require('../utils/admin');
const { v4: uuidv4 } = require('uuid');
const inputsRef = db.collection("inputs");

const getAll = async () => {
  const dbInputs = await inputsRef.get();
  const inputs = [];
  dbInputs.forEach(input => inputs.push({ ...input.data(), id: input.id }));
  return inputs;
}

const addNew = async (input) => {
  const id = uuidv4();
  const firestoreResponse = await inputsRef.doc(id).set(input);
  return {
    data: {
      ...input,
      createdAt: new Date()
    },
    firestoreResponse
  }
}

const updateOne = async (input) => {
  const id = input.id;
  const firestoreResponse = await inputsRef.doc(id).update(input);
  return {
    data: {
      ...input,
      updatedAt: new Date()
    },
    firestoreResponse
  }
}

const deleteOne = (id) => inputsRef.doc(id).delete();

module.exports = { getAll, addNew, updateOne, deleteOne };