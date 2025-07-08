import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, Server, BarChart3, CheckCircle, ArrowRight, Code, Network } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const APIPerformanceScalabilityExplanationPage: React.FC = () => {
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
              <span className="text-sm font-medium">API Performance & Scalability</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-emerald-600">API Performance & Scalability</span> Explanation Scripts
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Master technical API discussions with proven performance and scalability explanation scripts. Turn complex architecture concepts into clear business value that closes deals.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The API technical explanation framework used by leading platform and integration companies
            </p>
          </div>

          {/* Demo Preview */}
          <div className="max-w-5xl mx-auto mb-16">
            <DemoPreview />
          </div>
        </div>
      </section>

      {/* API Performance Scripts */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Proven API Performance & Scalability Explanation Scripts
            </h2>
            <p className="text-xl text-gray-600">
              Explain complex API architecture with confidence using these technically precise scripts.
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
                  <h3 className="text-2xl font-bold">The API Performance Architecture Explanation</h3>
                </div>
                <Zap className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Technical Prospect:</strong> "How does your API handle high-volume requests without performance degradation?"
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "That's an excellent technical question. Our API is architected specifically for high performance at scale using a multi-layered approach."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "At the infrastructure layer, we use a globally distributed edge network with 28 points of presence, ensuring sub-100ms response times worldwide. Our API gateway implements automatic request throttling, circuit breaking, and load balancing. The application layer uses asynchronous processing for compute-intensive operations, with a stateless design that scales horizontally across our Kubernetes clusters."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "This architecture consistently delivers 99.99% uptime while maintaining p95 response times under 150ms, even during peak loads of 20,000 requests per second. We've handled Black Friday traffic for [major retailer] with zero performance degradation. Would you like to see our performance benchmarks for your specific use case?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Infrastructure:</strong> Global edge network
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Architecture:</strong> Stateless, horizontal scaling
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Performance:</strong> 20K RPS with sub-150ms response
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
                  <h3 className="text-2xl font-bold">The Scalability Model Explanation</h3>
                </div>
                <Server className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Technical Prospect:</strong> "How does your API platform scale as our usage grows? We're concerned about hitting limits."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Scalability is built into our platform's DNA. We've designed a multi-dimensional scaling model that grows with you across three key dimensions."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "First, horizontal scaling: our containerized microservices architecture automatically scales out based on demand, with no upper limit on concurrent requests. Second, data scaling: we use a distributed database architecture with automatic sharding and partitioning that has scaled to petabyte-level for our largest customers. Third, functional scaling: our API endpoints are modular, allowing you to add capabilities without performance impact."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We currently support customers processing over 1 billion API calls daily with this architecture. [Enterprise client] started with 50,000 daily requests and scaled to 25 million in 18 months with zero architectural changes. Would you like to see our reference architecture diagram that details these scaling mechanisms?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Dimensions:</strong> Multi-dimensional scaling model
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Architecture:</strong> Microservices with auto-scaling
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Proof:</strong> 1B+ daily API calls
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
                  <h3 className="text-2xl font-bold">The SLA and Monitoring Explanation</h3>
                </div>
                <BarChart3 className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Technical Prospect:</strong> "How do you guarantee API performance and what happens if it degrades?"
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We back our API performance with a comprehensive SLA and proactive monitoring system that ensures issues are identified and resolved before they impact your business."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Our enterprise SLA guarantees 99.99% availability with p95 response times under 200ms. We maintain a real-time performance dashboard with 150+ metrics tracking every aspect of API health. Our monitoring system uses predictive anomaly detection to identify potential issues before they occur, with automated remediation for common scenarios."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "In the rare event of performance degradation, our SLA includes financial penalties to us, and our incident response team has a 5-minute response SLA 24/7/365. We also provide a dedicated Slack channel for your technical team to reach our engineers directly. Would you like access to our demo status page to see these monitoring capabilities in action?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Guarantee:</strong> 99.99% availability SLA
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Monitoring:</strong> Predictive anomaly detection
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Response:</strong> 5-minute SLA with direct access
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
                  Turn Technical Complexity into Business Confidence
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our AI provides real-time coaching for API technical explanations with business-focused translations.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Architecture Diagrams</h4>
                      <p className="text-gray-600">Visual explanations of complex API infrastructure</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Performance Metrics</h4>
                      <p className="text-gray-600">Real-world benchmarks and capacity planning</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">SLA Templates</h4>
                      <p className="text-gray-600">Enterprise-grade performance guarantees</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">API Performance Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">92%</div>
                    <p className="text-gray-600">Technical objections successfully addressed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">3.2x</div>
                    <p className="text-gray-600">Faster technical approval process</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">99.99%</div>
                    <p className="text-gray-600">API availability maintained</p>
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
            <h2 className="text-3xl font-bold mb-6">Featured in API Development Resources</h2>
            <p className="text-lg text-gray-600">Leading API experts recommend our technical explanation approach</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.programmableweb.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                ProgrammableWeb
              </a>
              <p className="text-sm text-gray-500 mt-1">API Directory</p>
            </div>
            <div className="text-center">
              <a href="https://nordicapis.com/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                Nordic APIs
              </a>
              <p className="text-sm text-gray-500 mt-1">API Resources</p>
            </div>
            <div className="text-center">
              <a href="https://swagger.io/resources/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                Swagger
              </a>
              <p className="text-sm text-gray-500 mt-1">API Documentation</p>
            </div>
            <div className="text-center">
              <a href="https://www.postman.com/resources/apis-101/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Postman
              </a>
              <p className="text-sm text-gray-500 mt-1">API Testing</p>
            </div>
            <div className="text-center">
              <a href="https://apigee.com/about/blog" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Apigee
              </a>
              <p className="text-sm text-gray-500 mt-1">API Management</p>
            </div>
            <div className="text-center">
              <a href="https://www.moesif.com/blog/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                Moesif
              </a>
              <p className="text-sm text-gray-500 mt-1">API Analytics</p>
            </div>
            <div className="text-center">
              <a href="https://www.apidays.co/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                API Days
              </a>
              <p className="text-sm text-gray-500 mt-1">API Conference</p>
            </div>
            <div className="text-center">
              <a href="https://apisecurity.io/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                API Security
              </a>
              <p className="text-sm text-gray-500 mt-1">Security Resources</p>
            </div>
            <div className="text-center">
              <a href="https://www.redhat.com/en/topics/api" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Red Hat API
              </a>
              <p className="text-sm text-gray-500 mt-1">Enterprise Resources</p>
            </div>
            <div className="text-center">
              <a href="https://cloud.google.com/apis" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Google Cloud APIs
              </a>
              <p className="text-sm text-gray-500 mt-1">Cloud APIs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Master API Technical Explanations
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Get AI-powered API performance scripts and real-time coaching to close more technical deals.
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

export default APIPerformanceScalabilityExplanationPage;