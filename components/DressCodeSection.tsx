'use client'

import { 
  Shirt,
  Footprints,
  User,
  UserCheck,
  AlertCircle,
  Info,
  CheckCircle,
  XCircle
} from 'lucide-react'
import useScrollAnimation from '@/hooks/useScrollAnimation'

export default function DressCodeSection() {
  const [headerRef, headerVisible] = useScrollAnimation()
  const [cardsRef, cardsVisible] = useScrollAnimation()
  const [guidelinesRef, guidelinesVisible] = useScrollAnimation()

  const boysDressCode = [
    {
      item: 'Formal Shirt',
      description: 'Light colored, well-ironed formal shirt',
      icon: Shirt,
      required: true,
      examples: ['White', 'Light Blue', 'Cream']
    },
    {
      item: 'Formal Trousers',
      description: 'Dark colored formal trousers',
      icon: Shirt,
      required: true,
      examples: ['Black', 'Navy Blue', 'Dark Gray']
    },
    {
      item: 'Formal Shoes',
      description: 'Closed-toe formal shoes',
      icon: Footprints,
      required: true,
      examples: ['Black Leather', 'Brown Leather']
    },
    {
      item: 'Belt',
      description: 'Matching leather belt',
      icon: Shirt,
      required: true,
      examples: ['Black', 'Brown']
    }
  ]

  const girlsDressCode = [
    {
      item: 'Formal Shirt/Blouse',
      description: 'Light colored, well-ironed formal shirt or blouse',
      icon: Shirt,
      required: true,
      examples: ['White', 'Light Pink', 'Cream']
    },
    {
      item: 'Formal Trousers/Skirt',
      description: 'Dark colored formal trousers or knee-length skirt',
      icon: Shirt,
      required: true,
      examples: ['Black', 'Navy Blue', 'Dark Gray']
    },
    {
      item: 'Formal Shoes',
      description: 'Closed-toe formal shoes (low heels preferred)',
      icon: Footprints,
      required: true,
      examples: ['Black', 'Brown', 'Navy']
    },
    {
      item: 'Minimal Accessories',
      description: 'Simple, professional accessories',
      icon: Shirt,
      required: false,
      examples: ['Simple Watch', 'Minimal Jewelry']
    }
  ]

  const generalGuidelines = [
    {
      type: 'required',
      title: 'Required Items',
      items: [
        'Clean, well-ironed clothes',
        'Closed-toe shoes for safety',
        'Professional appearance',
        'Comfortable fit for long hours'
      ]
    },
    {
      type: 'avoid',
      title: 'Items to Avoid',
      items: [
        'Jeans or casual wear',
        'T-shirts or casual tops',
        'Open-toe shoes or sandals',
        'Excessive jewelry or accessories',
        'Bright or flashy colors',
        'Torn or damaged clothing'
      ]
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-secondary-900 dark:to-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 fade-in-up ${headerVisible ? 'animate' : ''}`}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full mb-6">
            <UserCheck className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
            Dress Code Guidelines
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 dark:text-secondary-400 max-w-4xl mx-auto leading-relaxed">
            Professional attire is required for the Integral Coach Factory visit. Please follow these guidelines 
            to ensure a safe, comfortable, and professional experience during your three-day program.
          </p>

          {/* Important Safety Notes */}
          <div className="card bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border-l-4 border-l-amber-500 mt-6 max-w-4xl mx-auto w-full">
            <div className="flex items-start space-x-4 p-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-100 dark:bg-amber-800 rounded-full flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-100 mb-3">
                  Important Safety Notes
                </h3>
                <div className="space-y-2 text-amber-800 dark:text-amber-200">
                  <p>• <strong>Closed-toe shoes are mandatory</strong> for safety in the manufacturing facility</p>
                  <p>• <strong>Long hair must be tied back</strong> to prevent accidents with machinery</p>
                  <p>• <strong>No loose jewelry or accessories</strong> that could get caught in equipment</p>
                  <p>• <strong>Comfortable clothing</strong> is recommended for long hours of walking and standing</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dress Code Image - Rounded and compact */}
          <div className="mt-6 max-w-md mx-auto">
            <img 
              src="/drscd1.jpeg" 
              alt="Professional dress code example"
              className="w-full h-auto object-contain max-h-60 mx-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Dress Code Cards */}
        <div 
          ref={cardsRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 mb-10 ${cardsVisible ? 'animate' : ''}`}
        >
          {/* Boys Dress Code */}
          <div className="fade-in-left stagger-1">
            <div className="card h-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l-4 border-l-blue-500">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                    Boys Dress Code
                  </h3>
                  <p className="text-blue-700 dark:text-blue-300">
                    Professional attire for male students
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {boysDressCode.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="p-4 rounded-lg bg-white/60 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center">
                          <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-semibold text-blue-900 dark:text-blue-100">
                              {item.item}
                            </h4>
                            {item.required ? (
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            ) : (
                              <Info className="w-4 h-4 text-blue-500" />
                            )}
                          </div>
                          <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {item.examples.map((example, idx) => (
                              <span 
                                key={idx}
                                className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded-full"
                              >
                                {example}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Girls Dress Code */}
          <div className="fade-in-right stagger-2">
            <div className="card h-full bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 border-l-4 border-l-rose-500">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-rose-900 dark:text-rose-100">
                    Girls Dress Code
                  </h3>
                  <p className="text-rose-700 dark:text-rose-300">
                    Professional attire for female students
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {girlsDressCode.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="p-4 rounded-lg bg-white/60 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-rose-100 dark:bg-rose-800 rounded-full flex items-center justify-center">
                          <Icon className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-semibold text-rose-900 dark:text-rose-100">
                              {item.item}
                            </h4>
                            {item.required ? (
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            ) : (
                              <Info className="w-4 h-4 text-rose-500" />
                            )}
                          </div>
                          <p className="text-sm text-rose-700 dark:text-rose-300 mb-2">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {item.examples.map((example, idx) => (
                              <span 
                                key={idx}
                                className="px-2 py-1 text-xs bg-rose-100 dark:bg-rose-800 text-rose-800 dark:text-rose-200 rounded-full"
                              >
                                {example}
                              </span>
                            ))}
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

        {/* General Guidelines */}
        <div 
          ref={guidelinesRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 ${guidelinesVisible ? 'animate' : ''}`}
        >
          {generalGuidelines.map((guideline, index) => (
            <div key={index} className={`fade-in-up stagger-${index + 1}`}>
              <div className="card">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                    guideline.type === 'required' 
                      ? 'bg-gradient-to-br from-green-500 to-green-600' 
                      : 'bg-gradient-to-br from-red-500 to-red-600'
                  }`}>
                    {guideline.type === 'required' ? (
                      <CheckCircle className="w-6 h-6 text-white" />
                    ) : (
                      <XCircle className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white">
                      {guideline.title}
                    </h3>
                    <p className={`text-sm ${
                      guideline.type === 'required' 
                        ? 'text-green-600 dark:text-green-400' 
                        : 'text-red-600 dark:text-red-400'
                    }`}>
                      {guideline.type === 'required' ? 'Must have items' : 'Items to avoid'}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {guideline.items.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        guideline.type === 'required' 
                          ? 'bg-green-500' 
                          : 'bg-red-500'
                      }`}></div>
                      <span className="text-secondary-700 dark:text-secondary-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
