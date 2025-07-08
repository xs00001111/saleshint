import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, TrendingUp, CheckCircle, ArrowRight, AlertTriangle, DollarSign } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const CallMeNextQuarterTimingObjectionScriptPage: React.FC = () => {
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
              <Calendar className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Timing Objection Script</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-emerald-600">"Call Me Next Quarter"</span> Timing Objection Scripts (B2B)
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Master the most common B2B timing objection with proven scripts. Turn "call me next quarter" into "let's start now" and close more deals without unnecessary delays.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The timing objection framework that's helped close $75M+ in deals that were initially delayed
            </p>
          </div>

          {/* Demo Preview */}
          <div className="max-w-5xl mx-auto mb-16">
            <DemoPreview />
          </div>
        </div>
      </section>

      {/* Timing Objection Scripts */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Proven "Call Me Next Quarter" Objection Scripts
            </h2>
            <p className="text-xl text-gray-600">
              Handle timing objections with confidence using these battle-tested responses.
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
                  <h3 className="text-2xl font-bold">The Cost of Waiting Approach</h3>
                </div>
                <DollarSign className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>B2B Prospect:</strong> "This looks interesting, but let's touch base next quarter when we have more budget."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "I understand budget timing is important. Before we put this on hold, I'm curious - what would be the cost to your business if you wait 3 months to implement this solution?"
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Based on what you've shared about [specific pain point], our analysis shows you're losing approximately $[amount] per month in [productivity/revenue/efficiency]. That's $[amount x 3] over the next quarter."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Many of our clients found that the cost of waiting far exceeded the investment. Would it make sense to explore a phased implementation that could fit within your current budget constraints while preventing these ongoing losses?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Question:</strong> Cost of waiting calculation
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Quantify:</strong> Specific monthly losses
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Alternative:</strong> Phased implementation
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
                  <h3 className="text-2xl font-bold">The Competitive Advantage Approach</h3>
                </div>
                <TrendingUp className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>B2B Prospect:</strong> "We're interested, but we'll need to revisit this next quarter."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "I appreciate your interest. I'm curious - are your competitors facing similar challenges with [specific pain point]?"
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "The reason I ask is that [competitor in their industry] implemented our solution last quarter and has already seen a [specific improvement]. They're now able to [competitive advantage]."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "If you wait until next quarter, that's another 90 days where they're gaining ground. What if we started with a pilot program now that requires minimal resources but still gives you that competitive edge?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Explore:</strong> Competitive landscape
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Example:</strong> Competitor success story
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Urgency:</strong> Competitive disadvantage
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
                  <h3 className="text-2xl font-bold">The Risk Mitigation Approach</h3>
                </div>
                <AlertTriangle className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>B2B Prospect:</strong> "We like what we see, but we'll need to push this to next quarter."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "I understand timing is important. When we spoke earlier, you mentioned that [specific risk or pain point] is costing your team significant [time/money/resources]. What's your plan to address that risk in the meantime?"
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Many of our clients initially planned to wait, but after calculating the risk exposure of $[amount] per month and the potential for [specific negative outcome], they found a way to move forward sooner."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "What if we could structure an agreement that starts with addressing just your highest-risk areas now, with minimal upfront investment, and then expand in the next quarter? This would significantly reduce your immediate risk exposure while respecting your budget cycle."
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Question:</strong> Interim risk management
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Example:</strong> Risk calculation from clients
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Solution:</strong> Phased risk mitigation
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
                  Turn Timing Delays into Immediate Action
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our AI provides real-time coaching for timing objections with context-aware responses.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Cost Calculators</h4>
                      <p className="text-gray-600">Instant ROI and cost-of-waiting calculations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Competitive Intelligence</h4>
                      <p className="text-gray-600">Industry-specific competitive advantage data</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Flexible Solutions</h4>
                      <p className="text-gray-600">Alternative implementation and payment structures</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Timing Objection Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">72%</div>
                    <p className="text-gray-600">Timing objections overcome</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">45</div>
                    <p className="text-gray-600">Days average sales cycle reduction</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">$75M+</div>
                    <p className="text-gray-600">Revenue from "next quarter" deals</p>
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
            <h2 className="text-3xl font-bold mb-6">Featured in B2B Sales Resources</h2>
            <p className="text-lg text-gray-600">Leading B2B sales experts recommend our timing objection approach</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.salesforce.com/resources/articles/sales-objections/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Salesforce Objections
              </a>
              <p className="text-sm text-gray-500 mt-1">Handling Guide</p>
            </div>
            <div className="text-center">
              <a href="https://blog.hubspot.com/sales/handling-sales-objections" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                HubSpot Sales
              </a>
              <p className="text-sm text-gray-500 mt-1">Objection Tactics</p>
            </div>
            <div className="text-center">
              <a href="https://www.gartner.com/en/sales/insights/b2b-buying-journey" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                Gartner B2B
              </a>
              <p className="text-sm text-gray-500 mt-1">Buying Journey</p>
            </div>
            <div className="text-center">
              <a href="https://www.forrester.com/report/b2b-sales/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Forrester B2B
              </a>
              <p className="text-sm text-gray-500 mt-1">Sales Research</p>
            </div>
            <div className="text-center">
              <a href="https://www.saleshacker.com/sales-objection-handling/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Sales Hacker
              </a>
              <p className="text-sm text-gray-500 mt-1">Objection Handling</p>
            </div>
            <div className="text-center">
              <a href="https://blog.close.com/sales-objections/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                Close.com
              </a>
              <p className="text-sm text-gray-500 mt-1">Objection Scripts</p>
            </div>
            <div className="text-center">
              <a href="https://www.sandler.com/blog/sales-objections/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                Sandler Training
              </a>
              <p className="text-sm text-gray-500 mt-1">Sales Methodology</p>
            </div>
            <div className="text-center">
              <a href="https://www.jbarrows.com/blog/category/objection-handling/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                JBarrows Sales
              </a>
              <p className="text-sm text-gray-500 mt-1">Training Resources</p>
            </div>
            <div className="text-center">
              <a href="https://www.challenger.com/blog/topics/objection-handling" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Challenger
              </a>
              <p className="text-sm text-gray-500 mt-1">Sales Approach</p>
            </div>
            <div className="text-center">
              <a href="https://www.richardson.com/blog/category/objection-handling/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Richardson
              </a>
              <p className="text-sm text-gray-500 mt-1">Sales Performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Master Timing Objections Today
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Get AI-powered timing objection scripts and real-time coaching to close more deals without unnecessary delays.
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

export default CallMeNextQuarterTimingObjectionScriptPage;