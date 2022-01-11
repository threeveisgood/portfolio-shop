import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client: any = await MongoClient.connect(
    process.env.NEXT_PUBLIC_DB_URL
  );

  return client;
}

export async function insertDocument(client: any, collection: any, document: any) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client: any, collection: any, sort: any) {
  const db = client.db();

  const documents = await db
    .collection(collection)
    .find()
    .sort(sort)
    .toArray();

  return documents;
}