import React from 'react';
import { Check, X, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { PRICING_PACKAGES } from '../data/packagesData';

interface PricingSectionProps {
  onSelectPackage: (packageId: 'basic' | 'medium' | 'premium') => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-20 sm:py-24 bg-slate-950 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-500/30 text-amber-300 text-xs font-bold mb-3">
            <Zap className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>স্বচ্ছ ও এককালীন মূল্য তালিকা</span>
            <span className="text-slate-600">|</span>
            <span>কোনো মাসিক ফি নেই</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-normal">
            আপনার প্রয়োজন অনুযায়ী প্যাকেজ বেছে নিন
          </h2>
          <p className="mt-4 text-base text-slate-300 font-medium">
            একবার পেমেন্ট করুন এবং আপনার নিজস্ব গুগল ড্রাইভে আজীবন সম্পূর্ণ সফটওয়্যার ব্যবহার করুন।
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-6xl mx-auto items-stretch">
          {PRICING_PACKAGES.map((pkg) => {
            const isMedium = pkg.id === 'medium';
            const isPremium = pkg.id === 'premium';

            const cardStyle = isMedium
              ? {
                  border: 'border-2 border-emerald-400 shadow-2xl shadow-emerald-500/20 bg-gradient-to-b from-emerald-950/40 via-slate-900 to-slate-900 md:-translate-y-3',
                  badge: 'bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-black',
                  priceColor: 'text-emerald-300',
                  btn: 'bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-300 text-slate-950 hover:from-emerald-300 hover:to-teal-300 shadow-lg shadow-emerald-500/30 font-black',
                }
              : isPremium
              ? {
                  border: 'border border-amber-500/60 shadow-xl shadow-amber-500/10 bg-gradient-to-b from-amber-950/30 via-slate-900 to-slate-900',
                  badge: 'bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 font-black',
                  priceColor: 'text-amber-300',
                  btn: 'bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 hover:from-amber-300 hover:to-yellow-300 shadow-lg shadow-amber-500/20 font-black',
                }
              : {
                  border: 'border border-slate-800 shadow-lg bg-slate-900/90 hover:border-slate-700',
                  badge: '',
                  priceColor: 'text-white',
                  btn: 'bg-slate-800 hover:bg-slate-700 text-white font-bold border border-slate-700',
                };

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl flex flex-col transition-all duration-300 hover:shadow-2xl ${cardStyle.border}`}
              >
                {/* Popular / VIP Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className={`px-4 py-1 rounded-full text-xs uppercase tracking-wide shadow-md flex items-center gap-1.5 ${cardStyle.badge}`}>
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{pkg.badge}</span>
                    </span>
                  </div>
                )}

                {/* Card Top */}
                <div className="p-6 sm:p-8 border-b border-slate-800/80">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {pkg.nameEn}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                    {pkg.nameBn}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium mt-2 min-h-[42px] leading-relaxed">
                    {pkg.subtitleBn}
                  </p>

                  {/* Price */}
                  <div className="mt-6 pt-5 border-t border-slate-800">
                    <div className="flex items-baseline gap-2">
                      <span className={`text-4xl sm:text-5xl font-black font-mono tracking-tight ${cardStyle.priceColor}`}>
                        {pkg.priceFormatted}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        / এককালীন
                      </span>
                    </div>
                    <div className="text-xs text-emerald-400 font-bold mt-1.5 flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>০ ৳ মাসিক ফি • আজীবন লাইসেন্স</span>
                    </div>
                  </div>
                </div>

                {/* Features Included List */}
                <div className="p-6 sm:p-8 flex-1">
                  <div className="text-xs font-black text-slate-200 uppercase tracking-wider mb-4">
                    প্যাকেজে যা যা পাচ্ছেন:
                  </div>
                  <ul className="space-y-3.5 text-xs sm:text-sm">
                    {pkg.featuresIncluded.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className={feat.isKey ? 'font-bold text-white' : 'font-medium text-slate-300'}>
                          {feat.textBn}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Excluded (if any) */}
                  {pkg.featuresNotIncluded.length > 0 && (
                    <div className="mt-6 pt-4 border-t border-slate-800/80">
                      <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                        প্যাকেজে অন্তর্ভুক্ত নয়:
                      </div>
                      <ul className="space-y-2 text-xs text-slate-500 font-medium">
                        {pkg.featuresNotIncluded.map((notFeat, nidx) => (
                          <li key={nidx} className="flex items-start gap-2">
                            <X className="w-3.5 h-3.5 text-slate-600 shrink-0 mt-0.5" />
                            <span>{notFeat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Delivery Timeline */}
                  <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 font-medium">
                    <span className="font-bold text-slate-200">ডেলিভারি সময়:</span> {pkg.deliveryTimeBn}
                  </div>
                </div>

                {/* Action CTA Button */}
                <div className="p-6 sm:p-8 pt-0">
                  <button
                    onClick={() => onSelectPackage(pkg.id)}
                    className={`w-full py-3.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer ${cardStyle.btn}`}
                  >
                    <span>বিকাশে পেমেন্ট ও অর্ডার করুন</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
