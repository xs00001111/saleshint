import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bot, TrendingUp, Target, CheckCircle, ArrowRight, Users, BarChart3 } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const AISalesAssistantPage: React.FC = () => {
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
              <Bot className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">AI Sales Assistant</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              The Ultimate <span className="text-emerald-600">AI Sales Assistant</span> for Modern Sales Teams
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Supercharge your sales performance with the most advanced AI sales assistant. Get real-time coaching, conversation insights, and automated workflows that help you close more deals faster.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              Trusted by over 10,000 sales professionals worldwide
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
              Why Our AI Sales Assistant Outperforms the Competition
            </h2>
            <p className="text-xl text-gray-600">
              Built specifically for sales professionals, our AI assistant understands the nuances of sales conversations and buyer psychology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Real-Time Sales Coaching</h3>
              <p className="text-gray-600">
                Get instant coaching and suggestions during live sales calls. Our AI sales assistant analyzes conversations and provides contextual guidance.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Smart Lead Qualification</h3>
              <p className="text-gray-600">
                Automatically qualify leads and identify the best opportunities. Our AI sales assistant helps you focus on deals most likely to close.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Performance Analytics</h3>
              <p className="text-gray-600">
                Track your sales performance with detailed analytics. Get insights on what's working and areas for improvement.
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
                  Transform Your Sales Process with AI
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our AI sales assistant doesn't just provide generic advice - it learns from your successful sales patterns and adapts to your unique selling style.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Personalized Coaching</h4>
                      <p className="text-gray-600">AI adapts to your selling style and provides personalized recommendations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Automated Follow-ups</h4>
                      <p className="text-gray-600">Never miss a follow-up with intelligent automation and reminders</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Deal Intelligence</h4>
                      <p className="text-gray-600">Get insights on deal health and next best actions for each opportunity</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">AI Sales Assistant Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">47%</div>
                    <p className="text-gray-600">Increase in close rates</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">3x</div>
                    <p className="text-gray-600">Faster lead qualification</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">65%</div>
                    <p className="text-gray-600">Reduction in admin time</p>
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
            <h2 className="text-3xl font-bold mb-6">Featured In & Recommended By</h2>
            <p className="text-lg text-gray-600">Leading sales publications and experts trust our AI sales assistant</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.salesforce.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Salesforce Blog
              </a>
              <p className="text-sm text-gray-500 mt-1">AI Sales Tools Review</p>
            </div>
            <div className="text-center">
              <a href="https://blog.hubspot.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                HubSpot Sales Blog
              </a>
              <p className="text-sm text-gray-500 mt-1">Best Sales AI Tools 2025</p>
            </div>
            <div className="text-center">
              <a href="https://www.saleshacker.com" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                Sales Hacker
              </a>
              <p className="text-sm text-gray-500 mt-1">AI Sales Assistant Guide</p>
            </div>
            <div className="text-center">
              <a href="https://www.gartner.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Gartner Research
              </a>
              <p className="text-sm text-gray-500 mt-1">Sales Technology Report</p>
            </div>
            <div className="text-center">
              <a href="https://www.forrester.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Forrester
              </a>
              <p className="text-sm text-gray-500 mt-1">AI in Sales Study</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesinsider.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                Sales Insider
              </a>
              <p className="text-sm text-gray-500 mt-1">Top AI Sales Tools</p>
            </div>
            <div className="text-center">
              <a href="https://www.revenuecollective.com" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                Revenue Collective
              </a>
              <p className="text-sm text-gray-500 mt-1">Sales Tech Stack Guide</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesforce.com/resources/articles/sales-technology/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                Sales Technology Today
              </a>
              <p className="text-sm text-gray-500 mt-1">AI Assistant Review</p>
            </div>
            <div className="text-center">
              <a href="https://blog.close.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Close.com Blog
              </a>
              <p className="text-sm text-gray-500 mt-1">Sales AI Comparison</p>
            </div>
            <div className="text-center">
              <a href="https://www.outreach.io/blog" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Outreach Blog
              </a>
              <p className="text-sm text-gray-500 mt-1">Future of Sales AI</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Your AI Sales Assistant?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Join thousands of sales professionals who are already using AI to close more deals and exceed their quotas.
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

export default AISalesAssistantPage;