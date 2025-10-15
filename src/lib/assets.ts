// src/lib/assets.ts

// --- IMAGES ---
// Impor semua gambar yang Anda butuhkan di sini
import heroImage from "@/assets/images/barber-hero.jpg";
import guy1 from "@/assets/images/guy1.webp";
import guy2 from "@/assets/images/guy2.webp";
import guy3 from "@/assets/images/guy3.webp";
import user from "@/assets/images/user.png";
import logo from "@/assets/images/logo.png";

// import logo from "@/assets/images/logo.svg";

// --- ICONS ---
// Contoh jika Anda punya ikon
// import a from '@/assets/icons/a.svg';

// Ekspor semua aset dalam satu objek agar mudah diakses
export const AppAssets = {
  images: {
    hero: heroImage,
    guy1: guy1,
    guy2: guy2,
    guy3: guy3,
    user: user,
    logo: logo,
  },
  icons: {
    // a: iconA,
  },
};
