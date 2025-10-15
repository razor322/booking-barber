import React from "react";
import { ParkingCircle, Wifi, Snowflake, Music2, Armchair } from "lucide-react";

type Item = { icon: React.ElementType; title: string; desc: string };

const ITEMS: Item[] = [
  {
    icon: ParkingCircle,
    title: "Area Parkir",
    desc: "Parkir luas dan aman untuk kendaraan Anda.",
  },
  {
    icon: Wifi,
    title: "WiFi Gratis",
    desc: "Tetap terhubung dengan koneksi internet cepat.",
  },
  {
    icon: Snowflake,
    title: "Ruangan AC",
    desc: "Suasana sejuk dan nyaman di dalam ruangan.",
  },
  {
    icon: Music2,
    title: "Musik",
    desc: "Alunan musik pilihan untuk menemani Anda.",
  },
  {
    icon: Armchair,
    title: "Ruang Tunggu",
    desc: "Ruang tunggu yang nyaman untuk Anda.",
  },
];

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="w-full bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            Kenyamanan Anda Prioritas Kami
          </h2>
          <p className="mt-3 text-slate-600">
            Kami menyediakan fasilitas lengkap untuk memastikan Anda merasa
            rileks dan nyaman selama berada di Apex Grooming.
          </p>
        </div>

        {/* Inline icons (tanpa card) */}
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {ITEMS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center">
                <Icon className="h-12 w-12 text-[#1b98e0]" />
              </div>
              <div className="font-semibold text-slate-800">{title}</div>
              <div className="mt-1 text-sm leading-relaxed text-slate-600">
                {desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
