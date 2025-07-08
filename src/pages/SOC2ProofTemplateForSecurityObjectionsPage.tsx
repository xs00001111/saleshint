import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, FileCheck, Lock, CheckCircle, ArrowRight, Eye, Key } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const SOC2ProofTemplateForSecurityObjectionsPage: React.FC = () => {
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
              <FileCheck className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">SOC 2 Proof Template</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-emerald-600">SOC 2 Proof Template</span> for Security Objections
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Master security objections with proven SOC 2 proof templates. Turn compliance concerns into trust-building opportunities and close more deals with security-conscious buyers.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The SOC 2 security objection framework used by leading SaaS companies
            </p>
          </div>

          {/* Demo Preview */}
          <div className="max-w-5xl mx-auto mb-16">
            <DemoPreview />
          </div>
        </div>
      </section>

      {/* SOC 2 Proof Templates */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Proven SOC 2 Security Objection Templates
            </h2>
            <p className="text-xl text-gray-600">
              Handle compliance concerns with confidence using these security-focused templates.
            </p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {/* Template 1 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-2xl font-bold">The SOC 2 Compliance Overview Template</h3>
                </div>
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Security Prospect:</strong> "We need vendors with SOC 2 compliance. Can you prove your security posture?"
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Absolutely. We maintain SOC 2 Type II compliance across all five trust principles: Security, Availability, Processing Integrity, Confidentiality, and Privacy. Our most recent audit was completed on [date] by [reputable auditor]."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We've implemented comprehensive controls across our organization, including encryption at rest and in transit, multi-factor authentication, regular penetration testing, and continuous monitoring. Our SOC 2 compliance is not just a checkbox—it's embedded in our development and operational processes."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "I'd be happy to provide our SOC 2 report under NDA, along with our security whitepaper that details our controls. We can also arrange a call with our CISO to address any specific compliance questions your security team might have. Would that be helpful?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Scope:</strong> All five trust principles
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Details:</strong> Specific security controls
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Proof:</strong> Report access and CISO call
                </div>
              </div>
            </div>

            {/* Template 2 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-2xl font-bold">The Security Questionnaire Response Template</h3>
                </div>
                <Lock className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Security Prospect:</strong> "We'll need you to complete our 300-question security assessment before we can move forward."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We're happy to complete your security assessment. To streamline the process, we maintain pre-completed responses for common security frameworks including CAIQ, SIG, VSA, and ISO 27001 questionnaires."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We also have a dedicated security portal where we can securely share our SOC 2 Type II report, penetration test results, vulnerability management program documentation, and other security artifacts that typically address 80-90% of custom questionnaires."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Our security compliance team typically responds to assessments within 3 business days, and we have a 95% first-time approval rate. Would it be helpful if I connected you with our security team to get this process started right away?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Efficiency:</strong> Pre-completed frameworks
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Resources:</strong> Dedicated security portal
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Process:</strong> 3-day response, 95% approval
                </div>
              </div>
            </div>

            {/* Template 3 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-2xl font-bold">The Continuous Compliance Template</h3>
                </div>
                <Key className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Security Prospect:</strong> "How do we know you'll maintain compliance between audits?"
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "That's an excellent question that gets to the heart of true security. We maintain continuous compliance through automated monitoring and controls, not just point-in-time audits."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We use automated compliance monitoring tools that continuously validate our controls against SOC 2 requirements. Our security team receives real-time alerts for any deviations, and we conduct monthly internal audits between our annual third-party assessments."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We also provide our customers with a real-time compliance dashboard that shows the current status of our security controls. This gives you visibility into our compliance posture at any time, not just during audit periods. Would you like to see a demo of this dashboard?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Approach:</strong> Continuous vs. point-in-time
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Tools:</strong> Automated compliance monitoring
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Transparency:</strong> Real-time compliance dashboard
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
                  Turn Security Concerns into Trust Advantages
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our AI provides real-time coaching for SOC 2 and security objections with compliance expertise.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Compliance Documentation</h4>
                      <p className="text-gray-600">Instant access to security certifications and reports</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Security Questionnaires</h4>
                      <p className="text-gray-600">Pre-completed responses for common frameworks</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Technical Expertise</h4>
                      <p className="text-gray-600">AI guidance for complex security discussions</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Security Compliance Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">91%</div>
                    <p className="text-gray-600">Security objections successfully addressed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">3.2x</div>
                    <p className="text-gray-600">Faster security approval process</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">98%</div>
                    <p className="text-gray-600">Security questionnaire pass rate</p>
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
            <h2 className="text-3xl font-bold mb-6">Featured in Security Compliance Resources</h2>
            <p className="text-lg text-gray-600">Leading security experts recommend our SOC 2 compliance approach</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/sorhome.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                AICPA SOC
              </a>
              <p className="text-sm text-gray-500 mt-1">Official Resource</p>
            </div>
            <div className="text-center">
              <a href="https://www.isaca.org/resources/soc-2" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                ISACA
              </a>
              <p className="text-sm text-gray-500 mt-1">SOC 2 Resources</p>
            </div>
            <div className="text-center">
              <a href="https://www.sans.org/security-resources/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                SANS Institute
              </a>
              <p className="text-sm text-gray-500 mt-1">Security Resources</p>
            </div>
            <div className="text-center">
              <a href="https://www.cisecurity.org/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                CIS
              </a>
              <p className="text-sm text-gray-500 mt-1">Security Benchmarks</p>
            </div>
            <div className="text-center">
              <a href="https://www.nist.gov/cyberframework" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                NIST Cybersecurity
              </a>
              <p className="text-sm text-gray-500 mt-1">Framework</p>
            </div>
            <div className="text-center">
              <a href="https://www.csoonline.com/category/compliance/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                CSO Online
              </a>
              <p className="text-sm text-gray-500 mt-1">Compliance News</p>
            </div>
            <div className="text-center">
              <a href="https://www.darkreading.com/compliance" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                Dark Reading
              </a>
              <p className="text-sm text-gray-500 mt-1">Compliance Coverage</p>
            </div>
            <div className="text-center">
              <a href="https://www.infosecurity-magazine.com/compliance/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                Infosecurity Magazine
              </a>
              <p className="text-sm text-gray-500 mt-1">Compliance News</p>
            </div>
            <div className="text-center">
              <a href="https://securityscorecard.com/blog/category/compliance" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                SecurityScorecard
              </a>
              <p className="text-sm text-gray-500 mt-1">Compliance Blog</p>
            </div>
            <div className="text-center">
              <a href="https://www.vanta.com/resources" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Vanta Resources
              </a>
              <p className="text-sm text-gray-500 mt-1">Compliance Automation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Master SOC 2 Security Objections
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Get AI-powered security compliance scripts and real-time coaching to build trust with security-conscious buyers.
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

export default SOC2ProofTemplateForSecurityObjectionsPage;