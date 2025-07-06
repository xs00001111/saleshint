import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, BookOpen, Users, CheckCircle, ArrowRight, Trophy, Briefcase } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const SalesEnablementToolPage: React.FC = () => {
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
              <Briefcase className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Sales Enablement Tool</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              The Complete <span className="text-emerald-600">Sales Enablement Tool</span> for High-Performing Teams
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Empower your sales team with the most comprehensive sales enablement tool. From onboarding to quota achievement, we provide everything your team needs to succeed.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The sales enablement tool trusted by Fortune 500 companies
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
              Complete Sales Enablement in One Platform
            </h2>
            <p className="text-xl text-gray-600">
              Everything your sales team needs to be successful, from training to real-time coaching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Training & Onboarding</h3>
              <p className="text-gray-600">
                Accelerate new hire ramp-up with interactive training modules and real-world practice scenarios.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Real-Time Coaching</h3>
              <p className="text-gray-600">
                Provide instant coaching during live sales calls with AI-powered conversation analysis and guidance.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Performance Analytics</h3>
              <p className="text-gray-600">
                Track team performance with detailed analytics and identify coaching opportunities for each rep.
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
                  Why Sales Teams Choose Our Enablement Tool
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Unlike traditional sales enablement platforms, we focus on real-time performance improvement and practical skill development.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Faster Ramp-Up</h4>
                      <p className="text-gray-600">New reps reach quota 40% faster with our structured enablement program</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Consistent Messaging</h4>
                      <p className="text-gray-600">Ensure all reps deliver consistent, on-brand messaging across all touchpoints</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Continuous Improvement</h4>
                      <p className="text-gray-600">Ongoing coaching and feedback loops drive continuous performance improvement</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Sales Enablement ROI</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">52%</div>
                    <p className="text-gray-600">Faster time to productivity</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">38%</div>
                    <p className="text-gray-600">Increase in quota attainment</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">25%</div>
                    <p className="text-gray-600">Reduction in turnover</p>
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
            <h2 className="text-3xl font-bold mb-6">Recognized by Sales Leaders</h2>
            <p className="text-lg text-gray-600">Top sales enablement resources recommend our platform</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.salesenablement.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Sales Enablement Society
              </a>
              <p className="text-sm text-gray-500 mt-1">Best Practices Guide</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesforce.com/resources/articles/sales-enablement/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                Salesforce Enablement
              </a>
              <p className="text-sm text-gray-500 mt-1">Platform Comparison</p>
            </div>
            <div className="text-center">
              <a href="https://blog.hubspot.com/sales/sales-enablement" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                HubSpot Sales
              </a>
              <p className="text-sm text-gray-500 mt-1">Enablement Strategy</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesenablementpro.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Sales Enablement Pro
              </a>
              <p className="text-sm text-gray-500 mt-1">Tool Reviews</p>
            </div>
            <div className="text-center">
              <a href="https://www.gartner.com/en/sales/insights/sales-enablement" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Gartner Sales
              </a>
              <p className="text-sm text-gray-500 mt-1">Market Analysis</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesreadiness.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                Sales Readiness Group
              </a>
              <p className="text-sm text-gray-500 mt-1">Enablement Research</p>
            </div>
            <div className="text-center">
              <a href="https://www.revenuecollective.com/sales-enablement" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                Revenue Collective
              </a>
              <p className="text-sm text-gray-500 mt-1">Community Insights</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesforce.com/products/sales-cloud/sales-enablement/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                Sales Cloud Blog
              </a>
              <p className="text-sm text-gray-500 mt-1">Technology Trends</p>
            </div>
            <div className="text-center">
              <a href="https://blog.seismic.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Seismic Blog
              </a>
              <p className="text-sm text-gray-500 mt-1">Enablement Tips</p>
            </div>
            <div className="text-center">
              <a href="https://www.highspot.com/blog/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Highspot Blog
              </a>
              <p className="text-sm text-gray-500 mt-1">Success Stories</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Transform Your Sales Team with Our Enablement Tool
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Give your sales team the tools and training they need to consistently exceed quota and drive revenue growth.
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

export default SalesEnablementToolPage;