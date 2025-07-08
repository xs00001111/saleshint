import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Monitor, Laptop, Zap, CheckCircle, ArrowRight, Eye, Settings } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const VirtualTeleprompterPage: React.FC = () => {
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
              <Laptop className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Virtual Teleprompter</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Advanced <span className="text-emerald-600">Virtual Teleprompter</span> for Sales Professionals
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your sales presentations with our virtual teleprompter. Get smooth, professional delivery with customizable scripts, perfect pacing, and seamless integration with your video conferencing tools.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The virtual teleprompter solution trusted by sales professionals for flawless presentations
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
              Virtual Teleprompter Features Designed for Sales
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need for flawless sales presentations and calls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Monitor className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Seamless Display</h3>
              <p className="text-gray-600">
                Transparent overlay that works with any video conferencing platform. Your script appears right where you need it without blocking your view.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Customizable Controls</h3>
              <p className="text-gray-600">
                Adjust scroll speed, font size, background opacity, and text color to match your preferences and reading style.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Invisible to Viewers</h3>
              <p className="text-gray-600">
                Your teleprompter is completely invisible to your audience. They only see you delivering a flawless presentation.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Smart Auto-Scroll</h3>
              <p className="text-gray-600">
                Our intelligent auto-scroll technology adjusts to your natural speaking pace, ensuring you never lose your place.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Laptop className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Script Library</h3>
              <p className="text-gray-600">
                Store and organize your sales scripts, objection handlers, and presentation outlines in one convenient location.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Remote Control</h3>
              <p className="text-gray-600">
                Control your teleprompter with keyboard shortcuts or our mobile app remote for hands-free operation during presentations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">
              Why Choose Our Virtual Teleprompter
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
              See how our virtual teleprompter compares to traditional solutions
            </p>
            
            <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-emerald-800 text-white">
                    <th className="py-4 px-6 text-left">Features</th>
                    <th className="py-4 px-6 text-center">SalesHint Virtual Teleprompter</th>
                    <th className="py-4 px-6 text-center">Standard Teleprompters</th>
                    <th className="py-4 px-6 text-center">Basic Script Tools</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-6 text-left font-medium">Sales-Specific Content</td>
                    <td className="py-3 px-6 text-center text-emerald-600">✓</td>
                    <td className="py-3 px-6 text-center text-red-500">✗</td>
                    <td className="py-3 px-6 text-center text-red-500">✗</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-3 px-6 text-left font-medium">Invisible to Audience</td>
                    <td className="py-3 px-6 text-center text-emerald-600">✓</td>
                    <td className="py-3 px-6 text-center text-emerald-600">✓</td>
                    <td className="py-3 px-6 text-center text-red-500">✗</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-6 text-left font-medium">Smart Auto-Scroll</td>
                    <td className="py-3 px-6 text-center text-emerald-600">✓</td>
                    <td className="py-3 px-6 text-center text-red-500">✗</td>
                    <td className="py-3 px-6 text-center text-red-500">✗</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-3 px-6 text-left font-medium">Video Conference Integration</td>
                    <td className="py-3 px-6 text-center text-emerald-600">✓</td>
                    <td className="py-3 px-6 text-center text-amber-500">Limited</td>
                    <td className="py-3 px-6 text-center text-red-500">✗</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-6 text-left font-medium">Script Library</td>
                    <td className="py-3 px-6 text-center text-emerald-600">✓</td>
                    <td className="py-3 px-6 text-center text-red-500">✗</td>
                    <td className="py-3 px-6 text-center text-amber-500">Limited</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-3 px-6 text-left font-medium">Remote Control</td>
                    <td className="py-3 px-6 text-center text-emerald-600">✓</td>
                    <td className="py-3 px-6 text-center text-amber-500">Limited</td>
                    <td className="py-3 px-6 text-center text-red-500">✗</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-6 text-left font-medium">Customizable Display</td>
                    <td className="py-3 px-6 text-center text-emerald-600">✓</td>
                    <td className="py-3 px-6 text-center text-amber-500">Limited</td>
                    <td className="py-3 px-6 text-center text-red-500">✗</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Virtual Teleprompter for Every Sales Scenario
            </h2>
            <p className="text-xl text-gray-600">
              Our teleprompter helps you excel in any sales situation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-emerald-800">Sales Presentations</h3>
              <p className="text-gray-600">
                Deliver polished, professional presentations without memorizing every word. Keep your key points organized and never miss important details.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-emerald-800">Product Demos</h3>
              <p className="text-gray-600">
                Guide prospects through your product with confidence. Have feature descriptions and benefit statements ready when you need them.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-emerald-800">Sales Pitches</h3>
              <p className="text-gray-600">
                Deliver your value proposition perfectly every time. Keep your pitch concise, compelling, and consistent across all prospects.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-emerald-800">Client Meetings</h3>
              <p className="text-gray-600">
                Never forget important talking points during crucial client meetings. Keep your agenda and key messages at your fingertips.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-emerald-800">Team Presentations</h3>
              <p className="text-gray-600">
                Ensure consistent messaging when multiple team members present. Everyone stays on script and delivers a unified message.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-emerald-800">Virtual Events</h3>
              <p className="text-gray-600">
                Present confidently at virtual conferences, webinars, and online events without the stress of memorizing content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-600">Real feedback from sales professionals using our virtual teleprompter</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-emerald-800 font-bold text-xl">R</span>
                </div>
                <div>
                  <h4 className="font-bold">Robert K.</h4>
                  <p className="text-sm text-gray-600">Enterprise Sales Manager</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "This virtual teleprompter has been a game-changer for our sales team. Our presentations are more polished, our messaging is consistent, and our close rates have improved by 28%."
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-emerald-800 font-bold text-xl">L</span>
                </div>
                <div>
                  <h4 className="font-bold">Lisa M.</h4>
                  <p className="text-sm text-gray-600">Sales Enablement Director</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "We've implemented this virtual teleprompter across our entire sales organization. It ensures consistent messaging and has significantly reduced the time it takes new reps to become effective."
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-emerald-800 font-bold text-xl">C</span>
                </div>
                <div>
                  <h4 className="font-bold">Carlos J.</h4>
                  <p className="text-sm text-gray-600">Senior Account Executive</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "I used to get nervous during important presentations, but with this teleprompter, I'm always confident. The best part is that it's completely invisible to my prospects."
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
            <p className="text-lg text-gray-600">Leading experts recommend our virtual teleprompter technology</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.presentationxpert.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Presentation Xpert
              </a>
              <p className="text-sm text-gray-500 mt-1">Presentation Skills</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesgravy.com/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                Sales Gravy
              </a>
              <p className="text-sm text-gray-500 mt-1">Sales Training</p>
            </div>
            <div className="text-center">
              <a href="https://www.toastmasters.org/resources" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                Toastmasters
              </a>
              <p className="text-sm text-gray-500 mt-1">Public Speaking</p>
            </div>
            <div className="text-center">
              <a href="https://www.saleshacker.com/sales-presentations/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Sales Hacker
              </a>
              <p className="text-sm text-gray-500 mt-1">Presentation Tips</p>
            </div>
            <div className="text-center">
              <a href="https://www.duarte.com/resources/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Duarte
              </a>
              <p className="text-sm text-gray-500 mt-1">Presentation Design</p>
            </div>
            <div className="text-center">
              <a href="https://www.speakersassociation.org/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                Professional Speakers
              </a>
              <p className="text-sm text-gray-500 mt-1">Speaking Resources</p>
            </div>
            <div className="text-center">
              <a href="https://www.presentationskills.org/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                Presentation Skills
              </a>
              <p className="text-sm text-gray-500 mt-1">Training Resources</p>
            </div>
            <div className="text-center">
              <a href="https://www.slideshare.net/featured/category/sales" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                SlideShare Sales
              </a>
              <p className="text-sm text-gray-500 mt-1">Presentation Examples</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesscripter.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Sales Scripter
              </a>
              <p className="text-sm text-gray-500 mt-1">Script Resources</p>
            </div>
            <div className="text-center">
              <a href="https://www.presentationzen.com/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Presentation Zen
              </a>
              <p className="text-sm text-gray-500 mt-1">Presentation Design</p>
            </div>
            <div className="text-center">
              <a href="https://www.ethos3.com/blog/" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-800 font-medium">
                Ethos3
              </a>
              <p className="text-sm text-gray-500 mt-1">Presentation Agency</p>
            </div>
            <div className="text-center">
              <a href="https://www.presentationskillscourses.co.uk/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800 font-medium">
                Presentation Skills
              </a>
              <p className="text-sm text-gray-500 mt-1">Training Courses</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Elevate Your Sales Presentations Today
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Join thousands of sales professionals who are using our virtual teleprompter to deliver flawless presentations and close more deals.
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

export default VirtualTeleprompterPage;