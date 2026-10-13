import React from 'react';
import { ShoppingBag, Play, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

interface StickyBottomCtaProps {
  onOpenOrderModal: () => void;
}

export const StickyBottomCta: React.FC<StickyBottomCtaProps> = ({ onOpenOrderModal }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 p-3 sm:hidden shadow-2xl">
      <div className="flex items-center gap-2">
        <a
          href="#demos"
          className="flex-1 py-3 px-3 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition-colors"
        >
          <Play className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>ডেমো দেখুন</span>
        </a>

        <button
          onClick={onOpenOrderModal}
          className="flex-1 py-3 px-3 bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20 active:scale-95 transition-all cursor-pointer"
        >
          <ShoppingBag className="w-3.5 h-3.5 text-slate-950" />
          <span>অর্ডার করুন</span>
        </button>

        <a
          href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent('আসসালামু আলাইকুম, আমি গুগল অ্যাপস স্ক্রিপ্ট পিওএস সফটওয়্যার সম্পর্কে জানতে চাই।')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl flex items-center justify-center shadow-md shadow-emerald-600/30 active:scale-95"
          title="হোয়াটসঅ্যাপ"
        >
          <MessageCircle className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
