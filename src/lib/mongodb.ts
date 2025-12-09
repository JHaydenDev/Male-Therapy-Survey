import { MongoClient, Db } from 'mongodb';

let client: MongoClient;
let clientPromise: Promise<MongoClient> | null = null;

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

function getMongoClient(): Promise<MongoClient> {
  if (!process.env.MONGODB_URI) {
    // In build time or when no URI is set, return a placeholder
    // This prevents hard failures during Vercel builds
    if (process.env.NODE_ENV === 'production' && !process.env.MONGODB_URI) {
      console.warn('MONGODB_URI not set - database features will be unavailable');
    }
    throw new Error('Please add your MongoDB URI to environment variables');
  }

  const uri: string = process.env.MONGODB_URI;
  const options = {};

  if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, options);
      global._mongoClientPromise = client.connect();
    }
    return global._mongoClientPromise;
  } else {
    // In production mode, it's best to not use a global variable.
    if (!clientPromise) {
      client = new MongoClient(uri, options);
      clientPromise = client.connect();
    }
    return clientPromise;
  }
}

export async function getDatabase(): Promise<Db> {
  const client = await getMongoClient();
  return client.db('male-therapy-survey');
}

export default getMongoClient;
