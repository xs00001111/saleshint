import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BarChart3, Target, Zap, CheckCircle, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const SDRPerformanceToolsPage: React.FC = () => {
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
              <BarChart3 className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">SDR Performance Tools</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-emerald-600">SDR Performance Tools</span> That Drive Results
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Supercharge your SDR team with AI-powered performance tools. Book more meetings, improve conversion rates, and exceed quotas with intelligent assistance designed specifically for SDRs.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The complete toolkit trusted by top-performing SDR teams
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
              Essential Tools for SDR Excellence
            </h2>
            <p className="text-xl text-gray-600">
              Everything SDRs need to perform at their highest level and book more qualified meetings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Call Optimization</h3>
              <p className="text-gray-600">
                AI-powered call coaching that provides real-time guidance, objection handling, and conversation insights during live calls.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Messaging Assistant</h3>
              <p className="text-gray-600">
                Generate personalized, high-converting email and social outreach messages that get responses from your target accounts.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Lead Prioritization</h3>
              <p className="text-gray-600">
                AI-powered lead scoring that helps you focus on the prospects most likely to convert, maximizing your productivity.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Performance Analytics</h3>
              <p className="text-gray-600">
                Detailed metrics and insights that help you understand what's working and where to improve your outreach strategy.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Workflow Automation</h3>
              <p className="text-gray-600">
                Automate repetitive tasks like logging activities, sending follow-ups, and updating your CRM to save hours each day.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Objection Library</h3>
              <p className="text-gray-600">
                Access proven responses to common objections, organized by industry and objection type for quick reference during calls.
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
                  Why SDR Teams Choose Our Performance Tools
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our tools are specifically designed for the unique challenges SDRs face every day.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Faster Ramp Time</h4>
                      <p className="text-gray-600">New SDRs reach full productivity 60% faster with AI-powered guidance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Higher Meeting Rates</h4>
                      <p className="text-gray-600">Book 35% more qualified meetings with optimized outreach</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Time Savings</h4>
                      <p className="text-gray-600">Save 2+ hours daily on administrative tasks through automation</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">SDR Performance Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">45%</div>
                    <p className="text-gray-600">More meetings booked</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">60%</div>
                    <p className="text-gray-600">Faster ramp time for new SDRs</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">32%</div>
                    <p className="text-gray-600">Higher conversion to opportunities</p>
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
            <h2 className="text-3xl font-bold mb-6">Featured in SDR Resources</h2>
            <p className="text-lg text-gray-600">Leading SDR experts recommend our performance tools</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.saleshacker.com/sdr-tools/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Sales Hacker
              </a>
              <p className="text-sm text-gray-500 mt-1">SDR Tools Guide</p>
            </div>
            <div className="text-center">
              <a href="https://blog.hubspot.com/sales/sdr-tools" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                HubSpot Sales
              </a>
              <p className="text-sm text-gray-500 mt-1">SDR Resources</p>
            </div>
            <div className="text-center">
              <a href="https://www.gong.io/blog/sdr-performance/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                Gong.io
              </a>
              <p className="text-sm text-gray-500 mt-1">SDR Analytics</p>
            </div>
            <div className="text-center">
              <a href="https://www.outreach.io/blog/sdr-tools" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Outreach
              </a>
              <p className="text-sm text-gray-500 mt-1">SDR Playbooks</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesloft.com/blog/sdr-tools/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                SalesLoft
              </a>
              <p className="text-sm text-gray-500 mt-1">SDR Technology</p>
            </div>
            <div className="text-center">
              <a href="https://www.sdrchronicles.com/tools/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                SDR Chronicles
              </a>
              <p className="text-sm text-gray-500 mt-1">Tool Reviews</p>
            </div>
            <div className="text-center">
              <a href="https://www.sdrnation.com/resources/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                SDR Nation
              </a>
              <p className="text-sm text-gray-500 mt-1">SDR Community</p>
            </div>
            <div className="text-center">
              <a href="https://www.sdrleaders.com/tools/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                SDR Leaders
              </a>
              <p className="text-sm text-gray-500 mt-1">Leadership Resources</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesbenchmarkindex.com/sdr-tools" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                SBI
              </a>
              <p className="text-sm text-gray-500 mt-1">Benchmark Data</p>
            </div>
            <div className="text-center">
              <a href="https://www.revenuecollective.com/sdr-tools" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Revenue Collective
              </a>
              <p className="text-sm text-gray-500 mt-1">SDR Resources</p>
            </div>
            <div className="text-center">
              <a href="https://www.sdraccelerator.com/tools/" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-800 font-medium">
                SDR Accelerator
              </a>
              <p className="text-sm text-gray-500 mt-1">Training Resources</p>
            </div>
            <div className="text-center">
              <a href="https://www.predictablerevenue.com/blog/sdr-tools" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800 font-medium">
                Predictable Revenue
              </a>
              <p className="text-sm text-gray-500 mt-1">SDR Strategies</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Boost Your SDR Performance Today
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Join thousands of SDRs who are using our tools to exceed their quotas and accelerate their careers.
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

export default SDRPerformanceToolsPage;