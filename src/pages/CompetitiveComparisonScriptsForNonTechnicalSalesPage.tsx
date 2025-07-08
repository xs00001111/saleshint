import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BarChart3, TrendingUp, Target, CheckCircle, ArrowRight, Users, Award } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const CompetitiveComparisonScriptsForNonTechnicalSalesPage: React.FC = () => {
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
              <span className="text-sm font-medium">Competitive Comparison</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-emerald-600">Competitive Comparison Scripts</span> for Non-Technical Sales
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Master competitive selling with proven comparison scripts designed for non-technical sales professionals. Position your product effectively against competitors without getting lost in technical details.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The competitive comparison framework used by top-performing sales teams
            </p>
          </div>

          {/* Demo Preview */}
          <div className="max-w-5xl mx-auto mb-16">
            <DemoPreview />
          </div>
        </div>
      </section>

      {/* Competitive Comparison Scripts */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Proven Competitive Comparison Scripts
            </h2>
            <p className="text-xl text-gray-600">
              Position your product effectively against competitors with these non-technical comparison scripts.
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
                  <h3 className="text-2xl font-bold">The Value-Based Comparison Approach</h3>
                </div>
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Competitive Scenario:</strong> "How do you compare to [Competitor X]?"
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "That's a great question. While both solutions address [core need], we take a different approach that our customers find more valuable. Let me explain the key differences in terms of the outcomes you can expect."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "First, in terms of [key business outcome 1], [Competitor X] focuses on [their approach], which typically results in [limitation]. Our approach is [your approach], which delivers [specific superior outcome] for our customers. For example, [similar customer] saw [specific result] within [timeframe]."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Second, when it comes to [key business outcome 2], our solution provides [unique advantage] that [Competitor X] doesn't offer. This means you'll be able to [specific benefit] while their customers cannot. Which of these outcome differences would have the biggest impact on your business goals?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Focus:</strong> Outcomes, not features
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Evidence:</strong> Customer success examples
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Engagement:</strong> Impact-focused question
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
                  <h3 className="text-2xl font-bold">The Customer Experience Comparison</h3>
                </div>
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Competitive Scenario:</strong> "We're also looking at [Competitor Y]. Why should we choose you instead?"
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "I appreciate your transparency. Many of our customers evaluated [Competitor Y] before choosing us. The biggest difference they report is in the overall experience - both during implementation and everyday use."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "For implementation, [Competitor Y] typically takes [timeframe] and requires [resources]. Our customers are up and running in [shorter timeframe] with [fewer resources]. For example, [customer example] was fully implemented in just [timeframe] with minimal IT involvement."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "For everyday use, our customers report [specific usability advantage] compared to [Competitor Y]'s approach. This translates to [specific business benefit] for your team. We have a 97% customer satisfaction rate versus their published 78% rate. Would you like to hear directly from customers who switched from them to us?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Perspective:</strong> Customer experience focus
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Contrast:</strong> Implementation comparison
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Proof:</strong> Satisfaction metrics and references
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
                  <h3 className="text-2xl font-bold">The Total Value Comparison</h3>
                </div>
                <TrendingUp className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Competitive Scenario:</strong> "[Competitor Z] is offering a lower price. Can you match it?"
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "I understand price is important. Rather than just looking at the sticker price, let's compare the total value and return on investment between our solution and [Competitor Z]."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "While their initial price may be lower, there are several factors to consider: First, they charge extra for [specific features/services] that are included in our price. Second, our solution delivers [specific additional value] that theirs doesn't provide. Third, our customers typically see [specific ROI advantage] compared to their customers."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "When you factor in these differences, our customers find that our total cost of ownership is actually [percentage] lower over [timeframe], while delivering [percentage] more value. I've prepared a side-by-side value comparison that illustrates this. Would you like me to walk you through it?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Reframe:</strong> Price to total value
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Factors:</strong> Hidden costs and additional value
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Proof:</strong> Side-by-side value comparison
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
                  Win More Competitive Deals Without Technical Jargon
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our AI provides real-time coaching for competitive selling with business-focused comparisons.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Competitor Battlecards</h4>
                      <p className="text-gray-600">Up-to-date competitive intelligence in simple terms</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Value Comparisons</h4>
                      <p className="text-gray-600">Side-by-side business value visualizations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Differentiation Strategies</h4>
                      <p className="text-gray-600">Frameworks for positive competitive positioning</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Competitive Win Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">72%</div>
                    <p className="text-gray-600">Higher competitive win rate</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">3.5x</div>
                    <p className="text-gray-600">More confident in competitive deals</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">35%</div>
                    <p className="text-gray-600">Fewer price discounts needed</p>
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
            <h2 className="text-3xl font-bold mb-6">Featured in Competitive Selling Resources</h2>
            <p className="text-lg text-gray-600">Leading sales experts recommend our competitive comparison approach</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.salesforce.com/resources/articles/competitive-selling/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Salesforce
              </a>
              <p className="text-sm text-gray-500 mt-1">Competitive Selling</p>
            </div>
            <div className="text-center">
              <a href="https://blog.hubspot.com/sales/competitive-selling" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                HubSpot Sales
              </a>
              <p className="text-sm text-gray-500 mt-1">Competitive Tactics</p>
            </div>
            <div className="text-center">
              <a href="https://www.gong.io/blog/competitive-selling/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                Gong.io
              </a>
              <p className="text-sm text-gray-500 mt-1">Competitive Analysis</p>
            </div>
            <div className="text-center">
              <a href="https://www.saleshacker.com/competitive-selling/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Sales Hacker
              </a>
              <p className="text-sm text-gray-500 mt-1">Competitive Strategies</p>
            </div>
            <div className="text-center">
              <a href="https://www.crayon.co/blog/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Crayon
              </a>
              <p className="text-sm text-gray-500 mt-1">Competitive Intelligence</p>
            </div>
            <div className="text-center">
              <a href="https://www.klue.com/blog" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                Klue
              </a>
              <p className="text-sm text-gray-500 mt-1">Competitive Enablement</p>
            </div>
            <div className="text-center">
              <a href="https://www.richardson.com/blog/competitive-selling/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                Richardson
              </a>
              <p className="text-sm text-gray-500 mt-1">Competitive Training</p>
            </div>
            <div className="text-center">
              <a href="https://www.jbarrows.com/blog/competitive-selling/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                JBarrows Sales
              </a>
              <p className="text-sm text-gray-500 mt-1">Competitive Frameworks</p>
            </div>
            <div className="text-center">
              <a href="https://www.challenger.com/blog/competitive-differentiation/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Challenger
              </a>
              <p className="text-sm text-gray-500 mt-1">Differentiation Strategies</p>
            </div>
            <div className="text-center">
              <a href="https://www.winningbydesign.com/blog/competitive-selling" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Winning by Design
              </a>
              <p className="text-sm text-gray-500 mt-1">Competitive Blueprints</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Master Competitive Selling Today
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Get AI-powered competitive comparison scripts and real-time coaching to win more competitive deals without technical jargon.
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

export default CompetitiveComparisonScriptsForNonTechnicalSalesPage;