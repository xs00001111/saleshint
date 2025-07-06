import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, Brain, Rocket, CheckCircle, ArrowRight, Star, Shield } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const AISalesCopilotPage: React.FC = () => {
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
              <Rocket className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">AI Sales Copilot</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Intelligent <span className="text-emerald-600">AI Sales Copilot</span> for Every Deal
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Meet your new AI sales copilot that works alongside you to close more deals. Get real-time insights, conversation guidance, and automated workflows that supercharge your sales performance.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The AI sales copilot trusted by top-performing sales professionals
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
              Your AI Sales Copilot Never Sleeps
            </h2>
            <p className="text-xl text-gray-600">
              Unlike human assistants, your AI sales copilot is available 24/7 to help you win every deal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Intelligent Insights</h3>
              <p className="text-gray-600">
                Your AI sales copilot analyzes every conversation and provides intelligent insights to help you understand your prospects better.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Real-Time Assistance</h3>
              <p className="text-gray-600">
                Get instant suggestions and guidance during live sales calls. Your AI copilot helps you navigate any conversation challenge.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Deal Protection</h3>
              <p className="text-gray-600">
                Your AI sales copilot identifies risks early and suggests actions to keep deals on track and prevent losses.
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
                  Why Every Sales Professional Needs an AI Copilot
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Your AI sales copilot is like having a top-performing sales mentor available 24/7, helping you make better decisions and close more deals.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Always Available</h4>
                      <p className="text-gray-600">Your AI copilot works around the clock, providing support whenever you need it</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Learns Your Style</h4>
                      <p className="text-gray-600">Adapts to your unique selling approach and provides personalized recommendations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Continuous Improvement</h4>
                      <p className="text-gray-600">Gets smarter with every interaction, constantly improving its assistance</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">AI Sales Copilot Impact</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">55%</div>
                    <p className="text-gray-600">Increase in deal velocity</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">42%</div>
                    <p className="text-gray-600">Higher close rates</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">70%</div>
                    <p className="text-gray-600">More confident in sales calls</p>
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
            <h2 className="text-3xl font-bold mb-6">Featured in Leading Sales Publications</h2>
            <p className="text-lg text-gray-600">Top sales experts recommend AI sales copilots for modern sales teams</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.salesforce.com/resources/articles/ai-sales/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Salesforce AI Blog
              </a>
              <p className="text-sm text-gray-500 mt-1">AI Sales Guide</p>
            </div>
            <div className="text-center">
              <a href="https://blog.hubspot.com/sales/ai-sales-tools" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                HubSpot AI Sales
              </a>
              <p className="text-sm text-gray-500 mt-1">Best AI Tools 2025</p>
            </div>
            <div className="text-center">
              <a href="https://www.saleshacker.com/ai-sales-copilot/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                Sales Hacker AI
              </a>
              <p className="text-sm text-gray-500 mt-1">Copilot Comparison</p>
            </div>
            <div className="text-center">
              <a href="https://www.gartner.com/en/sales/insights/ai-sales" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Gartner AI Research
              </a>
              <p className="text-sm text-gray-500 mt-1">Market Analysis</p>
            </div>
            <div className="text-center">
              <a href="https://www.forrester.com/report/ai-sales-tools/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Forrester AI Report
              </a>
              <p className="text-sm text-gray-500 mt-1">Technology Trends</p>
            </div>
            <div className="text-center">
              <a href="https://www.revenuecollective.com/ai-sales" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                Revenue Collective
              </a>
              <p className="text-sm text-gray-500 mt-1">AI Implementation</p>
            </div>
            <div className="text-center">
              <a href="https://blog.close.com/ai-sales-assistant/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                Close.com AI Blog
              </a>
              <p className="text-sm text-gray-500 mt-1">Assistant Reviews</p>
            </div>
            <div className="text-center">
              <a href="https://www.outreach.io/blog/ai-sales/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                Outreach AI Blog
              </a>
              <p className="text-sm text-gray-500 mt-1">Future of Sales AI</p>
            </div>
            <div className="text-center">
              <a href="https://blog.gong.io/ai-sales-copilot/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Gong.io AI Blog
              </a>
              <p className="text-sm text-gray-500 mt-1">Conversation AI</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesinsider.com/ai-copilot/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Sales Insider AI
              </a>
              <p className="text-sm text-gray-500 mt-1">Technology Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Get Your AI Sales Copilot Today
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Join thousands of sales professionals who are already using AI copilots to exceed their quotas and accelerate their careers.
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

export default AISalesCopilotPage;