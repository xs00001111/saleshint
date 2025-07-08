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
import AISalesAssistantPage from './pages/AISalesAssistantPage';
import SalesEnablementToolPage from './pages/SalesEnablementToolPage';
import RealTimeSalesCoachingPage from './pages/RealTimeSalesCoachingPage';
import AISalesCopilotPage from './pages/AISalesCopilotPage';
import AIForOutboundSalesPage from './pages/AIForOutboundSalesPage';
import CRMSalesIntelligencePage from './pages/CRMSalesIntelligencePage';
import SalesProductivityToolPage from './pages/SalesProductivityToolPage';
import EmailAssistantForSalesPage from './pages/EmailAssistantForSalesPage';
import AIPipelineInsightsPage from './pages/AIPipelineInsightsPage';
import SalesConversationAnalysisPage from './pages/SalesConversationAnalysisPage';
import AISalesHintsPage from './pages/AISalesHintsPage';
import BestAIForSalesTeamsPage from './pages/BestAIForSalesTeamsPage';
import HowToImproveSalesWithAIPage from './pages/HowToImproveSalesWithAIPage';
import RealTimeAISalesGuidancePage from './pages/RealTimeAISalesGuidancePage';
import BoostSDRPerformancePage from './pages/BoostSDRPerformancePage';
import SaasPricingObjectionHandlingScriptPage from './pages/SaasPricingObjectionHandlingScriptPage';
import EnterpriseSoftwarePriceTooHighResponsePage from './pages/EnterpriseSoftwarePriceTooHighResponsePage';
import B2BSoftwareROIObjectionRebuttalPage from './pages/B2BSoftwareROIObjectionRebuttalPage';
import HealthcareSaasSecurityObjectionRebuttalPage from './pages/HealthcareSaasSecurityObjectionRebuttalPage';
import FintechAPIIntegrationObjectionHandlingPage from './pages/FintechAPIIntegrationObjectionHandlingPage';
import ManufacturingSoftwareBudgetFreezeObjectionPage from './pages/ManufacturingSoftwareBudgetFreezeObjectionPage';
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
            
            {/* Additional Sales SEO Pages */}
            <Route path="/ai-sales-assistant" element={<AISalesAssistantPage />} />
            <Route path="/sales-enablement-tool" element={<SalesEnablementToolPage />} />
            <Route path="/real-time-sales-coaching" element={<RealTimeSalesCoachingPage />} />
            <Route path="/ai-sales-copilot" element={<AISalesCopilotPage />} />
            
            {/* More Sales SEO Pages */}
            <Route path="/ai-for-outbound-sales" element={<AIForOutboundSalesPage />} />
            <Route path="/crm-sales-intelligence" element={<CRMSalesIntelligencePage />} />
            <Route path="/sales-productivity-tool" element={<SalesProductivityToolPage />} />
            <Route path="/email-assistant-for-sales" element={<EmailAssistantForSalesPage />} />
            <Route path="/ai-pipeline-insights" element={<AIPipelineInsightsPage />} />
            <Route path="/sales-conversation-analysis" element={<SalesConversationAnalysisPage />} />
            <Route path="/ai-sales-hints" element={<AISalesHintsPage />} />
            <Route path="/best-ai-for-sales-teams" element={<BestAIForSalesTeamsPage />} />
            
            {/* Final Sales SEO Pages */}
            <Route path="/how-to-improve-sales-with-ai" element={<HowToImproveSalesWithAIPage />} />
            <Route path="/real-time-ai-sales-guidance" element={<RealTimeAISalesGuidancePage />} />
            <Route path="/boost-sdr-performance" element={<BoostSDRPerformancePage />} />
            
            {/* Pricing & ROI Objection Pages */}
            <Route path="/saas-pricing-objection-handling-script" element={<SaasPricingObjectionHandlingScriptPage />} />
            <Route path="/enterprise-software-price-too-high-response" element={<EnterpriseSoftwarePriceTooHighResponsePage />} />
            <Route path="/b2b-software-roi-objection-rebuttal" element={<B2BSoftwareROIObjectionRebuttalPage />} />
            
            {/* Security & Compliance Objection Pages */}
            <Route path="/healthcare-saas-security-objection-rebuttal" element={<HealthcareSaasSecurityObjectionRebuttalPage />} />
            
            {/* Integration & Technical Fit Pages */}
            <Route path="/fintech-api-integration-objection-handling" element={<FintechAPIIntegrationObjectionHandlingPage />} />
            
            {/* Budget-Freeze / Timing Pages */}
            <Route path="/manufacturing-software-budget-freeze-sales-objection" element={<ManufacturingSoftwareBudgetFreezeObjectionPage />} />
          </Routes>
          <Toaster position="bottom-center" />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;