import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const allServices = [
    { id: "shops", title: "Shops", desc: "Premium retail spaces and commercial shops designed for high traffic and visibility." },
    { id: "forex", title: "Forex Services", desc: "Expert currency exchange, trading consultancy, and international market insights." },
    { id: "tech", title: "Tech Innovation", desc: "Software development, IT infrastructure, and cutting-edge digital solutions." },
    { id: "marketing", title: "Marketing Agency", desc: "Brand building, digital marketing, and strategic growth campaigns." },
    { id: "consultancy", title: "Business Consultancy & Management", desc: "Expert guidance on business scaling, operations, and corporate strategy." },
    { id: "property", title: "Property Listing", desc: "Luxury real estate, property management, and strategic investments." },
    { id: "logistics", title: "Logistic Services", desc: "Efficient supply chain, freight forwarding, and reliable delivery networks." },
    { id: "merchandise", title: "General Merchandise", desc: "High-quality wholesale and retail products across multiple categories." },
  ];

  return (
    <div className="bg-white">
      <section className="bg-primary text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Comprehensive solutions tailored for corporate success and individual luxury.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          {allServices.map((srv, idx) => (
            <div key={srv.id} id={srv.id} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''} scroll-mt-24`}>
              <div className="flex-1">
                <h2 className="text-3xl font-serif font-bold text-primary mb-4">{srv.title}</h2>
                <div className="w-12 h-1 bg-secondary mb-6"></div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {srv.desc} Genesix Initiate Group approaches every sector with unmatched dedication, utilizing top-tier talent and innovative strategies to guarantee success.
                </p>
                <Link href="/contact" className="inline-flex items-center text-accent font-bold hover:text-primary transition-colors">
                  Inquire Now <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              <div className="flex-1 w-full h-[300px] bg-gray-100 rounded-2xl overflow-hidden shadow-lg relative group">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={`https://images.unsplash.com/photo-${1500000000000 + idx}?auto=format&fit=crop&q=80&w=800`} alt={srv.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
