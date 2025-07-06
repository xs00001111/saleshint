import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Lightbulb, Zap, Target, CheckCircle, ArrowRight, MessageSquare, TrendingUp } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const AISalesHintsPage: React.FC = () => {
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
              <Lightbulb className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">AI Sales Hints</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Get Intelligent <span className="text-emerald-600">AI Sales Hints</span> in Real-Time
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Never miss an opportunity again with AI-powered sales hints that guide you through every conversation, helping you say the right thing at the right time.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The AI sales hints platform that's helping reps close 40% more deals
            </p>
          </div>

          {/* Demo Preview */}
          <div className="max-w-5xl mx-auto mb-16">
            <DemoPreview />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Smart Sales Hints When You Need Them Most
            </h2>
            <p className="text-xl text-gray-600">
              Our AI provides contextual hints that help you navigate any sales situation with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Real-Time Hints</h3>
              <p className="text-gray-600">
                Get instant AI-powered hints during live conversations that help you respond effectively to any situation.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Contextual Suggestions</h3>
              <p className="text-gray-600">
                AI analyzes conversation context to provide relevant hints for objection handling, closing, and next steps.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Conversation Guidance</h3>
              <p className="text-gray-600">
                Receive intelligent hints on how to steer conversations toward successful outcomes and deal closure.
              </p>
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
                  Why Sales Professionals Love Our AI Hints
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our AI sales hints don't just provide generic advice - they're tailored to your specific conversation and prospect.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Instant Confidence</h4>
                      <p className="text-gray-600">Never feel unprepared in a sales conversation again</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Personalized Guidance</h4>
                      <p className="text-gray-600">AI adapts hints to your selling style and prospect's needs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Continuous Learning</h4>
                      <p className="text-gray-600">AI learns from successful interactions to improve future hints</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">AI Sales Hints Impact</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">40%</div>
                    <p className="text-gray-600">More deals closed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">65%</div>
                    <p className="text-gray-600">Better objection handling</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">50%</div>
                    <p className="text-gray-600">More confident in calls</p>
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
            <h2 className="text-3xl font-bold mb-6">Recommended by Sales Training Experts</h2>
            <p className="text-lg text-gray-600">Leading sales professionals trust AI-powered sales hints</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.salesforce.com/resources/articles/sales-tips/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Salesforce Tips
              </a>
              <p className="text-sm text-gray-500 mt-1">Sales Guidance</p>
            </div>
            <div className="text-center">
              <a href="https://blog.hubspot.com/sales/sales-tips" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                HubSpot Sales Tips
              </a>
              <p className="text-sm text-gray-500 mt-1">Best Practices</p>
            </div>
            <div className="text-center">
              <a href="https://www.saleshacker.com/sales-tips/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                Sales Hacker Tips
              </a>
              <p className="text-sm text-gray-500 mt-1">Modern Techniques</p>
            </div>
            <div className="text-center">
              <a href="https://blog.close.com/sales-tips/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Close.com Tips
              </a>
              <p className="text-sm text-gray-500 mt-1">Practical Advice</p>
            </div>
            <div className="text-center">
              <a href="https://www.outreach.io/blog/sales-tips/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Outreach Tips
              </a>
              <p className="text-sm text-gray-500 mt-1">Expert Insights</p>
            </div>
            <div className="text-center">
              <a href="https://blog.gong.io/sales-tips/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                Gong.io Tips
              </a>
              <p className="text-sm text-gray-500 mt-1">Data-Driven Tips</p>
            </div>
            <div className="text-center">
              <a href="https://www.revenuecollective.com/sales-tips" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                Revenue Collective
              </a>
              <p className="text-sm text-gray-500 mt-1">Community Tips</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesinsider.com/tips/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                Sales Insider
              </a>
              <p className="text-sm text-gray-500 mt-1">Industry Insights</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesbenchmarkindex.com/tips" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                SBI Sales Tips
              </a>
              <p className="text-sm text-gray-500 mt-1">Performance Tips</p>
            </div>
            <div className="text-center">
              <a href="https://blog.pipedrive.com/sales-tips/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Pipedrive Tips
              </a>
              <p className="text-sm text-gray-500 mt-1">Success Strategies</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get AI Sales Hints?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Transform your sales conversations with intelligent hints that help you close more deals.
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

export default AISalesHintsPage;