// src/lib/constants.ts

import { BadgeCheck, CalendarCheck2, Scissors } from "lucide-react";

export const AppConst = {
  navLinks: [
    { title: "Home", path: "/" },
    { title: "Booking", path: "/booking" },
    { title: "About Us", path: "/about" },
  ],
  hero: {
    title: "Gaya Rambut Premium, Pelayanan Maksimal",
    subtitle: "Booking jadwal Anda dengan capster terbaik di kota.",
  },
  companyInfo: {
    phone: "0812-3456-7890",
    address: "Jl. Pahlawan No. 123, Padang",
  },
  websiteName: "Apex Barber",
  currentYear: new Date().getFullYear(),
};

export const FEATURES = [
  {
    icon: Scissors,
    title: "Capster Profesional",
    desc: "Tim capster berpengalaman dengan keahlian tinggi dalam berbagai gaya rambut.",
  },
  {
    icon: CalendarCheck2,
    title: "Reservasi Mudah",
    desc: "Pesan jadwal potong rambut Anda kapan saja, di mana saja melalui website kami.",
  },
  {
    icon: BadgeCheck,
    title: "Kualitas Premium",
    desc: "Kami menggunakan produk dan peralatan terbaik untuk perawatan rambut Anda.",
  },
];
