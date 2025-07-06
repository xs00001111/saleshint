import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Sparkles, Brain, MessageSquare, TrendingUp, Zap, ArrowRight, Star, Users, CheckCircle, Crown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DownloadButtons from '../components/DownloadButtons';

const AISalesCopilotPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Advanced AI Technology</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              The Ultimate <span className="text-emerald-600">AI Sales Copilot</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience the most advanced AI sales assistant available. Get real-time guidance, intelligent insights, and automated support that transforms every customer interaction into a winning opportunity.
            </p>
            <DownloadButtons variant="hero" className="mb-8" />
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                <span>4.9/5 rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 text-emerald-500 mr-1" />
                <span>30,000+ sales professionals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Our AI Special Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">What Makes Our AI Sales Copilot Special?</h2>
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Our AI sales copilot represents the cutting edge of artificial intelligence applied to sales. Unlike basic chatbots or simple automation tools, our AI understands context, emotion, and sales psychology to provide truly intelligent assistance that adapts to your unique selling style and customer needs.
              </p>
              <p className="mb-6">
                Built on advanced machine learning models trained on millions of successful <Link to="/sales-call" className="text-emerald-600 hover:text-emerald-700 font-medium">sales calls</Link>, our AI provides sophisticated <Link to="/objection-handling" className="text-emerald-600 hover:text-emerald-700 font-medium">objection handling</Link>, deep <Link to="/persuasive-insight" className="text-emerald-600 hover:text-emerald-700 font-medium">persuasive insights</Link>, and strategic guidance that feels like having a world-class sales coach available 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced AI Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Advanced AI Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "Contextual Intelligence",
                  description: "Understands conversation context, customer history, and industry nuances to provide relevant, timely guidance.",
                  features: ["Multi-turn conversation memory", "Industry-specific knowledge", "Customer profile integration", "Historical interaction analysis"]
                },
                {
                  icon: MessageSquare,
                  title: "Natural Language Processing",
                  description: "Advanced NLP analyzes tone, sentiment, and intent to understand what customers really mean.",
                  features: ["Sentiment analysis", "Intent recognition", "Emotional intelligence", "Subtext interpretation"]
                },
                {
                  icon: TrendingUp,
                  title: "Predictive Analytics",
                  description: "Predicts customer behavior, deal outcomes, and optimal next steps using machine learning algorithms.",
                  features: ["Deal probability scoring", "Churn risk prediction", "Upsell opportunity detection", "Timing optimization"]
                },
                {
                  icon: Zap,
                  title: "Real-Time Processing",
                  description: "Processes information instantly to provide immediate insights and recommendations during live conversations.",
                  features: ["Sub-second response time", "Live conversation analysis", "Instant recommendations", "Real-time coaching"]
                },
                {
                  icon: Bot,
                  title: "Adaptive Learning",
                  description: "Continuously learns from your interactions to provide increasingly personalized and effective guidance.",
                  features: ["Personal style adaptation", "Success pattern recognition", "Custom recommendation tuning", "Performance optimization"]
                },
                {
                  icon: Crown,
                  title: "Enterprise Intelligence",
                  description: "Integrates with your entire sales ecosystem to provide comprehensive, organization-wide insights.",
                  features: ["CRM integration", "Team performance analytics", "Pipeline optimization", "Revenue forecasting"]
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="space-y-1">
                    {feature.features.map((item, idx) => (
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

      {/* AI vs Human Comparison */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">AI Sales Copilot vs Traditional Sales Support</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-600">Traditional Sales Support</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Limited Availability</h4>
                      <p className="text-sm text-gray-600">Sales managers and coaches have limited time and availability</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Subjective Guidance</h4>
                      <p className="text-sm text-gray-600">Advice based on personal experience, not data-driven insights</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Reactive Support</h4>
                      <p className="text-sm text-gray-600">Help comes after problems occur, not during critical moments</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Inconsistent Quality</h4>
                      <p className="text-sm text-gray-600">Support quality varies based on individual expertise and mood</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-emerald-50 rounded-xl p-8 border-2 border-emerald-200">
                <h3 className="text-2xl font-semibold mb-6 text-emerald-600">AI Sales Copilot</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-700">24/7 Availability</h4>
                      <p className="text-sm text-gray-600">Always available during every call, meeting, and customer interaction</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-700">Data-Driven Insights</h4>
                      <p className="text-sm text-gray-600">Recommendations based on analysis of millions of successful interactions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-700">Proactive Guidance</h4>
                      <p className="text-sm text-gray-600">Real-time support during critical moments when you need it most</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-700">Consistent Excellence</h4>
                      <p className="text-sm text-gray-600">Delivers the same high-quality support every time, without variation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">AI Sales Copilot Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Discovery Calls",
                  description: "Guide questioning strategies, identify pain points, and uncover hidden needs with AI-powered conversation analysis.",
                  benefits: ["Better question frameworks", "Pain point identification", "Need prioritization", "Opportunity mapping"]
                },
                {
                  title: "Product Demonstrations",
                  description: "Optimize demo flow, highlight relevant features, and address concerns in real-time based on customer reactions.",
                  benefits: ["Feature relevance scoring", "Engagement monitoring", "Objection prevention", "Value articulation"]
                },
                {
                  title: "Negotiation Support",
                  description: "Navigate complex negotiations with AI insights on pricing strategies, concession timing, and deal structuring.",
                  benefits: ["Pricing optimization", "Concession strategies", "Deal structuring", "Risk assessment"]
                },
                {
                  title: "Follow-up Conversations",
                  description: "Maintain momentum with personalized follow-up strategies and conversation continuity across multiple touchpoints.",
                  benefits: ["Personalized messaging", "Timing optimization", "Relationship building", "Progress tracking"]
                }
              ].map((useCase, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-3 text-emerald-600">{useCase.title}</h3>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="h-3 w-3 text-emerald-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">AI Sales Copilot Results</h2>
            <div className="bg-emerald-50 rounded-2xl p-8 mb-8">
              <blockquote className="text-xl italic text-gray-700 mb-4">
                "The AI sales copilot has completely transformed how I approach sales. It's like having the world's best sales trainer, data analyst, and conversation coach all working together to help me succeed. My performance has never been better."
              </blockquote>
              <cite className="text-emerald-600 font-semibold">— Rachel Thompson, VP of Sales</cite>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">65%</div>
                <div className="text-gray-600">Higher close rates</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">45%</div>
                <div className="text-gray-600">Shorter sales cycles</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">80%</div>
                <div className="text-gray-600">Better objection handling</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">5x</div>
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
            <h2 className="text-4xl font-bold text-center mb-12">Complete AI Sales Solution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/sales-copilot" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-emerald-600">Sales Copilot Overview</h3>
                <p className="text-gray-600 mb-4">Learn about the fundamentals of sales copilot technology and how it can transform your sales process.</p>
                <div className="flex items-center text-emerald-600 font-medium">
                  Learn basics <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>
              
              <Link to="/free-sales-copilot" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-emerald-600">Free Sales Copilot</h3>
                <p className="text-gray-600 mb-4">Experience AI sales assistance with our free tier before upgrading to the full AI copilot experience.</p>
                <div className="flex items-center text-emerald-600 font-medium">
                  Try free <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>
              
              <Link to="/persuasive-insight" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-emerald-600">Persuasive Insights</h3>
                <p className="text-gray-600 mb-4">Discover how AI-powered persuasive insights help you influence customer decisions more effectively.</p>
                <div className="flex items-center text-emerald-600 font-medium">
                  Explore insights <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for the Ultimate AI Sales Copilot?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the elite group of sales professionals using the most advanced AI sales technology available.
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

export default AISalesCopilotPage;