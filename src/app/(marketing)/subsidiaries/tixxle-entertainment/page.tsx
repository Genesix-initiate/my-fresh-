import Link from "next/link";
import { Music, Video, Star } from "lucide-react";

export default function TixxlePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">TIXXLE</h1>
          <h2 className="text-2xl md:text-3xl font-light tracking-widest mb-10">ENTERTAINMENT</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light mb-10">
            Redefining global entertainment through music, film, and unforgettable live events.
          </p>
          <Link href="/contact" className="bg-accent text-white px-8 py-4 rounded-md font-bold hover:bg-accent-light transition-colors">
            Book Our Talent
          </Link>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-8 border border-gray-800 rounded-xl bg-gray-900/50 hover:bg-gray-900 transition-colors">
            <Music className="w-12 h-12 text-secondary mb-6" />
            <h3 className="text-xl font-bold mb-3">Record Label</h3>
            <p className="text-gray-400">Discovering and nurturing the next generation of global music superstars.</p>
          </div>
          <div className="p-8 border border-gray-800 rounded-xl bg-gray-900/50 hover:bg-gray-900 transition-colors">
            <Video className="w-12 h-12 text-secondary mb-6" />
            <h3 className="text-xl font-bold mb-3">Film & Production</h3>
            <p className="text-gray-400">High-end cinematography, music videos, and commercial film production.</p>
          </div>
          <div className="p-8 border border-gray-800 rounded-xl bg-gray-900/50 hover:bg-gray-900 transition-colors">
            <Star className="w-12 h-12 text-secondary mb-6" />
            <h3 className="text-xl font-bold mb-3">Event Management</h3>
            <p className="text-gray-400">Organizing premium concerts, corporate galas, and exclusive VIP parties.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
