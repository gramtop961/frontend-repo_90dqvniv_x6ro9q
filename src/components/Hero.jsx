import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs text-slate-600 shadow-sm backdrop-blur">
            Modern living • Luxury • Urban
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
            Elevate your lifestyle with curated, contemporary spaces
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            We help you find extraordinary homes in the heart of the city — thoughtfully designed interiors, skyline views, and investment-ready properties.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#/portfolio"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-white font-medium hover:bg-slate-800 transition-colors"
            >
              Explore Portfolio
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#/about"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-slate-800 font-medium hover:bg-slate-50 transition-colors"
            >
              About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
