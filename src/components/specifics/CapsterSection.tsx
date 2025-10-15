import { AppAssets } from "@/lib/assets";
import { Instagram, Twitter, Facebook } from "lucide-react";

type Social =
  | { type: "instagram"; username: string; url: string }
  | { type: "twitter"; username: string; url: string }
  | { type: "facebook"; username: string; url: string };

export type Capster = {
  id: string;
  name: string;
  photoUrl: string;
  socials: Social[]; // tampilkan username media sosial (utama di index 0)
};

type Props = {
  capsters?: Capster[];
  seeAllHref?: string; // link ke halaman daftar capster
};

function SocialBadge({ s }: { s: Social }) {
  const base = "inline-flex items-center gap-2 text-sm font-medium";
  const iconClass = "h-4 w-4";
  if (s.type === "instagram") {
    return (
      <a
        href={s.url}
        target="_blank"
        rel="noreferrer"
        className={`${base} text-[#1b98e0] hover:underline`}
      >
        <Instagram className={iconClass} /> {s.username}
      </a>
    );
  }
  if (s.type === "twitter") {
    return (
      <a
        href={s.url}
        target="_blank"
        rel="noreferrer"
        className={`${base} text-[#1b98e0] hover:underline`}
      >
        <Twitter className={iconClass} /> {s.username}
      </a>
    );
  }
  return (
    <a
      href={s.url}
      target="_blank"
      rel="noreferrer"
      className={`${base} text-[#1b98e0] hover:underline`}
    >
      <Facebook className={iconClass} /> {s.username}
    </a>
  );
}

const DEFAULT_CAPSTERS: Capster[] = [
  {
    id: "rizky",
    name: "Rizky Maulana",
    photoUrl: AppAssets.images.guy1,
    socials: [
      {
        type: "instagram",
        username: "@rizkycuts",
        url: "https://instagram.com/rizkycuts",
      },
    ],
  },
  {
    id: "bagas",
    name: "Bagas Sanjaya",
    photoUrl: AppAssets.images.guy2,
    socials: [
      {
        type: "twitter",
        username: "@bagasfade",
        url: "https://twitter.com/bagasfade",
      },
    ],
  },
  {
    id: "fajar",
    name: "Fajar Nugraha",
    photoUrl: AppAssets.images.guy3,
    socials: [
      {
        type: "facebook",
        username: "Fajar Grooming",
        url: "https://facebook.com/fajar.grooming",
      },
    ],
  },
];

export default function CapstersSection({
  capsters = DEFAULT_CAPSTERS,
  seeAllHref = "/capsters",
}: Props) {
  return (
    <section id="capsters" className="w-full bg-[#e8f1f2] py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            Temui Para Capster Ahli Kami
          </h2>
          <p className="mt-3 text-slate-600">
            Didedikasikan untuk seni menata rambut dengan presisi dan
            kreativitas.
          </p>
        </div>

        {/* grid */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {capsters.map((c) => (
            <div
              key={c.id}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative h-36 w-36 overflow-hidden rounded-full ring-4 ring-white shadow-md transition group-hover:shadow-lg bg-white">
                <img
                  src={c.photoUrl}
                  alt={c.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-800">
                {c.name}
              </h3>
              {c.socials[0] && (
                <div className="mt-1">
                  <SocialBadge s={c.socials[0]} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* see all */}
        <div className="mt-12 flex justify-center">
          <a
            href={seeAllHref}
            className="rounded-xl px-5 py-3 bg-[#1b98e0] text-white font-semibold hover:brightness-95"
          >
            See all capsters
          </a>
        </div>
      </div>
    </section>
  );
}
