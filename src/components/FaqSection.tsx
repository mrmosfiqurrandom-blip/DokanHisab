import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_LIST } from '../data/siteConfig';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>সচরাচর জিজ্ঞাসিত প্রশ্নাবলী</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-normal">
            সাধারণ জিজ্ঞাসা ও উত্তর
          </h2>
          <p className="mt-2 text-base text-slate-400 font-medium">
            গুগল অ্যাপস স্ক্রিপ্ট পিওএস সফটওয়্যার কেনার আগে যা যা জানা জরুরি
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/60 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left bg-slate-900/80 hover:bg-slate-800/80 flex items-center justify-between gap-4 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-extrabold text-white">
                    {faq.questionBn}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-slate-300 font-medium border-t border-slate-800/80 bg-slate-950/50 leading-relaxed">
                    {faq.answerBn}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
