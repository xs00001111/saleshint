import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mic, MessageSquare, TrendingUp, Clock, Users, ArrowRight, Star, CheckCircle, Zap, Target } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DownloadButtons from '../components/DownloadButtons';

const SalesCallPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transform Every <span className="text-emerald-600">Sales Call</span> with AI
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Optimize your sales calls with real-time AI guidance, conversation insights, and intelligent coaching that helps you close more deals and build stronger relationships.
            </p>
            <DownloadButtons variant="hero" className="mb-8" />
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                <span>4.9/5 rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 text-emerald-500 mr-1" />
                <span>20,000+ sales calls optimized</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Great Sales Calls Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">What Makes a Great Sales Call?</h2>
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                A successful sales call is more than just a conversation—it's a strategic interaction that builds trust, uncovers needs, addresses concerns, and guides prospects toward a buying decision. The best sales calls combine preparation, active listening, persuasive communication, and perfect timing.
              </p>
              <p className="mb-6">
                With SalesHint's <Link to="/ai-sales-copilot" className="text-emerald-600 hover:text-emerald-700 font-medium">AI sales copilot</Link>, every call becomes an opportunity to excel. Our AI provides real-time guidance for <Link to="/objection-handling" className="text-emerald-600 hover:text-emerald-700 font-medium">objection handling</Link>, delivers <Link to="/persuasive-insight" className="text-emerald-600 hover:text-emerald-700 font-medium">persuasive insights</Link>, and helps you navigate complex sales conversations with confidence and precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Call Challenges Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Common Sales Call Challenges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  challenge: "Handling Unexpected Objections",
                  solution: "AI provides instant, contextual responses to any objection, ensuring you're never caught off-guard.",
                  icon: MessageSquare
                },
                {
                  challenge: "Reading Customer Signals",
                  solution: "Real-time analysis of tone, pace, and language patterns reveals hidden buying signals and concerns.",
                  icon: Target
                },
                {
                  challenge: "Maintaining Conversation Flow",
                  solution: "Smart conversation guidance keeps discussions on track while feeling natural and engaging.",
                  icon: Zap
                },
                {
                  challenge: "Timing Key Sales Moves",
                  solution: "AI identifies perfect moments for closing, upselling, or addressing specific pain points.",
                  icon: Clock
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start mb-4">
                    <item.icon className="h-6 w-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Challenge: {item.challenge}</h3>
                      <p className="text-gray-700"><strong>Solution:</strong> {item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sales Call Optimization Features */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">AI-Powered Sales Call Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Mic,
                  title: "Real-Time Transcription",
                  description: "Accurate, live transcription of your sales calls with speaker identification and conversation flow analysis."
                },
                {
                  icon: MessageSquare,
                  title: "Instant Response Suggestions",
                  description: "Get contextual response suggestions for objections, questions, and conversation pivots in real-time."
                },
                {
                  icon: TrendingUp,
                  title: "Conversation Analytics",
                  description: "Track talk time, engagement levels, sentiment analysis, and buying signal detection throughout the call."
                },
                {
                  icon: Target,
                  title: "Opportunity Identification",
                  description: "AI identifies upselling opportunities, pain points, and moments to advance the sales process."
                },
                {
                  icon: Clock,
                  title: "Perfect Timing Alerts",
                  description: "Know exactly when to ask for the close, introduce pricing, or schedule next steps."
                },
                {
                  icon: Users,
                  title: "Stakeholder Mapping",
                  description: "Understand decision-maker dynamics and influence patterns in complex B2B sales scenarios."
                }
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sales Call Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">The Perfect Sales Call Process</h2>
            <div className="space-y-8">
              {[
                {
                  phase: "Opening",
                  title: "Build Rapport & Set Agenda",
                  description: "AI helps you establish connection, set clear expectations, and create a comfortable environment for open dialogue.",
                  tips: ["Personalized conversation starters", "Agenda setting guidance", "Rapport building suggestions"]
                },
                {
                  phase: "Discovery", 
                  title: "Uncover Needs & Pain Points",
                  description: "Smart questioning frameworks and active listening cues help you understand customer challenges and priorities.",
                  tips: ["Strategic question prompts", "Pain point identification", "Need prioritization guidance"]
                },
                {
                  phase: "Presentation",
                  title: "Present Solutions & Value",
                  description: "Tailor your presentation based on discovered needs with AI-suggested value propositions and benefit statements.",
                  tips: ["Customized value propositions", "Feature-benefit mapping", "Competitive differentiation"]
                },
                {
                  phase: "Handling",
                  title: "Address Objections & Concerns",
                  description: "Real-time objection handling support with proven response frameworks and persuasive techniques.",
                  tips: ["Instant objection responses", "Concern validation techniques", "Proof point suggestions"]
                },
                {
                  phase: "Closing",
                  title: "Secure Commitment & Next Steps",
                  description: "AI identifies closing opportunities and provides guidance on trial closes, final asks, and next step planning.",
                  tips: ["Closing signal detection", "Trial close suggestions", "Next step planning"]
                }
              ].map((phase, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-20 h-20 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-6 flex-shrink-0">
                    {phase.phase}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                    <p className="text-gray-600 mb-4">{phase.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {phase.tips.map((tip, tipIndex) => (
                        <div key={tipIndex} className="flex items-center text-sm text-emerald-600">
                          <CheckCircle className="h-3 w-3 mr-2 flex-shrink-0" />
                          {tip}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Sales Call Success Stories</h2>
            <div className="bg-emerald-50 rounded-2xl p-8 mb-8">
              <blockquote className="text-xl italic text-gray-700 mb-4">
                "SalesHint transformed my sales calls from stressful conversations into confident, strategic interactions. The real-time guidance helped me close 3 major deals in my first month using the platform. I wish I had this tool years ago."
              </blockquote>
              <cite className="text-emerald-600 font-semibold">— Jennifer Park, Enterprise Sales Director</cite>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">40%</div>
                <div className="text-gray-600">Higher close rates</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">30%</div>
                <div className="text-gray-600">Shorter sales cycles</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">50%</div>
                <div className="text-gray-600">Better objection handling</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">95%</div>
                <div className="text-gray-600">User satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Features */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Complete Sales Call Solution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/objection-handling" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-emerald-600">Objection Handling</h3>
                <p className="text-gray-600 mb-4">Master the art of turning objections into opportunities with AI-powered response guidance.</p>
                <div className="flex items-center text-emerald-600 font-medium">
                  Learn more <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>
              
              <Link to="/persuasive-insight" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-emerald-600">Persuasive Insights</h3>
                <p className="text-gray-600 mb-4">Unlock customer psychology and buying signals to influence decisions more effectively.</p>
                <div className="flex items-center text-emerald-600 font-medium">
                  Explore <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>
              
              <Link to="/free-sales-copilot" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-emerald-600">Free Sales Copilot</h3>
                <p className="text-gray-600 mb-4">Start optimizing your sales calls today with our free AI-powered assistant.</p>
                <div className="flex items-center text-emerald-600 font-medium">
                  Try free <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Sales Calls?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of sales professionals who've revolutionized their sales calls with AI-powered guidance.
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

export default SalesCallPage;