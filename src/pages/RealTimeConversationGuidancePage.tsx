import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageSquare, Zap, Target, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const RealTimeConversationGuidancePage: React.FC = () => {
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
              <MessageSquare className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Real-Time Conversation Guidance</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Get <span className="text-emerald-600">Real-Time Conversation Guidance</span> That Closes More Deals
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform every sales conversation with AI-powered real-time guidance. Get instant suggestions, objection handling, and conversation insights as you speak.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              Join thousands of sales professionals using real-time conversation guidance to boost their close rates by 30%
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
              Why Real-Time Conversation Guidance Works
            </h2>
            <p className="text-xl text-gray-600">
              Get the support you need exactly when you need it, without missing a beat in your conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Instant Response Suggestions</h3>
              <p className="text-gray-600">
                Get AI-powered response suggestions in real-time based on what your prospect is saying. Never be caught off guard again.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Smart Objection Handling</h3>
              <p className="text-gray-600">
                Receive contextual objection handling strategies the moment a prospect raises concerns. Turn objections into opportunities.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Live Conversation Analysis</h3>
              <p className="text-gray-600">
                Understand conversation flow, sentiment, and key moments in real-time. Know exactly when to push for the close.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Real-Time Guidance That Actually Works
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Unlike static scripts or post-call analysis, our real-time conversation guidance adapts to each unique conversation as it unfolds.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Contextual Suggestions</h4>
                      <p className="text-gray-600">Get relevant talking points based on the actual conversation context</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Undetectable Operation</h4>
                      <p className="text-gray-600">Guidance appears only on your screen - prospects never know you're getting help</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Instant Adaptation</h4>
                      <p className="text-gray-600">AI adjusts recommendations based on prospect responses and conversation flow</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Real Results from Real Users</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">30%</div>
                    <p className="text-gray-600">Average increase in close rates</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">45%</div>
                    <p className="text-gray-600">Faster objection resolution</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">60%</div>
                    <p className="text-gray-600">More confident in sales calls</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              How Real-Time Conversation Guidance Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple setup, powerful results. Start getting real-time guidance in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Start Your Call</h3>
              <p className="text-gray-600">
                Launch SalesHint and begin your sales conversation normally. Our AI listens and analyzes in real-time.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Get Live Guidance</h3>
              <p className="text-gray-600">
                Receive instant suggestions, objection handling tips, and conversation insights as the discussion unfolds.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Close More Deals</h3>
              <p className="text-gray-600">
                Use AI-powered insights to navigate conversations confidently and close more deals than ever before.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Sales Conversations?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Join thousands of sales professionals who are already using real-time conversation guidance to close more deals.
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

export default RealTimeConversationGuidancePage;