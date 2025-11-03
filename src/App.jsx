import React, { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function useHashRoute() {
  const parse = () => {
    const hash = window.location.hash || '#/';
    const path = hash.replace('#', '');
    return path;
  };
  const [route, setRoute] = useState(parse());
  useEffect(() => {
    const onChange = () => setRoute(parse());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return route;
}

function HomePage() {
  return (
    <>
      <Hero />
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Buyer Representation',
                desc:
                  'From on-market to private exclusives, we identify properties that match your lifestyle and goals.',
              },
              {
                title: 'Seller Strategy',
                desc:
                  'Design-led staging, premium marketing, and data-backed pricing to maximize your sale.',
              },
              {
                title: 'Investment Advisory',
                desc:
                  'Cash flow analysis, neighborhood intelligence, and renovation ROI planning.',
              },
            ].map((s) => (
              <div key={s.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-base font-semibold text-slate-900">{s.title}</div>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PortfolioGrid />
      <AboutSection />
    </>
  );
}

function PortfolioPage() {
  return (
    <>
      <section className="pt-28 pb-6 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold text-slate-900">Our Portfolio</h1>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Explore a curated collection of residences defined by architectural character, thoughtful interiors, and exceptional locations.
          </p>
        </div>
      </section>
      <PortfolioGrid />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <section className="pt-28 pb-6 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold text-slate-900">About Us</h1>
          <p className="mt-2 text-slate-600 max-w-2xl">
            A modern real estate practice bridging market insight with design thinking.
          </p>
        </div>
      </section>
      <AboutSection />
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <div className="text-lg font-semibold text-slate-900">Work with us</div>
            <p className="mt-1 text-slate-600 max-w-2xl">
              Tell us about your goals — buying, selling, or investing. We will design a plan tailored to you and your timeline.
            </p>
            <a
              href="mailto:hello@riverviewestates.com"
              className="mt-4 inline-flex items-center rounded-lg bg-slate-900 px-5 py-3 text-white text-sm font-medium hover:bg-slate-800"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default function App() {
  const route = useHashRoute();
  const Page = useMemo(() => {
    if (route.startsWith('/portfolio')) return PortfolioPage;
    if (route.startsWith('/about')) return AboutPage;
    return HomePage;
  }, [route]);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Page />
      </main>
      <Footer />
    </div>
  );
}
