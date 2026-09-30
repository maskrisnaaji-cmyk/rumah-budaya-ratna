"use client";

import React from 'react';
import { BookOpen, Plus, Search, BookMarked, Clock } from 'lucide-react';

export const PustakaView = () => {
  const books = [
    { code: 'NSS-001', title: 'Dokuemn Jibril', category: 'Naskah Kuno', status: 'Tersedia', borrower: '-' },
    { code: 'NSS-008', title: 'Anjing-Anjing Menyerbu Lek Zul', category: 'Sejarah', status: 'Dipinjam', borrower: 'Dimas Anggara' },
    { code: 'NSS-012', title: 'Lipstik di Tas Doni', category: 'Seni & Budaya', status: 'Dipinjam', borrower: 'Siti Rahma' },
    { code: 'NSS-015', title: 'Laki-Laki yang Menikah dengan Peri', category: 'Linguistik', status: 'Tersedia', borrower: '-' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-brand-text">Pustaka & Katalog Naskah</h1>
          <p className="text-xs text-brand-muted">Kelola koleksi naskah kuno, buku sejarah, dan aktivitas peminjaman</p>
        </div>
        <button className="flex items-center gap-2 rounded-xl bg-brand-maroon px-4 py-2.5 text-xs font-bold text-white shadow hover:bg-brand-maroon-light">
          <Plus size={16} />
          <span>Tambah Judul Pustaka</span>
        </button>
      </div>

      <div className="rounded-2xl border border-brand-cream-accent bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <div className="relative w-72">
            <Search className="absolute left-3 top-2.5 text-brand-muted" size={16} />
            <input
              type="text"
              placeholder="Cari judul buku atau nama peminjam..."
              className="w-full rounded-xl border border-brand-cream-accent bg-brand-cream-card py-2 pl-9 pr-4 text-xs focus:border-brand-maroon focus:outline-none"
            />
          </div>
          <span className="text-xs font-semibold text-brand-muted">Total: 124 Judul Terdata</span>
        </div>

        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-brand-cream-accent text-brand-muted">
              <th className="py-3 px-2">Kode Buku</th>
              <th className="py-3 px-2">Judul Pustaka</th>
              <th className="py-3 px-2">Kategori</th>
              <th className="py-3 px-2">Status</th>
              <th className="py-3 px-2">Peminjam saat ini</th>
              <th className="py-3 px-2 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-cream-accent">
            {books.map((buku) => (
              <tr key={buku.code} className="hover:bg-brand-cream-card/50">
                <td className="py-3.5 px-2 font-bold text-brand-maroon">{buku.code}</td>
                <td className="py-3.5 px-2 font-semibold text-brand-text">{buku.title}</td>
                <td className="py-3.5 px-2 text-brand-muted">{buku.category}</td>
                <td className="py-3.5 px-2">
                  <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                    buku.status === 'Tersedia' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {buku.status}
                  </span>
                </td>
                <td className="py-3.5 px-2 text-brand-text">{buku.borrower}</td>
                <td className="py-3.5 px-2 text-right">
                  <button className="text-xs font-bold text-brand-maroon hover:underline">Detail</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};