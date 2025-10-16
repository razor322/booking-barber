type PackageKey = "BASIC" | "FULL" | "PREMIUM";
export type PackageType = {
  id: PackageKey;
  name: string;
  price: number;
  highlight?: "popular";
  diff: string[];
};

export const PACKAGES: PackageType[] = [
  {
    id: "BASIC",
    name: "Basic Haircut",
    price: 50000,
    diff: ["Potong standar oleh capster reguler"],
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
  },
  {
    id: "PREMIUM",
    name: "Premium Service",
    price: 120000,
    diff: [
      "Semua di Full Service",
      "Dipangkas oleh capster berpengalaman (senior)",
    ],
  },
];
