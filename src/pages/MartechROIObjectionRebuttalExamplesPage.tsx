import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BarChart3, TrendingUp, Target, CheckCircle, ArrowRight, Mail, Megaphone } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const MartechROIObjectionRebuttalExamplesPage: React.FC = () => {
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
              <Megaphone className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">MarTech ROI Objection</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-emerald-600">MarTech ROI Objection</span> Rebuttal Examples
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Master marketing technology sales with proven ROI objection rebuttals. Turn skepticism about marketing ROI into confidence with data-driven examples that close deals.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The MarTech ROI objection framework used by leading marketing technology companies
            </p>
          </div>

          {/* Demo Preview */}
          <div className="max-w-5xl mx-auto mb-16">
            <DemoPreview />
          </div>
        </div>
      </section>

      {/* MarTech ROI Objection Scripts */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Proven MarTech ROI Objection Rebuttals
            </h2>
            <p className="text-xl text-gray-600">
              Handle marketing ROI concerns with confidence using these data-driven responses.
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
                  <h3 className="text-2xl font-bold">"Marketing ROI is too hard to measure"</h3>
                </div>
                <BarChart3 className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Marketing Prospect:</strong> "We've tried marketing tools before, but it's always been difficult to prove the ROI."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "That's a common challenge with traditional marketing tools. What makes our platform different is that it's built specifically to solve the attribution problem with closed-loop analytics."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Our platform tracks the entire customer journey from first touch to revenue, with multi-touch attribution that shows exactly which marketing activities are driving pipeline and revenue. We integrate directly with your CRM to connect marketing activities to actual deals."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "For example, [similar company] was struggling with the same ROI measurement challenge. Within 60 days of implementing our solution, they identified which channels were generating a 3.2x return and which were underperforming. They reallocated budget and saw a 41% increase in marketing-sourced revenue. Would that kind of clarity be valuable to you?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Differentiate:</strong> Closed-loop analytics
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Solution:</strong> Multi-touch attribution
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Example:</strong> 41% revenue increase
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
                  <h3 className="text-2xl font-bold">"We need to see ROI before we invest"</h3>
                </div>
                <TrendingUp className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Marketing Prospect:</strong> "We need to see ROI before we can commit to a significant MarTech investment."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "That's a reasonable approach. Many of our clients had the same concern before starting. That's why we've developed our ROI Accelerator Program specifically for new clients."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We start with a 90-day pilot focused on one high-impact marketing channel. We implement quickly, optimize based on early data, and deliver a detailed ROI analysis before you commit to the full implementation."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Our average client sees positive ROI within 47 days. For example, [similar company] started with just their email marketing channel in our pilot program. They saw a 28% increase in conversion rates and a 2.4x ROI within the first 60 days, which gave them confidence to expand to the full platform. Would a similar approach work for you?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Program:</strong> ROI Accelerator pilot
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Timeframe:</strong> 90-day focused approach
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Results:</strong> 47-day average to positive ROI
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
                  <h3 className="text-2xl font-bold">"Your competitors claim better ROI"</h3>
                </div>
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Marketing Prospect:</strong> "Your competitor is claiming they can deliver better ROI for a lower investment."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "I appreciate you sharing that. ROI claims can vary widely in MarTech, and it's important to understand how they're calculated. May I ask what specific ROI metrics they're promising?"
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "That's helpful context. What differentiates our ROI approach is that we measure it based on actual revenue impact, not just activity metrics like clicks or impressions. We also factor in the total cost of ownership, including implementation, training, and ongoing optimization."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We publish verified ROI case studies with third-party validation. For instance, [industry analyst] recently compared leading MarTech platforms and found our customers achieved 37% higher ROI over a 3-year period compared to our competitors. Would you like me to share that analysis and connect you with reference customers in your industry?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Understand:</strong> Competitor ROI claims
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Differentiate:</strong> Revenue vs. activity metrics
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Proof:</strong> Third-party validation
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
                  Turn ROI Skepticism into Marketing Confidence
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our AI provides real-time coaching for MarTech ROI objections with data-driven responses.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">ROI Calculators</h4>
                      <p className="text-gray-600">Channel-specific marketing ROI projections</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Attribution Models</h4>
                      <p className="text-gray-600">Multi-touch attribution visualizations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Case Studies</h4>
                      <p className="text-gray-600">Industry-specific ROI success stories</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">MarTech ROI Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">81%</div>
                    <p className="text-gray-600">ROI objections successfully addressed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">47</div>
                    <p className="text-gray-600">Days average to positive ROI</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">3.7x</div>
                    <p className="text-gray-600">Average first-year marketing ROI</p>
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
            <h2 className="text-3xl font-bold mb-6">Featured in Marketing Technology Resources</h2>
            <p className="text-lg text-gray-600">Leading MarTech experts recommend our ROI-focused approach</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://chiefmartec.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Chief MarTec
              </a>
              <p className="text-sm text-gray-500 mt-1">MarTech Landscape</p>
            </div>
            <div className="text-center">
              <a href="https://marketingland.com/library/martech" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                Marketing Land
              </a>
              <p className="text-sm text-gray-500 mt-1">MarTech News</p>
            </div>
            <div className="text-center">
              <a href="https://www.martechadvisor.com/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                MarTech Advisor
              </a>
              <p className="text-sm text-gray-500 mt-1">Technology Reviews</p>
            </div>
            <div className="text-center">
              <a href="https://www.gartner.com/en/marketing" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Gartner Marketing
              </a>
              <p className="text-sm text-gray-500 mt-1">Technology Research</p>
            </div>
            <div className="text-center">
              <a href="https://www.forrester.com/report/marketing-technology/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Forrester MarTech
              </a>
              <p className="text-sm text-gray-500 mt-1">Market Analysis</p>
            </div>
            <div className="text-center">
              <a href="https://www.marketingevolution.com/marketing-essentials/marketing-roi" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                Marketing Evolution
              </a>
              <p className="text-sm text-gray-500 mt-1">ROI Resources</p>
            </div>
            <div className="text-center">
              <a href="https://www.hubspot.com/marketing-statistics" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                HubSpot Marketing
              </a>
              <p className="text-sm text-gray-500 mt-1">ROI Statistics</p>
            </div>
            <div className="text-center">
              <a href="https://www.marketo.com/marketing-roi/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                Marketo ROI
              </a>
              <p className="text-sm text-gray-500 mt-1">Marketing Resources</p>
            </div>
            <div className="text-center">
              <a href="https://www.demandbase.com/resources/marketing-roi/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Demandbase
              </a>
              <p className="text-sm text-gray-500 mt-1">B2B Marketing ROI</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesforce.com/products/marketing-cloud/resources/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Salesforce Marketing
              </a>
              <p className="text-sm text-gray-500 mt-1">Cloud Resources</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Master MarTech ROI Objections
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Get AI-powered marketing ROI objection scripts and real-time coaching to close more deals with data-driven responses.
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

export default MartechROIObjectionRebuttalExamplesPage;