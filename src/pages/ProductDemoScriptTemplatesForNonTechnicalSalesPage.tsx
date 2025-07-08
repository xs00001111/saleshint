import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Presentation, Users, Lightbulb, CheckCircle, ArrowRight, Target, Star } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const ProductDemoScriptTemplatesForNonTechnicalSalesPage: React.FC = () => {
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
              <Presentation className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Product Demo Scripts</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-emerald-600">Product Demo Script Templates</span> for Non-Technical Sales
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Master product demonstrations with proven script templates designed for non-technical sales professionals. Turn features into benefits and close more deals with compelling demos.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The product demo framework used by top-performing non-technical sales teams
            </p>
          </div>

          {/* Demo Preview */}
          <div className="max-w-5xl mx-auto mb-16">
            <DemoPreview />
          </div>
        </div>
      </section>

      {/* Product Demo Script Templates */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Proven Product Demo Script Templates
            </h2>
            <p className="text-xl text-gray-600">
              Deliver compelling product demonstrations with these non-technical script templates.
            </p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {/* Template 1 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-2xl font-bold">The Problem-Solution Demo Template</h3>
                </div>
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Demo Structure:</strong> A framework that connects prospect pain points directly to product solutions
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Based on our previous conversation, I understand you're facing three key challenges: [specific pain point 1], [specific pain point 2], and [specific pain point 3]. Today, I'll show you exactly how our solution addresses each of these challenges."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Let's start with [pain point 1]. Currently, this is costing you [specific impact]. Here's how our [specific feature] solves this problem... [demonstrate]. As you can see, this would [specific benefit] for your team."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Now that you've seen how we address each challenge, let me summarize the value: [pain point 1] solved by [feature 1], [pain point 2] solved by [feature 2], and [pain point 3] solved by [feature 3]. Which of these solutions would have the biggest impact on your business right now?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Opening:</strong> Recap specific pain points
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Structure:</strong> Pain → Feature → Benefit
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Close:</strong> Value summary with question
                </div>
              </div>
            </div>

            {/* Template 2 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-2xl font-bold">The Day-in-the-Life Demo Template</h3>
                </div>
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Demo Structure:</strong> A narrative approach showing how the product transforms a typical workday
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Let me walk you through how [specific user role] at [similar company] uses our product in their daily workflow. Before our solution, they spent [X hours] on [manual task]. Now, their day looks completely different."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "At 9:00 AM, they start by checking their [dashboard/report] which automatically shows [key information]. Instead of spending hours gathering this data, they immediately take action on [specific insight]. Let me show you how... [demonstrate]."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "By the end of the day, they've accomplished [specific outcomes] in just [time saved] compared to their old process. Our customers report saving an average of [X hours] per week, which translates to [dollar value] annually. How would your team use that extra time if they had it back?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Approach:</strong> Before/after narrative
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Structure:</strong> Chronological workflow
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Close:</strong> Time savings with value question
                </div>
              </div>
            </div>

            {/* Template 3 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-2xl font-bold">The Interactive Value Demo Template</h3>
                </div>
                <Lightbulb className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Demo Structure:</strong> An engaging approach that involves the prospect in discovering value
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Instead of me just showing features, I'd like to make this demo relevant to your specific situation. Would you mind sharing a recent example of [specific challenge] that you faced?"
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Thank you for sharing that. Let me show you exactly how you would solve that using our solution. I'll use your actual scenario... [demonstrate with their example]. Now, would you like to try solving it yourself? I can guide you through the steps."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Great job! You've just seen how easily you can [solve specific problem] in just [time frame]. Based on what you've experienced, how would this impact your team's ability to [achieve business goal]? And what would that mean for your [department/company] overall?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Engagement:</strong> Prospect-provided scenario
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Interaction:</strong> Guided hands-on experience
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Close:</strong> Impact questions on experience
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
                  Turn Product Features into Compelling Stories
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our AI provides real-time coaching for product demonstrations with business-focused narratives.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Feature-to-Benefit Translation</h4>
                      <p className="text-gray-600">Turn technical features into clear business benefits</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Personalized Demo Flows</h4>
                      <p className="text-gray-600">Customized demonstration paths for different buyer personas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Engagement Techniques</h4>
                      <p className="text-gray-600">Interactive methods to maintain prospect interest</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Product Demo Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">64%</div>
                    <p className="text-gray-600">Higher demo-to-close conversion rate</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">47%</div>
                    <p className="text-gray-600">Increase in prospect engagement</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">2.3x</div>
                    <p className="text-gray-600">More follow-up meetings scheduled</p>
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
            <h2 className="text-3xl font-bold mb-6">Featured in Sales Demonstration Resources</h2>
            <p className="text-lg text-gray-600">Leading sales experts recommend our product demo approach</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.salesforce.com/resources/articles/sales-demo/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Salesforce Demo
              </a>
              <p className="text-sm text-gray-500 mt-1">Best Practices</p>
            </div>
            <div className="text-center">
              <a href="https://blog.hubspot.com/sales/product-demo" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                HubSpot Sales
              </a>
              <p className="text-sm text-gray-500 mt-1">Demo Techniques</p>
            </div>
            <div className="text-center">
              <a href="https://www.gong.io/blog/sales-demos/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                Gong.io
              </a>
              <p className="text-sm text-gray-500 mt-1">Demo Analytics</p>
            </div>
            <div className="text-center">
              <a href="https://www.saleshacker.com/product-demo-tips/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Sales Hacker
              </a>
              <p className="text-sm text-gray-500 mt-1">Demo Tips</p>
            </div>
            <div className="text-center">
              <a href="https://www.sandler.com/blog/effective-sales-demos/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Sandler Training
              </a>
              <p className="text-sm text-gray-500 mt-1">Demo Methodology</p>
            </div>
            <div className="text-center">
              <a href="https://www.richardson.com/blog/sales-demonstrations/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                Richardson
              </a>
              <p className="text-sm text-gray-500 mt-1">Demo Strategies</p>
            </div>
            <div className="text-center">
              <a href="https://www.jbarrows.com/blog/product-demos/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                JBarrows Sales
              </a>
              <p className="text-sm text-gray-500 mt-1">Demo Frameworks</p>
            </div>
            <div className="text-center">
              <a href="https://www.challenger.com/blog/sales-demos/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                Challenger
              </a>
              <p className="text-sm text-gray-500 mt-1">Demo Approach</p>
            </div>
            <div className="text-center">
              <a href="https://www.demodesk.com/blog/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Demodesk
              </a>
              <p className="text-sm text-gray-500 mt-1">Demo Platform</p>
            </div>
            <div className="text-center">
              <a href="https://www.showpad.com/blog/sales-demo-best-practices/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Showpad
              </a>
              <p className="text-sm text-gray-500 mt-1">Demo Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Master Product Demonstrations Today
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Get AI-powered product demo scripts and real-time coaching to deliver compelling demonstrations that close more deals.
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

export default ProductDemoScriptTemplatesForNonTechnicalSalesPage;