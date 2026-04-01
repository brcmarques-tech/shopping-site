import Link from "next/link";
import Image from "next/image";
import { Share2, MessageCircle, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0d1420] border-t border-[#374151] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center mb-3">
              <Image src="/logo.svg" alt="bcmTech Shopping" width={120} height={40} />
            </Link>
            <p className="text-sm text-[#9ca3af] leading-relaxed">
              O marketplace da sua cidade. Compre produtos e contrate serviços locais com entrega rápida.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-[#f9fafb]">Links rápidos</h3>
            <ul className="space-y-2 text-sm text-[#9ca3af]">
              {[
                { href: "/", label: "Início" },
                { href: "/vendedores", label: "Para Vendedores" },
                { href: "/clientes", label: "Para Clientes" },
                { href: "/planos", label: "Planos" },
                { href: "/faq", label: "FAQ" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[#f97316] transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Vendedores */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-[#f9fafb]">Para Vendedores</h3>
            <ul className="space-y-2 text-sm text-[#9ca3af]">
              <li><Link href="https://shopping.bcmtech.com.br/register" className="hover:text-[#f97316] transition-colors">Criar conta grátis</Link></li>
              <li><Link href="https://shopping.bcmtech.com.br" className="hover:text-[#f97316] transition-colors">Acessar painel</Link></li>
              <li><Link href="/planos" className="hover:text-[#f97316] transition-colors">Ver planos e preços</Link></li>
              <li><Link href="/vendedores" className="hover:text-[#f97316] transition-colors">Como funciona</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-[#f9fafb]">Contato</h3>
            <ul className="space-y-3 text-sm text-[#9ca3af]">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#f97316] shrink-0" />
                <a href="tel:+5553844242444" className="hover:text-[#f97316] transition-colors">+55 53 8442-4244</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#f97316] shrink-0" />
                <a href="mailto:contato@bcmtech.com.br" className="hover:text-[#f97316] transition-colors">contato@bcmtech.com.br</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#f97316] shrink-0" />
                <a href="https://wa.me/5553844242444" target="_blank" rel="noopener noreferrer" className="hover:text-[#f97316] transition-colors">WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-[#374151] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#9ca3af]">
            © {new Date().getFullYear()} bcmTech Shopping. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#9ca3af] hover:text-[#f97316] transition-colors">
              <Share2 className="w-5 h-5" />
            </a>
            <a href="https://wa.me/5553844242444" target="_blank" rel="noopener noreferrer" className="text-[#9ca3af] hover:text-[#f97316] transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
