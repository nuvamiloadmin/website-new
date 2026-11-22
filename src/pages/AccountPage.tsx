import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  User,
  ShoppingBag,
  MapPin,
  Clock,
  Phone,
  Mail,
  ShieldCheck,
  ChevronRight,
  Package,
  Home,
  Building,
} from 'lucide-react';
import { PageId } from '../types/navigation';

interface AccountPageProps {
  onNavigate: (page: PageId) => void;
  initialTab?: 'orders' | 'addresses' | 'profile';
}

export const AccountPage: React.FC<AccountPageProps> = ({ onNavigate, initialTab = 'orders' }) => {
  const [activeTab, setActiveTab] = useState<'orders' | 'addresses' | 'profile'>(initialTab);

  const mockOrders = [
    {
      id: 'NVM-984210',
      date: '18 Nov 2026, 08:35 AM',
      items: 'Amul Taaza Milk 1L, Britannia 100% Atta Bread, Farm Eggs (6 pcs)',
      total: 184,
      status: 'Delivered in 18 Mins',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      id: 'NVM-976451',
      date: '14 Nov 2026, 06:12 PM',
      items: 'Daawat Basmati Rice 5kg, Tata Sampann Toor Dal 1kg, Fortune Sunflower Oil 1L',
      total: 699,
      status: 'Delivered',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      id: 'NVM-953119',
      date: '08 Nov 2026, 11:20 AM',
      items: 'Nutty Grits California Almonds 500g, Organic India Tulsi Tea 25 Bags',
      total: 649,
      status: 'Delivered',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
  ];

  const mockAddresses = [
    {
      id: 'addr-1',
      type: 'Home',
      icon: Home,
      name: 'Devendra Patel',
      phone: '+91 98765 43210',
      address: 'Flat 402, Shivalik Highstreet, Keshavbaug Party Plot Road, Vastrapur, Ahmedabad - 380015',
      isDefault: true,
    },
    {
      id: 'addr-2',
      type: 'Office',
      icon: Building,
      name: 'Devendra Patel (Work)',
      phone: '+91 98765 43210',
      address: '4th Floor, Synergy IT Park, SG Highway, Bodakdev, Ahmedabad - 380054',
      isDefault: false,
    },
  ];

  return (
    <div className="bg-[#F7F9FC] min-h-screen py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#071D49] tracking-tight">
            My NUVAMILO Account
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manage your past grocery orders, saved addresses, and profile details.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs h-fit space-y-4">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#071D49] to-[#0057D9] text-white flex items-center justify-center font-bold text-lg">
                D
              </div>
              <div>
                <h3 className="font-extrabold text-sm text-[#071D49]">Devendra Patel</h3>
                <p className="text-xs text-slate-400">+91 98765 43210</p>
              </div>
            </div>

            <nav className="space-y-1">
              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-bold transition cursor-pointer ${
                  activeTab === 'orders'
                    ? 'bg-[#071D49] text-white'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Package className="w-4 h-4" />
                  <span>My Orders</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveTab('addresses')}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-bold transition cursor-pointer ${
                  activeTab === 'addresses'
                    ? 'bg-[#071D49] text-white'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4" />
                  <span>Saved Addresses</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-bold transition cursor-pointer ${
                  activeTab === 'profile'
                    ? 'bg-[#071D49] text-white'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <User className="w-4 h-4" />
                  <span>Personal Profile</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </button>
            </nav>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {activeTab === 'orders' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-extrabold text-[#071D49]">Order History</h2>
                  <span className="text-xs text-slate-400">{mockOrders.length} Completed Orders</span>
                </div>

                {mockOrders.map((ord) => (
                  <div
                    key={ord.id}
                    className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono font-bold text-xs text-[#071D49] bg-slate-100 px-2.5 py-1 rounded-lg">
                          {ord.id}
                        </span>
                        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${ord.statusColor}`}>
                          {ord.status}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-slate-700 leading-snug">
                        {ord.items}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-1">{ord.date}</p>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100 gap-2 shrink-0">
                      <span className="text-lg font-black text-[#071D49]">₹{ord.total}</span>
                      <button
                        onClick={() => onNavigate('shop')}
                        className="px-4 py-1.5 rounded-full bg-blue-50 text-[#0057D9] text-xs font-bold hover:bg-[#0057D9] hover:text-white transition cursor-pointer"
                      >
                        Re-Order
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'addresses' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-extrabold text-[#071D49]">Saved Delivery Addresses</h2>
                  <button
                    onClick={() => onNavigate('checkout')}
                    className="px-4 py-2 rounded-full bg-[#071D49] text-white text-xs font-bold hover:bg-[#0057D9] cursor-pointer"
                  >
                    + Add New Address
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {mockAddresses.map((addr) => {
                    const Icon = addr.icon;
                    return (
                      <div
                        key={addr.id}
                        className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-xs font-bold text-[#071D49]">
                              <Icon className="w-3.5 h-3.5" />
                              {addr.type}
                            </span>
                            {addr.isDefault && (
                              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                                DEFAULT
                              </span>
                            )}
                          </div>
                          <h3 className="font-bold text-sm text-[#071D49]">{addr.name}</h3>
                          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                            {addr.address}
                          </p>
                          <p className="text-xs text-slate-400 mt-2">{addr.phone}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
                <h2 className="text-lg font-extrabold text-[#071D49] pb-4 border-b border-slate-100">
                  Profile Information
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-bold text-slate-600 mb-1">Full Name</label>
                    <input
                      type="text"
                      defaultValue="Devendra Patel"
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-medium"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-600 mb-1">Mobile Number</label>
                    <input
                      type="tel"
                      defaultValue="+91 98765 43210"
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-medium"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block font-bold text-slate-600 mb-1">Email Address</label>
                    <input
                      type="email"
                      defaultValue="devendra.patel@gmail.com"
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-medium"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex justify-end">
                  <button
                    onClick={() => alert('Profile updated successfully!')}
                    className="px-6 py-2.5 rounded-full bg-[#071D49] text-white text-xs font-bold hover:bg-[#0057D9] transition cursor-pointer"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
