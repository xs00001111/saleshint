import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, DollarSign, TrendingUp, Target, CheckCircle, ArrowRight, BarChart3, Users } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const ValueSellingFrameworkForNonTechnicalProductsPage: React.FC = () => {
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
              <DollarSign className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Value Selling Framework</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-emerald-600">Value Selling Framework</span> for Non-Technical Products
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Master value-based selling with a proven framework designed for non-technical products. Focus on business outcomes and customer value to close more deals at higher prices.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The value selling framework used by top-performing sales teams across industries
            </p>
          </div>

          {/* Demo Preview */}
          <div className="max-w-5xl mx-auto mb-16">
            <DemoPreview />
          </div>
        </div>
      </section>

      {/* Value Selling Framework */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              The Complete Value Selling Framework
            </h2>
            <p className="text-xl text-gray-600">
              A step-by-step approach to value-based selling for non-technical products.
            </p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-2xl font-bold">Value Discovery</h3>
                </div>
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Framework Step:</strong> Identify the prospect's specific business challenges and desired outcomes
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Before I tell you about our solution, I'd like to understand more about your business. What are the top 2-3 challenges you're facing in [relevant area]?"
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "You mentioned [specific challenge]. Can you help me understand the impact this is having on your business? What happens if this challenge isn't addressed in the next 6-12 months?"
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "If we could solve [specific challenge] and help you achieve [desired outcome], what would that mean for your [business/department/team]? How would you measure success?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Focus:</strong> Business challenges first
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Depth:</strong> Impact and consequences
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Vision:</strong> Success metrics and outcomes
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-2xl font-bold">Value Quantification</h3>
                </div>
                <BarChart3 className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Framework Step:</strong> Translate business challenges into specific financial impact
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Based on what you've shared, let's quantify the impact of [specific challenge]. You mentioned it takes your team about [X hours] per [timeframe] on [manual process]. With [Y people] involved at an average cost of [$Z per hour], that's costing approximately [$amount] annually just in direct labor."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Beyond the direct costs, you also mentioned [indirect impact] which affects [business area]. Based on industry benchmarks and what we've seen with similar companies, this typically represents an additional [$amount] in [lost revenue/opportunity cost/risk exposure]."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "In total, we estimate that these challenges are costing your business approximately [$total amount] annually. Does that align with your understanding of the situation? Would you add anything to this calculation?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Direct:</strong> Labor and hard costs
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Indirect:</strong> Opportunity costs and risks
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Validation:</strong> Prospect confirmation
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-2xl font-bold">Value Proposition</h3>
                </div>
                <TrendingUp className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Framework Step:</strong> Present your solution in terms of specific value delivered
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Now that we understand the [$amount] impact of these challenges, let me show you how our solution addresses them. Our [product/service] helps you [key value proposition] by [primary capability]."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Based on what you've shared and our experience with similar companies, we project that implementing our solution would [specific outcome 1] by [X%], [specific outcome 2] by [Y%], and [specific outcome 3] by [Z%]. This represents a total value of approximately [$amount] annually."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "With an investment of [$price], you're looking at an ROI of [percentage] and a payback period of just [timeframe]. Our customers typically see initial results within [timeframe] and full value realization within [timeframe]. How does this potential return align with your expectations?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Connection:</strong> Solution to specific challenges
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Projection:</strong> Expected outcomes with metrics
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">ROI:</strong> Clear financial return calculation
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
                  Sell on Value, Not Features or Price
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our AI provides real-time coaching for value-based selling with business outcome focus.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Value Discovery Questions</h4>
                      <p className="text-gray-600">Uncover business challenges and desired outcomes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Value Calculators</h4>
                      <p className="text-gray-600">Quantify the financial impact of your solution</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">ROI Models</h4>
                      <p className="text-gray-600">Demonstrate clear financial return on investment</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Value Selling Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">35%</div>
                    <p className="text-gray-600">Higher average deal size</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">27%</div>
                    <p className="text-gray-600">Shorter sales cycles</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">68%</div>
                    <p className="text-gray-600">Fewer price objections</p>
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
            <h2 className="text-3xl font-bold mb-6">Featured in Value Selling Resources</h2>
            <p className="text-lg text-gray-600">Leading sales experts recommend our value-based selling approach</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.salesforce.com/resources/articles/value-selling/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Salesforce
              </a>
              <p className="text-sm text-gray-500 mt-1">Value Selling</p>
            </div>
            <div className="text-center">
              <a href="https://blog.hubspot.com/sales/value-selling" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                HubSpot Sales
              </a>
              <p className="text-sm text-gray-500 mt-1">Value Framework</p>
            </div>
            <div className="text-center">
              <a href="https://www.gong.io/blog/value-selling/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                Gong.io
              </a>
              <p className="text-sm text-gray-500 mt-1">Value Analysis</p>
            </div>
            <div className="text-center">
              <a href="https://www.saleshacker.com/value-selling/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Sales Hacker
              </a>
              <p className="text-sm text-gray-500 mt-1">Value Strategies</p>
            </div>
            <div className="text-center">
              <a href="https://www.valueselling.com/blog/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                ValueSelling Associates
              </a>
              <p className="text-sm text-gray-500 mt-1">Value Methodology</p>
            </div>
            <div className="text-center">
              <a href="https://www.richardson.com/blog/value-selling/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                Richardson
              </a>
              <p className="text-sm text-gray-500 mt-1">Value Training</p>
            </div>
            <div className="text-center">
              <a href="https://www.corporatevisions.com/resources/articles/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                Corporate Visions
              </a>
              <p className="text-sm text-gray-500 mt-1">Value Conversations</p>
            </div>
            <div className="text-center">
              <a href="https://www.jbarrows.com/blog/value-selling/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                JBarrows Sales
              </a>
              <p className="text-sm text-gray-500 mt-1">Value Frameworks</p>
            </div>
            <div className="text-center">
              <a href="https://www.challenger.com/blog/value-selling/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Challenger
              </a>
              <p className="text-sm text-gray-500 mt-1">Value Approach</p>
            </div>
            <div className="text-center">
              <a href="https://www.force-management.com/blog/tag/value-selling/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Force Management
              </a>
              <p className="text-sm text-gray-500 mt-1">Value Messaging</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Master Value-Based Selling Today
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Get AI-powered value selling frameworks and real-time coaching to close more deals at higher prices.
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

export default ValueSellingFrameworkForNonTechnicalProductsPage;