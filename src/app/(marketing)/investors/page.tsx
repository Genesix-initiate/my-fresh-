"use client";
import { useState } from "react";
import { TrendingUp, PieChart, Globe2 } from "lucide-react";

export default function InvestorPage() {
  const [formData, setFormData] = useState({ name: '', email: '', amount: '', interest: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      const res = await fetch('/api/investor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('Success! Our investor relations team will contact you shortly.');
        setFormData({ name: '', email: '', amount: '', interest: '' });
      } else {
        setStatus('Error submitting request. Please try again.');
      }
    } catch (err) {
      setStatus('Error submitting request. Please try again.');
    }
  };

  return (
    <div className="bg-white">
      <section className="bg-primary text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Investor Relations</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Partner with Genesix Initiate Group and be part of our expansive growth across high-yield sectors.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Why Invest With Us?</h2>
            <div className="space-y-8 mb-12">
              <div className="flex gap-4">
                <div className="mt-1"><TrendingUp className="text-secondary w-6 h-6" /></div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Diverse Portfolio</h4>
                  <p className="text-gray-600">Our investments span security, real estate, entertainment, and tech, mitigating risk through diversification.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1"><PieChart className="text-secondary w-6 h-6" /></div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">High Yield Returns</h4>
                  <p className="text-gray-600">Strategic market positioning allows us to deliver consistent and competitive ROI for our partners.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1"><Globe2 className="text-secondary w-6 h-6" /></div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Global Vision</h4>
                  <p className="text-gray-600">While deeply rooted locally, our operations scale globally with international partnerships.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">Express Investment Interest</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name / Company Name</label>
                <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-secondary focus:border-secondary outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-secondary focus:border-secondary outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Proposed Investment Capital (USD)</label>
                <select required value={formData.amount} onChange={e => setFormData({...formData, amount: e.target.value})} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-secondary focus:border-secondary outline-none bg-white">
                  <option value="">Select Range</option>
                  <option value="10k-50k">$10,000 - $50,000</option>
                  <option value="50k-250k">$50,000 - $250,000</option>
                  <option value="250k-1m">$250,000 - $1,000,000</option>
                  <option value="1m+">$1,000,000+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Area of Interest</label>
                <select required value={formData.interest} onChange={e => setFormData({...formData, interest: e.target.value})} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-secondary focus:border-secondary outline-none bg-white">
                  <option value="">Select Sector</option>
                  <option value="General Fund">General Corporate Fund</option>
                  <option value="Real Estate">Property & Real Estate</option>
                  <option value="Tech">Tech Innovation</option>
                  <option value="Entertainment">Tixxle Entertainment</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-primary text-white py-4 rounded-md font-bold hover:bg-primary-light transition-colors mt-6">
                Submit Inquiry
              </button>
              {status && <p className="text-center mt-4 text-sm font-medium text-green-600">{status}</p>}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
