'use client'

import { useState } from 'react'
import { 
  CreditCard,
  Smartphone,
  Shield,
  Droplets,
  Umbrella,
  Footprints,
  Pill,
  Clipboard,
  CheckCircle
} from 'lucide-react'
import useScrollAnimation from '@/hooks/useScrollAnimation'

export default function AccessoriesChecklist() {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set())
  const [headerRef, headerVisible] = useScrollAnimation()
  const [gridRef, gridVisible] = useScrollAnimation()

  const accessories = [
    {
      id: 1,
      name: 'ID Card',
      description: 'Valid student identification card',
      icon: CreditCard,
      color: 'blue',
      essential: true
    },
    {
      id: 2,
      name: 'Aadhar Card',
      description: 'Government issued identity proof',
      icon: CreditCard,
      color: 'green',
      essential: true
    },
    {
      id: 3,
      name: 'Mobile Phone',
      description: 'Fully charged with emergency contacts',
      icon: Smartphone,
      color: 'purple',
      essential: true
    },
    {
      id: 4,
      name: 'Face Mask',
      description: 'Safety mask for facility visits',
      icon: Shield,
      color: 'orange',
      essential: true
    },
    {
      id: 5,
      name: 'Water Bottle',
      description: 'Stay hydrated during the visit',
      icon: Droplets,
      color: 'cyan',
      essential: false
    },
    {
      id: 6,
      name: 'Umbrella',
      description: 'Protection from weather conditions',
      icon: Umbrella,
      color: 'indigo',
      essential: false
    },
    {
      id: 7,
      name: 'Comfortable Shoes',
      description: 'Closed-toe shoes for safety',
      icon: Footprints,
      color: 'red',
      essential: true
    },
    {
      id: 8,
      name: 'Medications',
      description: 'Personal medications if required',
      icon: Pill,
      color: 'pink',
      essential: false
    }
  ]

  const toggleItem = (id: number) => {
    const newCheckedItems = new Set(checkedItems)
    if (newCheckedItems.has(id)) {
      newCheckedItems.delete(id)
    } else {
      newCheckedItems.add(id)
    }
    setCheckedItems(newCheckedItems)
  }

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        border: 'border-blue-200 dark:border-blue-800',
        icon: 'text-blue-600 dark:text-blue-400',
        hover: 'hover:bg-blue-100 dark:hover:bg-blue-900/30',
        checked: 'bg-blue-100 dark:bg-blue-900/40 border-blue-300 dark:border-blue-700'
      },
      green: {
        bg: 'bg-green-50 dark:bg-green-900/20',
        border: 'border-green-200 dark:border-green-800',
        icon: 'text-green-600 dark:text-green-400',
        hover: 'hover:bg-green-100 dark:hover:bg-green-900/30',
        checked: 'bg-green-100 dark:bg-green-900/40 border-green-300 dark:border-green-700'
      },
      purple: {
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        border: 'border-purple-200 dark:border-purple-800',
        icon: 'text-purple-600 dark:text-purple-400',
        hover: 'hover:bg-purple-100 dark:hover:bg-purple-900/30',
        checked: 'bg-purple-100 dark:bg-purple-900/40 border-purple-300 dark:border-purple-700'
      },
      orange: {
        bg: 'bg-orange-50 dark:bg-orange-900/20',
        border: 'border-orange-200 dark:border-orange-800',
        icon: 'text-orange-600 dark:text-orange-400',
        hover: 'hover:bg-orange-100 dark:hover:bg-orange-900/30',
        checked: 'bg-orange-100 dark:bg-orange-900/40 border-orange-300 dark:border-orange-700'
      },
      cyan: {
        bg: 'bg-cyan-50 dark:bg-cyan-900/20',
        border: 'border-cyan-200 dark:border-cyan-800',
        icon: 'text-cyan-600 dark:text-cyan-400',
        hover: 'hover:bg-cyan-100 dark:hover:bg-cyan-900/30',
        checked: 'bg-cyan-100 dark:bg-cyan-900/40 border-cyan-300 dark:border-cyan-700'
      },
      indigo: {
        bg: 'bg-indigo-50 dark:bg-indigo-900/20',
        border: 'border-indigo-200 dark:border-indigo-800',
        icon: 'text-indigo-600 dark:text-indigo-400',
        hover: 'hover:bg-indigo-100 dark:hover:bg-indigo-900/30',
        checked: 'bg-indigo-100 dark:bg-indigo-900/40 border-indigo-300 dark:border-indigo-700'
      },
      red: {
        bg: 'bg-red-50 dark:bg-red-900/20',
        border: 'border-red-200 dark:border-red-800',
        icon: 'text-red-600 dark:text-red-400',
        hover: 'hover:bg-red-100 dark:hover:bg-red-900/30',
        checked: 'bg-red-100 dark:bg-red-900/40 border-red-300 dark:border-red-700'
      },
      pink: {
        bg: 'bg-pink-50 dark:bg-pink-900/20',
        border: 'border-pink-200 dark:border-pink-800',
        icon: 'text-pink-600 dark:text-pink-400',
        hover: 'hover:bg-pink-100 dark:hover:bg-pink-900/30',
        checked: 'bg-pink-100 dark:bg-pink-900/40 border-pink-300 dark:border-pink-700'
      }
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  const checkedCount = checkedItems.size
  const totalCount = accessories.length
  const essentialCount = accessories.filter(item => item.essential).length
  const checkedEssentialCount = accessories.filter(item => item.essential && checkedItems.has(item.id)).length

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-secondary-900 dark:to-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 fade-in-up ${headerVisible ? 'animate' : ''}`}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6">
            <Clipboard className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
            Accessories to be Brought
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 dark:text-secondary-400 max-w-4xl mx-auto leading-relaxed">
            Essential items and accessories you need to bring for a successful and comfortable visit to Integral Coach Factory. 
            Check off items as you pack them.
          </p>
        </div>

        {/* Progress Summary */}
        <div 
          ref={gridRef}
          className={`mb-12 fade-in-up ${headerVisible ? 'animate' : ''}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-xl bg-white/80 dark:bg-secondary-800/80 backdrop-blur-sm border border-secondary-200 dark:border-secondary-700">
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                {checkedCount}/{totalCount}
              </div>
              <div className="text-sm text-secondary-600 dark:text-secondary-400">Items Packed</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/80 dark:bg-secondary-800/80 backdrop-blur-sm border border-secondary-200 dark:border-secondary-700">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {checkedEssentialCount}/{essentialCount}
              </div>
              <div className="text-sm text-secondary-600 dark:text-secondary-400">Essential Items</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/80 dark:bg-secondary-800/80 backdrop-blur-sm border border-secondary-200 dark:border-secondary-700">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                {Math.round((checkedCount / totalCount) * 100)}%
              </div>
              <div className="text-sm text-secondary-600 dark:text-secondary-400">Completion</div>
            </div>
          </div>
        </div>

        {/* Accessories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessories.map((item, index) => {
            const Icon = item.icon
            const colors = getColorClasses(item.color)
            const isChecked = checkedItems.has(item.id)
            
            return (
              <div
                key={item.id}
                className={`group cursor-pointer fade-in-up stagger-${index + 1} ${gridVisible ? 'animate' : ''}`}
                onClick={() => toggleItem(item.id)}
              >
                <div className={`
                  relative p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl
                  ${isChecked ? colors.checked : `${colors.bg} ${colors.border} ${colors.hover}`}
                `}>
                  {/* Essential Badge */}
                  {item.essential && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">!</span>
                    </div>
                  )}

                  {/* Checkbox */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`
                      w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200
                      ${isChecked 
                        ? 'bg-emerald-500 border-emerald-500' 
                        : 'border-secondary-300 dark:border-secondary-600'
                      }
                    `}>
                      {isChecked && <CheckCircle className="w-4 h-4 text-white" />}
                    </div>
                    {isChecked && (
                      <div className="text-emerald-600 dark:text-emerald-400 text-sm font-medium">
                        Packed ✓
                      </div>
                    )}
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className={`
                      w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300
                      ${isChecked 
                        ? 'bg-emerald-100 dark:bg-emerald-900/40' 
                        : `${colors.bg} group-hover:scale-110`
                      }
                    `}>
                      <Icon className={`
                        w-8 h-8 transition-all duration-300
                        ${isChecked 
                          ? 'text-emerald-600 dark:text-emerald-400' 
                          : colors.icon
                        }
                      `} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className={`
                      text-lg font-bold mb-2 transition-all duration-300
                      ${isChecked 
                        ? 'text-emerald-700 dark:text-emerald-300 line-through' 
                        : 'text-secondary-900 dark:text-white'
                      }
                    `}>
                      {item.name}
                    </h3>
                    <p className={`
                      text-sm transition-all duration-300
                      ${isChecked 
                        ? 'text-emerald-600 dark:text-emerald-400' 
                        : 'text-secondary-600 dark:text-secondary-400'
                      }
                    `}>
                      {item.description}
                    </p>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            )
          })}
        </div>


        {/* Completion Message */}
        {checkedCount === totalCount && (
          <div className="mt-8 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200 rounded-full">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="font-medium">All items packed! You&apos;re ready for the visit! 🎉</span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
