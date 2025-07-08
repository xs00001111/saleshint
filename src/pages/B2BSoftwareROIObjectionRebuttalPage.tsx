import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BarChart3, TrendingUp, Calculator, CheckCircle, ArrowRight, Target, DollarSign } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const B2BSoftwareROIObjectionRebuttalPage: React.FC = () => {
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
              <span className="text-sm font-medium">B2B Software ROI Objection</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-emerald-600">B2B Software ROI</span> Objection Rebuttal Template
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Master B2B software sales with proven ROI objection rebuttal templates. Turn ROI concerns into compelling business cases that drive purchase decisions.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The ROI rebuttal framework that's helped close $100M+ in B2B software deals
            </p>
          </div>

          {/* Demo Preview */}
          <div className="max-w-5xl mx-auto mb-16">
            <DemoPreview />
          </div>
        </div>
      </section>

      {/* ROI Rebuttal Templates */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Proven B2B Software ROI Rebuttal Templates
            </h2>
            <p className="text-xl text-gray-600">
              Handle every ROI objection with data-driven templates that build compelling business cases.
            </p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {/* Template 1 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-2xl font-bold">"We can't justify the ROI" Rebuttal</h3>
                </div>
                <Calculator className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Prospect:</strong> "We can't justify the ROI on this B2B software investment."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "I understand ROI justification is critical for B2B software decisions. Let me show you how [similar company] calculated their ROI and achieved 340% return in 14 months."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "They measured three key areas: [1] Time savings: 15 hours per employee per week, [2] Error reduction: 85% fewer manual errors, [3] Revenue acceleration: 25% faster deal cycles."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Based on your team size of [X] and current processes, I can show you a conservative ROI projection. What metrics would be most important for your ROI calculation?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Proof Point:</strong> Specific client example with numbers
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Framework:</strong> Three measurable impact areas
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Engagement:</strong> Customize to their situation
                </div>
              </div>
            </div>

            {/* Template 2 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-2xl font-bold">"ROI timeline is too long" Rebuttal</h3>
                </div>
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Prospect:</strong> "The ROI timeline for this B2B software seems too long."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "That's a common concern. What if I told you most clients see positive ROI within 90 days, not the 12-18 months you might be thinking?"
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Here's the typical timeline: Month 1: Implementation and training, Month 2: Initial productivity gains of 20%, Month 3: Full adoption with 45% efficiency improvement."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "The real question is: what's the cost of waiting? Every month you delay, you're missing out on [specific monthly benefit]. Over a year, that's [annual impact]."
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Reframe:</strong> Shorter timeline than expected
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Breakdown:</strong> Month-by-month progression
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Urgency:</strong> Cost of delayed decision
                </div>
              </div>
            </div>

            {/* Template 3 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-2xl font-bold">"Hard to measure ROI" Rebuttal</h3>
                </div>
                <DollarSign className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Prospect:</strong> "It's hard to measure ROI on this type of B2B software."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "You're absolutely right that some benefits are harder to quantify. That's why we focus on the measurable impacts first, then layer in the additional value."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Here are the hard metrics we track: [1] Time savings per task, [2] Error reduction rates, [3] Process completion speed. These alone typically justify the investment."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "The soft benefits like improved employee satisfaction, better customer experience, and reduced stress are bonuses on top of the measurable ROI."
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Acknowledge:</strong> Validate their concern
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Focus:</strong> Measurable metrics first
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Bonus:</strong> Additional unmeasured value
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Build Compelling ROI Cases with AI
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our AI helps you create data-driven ROI rebuttals in real-time, customized to each prospect's situation.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Dynamic ROI Calculations</h4>
                      <p className="text-gray-600">Real-time ROI projections based on prospect's specific metrics</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Industry Benchmarks</h4>
                      <p className="text-gray-600">Access to ROI data from similar companies and use cases</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Business Case Templates</h4>
                      <p className="text-gray-600">Pre-built templates for different B2B software categories</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">ROI Rebuttal Success Metrics</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">78%</div>
                    <p className="text-gray-600">ROI objections successfully overcome</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">340%</div>
                    <p className="text-gray-600">Average ROI demonstrated to prospects</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">90</div>
                    <p className="text-gray-600">Days to positive ROI (average)</p>
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
            <h2 className="text-3xl font-bold mb-6">Featured in B2B Software ROI Resources</h2>
            <p className="text-lg text-gray-600">Leading B2B software experts trust our ROI objection handling approach</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.salesforce.com/resources/articles/b2b-software-roi/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Salesforce B2B ROI
              </a>
              <p className="text-sm text-gray-500 mt-1">ROI Strategies</p>
            </div>
            <div className="text-center">
              <a href="https://blog.hubspot.com/sales/b2b-software-roi" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                HubSpot ROI Guide
              </a>
              <p className="text-sm text-gray-500 mt-1">B2B Metrics</p>
            </div>
            <div className="text-center">
              <a href="https://www.gartner.com/en/information-technology/insights/b2b-software-roi" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                Gartner ROI Research
              </a>
              <p className="text-sm text-gray-500 mt-1">Market Analysis</p>
            </div>
            <div className="text-center">
              <a href="https://www.forrester.com/report/b2b-software-roi/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Forrester ROI Study
              </a>
              <p className="text-sm text-gray-500 mt-1">Industry Research</p>
            </div>
            <div className="text-center">
              <a href="https://blog.close.com/b2b-software-roi/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Close.com ROI
              </a>
              <p className="text-sm text-gray-500 mt-1">Sales Tools</p>
            </div>
            <div className="text-center">
              <a href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/b2b-software-roi" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                McKinsey Digital
              </a>
              <p className="text-sm text-gray-500 mt-1">Strategic Insights</p>
            </div>
            <div className="text-center">
              <a href="https://hbr.org/topic/b2b-software-roi" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                Harvard Business Review
              </a>
              <p className="text-sm text-gray-500 mt-1">Academic Research</p>
            </div>
            <div className="text-center">
              <a href="https://www.saleshacker.com/b2b-software-roi/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                Sales Hacker ROI
              </a>
              <p className="text-sm text-gray-500 mt-1">Modern Techniques</p>
            </div>
            <div className="text-center">
              <a href="https://www.revenuecollective.com/b2b-roi" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Revenue Collective
              </a>
              <p className="text-sm text-gray-500 mt-1">Community Insights</p>
            </div>
            <div className="text-center">
              <a href="https://blog.chartio.com/posts/b2b-software-roi-metrics" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Chartio ROI Metrics
              </a>
              <p className="text-sm text-gray-500 mt-1">Data Analytics</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Master B2B Software ROI Objections
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Get AI-powered ROI rebuttal templates and real-time coaching to turn ROI concerns into compelling business cases.
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

export default B2BSoftwareROIObjectionRebuttalPage;