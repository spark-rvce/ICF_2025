'use client'

import { useState } from 'react'
import { 
  Shirt,
  Footprints,
  User,
  UserCheck,
  AlertCircle,
  Info,
  CheckCircle,
  XCircle,
  Hotel,
  MapPin,
  Train,
  Bus,
  Users,
  Shield,
  Clock,
  Phone,
  Mail,
  FileText,
  BookOpen,
  Target,
  Star,
  Eye,
  Users2,
  Award
} from 'lucide-react'
import useScrollAnimation from '@/hooks/useScrollAnimation'

export default function Instructions() {
  const [activeTab, setActiveTab] = useState('dress-code')
  const [headerRef, headerVisible] = useScrollAnimation()
  const [tabsRef, tabsVisible] = useScrollAnimation()

  const tabs = [
    {
      id: 'dress-code',
      name: 'Dress Code',
      icon: Shirt,
      color: 'blue'
    },
    {
      id: 'accommodation',
      name: 'Accommodation',
      icon: Hotel,
      color: 'purple'
    },
    {
      id: 'transport',
      name: 'Transport',
      icon: Train,
      color: 'green'
    },
    {
      id: 'conduct',
      name: 'Conduct Rules',
      icon: Shield,
      color: 'red'
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        border: 'border-blue-200 dark:border-blue-800',
        accent: 'border-l-blue-500',
        icon: 'text-blue-600 dark:text-blue-400',
        button: 'bg-blue-600 hover:bg-blue-700 text-white',
        active: 'bg-blue-100 dark:bg-blue-900/40 text-blue-900 dark:text-blue-100'
      },
      purple: {
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        border: 'border-purple-200 dark:border-purple-800',
        accent: 'border-l-purple-500',
        icon: 'text-purple-600 dark:text-purple-400',
        button: 'bg-purple-600 hover:bg-purple-700 text-white',
        active: 'bg-purple-100 dark:bg-purple-900/40 text-purple-900 dark:text-purple-100'
      },
      green: {
        bg: 'bg-green-50 dark:bg-green-900/20',
        border: 'border-green-200 dark:border-green-800',
        accent: 'border-l-green-500',
        icon: 'text-green-600 dark:text-green-400',
        button: 'bg-green-600 hover:bg-green-700 text-white',
        active: 'bg-green-100 dark:bg-green-900/40 text-green-900 dark:text-green-100'
      },
      red: {
        bg: 'bg-red-50 dark:bg-red-900/20',
        border: 'border-red-200 dark:border-red-800',
        accent: 'border-l-red-500',
        icon: 'text-red-600 dark:text-red-400',
        button: 'bg-red-600 hover:bg-red-700 text-white',
        active: 'bg-red-100 dark:bg-red-900/40 text-red-900 dark:text-red-100'
      }
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  const dressCodeContent = {
    title: 'Dress Code Guidelines',
    description: 'Professional attire requirements for the Industry Visit',
    sections: [
      {
        title: 'Boys Dress Code',
        icon: User,
        color: 'blue',
        items: [
          { text: 'Formal shirt + formal pants (required)', required: true },
          { text: 'Round necked t-shirts are allowed', required: false },
          { text: 'Shorts are NOT allowed', required: false },
          { text: 'Closed-toe formal shoes (Black or Brown leather)', required: true },
          { text: 'Matching leather belt', required: true },
          { text: 'Well-groomed appearance', required: true }
        ]
      },
      {
        title: 'Girls Dress Code',
        icon: User,
        color: 'purple',
        items: [
          { text: 'Chudidar (required)', required: true },
          { text: 'Round necked t-shirts are allowed', required: false },
          { text: 'Shorts are NOT allowed', required: false },
          { text: 'Closed-toe formal shoes (low heels preferred)', required: true },
          { text: 'Minimal, professional accessories', required: false },
          { text: 'Hair tied back for safety', required: true }
        ]
      },
      {
        title: 'Items to Avoid',
        icon: XCircle,
        color: 'red',
        items: [
          { text: 'Shorts (not allowed for both boys and girls)', required: false },
          { text: 'Casual wear or jeans', required: false },
          { text: 'Open-toe shoes or sandals', required: false },
          { text: 'Excessive jewelry or accessories', required: false },
          { text: 'Bright or flashy colors', required: false }
        ]
      }
    ]
  }

  const accommodationContent = {
    title: 'Accommodation Details',
    description: 'Hotel arrangements and stay information for your Chennai visit',
    sections: [
      {
        title: 'Hotel Information',
        icon: Hotel,
        color: 'blue',
        items: [
          { text: 'Royal Paris Hotel', required: true },
          { text: '55 Sydenhams Road, Near Chennai Greater Corporation, Periyamet, Park Town', required: true },
          { text: 'Check-in: 4:30 AM - 7:30 AM on Day 2', required: true },
          { text: 'Check-out: 6:15 AM on Day 3', required: true },
          { text: 'AC rooms with modern amenities', required: true },
          { text: '24/7 room service available', required: false }
        ]
      },
      {
        title: 'Room Arrangements',
        icon: Users,
        color: 'green',
        items: [
          { text: '3-4 people sharing accommodation', required: true },
          { text: 'Room allocation by Prathik P Kekare and Harshit Saroha', required: true },
          { text: 'Separate rooms for boys and girls', required: true },
          { text: 'Room keys to be returned during checkout', required: true }
        ]
      },
      {
        title: 'Hotel Facilities',
        icon: Star,
        color: 'purple',
        items: [
          { text: 'Restaurant with multi-cuisine options', required: false },
          { text: 'Conference room for orientation', required: false },
          { text: 'Wi-Fi connectivity', required: false },
          { text: 'Laundry services available', required: false },
          { text: '24/7 security and front desk', required: true }
        ]
      }
    ]
  }

  const transportContent = {
    title: 'Transport Arrangements',
    description: 'Complete transportation details for your journey',
    sections: [
      {
        title: 'Train Travel',
        icon: Train,
        color: 'blue',
        items: [
          { text: 'All boarding and coming back at KSR Bengaluru only', required: true },
          { text: 'In Chennai, all activities at MGR Central', required: true },
          { text: 'Outbound: Train 12658 - SBC MAS SF MAIL (10:40 PM departure)', required: true },
          { text: 'Return: Train 22625 - SBC DBLDECK EXP (07:25 AM departure)', required: true },
          { text: 'Arrive 30 minutes early for boarding', required: true },
          { text: 'Valid ID and tickets required', required: true }
        ]
      },
      {
        title: 'Local Transport',
        icon: Bus,
        color: 'green',
        items: [
          { text: 'Air-conditioned bus for local travel', required: true },
          { text: 'Walk from MGR Central to Royal Paris Hotel', required: true },
          { text: 'Transport to ICF and cultural locations', required: true },
          { text: 'Drop to MGR Central station on Day 3', required: true }
        ]
      },
      {
        title: 'Important Notes',
        icon: AlertCircle,
        color: 'red',
        items: [
          { text: 'No private vehicles allowed during visits', required: true },
          { text: 'Follow group transportation schedule', required: true },
          { text: 'Keep emergency contact numbers handy', required: true },
          { text: 'Report any transport issues immediately', required: true }
        ]
      }
    ]
  }

  const conductContent = {
    title: 'Conduct Rules & Guidelines',
    description: 'Essential behavioral guidelines and safety protocols',
    sections: [
      {
        title: 'Safety Protocols',
        icon: Shield,
        color: 'red',
        items: [
          { text: 'Follow all safety instructions during factory tours', required: true },
          { text: 'Wear provided safety equipment when required', required: true },
          { text: 'Stay with assigned groups at all times', required: true },
          { text: 'No photography without explicit permission', required: true },
          { text: 'Report any safety concerns immediately', required: true }
        ]
      },
      {
        title: 'Professional Behavior',
        icon: Users2,
        color: 'blue',
        items: [
          { text: 'Maintain professional demeanor throughout', required: true },
          { text: 'Respect company property and equipment', required: true },
          { text: 'Ask questions during designated Q&A sessions', required: true },
          { text: 'Show respect to all company representatives', required: true },
          { text: 'Participate actively in all activities', required: true }
        ]
      },
      {
        title: 'General Guidelines',
        icon: FileText,
        color: 'green',
        items: [
          { text: 'Arrive on time for all scheduled activities', required: true },
          { text: 'Keep mobile phones on silent during presentations', required: true },
          { text: 'No consumption of alcohol or smoking', required: true },
          { text: 'Follow hotel rules and regulations', required: true },
          { text: 'Maintain cleanliness in all areas', required: true }
        ]
      }
    ]
  }

  const getContent = () => {
    switch (activeTab) {
      case 'dress-code':
        return dressCodeContent
      case 'accommodation':
        return accommodationContent
      case 'transport':
        return transportContent
      case 'conduct':
        return conductContent
      default:
        return dressCodeContent
    }
  }

  const currentContent = getContent()
  const activeTabData = tabs.find(tab => tab.id === activeTab)
  const activeColors = activeTabData ? getColorClasses(activeTabData.color) : getColorClasses('blue')

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-secondary-900 dark:to-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 fade-in-up ${headerVisible ? 'animate' : ''}`}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
            Instructions & Guidelines
          </h1>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
            Comprehensive guidelines and instructions for your Integral Coach Factory visit. 
            Please read all sections carefully to ensure a safe and successful experience.
          </p>
        </div>

        {/* Tab Navigation */}
        <div 
          ref={tabsRef}
          className={`mb-12 fade-in-up ${tabsVisible ? 'animate' : ''}`}
        >
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab, index) => {
              const Icon = tab.icon
              const colors = getColorClasses(tab.color)
              const isActive = activeTab === tab.id
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center space-x-3 px-6 py-4 rounded-xl font-medium transition-all duration-300
                    ${isActive 
                      ? `${colors.active} shadow-lg transform scale-105` 
                      : 'bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-700'
                    }
                    border border-secondary-200 dark:border-secondary-700
                  `}
                >
                  <Icon className={`w-5 h-5 ${isActive ? colors.icon : 'text-secondary-500'}`} />
                  <span>{tab.name}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Content Section */}
        <div className={`fade-in-up ${tabsVisible ? 'animate' : ''}`}>
          <div className={`card ${activeColors.bg} ${activeColors.border} ${activeColors.accent} border-l-4`}>
            {/* Content Header */}
            <div className="flex items-center mb-8">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                activeTabData?.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900' :
                activeTabData?.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900' :
                activeTabData?.color === 'green' ? 'bg-green-100 dark:bg-green-900' :
                'bg-red-100 dark:bg-red-900'
              }`}>
                {activeTabData && <activeTabData.icon className={`w-6 h-6 ${activeColors.icon}`} />}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">
                  {currentContent.title}
                </h2>
                <p className="text-secondary-600 dark:text-secondary-400">
                  {currentContent.description}
                </p>
              </div>
            </div>

            {/* Content Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentContent.sections.map((section, index) => {
                const Icon = section.icon
                const sectionColors = getColorClasses(section.color)
                
                return (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        section.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900' :
                        section.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900' :
                        section.color === 'green' ? 'bg-green-100 dark:bg-green-900' :
                        'bg-red-100 dark:bg-red-900'
                      }`}>
                        <Icon className={`w-5 h-5 ${
                          section.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                          section.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                          section.color === 'green' ? 'text-green-600 dark:text-green-400' :
                          'text-red-600 dark:text-red-400'
                        }`} />
                      </div>
                      <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
                        {section.title}
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start space-x-3 p-3 rounded-lg bg-white/60 dark:bg-secondary-800/60">
                          <div className="flex-shrink-0 mt-0.5">
                            {item.required ? (
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            ) : (
                              <Info className="w-4 h-4 text-blue-500" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-secondary-700 dark:text-secondary-300">
                              {item.text}
                            </p>
                            {item.required && (
                              <span className="inline-block mt-1 px-2 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                                Required
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>


        {/* Contact Information */}
        <div className="mt-16 card bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l-4 border-l-blue-500">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
              <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100">
                Need Help?
              </h3>
              <p className="text-blue-700 dark:text-blue-300">
                Contact our support team for any questions or clarifications
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="font-medium text-blue-900 dark:text-blue-100">Email Support</p>
                  <p className="text-sm text-blue-700 dark:text-blue-300">spark.iucee@rvce.edu.in</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="font-medium text-blue-900 dark:text-blue-100">Prathik P Kekare</p>
                  <p className="text-sm text-blue-700 dark:text-blue-300">+91 88614 02360</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="font-medium text-blue-900 dark:text-blue-100">Harshit Saroha</p>
                  <p className="text-sm text-blue-700 dark:text-blue-300">+91 87083 12327</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="font-medium text-blue-900 dark:text-blue-100">Emergency Contact</p>
                  <p className="text-sm text-blue-700 dark:text-blue-300">+91 88614 02360</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="font-medium text-blue-900 dark:text-blue-100">Support Hours</p>
                  <p className="text-sm text-blue-700 dark:text-blue-300">24/7 during visit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}