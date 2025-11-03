import React from 'react';
import { Home, LayoutGrid, Info, Phone } from 'lucide-react';

const NavLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
  >
    <Icon className="h-4 w-4" />
    <span>{label}</span>
  </a>
);

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border border-white/50 shadow-sm rounded-xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#/" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-slate-900 text-white grid place-content-center font-semibold">
                RA
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-slate-900">Riverview Estates</span>
                <span className="text-xs text-slate-500">Realty & Interiors</span>
              </div>
            </a>
            <nav className="hidden md:flex items-center gap-1">
              <NavLink href="#/" icon={Home} label="Home" />
              <NavLink href="#/portfolio" icon={LayoutGrid} label="Portfolio" />
              <NavLink href="#/about" icon={Info} label="About" />
            </nav>
            <div className="flex items-center gap-2">
              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
