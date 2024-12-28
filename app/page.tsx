import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Mail, MapPin, Phone } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image src="/logo.jpg" alt="AJIK Logo" width={80} height={80} />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">AJIK</h1>
          </div>
          <nav>
            <ul className="flex space-x-8">
              <li><a href="#about" className="text-blue-600 hover:text-blue-800">A propos</a></li>
              <li><a href="#activities" className="text-blue-600 hover:text-blue-800">Activités</a></li>
              <li><a href="#board" className="text-blue-600 hover:text-blue-800">Bureau</a></li>
              <li><a href="#contact" className="text-blue-600 hover:text-blue-800">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
      <section id="hero" className="relative h-[600px] mb-8">
  <div className="absolute inset-0 z-0 h-[600px]">
    <Image
      src="/ajikbg.jpg?height=400&width=1200"
      alt="Background"
      layout="fill"
      objectFit="cover"
      quality={100}
      className="h-full"
    />
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>
  <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center max-w-3xl">
      Association des Jeunes Innovateurs d&apos;Al-Khalidiya
    </h2>
    <Link 
      href="https://www.facebook.com/AJIK2020" 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 text-lg"
    >
      Suivre nous au Facebook
    </Link>
  </div>
</section>

        <section id="about" className="py-12">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">A propos</h2>
          <p className="text-gray-700 mb-4">
            AJIK (Association des Jeunes Innovateurs d&apos;Al-Khalidiya) est une organisation à but non lucratif dédiée à encourager et à autonomiser les jeunes d&apos;Al-Khalidiya par l&apos;innovation, la créativité et l&apos;entrepreneuriat.
          </p>
          <p className="text-gray-700 mb-4">
          Promouvoir la jeunesse et la dimension touristique culturelle de la délégation d&apos;Al-Khalidiya          </p>
        </section>

        <section id="activities" className="py-12">
  <h2 className="text-3xl font-semibold text-blue-800 mb-6">Activités</h2>
  <div className="grid md:grid-cols-2 gap-8">
    <Link href="/pastactivities" 
      className="group relative h-80 rounded-lg overflow-hidden">
      <Image
        src="/pastactivi.jpg"
        alt="Past Activities"
        fill
        className="object-cover transition-transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <h3 className="text-2xl font-semibold text-white">Activités Passées</h3>
      </div>
    </Link>
    
    <Link href="/upcomingactivities" 
      className="group relative h-80 rounded-lg overflow-hidden">
      <Image
        src="/upcactivi.webp"
        alt="Upcoming Activities"
        fill
        className="object-cover transition-transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <h3 className="text-2xl font-semibold text-white">Activités à Venir</h3>
      </div>
    </Link>
  </div>
</section>
<section id="board" className="py-12">
  <h2 className="text-3xl font-semibold text-blue-800 mb-6">Bureau</h2>
  <div className="relative h-[1200px] w-full rounded-xl overflow-hidden group">
    <Image
      src="/bureau.jpg"
      alt="Bureau Members"
      layout="fill"
      objectFit="cover"
      className="transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-semibold mb-2">Notre Bureau Exécutif</h3>
        <p className="text-lg opacity-90">L&apos;équipe qui dirige l&apos;AJIK vers l&apos;innovation</p>
      </div>
    </div>
  </div>
</section>

        <section id="contact" className="py-12">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">Contact</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <MapPin className="text-blue-600 mr-2" />
              <span>Ben Arous, Tunisia</span>
            </div>
            <div className="flex items-center mb-4">
              <Phone className="text-blue-600 mr-2" />
              <span>54 507 515</span>
            </div>
            <div className="flex items-center mb-4">
              <Mail className="text-blue-600 mr-2" />
              <a href="mailto:ajik2054@gmail.com" className="text-blue-600 hover:underline">ajik2054@gmail.com</a>
            </div>
            <div className="flex items-center">
              <Facebook className="text-blue-600 mr-2" />
              <a href="https://www.facebook.com/AJIK2020" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                facebook.com/AJIK2020
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-blue-900 to-green-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Association des Jeunes Innovateurs d&apos;Al-Khalidiya . Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}

