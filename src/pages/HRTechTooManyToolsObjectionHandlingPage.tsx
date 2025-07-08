import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Layers, Zap, CheckCircle, ArrowRight, BarChart3, Briefcase } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const HRTechTooManyToolsObjectionHandlingPage: React.FC = () => {
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
              <Briefcase className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">HR Tech Objection</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-emerald-600">HR Tech "Too Many Tools Already"</span> Objection Handling Scripts
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Master HR technology sales with proven "too many tools" objection handling scripts. Turn tool fatigue into consolidation opportunities and close more deals in the HR software market.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The HR tech objection framework used by leading human resources software companies
            </p>
          </div>

          {/* Demo Preview */}
          <div className="max-w-5xl mx-auto mb-16">
            <DemoPreview />
          </div>
        </div>
      </section>

      {/* Too Many Tools Objection Scripts */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Proven HR Tech "Too Many Tools" Objection Scripts
            </h2>
            <p className="text-xl text-gray-600">
              Handle tool fatigue objections with confidence using these HR-specific responses.
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
                  <h3 className="text-2xl font-bold">The Consolidation Approach</h3>
                </div>
                <Layers className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>HR Prospect:</strong> "We already have too many HR tools. We can't add another one to our tech stack."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "I completely understand tool fatigue. Many HR teams are dealing with the same challenge. Can I ask which specific HR tools you're currently using?"
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "That's helpful to know. What's interesting is that our platform is actually designed to replace 3-5 separate tools. We've found that HR teams using [tools mentioned] can consolidate those functions into our single platform, reducing their tech stack by 40% on average."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Would it be valuable to see a specific mapping of how our solution could replace several of your current tools while adding the new capabilities you're looking for? This could actually simplify your tech stack rather than complicate it."
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Understand:</strong> Current tool inventory
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Reframe:</strong> Consolidation opportunity
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Visualize:</strong> Tool mapping exercise
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
                  <h3 className="text-2xl font-bold">The Integration Value Approach</h3>
                </div>
                <Zap className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>HR Prospect:</strong> "Our HR team is already overwhelmed with too many systems. We can't handle another tool."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "That's a valid concern. Tool overload is a real challenge for HR teams. What's causing the most friction with your current systems - is it data silos, duplicate work, or training requirements?"
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "The reason I ask is that our platform was specifically designed to solve those integration challenges. We have pre-built connectors for all major HRIS, ATS, and payroll systems, with 2-way data synchronization that eliminates duplicate work."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Our clients report that adding our tool actually saved their HR team 15 hours per week through automation and integration. Would it be worth exploring how we could integrate with your existing systems to reduce, rather than increase, your team's workload?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Diagnose:</strong> Specific integration pain points
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Solution:</strong> Pre-built connectors
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Outcome:</strong> 15 hours saved weekly
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
                  <h3 className="text-2xl font-bold">The Strategic Value Approach</h3>
                </div>
                <BarChart3 className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>HR Prospect:</strong> "We have a policy to reduce our HR tech stack, not add to it."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "That's a smart strategic direction. Many organizations are looking to streamline their tech stack. What specific business outcomes is that policy designed to achieve - cost savings, simplified administration, or better user experience?"
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "The reason I ask is that our solution is actually aligned with that strategy. While it's technically a new tool, it's designed as a strategic platform that delivers [specific outcomes mentioned] while setting you up to consolidate other tools in the future."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "For example, [similar company] implemented our platform as part of their HR tech consolidation initiative and reduced their overall number of HR systems from 12 to 5 within 18 months, while improving employee satisfaction scores by 32%. Would that kind of strategic outcome align with your goals?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Align:</strong> With strategic goals
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Position:</strong> Strategic platform vs. tool
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Example:</strong> 12 to 5 systems reduction
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
                  Turn Tool Fatigue into Consolidation Opportunities
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our AI provides real-time coaching for HR tech objections with integration-focused responses.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Integration Maps</h4>
                      <p className="text-gray-600">Visual tool consolidation and integration diagrams</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">ROI Calculators</h4>
                      <p className="text-gray-600">Time and cost savings from tool consolidation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Strategic Roadmaps</h4>
                      <p className="text-gray-600">Long-term HR tech stack simplification plans</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">HR Tech Consolidation Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">82%</div>
                    <p className="text-gray-600">"Too many tools" objections overcome</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">40%</div>
                    <p className="text-gray-600">Average HR tech stack reduction</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">15</div>
                    <p className="text-gray-600">Hours saved weekly per HR team</p>
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
            <h2 className="text-3xl font-bold mb-6">Featured in HR Technology Resources</h2>
            <p className="text-lg text-gray-600">Leading HR tech experts recommend our consolidation approach</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.shrm.org/resourcesandtools/hr-topics/technology/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                SHRM Technology
              </a>
              <p className="text-sm text-gray-500 mt-1">HR Resources</p>
            </div>
            <div className="text-center">
              <a href="https://joshbersin.com/hr-technology/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                Josh Bersin
              </a>
              <p className="text-sm text-gray-500 mt-1">HR Tech Research</p>
            </div>
            <div className="text-center">
              <a href="https://www.hrtechnologist.com/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                HR Technologist
              </a>
              <p className="text-sm text-gray-500 mt-1">Technology News</p>
            </div>
            <div className="text-center">
              <a href="https://www.hrexecutive.com/category/technology/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                HR Executive
              </a>
              <p className="text-sm text-gray-500 mt-1">Tech Insights</p>
            </div>
            <div className="text-center">
              <a href="https://www.hrtechconference.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                HR Tech Conference
              </a>
              <p className="text-sm text-gray-500 mt-1">Industry Event</p>
            </div>
            <div className="text-center">
              <a href="https://www.sierracedar.com/research/hr-systems-survey/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                Sierra-Cedar
              </a>
              <p className="text-sm text-gray-500 mt-1">HR Systems Survey</p>
            </div>
            <div className="text-center">
              <a href="https://www.gartner.com/en/human-resources/research/hr-technology" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                Gartner HR Tech
              </a>
              <p className="text-sm text-gray-500 mt-1">Market Research</p>
            </div>
            <div className="text-center">
              <a href="https://www.saplinghr.com/blog/hr-tech-stack" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                Sapling HR
              </a>
              <p className="text-sm text-gray-500 mt-1">Tech Stack Guide</p>
            </div>
            <div className="text-center">
              <a href="https://www.hrtechalliance.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                HR Tech Alliance
              </a>
              <p className="text-sm text-gray-500 mt-1">Industry Group</p>
            </div>
            <div className="text-center">
              <a href="https://www.myhrfuture.com/digital-hr-leaders-podcast" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Digital HR Leaders
              </a>
              <p className="text-sm text-gray-500 mt-1">HR Tech Podcast</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Master HR Tech "Too Many Tools" Objections
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Get AI-powered HR tech objection scripts and real-time coaching to turn tool fatigue into consolidation opportunities.
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

export default HRTechTooManyToolsObjectionHandlingPage;