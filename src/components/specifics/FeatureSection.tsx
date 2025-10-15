import { FEATURES } from "@/lib/constans";

export default function FeatureSection() {
  return (
    <section className="bg-secondary text-dark mb-4 md:mb-8 w-full pb-4">
      <div className=" mx-auto w-full px-8 py-12 md:py-16">
        {/* header */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-800">
            Fitur Unggulan Kami
          </h1>
          <p className="mt-4 text-slate-800 font-medium">
            Dapatkan pengalaman potong rambut terbaik dengan capster profesional
            kami. Booking jadwal Anda sekarang untuk tampilan yang sempurna.
          </p>
        </div>
        {/* content */}
        <div className="w-full mt-10 flex flex-col md:flex-row items-stretch justify-between gap-6">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#e8f1f2]">
                <Icon className="h-12 w-12 text-sky-500" />
              </div>
              <h3 className="text-center text-lg font-semibold text-slate-800">
                {title}
              </h3>
              <p className="mt-2 text-center text-base leading-relaxed text-slate-600">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
