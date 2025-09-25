import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { AppConst } from "@/lib/constans";

export default function Navbar() {
  return (
    <header className="bg-secondary sticky top-0 z-50 ">
      <div className="container mx-auto flex h-16 items-center justify-between p-4">
        {/* Nama Website */}
        <Link to="/" className="text-xl font-bold text-primary tracking-tight">
          {AppConst.websiteName}
        </Link>

        {/* Menu Navigasi */}
        <nav className="hidden items-center space-x-2 md:flex">
          <Button variant="ghost" asChild>
            <Link to="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/about">About Us</Link>
          </Button>
          <Button variant="default" asChild>
            <Link className="text-white" to="/booking">
              Booking Now
            </Link>
          </Button>
        </nav>

        {/* Tombol Menu untuk Mobile (fungsionalitas bisa ditambahkan nanti) */}
        <div className="md:hidden">
          <Button variant="outline" size="icon">
            {/* Icon Menu bisa ditaruh di sini, contohnya dari lucide-react */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
}
