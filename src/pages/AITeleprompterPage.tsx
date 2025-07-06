import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Monitor, Sparkles, Eye, CheckCircle, ArrowRight, Zap } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const AITeleprompterPage: React.FC = () => {
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
              <Monitor className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">AI Teleprompter</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              The World's First <span className="text-emerald-600">AI Teleprompter</span> for Sales Calls
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Never stumble for words again. Our magical AI teleprompter provides perfect talking points, objection responses, and closing techniques in real-time - completely undetectable to your prospects.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The undetectable AI teleprompter that's revolutionizing sales conversations
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
              Why Our AI Teleprompter is Magical
            </h2>
            <p className="text-xl text-gray-600">
              Unlike traditional teleprompters, our AI adapts to every conversation in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Magical Adaptation</h3>
              <p className="text-gray-600">
                Our AI teleprompter magically adapts to each conversation, providing contextual talking points that feel natural and authentic.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Completely Undetectable</h3>
              <p className="text-gray-600">
                Your prospects will never know you're using an AI teleprompter. The guidance appears only on your screen, keeping conversations natural.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Instant Intelligence</h3>
              <p className="text-gray-600">
                Get instant access to the perfect response, objection handling, or closing technique exactly when you need it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Traditional Teleprompters vs. AI Teleprompter
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Traditional */}
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
                <h3 className="text-2xl font-bold mb-6 text-gray-600">Traditional Teleprompters</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-red-600 text-sm">✗</span>
                    </div>
                    <span className="text-gray-600">Static, pre-written scripts</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-red-600 text-sm">✗</span>
                    </div>
                    <span className="text-gray-600">No adaptation to conversation flow</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-red-600 text-sm">✗</span>
                    </div>
                    <span className="text-gray-600">Sounds robotic and scripted</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-red-600 text-sm">✗</span>
                    </div>
                    <span className="text-gray-600">No objection handling support</span>
                  </div>
                </div>
              </div>

              {/* AI Teleprompter */}
              <div className="bg-emerald-50 rounded-2xl p-8 border-2 border-emerald-200">
                <h3 className="text-2xl font-bold mb-6 text-emerald-800">SalesHint AI Teleprompter</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Dynamic, AI-generated responses</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Adapts to every conversation in real-time</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Natural, conversational suggestions</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Smart objection handling built-in</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Perfect for Every Sales Situation
            </h2>
            <p className="text-xl text-gray-600">
              Our AI teleprompter works seamlessly across all types of sales conversations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Discovery Calls</h3>
              <p className="text-gray-600">
                Get perfect follow-up questions and conversation starters to uncover pain points and build rapport.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Product Demos</h3>
              <p className="text-gray-600">
                Receive talking points about features and benefits that resonate with your specific prospect's needs.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Objection Handling</h3>
              <p className="text-gray-600">
                Get instant, contextual responses to any objection - from pricing concerns to competitor comparisons.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Closing Calls</h3>
              <p className="text-gray-600">
                Access proven closing techniques and urgency builders tailored to your prospect's specific situation.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Follow-up Calls</h3>
              <p className="text-gray-600">
                Get conversation starters and next steps that keep deals moving forward without being pushy.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Cold Calls</h3>
              <p className="text-gray-600">
                Receive dynamic openers and value propositions that adapt to how prospects respond to your initial pitch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Experience the Magic of AI Teleprompter
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Join the sales revolution. Never be at a loss for words again with our magical, undetectable AI teleprompter.
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

export default AITeleprompterPage;