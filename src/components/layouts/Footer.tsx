import { AppConst } from "@/lib/constans";

export default function Footer() {
  return (
    <footer className="bg-dark text-secondary">
      <div className="container mx-auto grid grid-cols-1 gap-8 p-8 md:grid-cols-3 ">
        {/* Kolom Nama & Deskripsi */}
        <div>
          <h3 className="text-lg font-bold text-white">
            {AppConst.websiteName}
          </h3>
          <p className="mt-2 text-sm">
            Pengalaman potong rambut premium untuk pria modern.
          </p>
        </div>

        {/* Kolom Kontak */}
        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Jl. Pahlawan No. 123, Padang</li>
            <li>(0751) 123-456</li>
            <li>contact@apexgrooming.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 bg-dark py-4 text-center text-xs text-gray-400">
        <p>
          &copy; {AppConst.currentYear} {AppConst.websiteName}. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
