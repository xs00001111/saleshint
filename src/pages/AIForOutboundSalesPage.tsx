import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, TrendingUp, Mail, CheckCircle, ArrowRight, Phone, Users } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const AIForOutboundSalesPage: React.FC = () => {
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
              <Target className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">AI for Outbound Sales</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Supercharge Your <span className="text-emerald-600">Outbound Sales</span> with AI
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your outbound sales strategy with AI-powered insights, automated prospecting, and real-time conversation guidance that helps you connect with more prospects and close more deals.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The AI platform that's revolutionizing outbound sales for modern teams
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
              AI That Actually Improves Outbound Results
            </h2>
            <p className="text-xl text-gray-600">
              Stop wasting time on unqualified prospects. Our AI helps you focus on the right opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Smart Prospecting</h3>
              <p className="text-gray-600">
                AI identifies the best prospects based on your ideal customer profile and buying signals.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Call Optimization</h3>
              <p className="text-gray-600">
                Get real-time coaching during outbound calls to improve your pitch and handle objections.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Performance Analytics</h3>
              <p className="text-gray-600">
                Track outbound metrics and get AI-powered insights to continuously improve your approach.
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
                  Why Outbound Teams Choose Our AI
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our AI doesn't just automate tasks - it makes your entire outbound process smarter and more effective.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Higher Connect Rates</h4>
                      <p className="text-gray-600">AI timing optimization increases your chances of reaching prospects</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Better Qualification</h4>
                      <p className="text-gray-600">Focus on prospects most likely to convert with AI-powered scoring</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Improved Messaging</h4>
                      <p className="text-gray-600">AI suggests personalized messaging that resonates with each prospect</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Outbound AI Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">67%</div>
                    <p className="text-gray-600">Higher connect rates</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">45%</div>
                    <p className="text-gray-600">More qualified meetings</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">38%</div>
                    <p className="text-gray-600">Increase in pipeline</p>
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
            <p className="text-lg text-gray-600">Top outbound sales experts recommend AI-powered approaches</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.salesforce.com/resources/articles/outbound-sales/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Salesforce Outbound
              </a>
              <p className="text-sm text-gray-500 mt-1">AI Sales Strategy</p>
            </div>
            <div className="text-center">
              <a href="https://blog.hubspot.com/sales/outbound-sales" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                HubSpot Sales Blog
              </a>
              <p className="text-sm text-gray-500 mt-1">Outbound Best Practices</p>
            </div>
            <div className="text-center">
              <a href="https://www.saleshacker.com/outbound-sales/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                Sales Hacker
              </a>
              <p className="text-sm text-gray-500 mt-1">Modern Outbound</p>
            </div>
            <div className="text-center">
              <a href="https://www.outreach.io/blog/outbound-sales/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Outreach Blog
              </a>
              <p className="text-sm text-gray-500 mt-1">Sales Automation</p>
            </div>
            <div className="text-center">
              <a href="https://blog.close.com/outbound-sales/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Close.com
              </a>
              <p className="text-sm text-gray-500 mt-1">Outbound Strategies</p>
            </div>
            <div className="text-center">
              <a href="https://www.gartner.com/en/sales/insights/outbound-sales" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                Gartner Research
              </a>
              <p className="text-sm text-gray-500 mt-1">Market Analysis</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesinsider.com/outbound/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                Sales Insider
              </a>
              <p className="text-sm text-gray-500 mt-1">Industry Insights</p>
            </div>
            <div className="text-center">
              <a href="https://blog.gong.io/outbound-sales/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                Gong.io Blog
              </a>
              <p className="text-sm text-gray-500 mt-1">Data-Driven Outbound</p>
            </div>
            <div className="text-center">
              <a href="https://www.revenuecollective.com/outbound" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Revenue Collective
              </a>
              <p className="text-sm text-gray-500 mt-1">Community Insights</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesbenchmarkindex.com/outbound" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                SBI Outbound
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
            Ready to Transform Your Outbound Sales?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Join thousands of sales professionals who are using AI to dramatically improve their outbound results.
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

export default AIForOutboundSalesPage;