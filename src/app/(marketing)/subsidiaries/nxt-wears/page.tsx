import Link from "next/link";
import { Scissors, Shirt, Sparkles } from "lucide-react";

export default function NxtWearsPage() {
  return (
    <div className="bg-white">
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gray-50">
        <div className="absolute right-0 top-0 w-1/2 h-full z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80')] bg-cover bg-left hidden lg:block"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-primary tracking-tight">NXT <span className="text-accent">WEARS</span></h1>
            <p className="text-xl text-gray-600 font-light mb-10">
              Where luxury meets streetwear. Bold designs for the modern visionary.
            </p>
            <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded-md font-bold hover:bg-primary-light transition-colors">
              Shop Collection
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <Shirt className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Premium Apparel</h3>
            <p className="text-gray-600">High-quality fabrics engineered for comfort and striking aesthetics.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <Scissors className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Custom Tailoring</h3>
            <p className="text-gray-600">Bespoke corporate wear and uniform designs for businesses.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Limited Editions</h3>
            <p className="text-gray-600">Exclusive drops and collaborations setting global fashion trends.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
