import React from 'react';
import { Cloud, ShieldCheck, Database, Smartphone, Printer, RefreshCw } from 'lucide-react';

export const WhyGasPos: React.FC = () => {
  const points = [
    {
      icon: Cloud,
      titleBn: '০ ৳ মাসিক ও বাৎসরিক হোস্টিং খরচ',
      descBn: 'সাধারণ সফটওয়্যারে প্রতি মাসে ক্লাউড হোস্টিং ও সার্ভার বিল দিতে হয়। গুগল অ্যাপস স্ক্রিপ্ট গুগলের শক্তিশালী সার্ভারে ফ্রিতে চলে, তাই আজীবন সার্ভার ফি শূন্য টাকা।',
      color: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30'
    },
    {
      icon: Database,
      titleBn: 'Google Sheets ডাটাবেস স্বাধীনতা',
      descBn: 'আপনার সকল প্রোডাক্ট, কাস্টমার তালিকা ও বিক্রয়ের ডাটা থাকবে আপনার ড্রাইভের গুগল স্প্রেডশিটে। যেকোনো সময় এক ক্লিকে Excel বা PDF হিসেবে ডাউনলোড করতে পারবেন।',
      color: 'from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/30'
    },
    {
      icon: ShieldCheck,
      titleBn: '১০০% ডাটা প্রাইভেসি ও ওনারশিপ',
      descBn: 'কোনো থার্ড-পার্টি কোম্পানির সার্ভারে আপনার বিজনেস ডাটা জমা হয় না। কোড এবং ডাটা থাকবে শুধুমাত্র আপনার নিজস্ব গুগল অ্যাকাউন্টে।',
      color: 'from-amber-500/20 to-yellow-500/20 text-amber-400 border-amber-500/30'
    },
    {
      icon: Smartphone,
      titleBn: 'কম্পিউটার ও মোবাইল উভয় ডিভাইসে সচল',
      descBn: 'রেসপন্সিভ ওয়েব অ্যাপ্লিকেশন হওয়ার কারণে দোকান থেকে পিসিতে ক্যাশ মেমো কাটা এবং বাইরে থেকে মোবাইলে লাইভ সেলস ও স্টক চেক করা যায়।',
      color: 'from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/30'
    },
    {
      icon: Printer,
      titleBn: 'থার্মাল পিওএস ও A4 মেমো প্রিন্টিং',
      descBn: 'যেকোনো স্ট্যান্ডার্ড 58mm অথবা 80mm থার্মাল ব্লুটুথ ও ইউএসবি রসিদ প্রিন্টার সাপোর্ট করে। সাথে প্রফেশনাল A4/A5 ইনভয়েসও প্রিন্ট করা সম্ভব।',
      color: 'from-pink-500/20 to-rose-500/20 text-pink-400 border-pink-500/30'
    },
    {
      icon: RefreshCw,
      titleBn: 'সম্পূর্ণ ওপেন সোর্স কোড অ্যাক্সেস',
      descBn: 'আমরা আপনাকে আসল সোর্স কোড দিচ্ছি। ভবিষ্যতে আপনার ব্যবসার নিয়ম পরিবর্তন হলে বা নতুন ফিল্ড যোগ করতে চাইলে নির্দ্বিধায় কাস্টমাইজ করতে পারবেন।',
      color: 'from-teal-500/20 to-emerald-500/20 text-teal-400 border-teal-500/30'
    }
  ];

  return (
    <section id="why-gas" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 text-xs font-bold mb-3">
            <span>প্রযুক্তিগত উৎকর্ষতা</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-normal">
            কেন গুগল অ্যাপস স্ক্রিপ্ট পিওএস সেরা পছন্দ?
          </h2>
          <p className="mt-3 text-base text-slate-300 font-medium">
            আধুনিক রিটেইল শপ, শোরুম ও ডিলারশিপের জন্য সবচেয়ে সাশ্রয়ী, নিরাপদ ও ঝামেলামুক্ত ক্লাউড সমাধান।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {points.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-slate-950/70 rounded-2xl p-7 border border-slate-800 shadow-xl hover:border-slate-700 transition-all duration-200 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} border flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-white mb-2.5">
                  {p.titleBn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
                  {p.descBn}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
