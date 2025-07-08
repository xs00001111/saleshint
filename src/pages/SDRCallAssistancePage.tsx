import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Headphones, Zap, MessageSquare, CheckCircle, ArrowRight, Phone, Target } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const SDRCallAssistancePage: React.FC = () => {
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
              <Headphones className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">SDR Call Assistance</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-emerald-600">SDR Call Assistance</span> That Books More Meetings
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your cold calls with AI-powered assistance. Get real-time guidance, objection handling, and conversation insights that help you book more qualified meetings.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The call assistance platform trusted by top-performing SDR teams
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
              Real-Time Assistance for Every SDR Call
            </h2>
            <p className="text-xl text-gray-600">
              Never struggle with what to say next. Our AI provides perfect guidance at every moment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Live Call Coaching</h3>
              <p className="text-gray-600">
                Get real-time suggestions and guidance during your calls, helping you navigate conversations effectively.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Objection Handling</h3>
              <p className="text-gray-600">
                Access proven objection responses the moment your prospect raises a concern or hesitation.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Meeting Booking Assistance</h3>
              <p className="text-gray-600">
                Get perfect meeting asks and calendar scheduling language that increases your booking rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call Assistance Types */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Assistance for Every Call Scenario
            </h2>
            <p className="text-xl text-gray-600">
              Our AI adapts to different call scenarios SDRs face daily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-emerald-800">Cold Call Assistance</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Attention-grabbing opening lines</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Personalized value propositions</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Effective qualification questions</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-emerald-800">Gatekeeper Navigation</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Respectful but effective approaches</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Strategic questioning techniques</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Alternative contact strategies</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-emerald-800">Objection Response Assistance</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Responses to "send me information"</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Handling "no budget" objections</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Addressing "call me later" pushbacks</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-emerald-800">Meeting Booking Assistance</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Value-based meeting proposals</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Calendar scheduling language</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Confirmation and follow-up guidance</span>
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
                  Why SDRs Love Our Call Assistance
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our AI doesn't just provide generic advice - it understands the unique challenges SDRs face on calls.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Instant Confidence</h4>
                      <p className="text-gray-600">Never feel unprepared on calls with real-time guidance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Faster Ramp Time</h4>
                      <p className="text-gray-600">New SDRs perform like veterans with AI assistance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Continuous Learning</h4>
                      <p className="text-gray-600">Improve with every call as the AI provides feedback</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-200">
                <h3 className="text-2xl font-bold mb-6 text-center text-emerald-800">SDR Call Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">45%</div>
                    <p className="text-gray-700">More meetings booked</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">38%</div>
                    <p className="text-gray-700">Higher connect-to-meeting rate</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">70%</div>
                    <p className="text-gray-700">More confident on calls</p>
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
            <p className="text-lg text-gray-600">Leading SDR experts recommend our call assistance</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.saleshacker.com/sdr-calls/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Sales Hacker
              </a>
              <p className="text-sm text-gray-500 mt-1">SDR Call Guide</p>
            </div>
            <div className="text-center">
              <a href="https://blog.hubspot.com/sales/sdr-call-assistance" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                HubSpot Sales
              </a>
              <p className="text-sm text-gray-500 mt-1">Call Resources</p>
            </div>
            <div className="text-center">
              <a href="https://www.gong.io/blog/sdr-calls/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                Gong.io
              </a>
              <p className="text-sm text-gray-500 mt-1">Call Analysis</p>
            </div>
            <div className="text-center">
              <a href="https://www.outreach.io/blog/sdr-call-assistance" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Outreach
              </a>
              <p className="text-sm text-gray-500 mt-1">Call Guidance</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesloft.com/blog/sdr-calls/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                SalesLoft
              </a>
              <p className="text-sm text-gray-500 mt-1">Call Strategies</p>
            </div>
            <div className="text-center">
              <a href="https://www.sdrchronicles.com/calls/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                SDR Chronicles
              </a>
              <p className="text-sm text-gray-500 mt-1">Call Techniques</p>
            </div>
            <div className="text-center">
              <a href="https://www.sdrnation.com/calls/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                SDR Nation
              </a>
              <p className="text-sm text-gray-500 mt-1">Call Resources</p>
            </div>
            <div className="text-center">
              <a href="https://www.sdrleaders.com/calls/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                SDR Leaders
              </a>
              <p className="text-sm text-gray-500 mt-1">Call Management</p>
            </div>
            <div className="text-center">
              <a href="https://www.chorus.ai/blog/sdr-calls" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Chorus.ai
              </a>
              <p className="text-sm text-gray-500 mt-1">Call Intelligence</p>
            </div>
            <div className="text-center">
              <a href="https://www.revenuecollective.com/sdr-calls" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Revenue Collective
              </a>
              <p className="text-sm text-gray-500 mt-1">Call Resources</p>
            </div>
            <div className="text-center">
              <a href="https://www.sdraccelerator.com/calls/" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-800 font-medium">
                SDR Accelerator
              </a>
              <p className="text-sm text-gray-500 mt-1">Call Training</p>
            </div>
            <div className="text-center">
              <a href="https://www.predictablerevenue.com/blog/sdr-calls" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800 font-medium">
                Predictable Revenue
              </a>
              <p className="text-sm text-gray-500 mt-1">Call Frameworks</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Transform Your SDR Calls Today
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Join thousands of SDRs who are using our call assistance to book more meetings and exceed their quotas.
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

export default SDRCallAssistancePage;