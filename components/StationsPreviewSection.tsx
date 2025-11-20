'use client'

import { 
  Train,
  Navigation,
  Phone,
  ExternalLink,
  Map,
  Clock3,
  Users2,
  Luggage,
  MapPin,
  AlertCircle,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import useScrollAnimation from '@/hooks/useScrollAnimation'
import Link from 'next/link'

export default function StationsPreviewSection() {
  const [headerRef, headerVisible] = useScrollAnimation()
  const [cardsRef, cardsVisible] = useScrollAnimation()
  const [advisoryRef, advisoryVisible] = useScrollAnimation()

  const stations = [
    {
      id: 'ksr',
      name: 'KSR Bengaluru',
      fullName: 'Krantivira Sangolli Rayanna Railway Station',
      code: 'SBC',
      type: 'Main Station',
      color: 'blue',
      location: 'Majestic, Bengaluru',
      coordinates: '12.9772° N, 77.5686° E',
      distance: '12.4 Kms from RVCE',
      travelTime: '45-60 minutes',
      facilities: [
        'Multiple platforms',
        'Food courts',
        'Waiting rooms',
        'Parking facilities',
        'Metro connectivity',
        'Auto/Taxi stands'
      ],
      mapPreview: {
        lat: 12.9772,
        lng: 77.5686,
        zoom: 15
      },
      address: 'Station Rd, Kempegowda, Bengaluru, Karnataka 560023'
    },
    {
      id: 'chennai-central',
      name: 'Chennai Central (MAS)',
      fullName: 'Puratchi Thalaivar Dr. M.G. Ramachandran Central',
      code: 'MAS',
      type: 'Terminal Station (Main Terminus)',
      color: 'green',
      location: 'Park Town, Chennai, Tamil Nadu',
      coordinates: '13.0760° N, 80.2718° E',
      distance: 'About 5 km from central Chennai',
      travelTime: '~10 minutes driving (varies)',
      facilities: [
        '17 platforms',
        'Executive/Lounge Area',
        'Food & Dining',
        'Cloakroom',
        'Metro connectivity',
        'City bus and taxi access'
      ],
      mapPreview: {
        lat: 13.0760,
        lng: 80.2718,
        zoom: 15
      },
      address: 'Park Town, Chennai, Tamil Nadu 600003, India'
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        border: 'border-blue-200 dark:border-blue-800',
        accent: 'border-l-blue-500',
        icon: 'text-blue-600 dark:text-blue-400',
        button: 'bg-blue-600 hover:bg-blue-700 text-white'
      },
      green: {
        bg: 'bg-green-50 dark:bg-green-900/20',
        border: 'border-green-200 dark:border-green-800',
        accent: 'border-l-green-500',
        icon: 'text-green-600 dark:text-green-400',
        button: 'bg-green-600 hover:bg-green-700 text-white'
      }
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-secondary-900 dark:to-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 fade-in-up ${headerVisible ? 'animate' : ''}`}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-500 to-gray-600 rounded-full mb-6">
            <Train className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
            Departure and Arrival Stations
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 dark:text-secondary-400 max-w-4xl mx-auto leading-relaxed">
            Key railway stations for your journey. Choose your preferred station 
            and plan your arrival/departure accordingly.
          </p>
        </div>

        {/* Station Cards */}
        <div 
          ref={cardsRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 ${cardsVisible ? 'animate' : ''}`}
        >
          {stations.map((station, index) => {
            const colors = getColorClasses(station.color)
            return (
              <div key={station.id} className={`fade-in-up stagger-${index + 1} ${cardsVisible ? 'animate' : ''}`}>
                <div className={`card h-full ${colors.bg} ${colors.border} ${colors.accent} border-l-4`}>
                  {/* Station Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        station.color === 'blue' 
                          ? 'bg-blue-100 dark:bg-blue-900' 
                          : 'bg-green-100 dark:bg-green-900'
                      }`}>
                        <Train className={`w-6 h-6 ${
                          station.color === 'blue' 
                            ? 'text-blue-600 dark:text-blue-400' 
                            : 'text-green-600 dark:text-green-400'
                        }`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-secondary-900 dark:text-white">
                          {station.name}
                        </h3>
                        <p className="text-sm text-secondary-600 dark:text-secondary-400">
                          {station.fullName}
                        </p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            station.color === 'blue' 
                              ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' 
                              : 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                          }`}>
                            {station.code}
                          </span>
                          <span className="text-xs text-secondary-500 dark:text-secondary-500">
                            {station.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Directions Link */}
                  <div className="mb-6">
                    <a 
                      href={station.id === 'ksr' 
                        ? 'https://www.google.com/maps/dir//KSR+Bengaluru+City+Junction+(Bangalore),+M.G.+Railway+Colony,+Majestic,+Bengaluru,+Karnataka+560023/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3bae161b5bb8ab2b:0xd9ce8443dbf706ee?sa=X&ved=1t:57443&ictx=111'
                        : 'https://www.google.com/maps/dir//Puratchi+Thalaivar+Dr+MGR+Central+railway+station,+Periamet,+Kannappar+Thidal,+Chennai,+Tamil+Nadu+600003/@13.0821872,80.2706423,17z/data=!4m17!1m8!3m7!1s0x3a5266000af86837:0xb82ae0604cf7ec4d!2sPuratchi+Thalaivar+Dr+MGR+Central+railway+station!8m2!3d13.0821872!4d80.2754059!15sCg9jaGVubmFpIGNlbnRyYWxaESIPY2hlbm5haSBjZW50cmFskgEXbG9naWNhbF90cmFuc2l0X3N0YXRpb26qAUQQASoLIgdjZW50cmFsKAAyHhABIhreJyIifz9d8mD4g0w6ax6Sd_9J1wAx5mVnRzITEAIiD2NoZW5uYWkgY2VudHJhbOABAA!16s%2Fg%2F11cs3gxqdf!4m7!1m0!1m5!1m1!1s0x3a5266000af86837:0xb82ae0604cf7ec4d!2m2!1d80.2754059!2d13.0821872?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D'
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative h-32 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
                    >
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                        <Map className="w-8 h-8 text-gray-600 dark:text-gray-300 mb-2" />
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                          Get Directions to {station.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {station.coordinates}
                        </p>
                        <p className="text-xs text-blue-600 dark:text-blue-400 mt-2 flex items-center justify-center">
                          <span>Open in Google Maps</span>
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </p>
                      </div>
                      <div className="absolute top-2 right-2">
                        <div className={`w-3 h-3 rounded-full ${
                          station.color === 'blue' ? 'bg-blue-500' : 'bg-green-500'
                        } animate-pulse`}></div>
                      </div>
                    </a>
                  </div>

                  {/* Key Information */}
                  <div className="space-y-4 mb-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-secondary-400" />
                        <div>
                          <p className="text-xs text-secondary-500 dark:text-secondary-500">Location</p>
                          <p className="text-sm font-medium text-secondary-900 dark:text-white">
                            {station.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Navigation className="w-4 h-4 text-secondary-400" />
                        <div>
                          <p className="text-xs text-secondary-500 dark:text-secondary-500">Distance</p>
                          <p className="text-sm font-medium text-secondary-900 dark:text-white">
                            {station.distance}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Clock3 className="w-4 h-4 text-secondary-400" />
                        <div>
                          <p className="text-xs text-secondary-500 dark:text-secondary-500">Travel Time</p>
                          <p className="text-sm font-medium text-secondary-900 dark:text-white">
                            {station.travelTime}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Facilities */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-secondary-900 dark:text-white mb-3">
                      Key Facilities
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {station.facilities.slice(0, 4).map((facility, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                          <span className="text-xs text-secondary-600 dark:text-secondary-400">
                            {facility}
                          </span>
                        </div>
                      ))}
                    </div>
                    {station.facilities.length > 4 && (
                      <p className="text-xs text-secondary-500 dark:text-secondary-500 mt-2">
                        +{station.facilities.length - 4} more facilities
                      </p>
                    )}
                  </div>

                  {/* Call to Action */}
                  <div className="pt-4 border-t border-secondary-200 dark:border-secondary-700">
                    <Link href="/arrival-departure">
                      <button className={`w-full ${colors.button} px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 hover:shadow-lg transform hover:scale-105`}>
                        <span>View Detailed Information</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Advisory Message */}
        <div 
          ref={advisoryRef}
          className={`fade-in-up ${advisoryVisible ? 'animate' : ''}`}
        >
          <div className="card bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-l-amber-500">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 dark:bg-amber-800 rounded-full flex items-center justify-center">
                <Luggage className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-amber-900 dark:text-amber-100 mb-2">
                  Important Advisory: Minimal Luggage Policy
                </h3>
                <div className="space-y-2 text-amber-800 dark:text-amber-200">
                  <p>
                    <strong>Please bring only essential items</strong> for the three-day visit. 
                    Large luggage or multiple bags are not recommended due to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Limited storage space on transportation vehicles</li>
                    <li>Safety considerations in the manufacturing facility</li>
                    <li>Convenience during factory tours and activities</li>
                    <li>Ease of movement between different locations</li>
                  </ul>
                  <p className="mt-3">
                    <strong>Recommended:</strong> One small backpack or handbag with essential items only.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-amber-200 dark:border-amber-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                      <span className="text-sm font-medium text-amber-800 dark:text-amber-200">
                        Team SPARK
                      </span>
                    </div>
                    <div className="text-xs text-amber-600 dark:text-amber-400">
                      Industry Visit Coordination Team
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/arrival-departure">
              <button className="btn-primary flex items-center justify-center">
                <Map className="w-4 h-4 mr-2" />
                View Complete Transport Guide
              </button>
            </Link>
            <button className="btn-secondary flex items-center justify-center">
              <Phone className="w-4 h-4 mr-2" />
              Contact Transport Team
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
