import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Importing Sentry
import * as Sentry from "@sentry/react";

// Initializing Sentry
Sentry.init({
  dsn: "https://c30bb26547564a3bd85a63e4845f5b0d@o4507979592957952.ingest.de.sentry.io/4507979594268752",
  integrations: [
    Sentry.browserTracingIntegration(), // Using browserTracingIntegration
    // You can add other integrations here
  ],
  tracesSampleRate: 1.0,  // Adjust as per your needs

  // Top-level tracePropagationTargets
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/], 
});

// Rendering the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
