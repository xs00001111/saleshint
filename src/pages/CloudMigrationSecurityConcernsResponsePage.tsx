import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cloud, Shield, Server, CheckCircle, ArrowRight, Lock, Database } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const CloudMigrationSecurityConcernsResponsePage: React.FC = () => {
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
              <Cloud className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Cloud Migration Security</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-emerald-600">Cloud Migration Security Concerns</span> Response Scripts
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Master cloud migration sales with proven security concern responses. Turn on-premise security objections into cloud confidence with technical explanations that close deals.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The cloud security response framework used by leading cloud solution providers
            </p>
          </div>

          {/* Demo Preview */}
          <div className="max-w-5xl mx-auto mb-16">
            <DemoPreview />
          </div>
        </div>
      </section>

      {/* Cloud Security Response Scripts */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Proven Cloud Migration Security Response Scripts
            </h2>
            <p className="text-xl text-gray-600">
              Handle cloud security concerns with confidence using these technically precise responses.
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
                  <h3 className="text-2xl font-bold">"Our data is more secure on-premise"</h3>
                </div>
                <Server className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>IT Prospect:</strong> "We believe our data is more secure in our own data center where we control physical access."
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "That's a common perception, and physical security is certainly important. However, modern cloud security actually provides several technical advantages over most on-premise environments."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Our cloud infrastructure implements defense-in-depth with multiple security layers: physical security with biometric access controls, network security with micro-segmentation, infrastructure security with automated patching, and application security with continuous vulnerability scanning."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We also maintain SOC 2 Type II, ISO 27001, and FedRAMP certifications, with security investments exceeding $100M annually. Most on-premise environments simply can't match this level of security investment and expertise. Would you like to see our security architecture diagram that details these protections?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Approach:</strong> Defense-in-depth security
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Layers:</strong> Physical to application security
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Validation:</strong> Multiple security certifications
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
                  <h3 className="text-2xl font-bold">"What about multi-tenancy risks?"</h3>
                </div>
                <Database className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>IT Prospect:</strong> "We're concerned about multi-tenancy risks in the cloud. How do you prevent data leakage between customers?"
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "That's an excellent technical question. We've implemented multiple isolation mechanisms specifically to address multi-tenancy concerns."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "At the infrastructure level, we use virtual private clouds with dedicated subnets and security groups. At the data layer, we implement logical isolation with tenant-specific encryption keys using AES-256, and each tenant's data is stored with unique database credentials and row-level security policies."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We also conduct regular data isolation testing as part of our security program, including tenant boundary testing and penetration testing. In our 8-year history, we've never had a cross-tenant data breach. Would you like me to share our multi-tenancy security architecture document?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Infrastructure:</strong> Virtual private clouds
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Data:</strong> Tenant-specific encryption keys
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Testing:</strong> Regular isolation verification
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
                  <h3 className="text-2xl font-bold">"How do we maintain compliance in the cloud?"</h3>
                </div>
                <Lock className="h-8 w-8 text-emerald-600" />
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>IT Prospect:</strong> "We have strict compliance requirements. How can we ensure we maintain compliance after migrating to the cloud?"
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Compliance is a shared responsibility in the cloud, and we've designed our platform to make your compliance obligations easier, not harder."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Our platform includes built-in compliance controls for major frameworks including PCI DSS, HIPAA, GDPR, and SOX. We provide continuous compliance monitoring with real-time dashboards, automated evidence collection, and pre-built compliance reports."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-700 italic">
                      "We also maintain a comprehensive compliance mapping document that shows exactly which controls we handle versus which ones remain your responsibility. Many customers find they actually reduce their compliance burden after migrating to our platform. Would you like to see a compliance responsibility matrix for your specific requirements?"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <strong className="text-emerald-800">Model:</strong> Shared responsibility approach
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-800">Features:</strong> Built-in compliance controls
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-800">Clarity:</strong> Detailed responsibility matrix
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
                  Turn Cloud Security Concerns into Competitive Advantages
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our AI provides real-time coaching for cloud migration security objections with technical precision.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Security Architecture</h4>
                      <p className="text-gray-600">Detailed technical explanations of cloud security layers</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Compliance Frameworks</h4>
                      <p className="text-gray-600">Industry-specific regulatory compliance guidance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Technical Documentation</h4>
                      <p className="text-gray-600">Security whitepapers and architecture diagrams</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Cloud Security Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">89%</div>
                    <p className="text-gray-600">Security objections successfully addressed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">3.5x</div>
                    <p className="text-gray-600">Faster security approval process</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">0</div>
                    <p className="text-gray-600">Cross-tenant security incidents</p>
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
            <h2 className="text-3xl font-bold mb-6">Featured in Cloud Security Resources</h2>
            <p className="text-lg text-gray-600">Leading cloud security experts recommend our migration approach</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://aws.amazon.com/security/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                AWS Security
              </a>
              <p className="text-sm text-gray-500 mt-1">Cloud Security</p>
            </div>
            <div className="text-center">
              <a href="https://cloud.google.com/security" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                Google Cloud Security
              </a>
              <p className="text-sm text-gray-500 mt-1">Security Center</p>
            </div>
            <div className="text-center">
              <a href="https://azure.microsoft.com/en-us/overview/security/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                Azure Security
              </a>
              <p className="text-sm text-gray-500 mt-1">Cloud Protection</p>
            </div>
            <div className="text-center">
              <a href="https://www.cloudsecurityalliance.org/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Cloud Security Alliance
              </a>
              <p className="text-sm text-gray-500 mt-1">Best Practices</p>
            </div>
            <div className="text-center">
              <a href="https://www.gartner.com/en/information-technology/insights/cloud-security" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Gartner Cloud Security
              </a>
              <p className="text-sm text-gray-500 mt-1">Research</p>
            </div>
            <div className="text-center">
              <a href="https://www.sans.org/cloud-security/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                SANS Cloud Security
              </a>
              <p className="text-sm text-gray-500 mt-1">Training</p>
            </div>
            <div className="text-center">
              <a href="https://csrc.nist.gov/publications/detail/sp/800-144/final" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                NIST Cloud Computing
              </a>
              <p className="text-sm text-gray-500 mt-1">Security Guidelines</p>
            </div>
            <div className="text-center">
              <a href="https://www.enisa.europa.eu/topics/cloud-and-big-data/cloud-security" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                ENISA Cloud Security
              </a>
              <p className="text-sm text-gray-500 mt-1">EU Guidelines</p>
            </div>
            <div className="text-center">
              <a href="https://www.isaca.org/resources/cloud-computing" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                ISACA Cloud Computing
              </a>
              <p className="text-sm text-gray-500 mt-1">Governance</p>
            </div>
            <div className="text-center">
              <a href="https://cloudsecurityalliance.org/research/ccm/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                CSA CCM
              </a>
              <p className="text-sm text-gray-500 mt-1">Control Matrix</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Master Cloud Migration Security Objections
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Get AI-powered cloud security objection scripts and real-time coaching to close more migration deals.
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

export default CloudMigrationSecurityConcernsResponsePage;