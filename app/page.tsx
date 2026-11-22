"use client";

import Image from "next/image";
import SmoothTitle from "@/components/SmoothTitle";

const TOP_GALLERY = [
  { id: 1, src: "/images/gmb1.png", alt: "Monokrom Hair Studio Editorial 1", mobile: true },
  { id: 2, src: "/images/gmb2.png", alt: "Monokrom Hair Studio Editorial 2", mobile: true },
  { id: 3, src: "/images/gmb3.png", alt: "Monokrom Hair Studio Editorial 3", mobile: false },
  { id: 4, src: "/images/gmb4.png", alt: "Monokrom Hair Studio Editorial 4", mobile: false },
];

const BOTTOM_GALLERY = [
  { id: 5, src: "/images/gmb5.png", alt: "Monokrom Hair Studio Editorial 5", mobile: true },
  { id: 6, src: "/images/gmb6.png", alt: "Monokrom Hair Studio Editorial 6", mobile: true },
  { id: 7, src: "/images/gmb7.png", alt: "Monokrom Hair Studio Editorial 7", mobile: false },
  { id: 8, src: "/images/gmb8.png", alt: "Monokrom Hair Studio Editorial 8", mobile: false },
];

export default function ComingSoonPage() {
  return (
    <div className="bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white antialiased overflow-x-hidden min-h-screen flex flex-col justify-between py-4 sm:py-6 px-3 sm:px-6">
      {/* Top Gallery Row: 2 Photos on Mobile, 4 Photos on Tablet/Desktop */}
      <section aria-label="Creative Visuals Top Gallery" className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 overflow-hidden">
          {TOP_GALLERY.map((item) => (
            <div
              key={item.id}
              className={`relative aspect-[3/4] overflow-hidden bg-neutral-100 rounded-sm group cursor-pointer shadow-sm ${
                item.mobile ? "block" : "hidden sm:block"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="w-full h-full object-cover grayscale-image"
                priority={item.id <= 2}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Center Hero Section */}
      <section className="my-auto py-8 sm:py-12 md:py-16 text-center select-none px-2 flex flex-col items-center justify-center">
        {/* Big Bold Statement with Smooth Calm GSAP Reveal */}
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
          <SmoothTitle className="coming-soon-title tracking-tighter" />

          {/* Elegant Sub-headline Branding */}
          <div className="mt-4 sm:mt-6 text-center">
            <h2 className="sub-brand-title text-sm sm:text-lg md:text-xl uppercase">
              MONOKROM HAIR STUDIO
            </h2>
            <p className="mt-1.5 text-[11px] sm:text-xs uppercase tracking-[0.22em] text-neutral-400 font-light">
              Editorial Hair Artistry • Contemporary Aesthetics
            </p>
          </div>
        </div>

        {/* Action Buttons: Cabang 1, Cabang 2, dan Logo Instagram */}
        <div className="mt-8 flex flex-row items-center justify-center gap-3">
          <a
            href="https://maps.app.goo.gl/DkHWcr5at7KUSmh56?g_st=ic"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-3 bg-neutral-900 text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-neutral-800 active:scale-95 transition-all shadow-sm rounded-none border border-neutral-900 text-center min-w-[120px] sm:min-w-[140px]"
          >
            CABANG 1
          </a>
          <a
            href="https://maps.app.goo.gl/iy3XtNkwZYRsdbW76?g_st=ic"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-3 bg-white text-neutral-900 text-xs uppercase tracking-[0.2em] font-medium hover:bg-neutral-100 active:scale-95 transition-all shadow-sm rounded-none border border-neutral-900 text-center min-w-[120px] sm:min-w-[140px]"
          >
            CABANG 2
          </a>
          <a
            href="https://www.instagram.com/monokromhairstudio?knvt=MWp5aDJjcDZjbDVoMw=="
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram Resmi @monokromhairstudio"
            aria-label="Instagram Monokrom Hair Studio"
            className="w-[42px] h-[42px] bg-neutral-900 text-white hover:bg-neutral-800 active:scale-95 transition-all shadow-sm rounded-none border border-neutral-900 flex items-center justify-center group flex-shrink-0"
          >
            <svg
              className="w-4 h-4 fill-none stroke-current stroke-[2] group-hover:scale-110 transition-transform"
              viewBox="0 0 24 24"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>
      </section>

      {/* Bottom Gallery Row: 2 Photos on Mobile, 4 Photos on Tablet/Desktop */}
      <section aria-label="Creative Visuals Bottom Gallery" className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 overflow-hidden">
          {BOTTOM_GALLERY.map((item) => (
            <div
              key={item.id}
              className={`relative aspect-[3/4] overflow-hidden bg-neutral-100 rounded-sm group cursor-pointer shadow-sm ${
                item.mobile ? "block" : "hidden sm:block"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="w-full h-full object-cover grayscale-image"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
