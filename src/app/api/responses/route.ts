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
    
    // Validate shame fields if provided
    if (body.shameFrequency !== undefined && (typeof body.shameFrequency !== 'number' || body.shameFrequency < 1 || body.shameFrequency > 7)) {
      return NextResponse.json(
        { success: false, error: 'Shame frequency must be a number between 1 and 7' },
        { status: 400 }
      );
    }
    
    if (body.shameIntensity !== undefined && (typeof body.shameIntensity !== 'number' || body.shameIntensity < 1 || body.shameIntensity > 7)) {
      return NextResponse.json(
        { success: false, error: 'Shame intensity must be a number between 1 and 7' },
        { status: 400 }
      );
    }
    
    if (body.shameSources !== undefined && !Array.isArray(body.shameSources)) {
      return NextResponse.json(
        { success: false, error: 'Shame sources must be an array' },
        { status: 400 }
      );
    }
    
    if (body.shameEmotions !== undefined && !Array.isArray(body.shameEmotions)) {
      return NextResponse.json(
        { success: false, error: 'Shame emotions must be an array' },
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
