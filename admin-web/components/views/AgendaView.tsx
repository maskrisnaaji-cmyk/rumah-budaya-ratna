"use client";

import React from 'react';
import { Calendar, Ticket, Plus, Users, MapPin } from 'lucide-react';

export const AgendaView = () => {
  const events = [
    { id: 1, title: 'Prasasti Trowulan & Diskusi Artefak', date: 'Sabtu, 28 September 2026', time: '15:00 - 18:00 WIB', location: 'Pendopo Utama RBR', price: 'Rp 35.000', sold: 42, total: 50, status: 'Aktif' },
    { id: 2, title: 'Lokakarya Batik Tulis Canting Tradisional', date: 'Minggu, 29 September 2026', time: '09:00 - 12:00 WIB', location: 'Galeri Kriya RBR', price: 'Rp 75.000', sold: 30, total: 30, status: 'Penuh' },
    { id: 3, title: 'Malam Pagelaran Wayang Kulit Melenial', date: 'Sabtu, 05 Oktober 2026', time: '19:30 - Selesai', location: 'Halaman Kebun RBR', price: 'Rp 50.000', sold: 18, total: 100, status: 'Aktif' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-brand-text">Agenda Budaya & Kuota Tiket</h1>
          <p className="text-xs text-brand-muted">Atur penjadwalan acara kebudayaan dan pantau kuota penonton</p>
        </div>
        <button className="flex items-center gap-2 rounded-xl bg-brand-gold px-4 py-2.5 text-xs font-bold text-brand-maroon shadow hover:bg-amber-400">
          <Plus size={16} />
          <span>Tambah Event Baru</span>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {events.map((event) => {
          const percentage = Math.round((event.sold / event.total) * 100);
          return (
            <div key={event.id} className="flex flex-col justify-between rounded-2xl border border-brand-cream-accent bg-white p-5 shadow-sm">
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                    event.status === 'Penuh' ? 'bg-rose-100 text-rose-700' : 'bg-emerald-100 text-emerald-700'
                  }`}>
                    {event.status}
                  </span>
                  <span className="text-xs font-extrabold text-brand-maroon">{event.price}</span>
                </div>

                <h3 className="text-sm font-bold text-brand-text leading-snug">{event.title}</h3>
                
                <div className="mt-3 space-y-1.5 text-xs text-brand-muted">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-brand-maroon" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-brand-maroon" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-brand-cream-accent pt-4">
                <div className="mb-1 flex justify-between text-xs font-medium">
                  <span className="text-brand-muted">Tiket Terjual</span>
                  <span className="font-bold text-brand-text">{event.sold} / {event.total} ({percentage}%)</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-brand-cream-accent">
                  <div className="h-full bg-brand-maroon rounded-full" style={{ width: `${percentage}%` }}></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};