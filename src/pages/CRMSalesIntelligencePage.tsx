import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Database, BarChart3, Brain, CheckCircle, ArrowRight, Users, TrendingUp } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const CRMSalesIntelligencePage: React.FC = () => {
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
              <Database className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">CRM Sales Intelligence</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Unlock <span className="text-emerald-600">CRM Sales Intelligence</span> with AI
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your CRM data into actionable sales intelligence. Get AI-powered insights, predictive analytics, and automated recommendations that help you close more deals faster.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The CRM intelligence platform trusted by data-driven sales teams
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
              Turn Your CRM into a Sales Intelligence Powerhouse
            </h2>
            <p className="text-xl text-gray-600">
              Stop drowning in data. Start making intelligent decisions with AI-powered CRM insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Predictive Analytics</h3>
              <p className="text-gray-600">
                AI analyzes your CRM data to predict which deals are most likely to close and when.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Smart Insights</h3>
              <p className="text-gray-600">
                Get actionable insights from your CRM data that help you prioritize activities and focus on what matters.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Performance Optimization</h3>
              <p className="text-gray-600">
                Identify patterns in your sales process and get recommendations to improve performance.
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
                  Why Your CRM Needs AI Intelligence
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Your CRM contains a goldmine of sales intelligence. Our AI helps you unlock its full potential.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Data-Driven Decisions</h4>
                      <p className="text-gray-600">Make decisions based on AI insights rather than gut feelings</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Automated Insights</h4>
                      <p className="text-gray-600">Get intelligent recommendations without manual analysis</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Predictive Forecasting</h4>
                      <p className="text-gray-600">Accurate sales forecasts based on historical patterns and trends</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">CRM Intelligence Impact</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">32%</div>
                    <p className="text-gray-600">Improvement in forecast accuracy</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">28%</div>
                    <p className="text-gray-600">Increase in deal velocity</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">45%</div>
                    <p className="text-gray-600">Better lead prioritization</p>
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
            <h2 className="text-3xl font-bold mb-6">Trusted by CRM and Sales Intelligence Leaders</h2>
            <p className="text-lg text-gray-600">Industry experts recommend AI-powered CRM intelligence</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.salesforce.com/products/sales-cloud/sales-intelligence/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Salesforce Intelligence
              </a>
              <p className="text-sm text-gray-500 mt-1">CRM AI Features</p>
            </div>
            <div className="text-center">
              <a href="https://blog.hubspot.com/sales/crm-intelligence" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                HubSpot CRM Blog
              </a>
              <p className="text-sm text-gray-500 mt-1">Intelligence Tools</p>
            </div>
            <div className="text-center">
              <a href="https://www.gartner.com/en/sales/insights/crm-analytics" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                Gartner CRM Research
              </a>
              <p className="text-sm text-gray-500 mt-1">Market Analysis</p>
            </div>
            <div className="text-center">
              <a href="https://www.forrester.com/report/crm-intelligence/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Forrester CRM
              </a>
              <p className="text-sm text-gray-500 mt-1">Intelligence Report</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesinsider.com/crm-intelligence/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Sales Insider CRM
              </a>
              <p className="text-sm text-gray-500 mt-1">Best Practices</p>
            </div>
            <div className="text-center">
              <a href="https://blog.pipedrive.com/crm-intelligence/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                Pipedrive Blog
              </a>
              <p className="text-sm text-gray-500 mt-1">CRM Insights</p>
            </div>
            <div className="text-center">
              <a href="https://www.revenuecollective.com/crm-intelligence" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                Revenue Collective
              </a>
              <p className="text-sm text-gray-500 mt-1">Community Insights</p>
            </div>
            <div className="text-center">
              <a href="https://blog.close.com/crm-analytics/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                Close.com Analytics
              </a>
              <p className="text-sm text-gray-500 mt-1">Data-Driven Sales</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesforce.com/resources/articles/crm-analytics/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Salesforce Analytics
              </a>
              <p className="text-sm text-gray-500 mt-1">CRM Intelligence</p>
            </div>
            <div className="text-center">
              <a href="https://blog.gong.io/crm-intelligence/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Gong.io CRM
              </a>
              <p className="text-sm text-gray-500 mt-1">Revenue Intelligence</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Unlock Your CRM's Sales Intelligence Potential
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Transform your CRM data into actionable insights that drive revenue growth and sales success.
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

export default CRMSalesIntelligencePage;