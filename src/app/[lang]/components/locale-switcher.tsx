"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n, Locale } from "../../../../i18n.config";

export default function LocaleSwitcher({ lang }: { lang: Locale }) {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";

    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="flex items-center bg-[#D4AF37] hover:bg-[#B8941F] transition-colors duration-300 rounded-full px-4 py-2 cursor-pointer shadow-lg">
      {i18n.locales.map((locale) => {
        return (
          lang !== locale && (
            <Link
              key={locale}
              href={redirectedPathName(locale)}
              className="flex items-center text-black font-bold text-sm tracking-wide"
            >
              {locale === "ar" ? "العربية" : "English"}
              {locale === "ar" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-black ml-2 rtl:mr-2 rtl:ml-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              )}
              {locale === "en" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-black ml-2 rtl:mr-2 rtl:ml-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              )}
            </Link>
          )
        );
      })}
    </div>
  );
}
