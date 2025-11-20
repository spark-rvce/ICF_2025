'use client'

import { 
  Target,
  Lightbulb,
  BookOpen,
  Network,
  Award,
  Eye,
  Brain,
  CheckCircle
} from 'lucide-react'
import useScrollAnimation from '@/hooks/useScrollAnimation'

export default function ObjectivesSection() {
  const [headerRef, headerVisible] = useScrollAnimation()
  const [gridRef, gridVisible] = useScrollAnimation()

  const objectives = [
    {
      id: 1,
      icon: Eye,
      title: 'Observe Manufacturing Excellence',
      description: 'Witness first-hand the precision engineering, quality control systems, and advanced manufacturing processes that make Integral Coach Factory a leader in railway technology.',
      color: 'blue',
      tag: 'Hands-on Observation'
    },
    {
      id: 2,
      icon: BookOpen,
      title: 'Learn Technical Processes',
      description: 'Gain in-depth understanding of coach manufacturing, from raw material processing to final assembly, including welding techniques, electrical systems, and quality assurance protocols.',
      color: 'purple',
      tag: 'Technical Learning'
    },
    {
      id: 3,
      icon: Lightbulb,
      title: 'Explore Innovation & R&D',
      description: 'Discover cutting-edge research and development initiatives, smart technologies, and future innovations that are shaping the next generation of railway transportation.',
      color: 'green',
      tag: 'Innovation Focus'
    },
    {
      id: 4,
      icon: Network,
      title: 'Build Industry Networks',
      description: 'Connect with industry professionals, engineers, and researchers to build valuable relationships and gain insights into career opportunities in the railway and manufacturing sectors.',
      color: 'orange',
      tag: 'Professional Networking'
    },
    {
      id: 5,
      icon: Brain,
      title: 'Develop Critical Thinking',
      description: 'Enhance problem-solving skills and analytical thinking through real-world case studies, technical challenges, and interactive workshops with industry experts.',
      color: 'red',
      tag: 'Skill Development'
    },
    {
      id: 6,
      icon: Award,
      title: 'Achieve Learning Milestones',
      description: 'Complete structured learning objectives, participate in assessments, and earn recognition for your engagement and understanding of railway manufacturing processes.',
      color: 'indigo',
      tag: 'Achievement Recognition'
    }
  ]


  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        border: 'border-l-blue-500',
        gradient: 'from-blue-500 to-blue-600',
        hoverGradient: 'group-hover:from-blue-400 group-hover:to-blue-500',
        text: 'text-blue-600 dark:text-blue-400'
      },
      purple: {
        border: 'border-l-purple-500',
        gradient: 'from-purple-500 to-purple-600',
        hoverGradient: 'group-hover:from-purple-400 group-hover:to-purple-500',
        text: 'text-purple-600 dark:text-purple-400'
      },
      green: {
        border: 'border-l-green-500',
        gradient: 'from-green-500 to-green-600',
        hoverGradient: 'group-hover:from-green-400 group-hover:to-green-500',
        text: 'text-green-600 dark:text-green-400'
      },
      orange: {
        border: 'border-l-orange-500',
        gradient: 'from-orange-500 to-orange-600',
        hoverGradient: 'group-hover:from-orange-400 group-hover:to-orange-500',
        text: 'text-orange-600 dark:text-orange-400'
      },
      red: {
        border: 'border-l-red-500',
        gradient: 'from-red-500 to-red-600',
        hoverGradient: 'group-hover:from-red-400 group-hover:to-red-500',
        text: 'text-red-600 dark:text-red-400'
      },
      indigo: {
        border: 'border-l-indigo-500',
        gradient: 'from-indigo-500 to-indigo-600',
        hoverGradient: 'group-hover:from-indigo-400 group-hover:to-indigo-500',
        text: 'text-indigo-600 dark:text-indigo-400'
      },
      yellow: {
        border: 'border-l-yellow-500',
        gradient: 'from-yellow-500 to-yellow-600',
        hoverGradient: 'group-hover:from-yellow-400 group-hover:to-yellow-500',
        text: 'text-yellow-600 dark:text-yellow-400'
      }
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-secondary-900 dark:to-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 fade-in-up ${headerVisible ? 'animate' : ''}`}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
            Goals & Objectives
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 dark:text-secondary-400 max-w-4xl mx-auto leading-relaxed">
            Our comprehensive three-day program is designed to provide students with hands-on experience, 
            technical knowledge, and industry insights that will shape their understanding of modern manufacturing excellence.
          </p>
        </div>

        {/* Objectives Grid */}
        <div 
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${gridVisible ? 'animate' : ''}`}
        >
          {objectives.map((objective, index) => {
            const Icon = objective.icon
            const colors = getColorClasses(objective.color)
            return (
              <div 
                key={objective.id}
                className={`group relative fade-in-up stagger-${index + 1} ${gridVisible ? 'animate' : ''}`}
              >
                <div className={`card h-full text-center group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500 ${colors.border} bg-white/80 dark:bg-secondary-800/80 backdrop-blur-sm`}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-full flex items-center justify-center mx-auto mb-6 ${colors.hoverGradient} transition-all duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">
                    {objective.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                    {objective.description}
                  </p>
                  <div className="mt-6 pt-4 border-t border-secondary-200 dark:border-secondary-700">
                    <div className={`flex items-center justify-center space-x-2 text-sm ${colors.text}`}>
                      <CheckCircle className="w-4 h-4" />
                      <span className="font-medium">{objective.tag}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}