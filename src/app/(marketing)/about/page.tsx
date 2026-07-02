import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  const values = [
    "Excellence in Service Delivery",
    "Uncompromising Security & Safety",
    "Innovation in Technology",
    "Integrity & Transparency",
    "Sustainable Growth",
    "Client-Centric Approach"
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-primary text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">About Genesix Initiate Group</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            A dynamic conglomerate driving excellence across diverse sectors.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Genesix Initiate Group was founded on the principle of bridging gaps in critical industries while maintaining the highest standards of luxury, corporate integrity, and operational efficiency. 
            </p>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Over the years, we have expanded our footprint through successful subsidiaries: <strong className="text-primary">OCTA-EAGLE SECURITY GUARD</strong> for premium protection, <strong className="text-primary">TIXXLE ENTERTAINMENT</strong> for world-class media, and <strong className="text-primary">NXT WEARS</strong> for forward-thinking fashion. 
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Today, our services span logistics, real estate, tech innovation, forex, and general merchandise, making us a versatile partner for businesses and individuals alike.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-64 bg-gray-200 rounded-xl overflow-hidden mt-8">
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80" alt="Corporate" className="w-full h-full object-cover" />
            </div>
            <div className="h-64 bg-gray-200 rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" alt="Team" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide every decision we make and every service we deliver.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                <CheckCircle2 className="text-secondary w-6 h-6 flex-shrink-0" />
                <span className="font-semibold text-primary">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
