import React from 'react';
import { AlertTriangle, ExternalLink, Copy, Check } from 'lucide-react';

const EnvWarningBanner: React.FC = () => {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  const [copied, setCopied] = React.useState(false);

  // Don't show banner if environment variables are properly set
  if (supabaseUrl && supabaseAnonKey) {
    return null;
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const netlifyEnvVars = `VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here`;

  return (
    <div className="bg-red-50 border-b border-red-200">
      <div className="container-custom py-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-red-800 mb-2">
                🚨 Production Error: Supabase Environment Variables Missing
              </p>
              <div className="text-xs text-red-700 space-y-2">
                <p>Your site is getting 401 errors because Netlify doesn't have the required environment variables.</p>
                
                <div className="bg-red-100 rounded p-3 mt-3">
                  <p className="font-medium mb-2">Quick Fix Steps:</p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Go to <strong>Netlify Dashboard → Your Site → Site Settings → Environment Variables</strong></li>
                    <li>Add these two variables:</li>
                  </ol>
                  
                  <div className="bg-white rounded border mt-2 p-2 font-mono text-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-600">Environment Variables:</span>
                      <button
                        onClick={() => copyToClipboard(netlifyEnvVars)}
                        className="flex items-center text-red-600 hover:text-red-700 transition-colors"
                      >
                        {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                        <span className="ml-1">{copied ? 'Copied!' : 'Copy'}</span>
                      </button>
                    </div>
                    <pre className="text-red-800 whitespace-pre-wrap">{netlifyEnvVars}</pre>
                  </div>
                  
                  <ol className="list-decimal list-inside space-y-1 mt-2" start={3}>
                    <li>Get your actual values from <strong>Supabase Dashboard → Settings → API</strong></li>
                    <li><strong>Redeploy your site</strong> (Deploys → Trigger Deploy)</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="flex space-x-2 ml-4">
            <a
              href="https://app.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1 text-xs font-medium text-red-800 bg-red-100 rounded hover:bg-red-200 transition-colors"
            >
              Netlify Dashboard
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
            <a
              href="https://supabase.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1 text-xs font-medium text-red-800 bg-red-100 rounded hover:bg-red-200 transition-colors"
            >
              Supabase Dashboard
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvWarningBanner;