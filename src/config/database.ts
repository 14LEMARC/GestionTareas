import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017';

const client = new MongoClient(uri);

export const connectDB = async () => {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
  }
};