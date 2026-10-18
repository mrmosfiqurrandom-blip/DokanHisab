import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Copy, 
  Check, 
  ArrowRight
} from 'lucide-react';
import { DEMO_APPS } from '../data/appsData';

interface HeroImageSliderProps {
  onSelectAppForOrder: (appId: string) => void;
  onViewAllDemos: () => void;
}

// Crisp, high-clarity photography tailored to each business type
const SLIDE_IMAGES: Record<string, { image: string; imageAlt: string }> = {
  'dealership-management-system': {
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Dealership & Logistics Warehouse Distribution'
  },
  'electronic-hardware-shop': {
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Electronics & Hardware Tools Shop Counter'
  },
  'traders-pos-system': {
    image: 'https://images.unsplash.com/photo-1556742049-0a67e55722c3?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Retail & Wholesale Traders Billing Counter'
  },
  'fashion-store-pos': {
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Modern Fashion Boutique & Clothing Store'
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
      handleNext();
    } else if (diff < -50) {
      handlePrev();
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
      className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 
        ROCK-SOLID FIXED HEIGHT CONTAINER: 
        Uses fixed responsive height (h-[440px] sm:h-[460px] md:h-[480px]) so height NEVER changes when switching slides 
      */}
      <div className="relative w-full h-[450px] sm:h-[460px] md:h-[480px] overflow-hidden">
        {DEMO_APPS.map((app, idx) => {
          const isActive = idx === currentIndex;
          const slideMeta = SLIDE_IMAGES[app.id] || {
            image: 'https://images.unsplash.com/photo-1556742049-0a67e55722c3?auto=format&fit=crop&w=1600&q=85',
            imageAlt: app.name
          };

          return (
            <div
              key={app.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-600 ease-in-out ${
                isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Crisp background image without heavy muddy blurs */}
              <img
                src={slideMeta.image}
                alt={slideMeta.imageAlt}
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />

              {/* Clean, high-contrast dark gradient overlay for sharp, readable text */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/45" />

              {/* Centered slide content: Clean, Minimal, Non-busy */}
              <div className="relative z-10 w-full h-full px-4 sm:px-8 py-6 flex flex-col items-center justify-center text-center">
                
                {/* Minimal Category & Counter Tag */}
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-3 py-1 rounded-full">
                    {app.category}
                  </span>
                  <span className="text-[11px] sm:text-xs font-mono font-medium text-slate-400 bg-slate-900/80 border border-slate-700/60 px-2 py-0.5 rounded-full">
                    {idx + 1}/{DEMO_APPS.length}
                  </span>
                </div>

                {/* Main Title - Clean & Sharp */}
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight max-w-3xl leading-tight">
                  {app.name}
                </h2>

                {/* Subtitle / Tagline - Clean & Concise */}
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-slate-300 font-normal max-w-xl line-clamp-2 leading-relaxed">
                  {app.tagline}
                </p>

                {/* Minimal Login Credentials - Single compact clean strip */}
                <div className="mt-4 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 inline-flex items-center gap-2 sm:gap-3 text-xs shadow-md">
                  <span className="text-slate-400 font-medium">ডেমো লগইন:</span>
                  <div className="flex items-center gap-1 font-mono">
                    <span className="text-slate-500">ইউজার:</span>
                    <span className="text-emerald-400 font-bold">{app.credentials.username}</span>
                  </div>
                  <span className="text-slate-600">|</span>
                  <div className="flex items-center gap-1 font-mono">
                    <span className="text-slate-500">পাস:</span>
                    <span className="text-amber-300 font-bold">{app.credentials.password}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyCredentials(app.credentials.password, app.id)}
                    className="ml-1 px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1 text-[11px]"
                    title="পাসওয়ার্ড কপি করুন"
                  >
                    {copiedKey === app.id ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">কপি হয়েছে</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-slate-400" />
                        <span>কপি</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Clean, Sharp Action Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
                  <a
                    href={app.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto py-2.5 sm:py-3 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
                  >
                    <span>সরাসরি লাইভ ডেমো দেখুন</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    type="button"
                    onClick={() => onSelectAppForOrder(app.id)}
                    className="w-full sm:w-auto py-2.5 sm:py-3 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95"
                  >
                    <span>প্যাকেজ অর্ডার করুন</span>
                    <ArrowRight className="w-4 h-4 text-emerald-400" />
                  </button>
                </div>

              </div>
            </div>
          );
        })}

        {/* Previous & Next Navigation Arrows (Clean & Minimal) */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-950/70 hover:bg-slate-900 border border-slate-700/80 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg z-20 active:scale-95"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-950/70 hover:bg-slate-900 border border-slate-700/80 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg z-20 active:scale-95"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Clean & Minimal Bottom Bar */}
      <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs">
        {/* Dot Indicators */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {DEMO_APPS.map((app, idx) => (
            <button
              key={app.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                idx === currentIndex
                  ? 'w-6 bg-emerald-400'
                  : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
              title={app.name}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Simple Text Tabs */}
        <div className="flex items-center gap-1 sm:gap-2">
          {DEMO_APPS.map((app, idx) => (
            <button
              key={app.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                idx === currentIndex
                  ? 'text-emerald-400 font-bold bg-emerald-950/60'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {app.name.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* All Demos Link */}
        <button
          type="button"
          onClick={onViewAllDemos}
          className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer hidden sm:inline"
        >
          সব প্রজেক্ট →
        </button>
      </div>
    </div>
  );
};
