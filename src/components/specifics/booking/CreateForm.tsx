import { Calendar } from "@/components/ui/calendar";
import { CAPSTERS } from "@/data/types/CapsterTypes";
import { PACKAGES } from "@/data/types/PackageTypes";
import { useState } from "react";

export function BookingForm() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <form action="">
      <div className="rounded-md bg-amber-500 p-4 md:p-6 mx-60">
        <div className="flex md:flex-row md:gap-6  justify-center-safe bg-red-200">
          {PACKAGES.map(({ id, name, price }) => (
            <div
              key={id}
              className="w-full flex flex-row items-center bg-gray-50  rounded-lg p-4 text-black hover:outline-3 hover:outline-alternate cursor-pointer "
            >
              <div />
              <div className="flex flex-col gap-1 ">
                <h3 className="font-semibold">{name}</h3>
                <p className="text-sm text-gray-500">
                  IDR {price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-row sm:grid-cols-2 lg:grid-cols-3 ">
          {CAPSTERS.map((c) => (
            <div
              key={c.id}
              className="w-[200px] group flex flex-col items-center text-center "
            >
              <div className="relative h-24 w-24 overflow-hidden rounded-full ring-3 ring-white shadow-md transition group-hover:shadow-lg bg-white mt-2">
                <img
                  src={c.photoUrl}
                  alt={c.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-slate-800">
                {c.name}
              </h3>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-center mt-6">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-lg border"
          />
        </div>
      </div>
    </form>
  );
}
