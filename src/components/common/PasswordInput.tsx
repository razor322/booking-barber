import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export default function PasswordInput({
  label,
  className = "",
  ...rest
}: Props) {
  const [visible, setVisible] = useState(false);

  return (
    <label className="block">
      {label && (
        <span className="mb-1 block text-sm font-semibold text-slate-700">
          {label}
        </span>
      )}
      <div className="relative">
        <input
          type={visible ? "text" : "password"}
          className={`w-full rounded-xl border border-slate-200 bg-white px-4 py-3 pr-11 text-slate-800 placeholder-slate-400 shadow-sm focus:border-[#1b98e0] focus:outline-none focus:ring-2 focus:ring-[#1b98e0]/20 ${className}`}
          {...rest}
        />
        <button
          type="button"
          aria-label={
            visible ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"
          }
          onClick={() => setVisible((v) => !v)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
        >
          {visible ? (
            <Eye className="h-5 w-5" />
          ) : (
            <EyeOff className="h-5 w-5" />
          )}
        </button>
      </div>
    </label>
  );
}
