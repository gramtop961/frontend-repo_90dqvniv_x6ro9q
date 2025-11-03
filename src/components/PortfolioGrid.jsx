import React from 'react';
import { MapPin, BedDouble, Bath, Ruler } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: 'Skyline Penthouse',
    location: 'Downtown, Metropolis',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2069&auto=format&fit=crop',
    beds: 3,
    baths: 3,
    area: '2,100 sq ft',
    price: '$2.4M',
  },
  {
    id: 2,
    title: 'Minimalist Loft',
    location: 'Arts District',
    image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2069&auto=format&fit=crop',
    beds: 2,
    baths: 2,
    area: '1,450 sq ft',
    price: '$1.2M',
  },
  {
    id: 3,
    title: 'Riverside Residence',
    location: 'Harborfront',
    image: 'https://images.unsplash.com/photo-1741793877371-f7ad871ba773?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSaXZlcnNpZGUlMjBSZXNpZGVuY2V8ZW58MHwwfHx8MTc2MjIxMDU4NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    beds: 4,
    baths: 3,
    area: '2,800 sq ft',
    price: '$3.1M',
  },
  {
    id: 4,
    title: 'Garden Terrace',
    location: 'Uptown',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2069&auto=format&fit=crop',
    beds: 3,
    baths: 2,
    area: '1,900 sq ft',
    price: '$1.7M',
  },
];

function Stat({ icon: Icon, value, label }) {
  return (
    <div className="flex items-center gap-2 text-slate-700">
      <Icon className="h-4 w-4 text-slate-500" />
      <span className="text-sm">{value} <span className="text-slate-500">{label}</span></span>
    </div>
  );
}

function Card({ p }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-700 shadow">
          {p.price}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
        <div className="mt-1 flex items-center gap-1 text-sm text-slate-600">
          <MapPin className="h-4 w-4 text-slate-400" /> {p.location}
        </div>
        <div className="mt-3 grid grid-cols-3 gap-3">
          <Stat icon={BedDouble} value={p.beds} label="Beds" />
          <Stat icon={Bath} value={p.baths} label="Baths" />
          <Stat icon={Ruler} value={p.area} label="" />
        </div>
      </div>
    </div>
  );
}

export default function PortfolioGrid() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Featured Portfolio</h2>
            <p className="mt-1 text-slate-600">A selection of properties curated for design, location, and value.</p>
          </div>
          <a href="#/" className="hidden sm:inline text-sm font-medium text-slate-700 hover:text-slate-900">Back to Home</a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((p) => (
            <Card key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
