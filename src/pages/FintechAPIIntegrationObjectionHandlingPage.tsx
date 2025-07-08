import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, Code, Settings, CheckCircle, ArrowRight, Clock, Layers } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const FintechAPIIntegrationObjectionHandlingPage: React.FC = () => {
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
              <Code className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Fintech API Integration</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-emerald-600">Fintech API Integration</span> Objection Handling Scripts
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Master fintech sales with proven API integration objection handling scripts. Turn technical concerns into competitive advantages and close more deals in the financial technology space.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The fintech integration objection framework used by leading financial software companies
            </p>
          </div>

          {/* Demo Preview */}
          <div className="max-w-5xl mx-auto mb-16">
            <DemoPreview />
          </div>
        </div>
      </section>

      {/* Integration Objection Scripts */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Proven Fintech API Integration Objection Scripts
            </h2>
            <p className="text-xl text-gray-600">
              Handle every technical integration concern with confidence using these fintech-specific responses.
            </p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {/* Script 1 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-2xl font-bold">"Our API integration will be too complex"</h3>
                </div>
                <Layers className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Fintech Prospect:</strong> "Integrating with our existing API infrastructure seems too complex and risky."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "I understand that concern. Actually, our API is designed specifically for fintech companies and follows industry standards like Open Banking and PCI DSS."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We have pre-built connectors for [major fintech platforms] and our average integration time is just 2-3 weeks. [Similar company] was up and running in 10 days."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Plus, we provide a dedicated integration engineer and sandbox environment for testing. Would you like to see our API documentation and integration timeline?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Standards:</strong> Open Banking & PCI DSS compliant
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Speed:</strong> 2-3 weeks average integration
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Support:</strong> Dedicated integration engineer
                </div>
              </div>
            </div>

            {/* Script 2 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-2xl font-bold">"What about API rate limits and performance?"</h3>
                </div>
                <Zap className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Fintech Prospect:</strong> "We process millions of transactions. Will your API handle our volume and what are the rate limits?"
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Performance is critical in fintech, and our API is built for scale. We handle 50M+ API calls daily with 99.99% uptime and sub-100ms response times."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Our rate limits are generous - 10,000 requests per minute on our standard plan, with custom limits available for high-volume clients like yourself."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We also provide real-time monitoring dashboards and automatic scaling. [Large fintech client] processes 5M transactions daily without any issues."
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Scale:</strong> 50M+ daily API calls
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Performance:</strong> Sub-100ms response times
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Reliability:</strong> 99.99% uptime SLA
                </div>
              </div>
            </div>

            {/* Script 3 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-2xl font-bold">"We need custom API endpoints"</h3>
                </div>
                <Settings className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Fintech Prospect:</strong> "Our business model is unique. We'll need custom API endpoints that your standard API doesn't provide."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We absolutely support custom endpoints. Our API is designed to be flexible and we've built custom integrations for 80% of our fintech clients."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We can typically develop custom endpoints within 2-4 weeks, and they're included in your enterprise plan at no additional cost."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Let's schedule a technical discovery call with our API team to map out exactly what you need. We can provide a detailed integration plan within 48 hours."
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Flexibility:</strong> 80% custom integrations
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Timeline:</strong> 2-4 weeks development
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Planning:</strong> 48-hour integration plan
                </div>
              </div>
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
                  Turn Technical Concerns into Competitive Advantages
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our AI provides real-time coaching for fintech integration objections with technical expertise.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Technical Documentation</h4>
                      <p className="text-gray-600">Instant access to API docs, integration guides, and code samples</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Performance Metrics</h4>
                      <p className="text-gray-600">Real-time performance data and SLA guarantees</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Custom Solutions</h4>
                      <p className="text-gray-600">AI guidance for discussing custom endpoint development</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Fintech Integration Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">92%</div>
                    <p className="text-gray-600">Integration objections resolved</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">2.1</div>
                    <p className="text-gray-600">Weeks average integration time</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">99.99%</div>
                    <p className="text-gray-600">API uptime guarantee</p>
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
            <h2 className="text-3xl font-bold mb-6">Featured in Fintech Integration Resources</h2>
            <p className="text-lg text-gray-600">Leading fintech integration experts recommend our API approach</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.openbanking.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Open Banking
              </a>
              <p className="text-sm text-gray-500 mt-1">API Standards</p>
            </div>
            <div className="text-center">
              <a href="https://www.pcisecuritystandards.org/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                PCI Security
              </a>
              <p className="text-sm text-gray-500 mt-1">Payment Standards</p>
            </div>
            <div className="text-center">
              <a href="https://plaid.com/docs/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                Plaid API Docs
              </a>
              <p className="text-sm text-gray-500 mt-1">Integration Guide</p>
            </div>
            <div className="text-center">
              <a href="https://stripe.com/docs/api" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Stripe API
              </a>
              <p className="text-sm text-gray-500 mt-1">Payment APIs</p>
            </div>
            <div className="text-center">
              <a href="https://www.fintechfutures.com/category/api/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Fintech Futures
              </a>
              <p className="text-sm text-gray-500 mt-1">API News</p>
            </div>
            <div className="text-center">
              <a href="https://www.programmableweb.com/category/financial" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                ProgrammableWeb
              </a>
              <p className="text-sm text-gray-500 mt-1">Financial APIs</p>
            </div>
            <div className="text-center">
              <a href="https://www.swift.com/our-solutions/interfaces-and-integration" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                SWIFT Integration
              </a>
              <p className="text-sm text-gray-500 mt-1">Banking Standards</p>
            </div>
            <div className="text-center">
              <a href="https://www.finastra.com/apis" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                Finastra APIs
              </a>
              <p className="text-sm text-gray-500 mt-1">Banking Platform</p>
            </div>
            <div className="text-center">
              <a href="https://www.fintechweekly.com/fintech-api" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Fintech Weekly
              </a>
              <p className="text-sm text-gray-500 mt-1">API Insights</p>
            </div>
            <div className="text-center">
              <a href="https://www.bankingtech.com/tag/api/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Banking Technology
              </a>
              <p className="text-sm text-gray-500 mt-1">Integration News</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Master Fintech Integration Objections
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Get AI-powered integration objection scripts and real-time technical coaching for fintech sales success.
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

export default FintechAPIIntegrationObjectionHandlingPage;