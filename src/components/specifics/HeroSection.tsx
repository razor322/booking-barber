import { Button } from "../ui/button";
import { AppAssets } from "@/lib/assets";
import { AppConst } from "@/lib/constans";
import { redirect } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="bg-secondary text-dark py-16 md:py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4">
        {/* Konten Kiri: Title, Subtitle, Button */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-primary">
            {AppConst.websiteName} <br /> Gaya Klasik, Sentuhan Modern.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-md mx-auto md:mx-0">
            Dapatkan pengalaman potong rambut terbaik dengan capster profesional
            kami. Booking jadwal Anda sekarang untuk tampilan yang sempurna.
          </p>
          <div className="mt-8 text-white">
            <Button
              onClick={() => redirect("/booking")}
              variant="default"
              className="px-8 py-6 text-lg"
            >
              Booking Sekarang
            </Button>
            <Button
              variant="outline"
              className="ml-4 px-8 py-6 text-lg border-primary text-primary hover:bg-primary hover:text-white"
            >
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>

        {/* Konten Kanan: Gambar */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={AppAssets.images.hero}
            alt="Barber working on a client, representing Apex Grooming"
            className="w-full h-auto rounded-lg shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
