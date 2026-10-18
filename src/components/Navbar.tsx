import React from 'react';
import { ShoppingBag, MessageCircle, Layers, Home, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

interface NavbarProps {
  onOpenOrderModal: (packageId?: 'basic' | 'medium' | 'premium', appId?: string) => void;
  onNavigate: (view: 'home' | 'demos' | 'payment') => void;
  activeView: 'home' | 'demos' | 'payment';
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal, onNavigate, activeView }) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo & Brand: DokanHisab */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onNavigate('home')} 
              className="flex items-center gap-3 group text-left cursor-pointer"
            >
              <div className="relative">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-amber-400 p-[1.5px] shadow-lg shadow-emerald-950/50">
                  <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold">
                    <span className="font-mono text-xs sm:text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">
                      DH
                    </span>
                  </div>
                </div>
                <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg sm:text-xl font-black text-white tracking-wide">
                    {SITE_CONFIG.sellerName}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-300 bg-emerald-950/90 px-2 py-0.5 rounded-md border border-emerald-700/60 hidden sm:inline-block">
                    {SITE_CONFIG.brandBangla}
                  </span>
                </div>
                <p className="text-[11px] font-bold text-slate-400 hidden sm:block">
                  গুগল ক্লাউড পিওএস সফটওয়্যার
                </p>
              </div>
            </button>
          </div>

          {/* Clean Menu: Only Home and Live Demos (as requested) */}
          <nav className="hidden md:flex items-center gap-2 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800">
            <button
              onClick={() => onNavigate('home')}
              className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeView === 'home'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>হোম</span>
            </button>

            <button
              onClick={() => onNavigate('demos')}
              className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-1.5 relative ${
                activeView === 'demos'
                  ? 'bg-emerald-500 text-slate-950 shadow-md font-black'
                  : 'text-emerald-400 hover:text-emerald-300 hover:bg-slate-800/60'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>ডেমো প্রজেক্টস</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono font-bold ${
                activeView === 'demos' ? 'bg-slate-950 text-emerald-300' : 'bg-emerald-950 text-emerald-300 border border-emerald-700/50'
              }`}>
                ৪টি লাইভ
              </span>
            </button>
          </nav>

          {/* Action CTAs: Direct Call & WhatsApp & Order */}
          <div className="flex items-center gap-2.5">
            <a
              href={`tel:${SITE_CONFIG.whatsappNumber}`}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all"
              title="সরাসরি ফোন কল"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-mono">{SITE_CONFIG.displayPhone}</span>
            </a>

            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent('আসসালামু আলাইকুম! DokanHisab থেকে পিওএস সফটওয়্যার সম্পর্কে জানতে চাই।')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-bold text-emerald-300 bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-600/50 rounded-xl transition-all shadow-sm active:scale-95"
              title="হোয়াটসঅ্যাপে চ্যাট করুন"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline font-mono font-bold">WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenOrderModal('medium')}
              className="inline-flex items-center gap-1.5 px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-black text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-500 rounded-xl shadow-lg shadow-amber-500/20 active:scale-95 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-slate-950" />
              <span>অর্ডার করুন</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
