import * as React from "react";
import { Link } from "react-router-dom";
import { Menu, X, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="border-b bg-background sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
             <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
                <Scissors className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl">Gentleman's Cut</span>
             </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground/80 hover:text-primary transition-colors">
              Home
            </Link>
            <a href="#" className="text-foreground/80 hover:text-primary transition-colors">
              Services
            </a>
            <a href="#" className="text-foreground/80 hover:text-primary transition-colors">
              Gallery
            </a>
            <Button asChild>
              <Link to="/book">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted hover:text-primary w-full text-center"
              onClick={closeMenu}
            >
              Home
            </Link>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted hover:text-primary w-full text-center"
              onClick={closeMenu}
            >
              Services
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted hover:text-primary w-full text-center"
              onClick={closeMenu}
            >
              Gallery
            </a>
            <div className="pt-2 w-full px-3">
              <Button asChild className="w-full">
                <Link to="/book" onClick={closeMenu}>Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
