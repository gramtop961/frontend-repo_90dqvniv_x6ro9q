import React from 'react';
import { Star, Award, Users, Building2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">About Riverview Estates</h2>
            <p className="mt-4 text-slate-600">
              We are a boutique real estate team focused on modern, design-forward homes across the city. From luxury penthouses to smart investments, we combine market expertise with a passion for architecture and interiors.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 rounded-lg border border-slate-200 p-4">
                <Star className="h-5 w-5 text-amber-500" />
                <div>
                  <div className="font-semibold text-slate-900">4.9/5</div>
                  <div className="text-sm text-slate-600">Client rating</div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-slate-200 p-4">
                <Award className="h-5 w-5 text-slate-900" />
                <div>
                  <div className="font-semibold text-slate-900">Top 1%</div>
                  <div className="text-sm text-slate-600">Market performers</div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-slate-200 p-4">
                <Users className="h-5 w-5 text-slate-900" />
                <div>
                  <div className="font-semibold text-slate-900">500+</div>
                  <div className="text-sm text-slate-600">Happy clients</div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-slate-200 p-4">
                <Building2 className="h-5 w-5 text-slate-900" />
                <div>
                  <div className="font-semibold text-slate-900">$350M+</div>
                  <div className="text-sm text-slate-600">In transactions</div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2069&auto=format&fit=crop"
                alt="Team collaborating in a modern office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
