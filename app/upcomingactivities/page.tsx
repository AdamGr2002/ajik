import Image from 'next/image'
import Link from 'next/link'
export default function UpcomingActivities() {
  return (
    <div className="container mx-auto px-4 py-8">
        <Link 
        href="/" 
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Retour
      </Link>
      <h1 className="text-3xl font-semibold text-blue-800 mb-6">Activités à Venir</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Add more activity cards */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-64">
            <Image
              src="/naturechall.jpg"
              alt="Upcoming Event"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-green-600 mb-3">Nature&Challenge AJIK V5.0</h3>
            <p className="text-gray-500 mt-2">Date: 12 Janvier 2025</p>
          </div>
        </div>
      </div>
    </div>
  )
}