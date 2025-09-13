'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChatBubbleLeftRightIcon, 
  XMarkIcon, 
  PaperAirplaneIcon,
  SparklesIcon,
  UserIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface FAQ {
  question: string;
  answer: string;
  keywords: string[];
}

const faqs: FAQ[] = [
  {
    question: "How do I book a makeup artist?",
    answer: "You can book a makeup artist by browsing our categories, selecting an artist you like, and filling out the booking form with your preferred date and time. Our artists will confirm your booking within 24 hours.",
    keywords: ["book", "booking", "appointment", "schedule", "reserve"]
  },
  {
    question: "What are your pricing ranges?",
    answer: "Our pricing varies by service type: Casual/Everyday makeup starts from ₹2,000, Party & Glam from ₹3,500, Bridal makeup from ₹8,000, and Premium services from ₹15,000+. Prices may vary based on the artist's experience and location.",
    keywords: ["price", "cost", "fee", "charges", "money", "expensive", "cheap"]
  },
  {
    question: "Do you provide makeup for weddings?",
    answer: "Yes! We specialize in bridal makeup with both traditional and contemporary styles. Our bridal packages include trial sessions, multiple look options, and can accommodate destination weddings.",
    keywords: ["wedding", "bridal", "bride", "marriage", "ceremony", "traditional", "contemporary"]
  },
  {
    question: "What areas do you cover?",
    answer: "We currently serve major cities including Mumbai, Delhi, Bangalore, Pune, Chennai, and Hyderabad. Our artists can also travel for destination weddings and special events with advance booking.",
    keywords: ["location", "area", "city", "travel", "destination", "where", "service area"]
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 2-3 weeks in advance for regular appointments and 2-3 months for bridal makeup or during wedding season. However, we also accommodate last-minute bookings based on artist availability.",
    keywords: ["advance", "notice", "when", "time", "early", "last minute", "availability"]
  },
  {
    question: "Do you offer trial sessions?",
    answer: "Yes! All our bridal packages include a complimentary trial session. For other services, trial sessions are available at 50% of the regular service cost and can be scheduled 1-7 days before your event.",
    keywords: ["trial", "test", "practice", "preview", "demo", "sample"]
  },
  {
    question: "What if I need to cancel or reschedule?",
    answer: "You can cancel or reschedule up to 48 hours before your appointment without any charges. Cancellations within 24 hours may incur a 25% fee. Emergency rescheduling is handled case-by-case.",
    keywords: ["cancel", "reschedule", "change", "modify", "refund", "emergency"]
  },
  {
    question: "Are your artists certified?",
    answer: "Yes! All our artists are professionally trained and certified. Many have worked with celebrities, fashion shows, and high-profile events. You can view their portfolios, certifications, and client reviews on their profiles.",
    keywords: ["certified", "qualified", "professional", "trained", "experience", "portfolio", "reviews"]
  },
  {
    question: "Do you provide makeup products?",
    answer: "Yes, all our artists come fully equipped with high-quality, branded makeup products. We use premium brands like MAC, Urban Decay, Charlotte Tilbury, and more. If you have specific product preferences or allergies, please mention them during booking.",
    keywords: ["products", "makeup", "brands", "equipment", "cosmetics", "allergies", "brands"]
  },
  {
    question: "How do I contact my assigned artist?",
    answer: "Once your booking is confirmed, you'll receive the artist's contact details via email and SMS. You can also track your booking status and communicate through our 'My Bookings' section on the website.",
    keywords: ["contact", "communication", "artist", "phone", "email", "track", "status"]
  },
  {
    question: "Do you offer group bookings?",
    answer: "Yes! We offer group bookings for events like hen parties, photo shoots, and family functions. Group bookings (3+ people) get special discounts. Contact us for custom packages and pricing.",
    keywords: ["group", "multiple", "family", "friends", "party", "event", "discount", "bulk"]
  },
  {
    question: "What if I'm not satisfied with the service?",
    answer: "Your satisfaction is our priority! If you're not happy with the service, please contact us within 24 hours. We offer touch-ups, partial refunds, or rebooking with a different artist based on the situation.",
    keywords: ["unsatisfied", "unhappy", "refund", "complaint", "problem", "issue", "guarantee"]
  },
  {
    question: "Do you have any special packages?",
    answer: "Yes! We offer various packages: Bridal Complete (trial + wedding day), Group Events (3+ people), Seasonal Packages, and Corporate Events. Each package includes special pricing and additional benefits.",
    keywords: ["package", "deal", "offer", "combo", "bundle", "special", "discount", "corporate"]
  }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Mia, your makeup consultant assistant. ✨\n\nI'm here to help with any questions about our services, booking process, pricing, and more. How can I assist you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findBestAnswer = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for greetings
    const greetings = ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'];
    if (greetings.some(greeting => lowerMessage.includes(greeting))) {
      return "Hello! Welcome to Melmua. 🌟 I'm here to help you with any questions about our makeup services. What would you like to know?";
    }

    // Check for thanks/goodbye
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return "You're very welcome! 😊 Is there anything else I can help you with about our makeup services?";
    }

    if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
      return "Goodbye! Thank you for visiting Melmua. Feel free to come back anytime if you have more questions. Have a beautiful day! ✨";
    }

    // Find best matching FAQ
    let bestMatch: FAQ | null = null;
    let maxMatches = 0;

    for (const faq of faqs) {
      const matches = faq.keywords.filter(keyword => 
        lowerMessage.includes(keyword.toLowerCase())
      ).length;
      
      if (matches > maxMatches) {
        maxMatches = matches;
        bestMatch = faq;
      }
    }

    if (bestMatch && maxMatches > 0) {
      return bestMatch.answer;
    }

    // Default response with suggestions
    return "I'd be happy to help! Here are some common topics I can assist with:\n\n💄 Booking process and appointments\n💰 Pricing and packages\n📍 Service areas and locations\n👰 Bridal makeup services\n✨ Trial sessions\n📋 Cancellation policies\n\nCould you please be more specific about what you'd like to know?";
  };

  const handleSuggestedQuestion = (question: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: question,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: findBestAnswer(question),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: findBestAnswer(userMessage.text),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const suggestedQuestions = [
    "How do I book an artist?",
    "What are your prices?",
    "Do you do bridal makeup?",
    "What areas do you serve?"
  ];

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary-600 to-rose-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${isOpen ? 'hidden' : 'block'}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
      >
        <ChatBubbleLeftRightIcon className="w-6 h-6" />
        <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
      </motion.button>

      {/* Chatbot Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-6 right-6 z-50 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-rose-500 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <SparklesIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Mia - Beauty Assistant</h3>
                  <p className="text-xs opacity-90">Online now</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex items-end gap-2 max-w-[80%] ${message.isBot ? '' : 'flex-row-reverse'}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                      message.isBot 
                        ? 'bg-gradient-to-r from-primary-100 to-rose-100 text-primary-600' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {message.isBot ? <SparklesIcon className="w-4 h-4" /> : <UserIcon className="w-4 h-4" />}
                    </div>
                    <div className={`p-3 rounded-2xl ${
                      message.isBot
                        ? 'bg-gray-100 text-gray-800 rounded-bl-md'
                        : 'bg-gradient-to-r from-primary-600 to-rose-500 text-white rounded-br-md'
                    }`}>
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <p className={`text-xs mt-1 ${message.isBot ? 'text-gray-500' : 'text-white/70'}`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-end gap-2 max-w-[80%]">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary-100 to-rose-100 text-primary-600 flex items-center justify-center">
                      <SparklesIcon className="w-4 h-4" />
                    </div>
                    <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-md">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Suggested questions for first interaction */}
              {messages.length === 1 && (
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 text-center">Quick questions:</p>
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestedQuestion(question)}
                      className="w-full text-left p-2 text-sm text-primary-600 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
                    >
                      <QuestionMarkCircleIcon className="w-4 h-4 inline mr-2" />
                      {question}
                    </button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 p-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm bg-white text-gray-900 placeholder-gray-500"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="p-2 bg-gradient-to-r from-primary-600 to-rose-500 text-white rounded-xl hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <PaperAirplaneIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}