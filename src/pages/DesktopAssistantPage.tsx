import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Monitor, Cpu, Zap, CheckCircle, ArrowRight, Bot, Headphones } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const DesktopAssistantPage: React.FC = () => {
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
              <Monitor className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">AI Desktop Assistant</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Personal <span className="text-emerald-600">AI Desktop Assistant</span> for Sales Success
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Meet the most intelligent desktop assistant for sales professionals. Get real-time coaching, conversation insights, and automated follow-ups right on your desktop.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The desktop assistant AI that's transforming how sales teams work
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
              More Than Just a Desktop Assistant
            </h2>
            <p className="text-xl text-gray-600">
              Our AI desktop assistant is specifically designed for sales professionals who want to close more deals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Bot className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Intelligent AI Assistant</h3>
              <p className="text-gray-600">
                Unlike generic desktop assistants, our AI is trained specifically on sales conversations and best practices.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Headphones className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Real-Time Support</h3>
              <p className="text-gray-600">
                Get instant support during live calls with conversation analysis, objection handling, and closing guidance.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Automated Workflows</h3>
              <p className="text-gray-600">
                Automate follow-up emails, CRM updates, and task creation so you can focus on selling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Assistant vs Others */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Why Choose Our Desktop Assistant AI?
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Built for Sales Professionals</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Sales-Specific Intelligence</h4>
                      <p className="text-gray-600">Trained on millions of successful sales conversations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">CRM Integration</h4>
                      <p className="text-gray-600">Seamlessly connects with your existing sales tools</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Privacy-First Design</h4>
                      <p className="text-gray-600">Your conversations stay private and secure</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Lightweight & Fast</h4>
                      <p className="text-gray-600">Runs efficiently without slowing down your computer</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Desktop Assistant Features</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                    <span className="font-medium text-gray-900">Live Call Coaching</span>
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                    <span className="font-medium text-gray-900">Automated Follow-ups</span>
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                    <span className="font-medium text-gray-900">Conversation Analytics</span>
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                    <span className="font-medium text-gray-900">Smart Notifications</span>
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                    <span className="font-medium text-gray-900">Performance Tracking</span>
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
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
              How Your Desktop Assistant AI Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple setup, powerful results. Your AI assistant is ready to help in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold mb-3">Download & Install</h3>
              <p className="text-gray-600">
                Quick 2-minute installation on your desktop. Works on Mac and Windows.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold mb-3">Connect Your Tools</h3>
              <p className="text-gray-600">
                Integrate with your CRM, calendar, and communication tools for seamless workflow.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold mb-3">Start Your Calls</h3>
              <p className="text-gray-600">
                Your AI assistant automatically activates during calls, providing real-time guidance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold mb-3">Close More Deals</h3>
              <p className="text-gray-600">
                Watch your close rates improve with AI-powered insights and automated follow-ups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Get Your Personal AI Desktop Assistant Today
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Join thousands of sales professionals who are already using our desktop assistant AI to boost their performance.
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

export default DesktopAssistantPage;