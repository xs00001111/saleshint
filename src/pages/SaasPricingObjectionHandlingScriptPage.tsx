import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, DollarSign, TrendingUp, Calculator, CheckCircle, ArrowRight, Play, FileText } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const SaasPricingObjectionHandlingScriptPage: React.FC = () => {
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
              <span className="text-sm font-medium">SaaS Pricing Objection Script</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-emerald-600">SaaS Pricing Objection</span> Handling Script That Closes Deals
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Master the art of handling SaaS pricing objections with proven scripts, real-time AI coaching, and live call examples that help you turn price concerns into closed deals.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The complete SaaS pricing objection handling system used by top sales teams
            </p>
          </div>

          {/* Demo Preview */}
          <div className="max-w-5xl mx-auto mb-16">
            <DemoPreview />
          </div>
        </div>
      </section>

      {/* Pricing Objection Scripts */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Proven SaaS Pricing Objection Scripts
            </h2>
            <p className="text-xl text-gray-600">
              Handle every pricing objection with confidence using these battle-tested scripts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Script 1 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <Play className="h-6 w-6 text-emerald-600 mr-3" />
                <h3 className="text-xl font-bold">"It's too expensive"</h3>
              </div>
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 italic mb-4">"I understand price is a concern. Can I ask what you're comparing us to?"</p>
                <p className="text-gray-700 italic mb-4">"Most of our clients found that the cost of not having a solution like ours was actually much higher. For example, [specific ROI example]."</p>
                <p className="text-gray-700 italic">"What would it be worth to your team to [specific benefit]?"</p>
              </div>
              <div className="text-sm text-gray-600">
                <strong>Key:</strong> Reframe from cost to value and get them talking about their pain points.
              </div>
            </div>

            {/* Script 2 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <Play className="h-6 w-6 text-emerald-600 mr-3" />
                <h3 className="text-xl font-bold">"We need to think about it"</h3>
              </div>
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 italic mb-4">"I completely understand. What specifically would you like to think about?"</p>
                <p className="text-gray-700 italic mb-4">"Is it the price, the implementation, or something else I can help clarify?"</p>
                <p className="text-gray-700 italic">"What would need to happen for you to feel confident moving forward?"</p>
              </div>
              <div className="text-sm text-gray-600">
                <strong>Key:</strong> Uncover the real objection behind the stall tactic.
              </div>
            </div>

            {/* Script 3 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <Play className="h-6 w-6 text-emerald-600 mr-3" />
                <h3 className="text-xl font-bold">"Budget is tight this quarter"</h3>
              </div>
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 italic mb-4">"I hear that a lot. What's your budget looking like for next quarter?"</p>
                <p className="text-gray-700 italic mb-4">"In the meantime, what's the cost of waiting? Our clients typically see [specific metric] improvement in the first 30 days."</p>
                <p className="text-gray-700 italic">"Would it make sense to start with a pilot program to show ROI before the full rollout?"</p>
              </div>
              <div className="text-sm text-gray-600">
                <strong>Key:</strong> Create urgency and offer alternative solutions.
              </div>
            </div>

            {/* Script 4 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <Play className="h-6 w-6 text-emerald-600 mr-3" />
                <h3 className="text-xl font-bold">"Your competitor is cheaper"</h3>
              </div>
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 italic mb-4">"That's interesting. What attracted you to them initially?"</p>
                <p className="text-gray-700 italic mb-4">"Price is definitely important, but what other factors are you considering in your decision?"</p>
                <p className="text-gray-700 italic">"Let me show you why our clients chose us over [competitor] and the results they've seen..."</p>
              </div>
              <div className="text-sm text-gray-600">
                <strong>Key:</strong> Shift focus from price to value differentiation.
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
                  Turn Pricing Objections into ROI Conversations
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our AI helps you handle pricing objections in real-time with contextual scripts and ROI calculations.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Real-Time Script Suggestions</h4>
                      <p className="text-gray-600">Get the perfect response to any pricing objection instantly</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Dynamic ROI Calculations</h4>
                      <p className="text-gray-600">Show prospects their potential return on investment in real-time</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Competitive Positioning</h4>
                      <p className="text-gray-600">AI-powered responses to competitor pricing comparisons</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">SaaS Pricing Objection Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">73%</div>
                    <p className="text-gray-600">Pricing objections successfully overcome</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">2.3x</div>
                    <p className="text-gray-600">Faster objection resolution</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">45%</div>
                    <p className="text-gray-600">Higher close rates after objections</p>
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
            <h2 className="text-3xl font-bold mb-6">Featured in SaaS Sales Resources</h2>
            <p className="text-lg text-gray-600">Leading SaaS sales experts recommend our pricing objection handling approach</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.salesforce.com/resources/articles/saas-pricing/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Salesforce SaaS
              </a>
              <p className="text-sm text-gray-500 mt-1">Pricing Strategies</p>
            </div>
            <div className="text-center">
              <a href="https://blog.hubspot.com/sales/saas-pricing-objections" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                HubSpot SaaS Sales
              </a>
              <p className="text-sm text-gray-500 mt-1">Objection Handling</p>
            </div>
            <div className="text-center">
              <a href="https://www.saleshacker.com/saas-pricing-objections/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                Sales Hacker
              </a>
              <p className="text-sm text-gray-500 mt-1">SaaS Sales Tips</p>
            </div>
            <div className="text-center">
              <a href="https://blog.close.com/saas-pricing/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Close.com SaaS
              </a>
              <p className="text-sm text-gray-500 mt-1">Pricing Models</p>
            </div>
            <div className="text-center">
              <a href="https://www.priceintelligently.com/blog/saas-pricing-objections" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Price Intelligently
              </a>
              <p className="text-sm text-gray-500 mt-1">Pricing Psychology</p>
            </div>
            <div className="text-center">
              <a href="https://blog.chartio.com/posts/saas-pricing-strategies" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                Chartio Blog
              </a>
              <p className="text-sm text-gray-500 mt-1">SaaS Metrics</p>
            </div>
            <div className="text-center">
              <a href="https://www.profitwell.com/blog/saas-pricing-objections" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                ProfitWell
              </a>
              <p className="text-sm text-gray-500 mt-1">Pricing Research</p>
            </div>
            <div className="text-center">
              <a href="https://blog.baremetrics.com/saas-pricing-objections" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                Baremetrics
              </a>
              <p className="text-sm text-gray-500 mt-1">SaaS Analytics</p>
            </div>
            <div className="text-center">
              <a href="https://www.revenuecollective.com/saas-pricing" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Revenue Collective
              </a>
              <p className="text-sm text-gray-500 mt-1">Community Insights</p>
            </div>
            <div className="text-center">
              <a href="https://blog.paddle.com/saas-pricing-objections" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Paddle Blog
              </a>
              <p className="text-sm text-gray-500 mt-1">Payment Insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Master SaaS Pricing Objections Today
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Get real-time AI coaching and proven scripts to handle any pricing objection and close more SaaS deals.
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

export default SaasPricingObjectionHandlingScriptPage;