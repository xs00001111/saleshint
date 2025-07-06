import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Lightbulb, Target, CheckCircle, ArrowRight, BarChart3, Zap } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const HowToImproveSalesWithAIPage: React.FC = () => {
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
              <span className="text-sm font-medium">How to Improve Sales with AI</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-emerald-600">How to Improve Sales</span> with AI: The Complete Guide
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover proven strategies and practical steps to transform your sales performance with AI. Learn how top sales teams are using artificial intelligence to close more deals and exceed quotas.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The definitive guide used by 10,000+ sales professionals to improve with AI
            </p>
          </div>

          {/* Demo Preview */}
          <div className="max-w-5xl mx-auto mb-16">
            <DemoPreview />
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              5 Proven Ways to Improve Sales with AI
            </h2>
            <p className="text-xl text-gray-600">
              Follow these proven strategies to transform your sales performance with artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Real-Time Conversation Coaching</h3>
              <p className="text-gray-600">
                Use AI to get instant coaching during live sales calls. Improve objection handling and closing techniques in real-time.
              </p>
            </div>

            <div className="feature-card">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Predictive Lead Scoring</h3>
              <p className="text-gray-600">
                Let AI analyze your prospects and prioritize the leads most likely to convert, focusing your time on high-value opportunities.
              </p>
            </div>

            <div className="feature-card">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Automated Follow-Up Sequences</h3>
              <p className="text-gray-600">
                Use AI to create personalized follow-up emails and sequences that nurture prospects automatically.
              </p>
            </div>

            <div className="feature-card">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Sales Performance Analytics</h3>
              <p className="text-gray-600">
                Leverage AI analytics to identify what's working in your sales process and optimize for better results.
              </p>
            </div>

            <div className="feature-card">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-xl font-bold mb-3">Intelligent Pipeline Management</h3>
              <p className="text-gray-600">
                Use AI to predict deal outcomes, identify risks, and get recommendations to accelerate your pipeline.
              </p>
            </div>

            <div className="feature-card">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                +
              </div>
              <h3 className="text-xl font-bold mb-3">Continuous Learning</h3>
              <p className="text-gray-600">
                AI learns from your successful interactions to provide increasingly better recommendations over time.
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
                  The Results of Improving Sales with AI
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Sales teams that implement AI see dramatic improvements across all key metrics.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Higher Close Rates</h4>
                      <p className="text-gray-600">AI-powered coaching and insights lead to 35% higher close rates</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Faster Sales Cycles</h4>
                      <p className="text-gray-600">Reduce sales cycle length by 25% with AI-driven prioritization</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Better Productivity</h4>
                      <p className="text-gray-600">Save 3+ hours per day with AI automation and intelligent workflows</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">AI Sales Improvement Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">35%</div>
                    <p className="text-gray-600">Higher close rates</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">25%</div>
                    <p className="text-gray-600">Faster sales cycles</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">3.2</div>
                    <p className="text-gray-600">Hours saved per day</p>
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
            <h2 className="text-3xl font-bold mb-6">Featured in Leading Sales Improvement Resources</h2>
            <p className="text-lg text-gray-600">Top sales experts share how to improve sales with AI</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.salesforce.com/resources/articles/sales-improvement/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Salesforce Improvement
              </a>
              <p className="text-sm text-gray-500 mt-1">AI Sales Guide</p>
            </div>
            <div className="text-center">
              <a href="https://blog.hubspot.com/sales/improve-sales-performance" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                HubSpot Performance
              </a>
              <p className="text-sm text-gray-500 mt-1">Improvement Tips</p>
            </div>
            <div className="text-center">
              <a href="https://www.saleshacker.com/improve-sales/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                Sales Hacker
              </a>
              <p className="text-sm text-gray-500 mt-1">Modern Strategies</p>
            </div>
            <div className="text-center">
              <a href="https://blog.close.com/improve-sales/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Close.com Guide
              </a>
              <p className="text-sm text-gray-500 mt-1">Best Practices</p>
            </div>
            <div className="text-center">
              <a href="https://www.outreach.io/blog/improve-sales/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Outreach Blog
              </a>
              <p className="text-sm text-gray-500 mt-1">AI Strategies</p>
            </div>
            <div className="text-center">
              <a href="https://blog.gong.io/improve-sales/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                Gong.io Insights
              </a>
              <p className="text-sm text-gray-500 mt-1">Data-Driven Tips</p>
            </div>
            <div className="text-center">
              <a href="https://www.revenuecollective.com/improve-sales" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                Revenue Collective
              </a>
              <p className="text-sm text-gray-500 mt-1">Community Wisdom</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesinsider.com/improve/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                Sales Insider
              </a>
              <p className="text-sm text-gray-500 mt-1">Industry Insights</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesbenchmarkindex.com/improve" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                SBI Improvement
              </a>
              <p className="text-sm text-gray-500 mt-1">Performance Metrics</p>
            </div>
            <div className="text-center">
              <a href="https://blog.pipedrive.com/improve-sales/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Pipedrive Guide
              </a>
              <p className="text-sm text-gray-500 mt-1">Success Strategies</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Improve Your Sales with AI?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Start implementing these proven AI strategies today and see immediate improvements in your sales performance.
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

export default HowToImproveSalesWithAIPage;