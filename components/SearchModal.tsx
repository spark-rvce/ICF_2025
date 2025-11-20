'use client'

import { useState, useEffect, useRef } from 'react'
import { 
  Search, 
  X, 
  Clock, 
  MapPin, 
  Calendar, 
  Users, 
  Factory, 
  Hotel, 
  Train, 
  HelpCircle,
  ArrowRight,
  Loader2
} from 'lucide-react'
import Link from 'next/link'

interface SearchResult {
  id: string
  title: string
  description: string
  category: string
  page: string
  icon: any
  url: string
  keywords: string[]
}

const searchData: SearchResult[] = [
  // Home page content
  {
    id: 'hero-title',
    title: 'Industry Visit Guide December 2025',
    description: '65 Participants join on an extraordinary three-day journey from Bangalore to Chennai',
    category: 'Program',
    page: 'Home',
    icon: Factory,
    url: '/',
    keywords: ['industry', 'visit', 'guide', '2025', 'december', '65', 'participants', 'bangalore', 'chennai', 'icf', 'factory', 'industrial', 'coach']
  },
  {
    id: 'day1-overview',
    title: 'Day 1 - 8th December - Departure to Chennai',
    description: '10:40 PM Train departs from Bangalore to Chennai (Overnight Journey)',
    category: 'Schedule',
    page: 'Home',
    icon: Train,
    url: '/',
    keywords: ['day1', '8th', 'december', 'departure', '10:40', 'pm', 'bangalore', 'chennai', 'train', 'overnight', 'journey']
  },
  {
    id: 'day2-overview',
    title: 'Day 2 - 9th December - ICF Visit & Sightseeing',
    description: 'Industry Visit, Rail Museum, Matsya Narayana Temple',
    category: 'Schedule',
    page: 'Home',
    icon: Factory,
    url: '/',
    keywords: ['day2', '9th', 'december', 'icf', 'factory', 'museum', 'matsya', 'narayana', 'temple', 'chennai', 'blu', 'ivy', 'hotel']
  },
  {
    id: 'day3-overview',
    title: 'Day 3 - 10th December - Return Journey',
    description: '7:20 AM Train departs from Chennai to Bangalore',
    category: 'Schedule',
    page: 'Home',
    icon: Train,
    url: '/',
    keywords: ['day3', '10th', 'december', 'return', '7:20', 'am', 'chennai', 'bangalore', 'journey']
  },
  {
    id: 'objectives',
    title: 'Goals and Objectives',
    description: 'Learning objectives for the industrial visit',
    category: 'Information',
    page: 'Home',
    icon: Users,
    url: '/',
    keywords: ['objectives', 'goals', 'learning', 'education', 'purpose']
  },
  {
    id: 'accessories',
    title: 'Accessories to Bring',
    description: 'Essential items checklist for the visit',
    category: 'Information',
    page: 'Home',
    icon: HelpCircle,
    url: '/',
    keywords: ['accessories', 'items', 'checklist', 'essentials', 'bring']
  },
  {
    id: 'dress-code',
    title: 'Dress Code Guidelines',
    description: 'Round neck t-shirts allowed, shorts NOT allowed. Boys: formal shirt+pant, Girls: chudidar',
    category: 'Information',
    page: 'Home',
    icon: Users,
    url: '/',
    keywords: ['dress', 'code', 'clothing', 'uniform', 'guidelines', 'round', 'neck', 't-shirts', 'shorts', 'formal', 'shirt', 'pant', 'chudidar', 'boys', 'girls']
  },
  {
    id: 'contact-info',
    title: 'Contact Information',
    description: 'Prathik P Kekare: 88614 02360, Harshit Saroha: 87083 12327, spark.iucee@rvce.edu.in',
    category: 'Information',
    page: 'Home',
    icon: Users,
    url: '/',
    keywords: ['contact', 'prathik', 'kekare', '88614', '02360', 'harshit', 'saroha', '87083', '12327', 'spark', 'iucee', 'rvce', 'email']
  },
  {
    id: 'accommodation-info',
    title: 'Accommodation Details',
    description: 'Royal Paris Hotel - 3-4 people sharing accommodation',
    category: 'Information',
    page: 'Home',
    icon: Hotel,
    url: '/',
    keywords: ['accommodation', 'hotel', 'royal', 'paris', 'sharing', '3-4', 'people', 'room']
  },

  // Schedule page content
  {
    id: 'chennai-mail',
    title: 'Chennai Mail 12658',
    description: 'Train from KSR to MGR Chennai Central',
    category: 'Transport',
    page: 'Schedule',
    icon: Train,
    url: '/schedule',
    keywords: ['chennai', 'mail', '12658', 'train', 'ksr', 'chennai central']
  },
  {
    id: 'return-train',
    title: 'SBC DBLDECK EXP 22625',
    description: 'Train from MGR Central to KSR Bengaluru',
    category: 'Transport',
    page: 'Schedule',
    icon: Train,
    url: '/schedule',
    keywords: ['sbc', 'dbldeck', 'exp', '22625', 'mgr', 'central', 'ksr', 'return']
  },
  {
    id: 'royal-paris-hotel',
    title: 'Royal Paris Hotel',
    description: 'Hotel near MGR Central Chennai',
    category: 'Accommodation',
    page: 'Schedule',
    icon: Hotel,
    url: '/schedule',
    keywords: ['royal', 'paris', 'hotel', 'chennai', 'accommodation', 'sydenhams', 'road', 'park', 'town']
  },
  {
    id: 'icf-tour',
    title: 'ICF Factory Tour',
    description: 'Guided tour of Integral Coach Factory',
    category: 'Visit',
    page: 'Schedule',
    icon: Factory,
    url: '/schedule',
    keywords: ['icf', 'factory', 'tour', 'guided', 'manufacturing']
  },
  {
    id: 'rail-museum',
    title: 'Rail Museum Chennai',
    description: 'Heritage railway museum visit',
    category: 'Visit',
    page: 'Schedule',
    icon: Factory,
    url: '/schedule',
    keywords: ['rail', 'museum', 'heritage', 'chennai', 'railway']
  },

  // Instructions page content
  {
    id: 'dress-code-instructions',
    title: 'Dress Code Instructions',
    description: 'Detailed dress code guidelines and requirements',
    category: 'Instructions',
    page: 'Instructions',
    icon: Users,
    url: '/instructions',
    keywords: ['dress', 'code', 'instructions', 'guidelines', 'clothing']
  },
  {
    id: 'accommodation-details',
    title: 'Accommodation Details',
    description: 'Hotel information and room arrangements',
    category: 'Instructions',
    page: 'Instructions',
    icon: Hotel,
    url: '/instructions',
    keywords: ['accommodation', 'hotel', 'room', 'arrangements', 'details']
  },
  {
    id: 'transport-arrangements',
    title: 'Transport Arrangements',
    description: 'Local transport and travel arrangements',
    category: 'Instructions',
    page: 'Instructions',
    icon: Train,
    url: '/instructions',
    keywords: ['transport', 'travel', 'arrangements', 'local', 'bus']
  },
  {
    id: 'conduct-rules',
    title: 'Conduct Rules',
    description: 'Safety protocols and behavioral guidelines',
    category: 'Instructions',
    page: 'Instructions',
    icon: HelpCircle,
    url: '/instructions',
    keywords: ['conduct', 'rules', 'safety', 'protocols', 'behavior']
  },

  // Questions page content
  {
    id: 'travel-faq',
    title: 'Travel FAQ',
    description: 'Frequently asked questions about travel',
    category: 'FAQ',
    page: 'Questions',
    icon: Train,
    url: '/questions',
    keywords: ['travel', 'faq', 'questions', 'train', 'journey']
  },
  {
    id: 'accommodation-faq',
    title: 'Accommodation FAQ',
    description: 'Questions about hotel and accommodation',
    category: 'FAQ',
    page: 'Questions',
    icon: Hotel,
    url: '/questions',
    keywords: ['accommodation', 'hotel', 'faq', 'questions', 'room']
  },
  {
    id: 'visit-faq',
    title: 'Visit Details FAQ',
    description: 'Questions about factory visits and tours',
    category: 'FAQ',
    page: 'Questions',
    icon: Factory,
    url: '/questions',
    keywords: ['visit', 'factory', 'tour', 'faq', 'questions']
  },
  {
    id: 'general-faq',
    title: 'General FAQ',
    description: 'General questions and information',
    category: 'FAQ',
    page: 'Questions',
    icon: HelpCircle,
    url: '/questions',
    keywords: ['general', 'faq', 'questions', 'information', 'help']
  },

  // Arrival & Departure page content
  {
    id: 'ksr-station',
    title: 'KSR Bengaluru Station',
    description: 'Getting to KSR Bengaluru City Station - 12.4 Kms from RVCE',
    category: 'Transport',
    page: 'Arrival & Departure',
    icon: MapPin,
    url: '/arrival-departure',
    keywords: ['ksr', 'bengaluru', 'station', 'metro', 'bus', 'directions', '12.4', 'kms', 'rvce']
  },
  {
    id: 'mgr-central',
    title: 'MGR Central Chennai Station',
    description: 'Getting to MGR Central Chennai Station',
    category: 'Transport',
    page: 'Arrival & Departure',
    icon: MapPin,
    url: '/arrival-departure',
    keywords: ['mgr', 'central', 'chennai', 'station', 'metro', 'bus', 'directions', 'mas']
  },
  {
    id: 'advisory-section',
    title: 'Important Advisory',
    description: 'Minimal luggage requirements and safety guidelines',
    category: 'Instructions',
    page: 'Arrival & Departure',
    icon: HelpCircle,
    url: '/arrival-departure',
    keywords: ['advisory', 'important', 'luggage', 'minimal', 'safety', 'guidelines', 'backpack', 'cabin-sized']
  },
  {
    id: 'icf-facility',
    title: 'ICF Facility Details',
    description: 'Comprehensive information about ICF Chennai',
    category: 'Facility',
    page: 'Arrival & Departure',
    icon: Factory,
    url: '/arrival-departure',
    keywords: ['icf', 'facility', 'chennai', 'factory', 'manufacturing']
  },
  {
    id: 'rail-museum-facility',
    title: 'Rail Museum Facility',
    description: 'Information about Rail Museum Chennai',
    category: 'Facility',
    page: 'Arrival & Departure',
    icon: Factory,
    url: '/arrival-departure',
    keywords: ['rail', 'museum', 'chennai', 'heritage', 'railway']
  }
]

const categoryColors = {
  'Program': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300',
  'Schedule': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300',
  'Information': 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300',
  'Transport': 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300',
  'Accommodation': 'bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-300',
  'Visit': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-300',
  'Instructions': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300',
  'FAQ': 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300',
  'Facility': 'bg-teal-100 text-teal-800 dark:bg-teal-900/20 dark:text-teal-300'
}

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      setQuery('')
      setResults([])
      setSelectedIndex(0)
    }
  }, [isOpen])

  useEffect(() => {
    if (query.trim().length === 0) {
      setResults([])
      setIsLoading(false)
      return
    }

    setIsLoading(true)
    
    // Simulate search delay for better UX
    const timeoutId = setTimeout(() => {
      const filteredResults = searchData.filter(item => {
        const searchTerms = query.toLowerCase().split(' ')
        return searchTerms.every(term => 
          item.title.toLowerCase().includes(term) ||
          item.description.toLowerCase().includes(term) ||
          item.keywords.some(keyword => keyword.toLowerCase().includes(term))
        )
      })
      
      setResults(filteredResults)
      setIsLoading(false)
      setSelectedIndex(0)
    }, 150)

    return () => clearTimeout(timeoutId)
  }, [query])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(prev => Math.max(prev - 1, 0))
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault()
      window.location.href = results[selectedIndex].url
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative min-h-screen flex items-start justify-center p-2 sm:p-4 pt-20 sm:pt-24">
        <div className="relative bg-white dark:bg-slate-800 rounded-xl shadow-2xl w-full max-w-2xl max-h-[85vh] sm:max-h-[80vh] overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-2 sm:gap-4 p-4 sm:p-6 border-b border-gray-200 dark:border-slate-700">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search across all pages..."
                className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm sm:text-base"
              />
              {isLoading && (
                <Loader2 className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 animate-spin" />
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 sm:p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto">
            {query.trim().length === 0 ? (
              <div className="p-8 text-center">
                <Search className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                <p className="text-gray-500 dark:text-gray-400">
                  Start typing to search across all pages
                </p>
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                  Search for schedules, instructions, facilities, and more
                </p>
              </div>
            ) : results.length === 0 && !isLoading ? (
              <div className="p-8 text-center">
                <Search className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                <p className="text-gray-500 dark:text-gray-400">
                  No results found for &quot;{query}&quot;
                </p>
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                  Try different keywords or check spelling
                </p>
              </div>
            ) : (
              <div className="p-2">
                {results.map((result, index) => {
                  const Icon = result.icon
                  return (
                    <Link
                      key={result.id}
                      href={result.url}
                      onClick={onClose}
                      className={`block p-4 rounded-lg transition-colors ${
                        index === selectedIndex
                          ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800'
                          : 'hover:bg-gray-50 dark:hover:bg-slate-700'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-gray-100 dark:bg-slate-600 rounded-lg">
                          <Icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-medium text-gray-900 dark:text-white truncate">
                              {result.title}
                            </h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[result.category as keyof typeof categoryColors]}`}>
                              {result.category}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                            {result.description}
                          </p>
                          <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                            <span>{result.page}</span>
                            <ArrowRight className="w-3 h-3" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>

          {/* Footer */}
          {results.length > 0 && (
            <div className="p-4 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-700/50">
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{results.length} result{results.length !== 1 ? 's' : ''} found</span>
                <div className="flex items-center gap-4">
                  <span>↑↓ Navigate</span>
                  <span>↵ Select</span>
                  <span>Esc Close</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
