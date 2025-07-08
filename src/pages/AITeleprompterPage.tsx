import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Monitor, Sparkles, Eye, CheckCircle, ArrowRight, Zap, MessageSquare } from 'lucide-react';
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
              <span className="text-sm font-medium">AI Sales Teleprompter</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              The Ultimate <span className="text-emerald-600">AI Teleprompter</span> for Sales Professionals
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Never stumble for words again. Our magical AI teleprompter provides perfect talking points, objection responses, and closing techniques in real-time - completely undetectable to your prospects.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The most advanced AI teleprompter trusted by top-performing sales professionals
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
              Why Our AI Sales Teleprompter is Revolutionary
            </h2>
            <p className="text-xl text-gray-600">
              Unlike traditional teleprompters, our AI sales teleprompter adapts to every sales conversation in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Intelligent Adaptation</h3>
              <p className="text-gray-600">
                Our AI teleprompter intelligently adapts to each sales conversation, providing contextual talking points that feel natural and authentic to your selling style.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Completely Undetectable</h3>
              <p className="text-gray-600">
                Your prospects will never know you're using an AI teleprompter. The guidance appears only on your screen, keeping sales conversations natural and authentic.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Instant Intelligence</h3>
              <p className="text-gray-600">
                Get instant access to the perfect response, objection handling, or closing technique exactly when you need it most during critical sales moments.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Sales-Specific Content</h3>
              <p className="text-gray-600">
                Unlike generic teleprompters, our AI is trained specifically on successful sales conversations and proven closing techniques.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Monitor className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Multi-Platform Support</h3>
              <p className="text-gray-600">
                Works seamlessly across all major video conferencing platforms including Zoom, Teams, Google Meet, and Webex.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Continuous Learning</h3>
              <p className="text-gray-600">
                Our AI teleprompter learns from your most successful sales conversations to provide increasingly effective suggestions over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">
              Traditional Teleprompters vs. AI Sales Teleprompter
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
              See why our AI sales teleprompter outperforms traditional solutions for sales professionals
            </p>
            
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
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
              {/* AI Teleprompter */}
              <div className="bg-emerald-50 rounded-2xl p-8 border-2 border-emerald-200">
                <h3 className="text-2xl font-bold mb-6 text-emerald-800">SalesHint AI Sales Teleprompter</h3>
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
              
              {/* Virtual Teleprompter */}
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
                <h3 className="text-2xl font-bold mb-6 text-gray-600">Virtual Teleprompters</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-red-600 text-sm">✗</span>
                    </div>
                    <span className="text-gray-600">Generic scripts for all situations</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-red-600 text-sm">✗</span>
                    </div>
                    <span className="text-gray-600">Requires manual scrolling and control</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-red-600 text-sm">✗</span>
                    </div>
                    <span className="text-gray-600">Not optimized for sales conversations</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-red-600 text-sm">✗</span>
                    </div>
                    <span className="text-gray-600">No real-time adaptation to prospect responses</span>
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
            <h2 className="text-4xl font-bold mb-4">
              The Perfect Sales Teleprompter for Every Situation
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Our AI sales teleprompter works seamlessly across all types of sales conversations.
            </p>
            <p className="text-lg text-gray-500 mb-8">
              Whether you're doing discovery, demos, or closing calls, our teleprompter has you covered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Discovery Calls</h3>
              <p className="text-gray-600">
                Get perfect follow-up questions and conversation starters to uncover pain points and build rapport with prospects.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Product Demos</h3>
              <p className="text-gray-600">
                Receive talking points about features and benefits that resonate with your specific prospect's needs and pain points.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Objection Handling</h3>
              <p className="text-gray-600">
                Get instant, contextual responses to any objection - from pricing concerns to competitor comparisons and technical questions.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Closing Calls</h3>
              <p className="text-gray-600">
                Access proven closing techniques and urgency builders tailored to your prospect's specific situation and buying signals.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Follow-up Calls</h3>
              <p className="text-gray-600">
                Get conversation starters and next steps that keep deals moving forward without being pushy or repetitive.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Cold Calls</h3>
              <p className="text-gray-600">
                Receive dynamic openers and value propositions that adapt to how prospects respond to your initial pitch for higher connection rates.
              </p>
            </div>
          </div>

          <div className="mt-12 max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-emerald-800">Trusted by Sales Professionals Worldwide</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">10K+</div>
                <p className="text-gray-600">Active Users</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">32%</div>
                <p className="text-gray-600">Higher Close Rates</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">45%</div>
                <p className="text-gray-600">Better Objection Handling</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">4.9/5</div>
                <p className="text-gray-600">User Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Experience the Magic of AI Sales Teleprompter
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Join the sales revolution. Never be at a loss for words again with our magical, undetectable AI sales teleprompter.
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
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Sales Professionals Say About Our Teleprompter</h2>
            <p className="text-lg text-gray-600">Real feedback from sales professionals using our AI teleprompter</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-emerald-800 font-bold text-xl">M</span>
                </div>
                <div>
                  <h4 className="font-bold">Michael T.</h4>
                  <p className="text-sm text-gray-600">Enterprise Account Executive</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "This AI teleprompter has completely transformed my sales calls. I used to freeze when handling tough objections, but now I always have the perfect response ready. My close rate is up 38% since I started using it."
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-emerald-800 font-bold text-xl">S</span>
                </div>
                <div>
                  <h4 className="font-bold">Sarah K.</h4>
                  <p className="text-sm text-gray-600">SDR Team Lead</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "My entire SDR team uses this teleprompter daily. It's like having a senior sales coach on every call. Our meeting booking rate has increased by 42% and ramp time for new SDRs has been cut in half."
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-emerald-800 font-bold text-xl">J</span>
                </div>
                <div>
                  <h4 className="font-bold">James R.</h4>
                  <p className="text-sm text-gray-600">Sales Director</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The best part about this teleprompter is that it's completely undetectable. Prospects have no idea I'm getting real-time guidance, which keeps conversations natural while giving me a huge advantage."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Teleprompter Resources & Guides</h2>
            <p className="text-lg text-gray-600">Learn how to maximize your sales success with our AI teleprompter</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3">Teleprompter Best Practices</h3>
              <p className="text-gray-600 mb-4">
                Learn how to use our AI teleprompter effectively with these proven best practices from top sales performers.
              </p>
              <a href="#" className="text-emerald-600 hover:text-emerald-700 font-medium">Read the guide →</a>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3">Objection Handling Scripts</h3>
              <p className="text-gray-600 mb-4">
                Access our library of proven objection handling scripts that you can customize and save in your teleprompter.
              </p>
              <a href="#" className="text-emerald-600 hover:text-emerald-700 font-medium">View scripts →</a>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3">Teleprompter Setup Guide</h3>
              <p className="text-gray-600 mb-4">
                Step-by-step instructions for setting up your AI teleprompter with your favorite video conferencing tools.
              </p>
              <a href="#" className="text-emerald-600 hover:text-emerald-700 font-medium">View setup guide →</a>
            </div>
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