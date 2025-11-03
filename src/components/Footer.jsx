import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-slate-900 text-white grid place-content-center font-semibold">RA</div>
              <div className="font-semibold text-slate-900">Riverview Estates</div>
            </div>
            <p className="mt-3 text-sm text-slate-600 max-w-sm">
              Boutique real estate agency specializing in modern luxury properties and interior-forward spaces across the city.
            </p>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-slate-500" /> +1 (234) 567-8901</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-slate-500" /> hello@riverviewestates.com</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-slate-500" /> 123 Skyline Ave, Metropolis</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Links</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li><a className="hover:text-slate-900" href="#/">Home</a></li>
              <li><a className="hover:text-slate-900" href="#/portfolio">Portfolio</a></li>
              <li><a className="hover:text-slate-900" href="#/about">About</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-xs text-slate-500">© {new Date().getFullYear()} Riverview Estates. All rights reserved.</div>
      </div>
    </footer>
  );
}
