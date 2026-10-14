import React from 'react';
import { Play, ArrowDown, CheckCircle2, Cloud, Sparkles, Zap, ShieldCheck, Database, Award } from 'lucide-react';
import { TRUST_STATS } from '../data/siteConfig';

interface HeroProps {
  onOpenOrderModal: (packageId?: 'basic' | 'medium' | 'premium') => void;
  onViewDemos: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal, onViewDemos }) => {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-12 pb-20 border-b border-slate-800/80">
      {/* Dynamic ambient color gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Modern subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Top Animated Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 text-xs font-bold text-emerald-300 shadow-md shadow-emerald-950/40 mb-6">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span>গুগল অ্যাপস স্ক্রিপ্ট ও ক্লাউড টেকনোলজি</span>
            <span className="text-slate-600">|</span>
            <span className="text-amber-300 font-extrabold">০৳ মাসিক ফি</span>
          </div>

          {/* Main Headline with Bold Bengali Font & Gradients */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight sm:leading-snug">
            <span className="text-amber-300 font-mono tracking-wide">DokanHisab</span> — গুগল ক্লাউডে তৈরি{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 drop-shadow-sm">
              পিওএস ও ইনভেন্টরি
            </span>{' '}
            সফটওয়্যার ও সোর্স কোড
          </h1>

          {/* Subtitle with bold readable Bengali */}
          <p className="mt-6 text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto">
            দোকানের সকল বিক্রয়, বারকোড স্ক্যানিং, কাস্টমার বাকির খাতা ও স্টক লেজার পরিচালনা করুন। 
            <strong className="text-emerald-300 font-bold"> কোনো মাসিক সার্ভার ফি নেই </strong> — 
            আপনার সমস্ত ডাটা থাকবে ১০০% নিরাপদ আপনার নিজস্ব গুগল ড্রাইভে।
          </p>

          {/* Action Buttons with high colorful contrast */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onViewDemos}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm sm:text-base font-extrabold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 rounded-2xl shadow-xl shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <Play className="w-5 h-5 fill-slate-950 text-slate-950" />
              <span>৫টি লাইভ ডেমো দেখুন (ওপেন ও সিকিউরড)</span>
            </button>

            <a
              href="#packages"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm sm:text-base font-bold text-white bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 rounded-2xl shadow-lg transition-all hover:scale-[1.02] active:scale-95"
            >
              <span>প্যাকেজ ও মূল্য তালিকা (২,০০০ ৳ থেকে)</span>
              <ArrowDown className="w-4 h-4 text-amber-400" />
            </a>
          </div>

          {/* Trust Highlights Strip */}
          <div className="mt-8 pt-6 border-t border-slate-850 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-xs sm:text-sm text-slate-300 font-semibold">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>সম্পূর্ণ আসল সোর্স কোড (.gs + ফ্রন্টএন্ড)</span>
            </div>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>১০০% আনলিমিটেড লাইসেন্স ও ওনারশিপ</span>
            </div>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>AnyDesk / Meet-এ রিমোট লাইভ সেটআপ</span>
            </div>
          </div>
        </div>

        {/* Colorful Modern Metric Cards */}
        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
          {TRUST_STATS.map((stat, idx) => {
            const colors = [
              { border: 'border-emerald-500/40', bg: 'from-emerald-950/40 to-slate-900/70', text: 'text-emerald-400' },
              { border: 'border-blue-500/40', bg: 'from-blue-950/40 to-slate-900/70', text: 'text-blue-400' },
              { border: 'border-amber-500/40', bg: 'from-amber-950/40 to-slate-900/70', text: 'text-amber-400' },
              { border: 'border-purple-500/40', bg: 'from-purple-950/40 to-slate-900/70', text: 'text-purple-400' }
            ][idx % 4];

            return (
              <div 
                key={idx}
                className={`relative rounded-2xl p-5 sm:p-6 border ${colors.border} bg-gradient-to-b ${colors.bg} backdrop-blur-md shadow-xl text-center group hover:border-slate-500 transition-all`}
              >
                <div className={`text-3xl sm:text-4xl font-black font-mono tracking-tight ${colors.text}`}>
                  {stat.value}
                </div>
                <div className="mt-1.5 text-xs sm:text-sm font-bold text-slate-100">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                  {stat.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
