import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Phone, MessageSquare, CheckCircle, ArrowRight, Target, Users } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const SDRCallScriptsPage: React.FC = () => {
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
              <FileText className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">SDR Call Scripts</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-emerald-600">SDR Call Scripts</span> That Book More Meetings
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Access a library of proven SDR call scripts that get responses, handle objections, and book more qualified meetings. Customizable for your industry and target accounts.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The call script library trusted by top-performing SDR teams
            </p>
          </div>

          {/* Demo Preview */}
          <div className="max-w-5xl mx-auto mb-16">
            <DemoPreview />
          </div>
        </div>
      </section>

      {/* Script Types Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Comprehensive SDR Script Library
            </h2>
            <p className="text-xl text-gray-600">
              Every script you need for the entire SDR workflow, from cold calls to meeting confirmations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Cold Call Scripts</h3>
              <p className="text-gray-600">
                Attention-grabbing openers, powerful value propositions, and effective qualification questions for cold calls.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Objection Handling Scripts</h3>
              <p className="text-gray-600">
                Proven responses to common objections like "send me information," "no budget," and "call me next quarter."
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Meeting Booking Scripts</h3>
              <p className="text-gray-600">
                Effective meeting asks, calendar scheduling language, and value reinforcement to secure commitments.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Gatekeeper Scripts</h3>
              <p className="text-gray-600">
                Tactful approaches for navigating gatekeepers and reaching decision-makers effectively.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Voicemail Scripts</h3>
              <p className="text-gray-600">
                Concise, compelling voicemail templates that actually get callbacks from busy prospects.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Follow-Up Scripts</h3>
              <p className="text-gray-600">
                Effective follow-up language for different scenarios, from post-call to meeting confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Script Example Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Sample SDR Call Scripts
            </h2>
            <p className="text-xl text-gray-600">
              Preview some of our most effective SDR call scripts
            </p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {/* Script 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-2xl font-bold">Cold Call Opening Script</h3>
                </div>
                <Phone className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <p className="text-gray-700 italic mb-4">
                  "Hi [Prospect Name], this is [Your Name] from [Your Company]. I know I'm catching you in the middle of your day, so I'll be brief.
                </p>
                <p className="text-gray-700 italic mb-4">
                  The reason for my call is that we've been helping [similar companies in prospect's industry] to [specific benefit, e.g., 'reduce their customer acquisition costs by 30%'] and I thought you might be interested in learning how we're doing this.
                </p>
                <p className="text-gray-700 italic">
                  Does that sound relevant to challenges you're facing right now?"
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Key Element:</strong> Respect for time
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Technique:</strong> Social proof with similar companies
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Close:</strong> Open-ended relevance question
                </div>
              </div>
            </div>

            {/* Script 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-2xl font-bold">Objection Handling: "Send Me Information"</h3>
                </div>
                <MessageSquare className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Prospect:</strong> "Just send me some information and I'll look it over."
                </p>
                <p className="text-gray-700 italic mb-4">
                  "I'd be happy to send you some information. To make sure I send you the most relevant materials, could I ask you a quick question? What specific challenge are you looking to solve right now?"
                </p>
                <p className="text-gray-700 italic mb-4">
                  [After they respond]
                </p>
                <p className="text-gray-700 italic">
                  "Thanks for sharing that. Based on what you've told me, I think a quick 15-minute call with [relevant expert at your company] would be much more valuable than sending generic information. They've helped other [prospect's role] at [similar companies] solve that exact challenge. Would you be open to a brief conversation this week?"
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Technique:</strong> Acknowledge and pivot
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Strategy:</strong> Uncover real needs
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Close:</strong> Value-based meeting proposal
                </div>
              </div>
            </div>

            {/* Script 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-2xl font-bold">Meeting Booking Script</h3>
                </div>
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <p className="text-gray-700 italic mb-4">
                  "Based on what you've shared about [recap key pain points], I think it would be valuable for you to speak with [AE name or relevant expert], who has helped companies like [reference similar customer] achieve [specific result].
                </p>
                <p className="text-gray-700 italic mb-4">
                  They could walk you through exactly how we've helped similar companies and answer any specific questions you have about implementation and results.
                </p>
                <p className="text-gray-700 italic">
                  I have availability this [day] at [time] or [alternative day/time]. Which would work better for a brief 30-minute conversation?"
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Technique:</strong> Pain point recap
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Value:</strong> Expert access and similar results
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Close:</strong> Assumptive calendar options
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
                  Why SDRs Love Our Call Scripts
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our scripts aren't just templates - they're dynamic conversation tools that adapt to your unique selling situation.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Proven Effectiveness</h4>
                      <p className="text-gray-600">Scripts tested and refined with thousands of real SDR calls</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Customizable Templates</h4>
                      <p className="text-gray-600">Easily adapt scripts to your industry, product, and prospect</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Real-Time Delivery</h4>
                      <p className="text-gray-600">Scripts appear at the perfect moment during live conversations</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Script Performance Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">42%</div>
                    <p className="text-gray-600">Higher connect-to-meeting conversion</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">35%</div>
                    <p className="text-gray-600">More objections successfully handled</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">28%</div>
                    <p className="text-gray-600">Increase in qualified meetings</p>
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
            <p className="text-lg text-gray-600">Leading SDR experts recommend our call scripts</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.saleshacker.com/sdr-scripts/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Sales Hacker
              </a>
              <p className="text-sm text-gray-500 mt-1">SDR Script Guide</p>
            </div>
            <div className="text-center">
              <a href="https://blog.hubspot.com/sales/sdr-scripts" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                HubSpot Sales
              </a>
              <p className="text-sm text-gray-500 mt-1">Script Templates</p>
            </div>
            <div className="text-center">
              <a href="https://www.gong.io/blog/sdr-scripts/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                Gong.io
              </a>
              <p className="text-sm text-gray-500 mt-1">Data-Driven Scripts</p>
            </div>
            <div className="text-center">
              <a href="https://www.outreach.io/blog/sdr-scripts" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Outreach
              </a>
              <p className="text-sm text-gray-500 mt-1">Script Library</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesloft.com/blog/sdr-scripts/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                SalesLoft
              </a>
              <p className="text-sm text-gray-500 mt-1">Script Examples</p>
            </div>
            <div className="text-center">
              <a href="https://www.sdrchronicles.com/scripts/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                SDR Chronicles
              </a>
              <p className="text-sm text-gray-500 mt-1">Script Collection</p>
            </div>
            <div className="text-center">
              <a href="https://www.sdrnation.com/scripts/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                SDR Nation
              </a>
              <p className="text-sm text-gray-500 mt-1">Script Resources</p>
            </div>
            <div className="text-center">
              <a href="https://www.sdrleaders.com/scripts/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                SDR Leaders
              </a>
              <p className="text-sm text-gray-500 mt-1">Script Frameworks</p>
            </div>
            <div className="text-center">
              <a href="https://www.chorus.ai/blog/sdr-scripts" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Chorus.ai
              </a>
              <p className="text-sm text-gray-500 mt-1">Script Analysis</p>
            </div>
            <div className="text-center">
              <a href="https://www.revenuecollective.com/sdr-scripts" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Revenue Collective
              </a>
              <p className="text-sm text-gray-500 mt-1">Script Resources</p>
            </div>
            <div className="text-center">
              <a href="https://www.sdraccelerator.com/scripts/" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-800 font-medium">
                SDR Accelerator
              </a>
              <p className="text-sm text-gray-500 mt-1">Script Training</p>
            </div>
            <div className="text-center">
              <a href="https://www.predictablerevenue.com/blog/sdr-scripts" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800 font-medium">
                Predictable Revenue
              </a>
              <p className="text-sm text-gray-500 mt-1">Script Frameworks</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Get Access to Proven SDR Call Scripts
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Join thousands of SDRs who are using our scripts to book more meetings and exceed their quotas.
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

export default SDRCallScriptsPage;