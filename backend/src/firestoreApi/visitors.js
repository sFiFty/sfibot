const { db, admin } = require('../utils/admin');
const visitorsRef = db.collection("visitors");

const getAll = async () => {
  const dbVisitors = await visitorsRef.get();
  const visitors = [];
  dbVisitors.forEach(visitor => visitors.push({ ...visitor.data(), id: visitor.id }));
  return visitors;
}

const addNew = async (visitor) => {
  const firestoreResponse = await visitorsRef.doc(visitor.id).set(visitor);
  return {
    data: visitor,
    firestoreResponse
  }
}

const isExist = async (visitorId) => {
  return await (await visitorsRef.doc(visitorId).get()).exists;
}

const incrementVisitorMessageCount = async (visitorId) => {
  const increment = admin.firestore.FieldValue.increment(1);
  const firestoreResponse = await visitorsRef.doc(visitorId).update({ messagesCount: increment });
  return {
    firestoreResponse
  }
}

module.exports = { isExist, incrementVisitorMessageCount, addNew };