"use client";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Error sending message.');
      }
    } catch (err) {
      setStatus('Error sending message.');
    }
  };

  return (
    <div className="bg-white">
      <section className="bg-primary text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            We are here to answer your questions and explore new partnerships.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-8">Get In Touch</h2>
            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <MapPin className="text-secondary w-6 h-6 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-primary">Headquarters</h4>
                  <p className="text-gray-600">123 Corporate Avenue, Business District, Metro City 10001</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-secondary w-6 h-6 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-primary">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-secondary w-6 h-6 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-primary">Email</h4>
                  <p className="text-gray-600">info@genesixgroup.com</p>
                </div>
              </div>
            </div>
            <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-secondary focus:border-secondary outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-secondary focus:border-secondary outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input type="text" required value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-secondary focus:border-secondary outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea required rows={5} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-secondary focus:border-secondary outline-none resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white py-4 rounded-md font-bold hover:bg-primary-light transition-colors mt-6">
                Send Message
              </button>
              {status && <p className="text-center mt-4 text-sm font-medium text-green-600">{status}</p>}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
