"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/vendedores", label: "Para Vendedores" },
  { href: "/clientes", label: "Para Clientes" },
  { href: "/planos", label: "Planos" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="bcmTech Shopping" width={130} height={44} priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#f97316] ${
                pathname === link.href ? "text-[#f97316]" : "text-[#9ca3af]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="https://shopping.bcmtech.com.br/register"
            className="text-sm font-medium px-4 py-2 rounded-lg border border-[#f97316] text-[#f97316] hover:bg-[#f97316]/10 transition-colors"
          >
            Cadastre sua loja
          </Link>
          <Link
            href="#download"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-[#f97316] text-white hover:bg-[#ea6c0a] transition-colors"
          >
            Baixe o app
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-[#9ca3af] hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-white/10 px-4 py-4 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-sm font-medium py-2 transition-colors hover:text-[#f97316] ${
                pathname === link.href ? "text-[#f97316]" : "text-[#9ca3af]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
            <Link
              href="https://shopping.bcmtech.com.br/register"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium px-4 py-2 rounded-lg border border-[#f97316] text-[#f97316] text-center hover:bg-[#f97316]/10 transition-colors"
            >
              Cadastre sua loja
            </Link>
            <Link
              href="#download"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium px-4 py-2 rounded-lg bg-[#f97316] text-white text-center hover:bg-[#ea6c0a] transition-colors"
            >
              Baixe o app
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
