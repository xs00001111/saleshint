import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, FileCheck, CheckCircle, ArrowRight, Heart, Database } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const HealthcareSaasSecurityObjectionRebuttalPage: React.FC = () => {
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
              <Shield className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Healthcare SaaS Security</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-emerald-600">Healthcare SaaS Security</span> Objection Rebuttal Scripts
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Master healthcare SaaS sales with proven security objection rebuttals. Turn HIPAA concerns into trust-building conversations that close deals in regulated healthcare environments.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The healthcare security rebuttal framework trusted by medical SaaS companies
            </p>
          </div>

          {/* Demo Preview */}
          <div className="max-w-5xl mx-auto mb-16">
            <DemoPreview />
          </div>
        </div>
      </section>

      {/* Security Rebuttal Scripts */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Proven Healthcare Security Objection Rebuttals
            </h2>
            <p className="text-xl text-gray-600">
              Handle every healthcare security concern with confidence using these HIPAA-compliant responses.
            </p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {/* Rebuttal 1 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-2xl font-bold">"We can't use cloud software for patient data"</h3>
                </div>
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Healthcare Prospect:</strong> "We can't use cloud-based software for patient data due to HIPAA requirements."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "I completely understand your concern about HIPAA compliance. Actually, our platform is specifically designed for healthcare organizations and exceeds HIPAA requirements."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We're SOC 2 Type II certified, HITRUST certified, and have a signed BAA with over 500 healthcare organizations including [similar organization type]."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "In fact, our cloud infrastructure is more secure than most on-premise solutions. Would you like me to show you our security documentation and have our compliance team walk through our certifications?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Acknowledge:</strong> Validate HIPAA concerns
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Credentials:</strong> Specific certifications
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Proof:</strong> Offer documentation
                </div>
              </div>
            </div>

            {/* Rebuttal 2 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-2xl font-bold">"What if there's a data breach?"</h3>
                </div>
                <Database className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Healthcare Prospect:</strong> "What happens if there's a data breach? We can't risk patient information being compromised."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Data security is our highest priority. We use end-to-end encryption, zero-trust architecture, and have never had a breach in our 8-year history."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We carry $10M in cyber liability insurance and have a detailed incident response plan that meets all HIPAA breach notification requirements."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Plus, our security monitoring is 24/7 with real-time threat detection. Most healthcare organizations find our security posture stronger than their current systems."
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Track Record:</strong> Zero breaches in 8 years
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Protection:</strong> $10M cyber insurance
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Monitoring:</strong> 24/7 threat detection
                </div>
              </div>
            </div>

            {/* Rebuttal 3 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-2xl font-bold">"Our IT team needs to approve this"</h3>
                </div>
                <FileCheck className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Healthcare Prospect:</strong> "Our IT security team will need to thoroughly review any new software before approval."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Absolutely, and we welcome that review. We have a complete security package ready for your IT team including our SOC 2 report, penetration test results, and architecture diagrams."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We can also arrange a technical deep-dive call with our Chief Security Officer and your IT team to address any specific concerns."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Most IT teams complete their review in 2-3 weeks. Would you like me to send the security documentation today so they can start the review process?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Prepared:</strong> Complete security package ready
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Support:</strong> CSO technical deep-dive
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Timeline:</strong> 2-3 week review process
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
                  Build Trust with Healthcare Security Expertise
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our AI provides real-time coaching for healthcare security objections with industry-specific responses.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">HIPAA-Compliant Scripts</h4>
                      <p className="text-gray-600">Responses tailored for healthcare compliance requirements</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Security Documentation</h4>
                      <p className="text-gray-600">Instant access to compliance certificates and security proofs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Technical Deep-Dives</h4>
                      <p className="text-gray-600">AI guidance for technical security discussions with IT teams</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Healthcare Security Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">89%</div>
                    <p className="text-gray-600">Security objections successfully addressed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">2.1x</div>
                    <p className="text-gray-600">Faster IT approval process</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">95%</div>
                    <p className="text-gray-600">Healthcare prospects trust our security</p>
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
            <h2 className="text-3xl font-bold mb-6">Featured in Healthcare Security Resources</h2>
            <p className="text-lg text-gray-600">Leading healthcare security experts trust our compliance approach</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.hhs.gov/hipaa/for-professionals/security/guidance/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                HHS HIPAA Security
              </a>
              <p className="text-sm text-gray-500 mt-1">Official Guidance</p>
            </div>
            <div className="text-center">
              <a href="https://hitrustalliance.net/hitrust-csf/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                HITRUST Alliance
              </a>
              <p className="text-sm text-gray-500 mt-1">Security Framework</p>
            </div>
            <div className="text-center">
              <a href="https://www.healthit.gov/topic/privacy-security-and-hipaa" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                HealthIT.gov
              </a>
              <p className="text-sm text-gray-500 mt-1">Privacy & Security</p>
            </div>
            <div className="text-center">
              <a href="https://www.himss.org/resources/cybersecurity" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                HIMSS Cybersecurity
              </a>
              <p className="text-sm text-gray-500 mt-1">Healthcare IT Security</p>
            </div>
            <div className="text-center">
              <a href="https://www.healthcareinfosecurity.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Healthcare InfoSec
              </a>
              <p className="text-sm text-gray-500 mt-1">Security News</p>
            </div>
            <div className="text-center">
              <a href="https://www.ahima.org/topics/information-security/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                AHIMA Security
              </a>
              <p className="text-sm text-gray-500 mt-1">Information Management</p>
            </div>
            <div className="text-center">
              <a href="https://chimecentral.org/cybersecurity/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                CHIME Cybersecurity
              </a>
              <p className="text-sm text-gray-500 mt-1">CIO Resources</p>
            </div>
            <div className="text-center">
              <a href="https://www.aha.org/cybersecurity" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                AHA Cybersecurity
              </a>
              <p className="text-sm text-gray-500 mt-1">Hospital Association</p>
            </div>
            <div className="text-center">
              <a href="https://www.nist.gov/cyberframework/healthcare" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                NIST Healthcare
              </a>
              <p className="text-sm text-gray-500 mt-1">Cybersecurity Framework</p>
            </div>
            <div className="text-center">
              <a href="https://www.healthcareitnews.com/topic/cybersecurity" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Healthcare IT News
              </a>
              <p className="text-sm text-gray-500 mt-1">Security Coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Master Healthcare Security Objections
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Get AI-powered security objection rebuttals and real-time coaching to build trust with healthcare prospects.
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

export default HealthcareSaasSecurityObjectionRebuttalPage;