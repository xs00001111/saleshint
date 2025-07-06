import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, Clock, Target, CheckCircle, ArrowRight, BarChart3, Users } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const SalesProductivityToolPage: React.FC = () => {
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
              <Zap className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Sales Productivity Tool</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              The Ultimate <span className="text-emerald-600">Sales Productivity Tool</span> for High Performers
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Maximize your sales productivity with AI-powered automation, intelligent task management, and real-time performance insights that help you sell more in less time.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The productivity tool that's helping sales professionals achieve 40% more in their day
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
              Productivity Features That Actually Work
            </h2>
            <p className="text-xl text-gray-600">
              Stop wasting time on busy work. Focus on what matters most - selling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Time Management</h3>
              <p className="text-gray-600">
                AI-powered scheduling and task prioritization that helps you focus on high-value activities.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Smart Automation</h3>
              <p className="text-gray-600">
                Automate repetitive tasks like data entry, follow-ups, and reporting to save hours each day.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Performance Tracking</h3>
              <p className="text-gray-600">
                Real-time insights into your productivity metrics and suggestions for continuous improvement.
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
                  Why Top Performers Use Our Productivity Tool
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our sales productivity tool doesn't just organize your work - it intelligently optimizes your entire sales process.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Intelligent Prioritization</h4>
                      <p className="text-gray-600">AI ranks your tasks and opportunities by potential impact and urgency</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Seamless Integration</h4>
                      <p className="text-gray-600">Works with your existing CRM, email, and calendar tools</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Actionable Insights</h4>
                      <p className="text-gray-600">Get specific recommendations to improve your daily productivity</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Productivity Gains</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">3.2</div>
                    <p className="text-gray-600">Hours saved per day</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">40%</div>
                    <p className="text-gray-600">More activities completed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">58%</div>
                    <p className="text-gray-600">Better task prioritization</p>
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
            <h2 className="text-3xl font-bold mb-6">Recommended by Productivity Experts</h2>
            <p className="text-lg text-gray-600">Leading sales productivity resources trust our platform</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.salesforce.com/resources/articles/sales-productivity/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Salesforce Productivity
              </a>
              <p className="text-sm text-gray-500 mt-1">Best Practices</p>
            </div>
            <div className="text-center">
              <a href="https://blog.hubspot.com/sales/sales-productivity" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                HubSpot Sales
              </a>
              <p className="text-sm text-gray-500 mt-1">Productivity Tips</p>
            </div>
            <div className="text-center">
              <a href="https://www.saleshacker.com/sales-productivity/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                Sales Hacker
              </a>
              <p className="text-sm text-gray-500 mt-1">Efficiency Guide</p>
            </div>
            <div className="text-center">
              <a href="https://blog.close.com/sales-productivity/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Close.com Blog
              </a>
              <p className="text-sm text-gray-500 mt-1">Productivity Tools</p>
            </div>
            <div className="text-center">
              <a href="https://www.outreach.io/blog/sales-productivity/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Outreach Blog
              </a>
              <p className="text-sm text-gray-500 mt-1">Automation Tips</p>
            </div>
            <div className="text-center">
              <a href="https://www.gartner.com/en/sales/insights/sales-productivity" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                Gartner Research
              </a>
              <p className="text-sm text-gray-500 mt-1">Market Analysis</p>
            </div>
            <div className="text-center">
              <a href="https://www.revenuecollective.com/productivity" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                Revenue Collective
              </a>
              <p className="text-sm text-gray-500 mt-1">Community Insights</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesinsider.com/productivity/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                Sales Insider
              </a>
              <p className="text-sm text-gray-500 mt-1">Industry Trends</p>
            </div>
            <div className="text-center">
              <a href="https://blog.gong.io/sales-productivity/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Gong.io Blog
              </a>
              <p className="text-sm text-gray-500 mt-1">Data-Driven Tips</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesbenchmarkindex.com/productivity" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                SBI Productivity
              </a>
              <p className="text-sm text-gray-500 mt-1">Performance Metrics</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Supercharge Your Sales Productivity?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Join thousands of sales professionals who are using AI to work smarter, not harder.
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

export default SalesProductivityToolPage;