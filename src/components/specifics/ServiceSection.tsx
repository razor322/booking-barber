/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMemo, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { CheckCircle2, Sparkles, Crown, FlameKindling } from "lucide-react";
import clsx from "clsx";

type PackageKey = "BASIC" | "FULL" | "PREMIUM";

const INCLUDED = ["Cuci rambut", "Pomade styling", "Hair tonic"];

const PACKAGES: {
  id: PackageKey;
  name: string;
  price: number;
  highlight?: "popular";
  diff: string[];
  icon: React.ElementType;
}[] = [
  {
    id: "BASIC",
    name: "Basic Haircut",
    price: 50000,
    diff: ["Potong standar oleh capster reguler"],
    icon: FlameKindling,
  },
  {
    id: "FULL",
    name: "Full Service",
    price: 80000,
    highlight: "popular",
    diff: [
      "Semua di Basic",
      "Masker/perawatan singkat",
      "Penataan produk premium",
    ],
    icon: Sparkles,
  },
  {
    id: "PREMIUM",
    name: "Premium Service",
    price: 120000,
    diff: [
      "Semua di Full Service",
      "Dipangkas oleh capster berpengalaman (senior)",
    ],
    icon: Crown,
  },
];

type AddonItem = {
  id: string;
  name: string;
  price: number;
  durationMin: number;
  category: "PERMING" | "ADDITIONAL";
};

const ADDONS: AddonItem[] = [
  {
    id: "curly-perm",
    name: "Curly Perm",
    price: 300000,
    durationMin: 60,
    category: "PERMING",
  },
  {
    id: "straight-perm",
    name: "Straight Perm",
    price: 280000,
    durationMin: 60,
    category: "PERMING",
  },
  {
    id: "creambath",
    name: "Creambath",
    price: 50000,
    durationMin: 30,
    category: "ADDITIONAL",
  },
  {
    id: "shaving",
    name: "Shaving Experience",
    price: 40000,
    durationMin: 30,
    category: "ADDITIONAL",
  },
];

export default function ServiceSection() {
  const [selectedPkg, setSelectedPkg] = useState<PackageKey | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const total = useMemo(() => {
    const pkgPrice = selectedPkg
      ? PACKAGES.find((p) => p.id === selectedPkg)?.price ?? 0
      : 0;
    const addonSum = ADDONS.filter((a) => selectedAddons.includes(a.id)).reduce(
      (s, a) => s + a.price,
      0
    );
    return pkgPrice + addonSum;
  }, [selectedPkg, selectedAddons]);

  const toggleAddon = (id: string) =>
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  return (
    <section id="packages" className="w-full py-16 bg-background">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            Paket Layanan
          </h2>
          <p className="mt-3 text-slate-600">
            Pilih paket yang paling sesuai semua paket sudah <b>termasuk</b> :{" "}
            {INCLUDED.join(", ")}.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PACKAGES.map(({ id, name, price, diff, highlight, icon: Icon }) => {
            const active = selectedPkg === id;
            return (
              <Card
                key={id}
                // className={[
                //   "relative transition  flex flex-col justify-between",
                //   active ? "border-[#1b98e0] shadow-md" : "hover:shadow-md",
                // ].join(" ")}
                className={clsx(
                  "relative transition flex flex-col justify-between",
                  active ? "border-[#1b98e0] shadow-md" : "hover:shadow-md"
                )}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f1f2]">
                        <Icon className="h-5 w-5 text-[#1b98e0]" />
                      </span>
                      <CardTitle className="text-xl">{name}</CardTitle>
                    </div>
                    {highlight === "popular" && (
                      <Badge className="bg-primary hover:bg-accent-foreground text-white text-sm">
                        Best Choice
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="mt-2 text-xl font-extrabold text-slate-900">
                    Rp {price.toLocaleString("id-ID")}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    {INCLUDED.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-slate-700"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-sky-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                    {diff.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-slate-700"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-sky-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button
                    // onClick={() => setSelectedPkg(id)}
                    className={
                      //   active
                      // ? "bg-[#1b98e0]"
                      //     :
                      "w-full bg-[#e8f1f2] text-[#1b98e0] hover:bg-[#d9e9ee]"
                    }
                    variant={active ? "default" : "secondary"}
                    size="lg"
                    aria-pressed={active}
                  >
                    {active ? "Dipilih" : "Pilih Paket"}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Addons */}
      </div>
    </section>
  );
}
