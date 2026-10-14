import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group">
      {/* Tooltip on hover */}
      <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-700 shadow-xl whitespace-nowrap">
        <span>সরাসরি হোয়াটসঅ্যাপে কথা বলুন</span>
      </div>

      {/* Pulsing Floating Button */}
      <a
        href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent('আসসালামু আলাইকুম! DokanHisab থেকে পিওএস সফটওয়্যার সম্পর্কে সরাসরি কথা বলতে চাই।')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-500/50 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Radar ping ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none"></span>
        <MessageCircle className="w-7 h-7 fill-white text-white drop-shadow-md" />
      </a>
    </div>
  );
};
