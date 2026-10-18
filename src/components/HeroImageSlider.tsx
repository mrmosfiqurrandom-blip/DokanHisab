import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Copy, 
  Check, 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';
import { DEMO_APPS } from '../data/appsData';

interface HeroImageSliderProps {
  onSelectAppForOrder: (appId: string) => void;
  onViewAllDemos: () => void;
}

// Clean, realistic photography tailored for each retail / distribution domain
const SLIDE_IMAGES: Record<string, { image: string; imageAlt: string; highlights: string[] }> = {
  'dealership-management-system': {
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Dealership & Logistics Warehouse Distribution',
    highlights: ['গুগল শিট ডাটাবেস', 'চালান ও স্টক লেজার', 'ডিলার বাকি ও ক্যাশ']
  },
  'electronic-hardware-shop': {
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Electronics & Hardware Tools Shop Counter',
    highlights: ['সিরিয়াল নম্বর ও ওয়ারেন্টি', 'বারকোড রিডার সাপোর্ট', 'ক্যাশ মেমো প্রিন্ট']
  },
  'traders-pos-system': {
    image: 'https://images.unsplash.com/photo-1556742049-0a67e55722c3?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Retail & Wholesale Traders Billing Counter',
    highlights: ['খুচরা ও পাইকারি ডাবল রেট', 'থার্মাল রসিদ প্রিন্ট', 'দৈনিক লাভ-ক্ষতির খাতা']
  },
  'fashion-store-pos': {
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Modern Fashion Boutique & Clothing Store',
    highlights: ['সাইজ ও কালার ভ্যারিয়েন্ট', 'ডিসকাউন্ট ভাউচার হিসাব', 'বারকোড ও সেলস লেজার']
  }
};

export const HeroImageSlider: React.FC<HeroImageSliderProps> = ({
  onSelectAppForOrder,
  onViewAllDemos
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Touch swipe support for mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const currentApp = DEMO_APPS[currentIndex];
  const slideMeta = SLIDE_IMAGES[currentApp.id] || {
    image: 'https://images.unsplash.com/photo-1556742049-0a67e55722c3?auto=format&fit=crop&w=1600&q=80',
    imageAlt: currentApp.name,
    highlights: currentApp.features.slice(0, 3)
  };

  // Autoplay slider every 6 seconds, pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % DEMO_APPS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % DEMO_APPS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + DEMO_APPS.length) % DEMO_APPS.length);
  };

  // Mobile Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      handleNext(); // swiped left
    } else if (diff < -50) {
      handlePrev(); // swiped right
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleCopyCredentials = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div 
      className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl transition-all select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Image Container */}
      <div className="relative min-h-[400px] sm:min-h-[480px] md:min-h-[520px] flex items-center">
        {/* Crisp Photo */}
        <img
          src={slideMeta.image}
          alt={slideMeta.imageAlt}
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-40 transition-opacity duration-700"
          loading="eager"
        />

        {/* Minimal clean gradient overlays for 100% text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-slate-950/70" />

        {/* Slide Content (Fully Mobile Responsive) */}
        <div className="relative z-10 w-full p-4 sm:p-8 md:p-12 max-w-3xl">
          {/* Badge & Step indicator */}
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/40">
              {currentApp.category}
            </span>
            <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-400">
              {currentIndex + 1} / {DEMO_APPS.length}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-xl sm:text-3xl md:text-5xl font-black text-white leading-tight">
            {currentApp.name}
          </h2>

          {/* Subtitle / Tagline */}
          <p className="mt-1.5 sm:mt-3 text-xs sm:text-base text-slate-200 font-medium leading-relaxed max-w-2xl line-clamp-2 sm:line-clamp-none">
            {currentApp.tagline}
          </p>

          {/* Key highlights (wrap nicely on mobile) */}
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
            {slideMeta.highlights.map((item, idx) => (
              <span 
                key={idx}
                className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg bg-slate-900/90 border border-slate-700/80 text-[10px] sm:text-xs font-medium text-slate-200"
              >
                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>{item}</span>
              </span>
            ))}
          </div>

          {/* Credentials Box (Mobile-optimised) */}
          <div className="mt-4 p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-slate-950/95 border border-slate-800 inline-flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs">
            <span className="text-slate-400 font-bold hidden xs:inline">ডেমো লগইন:</span>
            <div className="flex items-center gap-1">
              <span className="text-slate-500">ইউজার:</span>
              <code className="text-emerald-400 font-mono font-bold">{currentApp.credentials.username}</code>
            </div>
            <span className="text-slate-700">|</span>
            <div className="flex items-center gap-1">
              <span className="text-slate-500">পাসওয়ার্ড:</span>
              <code className="text-amber-300 font-mono font-bold">{currentApp.credentials.password}</code>
            </div>
            <button
              onClick={() => handleCopyCredentials(currentApp.credentials.password, currentApp.id)}
              className="ml-auto xs:ml-1 px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-[10px] sm:text-[11px]"
              title="পাসওয়ার্ড কপি করুন"
            >
              {copiedKey === currentApp.id ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">কপি</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>কপি</span>
                </>
              )}
            </button>
          </div>

          {/* Action Buttons: Responsive for Mobile */}
          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
            <a
              href={currentApp.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 sm:py-3 px-4 sm:px-5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
            >
              <span>সরাসরি ডেমো টেস্ট করুন</span>
              <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            <button
              onClick={() => onSelectAppForOrder(currentApp.id)}
              className="py-2.5 sm:py-3 px-4 sm:px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 border border-slate-700 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95"
            >
              <span>এই সফটওয়্যারটি কিনুন</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>

        {/* Previous & Next Navigation Arrows (Clean & Touch friendly) */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-950/80 hover:bg-slate-900 border border-slate-700 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg z-20 active:scale-95"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-950/80 hover:bg-slate-900 border border-slate-700 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg z-20 active:scale-95"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Minimal Bottom Bar: Dots & Category Tabs */}
      <div className="px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
        {/* Dot indicators */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {DEMO_APPS.map((app, idx) => (
            <button
              key={app.id}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                idx === currentIndex
                  ? 'w-6 sm:w-8 bg-emerald-400'
                  : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
              title={app.name}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Quick App Selectors */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5">
          {DEMO_APPS.map((app, idx) => (
            <button
              key={app.id}
              onClick={() => setCurrentIndex(idx)}
              className={`px-2 sm:px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                idx === currentIndex
                  ? 'bg-slate-800 text-white border border-slate-600'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {app.name.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* View All Demos Link */}
        <button
          onClick={onViewAllDemos}
          className="text-[11px] sm:text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer hidden md:inline"
        >
          সব প্রজেক্ট দেখুন →
        </button>
      </div>
    </div>
  );
};
