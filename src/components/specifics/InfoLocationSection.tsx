import { MapPin, Clock, Phone, Mail } from "lucide-react";

type Props = {
  title?: string;
  subtitle?: string;
  mapSrc?: string;
  address: string;
  hours: string;
  phone: string;
  email: string;
  directionsHref?: string;
};

export default function InfoLocationSection({
  title = "Informasi & Lokasi",
  subtitle = "Kunjungi kami untuk merasakan pengalaman grooming terbaik.",
  mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1147.945542713997!2d100.3974264918706!3d-0.9348295626242749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b9a9090c62bd%3A0x82c5553ee3d4ce73!2sJl.%20Dr.%20Moh.%20Hatta%20No.5%2C%20Ps.%20Ambacang%2C%20Kec.%20Kuranji%2C%20Kota%20Padang%2C%20Sumatera%20Barat%2025152!5e1!3m2!1sen!2sid!4v1760534609069!5m2!1sen!2sid",
  address,
  hours,
  phone,
  email,
  directionsHref,
}: Props) {
  return (
    <section id="info-location" className="w-full bg-[#e8f1f2] py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            {title}
          </h2>
          <p className="mt-3 text-slate-600">{subtitle}</p>
        </div>

        {/* Content */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Map */}
          <div className="rounded-2xl bg-white p-2 shadow-md">
            <div className="relative w-full overflow-hidden rounded-xl">
              <div className="aspect-video w-full">
                <iframe
                  src={mapSrc}
                  title="Lokasi Barbershop"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0 rounded-xl"
                />
              </div>
            </div>
            {directionsHref && (
              <div className="mt-3 flex justify-end">
                <a
                  href={directionsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#1b98e0] px-4 py-2 text-white font-semibold hover:brightness-95"
                >
                  <MapPin className="h-4 w-4" />
                  Petunjuk Arah
                </a>
              </div>
            )}
          </div>

          {/* Info card */}
          <div className="rounded-2xl bg-white p-6 shadow-md">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f1f2]">
                  <MapPin className="h-5 w-5 text-[#1b98e0]" />
                </span>
                <div>
                  <div className="font-semibold text-slate-800">Alamat</div>
                  <div className="text-slate-600">{address}</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f1f2]">
                  <Clock className="h-5 w-5 text-[#1b98e0]" />
                </span>
                <div>
                  <div className="font-semibold text-slate-800">
                    Jam Operasional
                  </div>
                  <div className="text-slate-600">{hours}</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f1f2]">
                  <Phone className="h-5 w-5 text-[#1b98e0]" />
                </span>
                <div>
                  <div className="font-semibold text-slate-800">
                    Telepon & WhatsApp
                  </div>
                  <a
                    href={`tel:${phone}`}
                    className="text-[#1b98e0] hover:underline"
                  >
                    {phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f1f2]">
                  <Mail className="h-5 w-5 text-[#1b98e0]" />
                </span>
                <div>
                  <div className="font-semibold text-slate-800">Email</div>
                  <a
                    href={`mailto:${email}`}
                    className="text-[#1b98e0] hover:underline"
                  >
                    {email}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
