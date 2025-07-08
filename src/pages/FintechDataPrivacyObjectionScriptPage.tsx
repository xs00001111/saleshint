import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Lock, Shield, FileText, CheckCircle, ArrowRight, Eye, Key } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const FintechDataPrivacyObjectionScriptPage: React.FC = () => {
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
              <Lock className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Fintech Data Privacy</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-emerald-600">Fintech Data-Privacy</span> Objection Script
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Master financial technology sales with proven data privacy objection scripts. Turn security concerns into trust-building opportunities in the highly regulated fintech market.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The fintech privacy objection framework used by leading financial technology companies
            </p>
          </div>

          {/* Demo Preview */}
          <div className="max-w-5xl mx-auto mb-16">
            <DemoPreview />
          </div>
        </div>
      </section>

      {/* Data Privacy Objection Scripts */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Proven Fintech Data Privacy Objection Scripts
            </h2>
            <p className="text-xl text-gray-600">
              Handle financial data privacy concerns with confidence using these regulatory-focused responses.
            </p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {/* Script 1 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-2xl font-bold">"How do you protect sensitive financial data?"</h3>
                </div>
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Fintech Prospect:</strong> "We handle extremely sensitive financial data. How can we be sure your solution will protect it adequately?"
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "That's a critical question in fintech. We've built our platform specifically for financial institutions with security and compliance as core design principles, not afterthoughts."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We implement bank-grade security measures including AES-256 encryption for data at rest and TLS 1.3 for data in transit. We're SOC 2 Type II and PCI DSS Level 1 certified, and we conduct quarterly penetration tests by independent security firms."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We also maintain a comprehensive security program that includes employee background checks, security awareness training, and a zero-trust architecture. Would you like me to share our security whitepaper and connect you with our CISO to discuss your specific requirements?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Design:</strong> Financial-specific security
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Measures:</strong> Bank-grade encryption
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Program:</strong> Comprehensive security approach
                </div>
              </div>
            </div>

            {/* Script 2 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-2xl font-bold">"How do you ensure regulatory compliance?"</h3>
                </div>
                <FileText className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Fintech Prospect:</strong> "Our industry is heavily regulated. How does your solution ensure we stay compliant with financial regulations?"
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Regulatory compliance is at the core of our platform. We've built our solution to address the specific requirements of financial institutions, including GLBA, GDPR, CCPA, and other relevant regulations."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Our compliance features include comprehensive audit trails, data residency controls, configurable retention policies, and built-in consent management. We also provide regular compliance updates as regulations evolve."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We work with over 200 financial institutions, including [similar companies], who rely on our platform to maintain compliance. Our customers have successfully passed regulatory audits with our documentation and controls. Would you like to see our compliance documentation package?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Coverage:</strong> Multiple financial regulations
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Features:</strong> Built-in compliance tools
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Proof:</strong> 200+ financial institutions
                </div>
              </div>
            </div>

            {/* Script 3 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-2xl font-bold">"What about data ownership and access?"</h3>
                </div>
                <Key className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Fintech Prospect:</strong> "We're concerned about who owns our data and who can access it in your system."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "That's a critical concern in financial services. Let me be clear: you retain 100% ownership of your data at all times. Our terms of service explicitly state that your data belongs to you, not us."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "For access controls, we implement strict role-based access with the principle of least privilege. Our employees have no default access to customer data. Any access for support purposes requires explicit customer approval and is fully logged."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We also provide comprehensive access controls for your team, allowing you to define exactly who can access what data. All access is logged and available in audit reports. Would you like me to walk you through our data governance framework in more detail?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Ownership:</strong> 100% customer data ownership
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Access:</strong> Strict role-based controls
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Governance:</strong> Comprehensive audit logging
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
                  Turn Privacy Concerns into Trust Advantages
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our AI provides real-time coaching for fintech data privacy objections with regulatory expertise.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Compliance Documentation</h4>
                      <p className="text-gray-600">Instant access to financial regulatory certifications</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Security Architecture</h4>
                      <p className="text-gray-600">Detailed explanations of financial-grade security</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Governance Models</h4>
                      <p className="text-gray-600">Data ownership and access control frameworks</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Fintech Privacy Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">93%</div>
                    <p className="text-gray-600">Privacy objections successfully addressed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">2.8x</div>
                    <p className="text-gray-600">Faster security approval process</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">100%</div>
                    <p className="text-gray-600">Regulatory compliance maintained</p>
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
            <h2 className="text-3xl font-bold mb-6">Featured in Financial Privacy Resources</h2>
            <p className="text-lg text-gray-600">Leading fintech security experts recommend our privacy approach</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.ftc.gov/business-guidance/privacy-security/financial-privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                FTC Financial Privacy
              </a>
              <p className="text-sm text-gray-500 mt-1">Regulatory Guidance</p>
            </div>
            <div className="text-center">
              <a href="https://www.ffiec.gov/cybersecurity.htm" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                FFIEC
              </a>
              <p className="text-sm text-gray-500 mt-1">Cybersecurity Resources</p>
            </div>
            <div className="text-center">
              <a href="https://www.finra.org/rules-guidance/key-topics/cybersecurity" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                FINRA Cybersecurity
              </a>
              <p className="text-sm text-gray-500 mt-1">Financial Security</p>
            </div>
            <div className="text-center">
              <a href="https://www.occ.gov/topics/supervision-and-examination/bank-operations/privacy/index-privacy.html" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                OCC Privacy
              </a>
              <p className="text-sm text-gray-500 mt-1">Banking Guidance</p>
            </div>
            <div className="text-center">
              <a href="https://www.fincen.gov/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                FinCEN
              </a>
              <p className="text-sm text-gray-500 mt-1">Financial Crimes</p>
            </div>
            <div className="text-center">
              <a href="https://www.fsisac.com/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                FS-ISAC
              </a>
              <p className="text-sm text-gray-500 mt-1">Financial Security</p>
            </div>
            <div className="text-center">
              <a href="https://www.bis.org/bcbs/publ/d454.htm" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                Basel Committee
              </a>
              <p className="text-sm text-gray-500 mt-1">Banking Standards</p>
            </div>
            <div className="text-center">
              <a href="https://www.iapp.org/resources/topics/financial-privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                IAPP Financial
              </a>
              <p className="text-sm text-gray-500 mt-1">Privacy Resources</p>
            </div>
            <div className="text-center">
              <a href="https://www.csbs.org/cybersecurity" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                CSBS
              </a>
              <p className="text-sm text-gray-500 mt-1">State Banking</p>
            </div>
            <div className="text-center">
              <a href="https://www.fintechsecurity.org/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Fintech Security Alliance
              </a>
              <p className="text-sm text-gray-500 mt-1">Industry Group</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Master Fintech Data Privacy Objections
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Get AI-powered financial privacy objection scripts and real-time coaching to build trust with security-conscious financial institutions.
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

export default FintechDataPrivacyObjectionScriptPage;