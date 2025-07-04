import express from 'express';
import serverless from 'serverless-http';

const app = express();
app.use(express.json());

// Simple webhook handler without API key validation
app.post('/', async (req, res) => {
  const payload = req.body;

  try {
    // Log the webhook payload for debugging
    console.log('Webhook received:', {
      type: payload.type,
      timestamp: new Date().toISOString(),
      payload: payload
    });

    // Basic webhook event handling
    switch (payload.type) {
      case 'meeting.started':
        console.log('Meeting started:', payload.meetingId);
        break;
      case 'meeting.ended':
        console.log('Meeting ended:', payload.meetingId);
        break;
      case 'transcription.available':
        console.log('Transcription available:', payload.transcriptionId);
        break;
      default:
        console.log('Webhook event received:', payload.type);
    }

    res.status(200).json({ 
      status: 'success',
      message: 'Webhook processed successfully'
    });
  } catch (error) {
    console.error('Error processing webhook:', error);
    res.status(500).json({ 
      status: 'error',
      message: 'Internal server error'
    });
  }
});

// Health check endpoint
app.get('/', (req, res) => {
  res.status(200).json({ 
    status: 'OK',
    message: 'Webhook service is running'
  });
});

export const handler = serverless(app);