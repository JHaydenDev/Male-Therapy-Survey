import { NextRequest, NextResponse } from 'next/server';
import { createSurveyResponse, getAllSurveyResponses } from '@/models/SurveyResponse';
import { SurveyResponse } from '@/types/survey';

export const dynamic = 'force-dynamic';

// GET all survey responses
export async function GET() {
  try {
    const responses = await getAllSurveyResponses();
    return NextResponse.json({ success: true, data: responses });
  } catch (error) {
    console.error('Error fetching responses:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch responses' },
      { status: 500 }
    );
  }
}

// POST new survey response
export async function POST(request: NextRequest) {
  try {
    const body: Omit<SurveyResponse, '_id' | 'createdAt'> = await request.json();
    
    // Basic validation
    if (!body.age || typeof body.hasAttendedTherapy !== 'boolean' || typeof body.perceivedStigma !== 'number') {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    const result = await createSurveyResponse(body);
    
    return NextResponse.json(
      { success: true, data: { id: result.insertedId } },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating response:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create response' },
      { status: 500 }
    );
  }
}
