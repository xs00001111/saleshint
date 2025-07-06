import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Sparkles, Send, CheckCircle, ArrowRight, Clock, Target } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const EmailAssistantForSalesPage: React.FC = () => {
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
              <Mail className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Email Assistant for Sales</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your AI <span className="text-emerald-600">Email Assistant</span> for Sales Success
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your sales emails with AI-powered writing assistance, personalization, and optimization. Write compelling emails that get responses and close more deals.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The email assistant that's helping sales professionals achieve 3x higher response rates
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
              Email Intelligence That Gets Results
            </h2>
            <p className="text-xl text-gray-600">
              Stop sending emails that get ignored. Start sending emails that get responses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Smart Personalization</h3>
              <p className="text-gray-600">
                AI analyzes prospect data to create highly personalized emails that resonate with each recipient.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Optimized Sending</h3>
              <p className="text-gray-600">
                AI determines the best time to send emails and suggests optimal subject lines for maximum open rates.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Response Tracking</h3>
              <p className="text-gray-600">
                Track email performance and get AI insights on how to improve your messaging for better results.
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
                  Why Sales Teams Love Our Email Assistant
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our AI email assistant doesn't just help you write emails - it helps you write emails that actually work.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Higher Response Rates</h4>
                      <p className="text-gray-600">AI-optimized emails get 3x more responses than generic templates</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Time Savings</h4>
                      <p className="text-gray-600">Write compelling emails in minutes instead of hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Continuous Learning</h4>
                      <p className="text-gray-600">AI learns from your successful emails to improve future suggestions</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Email Assistant Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">3x</div>
                    <p className="text-gray-600">Higher response rates</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">75%</div>
                    <p className="text-gray-600">Time saved on email writing</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">45%</div>
                    <p className="text-gray-600">More meetings booked</p>
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
            <h2 className="text-3xl font-bold mb-6">Featured in Email Marketing Resources</h2>
            <p className="text-lg text-gray-600">Leading email and sales experts recommend AI-powered email assistance</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://blog.hubspot.com/sales/sales-email-templates" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                HubSpot Email
              </a>
              <p className="text-sm text-gray-500 mt-1">Sales Email Guide</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesforce.com/resources/articles/sales-email/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                Salesforce Email
              </a>
              <p className="text-sm text-gray-500 mt-1">Best Practices</p>
            </div>
            <div className="text-center">
              <a href="https://www.saleshacker.com/sales-email/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                Sales Hacker
              </a>
              <p className="text-sm text-gray-500 mt-1">Email Strategies</p>
            </div>
            <div className="text-center">
              <a href="https://blog.close.com/sales-email/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Close.com Email
              </a>
              <p className="text-sm text-gray-500 mt-1">Email Tips</p>
            </div>
            <div className="text-center">
              <a href="https://www.outreach.io/blog/sales-email/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Outreach Blog
              </a>
              <p className="text-sm text-gray-500 mt-1">Email Automation</p>
            </div>
            <div className="text-center">
              <a href="https://blog.gong.io/sales-email/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                Gong.io Email
              </a>
              <p className="text-sm text-gray-500 mt-1">Data-Driven Insights</p>
            </div>
            <div className="text-center">
              <a href="https://www.revenuecollective.com/email" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                Revenue Collective
              </a>
              <p className="text-sm text-gray-500 mt-1">Community Tips</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesinsider.com/email/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                Sales Insider
              </a>
              <p className="text-sm text-gray-500 mt-1">Industry Trends</p>
            </div>
            <div className="text-center">
              <a href="https://blog.mixmax.com/sales-email/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Mixmax Blog
              </a>
              <p className="text-sm text-gray-500 mt-1">Email Productivity</p>
            </div>
            <div className="text-center">
              <a href="https://www.yesware.com/blog/sales-email/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Yesware Blog
              </a>
              <p className="text-sm text-gray-500 mt-1">Email Analytics</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Sales Emails?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Join thousands of sales professionals who are using AI to write better emails and get more responses.
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

export default EmailAssistantForSalesPage;