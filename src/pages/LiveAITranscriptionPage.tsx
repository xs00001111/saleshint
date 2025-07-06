import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mic, FileText, Zap, CheckCircle, ArrowRight, Clock, Search } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const LiveAITranscriptionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <Logo className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold text-emerald-800">SalesHint</span>
            </Link>
            <Link 
              to="/"
              className="inline-flex items-center text-gray-600 hover:text-emerald-800 font-medium transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full mb-6">
              <Mic className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Live AI Transcription</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Revolutionary <span className="text-emerald-600">Live AI Transcription</span> for Sales Calls
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get real-time, accurate transcription of your sales conversations with AI-powered insights and analysis. Never miss a detail or important moment again.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The most accurate live AI transcription service designed specifically for sales professionals
            </p>
          </div>

          {/* Demo Preview */}
          <div className="max-w-5xl mx-auto mb-16">
            <DemoPreview />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Beyond Basic Transcription
            </h2>
            <p className="text-xl text-gray-600">
              Our live AI transcription doesn't just capture words - it understands sales conversations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Real-Time Accuracy</h3>
              <p className="text-gray-600">
                Get instant, highly accurate transcription with industry-leading AI that understands sales terminology and context.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Smart Analysis</h3>
              <p className="text-gray-600">
                Our AI identifies key moments, objections, buying signals, and important topics automatically during transcription.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Instant Summaries</h3>
              <p className="text-gray-600">
                Get automatic call summaries, action items, and follow-up suggestions generated from your live transcription.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transcription Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Why Live AI Transcription Changes Everything
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Stop taking notes and start focusing on what matters - building relationships and closing deals.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">100% Focus on Conversation</h4>
                      <p className="text-gray-600">No more distraction from note-taking - be fully present with your prospects</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Perfect Call Records</h4>
                      <p className="text-gray-600">Never miss important details or commitments made during calls</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Instant Insights</h4>
                      <p className="text-gray-600">Get real-time analysis of conversation sentiment and key topics</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Searchable History</h4>
                      <p className="text-gray-600">Find any conversation detail instantly with powerful search capabilities</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Live Transcription Features</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                    <span className="font-medium text-gray-900">Real-time transcription</span>
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                    <span className="font-medium text-gray-900">Speaker identification</span>
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                    <span className="font-medium text-gray-900">Key moment detection</span>
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                    <span className="font-medium text-gray-900">Automatic summaries</span>
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                    <span className="font-medium text-gray-900">CRM integration</span>
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                    <span className="font-medium text-gray-900">Export & sharing</span>
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Perfect for Every Sales Scenario
            </h2>
            <p className="text-xl text-gray-600">
              Our live AI transcription adapts to any type of sales conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Discovery Calls</h3>
              <p className="text-gray-600 mb-4">
                Capture every pain point and requirement mentioned during discovery conversations.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Pain point identification</li>
                <li>• Requirement tracking</li>
                <li>• Budget discussions</li>
              </ul>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Product Demos</h3>
              <p className="text-gray-600 mb-4">
                Record prospect reactions and questions during product demonstrations.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Feature interest tracking</li>
                <li>• Question capture</li>
                <li>• Objection recording</li>
              </ul>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Negotiation Calls</h3>
              <p className="text-gray-600 mb-4">
                Keep perfect records of all terms, conditions, and commitments discussed.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Terms documentation</li>
                <li>• Commitment tracking</li>
                <li>• Decision maker input</li>
              </ul>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Team Calls</h3>
              <p className="text-gray-600 mb-4">
                Transcribe multi-person calls with accurate speaker identification.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Speaker identification</li>
                <li>• Role-based insights</li>
                <li>• Team coordination</li>
              </ul>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Follow-up Calls</h3>
              <p className="text-gray-600 mb-4">
                Track progress and new developments in ongoing sales cycles.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Progress tracking</li>
                <li>• New requirement capture</li>
                <li>• Timeline updates</li>
              </ul>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Closing Calls</h3>
              <p className="text-gray-600 mb-4">
                Document final agreements and next steps with complete accuracy.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Agreement documentation</li>
                <li>• Next step clarity</li>
                <li>• Implementation planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Using Live AI Transcription Today
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Transform your sales conversations with the most advanced live AI transcription technology available.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <DownloadButtons variant="hero" className="mb-0" />
            <Link
              to="/signup"
              className="btn bg-white text-emerald-600 hover:bg-gray-100 shadow-lg hover:shadow-xl inline-flex items-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <PricingSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LiveAITranscriptionPage;