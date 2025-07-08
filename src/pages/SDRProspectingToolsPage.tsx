import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, Target, Database, CheckCircle, ArrowRight, Mail, Users } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const SDRProspectingToolsPage: React.FC = () => {
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
              <Search className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">SDR Prospecting Tools</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-emerald-600">SDR Prospecting Tools</span> That Find Your Best Leads
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover and engage high-quality prospects with AI-powered prospecting tools. Find the right contacts, personalize your outreach, and book more qualified meetings.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The prospecting toolkit trusted by top-performing SDR teams
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
              Intelligent Prospecting Tools for SDRs
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to find, research, and engage the right prospects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Database className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">AI Lead Generation</h3>
              <p className="text-gray-600">
                Discover ideal prospects with AI that identifies companies and contacts matching your ideal customer profile.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Contact Finder</h3>
              <p className="text-gray-600">
                Find accurate contact information including direct dials, emails, and social profiles for your target accounts.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Account Intelligence</h3>
              <p className="text-gray-600">
                Get company insights, buying signals, and personalization data to make your outreach more relevant.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Personalized Outreach</h3>
              <p className="text-gray-600">
                Create highly personalized emails and messages that reference prospect-specific details and trigger events.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Buying Signal Alerts</h3>
              <p className="text-gray-600">
                Get notified of trigger events like funding rounds, leadership changes, and technology adoption.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Prospect Prioritization</h3>
              <p className="text-gray-600">
                AI-powered scoring that helps you focus on the prospects most likely to convert to meetings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prospecting Workflow Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              The Complete SDR Prospecting Workflow
            </h2>
            <p className="text-xl text-gray-600">
              Our tools support every step of the prospecting process
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Find Accounts</h3>
                <p className="text-gray-600">
                  Discover companies that match your ideal customer profile with AI-powered account identification.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Research & Enrich</h3>
                <p className="text-gray-600">
                  Gather company intelligence, buying signals, and personalization data to inform your outreach.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Find Contacts</h3>
                <p className="text-gray-600">
                  Identify the right decision-makers and influencers with accurate contact information.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3">Personalize & Engage</h3>
                <p className="text-gray-600">
                  Create highly personalized outreach that resonates with each prospect's specific situation.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center text-emerald-800">The SalesHint Advantage</h3>
              <p className="text-gray-700 text-center mb-8">
                Unlike other prospecting tools, our platform integrates the entire workflow in one place, with AI assistance at every step.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">3x</div>
                  <p className="text-gray-700">Faster prospecting workflow</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">45%</div>
                  <p className="text-gray-700">Higher quality prospects</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">2.5x</div>
                  <p className="text-gray-700">More personalized outreach</p>
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
                  Why SDRs Love Our Prospecting Tools
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our tools are specifically designed to solve the unique prospecting challenges SDRs face every day.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Time Savings</h4>
                      <p className="text-gray-600">Reduce research time by 70% with AI-powered prospecting</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Higher Quality Leads</h4>
                      <p className="text-gray-600">Focus on prospects most likely to convert to opportunities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Better Personalization</h4>
                      <p className="text-gray-600">Create truly personalized outreach that gets responses</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Prospecting Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">3.5x</div>
                    <p className="text-gray-600">Higher response rates</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">70%</div>
                    <p className="text-gray-600">Time saved on research</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">42%</div>
                    <p className="text-gray-600">More meetings booked</p>
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
            <p className="text-lg text-gray-600">Leading SDR experts recommend our prospecting tools</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.saleshacker.com/sdr-prospecting/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Sales Hacker
              </a>
              <p className="text-sm text-gray-500 mt-1">Prospecting Guide</p>
            </div>
            <div className="text-center">
              <a href="https://blog.hubspot.com/sales/sdr-prospecting" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                HubSpot Sales
              </a>
              <p className="text-sm text-gray-500 mt-1">Prospecting Tips</p>
            </div>
            <div className="text-center">
              <a href="https://www.gong.io/blog/sdr-prospecting/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                Gong.io
              </a>
              <p className="text-sm text-gray-500 mt-1">Data-Driven Prospecting</p>
            </div>
            <div className="text-center">
              <a href="https://www.outreach.io/blog/sdr-prospecting" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Outreach
              </a>
              <p className="text-sm text-gray-500 mt-1">Prospecting Playbooks</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesloft.com/blog/sdr-prospecting/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                SalesLoft
              </a>
              <p className="text-sm text-gray-500 mt-1">Prospecting Strategies</p>
            </div>
            <div className="text-center">
              <a href="https://www.sdrchronicles.com/prospecting/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                SDR Chronicles
              </a>
              <p className="text-sm text-gray-500 mt-1">Prospecting Tactics</p>
            </div>
            <div className="text-center">
              <a href="https://www.sdrnation.com/prospecting/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                SDR Nation
              </a>
              <p className="text-sm text-gray-500 mt-1">Prospecting Resources</p>
            </div>
            <div className="text-center">
              <a href="https://www.sdrleaders.com/prospecting/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                SDR Leaders
              </a>
              <p className="text-sm text-gray-500 mt-1">Prospecting Leadership</p>
            </div>
            <div className="text-center">
              <a href="https://www.chorus.ai/blog/sdr-prospecting" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Chorus.ai
              </a>
              <p className="text-sm text-gray-500 mt-1">Prospecting Intelligence</p>
            </div>
            <div className="text-center">
              <a href="https://www.revenuecollective.com/sdr-prospecting" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Revenue Collective
              </a>
              <p className="text-sm text-gray-500 mt-1">Prospecting Resources</p>
            </div>
            <div className="text-center">
              <a href="https://www.sdraccelerator.com/prospecting/" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-800 font-medium">
                SDR Accelerator
              </a>
              <p className="text-sm text-gray-500 mt-1">Prospecting Training</p>
            </div>
            <div className="text-center">
              <a href="https://www.predictablerevenue.com/blog/sdr-prospecting" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800 font-medium">
                Predictable Revenue
              </a>
              <p className="text-sm text-gray-500 mt-1">Prospecting Models</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Supercharge Your SDR Prospecting Today
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Join thousands of SDRs who are using our prospecting tools to find better leads and book more meetings.
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

export default SDRProspectingToolsPage;