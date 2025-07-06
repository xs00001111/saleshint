import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, MessageSquare, TrendingUp, CheckCircle, ArrowRight, Star, Users, Target, Zap, Brain } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DownloadButtons from '../components/DownloadButtons';

const ObjectionHandlingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Master <span className="text-emerald-600">Objection Handling</span> with AI
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform customer objections into opportunities with real-time AI guidance. Get instant, contextual responses that help you close more deals and build stronger relationships.
            </p>
            <DownloadButtons variant="hero" className="mb-8" />
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                <span>4.9/5 rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 text-emerald-500 mr-1" />
                <span>10,000+ sales professionals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Objection Handling Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">What is Objection Handling?</h2>
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Objection handling is the critical sales skill of addressing customer concerns, doubts, and resistance during the sales process. It's the art of turning "no" into "yes" by understanding the root cause of hesitation and providing compelling responses that move prospects toward a purchase decision.
              </p>
              <p className="mb-6">
                Effective objection handling requires quick thinking, deep product knowledge, and the ability to empathize with customer concerns. With SalesHint's <Link to="/ai-sales-copilot" className="text-emerald-600 hover:text-emerald-700 font-medium">AI sales copilot</Link>, you get real-time support during every <Link to="/sales-call" className="text-emerald-600 hover:text-emerald-700 font-medium">sales call</Link>, ensuring you never miss an opportunity to address concerns professionally and persuasively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Objections Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Common Sales Objections & AI-Powered Responses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  objection: "It's too expensive",
                  response: "I understand budget is important. Let's look at the ROI - our clients typically see 3x returns within 6 months. What specific budget range works for your team?",
                  icon: Target
                },
                {
                  objection: "We need to think about it",
                  response: "Absolutely, this is an important decision. What specific aspects would you like to discuss further? I can address any concerns right now.",
                  icon: Brain
                },
                {
                  objection: "We're happy with our current solution",
                  response: "That's great to hear! What you're doing well is clearly working. I'm curious - if you could improve one thing about your current process, what would it be?",
                  icon: TrendingUp
                },
                {
                  objection: "We don't have time to implement",
                  response: "I completely understand - time is valuable. Our implementation takes just 24 hours, and our team handles 90% of the setup. Would a quick 15-minute demo help you see the process?",
                  icon: Zap
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start mb-4">
                    <item.icon className="h-6 w-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">"{item.objection}"</h3>
                      <p className="text-gray-700 italic">"{item.response}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Why AI-Powered Objection Handling Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Instant Confidence",
                  description: "Never feel caught off-guard again. Our AI provides immediate, contextual responses to any objection, giving you the confidence to handle any situation."
                },
                {
                  icon: MessageSquare,
                  title: "Personalized Responses",
                  description: "Get tailored responses based on your prospect's industry, role, and specific concerns. No more generic scripts that fall flat."
                },
                {
                  icon: TrendingUp,
                  title: "Higher Close Rates",
                  description: "Sales teams using AI objection handling see 40% higher close rates and 60% shorter sales cycles compared to traditional methods."
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">How SalesHint Transforms Objection Handling</h2>
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Real-Time Listening",
                  description: "Our AI listens to your sales conversations and identifies objections as they arise, providing context-aware suggestions instantly."
                },
                {
                  step: "2", 
                  title: "Intelligent Analysis",
                  description: "Advanced algorithms analyze the objection type, customer sentiment, and conversation history to craft the perfect response."
                },
                {
                  step: "3",
                  title: "Instant Guidance",
                  description: "Receive persuasive, personalized responses that address the specific concern while moving the conversation forward."
                },
                {
                  step: "4",
                  title: "Continuous Learning",
                  description: "The AI learns from successful objection handling patterns to improve future recommendations and increase your success rate."
                }
              ].map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Success Stories</h2>
            <div className="bg-emerald-50 rounded-2xl p-8 mb-8">
              <blockquote className="text-xl italic text-gray-700 mb-4">
                "SalesHint's objection handling feature completely transformed my sales calls. I went from dreading price objections to confidently addressing them with data-backed responses. My close rate increased by 45% in just two months."
              </blockquote>
              <cite className="text-emerald-600 font-semibold">— Sarah Chen, Enterprise Sales Manager</cite>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">45%</div>
                <div className="text-gray-600">Increase in close rates</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">60%</div>
                <div className="text-gray-600">Faster objection resolution</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">90%</div>
                <div className="text-gray-600">User satisfaction rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Features */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Complete Sales Support Ecosystem</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/persuasive-insight" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-emerald-600">Persuasive Insights</h3>
                <p className="text-gray-600 mb-4">Get real-time insights into customer psychology and buying signals during your sales conversations.</p>
                <div className="flex items-center text-emerald-600 font-medium">
                  Learn more <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>
              
              <Link to="/free-sales-copilot" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-emerald-600">Free Sales Copilot</h3>
                <p className="text-gray-600 mb-4">Start with our free tier and experience AI-powered sales assistance with no commitment required.</p>
                <div className="flex items-center text-emerald-600 font-medium">
                  Try free <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>
              
              <Link to="/sales-call" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-emerald-600">Sales Call Optimization</h3>
                <p className="text-gray-600 mb-4">Optimize every aspect of your sales calls with AI-powered conversation analysis and coaching.</p>
                <div className="flex items-center text-emerald-600 font-medium">
                  Explore <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Master Objection Handling?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of sales professionals who've transformed their objection handling with AI-powered guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <DownloadButtons variant="hero" />
            <Link to="/signup" className="btn bg-white text-emerald-600 hover:bg-gray-100">
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ObjectionHandlingPage;