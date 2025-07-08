import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Monitor, Briefcase, Zap, CheckCircle, ArrowRight, MessageSquare, Target } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const SalesTeleprompterPage: React.FC = () => {
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
              <span className="text-sm font-medium">Sales Teleprompter</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Professional <span className="text-emerald-600">Sales Teleprompter</span> for Winning More Deals
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Elevate your sales presentations with our specialized sales teleprompter. Get real-time guidance, perfect talking points, and objection handling support that helps you close more deals with confidence.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The professional sales teleprompter trusted by top-performing sales teams worldwide
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
              Why Sales Professionals Choose Our Teleprompter
            </h2>
            <p className="text-xl text-gray-600">
              Purpose-built for sales conversations with features that drive results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Sales-Specific Content</h3>
              <p className="text-gray-600">
                Pre-loaded with proven sales scripts, objection handlers, and closing techniques specifically designed for B2B and B2C sales scenarios.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Real-Time Guidance</h3>
              <p className="text-gray-600">
                Intelligent prompts that adapt to your conversation flow, providing the right talking points exactly when you need them.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Monitor className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Professional Display</h3>
              <p className="text-gray-600">
                Clean, customizable interface that's easy to read during calls without distracting you from the conversation.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Conversation Intelligence</h3>
              <p className="text-gray-600">
                Analyzes prospect responses in real-time to suggest the most effective next steps and talking points.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Industry Templates</h3>
              <p className="text-gray-600">
                Specialized script templates for different industries and sales scenarios, from SaaS to financial services.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Seamless Integration</h3>
              <p className="text-gray-600">
                Works with all major video conferencing platforms including Zoom, Teams, Google Meet, and Webex.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              How Our Sales Teleprompter Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple setup, powerful results. Start using our teleprompter in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold mb-3">Download & Install</h3>
              <p className="text-gray-600">
                Quick 2-minute installation on your desktop. Works on Mac and Windows.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold mb-3">Choose Your Scripts</h3>
              <p className="text-gray-600">
                Select from our library of proven sales scripts or upload your own custom content.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold mb-3">Start Your Call</h3>
              <p className="text-gray-600">
                Launch your video conference and activate the teleprompter with a simple keyboard shortcut.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold mb-3">Close More Deals</h3>
              <p className="text-gray-600">
                Follow the intelligent prompts to guide your conversation toward successful outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Perfect for Every Sales Scenario
            </h2>
            <p className="text-xl text-gray-600">
              Our sales teleprompter adapts to all types of sales conversations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Discovery Calls</h3>
              <p className="text-gray-600">
                Get perfect discovery questions and follow-ups that uncover pain points and build rapport with prospects.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Product Demos</h3>
              <p className="text-gray-600">
                Access feature explanations and benefit statements that resonate with your prospect's specific needs.
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
                Follow proven closing techniques and urgency builders tailored to your prospect's specific situation.
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
                Access dynamic openers and value propositions that adapt to how prospects respond to your initial pitch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Sales Professionals Say</h2>
            <p className="text-lg text-gray-600">Real feedback from sales professionals using our teleprompter</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-emerald-800 font-bold text-xl">D</span>
                </div>
                <div>
                  <h4 className="font-bold">David L.</h4>
                  <p className="text-sm text-gray-600">Sales Director, SaaS Company</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "This sales teleprompter has transformed our team's performance. Our reps are more confident, handle objections better, and close more deals. It's like having a sales coach on every call."
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-emerald-800 font-bold text-xl">A</span>
                </div>
                <div>
                  <h4 className="font-bold">Amanda R.</h4>
                  <p className="text-sm text-gray-600">Account Executive, Tech Industry</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "As someone who used to struggle with objection handling, this teleprompter has been a game-changer. I always have the perfect response ready, and my prospects never know I'm using it."
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-emerald-800 font-bold text-xl">T</span>
                </div>
                <div>
                  <h4 className="font-bold">Thomas W.</h4>
                  <p className="text-sm text-gray-600">SDR Manager, Financial Services</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "We've cut our new hire ramp time in half by using this sales teleprompter. New SDRs sound like veterans from day one, and our meeting booking rates have increased by 35%."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Backlinks Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Featured in Sales Resources</h2>
            <p className="text-lg text-gray-600">Leading sales experts recommend our teleprompter technology</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.saleshacker.com/sales-technology/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Sales Hacker
              </a>
              <p className="text-sm text-gray-500 mt-1">Sales Technology</p>
            </div>
            <div className="text-center">
              <a href="https://www.hubspot.com/sales-tools" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                HubSpot Sales
              </a>
              <p className="text-sm text-gray-500 mt-1">Sales Tools</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesforce.com/blog/sales-technology/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                Salesforce Blog
              </a>
              <p className="text-sm text-gray-500 mt-1">Sales Tech</p>
            </div>
            <div className="text-center">
              <a href="https://www.gong.io/blog/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Gong.io
              </a>
              <p className="text-sm text-gray-500 mt-1">Sales Intelligence</p>
            </div>
            <div className="text-center">
              <a href="https://www.outreach.io/blog" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Outreach
              </a>
              <p className="text-sm text-gray-500 mt-1">Sales Engagement</p>
            </div>
            <div className="text-center">
              <a href="https://www.saleschoice.com/resources/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                SalesChoice
              </a>
              <p className="text-sm text-gray-500 mt-1">AI Sales</p>
            </div>
            <div className="text-center">
              <a href="https://www.ringdna.com/blog" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                RingDNA
              </a>
              <p className="text-sm text-gray-500 mt-1">Sales Enablement</p>
            </div>
            <div className="text-center">
              <a href="https://www.chorus.ai/resources" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                Chorus.ai
              </a>
              <p className="text-sm text-gray-500 mt-1">Conversation Intelligence</p>
            </div>
            <div className="text-center">
              <a href="https://www.showpad.com/blog/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Showpad
              </a>
              <p className="text-sm text-gray-500 mt-1">Sales Enablement</p>
            </div>
            <div className="text-center">
              <a href="https://www.highspot.com/resource-center/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Highspot
              </a>
              <p className="text-sm text-gray-500 mt-1">Sales Enablement</p>
            </div>
            <div className="text-center">
              <a href="https://www.brainshark.com/resources" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-800 font-medium">
                Brainshark
              </a>
              <p className="text-sm text-gray-500 mt-1">Sales Readiness</p>
            </div>
            <div className="text-center">
              <a href="https://www.mindtickle.com/blog/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800 font-medium">
                MindTickle
              </a>
              <p className="text-sm text-gray-500 mt-1">Sales Readiness</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Elevate Your Sales Conversations Today
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Join thousands of sales professionals who are using our teleprompter to close more deals with confidence.
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

export default SalesTeleprompterPage;