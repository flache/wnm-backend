const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const client = new MongoClient(process.env.MONGO_CONNECTION_STRING);

let _db;

async function _init() {
  // Use connect method to connect to the Server
  await client.connect();
  _db = client.db('wastenomore');
}

async function insertOne(collectionName, ...insertArgs) {
  if (!_db) {
    await _init();
  }
  const collection = _db.collection(collectionName);
  return collection.insertOne(...insertArgs);
}

module.exports = {
  insertOne,
}
