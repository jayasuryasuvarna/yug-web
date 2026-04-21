import { draftMode } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import { getHeroComponent } from "@/lib/api";
import { ShieldCheck, Sprout, MapPin, Search, ArrowRight, Star, TreePine, Handshake } from 'lucide-react';
import FeaturedProperties from "./components/fetaured-properties";
import ContactForm from "./components/contact-form";
import { Button } from '@/components/ui/button';


const POPULAR_SEARCHES = [
  { label: 'All listings', href: '/properties' },
  { label: 'Farm & plots', href: '/properties?propertyType=Agricultural' },
  { label: 'Near Bangalore', href: '/properties?location=Bangalore' },
  { label: 'Under ₹1 Cr', href: '/properties?sort=price_low_high' },
];


const VALUE_PROPS = [
  {
    icon: ShieldCheck,
    title: 'Every plot visited',
    description: 'We walk each site, verify the title, and photograph real conditions — no stock shots, no staged drone angles.',
  },
  {
    icon: Sprout,
    title: 'Yields disclosed up front',
    description: 'Managed crops, expected annual yield, and soil notes on every farm listing — so you evaluate the way a local farmer would.',
  },
  {
    icon: Handshake,
    title: 'Direct, no brokerage chain',
    description: 'You deal with the verified owner. We handpick, document the paperwork, and step out of the way when it matters.',
  },
];


function HeroSearch({
  title,
  subTitle,
  coverImage,
}: {
  title: string;
  subTitle: string;
  coverImage: any;
}) {
  return (
    <section className="relative bg-stone-50 overflow-hidden">
      {/* Editorial background — paper grain + single warm radial wash, no decorative orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_0%,rgba(251,243,226,0.6),transparent_55%)]" />
        <div className="absolute inset-0 bg-grain opacity-[0.04] mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-14 md:pt-20 lg:pt-24 pb-16 md:pb-20">
        {/* Primary grid — asymmetric 7/5 split */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left column — 7 cols */}
          <div className="relative z-10 lg:col-span-7">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 backdrop-blur border border-stone-200 rounded-full text-sm mb-6 shadow-sm motion-safe:animate-fade-up"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-amber-500/60 motion-safe:animate-shimmer-soft" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-700" />
              </span>
              <span className="font-medium text-stone-700">Authentic real-estate marketplace · South Bangalore</span>
            </div>

            <h1
              className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] font-semibold tracking-[-0.02em] text-stone-900 mb-5 leading-[1.02] motion-safe:animate-fade-up"
              style={{ animationDelay: '120ms' }}
            >
              Find land worth
              <span className="block text-amber-700 italic font-normal">owning.</span>
            </h1>

            <p
              className="text-lg md:text-xl text-stone-600 mb-3 leading-relaxed max-w-2xl motion-safe:animate-fade-up"
              style={{ animationDelay: '200ms' }}
            >
              A handpicked marketplace of verified real estate. Every plot visited, every owner met, every price in plain rupees — so you buy the land, not the pitch.
            </p>
            {subTitle && (
              <p
                className="text-base text-stone-500 mb-8 max-w-2xl motion-safe:animate-fade-up"
                style={{ animationDelay: '260ms' }}
              >
                {subTitle}
              </p>
            )}
            {!subTitle && <div className="mb-8" />}

            <form
              action="/properties"
              method="GET"
              className="bg-white/95 backdrop-blur rounded-2xl shadow-xl shadow-stone-900/5 border border-stone-200 p-2 flex flex-col sm:flex-row gap-2 max-w-2xl motion-safe:animate-fade-up transition-shadow focus-within:shadow-2xl focus-within:shadow-stone-900/10 focus-within:border-stone-400"
              role="search"
              aria-label="Search properties"
              style={{ animationDelay: '320ms' }}
            >
              <label htmlFor="hero-search" className="sr-only">
                Search by city, neighborhood, or keyword
              </label>
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" aria-hidden="true" />
                <input
                  id="hero-search"
                  type="search"
                  name="search"
                  placeholder="Search by city, neighborhood, or keyword"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl text-stone-900 placeholder:text-stone-400 focus:outline-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="bg-stone-900 hover:bg-stone-950 text-white cursor-pointer px-6"
              >
                Search
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </form>

            <div
              className="mt-5 flex flex-wrap items-center gap-2 motion-safe:animate-fade-up"
              style={{ animationDelay: '420ms' }}
            >
              <span className="text-sm text-stone-500 mr-1">Popular:</span>
              {POPULAR_SEARCHES.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm px-3 py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 hover:bg-amber-50 hover:border-amber-200 hover:text-amber-800 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Inline mini trust bar — fills the left-column whitespace */}
            <div
              className="mt-10 pt-6 border-t border-stone-200/80 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm motion-safe:animate-fade-up"
              style={{ animationDelay: '520ms' }}
            >
              <div className="flex items-center gap-2 text-stone-600">
                <div className="flex items-center gap-0.5 text-amber-500" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map(i => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <span><span className="font-semibold text-stone-900">4.9</span> verified buyers</span>
              </div>
              <div className="flex items-center gap-2 text-stone-600">
                <ShieldCheck className="h-4 w-4 text-amber-700" aria-hidden="true" />
                <span>100% site-visited</span>
              </div>
              <div className="flex items-center gap-2 text-stone-600">
                <MapPin className="h-4 w-4 text-amber-700" aria-hidden="true" />
                <span>South Bangalore & beyond</span>
              </div>
            </div>
          </div>

          {/* Right column — 5 cols: image with decorative cards */}
          <div className="relative lg:col-span-5">
            <div className="relative">
              {/* Soft color wash behind image */}
              <div
                className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-amber-100 via-stone-100 to-stone-200 blur-2xl opacity-70 -z-10 motion-safe:animate-fade-in"
                aria-hidden="true"
              />

              {/* Main image */}
              <div className="relative aspect-[4/5] rounded-[1.75rem] overflow-hidden shadow-2xl shadow-stone-900/10 ring-1 ring-stone-900/5">
                {coverImage?.url ? (
                  <Image
                    src={coverImage.url}
                    alt={title || 'Featured property'}
                    width={720}
                    height={900}
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover w-full h-full motion-safe:animate-ken-burns"
                    priority
                    fetchPriority="high"
                  />
                ) : (
                  <div className="relative w-full h-full bg-gradient-to-br from-stone-900 via-stone-800 to-stone-700 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.15),transparent_60%)]" />
                    <TreePine className="w-20 h-20 text-white/40" aria-hidden="true" />
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-stone-900/30 to-transparent pointer-events-none" aria-hidden="true" />
              </div>

              {/* Floating trust card — top left */}
              <div
                className="hidden sm:block absolute -top-5 -left-5 motion-safe:animate-fade-up"
                style={{ animationDelay: '600ms' }}
              >
                <div className="motion-safe:animate-float-slow">
                  <div className="flex items-center gap-3 bg-white/95 backdrop-blur rounded-2xl px-4 py-3 shadow-xl shadow-stone-900/10 border border-stone-200">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                      <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="pr-1">
                      <div className="text-xs text-stone-500 leading-tight">Every listing</div>
                      <div className="text-sm font-semibold text-stone-900 leading-tight">Site-visited</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating rating card — bottom right */}
              <div
                className="hidden sm:block absolute -bottom-5 -right-5 motion-safe:animate-fade-up"
                style={{ animationDelay: '720ms' }}
              >
                <div
                  className="motion-safe:animate-float-slow"
                  style={{ animationDelay: '1.5s', animationDuration: '11s' }}
                >
                  <div className="flex flex-col gap-1 bg-white/95 backdrop-blur rounded-2xl px-4 py-3 shadow-xl shadow-stone-900/10 border border-stone-200">
                    <div className="flex items-center gap-1 text-amber-500" aria-label="Rated 4.9 out of 5">
                      {[0, 1, 2, 3, 4].map(i => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                      ))}
                      <span className="ml-1 text-sm font-semibold text-stone-900">4.9</span>
                    </div>
                    <div className="text-xs text-stone-500">Verified by real buyers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How it works — value-prop strip */}
        <div className="mt-16 md:mt-20 pt-10 border-t border-stone-200/80">
          <div className="flex items-baseline justify-between flex-wrap gap-4 mb-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 motion-safe:animate-fade-up">
              How the marketplace works
            </p>
            <p
              className="text-sm text-stone-500 motion-safe:animate-fade-up"
              style={{ animationDelay: '80ms' }}
            >
              Three rules we don&apos;t break.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {VALUE_PROPS.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                className="group relative bg-white border border-stone-200 p-6 rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:border-stone-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-900/5 motion-safe:animate-fade-up"
                style={{ animationDelay: `${620 + index * 120}ms` }}
              >
                {/* Accent line at top — draws in from left on hover */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 left-0 right-0 h-[2px] bg-amber-700 scale-x-0 origin-left transition-transform duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                />

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700 transition-all duration-300 ease-out group-hover:bg-stone-900 group-hover:text-white group-hover:scale-105">
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-6" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-lg font-semibold text-stone-900 mb-1.5">
                      {title}
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>

                <span
                  aria-hidden="true"
                  className="absolute top-5 right-5 text-xs font-mono text-stone-300 transition-colors duration-300 group-hover:text-amber-700"
                >
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


export default async function Page() {
  const { isEnabled } = await draftMode();
  const heroComponent = await getHeroComponent(isEnabled);

  return (
    <div>
      {heroComponent && (
        <HeroSearch
          title={heroComponent.title}
          coverImage={heroComponent.coverImage}
          subTitle={heroComponent.subTitle}
        />
      )}
      <FeaturedProperties />
      <ContactForm />
    </div>
  );
}
