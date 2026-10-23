"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useContent } from "@/hooks/useContent";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";

export default function Navbar() {
  const { nav } = useContent();
  const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || nav.whatsappNumber;
  const WHATSAPP_MESSAGE = nav.whatsappMessage;
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

  // Einzelne Kachel (Logo / Links / Aktionen); verliert beim Scrollen ihren eigenen Rahmen
  const tile = `relative shrink-0 flex items-center rounded-2xl lg:rounded-[18px] border transition-all duration-500 ${EASE} ${
    scrolled
      ? "bg-transparent border-transparent shadow-none h-14 lg:h-[60px] xl:h-[72px]"
      : "bg-[#111113]/70 border-white/10 backdrop-blur-lg shadow-[0_4px_24px_rgba(0,0,0,0.3)] h-[52px] lg:h-14 xl:h-[66px]"
  }`;

  return (
    <>
      {/* ── Header: getrennte Kacheln oben, verschmelzen beim Scrollen zu einer Leiste ── */}
      <div
        className={`fixed left-0 right-0 z-50 flex justify-center px-3 lg:px-7 pointer-events-none transition-[top] duration-500 ${EASE} ${
          scrolled ? "top-2 lg:top-3" : "top-3 lg:top-[26px]"
        }`}
      >
        <div
          className={`relative w-full flex items-center justify-between pointer-events-auto transition-all duration-[600ms] ${EASE} ${
            scrolled ? "lg:max-w-[1100px] gap-0 px-1 lg:px-2" : "lg:max-w-[1160px] min-[1560px]:max-w-[1300px] gap-3"
          }`}
        >
          {/* Gemeinsamer Hintergrund der verschmolzenen Leiste */}
          <div
            aria-hidden="true"
            className={`absolute inset-0 rounded-[18px] lg:rounded-[20px] bg-[#0C0D12]/90 border border-white/12 shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-500 ${EASE} ${
              scrolled ? "opacity-100 scale-100" : "opacity-0 scale-[0.97]"
            }`}
          />

          {/* Logo */}
          <Link href="/" className={`${tile} px-2.5 lg:px-4 gap-2.5`}>
            <Image
              src="/logo-3d.png"
              alt="Spectra Media"
              width={44}
              height={44}
              priority
              className={`object-contain drop-shadow-[0_0_12px_rgba(0,102,255,0.4)] transition-all duration-500 ${EASE} ${
                scrolled ? "h-9 w-9 lg:h-10 lg:w-10" : "h-9 w-9 lg:h-11 lg:w-11"
              }`}
            />
            <span
              className={`hidden min-[1560px]:block overflow-hidden whitespace-nowrap font-bold text-[16px] text-[#F4F4F5] transition-all duration-500 ${
                scrolled ? "max-w-0 opacity-0" : "max-w-[150px] opacity-100"
              }`}
            >
              {nav.logo}
            </span>
          </Link>

          {/* Desktop: Links */}
          <nav className={`${tile} hidden lg:flex px-1.5 xl:px-2 gap-0.5 xl:gap-1`}>
            {nav.links.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 xl:px-4 py-2 xl:py-2.5 rounded-xl text-[13px] xl:text-[14.5px] font-medium whitespace-nowrap transition-all duration-200 ${
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

          {/* Desktop: Sprache, WhatsApp, Kundenlogin, CTA */}
          <div className={`${tile} hidden lg:flex px-2 xl:px-2.5 gap-2 xl:gap-2.5`}>
            <LanguageSwitcher />
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={nav.ariaWhatsApp}
              className="flex items-center justify-center w-9 h-9 xl:w-10 xl:h-10 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" width="19" height="19" fill="#25D366" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
            <a
              href={nav.loginUrl}
              className="inline-flex items-center gap-1.5 px-3 xl:px-3.5 py-2 xl:py-2.5 rounded-xl border border-white/10 text-[#A1A1AA] hover:text-white hover:bg-white/6 hover:border-white/20 text-[13px] xl:text-sm font-medium whitespace-nowrap transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              {nav.loginText}
            </a>
            <a
              href={nav.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 xl:px-5 py-2 xl:py-3 rounded-xl bg-[#0066FF] hover:bg-[#3385FF] text-white text-[13px] xl:text-sm font-semibold whitespace-nowrap transition-all duration-200 shadow-lg shadow-[#0066FF]/25 hover:shadow-[#0066FF]/40"
            >
              {nav.ctaText}
            </a>
          </div>

          {/* Mobile: WhatsApp + Hamburger */}
          <div className={`${tile} lg:hidden px-2 gap-1.5`}>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/8"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? nav.ariaMenuClose : nav.ariaMenuOpen}
              className="flex flex-col justify-center items-center w-9 h-9 gap-[5px]"
            >
              <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
              <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu Overlay ── */}
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
          <div className="flex justify-center mb-4">
            <LanguageSwitcher />
          </div>
          <a
            href={nav.loginUrl}
            className="w-full flex items-center justify-center gap-2 py-4 mb-3 rounded-full border border-white/15 text-white text-lg font-medium hover:bg-white/5 transition-colors"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            {nav.loginText}
          </a>
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
