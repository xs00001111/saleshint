import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Factory, DollarSign, TrendingDown, CheckCircle, ArrowRight, Calendar, AlertTriangle } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const ManufacturingSoftwareBudgetFreezeObjectionPage: React.FC = () => {
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
              <Factory className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Manufacturing Budget Freeze</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-emerald-600">Manufacturing Software Budget Freeze</span> Sales Objection Scripts
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Master manufacturing sales with proven budget freeze objection scripts. Turn economic uncertainty into urgency and close deals even when budgets are tight in the manufacturing sector.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The manufacturing budget objection framework that's helped close $50M+ in deals during economic downturns
            </p>
          </div>

          {/* Demo Preview */}
          <div className="max-w-5xl mx-auto mb-16">
            <DemoPreview />
          </div>
        </div>
      </section>

      {/* Budget Freeze Objection Scripts */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Proven Manufacturing Budget Freeze Objection Scripts
            </h2>
            <p className="text-xl text-gray-600">
              Handle every budget freeze scenario with confidence using these manufacturing-specific responses.
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
                  <h3 className="text-2xl font-bold">"All software spending is frozen this year"</h3>
                </div>
                <TrendingDown className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Manufacturing Prospect:</strong> "We've implemented a complete freeze on all software spending due to economic uncertainty."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "I completely understand the need for fiscal responsibility in manufacturing right now. Can I ask what's driving the freeze - is it cash flow, uncertainty about demand, or directive from corporate?"
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "The reason I ask is that [similar manufacturer] was in the same position last year, but they found that our solution actually improved their cash flow by reducing waste by 15% and cutting overtime costs."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "What if I could show you how this investment could pay for itself in 90 days through operational savings? Would that change the conversation?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Understand:</strong> Identify freeze drivers
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Proof:</strong> Similar manufacturer success
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Reframe:</strong> Investment vs. expense
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
                  <h3 className="text-2xl font-bold">"We'll revisit this next fiscal year"</h3>
                </div>
                <Calendar className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Manufacturing Prospect:</strong> "This looks interesting, but we'll need to wait until next fiscal year when budgets reset."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "I appreciate you being upfront about timing. When does your fiscal year start? And what would need to happen between now and then for this to be a priority?"
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Here's what I'm thinking - if we wait 8 months, you're missing out on $200K in potential savings based on your production volume. That's enough to fund this project twice over."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Most manufacturers find emergency budget for equipment repairs. What if we could position this as preventive maintenance for your operations? Would that open up different budget categories?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Timeline:</strong> Understand fiscal calendar
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Cost:</strong> Quantify waiting cost
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Alternative:</strong> Different budget categories
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
                  <h3 className="text-2xl font-bold">"We can't justify any new expenses right now"</h3>
                </div>
                <AlertTriangle className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Manufacturing Prospect:</strong> "With supply chain issues and rising costs, we can't justify any new expenses that aren't absolutely critical."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Those are exactly the challenges our solution addresses. Supply chain disruptions and rising costs are why manufacturers need better visibility and control more than ever."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Let me ask this - what's the cost of a single production line shutdown? Or missing a critical delivery deadline? Our software prevents those scenarios."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Think of this as insurance against operational disruptions. [Manufacturing client] avoided $500K in downtime costs last quarter alone. What would that mean for your operation?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Relevance:</strong> Address current challenges
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Risk:</strong> Cost of inaction
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Insurance:</strong> Prevent bigger losses
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
                  Turn Budget Constraints into Competitive Advantages
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our AI provides real-time coaching for manufacturing budget objections with industry-specific ROI calculations.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">ROI Calculators</h4>
                      <p className="text-gray-600">Manufacturing-specific ROI models showing operational savings</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Budget Alternatives</h4>
                      <p className="text-gray-600">AI guidance for finding alternative budget sources</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Risk Mitigation</h4>
                      <p className="text-gray-600">Scripts to position software as operational insurance</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Manufacturing Budget Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">67%</div>
                    <p className="text-gray-600">Budget freeze objections overcome</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">90</div>
                    <p className="text-gray-600">Days average payback period</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">$500K</div>
                    <p className="text-gray-600">Average operational savings</p>
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
            <h2 className="text-3xl font-bold mb-6">Featured in Manufacturing Finance Resources</h2>
            <p className="text-lg text-gray-600">Leading manufacturing finance experts recommend our budget objection approach</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.manufacturingtomorrow.com/article/2023/01/manufacturing-budgets-2023/18234" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Manufacturing Tomorrow
              </a>
              <p className="text-sm text-gray-500 mt-1">Budget Planning</p>
            </div>
            <div className="text-center">
              <a href="https://www.industryweek.com/finance" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                IndustryWeek Finance
              </a>
              <p className="text-sm text-gray-500 mt-1">Financial Strategy</p>
            </div>
            <div className="text-center">
              <a href="https://www.plantengineering.com/topics/business-financial/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                Plant Engineering
              </a>
              <p className="text-sm text-gray-500 mt-1">Business Finance</p>
            </div>
            <div className="text-center">
              <a href="https://www.automationworld.com/factory/article/13316495/manufacturing-budget-planning" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Automation World
              </a>
              <p className="text-sm text-gray-500 mt-1">Budget Planning</p>
            </div>
            <div className="text-center">
              <a href="https://www.manufacturing.net/operations/blog/13244162/manufacturing-budgets" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Manufacturing.net
              </a>
              <p className="text-sm text-gray-500 mt-1">Operations Finance</p>
            </div>
            <div className="text-center">
              <a href="https://www.mckinsey.com/industries/advanced-electronics/our-insights/manufacturing" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                McKinsey Manufacturing
              </a>
              <p className="text-sm text-gray-500 mt-1">Strategic Insights</p>
            </div>
            <div className="text-center">
              <a href="https://www.pwc.com/us/en/industries/industrial-manufacturing.html" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                PwC Manufacturing
              </a>
              <p className="text-sm text-gray-500 mt-1">Financial Advisory</p>
            </div>
            <div className="text-center">
              <a href="https://www.deloitte.com/global/en/Industries/manufacturing.html" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                Deloitte Manufacturing
              </a>
              <p className="text-sm text-gray-500 mt-1">Industry Analysis</p>
            </div>
            <div className="text-center">
              <a href="https://www.nam.org/data-and-reports/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                NAM Reports
              </a>
              <p className="text-sm text-gray-500 mt-1">Industry Data</p>
            </div>
            <div className="text-center">
              <a href="https://www.thomasnet.com/insights/manufacturing-finance/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Thomas Insights
              </a>
              <p className="text-sm text-gray-500 mt-1">Manufacturing Finance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Master Manufacturing Budget Objections
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Get AI-powered budget objection scripts and real-time ROI calculations for manufacturing sales success.
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

export default ManufacturingSoftwareBudgetFreezeObjectionPage;