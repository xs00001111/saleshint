import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, MessageSquare, TrendingUp, CheckCircle, ArrowRight, Award, Target } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const RealTimeSalesCoachingPage: React.FC = () => {
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
              <Users className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Real-Time Sales Coaching</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Revolutionary <span className="text-emerald-600">Real-Time Sales Coaching</span> That Drives Results
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your sales team's performance with AI-powered real-time coaching. Get instant feedback, conversation guidance, and performance insights during live sales calls.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The real-time sales coaching platform used by top-performing sales teams
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
              Real-Time Coaching That Actually Works
            </h2>
            <p className="text-xl text-gray-600">
              Unlike traditional coaching methods, our real-time approach provides immediate feedback when it matters most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Live Call Coaching</h3>
              <p className="text-gray-600">
                Get instant coaching suggestions during live sales calls. Our AI analyzes conversations and provides real-time guidance.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Performance Analytics</h3>
              <p className="text-gray-600">
                Track coaching effectiveness with detailed analytics. See how real-time coaching improves individual and team performance.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Skill Development</h3>
              <p className="text-gray-600">
                Identify skill gaps and provide targeted coaching recommendations to help each rep reach their full potential.
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
                  The Future of Sales Coaching is Here
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Real-time sales coaching provides immediate feedback and guidance, helping reps improve their performance in the moment when it matters most.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Immediate Impact</h4>
                      <p className="text-gray-600">See performance improvements immediately with real-time coaching feedback</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Scalable Coaching</h4>
                      <p className="text-gray-600">Provide consistent coaching to your entire team without increasing headcount</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Data-Driven Insights</h4>
                      <p className="text-gray-600">Make coaching decisions based on real conversation data and performance metrics</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Real-Time Coaching Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">43%</div>
                    <p className="text-gray-600">Improvement in close rates</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">60%</div>
                    <p className="text-gray-600">Faster skill development</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">35%</div>
                    <p className="text-gray-600">Reduction in ramp time</p>
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
            <h2 className="text-3xl font-bold mb-6">Trusted by Sales Coaching Experts</h2>
            <p className="text-lg text-gray-600">Leading sales coaching resources recommend our real-time approach</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.salescoaching.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Sales Coaching Institute
              </a>
              <p className="text-sm text-gray-500 mt-1">Coaching Best Practices</p>
            </div>
            <div className="text-center">
              <a href="https://blog.hubspot.com/sales/sales-coaching" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                HubSpot Sales Coaching
              </a>
              <p className="text-sm text-gray-500 mt-1">Coaching Strategies</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesforce.com/resources/articles/sales-coaching/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                Salesforce Coaching
              </a>
              <p className="text-sm text-gray-500 mt-1">Manager Resources</p>
            </div>
            <div className="text-center">
              <a href="https://www.saleshacker.com/sales-coaching/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Sales Hacker Coaching
              </a>
              <p className="text-sm text-gray-500 mt-1">Modern Techniques</p>
            </div>
            <div className="text-center">
              <a href="https://www.gartner.com/en/sales/insights/sales-coaching" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Gartner Sales Research
              </a>
              <p className="text-sm text-gray-500 mt-1">Industry Analysis</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesmanagement.org" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                Sales Management Assoc.
              </a>
              <p className="text-sm text-gray-500 mt-1">Leadership Guide</p>
            </div>
            <div className="text-center">
              <a href="https://www.revenuecollective.com/sales-coaching" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                Revenue Collective
              </a>
              <p className="text-sm text-gray-500 mt-1">Community Insights</p>
            </div>
            <div className="text-center">
              <a href="https://blog.close.com/sales-coaching/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                Close.com Coaching
              </a>
              <p className="text-sm text-gray-500 mt-1">Practical Tips</p>
            </div>
            <div className="text-center">
              <a href="https://www.outreach.io/blog/sales-coaching/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Outreach Coaching
              </a>
              <p className="text-sm text-gray-500 mt-1">Technology Integration</p>
            </div>
            <div className="text-center">
              <a href="https://blog.gong.io/sales-coaching/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Gong.io Blog
              </a>
              <p className="text-sm text-gray-500 mt-1">Data-Driven Coaching</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Real-Time Sales Coaching Today
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Transform your sales team's performance with AI-powered real-time coaching that delivers immediate results.
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

export default RealTimeSalesCoachingPage;