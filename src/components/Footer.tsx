import Link from "next/link";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <span className="font-serif text-2xl font-bold tracking-wider text-secondary block mb-6">
              GENESIX
            </span>
            <p className="text-gray-400 mb-6">
              A diverse conglomerate delivering excellence across security, entertainment, fashion, tech, and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-secondary"><Globe size={20} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-secondary">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-secondary">Our Services</Link></li>
              <li><Link href="/investors" className="text-gray-400 hover:text-secondary">Investors</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-secondary">Contact Us</Link></li>
              <li><Link href="/dashboard" className="text-gray-400 hover:text-secondary">Client Portal</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Subsidiaries</h3>
            <ul className="space-y-3">
              <li><Link href="/subsidiaries/octa-eagle-security" className="text-gray-400 hover:text-secondary">OCTA-EAGLE Security</Link></li>
              <li><Link href="/subsidiaries/tixxle-entertainment" className="text-gray-400 hover:text-secondary">TIXXLE Entertainment</Link></li>
              <li><Link href="/subsidiaries/nxt-wears" className="text-gray-400 hover:text-secondary">NXT Wears</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Warri Delta state , Nigeria</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                <span className="text-gray-400">+234 (0) 702 501 6590 </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                <span className="text-gray-400">genesixinitiate@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Genesix Initiate Group. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
