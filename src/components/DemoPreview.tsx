import React, { useState, useEffect } from 'react';
import { MessageSquare, Mic, Video, Mail, Users } from 'lucide-react';

const DemoPreview = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  
  const conversation = [
    {
      speaker: "John (Customer)",
      customer: "What makes your solution different from others in the market?",
      suggestion: "\"Unlike traditional solutions, we use advanced AI to analyze conversations in real-time, providing contextual suggestions rather than scripted responses. This means more natural conversations and better outcomes.\"",
      email: {
        subject: "Following up on our discussion about AI-powered sales solutions",
        body: "Hi John,\n\nThanks for the great discussion about how AI can transform your sales process. I wanted to elaborate on some of the unique features we discussed...\n\nBest regards,\nMike"
      }
    },
    {
      speaker: "John (Customer)",
      customer: "How long does implementation typically take?",
      suggestion: "\"Most teams are up and running in less than a day. We provide a dedicated onboarding specialist to ensure a smooth setup, and our integration with your existing tools is automated.\"",
      email: {
        subject: "Implementation timeline and next steps",
        body: "Hi John,\n\nI wanted to follow up on our discussion about implementation timing. I've outlined a detailed timeline that shows how we can have your team up and running quickly...\n\nBest,\nMike"
      }
    },
    {
      speaker: "John (Customer)",
      customer: "Can you tell me about the ROI other companies have seen?",
      suggestion: "\"Our customers typically see a 30% increase in close rates within the first quarter. For example, TechCorp increased their sales by 45% while reducing their sales cycle by 2 weeks.\"",
      email: {
        subject: "ROI metrics and customer success stories",
        body: "Hi John,\n\nFollowing our conversation about ROI, I've attached some detailed case studies showing how other companies in your industry have achieved significant results...\n\nRegards,\nMike"
      }
    }
  ];
  
  useEffect(() => {
    if (isInitialLoad) {
      setIsInitialLoad(false);
      setShowSuggestion(true);
      return;
    }

    const cycleContent = () => {
      setShowSuggestion(false);
      setShowEmail(false);

      setTimeout(() => {
        setShowSuggestion(true);

        setTimeout(() => {
          setShowSuggestion(false);
          setShowEmail(true);

          setTimeout(() => {
            setShowEmail(false);
            setCurrentStep((prev) => (prev + 1) % conversation.length);
          }, 1500);
        }, 1500);
      }, 200);
    };

    const intervalId = setInterval(cycleContent, 4000);
    return () => clearInterval(intervalId);
  }, [currentStep, isInitialLoad]);

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[700px]">
      <div className="bg-[#1C1C1E] rounded-xl overflow-hidden shadow-2xl h-full flex flex-col">
        {/* Video call header */}
        <div className="bg-[#2C2C2E] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-white font-medium">Sales Call with Acme Corp</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm">00:05:23</span>
            <Users className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        {/* Video call content */}
        <div className="grid grid-cols-2 gap-4 p-4 bg-[#1C1C1E]">
          {/* Sales rep video */}
          <div className="relative aspect-video bg-[#2C2C2E] rounded-lg overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg" 
              alt="Sales Representative"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute bottom-3 left-3 flex items-center bg-black/50 rounded-full px-3 py-1">
              <span className="text-white text-sm">Mike (Sales Rep)</span>
            </div>
          </div>
          
          {/* Customer video */}
          <div className="relative aspect-video bg-[#2C2C2E] rounded-lg overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg" 
              alt="Customer"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute bottom-3 left-3 flex items-center bg-black/50 rounded-full px-3 py-1">
              <span className="text-white text-sm">John (Customer)</span>
            </div>
          </div>
        </div>

        {/* Call controls */}
        <div className="bg-[#2C2C2E] px-4 py-3 flex items-center justify-center space-x-6 border-t border-[#3A3A3C]">
          <button className="text-white hover:text-gray-300 transition-colors">
            <Mic className="h-5 w-5" />
          </button>
          <button className="text-white hover:text-gray-300 transition-colors">
            <Video className="h-5 w-5" />
          </button>
        </div>

        {/* Transcript and suggestions section */}
        <div className="flex-1 bg-[#2C2C2E] p-4 space-y-2 border-t border-[#3A3A3C] overflow-y-auto">
          {/* Live Transcript */}
          <div className="bg-[#1C1C1E] rounded-lg p-4">
            <div className="flex items-center mb-2">
              <MessageSquare className="h-4 w-4 text-gray-400 mr-2" />
              <span className="text-gray-400 text-sm font-medium">Live Transcript</span>
            </div>
            <div className="space-y-2">
              <div className="text-emerald-400 text-sm font-medium">{conversation[currentStep].speaker}</div>
              <p className="text-white">{conversation[currentStep].customer}</p>
            </div>
          </div>

          {/* AI suggestion */}
          <div className={`transform transition-all duration-150 ${
            showSuggestion ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0 absolute'
          }`}>
            <div className="bg-emerald-900 rounded-lg overflow-hidden">
              <div className="px-3 py-2 flex items-center bg-emerald-800">
                <MessageSquare className="h-4 w-4 text-emerald-300 mr-2" />
                <span className="text-sm font-medium text-white">Live Sales Hint</span>
              </div>
              <div className="p-4">
                <p className="text-sm text-white leading-relaxed">{conversation[currentStep].suggestion}</p>
              </div>
            </div>
          </div>

          {/* Follow-up email draft */}
          <div className={`transform transition-all duration-150 ${
            showEmail ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0 absolute'
          }`}>
            <div className="bg-blue-900 rounded-lg overflow-hidden">
              <div className="px-3 py-2 flex items-center bg-blue-800">
                <Mail className="h-4 w-4 text-blue-300 mr-2" />
                <span className="text-sm font-medium text-white">Follow-up Email Draft</span>
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-white mb-2">{conversation[currentStep].email.subject}</p>
                <p className="text-sm text-blue-100 opacity-90 whitespace-pre-line">{conversation[currentStep].email.body}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPreview;