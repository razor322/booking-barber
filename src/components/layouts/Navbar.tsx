import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { AppConst } from "@/lib/constans";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

import { AppAssets } from "@/lib/assets";

const NAV_ITEMS = [
  { to: "/", label: "Beranda" },
  { to: "/layanan", label: "Layanan" },
  { to: "/capster", label: "Capster" },
  { to: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-all",
        scrolled
          ? "bg-[#e8f1f2]/80 backdrop-blur supports-[backdrop-filter]:bg-[#e8f1f2]/60 shadow-sm"
          : "bg-[#e8f1f2]",
      ].join(" ")}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <img src={AppAssets.images.logo} alt="Logo" className="h-6 w-6" />
          <Link
            to="/"
            className="text-lg font-semibold text-slate-800 tracking-tight hover:text-[#1b98e0]"
          >
            {AppConst.websiteName}
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className={[
                "text-sm font-medium hover:text-[#1b98e0]",
                location.pathname === it.to
                  ? "text-[#1b98e0]"
                  : "text-slate-700",
              ].join(" ")}
            >
              {it.label}
            </Link>
          ))}
        </nav>

        {/* CTA + avatar (desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            asChild
            className="bg-[#1b98e0] text-white hover:bg-[#1782c2] shadow-sm"
          >
            <Link to="/booking">Booking Sekarang</Link>
          </Button>
          <Link to="/auth/login">
            <img
              src={AppAssets.images.user}
              alt="User"
              className="h-8 w-8 rounded-full border border-white object-cover"
            />
          </Link>
        </div>

        {/* Mobile drawer */}
        <div className="md:hidden ">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="bg-white">
                <Menu className="h-5 w-5 text-slate-700" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-80 p-0 bg-white shadow-lg z-[9999] overflow-y-auto border-l border-slate-200"
            >
              <SheetHeader className="px-4 py-4">
                <SheetTitle className="flex items-center gap-2">
                  <img
                    src={AppAssets.images.logo}
                    alt="Logo"
                    className="h-6 w-6"
                  />
                  <span>{AppConst.websiteName}</span>
                </SheetTitle>
                <SheetDescription className="text-slate-500">
                  Navigasi cepat
                </SheetDescription>
              </SheetHeader>

              <Separator />

              <nav className="flex flex-col p-2">
                <Link
                  to="/"
                  className={[
                    "rounded-lg px-4 py-3 text-sm font-medium",
                    location.pathname === "/"
                      ? "bg-[#e8f1f2] text-[#1b98e0]"
                      : "text-slate-700 hover:bg-slate-100",
                  ].join(" ")}
                >
                  Beranda
                </Link>
                <Link
                  to="/layanan"
                  className={[
                    "rounded-lg px-4 py-3 text-sm font-medium",
                    location.pathname === "/layanan"
                      ? "bg-[#e8f1f2] text-[#1b98e0]"
                      : "text-slate-700 hover:bg-slate-100",
                  ].join(" ")}
                >
                  Layanan
                </Link>

                {/* Submenu Capster di mobile */}
                <div className="px-2 pt-2 text-xs font-semibold text-slate-500">
                  Capster
                </div>
                <Link
                  to="/capster"
                  className="rounded-lg px-4 py-2 text-sm hover:bg-slate-100"
                >
                  Semua Capster
                </Link>
                <Link
                  to="/capster/favorit"
                  className="rounded-lg px-4 py-2 text-sm hover:bg-slate-100"
                >
                  Favorit Saya
                </Link>
                <Link
                  to="/capster/tersedia-hari-ini"
                  className="rounded-lg px-4 py-2 text-sm hover:bg-slate-100"
                >
                  Tersedia Hari Ini
                </Link>
                <Link
                  to="/capster/jadwal"
                  className="rounded-lg px-4 py-2 text-sm hover:bg-slate-100"
                >
                  Jadwal Capster
                </Link>
              </nav>

              <Separator />

              <div className="p-4 flex items-center justify-between gap-3">
                <Button
                  asChild
                  className="flex-1 bg-[#1b98e0] text-white hover:bg-[#1782c2]"
                >
                  <Link to="/booking">Booking Sekarang</Link>
                </Button>
                <img
                  src={AppAssets.images.logo}
                  alt="User"
                  className="h-9 w-9 rounded-full border border-white object-cover"
                />
              </div>

              <div className="px-4 pb-4 text-xs text-slate-400">
                © {AppConst.currentYear} {AppConst.websiteName}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
