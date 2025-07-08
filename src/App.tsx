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
import SalesTeleprompterPage from './pages/SalesTeleprompterPage';
import VirtualTeleprompterPage from './pages/VirtualTeleprompterPage';
import UndetectableTeleprompterPage from './pages/UndetectableTeleprompterPage';
import MagicalTeleprompterPage from './pages/MagicalTeleprompterPage';
import SaasPricingObjectionHandlingScriptPage from './pages/SaasPricingObjectionHandlingScriptPage';
import EnterpriseSoftwarePriceTooHighResponsePage from './pages/EnterpriseSoftwarePriceTooHighResponsePage';
import B2BSoftwareROIObjectionRebuttalPage from './pages/B2BSoftwareROIObjectionRebuttalPage';
import HealthcareSaasSecurityObjectionRebuttalPage from './pages/HealthcareSaasSecurityObjectionRebuttalPage';
import FintechAPIIntegrationObjectionHandlingPage from './pages/FintechAPIIntegrationObjectionHandlingPage';
import ManufacturingSoftwareBudgetFreezeObjectionPage from './pages/ManufacturingSoftwareBudgetFreezeObjectionPage';
import GDPRComplianceObjectionSaasSalesResponsePage from './pages/GDPRComplianceObjectionSaasSalesResponsePage';
import CybersecuritySoftwareTrustObjectionReplyPage from './pages/CybersecuritySoftwareTrustObjectionReplyPage';
import CallMeNextQuarterTimingObjectionScriptPage from './pages/CallMeNextQuarterTimingObjectionScriptPage';
import EdtechSoftwareNoBudgetObjectionResponsePage from './pages/EdtechSoftwareNoBudgetObjectionResponsePage';
import HRTechTooManyToolsObjectionHandlingPage from './pages/HRTechTooManyToolsObjectionHandlingPage';
import AISaasRiskOfChangeObjectionRebuttalPage from './pages/AISaasRiskOfChangeObjectionRebuttalPage';
import SoftwareImplementationFeeObjectionResponsePage from './pages/SoftwareImplementationFeeObjectionResponsePage';
import MartechROIObjectionRebuttalExamplesPage from './pages/MartechROIObjectionRebuttalExamplesPage';
import SOC2ProofTemplateForSecurityObjectionsPage from './pages/SOC2ProofTemplateForSecurityObjectionsPage';
import FintechDataPrivacyObjectionScriptPage from './pages/FintechDataPrivacyObjectionScriptPage';
import CloudMigrationSecurityConcernsResponsePage from './pages/CloudMigrationSecurityConcernsResponsePage';
import DataScienceROIExplanationScriptsPage from './pages/DataScienceROIExplanationScriptsPage';
import APIPerformanceScalabilityExplanationPage from './pages/APIPerformanceScalabilityExplanationPage';
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
            <Route path="/sales-teleprompter" element={<SalesTeleprompterPage />} />
            <Route path="/virtual-teleprompter" element={<VirtualTeleprompterPage />} />
            <Route path="/undetectable-teleprompter" element={<UndetectableTeleprompterPage />} />
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
            <Route path="/gdpr-compliance-objection-saas-sales-response" element={<GDPRComplianceObjectionSaasSalesResponsePage />} />
            <Route path="/cybersecurity-software-trust-objection-reply" element={<CybersecuritySoftwareTrustObjectionReplyPage />} />
            
            {/* Integration & Technical Fit Pages */}
            <Route path="/fintech-api-integration-objection-handling" element={<FintechAPIIntegrationObjectionHandlingPage />} />
            
            {/* Budget-Freeze / Timing Pages */}
            <Route path="/manufacturing-software-budget-freeze-sales-objection" element={<ManufacturingSoftwareBudgetFreezeObjectionPage />} />
            <Route path="/call-me-next-quarter-timing-objection-script" element={<CallMeNextQuarterTimingObjectionScriptPage />} />
            <Route path="/edtech-software-no-budget-objection-response" element={<EdtechSoftwareNoBudgetObjectionResponsePage />} />
            <Route path="/hr-tech-too-many-tools-objection-handling" element={<HRTechTooManyToolsObjectionHandlingPage />} />
            <Route path="/ai-saas-risk-of-change-objection-rebuttal" element={<AISaasRiskOfChangeObjectionRebuttalPage />} />
            
            {/* Additional Objection Pages */}
            <Route path="/software-implementation-fee-objection-response" element={<SoftwareImplementationFeeObjectionResponsePage />} />
            <Route path="/martech-roi-objection-rebuttal-examples" element={<MartechROIObjectionRebuttalExamplesPage />} />
            <Route path="/soc2-proof-template-for-security-objections" element={<SOC2ProofTemplateForSecurityObjectionsPage />} />
            <Route path="/fintech-data-privacy-objection-script" element={<FintechDataPrivacyObjectionScriptPage />} />
            
            {/* Technical Description Pages */}
            <Route path="/cloud-migration-security-concerns-response" element={<CloudMigrationSecurityConcernsResponsePage />} />
            <Route path="/data-science-roi-explanation-scripts" element={<DataScienceROIExplanationScriptsPage />} />
            <Route path="/api-performance-scalability-explanation" element={<APIPerformanceScalabilityExplanationPage />} />
          </Routes>
          <Toaster position="bottom-center" />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;