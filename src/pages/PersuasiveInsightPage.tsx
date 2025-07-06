import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Brain, TrendingUp, Target, Lightbulb, Users, ArrowRight, Star, CheckCircle, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DownloadButtons from '../components/DownloadButtons';

const PersuasiveInsightPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Unlock <span className="text-emerald-600">Persuasive Insights</span> with AI
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover hidden buying signals, understand customer psychology, and receive real-time persuasive insights that help you influence decisions and close more deals.
            </p>
            <DownloadButtons variant="hero" className="mb-8" />
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                <span>4.9/5 rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 text-emerald-500 mr-1" />
                <span>15,000+ sales professionals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What are Persuasive Insights Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">What are Persuasive Insights?</h2>
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Persuasive insights are data-driven observations about customer behavior, psychology, and decision-making patterns that help sales professionals influence buying decisions more effectively. These insights reveal the hidden motivations, concerns, and triggers that drive customer actions.
              </p>
              <p className="mb-6">
                With SalesHint's <Link to="/ai-sales-copilot" className="text-emerald-600 hover:text-emerald-700 font-medium">AI sales copilot</Link>, you get real-time persuasive insights during every <Link to="/sales-call" className="text-emerald-600 hover:text-emerald-700 font-medium">sales call</Link>. Our AI analyzes conversation patterns, emotional cues, and buying signals to provide actionable recommendations that increase your persuasive power and help you navigate complex sales situations with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Insights Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Types of Persuasive Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "Psychological Triggers",
                  description: "Identify decision-making patterns, risk tolerance, and psychological motivators that influence your prospect's buying behavior.",
                  examples: ["Authority bias", "Social proof needs", "Loss aversion", "Urgency sensitivity"]
                },
                {
                  icon: Eye,
                  title: "Buying Signals",
                  description: "Detect verbal and non-verbal cues that indicate purchase intent, objections, or readiness to move forward.",
                  examples: ["Price inquiries", "Implementation questions", "Timeline discussions", "Stakeholder mentions"]
                },
                {
                  icon: Target,
                  title: "Pain Point Analysis",
                  description: "Understand the depth and urgency of customer problems to position your solution as the perfect fit.",
                  examples: ["Cost concerns", "Efficiency gaps", "Competitive pressures", "Growth challenges"]
                },
                {
                  icon: TrendingUp,
                  title: "Engagement Patterns",
                  description: "Track conversation flow, engagement levels, and emotional responses to optimize your approach.",
                  examples: ["Question frequency", "Response length", "Enthusiasm markers", "Hesitation points"]
                },
                {
                  icon: Lightbulb,
                  title: "Opportunity Moments",
                  description: "Identify perfect timing for key sales moves like closing, upselling, or addressing objections.",
                  examples: ["Trial close timing", "Feature emphasis", "Pricing discussions", "Next step planning"]
                },
                {
                  icon: Users,
                  title: "Stakeholder Dynamics",
                  description: "Understand decision-maker relationships, influence patterns, and group dynamics in complex sales.",
                  examples: ["Decision authority", "Influence networks", "Budget control", "Implementation roles"]
                }
              ].map((insight, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <insight.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{insight.title}</h3>
                  <p className="text-gray-600 mb-4">{insight.description}</p>
                  <div className="space-y-1">
                    {insight.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="h-3 w-3 text-emerald-500 mr-2 flex-shrink-0" />
                        {example}
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
            <h2 className="text-4xl font-bold text-center mb-12">How AI-Powered Persuasive Insights Work</h2>
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Real-Time Analysis",
                  description: "Our AI continuously analyzes conversation content, tone, pace, and emotional indicators during your sales calls."
                },
                {
                  step: "2", 
                  title: "Pattern Recognition",
                  description: "Advanced algorithms identify persuasion opportunities, buying signals, and psychological triggers based on proven sales psychology."
                },
                {
                  step: "3",
                  title: "Contextual Recommendations",
                  description: "Receive specific, actionable insights tailored to your prospect's industry, role, and current conversation context."
                },
                {
                  step: "4",
                  title: "Continuous Learning",
                  description: "The AI learns from successful persuasion patterns to improve future insights and increase your influence effectiveness."
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

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Why Persuasive Insights Matter</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-emerald-600">For Sales Professionals</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Increase close rates by 35% with better persuasion timing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Build stronger rapport through psychological understanding</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Reduce sales cycle length by identifying ready buyers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Handle objections more effectively with insight-driven responses</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-emerald-600">For Sales Teams</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Standardize persuasion techniques across the team</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Accelerate new hire training with AI-guided coaching</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Improve forecast accuracy with buying signal analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Share successful persuasion patterns across the organization</span>
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
            <h2 className="text-4xl font-bold mb-12">Real Results from Persuasive Insights</h2>
            <div className="bg-emerald-50 rounded-2xl p-8 mb-8">
              <blockquote className="text-xl italic text-gray-700 mb-4">
                "The persuasive insights feature is like having a sales psychology expert whispering in my ear during every call. I can now read my prospects better and know exactly when to push forward or when to address concerns. My conversion rate has never been higher."
              </blockquote>
              <cite className="text-emerald-600 font-semibold">— Marcus Rodriguez, Senior Account Executive</cite>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">35%</div>
                <div className="text-gray-600">Higher close rates</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">50%</div>
                <div className="text-gray-600">Better objection handling</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">25%</div>
                <div className="text-gray-600">Shorter sales cycles</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Features */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Complete Sales Intelligence Suite</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/objection-handling" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-emerald-600">Objection Handling</h3>
                <p className="text-gray-600 mb-4">Transform customer objections into opportunities with AI-powered response suggestions and coaching.</p>
                <div className="flex items-center text-emerald-600 font-medium">
                  Learn more <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>
              
              <Link to="/ai-sales-copilot" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-emerald-600">AI Sales Copilot</h3>
                <p className="text-gray-600 mb-4">Your intelligent sales assistant providing real-time guidance, insights, and support during every interaction.</p>
                <div className="flex items-center text-emerald-600 font-medium">
                  Explore <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>
              
              <Link to="/free-sales-copilot" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-emerald-600">Free Sales Copilot</h3>
                <p className="text-gray-600 mb-4">Experience the power of AI-driven persuasive insights with our free tier - no commitment required.</p>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Unlock Persuasive Insights?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of sales professionals who've transformed their persuasion skills with AI-powered insights.
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

export default PersuasiveInsightPage;