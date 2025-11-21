import { getDatabase } from '@/lib/mongodb';
import { SurveyResponse } from '@/types/survey';

const COLLECTION_NAME = 'responses';

export async function createSurveyResponse(response: Omit<SurveyResponse, '_id' | 'createdAt'>) {
  const db = await getDatabase();
  const collection = db.collection<SurveyResponse>(COLLECTION_NAME);
  
  const newResponse = {
    ...response,
    createdAt: new Date(),
  };
  
  const result = await collection.insertOne(newResponse as SurveyResponse & { _id?: unknown });
  return result;
}

export async function getAllSurveyResponses(): Promise<SurveyResponse[]> {
  const db = await getDatabase();
  const collection = db.collection<SurveyResponse>(COLLECTION_NAME);
  
  const responses = await collection.find({}).sort({ createdAt: -1 }).toArray();
  return responses.map(response => ({
    ...response,
    _id: response._id?.toString(),
  })) as SurveyResponse[];
}

export async function getResponseCount(): Promise<number> {
  const db = await getDatabase();
  const collection = db.collection(COLLECTION_NAME);
  
  return await collection.countDocuments();
}
