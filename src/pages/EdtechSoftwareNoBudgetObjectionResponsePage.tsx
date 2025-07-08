import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, DollarSign, Calculator, CheckCircle, ArrowRight, Lightbulb, Users } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const EdtechSoftwareNoBudgetObjectionResponsePage: React.FC = () => {
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
              <BookOpen className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">EdTech Budget Objection</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-emerald-600">EdTech Software No-Budget</span> Objection Response Scripts
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Master education technology sales with proven no-budget objection responses. Turn budget constraints into creative funding solutions that help educational institutions adopt your software.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The EdTech budget objection framework used by leading education technology companies
            </p>
          </div>

          {/* Demo Preview */}
          <div className="max-w-5xl mx-auto mb-16">
            <DemoPreview />
          </div>
        </div>
      </section>

      {/* Budget Objection Scripts */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Proven EdTech No-Budget Objection Responses
            </h2>
            <p className="text-xl text-gray-600">
              Handle education budget constraints with confidence using these EdTech-specific scripts.
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
                  <h3 className="text-2xl font-bold">The Alternative Funding Approach</h3>
                </div>
                <DollarSign className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Education Prospect:</strong> "We love your solution, but we simply don't have the budget for new software this year."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "I understand budget constraints are a real challenge in education. Many of our education clients initially had the same concern. Have you explored alternative funding sources like Title IV grants, ESSER funds, or state technology allocations?"
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We actually have an education grants specialist on our team who has helped schools secure over $5M in funding specifically for technology like ours. [School district] recently secured a $75K grant that fully covered their implementation."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Would it be helpful if I connected you with our grants specialist for a free consultation? They can identify potential funding sources specific to your situation and even help with the application process."
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Alternative:</strong> Education-specific grants
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Proof:</strong> $5M in secured funding
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Support:</strong> Free grants consultation
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
                  <h3 className="text-2xl font-bold">The Student Outcomes ROI Approach</h3>
                </div>
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Education Prospect:</strong> "Our budget is already allocated for the year. We can't afford new software."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "I understand budget constraints. When educational institutions evaluate our solution, they typically look beyond the cost to the impact on student outcomes and institutional metrics. What student success metrics are most important to your institution right now?"
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Based on what you've shared, I can tell you that [similar institution] saw a 23% improvement in [specific metric] within the first semester of implementation. They calculated that each 1% improvement was worth approximately $[amount] in [retention/completion/enrollment] revenue."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Would it be valuable if I created a custom ROI analysis showing how our solution could potentially pay for itself through improved student outcomes? This might help make the case for reallocating some budget given the potential return."
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Focus:</strong> Student success metrics
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Evidence:</strong> Quantified outcomes
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Analysis:</strong> Custom ROI calculation
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
                  <h3 className="text-2xl font-bold">The Consortium Approach</h3>
                </div>
                <Lightbulb className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Education Prospect:</strong> "We don't have budget for this, even though we see the value."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "I understand budget limitations. Have you considered a consortium purchase with other schools or departments? We've seen great success with this approach in education."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "For example, [educational consortium] was able to reduce their per-institution cost by 40% by purchasing as a group of 5 schools. We offer special consortium pricing and can help coordinate the joint purchase."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Are there other schools or departments you collaborate with that might also benefit from our solution? I'd be happy to facilitate a multi-institution discussion to explore a consortium approach that could make this affordable for everyone."
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Strategy:</strong> Consortium purchase
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Savings:</strong> 40% cost reduction
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Facilitation:</strong> Multi-institution coordination
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
                  Turn Budget Constraints into Creative Solutions
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our AI provides real-time coaching for EdTech budget objections with education-specific funding knowledge.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Grant Database</h4>
                      <p className="text-gray-600">Access to education-specific funding opportunities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Outcome Calculators</h4>
                      <p className="text-gray-600">Student success and institutional ROI metrics</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Flexible Models</h4>
                      <p className="text-gray-600">Consortium and multi-year agreement templates</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">EdTech Budget Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">78%</div>
                    <p className="text-gray-600">Budget objections successfully addressed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">$5M+</div>
                    <p className="text-gray-600">Education grants secured for clients</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">40%</div>
                    <p className="text-gray-600">Average savings through consortiums</p>
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
            <h2 className="text-3xl font-bold mb-6">Featured in Education Technology Resources</h2>
            <p className="text-lg text-gray-600">Leading EdTech experts recommend our budget solution approach</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.edsurge.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                EdSurge
              </a>
              <p className="text-sm text-gray-500 mt-1">EdTech News</p>
            </div>
            <div className="text-center">
              <a href="https://www.edweek.org/technology" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                Education Week
              </a>
              <p className="text-sm text-gray-500 mt-1">Technology Coverage</p>
            </div>
            <div className="text-center">
              <a href="https://www.iste.org/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                ISTE
              </a>
              <p className="text-sm text-gray-500 mt-1">Education Technology</p>
            </div>
            <div className="text-center">
              <a href="https://www.educause.edu/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                EDUCAUSE
              </a>
              <p className="text-sm text-gray-500 mt-1">Higher Ed Technology</p>
            </div>
            <div className="text-center">
              <a href="https://www.gettingsmart.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Getting Smart
              </a>
              <p className="text-sm text-gray-500 mt-1">EdTech Innovation</p>
            </div>
            <div className="text-center">
              <a href="https://www.insidehighered.com/news/technology" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                Inside Higher Ed
              </a>
              <p className="text-sm text-gray-500 mt-1">Technology News</p>
            </div>
            <div className="text-center">
              <a href="https://www.eschoolnews.com/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                eSchool News
              </a>
              <p className="text-sm text-gray-500 mt-1">K-12 Technology</p>
            </div>
            <div className="text-center">
              <a href="https://www.edtechmagazine.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                EdTech Magazine
              </a>
              <p className="text-sm text-gray-500 mt-1">Technology Solutions</p>
            </div>
            <div className="text-center">
              <a href="https://www.thetechedvocate.org/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Tech Edvocate
              </a>
              <p className="text-sm text-gray-500 mt-1">EdTech Advocacy</p>
            </div>
            <div className="text-center">
              <a href="https://www.thejournal.com/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                THE Journal
              </a>
              <p className="text-sm text-gray-500 mt-1">Education Technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Master EdTech Budget Objections
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Get AI-powered education budget objection scripts and real-time coaching to close more deals in budget-constrained institutions.
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

export default EdtechSoftwareNoBudgetObjectionResponsePage;