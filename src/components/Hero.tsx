import React from 'react';
import { 
  CheckCircle2, 
  Code2, 
  Laptop, 
  Database, 
  ArrowRight
} from 'lucide-react';
import { HeroImageSlider } from './HeroImageSlider';

interface HeroProps {
  onOpenOrderModal: (packageId?: 'basic' | 'medium' | 'premium', appId?: string) => void;
  onViewDemos: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal, onViewDemos }) => {
  const coreServices = [
    {
      id: 'basic' as const,
      icon: Code2,
      nameBn: 'বেসিক প্যাকেজ',
      tagline: 'শুধু সোর্স কোড বিক্রি',
      price: '২,০০০ ৳',
      period: 'এককালীন',
      badge: 'সেলফ-ডিপ্লয়',
      badgeClass: 'border-slate-700 text-slate-300 bg-slate-900',
      description: 'গুগল অ্যাপস স্ক্রিপ্ট (.gs) ফাইল, আধুনিক ফ্রন্টএন্ড কোড, গুগল শিট ডাটাবেস টেবিল ও ইনস্টলেশন গাইড।',
      features: [
        'পূর্ণাঙ্গ ব্যাকএন্ড ও ফ্রন্টএন্ড সোর্স কোড',
        'গুগল শিট ডাটাবেস মাস্টার টেমপ্লেট',
        '১০০% আজীবন লাইসেন্স ও আনলিমিটেড ব্যবহার',
        '০ ৳ আজীবন ক্লাউড হোস্টিং চার্জ'
      ],
      btnClass: 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700',
      isPopular: false
    },
    {
      id: 'medium' as const,
      icon: Laptop,
      nameBn: 'মিডিয়াম প্যাকেজ',
      tagline: 'সোর্স কোড + ফুল সেটআপ সাপোর্ট',
      price: '৪,০০০ ৳',
      period: 'এককালীন',
      badge: 'জনপ্রিয় চয়েস',
      badgeClass: 'border-emerald-500/60 text-emerald-300 bg-emerald-950/80 shadow-sm',
      description: 'সোর্স কোডের সাথে AnyDesk বা Google Meet-এ সরাসরি আপনার গুগল ড্রাইভে সিস্টেম ইনস্টলেশন ও প্রিন্টার সেটআপ।',
      features: [
        'সম্পূর্ণ সোর্স কোড + গুগল শিট ডাটাবেস',
        'আপনার জিমেইলে লাইভ রিমোট সেটআপ সাপোর্ট',
        'দোকানের নাম, লোগো ও থার্মাল প্রিন্টার ফরম্যাটিং',
        '৩০ দিনের ফ্রি টেকনিক্যাল সহায়তা'
      ],
      btnClass: 'bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 text-slate-950 font-black shadow-lg shadow-emerald-500/20',
      isPopular: true
    },
    {
      id: 'premium' as const,
      icon: Database,
      nameBn: 'প্রিমিয়াম প্যাকেজ',
      tagline: 'কোড + সেটআপ + প্রোডাক্ট এন্ট্রি',
      price: '৬,০০০ ৳',
      period: 'এককালীন',
      badge: 'ভিআইপি টার্নকি',
      badgeClass: 'border-amber-500/60 text-amber-300 bg-amber-950/80 shadow-sm',
      description: 'রেডিমেড টার্নকি সলিউশন। আপনার দোকানের পণ্যের তালিকা শিটে এন্ট্রি, বিশেষ ভ্যাট/ডিসকাউন্ট লজিক ও ফুল ট্রেনিং।',
      features: [
        'সোর্স কোড + ফুল অ্যাকাউন্ট সেটআপ',
        'দোকানের প্রোডাক্ট তালিকা ও স্টক ডাটা এন্ট্রি',
        'বিশেষ ফিল্ড ও কাস্টম রিকোয়ারমেন্ট এডজাস্টমেন্ট',
        '৯০ দিনের প্রায়োরিটি ভিআইপি ফোন ও হোয়াটসঅ্যাপ সাপোর্ট'
      ],
      btnClass: 'bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black shadow-lg shadow-amber-500/20',
      isPopular: false
    }
  ];

  return (
    <section className="relative bg-slate-950 text-white pt-2 sm:pt-4 pb-12 sm:pb-16 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* HERO IMAGE SLIDESHOW - PLACED DIRECTLY AT THE VERY TOP (No overhead text) */}
        <div className="w-full mb-10 sm:mb-14">
          <HeroImageSlider 
            onSelectAppForOrder={(appId) => onOpenOrderModal('medium', appId)}
            onViewAllDemos={onViewDemos}
          />
        </div>

        {/* 3 CORE SERVICES & PACKAGES (Clean, Minimal, Highly Readable) */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-1 mb-5 px-1">
            <div>
              <span className="text-[11px] sm:text-xs font-bold text-amber-400 uppercase tracking-wider block">
                সার্ভিস প্যাকেজ
              </span>
              <h2 className="text-lg sm:text-2xl font-black text-white mt-0.5">
                আপনার প্রয়োজন অনুযায়ী প্যাকেজ বেছে নিন
              </h2>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              বিকাশ পার্সোনাল নাম্বারে পেমেন্ট করে সরাসরি গুগল ড্রাইভ এক্সেস নিন
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-stretch">
            {coreServices.map((srv) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.id}
                  className={`relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-all ${
                    srv.isPopular
                      ? 'border-2 border-emerald-500 bg-gradient-to-b from-emerald-950/30 via-slate-900 to-slate-900 shadow-xl shadow-emerald-500/10 md:-translate-y-1'
                      : 'border border-slate-800 bg-slate-900/90 shadow-md'
                  }`}
                >
                  <div>
                    {/* Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase border ${srv.badgeClass}`}>
                        {srv.badge}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {srv.period}
                      </span>
                    </div>

                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <h3 className="text-base sm:text-lg font-black text-white">
                          {srv.nameBn}
                        </h3>
                        <p className="text-xs font-bold text-amber-300 mt-0.5">
                          {srv.tagline}
                        </p>
                      </div>
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-amber-300 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Price */}
                    <div className="my-2.5 py-2 border-y border-slate-800 flex items-baseline justify-between">
                      <span className="text-2xl font-black font-mono text-white">
                        {srv.price}
                      </span>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-700/50">
                        ০৳ মাসিক চার্জ
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 font-medium leading-relaxed mb-3">
                      {srv.description}
                    </p>

                    {/* Feature list */}
                    <ul className="space-y-1.5 mb-5 text-xs text-slate-300">
                      {srv.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-slate-200">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Order Button */}
                  <div className="pt-1">
                    <button
                      onClick={() => onOpenOrderModal(srv.id)}
                      className={`w-full py-2.5 sm:py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95 ${srv.btnClass}`}
                    >
                      <span>অর্ডার ও বিকাশ পেমেন্ট ({srv.price})</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
