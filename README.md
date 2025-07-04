# Realtime Conversation Helper

A real-time speech transcription application that uses Google Speech-to-Text API for transcription and Google Gemini AI for generating contextual suggestions and AI chat capabilities based on the transcribed speech.

## Features

- Real-time speech transcription using Google Speech-to-Text API
- AI-powered suggestions using Google Gemini AI
- Interactive AI chat for dynamic conversation assistance
- Contextual awareness for more relevant responses
- Ability to use document context for more relevant suggestions
- Minimalist, always-on-top UI
- Draggable interface

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Google Speech-to-Text API key
- Google Gemini API key
- Audio recording capabilities on your device

## Installation

1. Clone the repository:
   ```
   git clone git@github.com:xs00001111/realtime_convo_helper.git
   cd realtime_convo_helper
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with your API keys:
   ```
   # Google Speech API Key
   GOOGLE_SPEECH_API_KEY=your_speech_api_key_here
   
   # Google Gemini API Key
   GOOGLE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```

2. The application will appear as a small window at the bottom of your screen.

3. Start speaking, and your speech will be transcribed in real-time.

4. AI-powered suggestions will appear based on your speech content.

5. Engage with the AI chat for interactive conversation assistance and follow-up questions.

### Using Document Context

You can provide a document as context for the AI suggestions and chat directly through the application interface:

1. Click on the context icon (document symbol) in the application window.

2. Select a file from your computer using the file browser dialog.

3. Once uploaded, the application will process the document and display a summary of the context.

4. The AI will now incorporate information from this document in its responses and suggestions.

5. To remove the current context, click on the context icon again and select the option to clear context.

Supported file types include text files, PDFs, and common image formats.

### AI Chat Capabilities

The AI chat feature provides:

- Real-time conversation assistance based on your speech
- Contextual awareness that builds on previous exchanges
- Ability to ask follow-up questions for clarification
- Document-aware responses when a context file is provided
- Intelligent suggestions that adapt to your conversation flow

### Keyboard Shortcuts

The application supports the following keyboard shortcuts for improved productivity:

| Action | Mac | Windows/Linux |
|--------|-----|---------------|
| Toggle window visibility | Cmd+B | Ctrl+B |
| Quit application | Cmd+Q | Ctrl+Q |
| Take screenshot | Cmd+H | Ctrl+H |
| Take and process screenshot | Cmd+Enter | Ctrl+Enter |
| Move window up | Cmd+Up | Ctrl+Up |
| Move window down | Cmd+Down | Ctrl+Down |
| Move window left | Cmd+Left | Ctrl+Left |
| Move window right | Cmd+Right | Ctrl+Right |

## Development

To run the application in development mode with hot reloading:

```
npm run dev
```

To open the developer tools, uncomment the following line in `main.js`:

```javascript
// mainWindow.webContents.openDevTools();
```

## License

ISC

## Acknowledgements

- Google Speech-to-Text API
- Google Gemini AI
- Electron.js