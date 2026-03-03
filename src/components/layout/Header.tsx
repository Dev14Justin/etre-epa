"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "La Méthode", href: "/la-methode" },
    { name: "Nos Programmes", href: "/nos-programmes" },
    { name: "À Propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <img
                src="/LOGO.png"
                alt="Entrepreneurs Épanouis"
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  isActive(link.href)
                    ? "text-primary font-bold"
                    : "text-gray-700 font-medium"
                } hover:text-primary transition-colors`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/diagnostic"
              className="bg-primary hover:bg-primary-light text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
            >
              Audit de Croissance
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-3 text-base rounded-md transition-colors ${
                  isActive(link.href)
                    ? "text-primary bg-primary/5 font-bold"
                    : "text-gray-700 font-medium hover:text-primary hover:bg-gray-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/diagnostic"
              className="block w-full text-center mt-4 bg-primary text-white px-5 py-3 rounded-full font-medium hover:bg-primary-light"
              onClick={() => setIsMenuOpen(false)}
            >
              Audit de Croissance
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
