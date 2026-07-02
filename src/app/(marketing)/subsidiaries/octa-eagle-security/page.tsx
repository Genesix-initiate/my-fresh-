import Link from "next/link";
import { ShieldCheck, UserCheck, Lock } from "lucide-react";

export default function OctaEaglePage() {
  return (
    <div className="bg-white">
      <section className="bg-[#0F172A] text-white py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">OCTA-EAGLE <span className="text-secondary">SECURITY</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light mb-10">
            Uncompromising Protection. Elite Security Personnel.
          </p>
          <Link href="/contact" className="bg-secondary text-primary px-8 py-4 rounded-md font-bold hover:bg-white transition-colors">
            Hire Our Guards
          </Link>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-primary text-white rounded-full flex items-center justify-center mb-6">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Asset Protection</h3>
            <p className="text-gray-600">Comprehensive safeguarding of corporate and high-value physical assets.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-primary text-white rounded-full flex items-center justify-center mb-6">
              <UserCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Executive VIP Guard</h3>
            <p className="text-gray-600">Discreet, highly-trained close protection officers for executives and VIPs.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-primary text-white rounded-full flex items-center justify-center mb-6">
              <Lock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Facility Security</h3>
            <p className="text-gray-600">24/7 on-site security management for commercial and residential estates.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
