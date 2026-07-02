import { LayoutDashboard, FileText, Settings, User, Bell } from "lucide-react";
import Link from "next/link";

export default function CustomerDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-primary text-white flex-shrink-0 border-r border-gray-800">
        <div className="p-6">
          <h2 className="text-xl font-bold font-serif text-secondary mb-2">Client Portal</h2>
          <p className="text-xs text-gray-400">WELCOME BACK</p>
        </div>
        <nav className="mt-6 px-4 space-y-2">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-secondary/10 text-secondary rounded-lg">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
            <FileText size={20} /> My Requests
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
            <User size={20} /> Profile
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
            <Settings size={20} /> Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-primary">Dashboard Overview</h1>
          <button className="relative p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Active Services</h3>
            <p className="text-3xl font-bold text-primary">3</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Pending Invoices</h3>
            <p className="text-3xl font-bold text-primary">$1,250</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Unread Messages</h3>
            <p className="text-3xl font-bold text-primary">2</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-bold text-primary mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-50">
              <div>
                <p className="font-medium text-gray-800">Security Audit Request</p>
                <p className="text-sm text-gray-500">Octa-Eagle Security</p>
              </div>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">In Progress</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-50">
              <div>
                <p className="font-medium text-gray-800">Property Inquiry</p>
                <p className="text-sm text-gray-500">Real Estate Listing</p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Completed</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
