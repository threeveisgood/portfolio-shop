import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client: any = await MongoClient.connect(
    process.env.NEXT_PUBLIC_DB_URL || ""
  );

  return client;
}

export async function insertDocument(
  client: any,
  collection: any,
  document: any
) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client: any, collection: any, sort: any) {
  const db = client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}

export async function getPosts(
  client: any,
  collection: any,
  postsPerPage: any,
  index_first: any,
  query?: any
) {
  const db = client.db();

  const documents = await db
    .collection(collection)
    .find(query)
    .limit(postsPerPage)
    .skip(index_first)
    .sort({ _id: -1 })
    .toArray();

  return documents;
}

export async function getCount(client: any, collection: any) {
  const db = client.db();

  const documents = await db.collection(collection).count();

  return documents;
}

export async function getFindCount(client: any, collection: any, query: any) {
  const db = client.db();

  const documents = await db.collection(collection).find(query).count();

  return documents;
}

export async function getTrends(
  client: any,
  collection: any,
  postsPerPage: any,
  sort: any,
  query?: any
) {
  const db = client.db();

  const documents = await db
    .collection(collection)
    .find(query)
    .limit(postsPerPage)
    .sort(sort)
    .toArray();

  return documents;
}
