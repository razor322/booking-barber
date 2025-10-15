// src/pages/NotFound.tsx
import { Link } from "react-router-dom";
import { Scissors, RefreshCw } from "lucide-react";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 — Halaman Tidak Ditemukan";
  }, []);

  return (
    <main className="   min-h-screen     bg-slate-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl rounded-2xl bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-center gap-3 text-[#1b98e0]">
          <Scissors className="h-10 w-10" />
          <span className="text-6xl font-extrabold text-slate-900">404</span>
          <RefreshCw className="h-10 w-10" />
        </div>

        <h1 className="mt-4 text-center text-2xl font-bold text-slate-800">
          Oops! Halaman Tidak Ditemukan
        </h1>
        <p className="mt-2 text-center text-slate-600">
          Halaman yang Anda cari sepertinya sedang potong rambut atau sudah
          tidak ada. Mari kami antar Anda kembali.
        </p>

        <div className="mt-6 flex justify-center">
          <Link
            to="/"
            className="rounded-lg bg-[#1b98e0] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1782c2]"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </main>
  );
}
