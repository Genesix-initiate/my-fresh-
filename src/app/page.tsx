import Link from "next/link";
import { ArrowRight, Shield, Film, ShoppingBag, TrendingUp, Building2, Globe2, Cog } from "lucide-react";

export default function Home() {
  const services = [
    { title: "Octa-Eagle Security", icon: Shield, desc: "Premium security and protection services.", link: "/subsidiaries/octa-eagle-security" },
    { title: "Tixxle Entertainment", icon: Film, desc: "World-class media and event management.", link: "/subsidiaries/tixxle-entertainment" },
    { title: "NXT Wears", icon: ShoppingBag, desc: "Modern fashion and apparel.", link: "/subsidiaries/nxt-wears" },
    { title: "Forex Services", icon: TrendingUp, desc: "Expert currency exchange and trading solutions.", link: "/services#forex" },
    { title: "Property Listing", icon: Building2, desc: "Premium real estate management.", link: "/services#property" },
    { title: "Tech Innovation", icon: Cog, desc: "Next-gen technological solutions.", link: "/services#tech" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary py-32 px-4 sm:px-6 lg:px-8 text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Excellence Across Every Frontier.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
            Genesix Initiate Group leads with bold vision in security, entertainment, technology, and real estate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="bg-secondary text-primary px-8 py-4 rounded-md font-bold hover:bg-secondary-light transition-colors flex items-center justify-center">
              Explore Our Services <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/contact" className="bg-transparent border border-white text-white px-8 py-4 rounded-md font-bold hover:bg-white hover:text-primary transition-colors">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Section Snippet */}
      <section className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">Who We Are</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">A Legacy of Innovation & Trust</h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Genesix Initiate Group is a premier corporate conglomerate dedicated to delivering top-tier solutions across multiple industries. From robust security services to cutting-edge tech innovations and high-end fashion, our subsidiaries operate with a single goal: uncompromising quality.
            </p>
            <Link href="/about" className="text-primary font-bold hover:text-accent flex items-center group">
              Read Our Story <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="flex-1 w-full h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-xl relative">
             <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" alt="Corporate Office" className="object-cover w-full h-full" />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">What We Do</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary">Our Core Offerings</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv, idx) => (
              <div key={idx} className="p-8 border border-gray-100 rounded-xl hover:shadow-2xl transition-shadow bg-white group cursor-pointer">
                <srv.icon className="w-12 h-12 text-secondary mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold text-primary mb-3 font-serif">{srv.title}</h4>
                <p className="text-gray-500 mb-6">{srv.desc}</p>
                <Link href={srv.link} className="text-accent font-semibold hover:text-primary flex items-center text-sm">
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/services" className="inline-block bg-primary text-white px-8 py-4 rounded-md font-semibold hover:bg-primary-light transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to Elevate Your Business?</h2>
          <p className="text-xl text-gray-300 mb-10">Join our network of investors and clients who trust Genesix to deliver exceptional results.</p>
          <div className="flex justify-center gap-4">
            <Link href="/dashboard" className="bg-secondary text-primary px-8 py-4 rounded-md font-bold hover:bg-secondary-light transition-colors">
              Access Client Portal
            </Link>
            <Link href="/contact" className="bg-transparent border border-white text-white px-8 py-4 rounded-md font-bold hover:bg-white hover:text-primary transition-colors">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
