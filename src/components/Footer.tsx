import React from 'react';
import { Mail, Phone, MessageCircle, ShieldCheck, Heart } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="no-print bg-slate-950 text-slate-300 pt-16 pb-28 sm:pb-16 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-amber-400 p-[1.5px]">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold">
                  <span className="font-mono text-xs font-black text-emerald-400">DH</span>
                </div>
              </div>
              <span className="text-xl font-black text-white tracking-wide">
                {SITE_CONFIG.sellerName}
              </span>
            </div>
            <p className="mt-4 text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed font-medium">
              গুগল অ্যাপস স্ক্রিপ্ট (Google Apps Script) ও গুগল স্প্রেডশিট চালিত 
              হাই-পারফরম্যান্স রিটেইল পিওএস ও ইনভেন্টরি ম্যানেজমেন্ট সলিউশন। 
              আজীবন ০৳ হোস্টিং খরচে আপনার শপ অটোমেশন করুন।
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs font-bold text-emerald-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>১০০% আসল সোর্স কোড ও ফুল ওনারশিপ গ্যারান্টি</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-xs font-black text-white uppercase tracking-wider mb-4">
              প্রয়োজনীয় লিংকস
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400 font-semibold">
              <li>
                <a href="#demos" className="hover:text-emerald-400 transition-colors">
                  লাইভ ডেমো টেস্ট
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-emerald-400 transition-colors">
                  প্যাকেজ ও মূল্য তালিকা
                </a>
              </li>
              <li>
                <a href="#savings" className="hover:text-emerald-400 transition-colors">
                  খরচ সাশ্রয় ক্যালকুলেটর
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-emerald-400 transition-colors">
                  ফিচার তুলনা
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  প্রশ্নোত্তর (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <div className="text-xs font-black text-white uppercase tracking-wider mb-4">
              যোগাযোগ ও সহায়তা
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400 font-semibold">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${SITE_CONFIG.whatsappNumber}`} className="hover:text-white font-mono">
                  সরাসরি কল: {SITE_CONFIG.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white font-mono"
                >
                  WhatsApp: {SITE_CONFIG.displayPhone}
                </a>
              </div>
              <p className="text-[11px] text-slate-500 pt-1 font-medium">
                {SITE_CONFIG.supportHours}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-medium gap-3">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.sellerName} ({SITE_CONFIG.brandBangla}). সর্বস্বত্ব সংরক্ষিত।</p>
          <p className="flex items-center gap-1.5 text-slate-400">
            <span>গুগল ক্লাউড ও অ্যাপস স্ক্রিপ্ট প্রযুক্তিতে নির্মিত</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
