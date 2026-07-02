"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [subsidiariesOpen, setSubsidiariesOpen] = useState(false);

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 border-b border-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <span className="font-serif text-2xl font-bold tracking-wider text-secondary">
                GENESIX
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <Link href="/about" className="hover:text-secondary transition-colors">About</Link>
            
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center hover:text-secondary transition-colors py-8">
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 w-64 bg-white text-primary shadow-xl rounded-b-lg overflow-hidden flex flex-col z-50">
                  <Link href="/services" className="px-4 py-3 hover:bg-secondary/10 hover:text-secondary border-b border-gray-100 font-semibold">All Services</Link>
                  <Link href="/services#shops" className="px-4 py-2 hover:bg-secondary/10 hover:text-secondary">Shops</Link>
                  <Link href="/services#forex" className="px-4 py-2 hover:bg-secondary/10 hover:text-secondary">Forex Services</Link>
                  <Link href="/services#tech" className="px-4 py-2 hover:bg-secondary/10 hover:text-secondary">Tech Innovation</Link>
                  <Link href="/services#marketing" className="px-4 py-2 hover:bg-secondary/10 hover:text-secondary">Marketing Agency</Link>
                  <Link href="/services#consultancy" className="px-4 py-2 hover:bg-secondary/10 hover:text-secondary">Consultancy & Management</Link>
                  <Link href="/services#property" className="px-4 py-2 hover:bg-secondary/10 hover:text-secondary">Property Listing</Link>
                  <Link href="/services#logistics" className="px-4 py-2 hover:bg-secondary/10 hover:text-secondary">Logistic Services</Link>
                  <Link href="/services#merchandise" className="px-4 py-2 hover:bg-secondary/10 hover:text-secondary">General Merchandise</Link>
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => setSubsidiariesOpen(true)} onMouseLeave={() => setSubsidiariesOpen(false)}>
              <button className="flex items-center hover:text-secondary transition-colors py-8">
                Subsidiaries <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {subsidiariesOpen && (
                <div className="absolute top-full left-0 w-64 bg-white text-primary shadow-xl rounded-b-lg overflow-hidden flex flex-col z-50">
                  <Link href="/subsidiaries/octa-eagle-security" className="px-4 py-3 hover:bg-secondary/10 hover:text-secondary">OCTA-EAGLE Security</Link>
                  <Link href="/subsidiaries/tixxle-entertainment" className="px-4 py-3 hover:bg-secondary/10 hover:text-secondary">TIXXLE Entertainment</Link>
                  <Link href="/subsidiaries/nxt-wears" className="px-4 py-3 hover:bg-secondary/10 hover:text-secondary">NXT Wears</Link>
                </div>
              )}
            </div>

            <Link href="/investors" className="hover:text-secondary transition-colors">Investors</Link>
            <Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link>
            
            <Link href="/dashboard" className="bg-secondary text-primary px-5 py-2 rounded-md font-semibold hover:bg-secondary-light transition-colors">
              Portal
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-primary-light pb-4 px-4 space-y-2">
          <Link href="/" className="block py-2 text-white hover:text-secondary">Home</Link>
          <Link href="/about" className="block py-2 text-white hover:text-secondary">About</Link>
          <Link href="/services" className="block py-2 text-white hover:text-secondary">Services</Link>
          <Link href="/subsidiaries/octa-eagle-security" className="block py-2 text-white hover:text-secondary">OCTA-EAGLE Security</Link>
          <Link href="/subsidiaries/tixxle-entertainment" className="block py-2 text-white hover:text-secondary">TIXXLE Entertainment</Link>
          <Link href="/subsidiaries/nxt-wears" className="block py-2 text-white hover:text-secondary">NXT Wears</Link>
          <Link href="/investors" className="block py-2 text-white hover:text-secondary">Investors</Link>
          <Link href="/contact" className="block py-2 text-white hover:text-secondary">Contact</Link>
          <Link href="/dashboard" className="block py-2 text-secondary font-semibold mt-4">Dashboard Login</Link>
        </div>
      )}
    </nav>
  );
}
