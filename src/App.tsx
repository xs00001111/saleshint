import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import EnvWarningBanner from './components/EnvWarningBanner';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import SuccessPage from './pages/SuccessPage';
import DashboardPage from './pages/DashboardPage';
import RealTimeConversationGuidancePage from './pages/RealTimeConversationGuidancePage';
import AITeleprompterPage from './pages/AITeleprompterPage';
import DesktopAssistantPage from './pages/DesktopAssistantPage';
import ConversationAssistantPage from './pages/ConversationAssistantPage';
import LiveAITranscriptionPage from './pages/LiveAITranscriptionPage';
import { Toaster } from 'react-hot-toast';
import { analytics } from './lib/analytics';

function HomePage() {
  return (
    <>
      <EnvWarningBanner />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PricingSection />
      </main>
      <Footer />
    </>
  );
}

// Component to track page views
function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    analytics.page(location.pathname);
  }, [location]);

  return null;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <PageTracker />
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50 font-inter">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            
            {/* SEO Landing Pages */}
            <Route path="/real-time-conversation-guidance" element={<RealTimeConversationGuidancePage />} />
            <Route path="/ai-teleprompter" element={<AITeleprompterPage />} />
            <Route path="/magical-teleprompter" element={<AITeleprompterPage />} />
            <Route path="/undetectable-ai" element={<AITeleprompterPage />} />
            <Route path="/desktop-assistant" element={<DesktopAssistantPage />} />
            <Route path="/ai-desktop-assistant" element={<DesktopAssistantPage />} />
            <Route path="/desktop-assistant-ai" element={<DesktopAssistantPage />} />
            <Route path="/conversation-assistant" element={<ConversationAssistantPage />} />
            <Route path="/ai-conversation-assistant" element={<ConversationAssistantPage />} />
            <Route path="/cursor-for-conversations" element={<ConversationAssistantPage />} />
            <Route path="/live-ai-transcription" element={<LiveAITranscriptionPage />} />
            <Route path="/real-time-support" element={<RealTimeConversationGuidancePage />} />
            <Route path="/power-your-meetings" element={<LiveAITranscriptionPage />} />
            <Route path="/real-time-ai-coaching" element={<RealTimeConversationGuidancePage />} />
            <Route path="/ai-for-meeting" element={<LiveAITranscriptionPage />} />
          </Routes>
          <Toaster position="bottom-center" />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;