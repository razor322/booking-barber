import React, { useState } from "react";
import { Link } from "react-router-dom";
import PasswordInput from "@/components/common/PasswordInput";

export default function LoginPage() {
  const [form, setForm] = useState({ phone: "", password: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: kirim ke API login
    console.log("LOGIN", form);
  };

  return (
    <main className="min-h-[80vh] bg-slate-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="text-center text-2xl md:text-3xl font-extrabold text-slate-900">
          Masuk
        </h1>
        <p className="mt-1 text-center text-sm text-slate-500">
          Selamat datang kembali.
        </p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-slate-700">
              Nomor Telepon
            </span>
            <input
              name="phone"
              value={form.phone}
              onChange={onChange}
              placeholder="Masukkan nomor telepon Anda"
              inputMode="tel"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 shadow-sm focus:border-[#1b98e0] focus:outline-none focus:ring-2 focus:ring-[#1b98e0]/20"
            />
          </label>

          <PasswordInput
            label="Kata Sandi"
            name="password"
            value={form.password}
            onChange={onChange}
            placeholder="Masukkan kata sandi"
          />

          <button
            type="submit"
            className="mt-2 w-full rounded-xl bg-[#1b98e0] px-4 py-3 font-semibold text-white shadow hover:bg-[#1782c2]"
          >
            Masuk
          </button>

          <p className="text-center text-sm text-slate-500">
            Belum punya akun?{" "}
            <Link
              to="/auth/register"
              className="font-semibold text-[#1b98e0] hover:underline"
            >
              Daftar sekarang
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
