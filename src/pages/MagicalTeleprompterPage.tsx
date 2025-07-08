import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Wand2, Zap, CheckCircle, ArrowRight, Brain, MessageSquare } from 'lucide-react';
import Logo from '../components/Logo';
import DemoPreview from '../components/DemoPreview';
import DownloadButtons from '../components/DownloadButtons';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const MagicalTeleprompterPage: React.FC = () => {
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
              <Wand2 className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Magical Teleprompter</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Experience the <span className="text-emerald-600">Magical Teleprompter</span> That Transforms Sales Calls
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Our magical teleprompter reads your prospect's mind and provides the perfect response in real-time. Get intelligent suggestions, objection handling, and closing techniques that seem to appear right when you need them.
            </p>
            
            <DownloadButtons variant="hero" className="mb-8" />
            
            <p className="text-sm text-gray-500">
              The magical teleprompter that's helping sales professionals close 35% more deals
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
              The Magic Behind Our Teleprompter
            </h2>
            <p className="text-xl text-gray-600">
              Advanced AI that makes our teleprompter seem truly magical.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Conversation Intelligence</h3>
              <p className="text-gray-600">
                Our AI analyzes speech patterns, tone, and content in real-time to understand exactly what your prospect is saying and thinking.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Magical Adaptation</h3>
              <p className="text-gray-600">
                The teleprompter magically adapts to each conversation, providing contextual talking points that feel like they were crafted specifically for that moment.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Instant Suggestions</h3>
              <p className="text-gray-600">
                Get magical suggestions that appear at exactly the right moment - whether it's an objection response, value proposition, or closing technique.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Buying Signal Detection</h3>
              <p className="text-gray-600">
                Our magical teleprompter identifies subtle buying signals and immediately suggests the perfect next steps to move toward closing.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wand2 className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Personalized Magic</h3>
              <p className="text-gray-600">
                The teleprompter learns your unique selling style and customizes suggestions to match your natural language and approach.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Completely Invisible</h3>
              <p className="text-gray-600">
                Your prospects will never know you're using our magical teleprompter. The guidance appears only on your screen, keeping conversations natural.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Magical Results Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  The Magical Results You'll Experience
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our users report seemingly magical improvements in their sales performance after using our teleprompter.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">35% Higher Close Rates</h4>
                      <p className="text-gray-600">Sales professionals using our teleprompter close significantly more deals</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">42% Better Objection Handling</h4>
                      <p className="text-gray-600">Turn tough objections into opportunities with magical responses</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">28% Shorter Sales Cycles</h4>
                      <p className="text-gray-600">Move deals forward faster with perfect talking points</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">95% Increase in Confidence</h4>
                      <p className="text-gray-600">Sales reps report feeling dramatically more confident in calls</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-emerald-800">What Users Call "Magical"</h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-emerald-500">
                    <p className="text-gray-700 italic">
                      "It's like the teleprompter reads my prospect's mind. Just as they raise an objection, the perfect response appears. It feels magical!"
                    </p>
                    <p className="text-sm text-gray-500 mt-2">— Alex T., Enterprise Sales</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-emerald-500">
                    <p className="text-gray-700 italic">
                      "During a critical negotiation, the teleprompter suggested a value proposition I hadn't considered. It closed the deal on the spot. Pure magic."
                    </p>
                    <p className="text-sm text-gray-500 mt-2">— Maria L., Sales Director</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-emerald-500">
                    <p className="text-gray-700 italic">
                      "I was struggling with a technical question when the perfect explanation appeared in my teleprompter. My prospect was impressed with my knowledge. It was magical timing."
                    </p>
                    <p className="text-sm text-gray-500 mt-2">— Jordan K., Solution Consultant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Magical Support for Every Sales Moment
            </h2>
            <p className="text-xl text-gray-600">
              Our teleprompter provides magical assistance for all types of sales conversations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-emerald-800">Discovery Magic</h3>
              <p className="text-gray-600">
                Magically uncover prospect needs with perfect discovery questions that appear right when you need them. Our teleprompter suggests follow-up questions based on prospect responses.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-emerald-800">Objection Wizardry</h3>
              <p className="text-gray-600">
                Turn objections into opportunities with magical responses that address concerns and move the conversation forward. Our teleprompter predicts objections before they arise.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-emerald-800">Closing Enchantment</h3>
              <p className="text-gray-600">
                Close more deals with magical closing techniques that appear at the perfect moment. Our teleprompter identifies buying signals and suggests the ideal closing approach.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-emerald-800">Negotiation Spells</h3>
              <p className="text-gray-600">
                Navigate complex negotiations with magical talking points that strengthen your position. Our teleprompter helps you maintain value while finding win-win solutions.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-emerald-800">Technical Wizardry</h3>
              <p className="text-gray-600">
                Explain complex technical concepts with magical clarity. Our teleprompter provides simple, compelling explanations for technical features and benefits.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-emerald-800">ROI Enchantment</h3>
              <p className="text-gray-600">
                Make ROI discussions magical with compelling value statements and calculations. Our teleprompter helps you quantify benefits in terms that resonate with decision-makers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Magic Our Users Experience</h2>
            <p className="text-lg text-gray-600">Real testimonials from sales professionals using our magical teleprompter</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-emerald-800 font-bold text-xl">S</span>
                </div>
                <div>
                  <h4 className="font-bold">Samantha W.</h4>
                  <p className="text-sm text-gray-600">Enterprise Sales Executive</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "It's like having a magical sales coach whispering in my ear during calls. The teleprompter seems to know what my prospect is thinking before they say it. My close rate has increased by 40% since I started using it."
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-emerald-800 font-bold text-xl">B</span>
                </div>
                <div>
                  <h4 className="font-bold">Brian K.</h4>
                  <p className="text-sm text-gray-600">Sales Manager, SaaS Company</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "I've equipped my entire team with this magical teleprompter, and the results have been extraordinary. Our new reps sound like seasoned pros, and our veterans are closing bigger deals. It's transformed our sales organization."
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-emerald-800 font-bold text-xl">N</span>
                </div>
                <div>
                  <h4 className="font-bold">Natalie C.</h4>
                  <p className="text-sm text-gray-600">Solution Consultant</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "As someone who handles complex technical demos, this teleprompter feels truly magical. It helps me explain technical concepts in business terms that resonate with executives. My demo-to-close conversion has improved by 35%."
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
            <p className="text-lg text-gray-600">Leading experts recommend our magical teleprompter technology</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <a href="https://www.saleshacker.com/sales-technology/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Sales Hacker
              </a>
              <p className="text-sm text-gray-500 mt-1">Sales Technology</p>
            </div>
            <div className="text-center">
              <a href="https://www.hubspot.com/sales-tools" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                HubSpot Sales
              </a>
              <p className="text-sm text-gray-500 mt-1">Sales Tools</p>
            </div>
            <div className="text-center">
              <a href="https://www.salesforce.com/blog/sales-technology/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                Salesforce Blog
              </a>
              <p className="text-sm text-gray-500 mt-1">Sales Tech</p>
            </div>
            <div className="text-center">
              <a href="https://www.gong.io/blog/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Gong.io
              </a>
              <p className="text-sm text-gray-500 mt-1">Sales Intelligence</p>
            </div>
            <div className="text-center">
              <a href="https://www.outreach.io/blog" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Outreach
              </a>
              <p className="text-sm text-gray-500 mt-1">Sales Engagement</p>
            </div>
            <div className="text-center">
              <a href="https://www.presentationskills.org/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                Presentation Skills
              </a>
              <p className="text-sm text-gray-500 mt-1">Speaking Resources</p>
            </div>
            <div className="text-center">
              <a href="https://www.toastmasters.org/resources" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                Toastmasters
              </a>
              <p className="text-sm text-gray-500 mt-1">Public Speaking</p>
            </div>
            <div className="text-center">
              <a href="https://www.duarte.com/resources/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium">
                Duarte
              </a>
              <p className="text-sm text-gray-500 mt-1">Presentation Design</p>
            </div>
            <div className="text-center">
              <a href="https://www.speakersassociation.org/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium">
                Professional Speakers
              </a>
              <p className="text-sm text-gray-500 mt-1">Speaking Resources</p>
            </div>
            <div className="text-center">
              <a href="https://www.presentationmagazine.com/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-medium">
                Presentation Magazine
              </a>
              <p className="text-sm text-gray-500 mt-1">Presentation Resources</p>
            </div>
            <div className="text-center">
              <a href="https://www.teleprompterreview.com/" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-800 font-medium">
                Teleprompter Review
              </a>
              <p className="text-sm text-gray-500 mt-1">Technology Reviews</p>
            </div>
            <div className="text-center">
              <a href="https://www.presentationtraining.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800 font-medium">
                Presentation Training
              </a>
              <p className="text-sm text-gray-500 mt-1">Training Resources</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Experience the Magic of Our Teleprompter Today
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Join thousands of sales professionals who are using our magical teleprompter to transform their sales conversations and close more deals.
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

export default MagicalTeleprompterPage;