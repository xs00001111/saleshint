import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageSquare, BarChart3, Brain, CheckCircle, ArrowRight, Mic, TrendingUp } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const SalesConversationAnalysisPage: React.FC = () => {
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
              <span className="text-sm font-medium">Sales Conversation Analysis</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Advanced <span className="text-emerald-600">Sales Conversation Analysis</span> with AI
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Unlock the secrets of successful sales conversations with AI-powered analysis that reveals what works, what doesn't, and how to improve your performance.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The conversation analysis platform that's helping sales teams improve win rates by 35%
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
              Conversation Intelligence That Drives Results
            </h2>
            <p className="text-xl text-gray-600">
              Turn every sales conversation into a learning opportunity with AI-powered analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">AI-Powered Analysis</h3>
              <p className="text-gray-600">
                Advanced AI analyzes conversation patterns, sentiment, and key moments to provide actionable insights.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Performance Metrics</h3>
              <p className="text-gray-600">
                Track talk time, question ratios, objection handling, and other key metrics that correlate with success.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Improvement Recommendations</h3>
              <p className="text-gray-600">
                Get specific, actionable recommendations to improve your conversation skills and close more deals.
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
                  Why Sales Teams Choose Our Conversation Analysis
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our AI doesn't just record conversations - it understands them and helps you improve.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Deep Conversation Insights</h4>
                      <p className="text-gray-600">Understand what makes conversations successful with detailed AI analysis</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Personalized Coaching</h4>
                      <p className="text-gray-600">Get coaching recommendations tailored to your specific conversation style</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Team Performance Tracking</h4>
                      <p className="text-gray-600">Compare performance across your team and identify best practices</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Conversation Analysis Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">35%</div>
                    <p className="text-gray-600">Improvement in win rates</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">50%</div>
                    <p className="text-gray-600">Better objection handling</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">28%</div>
                    <p className="text-gray-600">Shorter sales cycles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Backlinks Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Featured in Conversation Intelligence Resources</h2>
            <p className="text-lg text-gray-600">Leading sales experts recommend AI-powered conversation analysis</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://blog.gong.io/conversation-intelligence/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Gong.io Intelligence
              </a>
              <p className="text-sm text-gray-500 mt-1">Conversation AI</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesforce.com/resources/articles/conversation-intelligence/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                Salesforce Intelligence
              </a>
              <p className="text-sm text-gray-500 mt-1">AI Analysis</p>
            </div>
            <div className="text-center">
              <a href="https://blog.hubspot.com/sales/conversation-intelligence" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                HubSpot Sales
              </a>
              <p className="text-sm text-gray-500 mt-1">Intelligence Guide</p>
            </div>
            <div className="text-center">
              <a href="https://www.outreach.io/blog/conversation-intelligence/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Outreach Blog
              </a>
              <p className="text-sm text-gray-500 mt-1">Best Practices</p>
            </div>
            <div className="text-center">
              <a href="https://blog.close.com/conversation-intelligence/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Close.com Intelligence
              </a>
              <p className="text-sm text-gray-500 mt-1">Analysis Tips</p>
            </div>
            <div className="text-center">
              <a href="https://www.gartner.com/en/sales/insights/conversation-intelligence" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                Gartner Research
              </a>
              <p className="text-sm text-gray-500 mt-1">Market Analysis</p>
            </div>
            <div className="text-center">
              <a href="https://www.revenuecollective.com/conversation-intelligence" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                Revenue Collective
              </a>
              <p className="text-sm text-gray-500 mt-1">Community Insights</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesinsider.com/conversation-intelligence/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                Sales Insider
              </a>
              <p className="text-sm text-gray-500 mt-1">Industry Trends</p>
            </div>
            <div className="text-center">
              <a href="https://blog.chorus.ai/conversation-intelligence/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Chorus.ai Blog
              </a>
              <p className="text-sm text-gray-500 mt-1">Intelligence Platform</p>
            </div>
            <div className="text-center">
              <a href="https://www.saleshacker.com/conversation-intelligence/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Sales Hacker
              </a>
              <p className="text-sm text-gray-500 mt-1">Modern Sales</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Analyze Your Sales Conversations?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Transform every conversation into a learning opportunity with AI-powered analysis and insights.
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

export default SalesConversationAnalysisPage;