'use client'

import { useState } from 'react'
import { 
  ChevronDown, 
  ChevronUp, 
  Plane, 
  Hotel, 
  Factory, 
  HelpCircle,
  MessageCircle,
  Send,
  X,
  Bot,
  User,
  Clock,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react'
import useScrollAnimation from '@/hooks/useScrollAnimation'

interface FAQItem {
  id: string
  question: string
  answer: string
  category: 'travel' | 'accommodation' | 'visit' | 'general'
  priority: 'high' | 'medium' | 'low'
}

const faqData: FAQItem[] = [
  // Travel Category
  {
    id: 'travel-1',
    question: 'What time should I arrive at KSR Bengaluru station?',
    answer: 'Please arrive at KSR Bengaluru station by 10:10 PM on 8th December. Train 12658 SBC MAS SF MAIL departs at 10:40 PM from Platform 1. Arriving early ensures smooth boarding and group coordination.',
    category: 'travel',
    priority: 'high'
  },
  {
    id: 'travel-2',
    question: 'What documents do I need for train travel?',
    answer: 'You need a valid government-issued ID (Aadhar Card, Driving License, or Passport) and your train ticket. Keep both documents easily accessible during the journey.',
    category: 'travel',
    priority: 'high'
  },
  {
    id: 'travel-3',
    question: 'Can I bring my own food on the train?',
    answer: 'Yes, you can bring your own food. However, the train has a pantry car with meals available for purchase. We recommend bringing light snacks and water for the journey.',
    category: 'travel',
    priority: 'medium'
  },
  {
    id: 'travel-4',
    question: 'What happens if I miss the train?',
    answer: 'If you miss the train, immediately contact Prathik P Kekare at +91 88614 02360 or Harshit Saroha at +91 87083 12327. We will arrange alternative transportation to Chennai, but you may miss some scheduled activities.',
    category: 'travel',
    priority: 'high'
  },
  {
    id: 'travel-5',
    question: 'Is there Wi-Fi available on the train?',
    answer: 'Wi-Fi availability varies by train and route. We recommend downloading any necessary materials beforehand and using mobile data for essential communication.',
    category: 'travel',
    priority: 'low'
  },

  // Accommodation Category
  {
    id: 'accommodation-1',
    question: 'What are the hotel check-in and check-out times?',
    answer: 'Check-in is at 4:30 AM - 7:30 AM on Day 2 (9th December) and check-out is at 6:15 AM on Day 3 (10th December). Early check-in or late check-out may incur additional charges.',
    category: 'accommodation',
    priority: 'high'
  },
  {
    id: 'accommodation-2',
    question: 'What amenities are available at the hotel?',
    answer: 'Royal Paris Hotel offers AC rooms, 24/7 room service, restaurant, conference facilities, Wi-Fi, laundry services, and 24/7 security. All rooms are 3-4 people sharing with modern amenities.',
    category: 'accommodation',
    priority: 'medium'
  },
  {
    id: 'accommodation-3',
    question: 'Can I request a single room?',
    answer: 'Single rooms are not available as per the program arrangement. All participants will be accommodated in twin-sharing rooms with same-gender roommates.',
    category: 'accommodation',
    priority: 'medium'
  },
  {
    id: 'accommodation-4',
    question: 'What should I do if I have issues with my room?',
    answer: 'Contact the hotel front desk immediately for any room-related issues. For program-specific concerns, reach out to Prathik P Kekare at +91 88614 02360 or Harshit Saroha at +91 87083 12327.',
    category: 'accommodation',
    priority: 'medium'
  },
  {
    id: 'accommodation-5',
    question: 'Are meals included in the accommodation?',
    answer: 'Breakfast is included on Day 2 and Day 3. Lunch and dinner arrangements will be communicated during the program. The hotel restaurant offers various meal options.',
    category: 'accommodation',
    priority: 'medium'
  },

  // Visit Details Category
  {
    id: 'visit-1',
    question: 'What should I expect during the ICF factory tour?',
    answer: 'The ICF tour includes visiting production lines, quality control areas, and design departments. You will see coach manufacturing processes, safety protocols, and interact with engineers. Photography is restricted in certain areas.',
    category: 'visit',
    priority: 'high'
  },
  {
    id: 'visit-2',
    question: 'What safety equipment will be provided?',
    answer: 'Safety helmets, safety glasses, and high-visibility vests will be provided during factory tours. You must wear all provided safety equipment and follow safety instructions at all times.',
    category: 'visit',
    priority: 'high'
  },
  {
    id: 'visit-3',
    question: 'Can I take photographs during the visit?',
    answer: 'Photography is allowed in designated areas only. Some production areas and sensitive equipment are restricted. Always ask for permission before taking photos and respect the company\'s photography policies.',
    category: 'visit',
    priority: 'medium'
  },
  {
    id: 'visit-4',
    question: 'What should I bring for the factory visit?',
    answer: 'Bring your ID card, notebook, pen, and any required documents. Avoid loose clothing, jewelry, or items that could pose safety risks. Follow the dress code guidelines strictly.',
    category: 'visit',
    priority: 'high'
  },
  {
    id: 'visit-5',
    question: 'Will there be Q&A sessions with engineers?',
    answer: 'Yes, there will be dedicated Q&A sessions with ICF engineers and management. Prepare your questions in advance and participate actively in these interactive sessions.',
    category: 'visit',
    priority: 'medium'
  },

  // General Category
  {
    id: 'general-1',
    question: 'What is the emergency contact number?',
    answer: 'For emergencies, contact Prathik P Kekare at +91 88614 02360 or Harshit Saroha at +91 87083 12327. The emergency contact +91 88614 02360 is available 24/7 during the visit.',
    category: 'general',
    priority: 'high'
  },
  {
    id: 'general-2',
    question: 'What should I do if I feel unwell during the visit?',
    answer: 'Inform Prathik P Kekare (+91 88614 02360) or Harshit Saroha (+91 87083 12327) immediately. The hotel has a doctor on call, and we can arrange medical assistance. Keep your health insurance details handy.',
    category: 'general',
    priority: 'high'
  },
  {
    id: 'general-3',
    question: 'Can I leave the group during free time?',
    answer: 'Free time activities are group-based for safety. If you need to leave the group, inform the coordinator and ensure you have emergency contact numbers. Always travel in pairs or small groups.',
    category: 'general',
    priority: 'medium'
  },
  {
    id: 'general-4',
    question: 'What is the expected weather in Chennai?',
    answer: 'Chennai in December is pleasant with temperatures around 25-30°C. Bring light, breathable clothing and stay hydrated.',
    category: 'general',
    priority: 'medium'
  },
  {
    id: 'general-5',
    question: 'Will there be a certificate of participation?',
    answer: 'Yes, all participants will receive a certificate of participation from ICF and the university. Certificates will be distributed at the end of the program.',
    category: 'general',
    priority: 'low'
  }
]

const categoryIcons = {
  travel: Plane,
  accommodation: Hotel,
  visit: Factory,
  general: HelpCircle
}

const categoryColors = {
  travel: 'bg-blue-500',
  accommodation: 'bg-purple-500',
  visit: 'bg-green-500',
  general: 'bg-orange-500'
}

const priorityColors = {
  high: 'text-red-600',
  medium: 'text-yellow-600',
  low: 'text-green-600'
}

const priorityIcons = {
  high: AlertCircle,
  medium: Info,
  low: CheckCircle
}

// Sample chatbot responses
const chatbotResponses = [
  "Hello! I'm here to help with your ICF visit questions. How can I assist you today?",
  "For train travel, please arrive at KSR by 10:10 PM on 8th December. Train 12658 SBC MAS SF MAIL departs at 10:40 PM.",
  "Hotel check-in is at 4:30 AM - 7:30 AM on Day 2 and check-out is at 6:15 AM on Day 3.",
  "Safety equipment will be provided during factory tours. Please follow all safety instructions.",
  "For emergencies, contact +91 88614 02360. This number is available 24/7 during the visit.",
  "Photography is allowed in designated areas only. Always ask for permission before taking photos.",
  "The ICF tour includes production lines, quality control, and design departments. You'll interact with engineers.",
  "Breakfast is included on Day 2 and Day 3. Other meals will be arranged during the program.",
  "Chennai weather in December is pleasant (25-30°C). Bring light clothing and stay hydrated.",
  "All participants will receive a certificate of participation from ICF and the university."
]

export default function QuestionsPage() {
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [chatOpen, setChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState<Array<{id: string, text: string, isUser: boolean, timestamp: Date}>>([
    { id: '1', text: "Hello! I'm here to help with your ICF visit questions. How can I assist you today?", isUser: false, timestamp: new Date() }
  ])
  const [inputMessage, setInputMessage] = useState('')

  const [headerRef, headerVisible] = useScrollAnimation()
  const [faqRef, faqVisible] = useScrollAnimation()
  const [chatbotRef, chatbotVisible] = useScrollAnimation()

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )
  }

  const filteredFAQs = activeCategory === 'all' 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory)

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    }

    setChatMessages(prev => [...prev, userMessage])
    setInputMessage('')

    // Simulate bot response
    setTimeout(() => {
      const randomResponse = chatbotResponses[Math.floor(Math.random() * chatbotResponses.length)]
      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        isUser: false,
        timestamp: new Date()
      }
      setChatMessages(prev => [...prev, botMessage])
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      {/* Header Section */}
      <div 
        ref={headerRef}
        className={`fade-in-up ${headerVisible ? 'animate' : ''}`}
      >
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Questions & FAQ
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Find answers to common questions about your Integral Coach Factory visit
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-md">
                <HelpCircle className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {faqData.length} Questions
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-md">
                <MessageCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Live Chat Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-slate-700'
            }`}
          >
            All Questions
          </button>
          {Object.entries(categoryIcons).map(([category, Icon]) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category
                  ? `${categoryColors[category as keyof typeof categoryColors]} text-white shadow-lg`
                  : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700'
              }`}
            >
              <Icon className="w-4 h-4" />
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div 
        ref={faqRef}
        className={`fade-in-up ${faqVisible ? 'animate' : ''}`}
      >
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {filteredFAQs.map((item, index) => {
                const Icon = categoryIcons[item.category]
                const PriorityIcon = priorityIcons[item.priority]
                const isExpanded = expandedItems.includes(item.id)
                
                return (
                  <div
                    key={item.id}
                    className={`fade-in-up stagger-${(index % 6) + 1} ${
                      faqVisible ? 'animate' : ''
                    }`}
                  >
                    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <button
                        onClick={() => toggleExpanded(item.id)}
                        className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className={`p-2 rounded-lg ${categoryColors[item.category]}`}>
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {item.question}
                              </h3>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                                  {item.category}
                                </span>
                                <PriorityIcon className={`w-4 h-4 ${priorityColors[item.priority]}`} />
                                <span className={`text-sm font-medium ${priorityColors[item.priority]}`}>
                                  {item.priority}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex-shrink-0">
                            {isExpanded ? (
                              <ChevronUp className="w-5 h-5 text-gray-500" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-500" />
                            )}
                          </div>
                        </div>
                      </button>
                      
                      <div className={`transition-all duration-300 ease-in-out ${
                        isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="px-6 pb-4">
                          <div className="border-t border-gray-200 dark:border-slate-700 pt-4">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot Integration Placeholder */}
      <div 
        ref={chatbotRef}
        className={`fade-in-up ${chatbotVisible ? 'animate' : ''}`}
      >
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Need More Help?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Can&apos;t find what you&apos;re looking for? Our AI assistant is here to help with any questions about your ICF visit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setChatOpen(true)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Start Chat
                </button>
                <button className="bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-blue-500 hover:bg-blue-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 min-w-[44px] min-h-[44px] flex items-center justify-center"
      >
        {chatOpen ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        )}
      </button>

      {/* Chat Window */}
      {chatOpen && (
        <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 w-[calc(100vw-2rem)] sm:w-80 h-80 sm:h-96 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-gray-200 dark:border-slate-700 z-40 flex flex-col max-w-sm sm:max-w-none">
          {/* Chat Header */}
          <div className="bg-blue-500 text-white p-4 rounded-t-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <span className="font-medium">ICF Assistant</span>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {chatMessages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.isUser
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-3 sm:p-4 border-t border-gray-200 dark:border-slate-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2.5 sm:py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white text-sm sm:text-base"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white p-2.5 sm:p-2 rounded-lg transition-colors duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}