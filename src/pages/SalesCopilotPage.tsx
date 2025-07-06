import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Brain, MessageSquare, TrendingUp, Zap, Shield, ArrowRight, Star, Users, CheckCircle, Target } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DownloadButtons from '../components/DownloadButtons';

const SalesCopilotPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your AI <span className="text-emerald-600">Sales Copilot</span> for Success
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Meet your intelligent sales assistant that provides real-time guidance, insights, and support during every customer interaction. Close more deals with AI-powered sales intelligence.
            </p>
            <DownloadButtons variant="hero" className="mb-8" />
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                <span>4.9/5 rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 text-emerald-500 mr-1" />
                <span>25,000+ sales professionals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Sales Copilot Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">What is a Sales Copilot?</h2>
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                A sales copilot is an AI-powered assistant that works alongside sales professionals to enhance their performance, provide real-time guidance, and optimize every customer interaction. Think of it as having an expert sales coach, data analyst, and conversation strategist all rolled into one intelligent system.
              </p>
              <p className="mb-6">
                Unlike traditional sales tools that work after the fact, a sales copilot operates in real-time during your <Link to="/sales-call" className="text-emerald-600 hover:text-emerald-700 font-medium">sales calls</Link>, providing instant <Link to="/objection-handling" className="text-emerald-600 hover:text-emerald-700 font-medium">objection handling</Link> support, <Link to="/persuasive-insight" className="text-emerald-600 hover:text-emerald-700 font-medium">persuasive insights</Link>, and strategic guidance that helps you navigate complex sales situations with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Core Sales Copilot Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "Real-Time Intelligence",
                  description: "Analyzes conversations in real-time to provide contextual insights, buying signals, and strategic recommendations.",
                  features: ["Conversation analysis", "Buying signal detection", "Sentiment monitoring", "Engagement tracking"]
                },
                {
                  icon: MessageSquare,
                  title: "Instant Response Guidance",
                  description: "Provides immediate suggestions for handling objections, answering questions, and advancing the sales process.",
                  features: ["Objection responses", "Question frameworks", "Value propositions", "Closing techniques"]
                },
                {
                  icon: Target,
                  title: "Opportunity Optimization",
                  description: "Identifies upselling opportunities, perfect timing for key moves, and strategies to maximize deal value.",
                  features: ["Upsell identification", "Timing optimization", "Deal progression", "Value maximization"]
                },
                {
                  icon: TrendingUp,
                  title: "Performance Analytics",
                  description: "Tracks your sales performance, identifies improvement areas, and provides personalized coaching recommendations.",
                  features: ["Performance metrics", "Improvement insights", "Coaching recommendations", "Success patterns"]
                },
                {
                  icon: Shield,
                  title: "Risk Mitigation",
                  description: "Alerts you to potential deal risks, competitive threats, and customer concerns before they become problems.",
                  features: ["Risk detection", "Competitive analysis", "Concern identification", "Preventive strategies"]
                },
                {
                  icon: Zap,
                  title: "Workflow Automation",
                  description: "Automates follow-up tasks, CRM updates, and administrative work so you can focus on selling.",
                  features: ["CRM integration", "Follow-up automation", "Task management", "Data synchronization"]
                }
              ].map((capability, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <capability.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                  <p className="text-gray-600 mb-4">{capability.description}</p>
                  <div className="space-y-1">
                    {capability.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="h-3 w-3 text-emerald-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">How Your AI Sales Copilot Works</h2>
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Seamless Integration",
                  description: "Connects with your existing sales tools, CRM, and communication platforms for a unified experience."
                },
                {
                  step: "2", 
                  title: "Real-Time Monitoring",
                  description: "Listens to your sales conversations and analyzes content, tone, and context to understand the situation."
                },
                {
                  step: "3",
                  title: "Intelligent Analysis",
                  description: "Processes conversation data using advanced AI to identify opportunities, risks, and optimal responses."
                },
                {
                  step: "4",
                  title: "Actionable Guidance",
                  description: "Delivers specific, contextual recommendations through an intuitive interface that doesn't disrupt your flow."
                },
                {
                  step: "5",
                  title: "Continuous Learning",
                  description: "Learns from your successful interactions to provide increasingly personalized and effective guidance."
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

      {/* Benefits Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Sales Copilot vs Traditional Sales Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-gray-600">Traditional Sales Tools</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-600">Work after the call ends</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-600">Require manual data entry</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-600">Provide generic insights</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-600">Focus on reporting, not guidance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-600">Limited conversation understanding</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-emerald-50 rounded-xl p-8 shadow-lg border-2 border-emerald-200">
                <h3 className="text-2xl font-semibold mb-6 text-emerald-600">AI Sales Copilot</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Provides real-time guidance during calls</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Automatically captures and analyzes data</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Delivers personalized, contextual insights</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Offers actionable guidance and coaching</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Understands conversation nuances and context</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Sales Copilot Success Story</h2>
            <div className="bg-emerald-50 rounded-2xl p-8 mb-8">
              <blockquote className="text-xl italic text-gray-700 mb-4">
                "Having an AI sales copilot is like having the best sales manager in the world sitting next to me during every call. It's helped me identify opportunities I would have missed, handle objections more confidently, and close deals faster than ever before."
              </blockquote>
              <cite className="text-emerald-600 font-semibold">— David Kim, Senior Sales Executive</cite>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">55%</div>
                <div className="text-gray-600">Increase in close rates</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">40%</div>
                <div className="text-gray-600">Shorter sales cycles</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">70%</div>
                <div className="text-gray-600">Better objection handling</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">3x</div>
                <div className="text-gray-600">Faster onboarding</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Features */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Complete Sales Copilot Suite</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/ai-sales-copilot" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-emerald-600">AI Sales Copilot</h3>
                <p className="text-gray-600 mb-4">Experience the full power of AI-driven sales assistance with advanced features and unlimited usage.</p>
                <div className="flex items-center text-emerald-600 font-medium">
                  Explore premium <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>
              
              <Link to="/free-sales-copilot" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-emerald-600">Free Sales Copilot</h3>
                <p className="text-gray-600 mb-4">Start your sales copilot journey with our free tier - perfect for trying out AI-powered sales assistance.</p>
                <div className="flex items-center text-emerald-600 font-medium">
                  Try free <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>
              
              <Link to="/objection-handling" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-emerald-600">Objection Handling</h3>
                <p className="text-gray-600 mb-4">Master objection handling with your AI copilot's real-time response suggestions and coaching.</p>
                <div className="flex items-center text-emerald-600 font-medium">
                  Learn more <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Your AI Sales Copilot?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of sales professionals who've transformed their performance with AI-powered sales assistance.
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

export default SalesCopilotPage;