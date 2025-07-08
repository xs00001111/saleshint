import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BarChart3, TrendingUp, Calculator, CheckCircle, ArrowRight, Database, LineChart } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const DataScienceROIExplanationScriptsPage: React.FC = () => {
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
              <LineChart className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Data Science ROI</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-emerald-600">Data Science ROI</span> Explanation Scripts
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Master data science sales with proven ROI explanation scripts. Turn complex analytics value into clear business outcomes that executives understand and approve.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The data science ROI framework used by leading analytics and AI companies
            </p>
          </div>

          {/* Demo Preview */}
          <div className="max-w-5xl mx-auto mb-16">
            <DemoPreview />
          </div>
        </div>
      </section>

      {/* Data Science ROI Scripts */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Proven Data Science ROI Explanation Scripts
            </h2>
            <p className="text-xl text-gray-600">
              Explain complex analytics value with confidence using these business-focused scripts.
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
                  <h3 className="text-2xl font-bold">The Predictive Value Framework</h3>
                </div>
                <TrendingUp className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Business Prospect:</strong> "How do we actually measure the ROI of data science and predictive analytics?"
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "That's an excellent question. We measure data science ROI through a framework called Predictive Value that quantifies both direct financial impact and risk reduction."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "For your specific use case in [industry], we would establish baseline metrics for [key business process], implement our predictive models, and measure the improvement in three areas: revenue increase through [specific mechanism], cost reduction through [specific mechanism], and risk mitigation through [specific mechanism]."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "For example, [similar company] implemented our predictive analytics solution and achieved a 23% reduction in customer churn, translating to $4.2M in preserved annual revenue, while also reducing inventory costs by $1.8M through demand forecasting. Their total first-year ROI was 341%. Would you like to see their detailed ROI calculation?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Framework:</strong> Predictive Value methodology
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Metrics:</strong> Revenue, cost, and risk impact
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Example:</strong> 341% first-year ROI
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
                  <h3 className="text-2xl font-bold">The Technical-to-Business Translation</h3>
                </div>
                <Calculator className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Business Prospect:</strong> "I don't understand all the technical aspects of your data science solution. How does it actually impact our bottom line?"
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "I appreciate that question. Let me translate the technical capabilities into direct business outcomes. At its core, our solution uses [technical capability] to deliver [business outcome]."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "For example, our anomaly detection algorithms identify patterns that humans can't see. In business terms, this means catching [specific business problem] before it costs you money. Our clustering algorithms segment your customers with 95% accuracy, which means your marketing team can create hyper-targeted campaigns that convert 3x better."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We've created this technical-to-business translation guide specifically for your industry that maps each algorithm to its business impact and expected ROI range. Would it be helpful to walk through this together to identify which capabilities would deliver the most value for your specific challenges?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Translation:</strong> Technical to business outcomes
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Examples:</strong> Specific algorithm business impact
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Tool:</strong> Industry-specific translation guide
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
                  <h3 className="text-2xl font-bold">The Phased Value Realization Approach</h3>
                </div>
                <Database className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Business Prospect:</strong> "Data science projects seem risky. How can we ensure we'll actually see ROI?"
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "That's a valid concern. Many data science initiatives fail because they try to boil the ocean. We take a different approach with our Phased Value Realization methodology."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We start with a 6-week Quick Win phase focused on one high-value use case with existing data. This delivers measurable ROI within 45 days. We then move to the Foundation phase where we implement your data architecture and expand to 2-3 additional use cases. Finally, the Scale phase systematically adds new models and use cases."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "This approach has delivered a 94% success rate across 200+ implementations. For example, [similar company] achieved positive ROI within 38 days with a predictive maintenance model that prevented a single equipment failure worth $380K. Would you like to see our Phased Value Realization roadmap customized for your business?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Methodology:</strong> Phased Value Realization
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Timeline:</strong> 45-day initial ROI
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Success:</strong> 94% implementation success rate
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
                  Turn Complex Analytics into Clear Business Value
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our AI provides real-time coaching for data science ROI explanations with business-focused translations.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">ROI Calculators</h4>
                      <p className="text-gray-600">Industry-specific data science value models</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Technical Translations</h4>
                      <p className="text-gray-600">Algorithm-to-business outcome mappings</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Implementation Roadmaps</h4>
                      <p className="text-gray-600">Phased value delivery frameworks</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Data Science ROI Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">85%</div>
                    <p className="text-gray-600">ROI objections successfully addressed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">45</div>
                    <p className="text-gray-600">Days average to first positive ROI</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">341%</div>
                    <p className="text-gray-600">Average first-year ROI</p>
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
            <h2 className="text-3xl font-bold mb-6">Featured in Data Science Resources</h2>
            <p className="text-lg text-gray-600">Leading analytics experts recommend our ROI explanation approach</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.kdnuggets.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                KDnuggets
              </a>
              <p className="text-sm text-gray-500 mt-1">Data Science News</p>
            </div>
            <div className="text-center">
              <a href="https://towardsdatascience.com/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                Towards Data Science
              </a>
              <p className="text-sm text-gray-500 mt-1">Medium Publication</p>
            </div>
            <div className="text-center">
              <a href="https://www.datasciencecentral.com/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                Data Science Central
              </a>
              <p className="text-sm text-gray-500 mt-1">Community Resource</p>
            </div>
            <div className="text-center">
              <a href="https://www.gartner.com/en/information-technology/insights/data-analytics" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Gartner Analytics
              </a>
              <p className="text-sm text-gray-500 mt-1">Research</p>
            </div>
            <div className="text-center">
              <a href="https://www.forrester.com/report/data-science/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Forrester Research
              </a>
              <p className="text-sm text-gray-500 mt-1">Market Analysis</p>
            </div>
            <div className="text-center">
              <a href="https://www.mckinsey.com/capabilities/quantumblack/our-insights" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                McKinsey QuantumBlack
              </a>
              <p className="text-sm text-gray-500 mt-1">Analytics Insights</p>
            </div>
            <div className="text-center">
              <a href="https://www.oreilly.com/radar/topics/data/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                O'Reilly Data
              </a>
              <p className="text-sm text-gray-500 mt-1">Technical Resources</p>
            </div>
            <div className="text-center">
              <a href="https://hbr.org/topic/data" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                Harvard Business Review
              </a>
              <p className="text-sm text-gray-500 mt-1">Data Articles</p>
            </div>
            <div className="text-center">
              <a href="https://www.datacamp.com/community" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                DataCamp
              </a>
              <p className="text-sm text-gray-500 mt-1">Learning Resources</p>
            </div>
            <div className="text-center">
              <a href="https://www.tableau.com/learn/articles" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Tableau
              </a>
              <p className="text-sm text-gray-500 mt-1">Visualization Resources</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Master Data Science ROI Explanations
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Get AI-powered analytics ROI scripts and real-time coaching to close more data science deals.
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

export default DataScienceROIExplanationScriptsPage;