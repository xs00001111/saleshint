import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building2, DollarSign, TrendingUp, CheckCircle, ArrowRight, Users, Calculator } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const EnterpriseSoftwarePriceTooHighResponsePage: React.FC = () => {
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
              <Building2 className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Enterprise Software Pricing</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Enterprise Software <span className="text-emerald-600">"Price Too High"</span> Response Examples
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Master enterprise software sales with proven response examples for "price too high" objections. Turn pricing concerns into value conversations that close million-dollar deals.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The enterprise sales response framework used by Fortune 500 sales teams
            </p>
          </div>

          {/* Demo Preview */}
          <div className="max-w-5xl mx-auto mb-16">
            <DemoPreview />
          </div>
        </div>
      </section>

      {/* Response Examples */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Proven Enterprise "Price Too High" Response Examples
            </h2>
            <p className="text-xl text-gray-600">
              Handle enterprise pricing objections with confidence using these battle-tested responses.
            </p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {/* Response Example 1 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-2xl font-bold">The Total Cost of Ownership Response</h3>
                </div>
                <Calculator className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Prospect:</strong> "Your enterprise software is too expensive compared to [competitor]."
                </p>
                <p className="text-gray-700 italic mb-4">
                  "I understand price is a significant factor in enterprise decisions. When you're comparing costs, are you looking at just the license fees, or are you factoring in the total cost of ownership over 3-5 years?"
                </p>
                <p className="text-gray-700 italic mb-4">
                  "Most of our enterprise clients found that while our upfront investment is higher, the total cost of ownership is actually 40% lower due to reduced implementation time, fewer customizations needed, and lower ongoing maintenance costs."
                </p>
                <p className="text-gray-700 italic">
                  "Would it be helpful if I showed you a TCO analysis comparing both solutions over your typical software lifecycle?"
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Key Tactic:</strong> Reframe from price to total cost
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Evidence:</strong> Specific percentage and timeframe
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Next Step:</strong> Offer concrete analysis
                </div>
              </div>
            </div>

            {/* Response Example 2 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-2xl font-bold">The Risk Mitigation Response</h3>
                </div>
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Prospect:</strong> "The budget for this enterprise software is just too high."
                </p>
                <p className="text-gray-700 italic mb-4">
                  "I completely understand budget constraints are real. Can I ask what the cost would be if this project fails or gets delayed by 6-12 months?"
                </p>
                <p className="text-gray-700 italic mb-4">
                  "Our enterprise clients typically see the cost of delayed digital transformation as 3-5x higher than the initial software investment. For example, [specific client] calculated they were losing $2M per quarter in operational inefficiencies."
                </p>
                <p className="text-gray-700 italic">
                  "What would be the impact on your organization if you had to wait another year to solve [specific business problem]?"
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Key Tactic:</strong> Highlight cost of inaction
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Evidence:</strong> Client-specific example
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Next Step:</strong> Quantify their risk
                </div>
              </div>
            </div>

            {/* Response Example 3 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-2xl font-bold">The Strategic Value Response</h3>
                </div>
                <TrendingUp className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Prospect:</strong> "We need to justify this enterprise software cost to the board."
                </p>
                <p className="text-gray-700 italic mb-4">
                  "That's exactly the conversation our most successful clients had with their boards. What metrics does your board typically use to evaluate enterprise technology investments?"
                </p>
                <p className="text-gray-700 italic mb-4">
                  "I can provide you with a board-ready business case that shows how [similar company] achieved 300% ROI in 18 months, including specific KPIs like reduced operational costs, increased productivity, and faster time-to-market."
                </p>
                <p className="text-gray-700 italic">
                  "Would it be helpful if I connected you with their CTO to discuss their experience and board presentation?"
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Key Tactic:</strong> Provide board-level support
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Evidence:</strong> Specific ROI and timeline
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Next Step:</strong> Peer reference connection
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
                  Master Enterprise Pricing Conversations
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our AI provides real-time coaching for enterprise software pricing objections with context-aware responses.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Enterprise-Specific Scripts</h4>
                      <p className="text-gray-600">Responses tailored for complex enterprise sales cycles</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">ROI Calculators</h4>
                      <p className="text-gray-600">Dynamic tools to demonstrate enterprise value proposition</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Stakeholder Mapping</h4>
                      <p className="text-gray-600">AI guidance for multi-stakeholder enterprise decisions</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Enterprise Sales Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">68%</div>
                    <p className="text-gray-600">Enterprise deals closed after pricing objections</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">$2.3M</div>
                    <p className="text-gray-600">Average enterprise deal size</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">4.2x</div>
                    <p className="text-gray-600">Faster enterprise sales cycles</p>
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
            <h2 className="text-3xl font-bold mb-6">Featured in Enterprise Sales Resources</h2>
            <p className="text-lg text-gray-600">Leading enterprise sales experts recommend our pricing objection strategies</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.salesforce.com/resources/articles/enterprise-sales/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Salesforce Enterprise
              </a>
              <p className="text-sm text-gray-500 mt-1">Sales Strategies</p>
            </div>
            <div className="text-center">
              <a href="https://blog.hubspot.com/sales/enterprise-sales-process" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                HubSpot Enterprise
              </a>
              <p className="text-sm text-gray-500 mt-1">Sales Process</p>
            </div>
            <div className="text-center">
              <a href="https://www.gartner.com/en/sales/insights/enterprise-software" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                Gartner Research
              </a>
              <p className="text-sm text-gray-500 mt-1">Market Analysis</p>
            </div>
            <div className="text-center">
              <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/enterprise-sales" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                McKinsey Insights
              </a>
              <p className="text-sm text-gray-500 mt-1">Strategic Guidance</p>
            </div>
            <div className="text-center">
              <a href="https://hbr.org/topic/enterprise-sales" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Harvard Business Review
              </a>
              <p className="text-sm text-gray-500 mt-1">Academic Research</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesforce.com/resources/articles/b2b-enterprise/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                B2B Enterprise Guide
              </a>
              <p className="text-sm text-gray-500 mt-1">Best Practices</p>
            </div>
            <div className="text-center">
              <a href="https://blog.close.com/enterprise-sales/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                Close.com Enterprise
              </a>
              <p className="text-sm text-gray-500 mt-1">Sales Tools</p>
            </div>
            <div className="text-center">
              <a href="https://www.saleshacker.com/enterprise-sales/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                Sales Hacker
              </a>
              <p className="text-sm text-gray-500 mt-1">Modern Techniques</p>
            </div>
            <div className="text-center">
              <a href="https://www.revenuecollective.com/enterprise-sales" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Revenue Collective
              </a>
              <p className="text-sm text-gray-500 mt-1">Community Insights</p>
            </div>
            <div className="text-center">
              <a href="https://blog.outreach.io/enterprise-sales/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Outreach Blog
              </a>
              <p className="text-sm text-gray-500 mt-1">Sales Automation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Close More Enterprise Software Deals
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Get AI-powered coaching and proven response examples to handle enterprise pricing objections with confidence.
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

export default EnterpriseSoftwarePriceTooHighResponsePage;