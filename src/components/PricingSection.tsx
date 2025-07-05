import React from 'react';
import { Check, ArrowRight, Sparkles, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { stripeProducts } from '../stripe-config';
import { useAuth } from '../contexts/AuthContext';
import PricingCard from './PricingCard';

const PricingSection = () => {
  const { user } = useAuth();

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Simple Pricing</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your <span className="text-emerald-600">Plan</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start closing more deals with AI-powered sales assistance. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Free Plan */}
            <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden border border-gray-200 flex flex-col">
              <div className="px-8 pt-8 pb-6 flex-1">
                <h3 className="text-2xl font-bold mb-2">Free Trial</h3>
                <p className="text-gray-600 mb-6 h-20 flex items-center">
                  Get started with basic features to experience the power of AI sales assistance.
                </p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold">$0</span>
                  <span className="text-gray-600 ml-2">/ forever</span>
                </div>
                
                {user ? (
                  <Link 
                    to="/dashboard"
                    className="w-full btn bg-emerald-100 text-emerald-800 hover:bg-emerald-200 mb-6 inline-flex items-center justify-center py-3"
                  >
                    Access Free Plan
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                ) : (
                  <Link 
                    to="/signup"
                    className="w-full btn bg-emerald-100 text-emerald-800 hover:bg-emerald-200 mb-6 inline-flex items-center justify-center py-3"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                )}
              </div>
              
              <div className="bg-gray-100 px-8 py-8 h-full">
                <h4 className="font-medium mb-4 text-gray-800">What's included:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">5 calls, 5 minutes each</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Basic conversation insights</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Community support</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Advanced AI insights</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Priority support</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">CRM integrations</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pro Plan - Using PricingCard component */}
            <div className="flex">
              <PricingCard 
                product={stripeProducts[0]}
                popular={true}
              />
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-emerald-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">No Setup Fees</h4>
              <p className="text-gray-600 text-sm">Get started immediately with no hidden costs or setup fees.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-emerald-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Cancel Anytime</h4>
              <p className="text-gray-600 text-sm">No long-term contracts. Cancel your subscription anytime.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-emerald-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Secure & Private</h4>
              <p className="text-gray-600 text-sm">Your data is encrypted and secure. We never share your information.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;