"use client";

import React from 'react';
import { Users, Tag, Plus, CheckCircle, ShieldCheck } from 'lucide-react';

export const AnggotaView = () => {
  const members = [
    { name: 'Bambang Triyono', email: 'bambang@gmail.com', role: 'Member Reguler', visits: '12x Kunjungan', status: 'Terverifikasi' },
    { name: 'Dewi Lestari', email: 'dewi.l@gmail.com', role: 'Member VIP', visits: '28x Kunjungan', status: 'Terverifikasi' },
    { name: 'Ahmad Subagyo', email: 'ahmad.subagyo@yahoo.com', role: 'Member Reguler', visits: '3x Kunjungan', status: 'Menunggu Verifikasi' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-brand-text">Keanggotaan & Kode Promo</h1>
          <p className="text-xs text-brand-muted">Kelola data member komunitas kebudayaan dan diskon khusus</p>
        </div>
        <button className="flex items-center gap-2 rounded-xl bg-brand-gold px-4 py-2.5 text-xs font-bold text-brand-maroon shadow hover:bg-amber-400">
          <Plus size={16} />
          <span>Buat Kupon Promo</span>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* List Anggota */}
        <div className="rounded-2xl border border-brand-cream-accent bg-white p-5 shadow-sm">
          <h3 className="mb-3 text-sm font-bold text-brand-text">Anggota Terbaru</h3>
          <div className="space-y-3">
            {members.map((m, i) => (
              <div key={i} className="flex items-center justify-between rounded-xl border border-brand-cream-accent bg-brand-cream-card p-3">
                <div>
                  <h4 className="text-xs font-bold text-brand-text">{m.name}</h4>
                  <p className="text-[10px] text-brand-muted">{m.email} • {m.visits}</p>
                </div>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                  m.status === 'Terverifikasi' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                }`}>
                  {m.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Kupon Promo Aktif */}
        <div className="rounded-2xl border border-brand-cream-accent bg-white p-5 shadow-sm">
          <h3 className="mb-3 text-sm font-bold text-brand-text">Kupon Promo Aktif</h3>
          <div className="space-y-3">
            <div className="rounded-xl border border-dashed border-brand-maroon bg-rose-50/50 p-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-extrabold text-sm text-brand-maroon tracking-wider">BUDAYAKU20</span>
                  <p className="text-xs text-brand-muted mt-0.5">Diskon 20% untuk Tiket Event Budaya</p>
                </div>
                <span className="text-[10px] font-bold bg-brand-maroon text-white px-2 py-0.5 rounded">Aktif</span>
              </div>
            </div>
            <div className="rounded-xl border border-dashed border-amber-600 bg-amber-50/50 p-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-extrabold text-sm text-amber-800 tracking-wider">KOPIKULTUR</span>
                  <p className="text-xs text-brand-muted mt-0.5">Potongan Rp 10.000 untuk transaksi Kedai</p>
                </div>
                <span className="text-[10px] font-bold bg-amber-700 text-white px-2 py-0.5 rounded">Aktif</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};