'use client'

import Link from 'next/link'
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Factory,
  Wrench,
  Cog,
  Zap,
  Target,
  Lightbulb,
  BookOpen,
  Network,
  Award,
  TrendingUp,
  Eye,
  Brain,
  CreditCard,
  Smartphone,
  Shield,
  Droplets,
  Umbrella,
  Footprints,
  Pill,
  Clipboard,
  Train,
  Navigation,
  Phone,
  ExternalLink,
  Map,
  Clock3,
  Users2,
  Luggage
} from 'lucide-react'
import useScrollAnimation from '@/hooks/useScrollAnimation'
import ObjectivesSection from '@/components/ObjectivesSection'
import AccessoriesChecklist from '@/components/AccessoriesChecklist'
import StationsPreviewSection from '@/components/StationsPreviewSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 gradient-animate">
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-red-500/20 to-pink-500/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-cyan-400/10 via-blue-500/10 to-purple-600/10 animate-pulse delay-1000"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full floating-animation"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white/5 rounded-full floating-animation-delayed"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/8 rounded-full floating-animation"></div>
          <div className="absolute bottom-40 right-1/3 w-14 h-14 bg-white/6 rounded-full floating-animation-delayed"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            {/* Factory Icon */}
            <div className="flex justify-center mb-4 sm:mb-6 animate-fade-in">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                <Factory className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white animate-fade-in">
              <span className="block">Industry Visit Guide</span>
              <span className="block text-xl sm:text-3xl md:text-4xl lg:text-5xl mt-1 sm:mt-2 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                December 2025
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90 max-w-4xl mx-auto animate-fade-in leading-relaxed px-2">
              65 Participants join on an extraordinary three-day journey from Bangalore to Chennai (8th-10th December 2025).
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90 max-w-4xl mx-auto animate-fade-in leading-relaxed px-2">
              Discover cutting-edge technology at Integral Coach Factory, explore railway heritage, and experience 
              cultural richness at Matsya Narayana Temple.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-slide-in px-4">
              <Link href="/schedule" className="btn-primary bg-white text-blue-600 hover:bg-blue-50 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-2xl inline-flex items-center justify-center min-h-[44px]">
                Explore 3-Day Journey
                <ArrowRight className="inline ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Accessories Checklist Section */}
      <AccessoriesChecklist />

      {/* Goals and Objectives Section */}
      <ObjectivesSection />

      {/* Arrival & Departure Stations Preview */}
      <StationsPreviewSection />

      {/* Three-Day Journey Overview */}
      <section className="py-20 bg-white dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              Your Three-Day Journey (8th-10th December 2025)
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              Experience the complete manufacturing process at Integral Coach Factory, explore railway heritage, 
              and immerse yourself in cultural experiences. Each day offers unique insights into technology and tradition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Day 1 Card */}
            <div className="group relative">
              <div className="card h-full text-center group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500 border-l-4 border-l-blue-500">
                <div className="absolute top-4 right-4 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold">
                  Day 1
                </div>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-blue-400 group-hover:to-blue-500 transition-all duration-300 shadow-lg">
                  <Wrench className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                  Journey Begins
                </h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700 dark:text-secondary-300">Departure from KSR Bengaluru</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700 dark:text-secondary-300">Overnight train journey</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700 dark:text-secondary-300">Arrival at MGR Central Chennai</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700 dark:text-secondary-300">Hotel check-in and rest</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-secondary-200 dark:border-secondary-700">
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">
                    <strong>Duration:</strong> 10:40 PM - 7:30 AM<br/>
                    <strong>Focus:</strong> Travel and arrival
                  </p>
                </div>
              </div>
            </div>

            {/* Day 2 Card */}
            <div className="group relative">
              <div className="card h-full text-center group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500 border-l-4 border-l-purple-500">
                <div className="absolute top-4 right-4 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-semibold">
                  Day 2
                </div>
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-purple-400 group-hover:to-purple-500 transition-all duration-300 shadow-lg">
                  <Cog className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                  Industry & Culture
                </h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700 dark:text-secondary-300">Integral Coach Factory visit</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700 dark:text-secondary-300">Chennai Rail Museum</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700 dark:text-secondary-300">Matsya Narayana Temple</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700 dark:text-secondary-300">Royal Paris Hotel stay</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-secondary-200 dark:border-secondary-700">
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">
                    <strong>Duration:</strong> 4:30 AM - 9:00 PM<br/>
                    <strong>Focus:</strong> Industry visits and culture
                  </p>
                </div>
              </div>
            </div>

            {/* Day 3 Card */}
            <div className="group relative">
              <div className="card h-full text-center group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500 border-l-4 border-l-orange-500">
                <div className="absolute top-4 right-4 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-sm font-semibold">
                  Day 3
                </div>
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-orange-400 group-hover:to-orange-500 transition-all duration-300 shadow-lg">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                  Journey Home
                </h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700 dark:text-secondary-300">Hotel checkout</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700 dark:text-secondary-300">Departure from MGR Central</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700 dark:text-secondary-300">Return journey to Bangalore</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700 dark:text-secondary-300">Arrival at KSR Bengaluru</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-secondary-200 dark:border-secondary-700">
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">
                    <strong>Duration:</strong> 5:00 AM - 1:10 PM<br/>
                    <strong>Focus:</strong> Return journey
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="mt-16">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-dashed border-secondary-300 dark:border-secondary-600"></div>
              </div>
              <div className="relative flex justify-between">
                <div className="bg-white dark:bg-secondary-900 px-4">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto"></div>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-2">Start</p>
                </div>
                <div className="bg-white dark:bg-secondary-900 px-4">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mx-auto"></div>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-2">Mid</p>
                </div>
                <div className="bg-white dark:bg-secondary-900 px-4">
                  <div className="w-4 h-4 bg-orange-500 rounded-full mx-auto"></div>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-2">End</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-800 dark:to-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              Essential Resources
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400">
              Everything you need for a successful Integral Coach Factory visit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card group cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-4 border-l-green-500">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                  Pre-Visit Checklist
                </h3>
              </div>
              <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                Essential items and preparations before your Integral Coach Factory visit. Safety gear, documents, and requirements.
              </p>
              <button className="text-primary-600 dark:text-primary-400 font-medium group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                View Checklist →
              </button>
            </div>

            <div className="card group cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-4 border-l-yellow-500">
              <div className="flex items-center mb-4">
                <Factory className="w-6 h-6 text-yellow-500 mr-3" />
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                  Factory Overview
                </h3>
              </div>
              <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                Learn about Integral Coach Factory&apos;s history, capabilities, and manufacturing excellence in railway technology.
              </p>
              <button className="text-primary-600 dark:text-primary-400 font-medium group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                Explore Factory →
              </button>
            </div>

            <div className="card group cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-4 border-l-blue-500">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-blue-500 mr-3" />
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                  Transportation
                </h3>
              </div>
              <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                Arrival and departure information with detailed transportation guides to the Integral Coach Factory facility.
              </p>
              <button className="text-primary-600 dark:text-primary-400 font-medium group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                View Transport →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-animate-slow text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Industry Visit Journey?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
            Join 65 participants for an unforgettable three-day experience (8th-10th December 2025) exploring 
            India&apos;s premier railway manufacturing facility and cultural heritage. Discover innovation, 
            witness precision engineering, and immerse yourself in tradition.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link href="/schedule" className="btn-primary bg-white text-blue-600 hover:bg-blue-50 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-2xl inline-flex items-center justify-center min-h-[44px]">
              View 3-Day Schedule
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
