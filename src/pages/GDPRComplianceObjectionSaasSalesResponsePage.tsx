import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, FileCheck, CheckCircle, ArrowRight, Globe, FileText } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const GDPRComplianceObjectionSaasSalesResponsePage: React.FC = () => {
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
              <Globe className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">GDPR Compliance Objection</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-emerald-600">GDPR Compliance Objection</span> SaaS Sales Response Scripts
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Master GDPR compliance objections with proven response scripts. Turn data privacy concerns into trust-building conversations that close deals in the EU market.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The GDPR compliance response framework trusted by SaaS companies selling in Europe
            </p>
          </div>

          {/* Demo Preview */}
          <div className="max-w-5xl mx-auto mb-16">
            <DemoPreview />
          </div>
        </div>
      </section>

      {/* GDPR Compliance Response Scripts */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Proven GDPR Compliance Objection Responses
            </h2>
            <p className="text-xl text-gray-600">
              Handle every GDPR concern with confidence using these EU-compliant response scripts.
            </p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {/* Response 1 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-2xl font-bold">"We're concerned about GDPR compliance"</h3>
                </div>
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>EU Prospect:</strong> "We're concerned about whether your solution is fully GDPR compliant. We can't risk non-compliance penalties."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "I completely understand your concern about GDPR compliance. It's a critical consideration for any EU business. Our platform was built with GDPR compliance as a core design principle, not an afterthought."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We've implemented all required technical and organizational measures including data minimization, purpose limitation, and built-in consent management. We also provide a comprehensive Data Processing Agreement that's been vetted by EU privacy attorneys."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Would you like me to send over our GDPR compliance documentation package and arrange a call with our Data Protection Officer to address any specific concerns your legal team might have?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Acknowledge:</strong> GDPR is a core principle
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Specifics:</strong> Technical measures implemented
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Proof:</strong> Documentation and DPO access
                </div>
              </div>
            </div>

            {/* Response 2 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-2xl font-bold">"Where is our data stored?"</h3>
                </div>
                <FileText className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>EU Prospect:</strong> "Where exactly is our data stored? We need to ensure it stays within the EU to comply with GDPR."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "That's an excellent question. We offer EU data residency with all our enterprise plans. Your data is stored exclusively in our Frankfurt and Dublin data centers, both fully within the EU."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We've implemented strict data localization controls, and our architecture ensures that your data never leaves the EU, even during processing. We also maintain ISO 27001 and ISO 27018 certifications for our EU data centers."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We can provide a detailed data flow map showing exactly where your data resides and how it's processed. Would that be helpful for your compliance team's review?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Location:</strong> EU data centers only
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Certifications:</strong> ISO 27001 and 27018
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Transparency:</strong> Data flow mapping
                </div>
              </div>
            </div>

            {/* Response 3 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-2xl font-bold">"What about data subject rights?"</h3>
                </div>
                <Lock className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>EU Prospect:</strong> "How does your platform handle data subject rights requests like access, deletion, and portability?"
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We've built comprehensive data subject rights management directly into our platform. You can respond to access, rectification, deletion, and portability requests with just a few clicks."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Our system maintains a complete audit trail of all data subject requests and responses, which simplifies your compliance reporting. We also provide automated data inventory mapping to quickly locate all personal data for any individual."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We've helped clients reduce their data subject request response time from weeks to hours. Would you like to see a quick demo of how our data subject rights management works?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Built-in:</strong> Native DSR management
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Auditing:</strong> Complete compliance trail
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Efficiency:</strong> Hours vs. weeks response
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
                  Turn GDPR Concerns into Trust Advantages
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our AI provides real-time coaching for GDPR compliance objections with EU-specific responses.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Compliance Documentation</h4>
                      <p className="text-gray-600">Instant access to GDPR compliance certificates and DPAs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Technical Measures</h4>
                      <p className="text-gray-600">Detailed explanations of security and privacy controls</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Expert Guidance</h4>
                      <p className="text-gray-600">AI coaching for complex GDPR discussions with legal teams</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">GDPR Compliance Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">94%</div>
                    <p className="text-gray-600">GDPR objections successfully addressed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">3.5x</div>
                    <p className="text-gray-600">Faster legal approval process</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">100%</div>
                    <p className="text-gray-600">EU data residency compliance</p>
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
            <h2 className="text-3xl font-bold mb-6">Featured in GDPR Compliance Resources</h2>
            <p className="text-lg text-gray-600">Leading data privacy experts recommend our GDPR compliance approach</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://gdpr.eu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                GDPR.eu
              </a>
              <p className="text-sm text-gray-500 mt-1">Official Resource</p>
            </div>
            <div className="text-center">
              <a href="https://edpb.europa.eu/edpb_en" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                European Data Protection Board
              </a>
              <p className="text-sm text-gray-500 mt-1">Regulatory Authority</p>
            </div>
            <div className="text-center">
              <a href="https://iapp.org/resources/topics/eu-gdpr/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                IAPP GDPR Resources
              </a>
              <p className="text-sm text-gray-500 mt-1">Privacy Association</p>
            </div>
            <div className="text-center">
              <a href="https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                ICO GDPR Guide
              </a>
              <p className="text-sm text-gray-500 mt-1">UK Authority</p>
            </div>
            <div className="text-center">
              <a href="https://www.cnil.fr/en/home" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                CNIL
              </a>
              <p className="text-sm text-gray-500 mt-1">French Authority</p>
            </div>
            <div className="text-center">
              <a href="https://www.enforcementtracker.com/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                GDPR Enforcement Tracker
              </a>
              <p className="text-sm text-gray-500 mt-1">Fine Database</p>
            </div>
            <div className="text-center">
              <a href="https://www.noyb.eu/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                NOYB
              </a>
              <p className="text-sm text-gray-500 mt-1">Privacy Organization</p>
            </div>
            <div className="text-center">
              <a href="https://www.privacyshield.gov/welcome" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                Privacy Shield
              </a>
              <p className="text-sm text-gray-500 mt-1">Data Transfer</p>
            </div>
            <div className="text-center">
              <a href="https://www.enisa.europa.eu/topics/data-protection" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                ENISA
              </a>
              <p className="text-sm text-gray-500 mt-1">EU Cybersecurity</p>
            </div>
            <div className="text-center">
              <a href="https://ec.europa.eu/info/law/law-topic/data-protection_en" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                European Commission
              </a>
              <p className="text-sm text-gray-500 mt-1">Data Protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Master GDPR Compliance Objections
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Get AI-powered GDPR compliance scripts and real-time coaching to build trust with EU prospects.
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

export default GDPRComplianceObjectionSaasSalesResponsePage;