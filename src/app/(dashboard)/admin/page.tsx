import { db } from "@/db";
import { contacts, investorRequests } from "@/db/schema";
import { Users, FileText, Briefcase, Activity } from "lucide-react";
import Link from "next/link";
import { desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const recentContacts = await db.select().from(contacts).orderBy(desc(contacts.createdAt)).limit(5);
  const recentInvestors = await db.select().from(investorRequests).orderBy(desc(investorRequests.createdAt)).limit(5);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-primary text-white flex-shrink-0 border-r border-gray-800">
        <div className="p-6">
          <h2 className="text-xl font-bold font-serif text-accent mb-2">Admin Portal</h2>
          <p className="text-xs text-gray-400">System Management</p>
        </div>
        <nav className="mt-6 px-4 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 bg-accent/20 text-accent-light rounded-lg font-medium">
            <Activity size={20} /> Overview
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
            <Users size={20} /> Customers
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
            <Briefcase size={20} /> Investors
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
            <FileText size={20} /> Content
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-primary mb-8">Admin Dashboard Overview</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-secondary">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Total Contacts</h3>
            <p className="text-3xl font-bold text-primary">{recentContacts.length}+</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-accent">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Investor Inquiries</h3>
            <p className="text-3xl font-bold text-primary">{recentInvestors.length}+</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-blue-500">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Active Users</h3>
            <p className="text-3xl font-bold text-primary">124</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-green-500">
            <h3 className="text-sm font-medium text-gray-500 mb-2">System Status</h3>
            <p className="text-xl font-bold text-green-600 mt-2">Operational</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-primary mb-4 flex justify-between items-center">
              Recent Contacts
              <span className="text-sm font-normal text-secondary hover:underline cursor-pointer">View All</span>
            </h2>
            <div className="space-y-4">
              {recentContacts.length > 0 ? recentContacts.map(c => (
                <div key={c.id} className="py-3 border-b border-gray-50 last:border-0">
                  <p className="font-medium text-gray-800">{c.name}</p>
                  <p className="text-sm text-gray-500 truncate">{c.subject || 'No Subject'} - {c.message.substring(0, 50)}...</p>
                </div>
              )) : <p className="text-gray-500 text-sm">No recent contacts.</p>}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-primary mb-4 flex justify-between items-center">
              Investor Inquiries
              <span className="text-sm font-normal text-secondary hover:underline cursor-pointer">View All</span>
            </h2>
            <div className="space-y-4">
              {recentInvestors.length > 0 ? recentInvestors.map(i => (
                <div key={i.id} className="flex justify-between items-center py-3 border-b border-gray-50 last:border-0">
                  <div>
                    <p className="font-medium text-gray-800">{i.name}</p>
                    <p className="text-sm text-gray-500">{i.interest}</p>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">{i.amount}</span>
                </div>
              )) : <p className="text-gray-500 text-sm">No recent investor inquiries.</p>}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
