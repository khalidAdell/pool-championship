"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "../../../../i18n.config";
import LocaleSwitcher from "./locale-switcher";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Navbar({ lang, table }: { lang: Locale; table: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Navigation links data
  const navLinks = [
    { href: `/${lang}`, label: table.home.home },
    { href: `/${lang}/about`, label: table.navigation.about },
    { href: `/${lang}/life-in-jeddah`, label: table.navigation.lifeInJeddah },
    { href: `/${lang}/media-center`, label: table.navigation.mediaCenter },
    { href: `/${lang}/matchs`, label: table.navigation.matches },
    { href: `/${lang}/contact-us`, label: table.navigation.contactUs },
  ];

  return (
    <header
      className={`fixed top-0 w-full bg-gradient-to-l from-[#0A2A1A]/80 to-[#1A3A2A]/80 text-white z-30 transition-all duration-300 animate-fadeInDown ${
        scrolled ? "py-2 shadow-lg" : "py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center animate-fadeIn">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center">
            <div className="text-white font-bold">
              <div className="flex items-baseline">
                <span className="text-[#D4AF37] text-3xl font-extrabold tracking-wide animate-fadeInRight">
                  WORLD
                </span>
                <span className="text-white text-3xl font-extrabold tracking-wide ml-2 animate-fadeInRight animation-delay-200">
                  POOL
                </span>
              </div>
              <div className="text-sm font-medium text-center mt-[-2px] tracking-[0.2em] text-gray-300 animate-fadeIn animation-delay-300">
                CHAMPIONSHIP
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center animate-fadeIn animation-delay-200">
          <ul className="flex items-center gap-6">
            {navLinks.map((link, index) => {
              return (
                <li
                  key={link.href}
                  className="relative animate-fadeInDown"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <Link
                    href={link.href}
                    className={`text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium text-lg relative group ${
                      pathname === link.href ? "text-[#D4AF37]" : ""
                    }`}
                  >
                    <span>{link.label}</span>
                    {pathname === link.href && (
                      <div className="absolute bottom-[-8px] left-0 right-0 h-[3px] bg-[#D4AF37] rounded-full animate-growWidth" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Language Selector */}
          <div className="ltr:ml-8 rtl:mr-8">
            <LocaleSwitcher lang={lang} />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none hover:text-[#D4AF37] transition-colors duration-300 animate-fadeIn animation-delay-200 hover:scale-110 active:scale-90"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`fixed inset-0 bg-gradient-to-br from-[#0A2A1A] via-[#1A3A2A] to-[#0A2A1A] bg-opacity-98 z-50 flex flex-col items-center justify-center backdrop-blur-sm ${
            isMenuOpen ? "animate-fadeIn" : "animate-fadeOut"
          }`}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-[#D4AF37] transition-colors duration-300 hover:scale-105 active:scale-95"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 animate-rotateIn"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav className="animate-fadeInUp">
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => {
                return (
                  <li
                    key={link.href}
                    className="relative py-3 animate-fadeInUp"
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  >
                    <Link
                      href={link.href}
                      className={`text-white text-2xl font-medium py-3 hover:text-[#D4AF37] transition-colors duration-300 ${
                        pathname === link.href ? "text-[#D4AF37]" : ""
                      }`}
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </Link>
                    {pathname === link.href && (
                      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#D4AF37] rounded-full animate-growWidth" />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Language Selector in Mobile Menu */}
          <div className="mt-12 animate-fadeInUp animation-delay-500">
            <LocaleSwitcher lang={lang} />
          </div>
        </div>
      )}
    </header>
  );
}
