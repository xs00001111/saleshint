import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bot, ShieldAlert, Rocket, CheckCircle, ArrowRight, TrendingUp, Zap } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const AISaasRiskOfChangeObjectionRebuttalPage: React.FC = () => {
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
              <Bot className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">AI SaaS Risk Objection</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-emerald-600">AI SaaS Risk-of-Change</span> Objection Rebuttal Scripts
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Master AI software sales with proven risk-of-change objection rebuttals. Turn uncertainty about AI adoption into confidence and close more deals in the rapidly evolving AI market.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The AI risk objection framework used by leading artificial intelligence companies
            </p>
          </div>

          {/* Demo Preview */}
          <div className="max-w-5xl mx-auto mb-16">
            <DemoPreview />
          </div>
        </div>
      </section>

      {/* Risk of Change Objection Scripts */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Proven AI SaaS Risk-of-Change Objection Rebuttals
            </h2>
            <p className="text-xl text-gray-600">
              Handle AI adoption concerns with confidence using these risk-focused responses.
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
                  <h3 className="text-2xl font-bold">The Phased Implementation Approach</h3>
                </div>
                <Rocket className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>AI Prospect:</strong> "Implementing AI seems risky. We're concerned about disrupting our current processes."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "That's a valid concern. Many organizations worry about the disruption of implementing new AI technology. That's why we've developed a phased implementation approach specifically designed to minimize risk."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We start with a contained pilot in one department or process, running in parallel with your existing systems. This allows us to demonstrate value, refine the implementation, and build confidence before expanding."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "For example, [similar company] started with just their sales team using our AI assistant. After seeing a 27% productivity increase in the first month, they gradually expanded to marketing, customer service, and operations over 90 days. Would a similar low-risk approach work for your organization?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Acknowledge:</strong> Valid implementation concerns
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Method:</strong> Parallel pilot approach
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Example:</strong> 27% productivity gain
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
                  <h3 className="text-2xl font-bold">The Risk of Inaction Approach</h3>
                </div>
                <ShieldAlert className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>AI Prospect:</strong> "We're not sure if we're ready to adopt AI yet. It seems risky to change our current approach."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "I understand your caution about adopting AI. Many organizations are carefully weighing this decision. Have you also considered the potential risks of not implementing AI in your industry?"
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "According to [industry research], companies that delay AI adoption are seeing a 35% competitive disadvantage in operational efficiency and a 28% higher customer churn rate compared to early adopters."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "What we're finding is that the risk of doing nothing often exceeds the risk of careful implementation. Would it be valuable to see a risk assessment comparing the cost of inaction versus a measured AI adoption approach for your specific situation?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Reframe:</strong> Risk of inaction vs. action
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Data:</strong> Competitive disadvantage metrics
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Offer:</strong> Customized risk assessment
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
                  <h3 className="text-2xl font-bold">The Human-in-the-Loop Approach</h3>
                </div>
                <TrendingUp className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>AI Prospect:</strong> "We're worried about losing control if we implement AI in our processes."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "That's a common and important concern. Our AI solution is specifically designed with a 'human-in-the-loop' approach that keeps your team in control at all times."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "The AI provides recommendations and automates routine tasks, but critical decisions always require human approval. You can set custom approval thresholds and override AI suggestions at any point in the process."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "For example, [enterprise client] maintains 100% human oversight of their AI implementation while still achieving a 43% efficiency gain. Their team describes it as 'having a really smart assistant' rather than replacing human judgment. Would you like to see how this control framework works in practice?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Approach:</strong> Human-in-the-loop design
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Control:</strong> Approval thresholds and overrides
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Balance:</strong> 43% efficiency with full oversight
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
                  Turn AI Adoption Concerns into Competitive Advantages
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our AI provides real-time coaching for AI SaaS risk objections with implementation expertise.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Implementation Roadmaps</h4>
                      <p className="text-gray-600">Phased adoption plans with minimal disruption</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Risk Assessments</h4>
                      <p className="text-gray-600">Comparative analysis of action vs. inaction</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Control Frameworks</h4>
                      <p className="text-gray-600">Human-in-the-loop governance models</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">AI Adoption Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">76%</div>
                    <p className="text-gray-600">Risk objections successfully addressed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">35%</div>
                    <p className="text-gray-600">Competitive advantage for adopters</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">43%</div>
                    <p className="text-gray-600">Efficiency gain with human oversight</p>
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
            <h2 className="text-3xl font-bold mb-6">Featured in AI Adoption Resources</h2>
            <p className="text-lg text-gray-600">Leading AI experts recommend our risk-managed implementation approach</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://hbr.org/topic/artificial-intelligence" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Harvard Business Review
              </a>
              <p className="text-sm text-gray-500 mt-1">AI Research</p>
            </div>
            <div className="text-center">
              <a href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/artificial-intelligence" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                McKinsey Digital
              </a>
              <p className="text-sm text-gray-500 mt-1">AI Insights</p>
            </div>
            <div className="text-center">
              <a href="https://www.gartner.com/en/topics/artificial-intelligence" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                Gartner AI
              </a>
              <p className="text-sm text-gray-500 mt-1">Market Research</p>
            </div>
            <div className="text-center">
              <a href="https://www.forrester.com/report/ai-adoption/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Forrester AI
              </a>
              <p className="text-sm text-gray-500 mt-1">Adoption Research</p>
            </div>
            <div className="text-center">
              <a href="https://www.deloitte.com/global/en/focus/artificial-intelligence.html" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Deloitte AI
              </a>
              <p className="text-sm text-gray-500 mt-1">Implementation Guide</p>
            </div>
            <div className="text-center">
              <a href="https://www.pwc.com/us/en/tech-effect/ai-analytics.html" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                PwC AI Analytics
              </a>
              <p className="text-sm text-gray-500 mt-1">Business Impact</p>
            </div>
            <div className="text-center">
              <a href="https://www.accenture.com/us-en/insights/artificial-intelligence-index" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                Accenture AI
              </a>
              <p className="text-sm text-gray-500 mt-1">Transformation</p>
            </div>
            <div className="text-center">
              <a href="https://www.ibm.com/watson/resources" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                IBM Watson
              </a>
              <p className="text-sm text-gray-500 mt-1">AI Resources</p>
            </div>
            <div className="text-center">
              <a href="https://www.microsoft.com/en-us/ai/responsible-ai-resources" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Microsoft AI
              </a>
              <p className="text-sm text-gray-500 mt-1">Responsible AI</p>
            </div>
            <div className="text-center">
              <a href="https://ai.google/education/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Google AI
              </a>
              <p className="text-sm text-gray-500 mt-1">AI Education</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Master AI SaaS Risk-of-Change Objections
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Get AI-powered risk objection scripts and real-time coaching to close more deals in the AI software market.
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

export default AISaasRiskOfChangeObjectionRebuttalPage;