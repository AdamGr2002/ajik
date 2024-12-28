import Image from 'next/image'
import Link from 'next/link'

// Define an interface for activities
interface Activity {
  title: string;
  date: string;
  image: string;
}

export default function PastActivities() {
  // Create an array of activities with their data
  const activities: Activity[] = [
    {
      title: "Nature&Challenge AJIK V4.0",
      date: "2024-01",
      image: "/naturechall4.jpg"
    },
    {
      title: "Ultra_bike_Ajik 3.0",
      date: "2024-05",
      image: "/ultrabike3.jpg"
    },
    {
      title: "ultra_bike_Ajik",
      date: "2023-07",
      image: "/ultrabike1.jpg"
    },
    {
      title: "Ultra_Bike_AJiK 4.0",
      date: "2024-12",
      image: "/ultrabike.jpg"
    }
  ];

  // Sort activities by date in descending order (most recent first)
  const sortedActivities = [...activities].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

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
      <h1 className="text-3xl font-semibold text-blue-800 mb-6">Activités Passées</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedActivities.map((activity, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64">
              <Image
                src={activity.image}
                alt={activity.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">{activity.title}</h3>
              <p className="text-gray-500 mt-2">
                Date: {new Date(activity.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long'
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}