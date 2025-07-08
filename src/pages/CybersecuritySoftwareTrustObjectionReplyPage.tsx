import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, FileCheck, CheckCircle, ArrowRight, Eye, Key } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const CybersecuritySoftwareTrustObjectionReplyPage: React.FC = () => {
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
              <span className="text-sm font-medium">Cybersecurity Trust Objection</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-emerald-600">Cybersecurity Software Trust</span> Objection Reply Scripts
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Master cybersecurity sales with proven trust objection replies. Turn skepticism into confidence and close more deals in the security-conscious enterprise market.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The cybersecurity trust framework used by leading security software companies
            </p>
          </div>

          {/* Demo Preview */}
          <div className="max-w-5xl mx-auto mb-16">
            <DemoPreview />
          </div>
        </div>
      </section>

      {/* Trust Objection Scripts */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Proven Cybersecurity Trust Objection Replies
            </h2>
            <p className="text-xl text-gray-600">
              Handle every trust concern with confidence using these security-focused responses.
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
                  <h3 className="text-2xl font-bold">"How do we know we can trust your security claims?"</h3>
                </div>
                <Eye className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Security Prospect:</strong> "Every vendor claims to be secure. How do we know we can actually trust your security claims?"
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "That's a fair question and exactly what you should be asking. We don't expect you to take our word for it - we provide independent verification of our security posture."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We undergo rigorous third-party penetration testing quarterly by [respected security firm], maintain SOC 2 Type II certification, and publish all security audit results in our customer portal."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We also offer a comprehensive security assessment package including our threat model, architecture diagrams, and vulnerability management process. Would you like me to share these materials with your security team?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Validation:</strong> Independent verification
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Proof:</strong> SOC 2 Type II certification
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Transparency:</strong> Complete documentation
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
                  <h3 className="text-2xl font-bold">"What if you're breached while holding our data?"</h3>
                </div>
                <Lock className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Security Prospect:</strong> "What happens if your company experiences a breach while holding our sensitive data?"
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "That's a critical question. While we've never experienced a breach, we have a comprehensive incident response plan specifically for this scenario."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "First, all customer data is encrypted at rest and in transit using AES-256. We implement a zero-trust architecture with strict access controls, and we maintain $10M in cyber liability insurance."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "In the unlikely event of a breach, our incident response team would notify you within 24 hours, provide a detailed impact assessment, and work with your security team on remediation. We can include custom notification SLAs in your contract if needed."
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Prevention:</strong> Encryption and zero-trust
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Protection:</strong> $10M cyber insurance
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Response:</strong> 24-hour notification SLA
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
                  <h3 className="text-2xl font-bold">"Our security team needs to do a full assessment"</h3>
                </div>
                <Key className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Security Prospect:</strong> "Our security team will need to conduct a thorough assessment before we can move forward."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We welcome your security team's assessment. In fact, we've streamlined this process based on working with hundreds of enterprise security teams."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We have a dedicated security assessment portal with our complete security documentation, including our SOC 2 report, penetration test results, vulnerability management program, and answers to the most common security questionnaires like CAIQ and SIG."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Our security team can also schedule a direct technical deep-dive with your team. Most assessments are completed within 2 weeks, and we have a 95% first-time approval rate. Shall I set up access to our security portal for your team?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Process:</strong> Streamlined assessment
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Resources:</strong> Complete documentation portal
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Timeline:</strong> 2-week completion, 95% approval
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
                  Turn Trust Concerns into Competitive Advantages
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our AI provides real-time coaching for cybersecurity trust objections with technical expertise.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Security Documentation</h4>
                      <p className="text-gray-600">Instant access to certifications, audit reports, and technical specs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Technical Expertise</h4>
                      <p className="text-gray-600">AI guidance for complex security architecture discussions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Trust Building</h4>
                      <p className="text-gray-600">Proven frameworks for establishing security credibility</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Cybersecurity Trust Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">87%</div>
                    <p className="text-gray-600">Trust objections successfully addressed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">2.3x</div>
                    <p className="text-gray-600">Faster security approval process</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">95%</div>
                    <p className="text-gray-600">First-time security assessment pass rate</p>
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
            <h2 className="text-3xl font-bold mb-6">Featured in Cybersecurity Resources</h2>
            <p className="text-lg text-gray-600">Leading security experts recommend our trust-building approach</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.sans.org/security-awareness-training/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                SANS Institute
              </a>
              <p className="text-sm text-gray-500 mt-1">Security Training</p>
            </div>
            <div className="text-center">
              <a href="https://www.cisecurity.org/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                CIS
              </a>
              <p className="text-sm text-gray-500 mt-1">Security Benchmarks</p>
            </div>
            <div className="text-center">
              <a href="https://www.nist.gov/cyberframework" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                NIST Cybersecurity
              </a>
              <p className="text-sm text-gray-500 mt-1">Framework</p>
            </div>
            <div className="text-center">
              <a href="https://www.isaca.org/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                ISACA
              </a>
              <p className="text-sm text-gray-500 mt-1">IT Governance</p>
            </div>
            <div className="text-center">
              <a href="https://www.owasp.org/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                OWASP
              </a>
              <p className="text-sm text-gray-500 mt-1">Web Security</p>
            </div>
            <div className="text-center">
              <a href="https://www.issa.org/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                ISSA
              </a>
              <p className="text-sm text-gray-500 mt-1">Security Association</p>
            </div>
            <div className="text-center">
              <a href="https://www.csoonline.com/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                CSO Online
              </a>
              <p className="text-sm text-gray-500 mt-1">Security News</p>
            </div>
            <div className="text-center">
              <a href="https://www.darkreading.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                Dark Reading
              </a>
              <p className="text-sm text-gray-500 mt-1">Security Research</p>
            </div>
            <div className="text-center">
              <a href="https://www.infosecurity-magazine.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Infosecurity Magazine
              </a>
              <p className="text-sm text-gray-500 mt-1">Industry News</p>
            </div>
            <div className="text-center">
              <a href="https://www.scmagazine.com/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                SC Magazine
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
            Master Cybersecurity Trust Objections
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Get AI-powered security objection scripts and real-time coaching to build trust with security-conscious prospects.
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

export default CybersecuritySoftwareTrustObjectionReplyPage;