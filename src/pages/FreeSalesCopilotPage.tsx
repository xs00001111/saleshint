import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, Star, Users, CheckCircle, ArrowRight, Zap, MessageSquare, TrendingUp, Crown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DownloadButtons from '../components/DownloadButtons';

const FreeSalesCopilotPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full mb-6">
              <Gift className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">100% Free Forever</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Start with a <span className="text-emerald-600">Free Sales Copilot</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience the power of AI-driven sales assistance without any commitment. Get real-time guidance, conversation insights, and intelligent support to boost your sales performance—completely free.
            </p>
            <DownloadButtons variant="hero" className="mb-8" />
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                <span>4.9/5 rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 text-emerald-500 mr-1" />
                <span>50,000+ free users</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Free Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">What's Included in Your Free Sales Copilot</h2>
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Our free sales copilot gives you access to core AI-powered sales assistance features that can immediately improve your performance. Experience real-time guidance during <Link to="/sales-call" className="text-emerald-600 hover:text-emerald-700 font-medium">sales calls</Link>, basic <Link to="/objection-handling" className=\"text-emerald-600 hover:text-emerald-700 font-medium">objection handling</Link> support, and essential <Link to="/persuasive-insight" className=\"text-emerald-600 hover:text-emerald-700 font-medium">persuasive insights</Link> without any cost or commitment.
              </p>
              <p className="mb-6">
                Perfect for individual sales professionals, small teams, or anyone wanting to explore how an <Link to="/ai-sales-copilot" className="text-emerald-600 hover:text-emerald-700 font-medium">AI sales copilot</Link> can transform their sales process. No credit card required, no hidden fees, no time limits on core features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Free Sales Copilot Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: MessageSquare,
                  title: "Basic Conversation Insights",
                  description: "Get real-time analysis of your sales conversations with sentiment tracking and engagement monitoring.",
                  included: ["5 calls per month", "5 minutes per call", "Basic sentiment analysis", "Conversation summaries"]
                },
                {
                  icon: Zap,
                  title: "Essential Objection Handling",
                  description: "Receive AI-powered suggestions for handling common sales objections and customer concerns.",
                  included: ["Common objection responses", "Basic response templates", "Confidence building tips", "Follow-up suggestions"]
                },
                {
                  icon: TrendingUp,
                  title: "Performance Tracking",
                  description: "Monitor your sales performance with basic analytics and improvement recommendations.",
                  included: ["Call success metrics", "Basic performance trends", "Improvement suggestions", "Progress tracking"]
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.included.map((item, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="h-3 w-3 text-emerald-500 mr-2 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Free vs Premium Comparison */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Free vs Premium Sales Copilot</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200">
                <div className="flex items-center mb-6">
                  <Gift className="h-8 w-8 text-emerald-600 mr-3" />
                  <h3 className="text-2xl font-semibold text-emerald-600">Free Sales Copilot</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-700">5 calls per month (5 min each)</h4>
                      <p className="text-sm text-gray-600">Perfect for trying out AI sales assistance</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-700">Basic conversation insights</h4>
                      <p className="text-sm text-gray-600">Essential analytics and sentiment tracking</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-700">Common objection handling</h4>
                      <p className="text-sm text-gray-600">AI responses for frequent sales objections</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-700">Community support</h4>
                      <p className="text-sm text-gray-600">Access to user community and basic help</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link to="/signup" className="w-full btn bg-emerald-600 text-white hover:bg-emerald-700">
                    Start Free Today
                  </Link>
                </div>
              </div>
              
              <div className="bg-emerald-50 rounded-xl p-8 border-2 border-emerald-300">
                <div className="flex items-center mb-6">
                  <Crown className="h-8 w-8 text-emerald-600 mr-3" />
                  <h3 className="text-2xl font-semibold text-emerald-600">Premium Sales Copilot</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-700">Unlimited calls & duration</h4>
                      <p className="text-sm text-gray-600">No limits on usage or call length</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-700">Advanced AI insights</h4>
                      <p className="text-sm text-gray-600">Deep conversation analysis and predictive insights</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-700">Personalized objection handling</h4>
                      <p className="text-sm text-gray-600">Custom responses based on your industry and style</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-700">Priority support & training</h4>
                      <p className="text-sm text-gray-600">Dedicated support and personalized coaching</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-700">CRM integrations</h4>
                      <p className="text-sm text-gray-600">Seamless integration with your existing tools</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link to="/signup" className="w-full btn bg-emerald-600 text-white hover:bg-emerald-700">
                    Upgrade to Premium
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Getting Started with Your Free Sales Copilot</h2>
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Sign Up for Free",
                  description: "Create your account in under 60 seconds. No credit card required, no hidden fees, no commitments."
                },
                {
                  step: "2", 
                  title: "Download the App",
                  description: "Install SalesHint on your desktop to start receiving real-time guidance during your sales calls."
                },
                {
                  step: "3",
                  title: "Start Your First Call",
                  description: "Begin a sales conversation and watch as your AI copilot provides instant insights and suggestions."
                },
                {
                  step: "4",
                  title: "Review and Improve",
                  description: "After each call, review the insights and recommendations to continuously improve your sales performance."
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
            <h2 className="text-4xl font-bold mb-12">Free Users See Real Results</h2>
            <div className="bg-emerald-50 rounded-2xl p-8 mb-8">
              <blockquote className="text-xl italic text-gray-700 mb-4">
                "I started with the free sales copilot just to test it out. Even with the basic features, I saw immediate improvements in my objection handling. After two weeks, I upgraded to premium and haven't looked back."
              </blockquote>
              <cite className="text-emerald-600 font-semibold">— Alex Chen, Sales Representative</cite>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">25%</div>
                <div className="text-gray-600">Improvement in first month</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">80%</div>
                <div className="text-gray-600">Upgrade to premium</div>
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
            <h2 className="text-4xl font-bold text-center mb-12">Explore More Sales Copilot Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/sales-copilot" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-emerald-600">Sales Copilot Overview</h3>
                <p className="text-gray-600 mb-4">Learn about the complete sales copilot experience and how it can transform your sales process.</p>
                <div className="flex items-center text-emerald-600 font-medium">
                  Learn more <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>
              
              <Link to="/ai-sales-copilot" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-emerald-600">AI Sales Copilot</h3>
                <p className="text-gray-600 mb-4">Discover the advanced AI technology that powers our premium sales copilot features.</p>
                <div className="flex items-center text-emerald-600 font-medium">
                  Explore AI features <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>
              
              <Link to="/objection-handling" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-emerald-600">Objection Handling</h3>
                <p className="text-gray-600 mb-4">Master the art of handling sales objections with AI-powered guidance and proven techniques.</p>
                <div className="flex items-center text-emerald-600 font-medium">
                  Master objections <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your Free Sales Copilot Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of sales professionals who started with our free copilot and transformed their sales performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <DownloadButtons variant="hero" />
            <Link to="/signup" className="btn bg-white text-emerald-600 hover:bg-gray-100">
              Sign Up Free
            </Link>
          </div>
          <p className="text-emerald-100 text-sm mt-4">No credit card required • No time limits • No hidden fees</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FreeSalesCopilotPage;