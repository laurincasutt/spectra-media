"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { nav } from "@/data/content";

const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || nav.whatsappNumber;
const WHATSAPP_MESSAGE = nav.whatsappMessage;

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <>
      {/* Floating navbar */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <div className="w-full max-w-5xl flex items-center gap-3">

          {/* Logo — freestanding, outside the pill */}
          <Link href="/" className="shrink-0 flex items-center">
            <Image
              src="/logo-3d.png"
              alt="Spectra Media"
              width={44}
              height={44}
              priority
              className="h-11 w-11 object-contain drop-shadow-[0_0_12px_rgba(0,102,255,0.4)]"
            />
          </Link>

          {/* Nav pill — contains links + actions */}
          <header
            className={`flex-1 flex items-center justify-between px-4 lg:px-5 h-14 rounded-2xl border transition-all duration-300 ${
              scrolled
                ? "bg-[#0A0A0C]/95 backdrop-blur-xl border-white/12 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                : "bg-[#0A0A0C]/80 backdrop-blur-lg border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
            }`}
          >
            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {nav.links.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                      isActive
                        ? "text-white bg-white/10"
                        : "text-[#A1A1AA] hover:text-white hover:bg-white/6"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right: WhatsApp + CTA */}
            <div className="hidden lg:flex items-center gap-2.5">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp kontaktieren"
                className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="#25D366" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <a
                href={nav.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-xl bg-[#0066FF] hover:bg-[#3385FF] text-white text-xs font-semibold transition-all duration-200 shadow-lg shadow-[#0066FF]/25 hover:shadow-[#0066FF]/40"
              >
                {nav.ctaText}
              </a>
            </div>

            {/* Mobile: CTA + WhatsApp + Hamburger */}
            <div className="flex lg:hidden items-center gap-2 ml-auto">
              <a
                href={nav.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3.5 py-1.5 rounded-xl bg-[#0066FF] hover:bg-[#3385FF] text-white text-xs font-semibold transition-colors whitespace-nowrap"
              >
                Erstgespräch buchen
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#25D366]/10"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
                className="flex flex-col justify-center items-center w-8 h-8 gap-1.5"
              >
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </button>
            </div>
          </header>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-[#09090B]/95 backdrop-blur-xl" onClick={() => setMenuOpen(false)} />
        <div className="relative flex flex-col h-full pt-24 px-6 pb-8">
          <nav className="flex flex-col gap-2 flex-1">
            {nav.links.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-4 rounded-xl text-lg font-medium transition-all ${
                    isActive ? "text-white bg-white/10" : "text-[#A1A1AA] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <a
            href={nav.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-4 rounded-full bg-[#0066FF] hover:bg-[#3385FF] text-white text-lg font-semibold transition-colors"
          >
            {nav.ctaText}
          </a>
        </div>
      </div>
    </>
  );
}
