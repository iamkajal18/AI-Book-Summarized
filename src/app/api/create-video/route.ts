// app/api/create-video/route.ts
import axios from 'axios';

export async function POST(request: Request) {
  const { dialogue } = await request.json();

  if (!dialogue || !Array.isArray(dialogue)) {
    return new Response(
      JSON.stringify({ error: 'Dialogue array is required' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  console.log('Received dialogue for video creation:', dialogue);

  // Validate environment variables
  if (!process.env.DID_KEY) {
    console.error('DID_KEY environment variable is not set');
    return new Response(
      JSON.stringify({ error: 'D-ID API key not configured' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const videoIds = [];
    const errors = [];

    for (const [index, line] of dialogue.entries()) {
      console.log(`Processing line ${index + 1}/${dialogue.length}:`, {
        character: line.character,
        textLength: line.text?.length,
        avatarUrl: line.avatarUrl,
        voiceId: line.voiceId
      });

      // Validate required fields
      if (!line.text || typeof line.text !== 'string') {
        console.error(`Line ${index + 1}: Missing or invalid text`);
        errors.push(`Line ${index + 1}: Missing text`);
        videoIds.push(`error_${index + 1}`);
        continue;
      }

      // Use the character's specific avatar and voice from the dialogue
      const avatarUrl = line.avatarUrl || "https://cdn.d-id.com/avatars/uk_professor_1.png";
      const voiceId = line.voiceId || "Rachel";

      // Ensure text is not too long (D-ID has limits)
      const maxTextLength = 500;
      const text = line.text.length > maxTextLength 
        ? line.text.substring(0, maxTextLength).trim() + "..."
        : line.text.trim();

      const requestPayload = {
        script: {
          type: "text",
          input: text,
          provider: {
            type: "elevenlabs",
            voice_id: voiceId
          }
        },
        source_url: avatarUrl,
        config: {
          fluent: true,
          pad_audio: 0.0,
          stitch: true,
          result_format: "mp4"
        }
      };

      console.log(`D-ID Request payload for line ${index + 1}:`, JSON.stringify(requestPayload, null, 2));

      try {
        const response = await axios.post(
          'https://api.d-id.com/talks',
          requestPayload,
          {
            headers: {
              'Authorization': `Basic ${process.env.DID_KEY!}`,
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            timeout: 30000 // 30 second timeout
          }
        );

        console.log(`D-ID Response for line ${index + 1}:`, response.data);

        const data = response.data as { id: string };
        if (!data.id) {
          throw new Error(`No video ID returned for line ${index + 1}`);
        }

        videoIds.push(data.id);
        console.log(`Successfully created video ${data.id} for line ${index + 1}`);

      } catch (lineError: any) {
        console.error(`Error processing line ${index + 1}:`, {
          status: lineError.response?.status,
          statusText: lineError.response?.statusText,
          data: lineError.response?.data,
          message: lineError.message,
          config: lineError.config?.url
        });

        // Collect error details
        const errorMessage = lineError.response?.data?.message || 
                           lineError.response?.data?.error || 
                           lineError.message || 
                           'Unknown error';
        
        errors.push(`Line ${index + 1}: ${errorMessage}`);
        videoIds.push(`error_${index + 1}_${Date.now()}`);
      }

      // Add a delay between requests to avoid rate limiting
      if (index < dialogue.length - 1) {
        console.log('Waiting 2 seconds before next request...');
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }

    console.log('Video creation summary:', {
      totalRequests: dialogue.length,
      successfulVideos: videoIds.filter(id => !id.startsWith('error_')).length,
      errors: errors.length,
      videoIds: videoIds
    });

    // Return results even if some videos failed
    const successCount = videoIds.filter(id => !id.startsWith('error_')).length;
    
    if (successCount === 0) {
      return new Response(
        JSON.stringify({ 
          error: "No videos were created successfully",
          details: errors,
          videoIds: videoIds // Still return IDs for error handling
        }),
        { 
          status: 500, 
          headers: { 'Content-Type': 'application/json' } 
        }
      );
    }

    return new Response(JSON.stringify({ 
      videoIds,
      errors: errors.length > 0 ? errors : undefined,
      message: errors.length > 0 ? 
        `${successCount}/${dialogue.length} videos created successfully` : 
        'All videos created successfully'
    }), {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    console.error('D-ID API Error Details:');
    console.error('Status:', error.response?.status);
    console.error('Headers:', error.response?.headers);
    console.error('Data:', error.response?.data);
    console.error('Message:', error.message);
    console.error('Config:', error.config);

    // Return detailed error information
    const errorResponse = {
      error: "Failed to create videos",
      details: error.response?.data || error.message,
      status: error.response?.status,
      timestamp: new Date().toISOString()
    };

    return new Response(
      JSON.stringify(errorResponse),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}