import React from 'react';

const GeminiApiPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-start p-4 md:p-6 lg:p-8">
      <div className="w-full max-w-4xl p-4 space-y-6 text-white">
        <h1 className="text-2xl md:text-3xl font-extrabold">How to Generate a Gemini API Key</h1>
        <ol className="list-decimal list-inside space-y-4">
          <li>
            <strong>Sign In to Your Gemini Account</strong>
            <ul className="list-disc list-inside ml-4">
              <li>
                Go to the <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:underline">Google AI Studio</a>.
              </li>
              <li>Click on "Sign In" at the top right corner.</li>
              <li>Enter your credentials and log into your account.</li>
            </ul>
          </li>
          <li>
            <strong>Navigate to API Settings</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Click on your profile icon at the top right corner.</li>
              <li>Select "API" from the dropdown menu.</li>
            </ul>
          </li>
          <li>
            <strong>Create a New API Key</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Click on the "Create New API Key" button.</li>
              <li>Set permissions as needed (Read, Trade, Withdraw).</li>
            </ul>
          </li>
          <li>
            <strong>Configure IP Whitelisting (Optional)</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Specify allowed IP addresses for enhanced security.</li>
            </ul>
          </li>
          <li>
            <strong>Generate the Key</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Click "Generate API Key."</li>
              <li>Copy and store your secret securely.</li>
            </ul>
          </li>
          <li>
            <strong>Test Your API Key</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Use your new API key according to the <a href="https://docs.gemini.com/rest-api/" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:underline">Gemini API documentation</a>.</li>
            </ul>
          </li>
        </ol>
        <h2 className="text-xl md:text-2xl font-semibold mt-6">Important Security Tips</h2>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>Keep your API key and secret private.</li>
          <li>Regularly review and revoke unused API keys.</li>
          <li>Enable two-factor authentication (2FA) for added security.</li>
        </ul>
        <h2 className="text-xl md:text-2xl font-semibold mt-6">Resources</h2>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li><a href="https://docs.gemini.com/rest-api/" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:underline">Gemini API Documentation</a></li>
          <li><a href="https://support.gemini.com" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:underline">Gemini Support</a></li>
        </ul>
      </div>
    </div>
  );
};

export default GeminiApiPage;
