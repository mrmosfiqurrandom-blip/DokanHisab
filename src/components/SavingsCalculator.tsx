import React, { useState } from 'react';
import { Calculator, TrendingDown, CheckCircle, ShieldAlert, Zap, ArrowRight } from 'lucide-react';

export const SavingsCalculator: React.FC = () => {
  const [selectedYears, setSelectedYears] = useState<number>(3);
  const [monthlySaaSCost, setMonthlySaaSCost] = useState<number>(1500);

  // Traditional cost: Setup fee ~4000 + (monthly * 12 * years)
  const traditionalSetup = 4000;
  const traditionalTotal = traditionalSetup + (monthlySaaSCost * 12 * selectedYears);

  // GAS POS cost: Medium package one-time 4000 + 0 monthly
  const gasPosCost = 4000;
  const gasTotal = gasPosCost;

  const totalSaved = traditionalTotal - gasTotal;

  return (
    <section id="savings" className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute -top-20 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-amber-500/40 text-amber-300 text-xs font-bold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>খরচ সাশ্রয়ের রিয়েল হিসাব</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-normal">
            সাধারণ পিওএস বনাম গুগল অ্যাপস স্ক্রিপ্ট পিওএস
          </h2>
          <p className="mt-3 text-base text-slate-300 font-medium">
            মার্কেটের অন্যান্য পিওএস সফটওয়্যারে প্রতি মাসে চড়া বিল দিতে হয়। 
            দেখুন GAS পিওএস দিয়ে আপনি ঠিক কত টাকা বাঁচাতে পারবেন:
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-950/80 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          {/* Interactive Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-8 border-b border-slate-800">
            <div>
              <label className="block text-xs font-extrabold text-slate-300 uppercase tracking-wider mb-2.5">
                ব্যবহারের সময়সীমা নির্বাচন করুন:
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 5].map((yr) => (
                  <button
                    key={yr}
                    onClick={() => setSelectedYears(yr)}
                    className={`py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                      selectedYears === yr
                        ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20 scale-102'
                        : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    {yr === 1 ? '১ বছর' : yr === 2 ? '২ বছর' : yr === 3 ? '৩ বছর' : '৫ বছর'}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-extrabold text-slate-300 uppercase tracking-wider mb-2.5">
                অন্যান্য সফটওয়্যারের মাসিক ফি (টাকা):
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[1000, 1500, 2000, 3000].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setMonthlySaaSCost(amt)}
                    className={`py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer font-mono ${
                      monthlySaaSCost === amt
                        ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20 scale-102'
                        : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    ৳{amt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Direct Side-by-Side Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Traditional POS */}
            <div className="bg-slate-900/90 rounded-2xl p-6 border border-rose-500/30 relative">
              <div className="flex items-center justify-between text-xs font-bold text-rose-400 mb-2">
                <span className="text-sm">সাধারণ মাসিক সাবস্ক্রিপশন পিওএস</span>
                <span className="bg-rose-950/80 px-2.5 py-0.5 rounded-md border border-rose-700/50 text-[11px]">প্রতি মাসে খরচ</span>
              </div>
              <div className="text-3xl sm:text-4xl font-mono font-black text-rose-300 mt-2">
                ৳ {traditionalTotal.toLocaleString('en-IN')}
              </div>
              <ul className="mt-5 space-y-2 text-xs sm:text-sm text-slate-300 font-medium">
                <li>• প্রাথমিক ইনস্টলেশন ফি: ৳{traditionalSetup}</li>
                <li>• মাসিক ফি ({selectedYears * 12} মাস): ৳{(monthlySaaSCost * 12 * selectedYears).toLocaleString('en-IN')}</li>
                <li className="text-rose-300">• বিল বাকি পড়লে সফটওয়্যার বন্ধের সম্ভাবনা</li>
                <li className="text-slate-400">• সমস্ত ডাটা থাকে অন্যের সার্ভারে</li>
              </ul>
            </div>

            {/* GAS POS */}
            <div className="bg-gradient-to-b from-emerald-950/60 to-slate-900 rounded-2xl p-6 border-2 border-emerald-500/60 shadow-xl shadow-emerald-950/40 relative">
              <div className="flex items-center justify-between text-xs font-bold text-emerald-400 mb-2">
                <span className="text-sm">গুগল অ্যাপস স্ক্রিপ্ট পিওএস</span>
                <span className="bg-emerald-950 px-2.5 py-0.5 rounded-md border border-emerald-500/60 text-emerald-300 text-[11px] font-black">
                  ০ ৳ মাসিক ফি
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-mono font-black text-emerald-300 mt-2">
                ৳ {gasTotal.toLocaleString('en-IN')}
              </div>
              <ul className="mt-5 space-y-2 text-xs sm:text-sm text-slate-200">
                <li className="flex items-center gap-2 text-emerald-300 font-bold">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" /> এককালীন মিডিয়াম প্যাকেজ খরচ
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" /> কোনো মাসিক বা বাৎসরিক বিল নেই (আজীবন ফ্রি)
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" /> সম্পূর্ণ ডাটা আপনার গুগল ড্রাইভে সংরক্ষিত
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" /> সফটওয়্যার বন্ধ হওয়ার কোনো সুযোগ নেই
                </li>
              </ul>
            </div>
          </div>

          {/* Total Net Savings Banner */}
          <div className="mt-8 bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-950 rounded-2xl p-6 border border-emerald-500/50 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <div className="text-xs font-extrabold text-emerald-400 uppercase tracking-wider">
                আপনার নিট সাশ্রয় ({selectedYears} বছরে):
              </div>
              <div className="text-3xl sm:text-4xl font-black font-mono text-amber-300 mt-1">
                মোট ৳ {totalSaved.toLocaleString('en-IN')} টাকা বেঁচে যাবে!
              </div>
            </div>
            <a
              href="#packages"
              className="shrink-0 px-6 py-3.5 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black text-sm rounded-xl shadow-lg shadow-amber-500/20 transition-all hover:scale-102 active:scale-95"
            >
              সাশ্রয়ী প্যাকেজ বেছে নিন
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
