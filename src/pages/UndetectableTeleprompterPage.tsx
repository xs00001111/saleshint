import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Eye, Shield, Zap, CheckCircle, ArrowRight, Monitor, MessageSquare } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const UndetectableTeleprompterPage: React.FC = () => {
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
              <Eye className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Undetectable Teleprompter</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              The World's First <span className="text-emerald-600">Undetectable Teleprompter</span> for Sales Calls
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Never stumble for words again. Our undetectable teleprompter provides perfect talking points, objection responses, and closing techniques that your prospects will never know you're using.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The completely invisible teleprompter that's revolutionizing sales conversations
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
              Why Our Teleprompter is Completely Undetectable
            </h2>
            <p className="text-xl text-gray-600">
              Advanced technology that keeps your guidance invisible to everyone but you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Proprietary Overlay Technology</h3>
              <p className="text-gray-600">
                Our patented overlay technology displays content only on your screen, completely invisible to anyone on the other end of your video call.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Zero Screen Sharing</h3>
              <p className="text-gray-600">
                Unlike other solutions, our teleprompter never requires screen sharing or additional windows that might be visible to others.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Monitor className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Natural Eye Contact</h3>
              <p className="text-gray-600">
                Our teleprompter positions text near your camera so you maintain natural eye contact while reading, making detection impossible.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Seamless Integration</h3>
              <p className="text-gray-600">
                Works with all major video conferencing platforms including Zoom, Teams, Google Meet, and Webex without any visible indicators.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Contextual Content</h3>
              <p className="text-gray-600">
                Our AI provides natural-sounding talking points that match your speaking style, so you never sound like you're reading.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Stealth Controls</h3>
              <p className="text-gray-600">
                Control your teleprompter with subtle keyboard shortcuts or voice commands that no one will notice during your call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              How Our Undetectable Teleprompter Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple setup, invisible operation, powerful results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold mb-3">Install & Setup</h3>
              <p className="text-gray-600">
                Quick 2-minute installation on your computer with simple configuration steps.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold mb-3">Prepare Your Content</h3>
              <p className="text-gray-600">
                Load your sales scripts or use our AI-generated content tailored to your meeting.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold mb-3">Start Your Call</h3>
              <p className="text-gray-600">
                Launch your video conference and activate the teleprompter with a discreet keyboard shortcut.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold mb-3">Present Confidently</h3>
              <p className="text-gray-600">
                Deliver your presentation with perfect talking points that only you can see.
              </p>
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-center text-emerald-800">100% Undetectable Guarantee</h3>
            <p className="text-gray-700 text-center mb-6">
              Our teleprompter is guaranteed to be completely invisible to your audience. If anyone ever detects you're using our teleprompter, we'll refund your subscription in full.
            </p>
            <div className="flex justify-center">
              <Link
                to="/signup"
                className="btn bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg hover:shadow-xl inline-flex items-center"
              >
                Try Risk-Free Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Perfect for Every Sales Situation
            </h2>
            <p className="text-xl text-gray-600">
              Our undetectable teleprompter helps you excel in any sales scenario.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-emerald-800">High-Stakes Pitches</h3>
              <p className="text-gray-600">
                When the pressure is on for that million-dollar deal, our teleprompter ensures you deliver a flawless pitch without memorizing every word.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-emerald-800">Technical Presentations</h3>
              <p className="text-gray-600">
                Never struggle with complex technical details again. Have all specifications and technical talking points at your fingertips.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-emerald-800">Executive Meetings</h3>
              <p className="text-gray-600">
                Present to C-level executives with confidence. Our teleprompter helps you stay focused on key business outcomes and value propositions.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-emerald-800">Objection Handling</h3>
              <p className="text-gray-600">
                Have the perfect response to every objection without hesitation. Our teleprompter provides proven objection handling scripts in real-time.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-emerald-800">Product Launches</h3>
              <p className="text-gray-600">
                Ensure consistent messaging across your entire sales team during critical product launches with standardized talking points.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-emerald-800">Sales Webinars</h3>
              <p className="text-gray-600">
                Deliver engaging webinars to large audiences with confidence. Keep your presentation flowing naturally without losing your place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Sales Professionals Say</h2>
            <p className="text-lg text-gray-600">Real feedback from users of our undetectable teleprompter</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-emerald-800 font-bold text-xl">J</span>
                </div>
                <div>
                  <h4 className="font-bold">Jennifer P.</h4>
                  <p className="text-sm text-gray-600">VP of Sales, Technology Company</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "I was skeptical that a teleprompter could truly be undetectable, but this solution is remarkable. I've used it in countless executive presentations, and no one has ever suspected I'm reading from a prompt. It's given me incredible confidence."
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-emerald-800 font-bold text-xl">M</span>
                </div>
                <div>
                  <h4 className="font-bold">Marcus T.</h4>
                  <p className="text-sm text-gray-600">Enterprise Account Executive</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "This undetectable teleprompter has transformed my sales calls. I used to struggle with technical details, but now I have everything I need right in front of me. My close rate has increased by 42% since I started using it."
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-emerald-800 font-bold text-xl">E</span>
                </div>
                <div>
                  <h4 className="font-bold">Elena R.</h4>
                  <p className="text-sm text-gray-600">Sales Director, Healthcare</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Our entire sales team uses this teleprompter for presentations to healthcare executives. The ability to have complex compliance information and regulatory details at our fingertips without looking unprepared has been invaluable."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Backlinks Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Featured in Sales & Presentation Resources</h2>
            <p className="text-lg text-gray-600">Leading experts recommend our undetectable teleprompter technology</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.saleshacker.com/sales-technology/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Sales Hacker
              </a>
              <p className="text-sm text-gray-500 mt-1">Sales Technology</p>
            </div>
            <div className="text-center">
              <a href="https://www.presentationskills.org/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                Presentation Skills
              </a>
              <p className="text-sm text-gray-500 mt-1">Speaking Resources</p>
            </div>
            <div className="text-center">
              <a href="https://www.publicspeakinginternational.com/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                Public Speaking Int'l
              </a>
              <p className="text-sm text-gray-500 mt-1">Speaking Tips</p>
            </div>
            <div className="text-center">
              <a href="https://www.gong.io/blog/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Gong.io
              </a>
              <p className="text-sm text-gray-500 mt-1">Sales Intelligence</p>
            </div>
            <div className="text-center">
              <a href="https://www.teleprompterreview.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Teleprompter Review
              </a>
              <p className="text-sm text-gray-500 mt-1">Technology Reviews</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesforce.com/blog/sales-presentations/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                Salesforce Blog
              </a>
              <p className="text-sm text-gray-500 mt-1">Presentation Tips</p>
            </div>
            <div className="text-center">
              <a href="https://www.presentationmagazine.com/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                Presentation Magazine
              </a>
              <p className="text-sm text-gray-500 mt-1">Presentation Resources</p>
            </div>
            <div className="text-center">
              <a href="https://www.speakingcpr.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                Speaking CPR
              </a>
              <p className="text-sm text-gray-500 mt-1">Speaking Coaching</p>
            </div>
            <div className="text-center">
              <a href="https://www.fripp.com/blog/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Patricia Fripp
              </a>
              <p className="text-sm text-gray-500 mt-1">Executive Speaking</p>
            </div>
            <div className="text-center">
              <a href="https://www.presentationtraining.com/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Presentation Training
              </a>
              <p className="text-sm text-gray-500 mt-1">Training Resources</p>
            </div>
            <div className="text-center">
              <a href="https://www.presentationskillsworkshops.com/" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-800 font-medium">
                Skills Workshops
              </a>
              <p className="text-sm text-gray-500 mt-1">Presentation Training</p>
            </div>
            <div className="text-center">
              <a href="https://www.speakingblog.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800 font-medium">
                Speaking Blog
              </a>
              <p className="text-sm text-gray-500 mt-1">Speaking Resources</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Experience Truly Undetectable Teleprompter Technology
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Join thousands of sales professionals who are using our invisible teleprompter to deliver perfect presentations and close more deals.
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

export default UndetectableTeleprompterPage;