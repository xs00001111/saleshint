import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Brain, Users, CheckCircle, ArrowRight, Lightbulb, Target } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const ConversationAssistantPage: React.FC = () => {
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
              <MessageCircle className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">AI Conversation Assistant</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              The Ultimate <span className="text-emerald-600">AI Conversation Assistant</span> for Sales
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform every sales conversation with your intelligent AI conversation assistant. Get real-time suggestions, objection handling, and conversation insights that help you close more deals.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The conversation assistant that understands sales psychology and buyer behavior
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
              Your Smartest Conversation Assistant
            </h2>
            <p className="text-xl text-gray-600">
              Unlike generic conversation tools, our AI conversation assistant is specifically trained for sales success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Intelligent Analysis</h3>
              <p className="text-gray-600">
                Your AI conversation assistant analyzes tone, sentiment, and buying signals in real-time to guide your responses.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Smart Suggestions</h3>
              <p className="text-gray-600">
                Get contextual conversation starters, follow-up questions, and closing techniques tailored to each prospect.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Goal-Oriented Guidance</h3>
              <p className="text-gray-600">
                Your conversation assistant keeps you focused on your call objectives and guides you toward successful outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversation Types */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Perfect for Every Type of Sales Conversation
            </h2>
            <p className="text-xl text-gray-600">
              Your AI conversation assistant adapts to any sales scenario.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-emerald-800">Discovery Conversations</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Perfect questions to uncover pain points</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Conversation flow guidance</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Rapport-building suggestions</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-emerald-800">Objection Conversations</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Instant objection handling responses</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Reframe techniques</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Value reinforcement strategies</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-emerald-800">Closing Conversations</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Timing indicators for closing</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Multiple closing techniques</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Urgency creation methods</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-emerald-800">Follow-up Conversations</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Conversation continuity suggestions</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Next step recommendations</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Relationship maintenance tips</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Why Sales Teams Love Our Conversation Assistant
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Your AI conversation assistant doesn't just provide generic advice - it understands the nuances of sales conversations and buyer psychology.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Contextual Intelligence</h4>
                      <p className="text-gray-600">Understands conversation context and provides relevant suggestions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Learning Capability</h4>
                      <p className="text-gray-600">Gets smarter with every conversation and adapts to your style</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Seamless Integration</h4>
                      <p className="text-gray-600">Works with your existing tools and workflows</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-200">
                <h3 className="text-2xl font-bold mb-6 text-center text-emerald-800">Conversation Assistant Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">40%</div>
                    <p className="text-gray-700">Improvement in conversation quality</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">35%</div>
                    <p className="text-gray-700">Faster objection resolution</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">50%</div>
                    <p className="text-gray-700">More confident in sales calls</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Get Your AI Conversation Assistant Today
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Join thousands of sales professionals who are transforming their conversations with AI-powered assistance.
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

export default ConversationAssistantPage;