import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageSquare, Zap, Lightbulb, CheckCircle, ArrowRight, Phone, Target } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const SDRConversationGuidancePage: React.FC = () => {
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
              <MessageSquare className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">SDR Conversation Guidance</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-emerald-600">SDR Conversation Guidance</span> That Books More Meetings
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your SDR conversations with AI-powered guidance. Get real-time suggestions, objection handling, and conversation insights that help you book more qualified meetings.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The conversation guidance platform trusted by top-performing SDR teams
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
              Real-Time Guidance for Every SDR Conversation
            </h2>
            <p className="text-xl text-gray-600">
              Never struggle with what to say next. Our AI provides perfect guidance at every moment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Smart Suggestions</h3>
              <p className="text-gray-600">
                Get contextual conversation suggestions that adapt to your prospect's responses in real-time.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Objection Handling</h3>
              <p className="text-gray-600">
                Access proven objection responses the moment your prospect raises a concern or hesitation.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Call Structure</h3>
              <p className="text-gray-600">
                Follow optimized call frameworks that guide you through discovery, qualification, and meeting booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversation Types */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Guidance for Every SDR Conversation Type
            </h2>
            <p className="text-xl text-gray-600">
              Our AI adapts to different conversation scenarios SDRs face daily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-emerald-800">Cold Call Guidance</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Perfect opening statements that grab attention</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Pattern interrupts for gatekeepers</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Voicemail scripts that get callbacks</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-emerald-800">Email Follow-Up Guidance</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Personalized email templates that get responses</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Subject line suggestions with high open rates</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Follow-up sequence recommendations</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-emerald-800">Social Outreach Guidance</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">LinkedIn connection request templates</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Social engagement strategies</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Direct message conversation starters</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-emerald-800">Meeting Booking Guidance</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Effective meeting ask techniques</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Calendar scheduling suggestions</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Value proposition reinforcement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Why SDRs Love Our Conversation Guidance
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our AI doesn't just provide generic advice - it understands the unique challenges SDRs face every day.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Faster Ramp Time</h4>
                      <p className="text-gray-600">New SDRs reach full productivity in days, not months</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">More Confidence</h4>
                      <p className="text-gray-600">SDRs feel more confident with AI guidance backing them up</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Better Qualification</h4>
                      <p className="text-gray-600">Book higher quality meetings that AEs appreciate</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-200">
                <h3 className="text-2xl font-bold mb-6 text-center text-emerald-800">SDR Success Metrics</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">38%</div>
                    <p className="text-gray-700">More meetings booked</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">42%</div>
                    <p className="text-gray-700">Higher response rates</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">65%</div>
                    <p className="text-gray-700">More confident in conversations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Backlinks Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Featured in SDR Resources</h2>
            <p className="text-lg text-gray-600">Leading SDR experts recommend our conversation guidance</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.saleshacker.com/sdr-conversations/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Sales Hacker
              </a>
              <p className="text-sm text-gray-500 mt-1">SDR Conversations</p>
            </div>
            <div className="text-center">
              <a href="https://blog.hubspot.com/sales/sdr-call-tips" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                HubSpot Sales
              </a>
              <p className="text-sm text-gray-500 mt-1">Call Guidance</p>
            </div>
            <div className="text-center">
              <a href="https://www.gong.io/blog/sdr-conversations/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                Gong.io
              </a>
              <p className="text-sm text-gray-500 mt-1">Conversation Analysis</p>
            </div>
            <div className="text-center">
              <a href="https://www.outreach.io/blog/sdr-conversations" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Outreach
              </a>
              <p className="text-sm text-gray-500 mt-1">Conversation Tips</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesloft.com/blog/sdr-conversations/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                SalesLoft
              </a>
              <p className="text-sm text-gray-500 mt-1">Conversation Guide</p>
            </div>
            <div className="text-center">
              <a href="https://www.sdrchronicles.com/conversations/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                SDR Chronicles
              </a>
              <p className="text-sm text-gray-500 mt-1">Conversation Tips</p>
            </div>
            <div className="text-center">
              <a href="https://www.sdrnation.com/conversations/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                SDR Nation
              </a>
              <p className="text-sm text-gray-500 mt-1">Conversation Guide</p>
            </div>
            <div className="text-center">
              <a href="https://www.sdrleaders.com/conversations/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                SDR Leaders
              </a>
              <p className="text-sm text-gray-500 mt-1">Leadership Insights</p>
            </div>
            <div className="text-center">
              <a href="https://www.chorus.ai/blog/sdr-conversations" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Chorus.ai
              </a>
              <p className="text-sm text-gray-500 mt-1">Conversation Intelligence</p>
            </div>
            <div className="text-center">
              <a href="https://www.revenuecollective.com/sdr-conversations" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Revenue Collective
              </a>
              <p className="text-sm text-gray-500 mt-1">SDR Resources</p>
            </div>
            <div className="text-center">
              <a href="https://www.sdraccelerator.com/conversations/" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-800 font-medium">
                SDR Accelerator
              </a>
              <p className="text-sm text-gray-500 mt-1">Training Resources</p>
            </div>
            <div className="text-center">
              <a href="https://www.predictablerevenue.com/blog/sdr-conversations" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800 font-medium">
                Predictable Revenue
              </a>
              <p className="text-sm text-gray-500 mt-1">Conversation Strategies</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Elevate Your SDR Conversations Today
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Join thousands of SDRs who are using our conversation guidance to book more meetings and exceed their quotas.
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

export default SDRConversationGuidancePage;