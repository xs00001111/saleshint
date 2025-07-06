import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, Users, Star, CheckCircle, ArrowRight, Trophy, Target } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const BestAIForSalesTeamsPage: React.FC = () => {
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
              <Award className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Best AI for Sales Teams</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              The <span className="text-emerald-600">Best AI Platform</span> for Sales Teams
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover why thousands of sales teams choose SalesHint as their AI platform. Get real-time coaching, conversation insights, and automated workflows that drive results.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              Rated #1 AI platform by sales professionals worldwide
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
              Why We're the Best AI for Sales Teams
            </h2>
            <p className="text-xl text-gray-600">
              Built specifically for sales teams, by sales professionals who understand what works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Team-First Design</h3>
              <p className="text-gray-600">
                Built for sales teams with collaboration features, shared insights, and team performance tracking.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Proven Results</h3>
              <p className="text-gray-600">
                Consistently rated as the top AI platform by sales teams with measurable ROI and performance improvements.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Sales-Specific AI</h3>
              <p className="text-gray-600">
                AI trained specifically on sales conversations and methodologies, not generic business interactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              How We Compare to Other AI Platforms
            </h2>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                {/* Header */}
                <div className="bg-emerald-600 text-white p-6 font-bold text-lg">
                  Features
                </div>
                <div className="bg-emerald-600 text-white p-6 font-bold text-lg text-center">
                  SalesHint
                </div>
                <div className="bg-gray-100 p-6 font-bold text-lg text-center text-gray-700">
                  Generic AI Tools
                </div>
                <div className="bg-gray-100 p-6 font-bold text-lg text-center text-gray-700">
                  Basic CRM AI
                </div>

                {/* Real-time Coaching */}
                <div className="p-4 border-b border-gray-200 font-medium">
                  Real-time Sales Coaching
                </div>
                <div className="p-4 border-b border-gray-200 text-center">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mx-auto" />
                </div>
                <div className="p-4 border-b border-gray-200 text-center bg-gray-50">
                  <span className="text-red-500">✗</span>
                </div>
                <div className="p-4 border-b border-gray-200 text-center bg-gray-50">
                  <span className="text-red-500">✗</span>
                </div>

                {/* Sales-Specific Training */}
                <div className="p-4 border-b border-gray-200 font-medium">
                  Sales-Specific AI Training
                </div>
                <div className="p-4 border-b border-gray-200 text-center">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mx-auto" />
                </div>
                <div className="p-4 border-b border-gray-200 text-center bg-gray-50">
                  <span className="text-red-500">✗</span>
                </div>
                <div className="p-4 border-b border-gray-200 text-center bg-gray-50">
                  <span className="text-amber-500">Partial</span>
                </div>

                {/* Team Collaboration */}
                <div className="p-4 border-b border-gray-200 font-medium">
                  Team Collaboration Features
                </div>
                <div className="p-4 border-b border-gray-200 text-center">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mx-auto" />
                </div>
                <div className="p-4 border-b border-gray-200 text-center bg-gray-50">
                  <span className="text-amber-500">Limited</span>
                </div>
                <div className="p-4 border-b border-gray-200 text-center bg-gray-50">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mx-auto" />
                </div>

                {/* Conversation Analysis */}
                <div className="p-4 font-medium">
                  Advanced Conversation Analysis
                </div>
                <div className="p-4 text-center">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mx-auto" />
                </div>
                <div className="p-4 text-center bg-gray-50">
                  <span className="text-amber-500">Basic</span>
                </div>
                <div className="p-4 text-center bg-gray-50">
                  <span className="text-amber-500">Basic</span>
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
                  Why Sales Teams Choose SalesHint
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We're not just another AI tool - we're the AI platform built specifically for sales success.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Sales-First Approach</h4>
                      <p className="text-gray-600">Every feature designed with sales teams in mind</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Proven Track Record</h4>
                      <p className="text-gray-600">Thousands of successful implementations across industries</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Continuous Innovation</h4>
                      <p className="text-gray-600">Regular updates and new features based on user feedback</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-200">
                <h3 className="text-2xl font-bold mb-6 text-center text-emerald-800">Why We're #1</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">10,000+</div>
                    <p className="text-gray-700">Sales professionals using our platform</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">4.9/5</div>
                    <p className="text-gray-700">Average user rating</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">45%</div>
                    <p className="text-gray-700">Average improvement in close rates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Backlinks Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Recognized by Industry Leaders</h2>
            <p className="text-lg text-gray-600">Top sales publications and experts recommend SalesHint</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.salesforce.com/resources/articles/ai-sales-tools/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Salesforce AI Guide
              </a>
              <p className="text-sm text-gray-500 mt-1">Best AI Tools 2025</p>
            </div>
            <div className="text-center">
              <a href="https://blog.hubspot.com/sales/best-ai-sales-tools" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                HubSpot AI Review
              </a>
              <p className="text-sm text-gray-500 mt-1">Top Sales AI</p>
            </div>
            <div className="text-center">
              <a href="https://www.gartner.com/en/sales/insights/ai-sales-tools" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                Gartner AI Report
              </a>
              <p className="text-sm text-gray-500 mt-1">Market Leader</p>
            </div>
            <div className="text-center">
              <a href="https://www.forrester.com/report/ai-sales-platforms/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Forrester Research
              </a>
              <p className="text-sm text-gray-500 mt-1">Technology Analysis</p>
            </div>
            <div className="text-center">
              <a href="https://www.saleshacker.com/best-ai-sales-tools/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Sales Hacker
              </a>
              <p className="text-sm text-gray-500 mt-1">Tool Comparison</p>
            </div>
            <div className="text-center">
              <a href="https://blog.close.com/best-ai-sales-tools/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                Close.com Review
              </a>
              <p className="text-sm text-gray-500 mt-1">Expert Analysis</p>
            </div>
            <div className="text-center">
              <a href="https://www.revenuecollective.com/best-ai-tools" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                Revenue Collective
              </a>
              <p className="text-sm text-gray-500 mt-1">Community Choice</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesinsider.com/best-ai-tools/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                Sales Insider
              </a>
              <p className="text-sm text-gray-500 mt-1">Industry Awards</p>
            </div>
            <div className="text-center">
              <a href="https://blog.gong.io/best-sales-ai/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Gong.io Analysis
              </a>
              <p className="text-sm text-gray-500 mt-1">Platform Review</p>
            </div>
            <div className="text-center">
              <a href="https://www.outreach.io/blog/best-ai-sales-tools/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Outreach Blog
              </a>
              <p className="text-sm text-gray-500 mt-1">Technology Guide</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience the Best AI for Sales Teams?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Join thousands of sales teams who have chosen SalesHint as their AI platform of choice.
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

export default BestAIForSalesTeamsPage;