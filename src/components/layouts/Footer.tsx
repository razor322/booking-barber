import { Facebook, Instagram, Twitter } from "lucide-react";
import { AppConst } from "@/lib/constans";

export default function Footer() {
  return (
    <footer className="bg-[#1a2430] text-[#e8f1f2]">
      {/* main section */}
      <div className="w-full grid grid-cols-1 gap-10 px-6 py-12 md:grid-cols-3">
        {/* kolom 1 */}
        <div>
          <h3 className="text-lg font-bold text-white">
            {AppConst.websiteName}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[#cbd5e1]">
            Gaya klasik dengan sentuhan modern untuk pria masa kini. Kualitas,
            kenyamanan, dan kepercayaan diri adalah prioritas kami.
          </p>
        </div>

        {/* kolom 2 */}
        <div>
          <h4 className="text-base font-semibold text-white">Navigasi</h4>
          <ul className="mt-3 space-y-2 text-sm text-[#cbd5e1]">
            <li>
              <a href="#features" className="hover:text-white">
                Fitur
              </a>
            </li>
            <li>
              <a href="#packages" className="hover:text-white">
                Paket
              </a>
            </li>
            <li>
              <a href="#capsters" className="hover:text-white">
                Capster
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Kontak
              </a>
            </li>
          </ul>
        </div>

        {/* kolom 3 */}
        <div>
          <h4 className="text-base font-semibold text-white">Ikuti Kami</h4>
          <div className="mt-3 flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-2 hover:bg-[#243042] transition"
            >
              <Facebook className="h-5 w-5 text-[#e8f1f2]" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-2 hover:bg-[#243042] transition"
            >
              <Instagram className="h-5 w-5 text-[#e8f1f2]" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-2 hover:bg-[#243042] transition"
            >
              <Twitter className="h-5 w-5 text-[#e8f1f2]" />
            </a>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="border-t border-[#2e3a4b] py-4 text-center text-xs text-[#94a3b8]">
        © {AppConst.currentYear} {AppConst.websiteName}. Didesain dengan penuh
        gaya.
      </div>
    </footer>
  );
}
