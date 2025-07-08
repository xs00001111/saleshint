import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, DollarSign, Briefcase, Clock, CheckCircle, ArrowRight, BarChart3, Calculator } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const SoftwareImplementationFeeObjectionResponsePage: React.FC = () => {
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
              <span className="text-sm font-medium">Implementation Fee Objection</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-emerald-600">Software Implementation Fee</span> Objection Response Scripts
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Master software sales with proven implementation fee objection responses. Turn sticker shock into value recognition and close more deals by justifying implementation investments.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The implementation fee objection framework used by leading enterprise software companies
            </p>
          </div>

          {/* Demo Preview */}
          <div className="max-w-5xl mx-auto mb-16">
            <DemoPreview />
          </div>
        </div>
      </section>

      {/* Implementation Fee Objection Scripts */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Proven Software Implementation Fee Objection Responses
            </h2>
            <p className="text-xl text-gray-600">
              Handle implementation fee concerns with confidence using these value-focused scripts.
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
                  <h3 className="text-2xl font-bold">The Value Justification Approach</h3>
                </div>
                <Calculator className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Software Prospect:</strong> "Your implementation fee is way too high. We can't justify that cost."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "I understand implementation costs can seem significant. Let me explain what's included and the value it delivers. Our implementation fee covers much more than just technical setup."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "It includes custom configuration, data migration, integration with your existing systems, user training, and a dedicated implementation manager. These services ensure you achieve ROI 3x faster than self-implementation."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "For example, [similar company] initially had the same concern, but after implementation, they calculated that our professional services saved them 320 internal staff hours and accelerated time-to-value by 4 months. Would you like to see their ROI analysis?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Transparency:</strong> Detailed service breakdown
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Value:</strong> 3x faster ROI achievement
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Proof:</strong> 320 hours saved case study
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
                  <h3 className="text-2xl font-bold">The Risk Reduction Approach</h3>
                </div>
                <Briefcase className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Software Prospect:</strong> "We like your software, but the implementation fee is a deal-breaker."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "I appreciate your candor. Many clients initially focus on the implementation fee, but it's important to consider what it's designed to prevent - a failed or problematic implementation."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Industry research shows that 68% of software implementations without professional services experience significant issues, with an average cost of $125,000 in lost productivity, rework, and delayed benefits."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Our implementation services reduce this risk by 85%. We're so confident in our process that we offer a satisfaction guarantee - if we don't meet the agreed implementation milestones, we'll continue working at no additional cost until we do. How does that change your perspective on the value?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Reframe:</strong> Prevention vs. expense
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Data:</strong> 68% failure rate statistics
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Guarantee:</strong> Risk-free implementation
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
                  <h3 className="text-2xl font-bold">The Flexible Options Approach</h3>
                </div>
                <Clock className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Software Prospect:</strong> "The implementation fee doesn't fit in our budget this quarter."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "I understand budget constraints can be challenging. We've developed flexible implementation options specifically for organizations in your situation."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We offer three approaches: 1) A phased implementation that spreads the cost across multiple quarters, 2) An implementation fee financing option with 0% interest for 12 months, or 3) A self-service option with guided support at a reduced fee."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Many clients choose the phased approach because it aligns costs with value realization. For example, [similar company] implemented in three phases over 6 months, with each phase delivering measurable ROI that funded the next phase. Would any of these options work better for your budget situation?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Flexibility:</strong> Multiple implementation paths
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Options:</strong> Phased, financed, or self-service
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Alignment:</strong> Costs matched with value
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
                  Turn Implementation Fees into Value Propositions
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our AI provides real-time coaching for implementation fee objections with value-focused responses.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Value Calculators</h4>
                      <p className="text-gray-600">ROI and time-to-value implementation metrics</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Risk Assessments</h4>
                      <p className="text-gray-600">Failed implementation cost comparisons</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Flexible Options</h4>
                      <p className="text-gray-600">Implementation packages for every budget</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Implementation Fee Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">74%</div>
                    <p className="text-gray-600">Implementation fee objections overcome</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">3.2x</div>
                    <p className="text-gray-600">Faster time-to-value with professional services</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">85%</div>
                    <p className="text-gray-600">Reduction in implementation risks</p>
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
            <h2 className="text-3xl font-bold mb-6">Featured in Software Implementation Resources</h2>
            <p className="text-lg text-gray-600">Leading implementation experts recommend our value-based approach</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.gartner.com/en/information-technology/insights/implementation-services" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Gartner Implementation
              </a>
              <p className="text-sm text-gray-500 mt-1">Services Research</p>
            </div>
            <div className="text-center">
              <a href="https://www.forrester.com/report/implementation-services/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                Forrester Services
              </a>
              <p className="text-sm text-gray-500 mt-1">Market Analysis</p>
            </div>
            <div className="text-center">
              <a href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/software-implementation" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                McKinsey Digital
              </a>
              <p className="text-sm text-gray-500 mt-1">Implementation Guide</p>
            </div>
            <div className="text-center">
              <a href="https://www.deloitte.com/global/en/services/consulting/services/technology-implementation.html" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Deloitte Technology
              </a>
              <p className="text-sm text-gray-500 mt-1">Implementation</p>
            </div>
            <div className="text-center">
              <a href="https://www.pwc.com/us/en/services/consulting/technology/implementation.html" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                PwC Implementation
              </a>
              <p className="text-sm text-gray-500 mt-1">Services</p>
            </div>
            <div className="text-center">
              <a href="https://www.accenture.com/us-en/services/technology/systems-implementation" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                Accenture Systems
              </a>
              <p className="text-sm text-gray-500 mt-1">Implementation</p>
            </div>
            <div className="text-center">
              <a href="https://www.ibm.com/services/technology/implementation" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                IBM Technology
              </a>
              <p className="text-sm text-gray-500 mt-1">Implementation</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesforce.com/services/success-plans/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                Salesforce Success
              </a>
              <p className="text-sm text-gray-500 mt-1">Implementation</p>
            </div>
            <div className="text-center">
              <a href="https://www.oracle.com/consulting/technology-implementation/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Oracle Consulting
              </a>
              <p className="text-sm text-gray-500 mt-1">Implementation</p>
            </div>
            <div className="text-center">
              <a href="https://www.sap.com/services/implementation.html" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                SAP Implementation
              </a>
              <p className="text-sm text-gray-500 mt-1">Services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Master Implementation Fee Objections
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Get AI-powered implementation fee objection scripts and real-time coaching to close more deals with value-based selling.
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

export default SoftwareImplementationFeeObjectionResponsePage;