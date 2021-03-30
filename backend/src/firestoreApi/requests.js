const { db } = require('../utils/admin');
const { v4: uuidv4 } = require('uuid');
const requestsRef = db.collection("requests");

const getAll = async () => {
  const dbRequests = await requestsRef.get();
  const requests = [];
  dbRequests.forEach(dbRequest => {
    const request = dbRequest.data();
    requests.push({
      ...request,
      id: dbRequest.id,
      createdAt: request.createdAt.toDate()
    })
  });
  return requests;
}

const addNew = async (request) => {
  const id = uuidv4();
  const firestoreResponse = await requestsRef.doc(id).set(request);
  return {
    data: {
      ...request,
      createdAt: new Date()
    },
    firestoreResponse
  }
}

const updateOne = async (request) => {
  const id = request.id;
  const firestoreResponse = await requestsRef.doc(id).update(request);
  return {
    data: {
      ...request,
      updatedAt: new Date()
    },
    firestoreResponse
  }
}

const deleteOne = (id) => requestsRef.doc(id).delete();

module.exports = { getAll, addNew, updateOne, deleteOne };