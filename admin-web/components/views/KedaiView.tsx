"use client";

import React, { useState } from 'react';
import { Coffee, Plus, Search, Clock, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';

export const KedaiView = () => {
  const [filter, setFilter] = useState('semua');

  const orders = [
    { id: 'RBR-1042', table: 'Meja 04', items: '1x Kopi Susu Creamy Gula Aren, 1x Americano Origin, 1x Pisang Goreng', total: 'Rp 65.000', status: 'disiapkan', time: '10 menit lalu' },
    { id: 'RBR-1043', table: 'Meja 09', items: '2x Wedang Uwuh Rempah Khas, 1x Jadah Bakar Serundeng Gurih', total: 'Rp 45.000', status: 'menunggu', time: '5 menit lalu' },
    { id: 'RBR-1041', table: 'Meja 01', items: '1x Single Origin V60 Flores Bajawa, 1x Cirebon Rujak', total: 'Rp 52.000', status: 'selesai', time: '25 menit lalu' },
    { id: 'RBR-1040', table: 'Meja 03', items: '2x Espresso Double Shot, 2x Croissant Butter', total: 'Rp 78.000', status: 'selesai', time: '40 menit lalu' },
  ];

  const filteredOrders = filter === 'semua' ? orders : orders.filter(o => o.status === filter);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-brand-text">Manajemen Order Kedai Kopi</h1>
          <p className="text-xs text-brand-muted">Pantau antrean pesanan dapur dan status pembayaran secara real-time</p>
        </div>
        <button className="flex items-center gap-2 rounded-xl bg-brand-maroon px-4 py-2.5 text-xs font-bold text-white shadow hover:bg-brand-maroon-light">
          <Plus size={16} />
          <span>Buat Pesanan Baru</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between border-b border-brand-cream-accent pb-3">
        <div className="flex items-center gap-2">
          {['semua', 'menunggu', 'disiapkan', 'selesai'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`rounded-xl px-4 py-2 text-xs font-semibold capitalize transition-all ${
                filter === tab
                  ? 'bg-brand-maroon text-white shadow'
                  : 'bg-white text-brand-muted border border-brand-cream-accent hover:text-brand-text'
              }`}
            >
              {tab === 'semua' ? 'Semua Order' : tab === 'menunggu' ? 'Menunggu Bayar' : tab === 'disiapkan' ? 'Disiapkan' : 'Selesai'}
            </button>
          ))}
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-brand-muted" size={16} />
          <input
            type="text"
            placeholder="Cari ID Order / No. Meja..."
            className="w-56 rounded-xl border border-brand-cream-accent bg-white py-2 pl-9 pr-4 text-xs focus:border-brand-maroon focus:outline-none"
          />
        </div>
      </div>

      {/* Order List */}
      <div className="grid grid-cols-1 gap-4">
        {filteredOrders.map((order) => (
          <div key={order.id} className="flex items-center justify-between rounded-2xl border border-brand-cream-accent bg-white p-5 shadow-sm">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="rounded bg-brand-maroon px-2 py-0.5 text-xs font-bold text-white">{order.table}</span>
                <span className="text-xs font-semibold text-brand-text">#{order.id}</span>
                <span className="text-[10px] text-brand-muted">• {order.time}</span>
              </div>
              <p className="text-xs text-brand-muted">{order.items}</p>
              <p className="text-sm font-extrabold text-brand-maroon">{order.total}</p>
            </div>
            <div className="flex items-center gap-3">
              {order.status === 'disiapkan' && (
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-[11px] font-bold text-amber-700">
                  <Clock size={12} /> Disiapkan
                </span>
              )}
              {order.status === 'menunggu' && (
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-[11px] font-bold text-blue-700">
                  <AlertCircle size={12} /> Menunggu Bayar
                </span>
              )}
              {order.status === 'selesai' && (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-bold text-emerald-700">
                  <CheckCircle2 size={12} /> Selesai
                </span>
              )}
              <button className="rounded-xl border border-brand-cream-accent bg-brand-cream-card px-3 py-2 text-xs font-bold text-brand-text hover:bg-brand-cream-accent">
                Update Status
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};