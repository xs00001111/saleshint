import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Users, Target, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const BoostSDRPerformancePage: React.FC = () => {
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
              <TrendingUp className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Boost SDR Performance</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-emerald-600">Boost SDR Performance</span> with AI-Powered Coaching
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your SDR team's performance with AI-powered coaching, real-time guidance, and automated workflows that help them book more meetings and exceed quotas.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The AI platform that's helping SDR teams achieve 60% higher performance
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
              AI Tools Designed for SDR Success
            </h2>
            <p className="text-xl text-gray-600">
              Everything your SDR team needs to prospect smarter, connect better, and book more meetings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Cold Call Coaching</h3>
              <p className="text-gray-600">
                Real-time AI coaching during cold calls helps SDRs handle objections and book more meetings.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Email Optimization</h3>
              <p className="text-gray-600">
                AI-powered email suggestions and optimization to improve response rates and engagement.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Lead Prioritization</h3>
              <p className="text-gray-600">
                AI scores and prioritizes leads so SDRs focus their time on the highest-value prospects.
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
                  Why SDR Teams Choose Our AI Platform
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our AI is specifically designed for SDR workflows and challenges, not generic sales processes.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Faster Ramp Time</h4>
                      <p className="text-gray-600">New SDRs reach productivity 50% faster with AI coaching</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Higher Connect Rates</h4>
                      <p className="text-gray-600">AI timing and messaging optimization improves connect rates by 40%</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">More Qualified Meetings</h4>
                      <p className="text-gray-600">Better qualification leads to 35% more qualified meetings booked</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">SDR Performance Boost</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">60%</div>
                    <p className="text-gray-600">Higher overall performance</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">40%</div>
                    <p className="text-gray-600">Better connect rates</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">35%</div>
                    <p className="text-gray-600">More qualified meetings</p>
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
            <h2 className="text-3xl font-bold mb-6">Featured in SDR Performance Resources</h2>
            <p className="text-lg text-gray-600">Leading SDR experts recommend AI-powered performance improvement</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.salesforce.com/resources/articles/sdr-performance/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Salesforce SDR
              </a>
              <p className="text-sm text-gray-500 mt-1">Performance Guide</p>
            </div>
            <div className="text-center">
              <a href="https://blog.hubspot.com/sales/sdr-performance" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                HubSpot SDR
              </a>
              <p className="text-sm text-gray-500 mt-1">Best Practices</p>
            </div>
            <div className="text-center">
              <a href="https://www.saleshacker.com/sdr-performance/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                Sales Hacker SDR
              </a>
              <p className="text-sm text-gray-500 mt-1">Modern Strategies</p>
            </div>
            <div className="text-center">
              <a href="https://www.outreach.io/blog/sdr-performance/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Outreach SDR
              </a>
              <p className="text-sm text-gray-500 mt-1">Performance Tips</p>
            </div>
            <div className="text-center">
              <a href="https://blog.close.com/sdr-performance/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Close.com SDR
              </a>
              <p className="text-sm text-gray-500 mt-1">Success Metrics</p>
            </div>
            <div className="text-center">
              <a href="https://www.revenuecollective.com/sdr" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                Revenue Collective
              </a>
              <p className="text-sm text-gray-500 mt-1">SDR Community</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesinsider.com/sdr/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                Sales Insider SDR
              </a>
              <p className="text-sm text-gray-500 mt-1">Industry Insights</p>
            </div>
            <div className="text-center">
              <a href="https://blog.gong.io/sdr-performance/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                Gong.io SDR
              </a>
              <p className="text-sm text-gray-500 mt-1">Data-Driven Tips</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesbenchmarkindex.com/sdr" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                SBI SDR
              </a>
              <p className="text-sm text-gray-500 mt-1">Performance Metrics</p>
            </div>
            <div className="text-center">
              <a href="https://blog.salesloft.com/sdr-performance/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                SalesLoft SDR
              </a>
              <p className="text-sm text-gray-500 mt-1">Optimization Guide</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Boost Your SDR Performance?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Transform your SDR team's performance with AI-powered coaching and optimization tools.
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

export default BoostSDRPerformancePage;