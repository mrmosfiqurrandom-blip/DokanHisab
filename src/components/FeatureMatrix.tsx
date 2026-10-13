import React from 'react';
import { Check, X, ShieldCheck } from 'lucide-react';
import { COMPARISON_FEATURES } from '../data/packagesData';

interface FeatureMatrixProps {
  onSelectPackage: (packageId: 'basic' | 'medium' | 'premium') => void;
}

export const FeatureMatrix: React.FC<FeatureMatrixProps> = ({ onSelectPackage }) => {
  return (
    <section id="comparison" className="py-20 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-bold mb-3">
            <span>ফিচার ও সার্ভিসের পূর্ণাঙ্গ তুলনা</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-normal">
            কোন প্যাকেজে কী কী সুবিধা পাবেন?
          </h2>
          <p className="mt-2 text-base text-slate-300 font-medium">
            আপনার ব্যবসার প্রয়োজনীয়তা অনুসারে প্রতিটি প্যাকেজের তুলনামূলক বিবরণ
          </p>
        </div>

        {/* Modern Table */}
        <div className="max-w-5xl mx-auto bg-slate-900/90 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-md">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/80 text-xs sm:text-sm">
                  <th className="py-5 px-5 sm:px-7 font-extrabold text-slate-200 w-2/5">ফিচার / সার্ভিস</th>
                  <th className="py-5 px-4 text-center font-bold text-slate-300 w-1/5">
                    <div>বেসিক</div>
                    <div className="text-xs font-mono text-slate-400 font-normal">২,০০০ ৳</div>
                  </th>
                  <th className="py-5 px-4 text-center font-black w-1/5 bg-emerald-950/60 border-x border-emerald-500/30 text-emerald-300">
                    <div>মিডিয়াম (পপুলার)</div>
                    <div className="text-xs font-mono text-amber-300 font-bold">৪,০০০ ৳</div>
                  </th>
                  <th className="py-5 px-4 text-center font-bold text-amber-300 w-1/5">
                    <div>প্রিমিয়াম</div>
                    <div className="text-xs font-mono text-amber-400 font-normal">৬,০০০ ৳</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm">
                {COMPARISON_FEATURES.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-900/50' : 'bg-slate-950/40'}>
                    <td className="py-4 px-5 sm:px-7">
                      <div className="font-bold text-white">{item.featureNameBn}</div>
                      <div className="text-[11px] text-slate-400 font-medium">{item.featureDescBn}</div>
                    </td>

                    {/* Basic */}
                    <td className="py-4 px-4 text-center">
                      {typeof item.basic === 'boolean' ? (
                        item.basic ? (
                          <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-slate-600 mx-auto" />
                        )
                      ) : (
                        <span className="font-bold text-slate-300">{item.basic}</span>
                      )}
                    </td>

                    {/* Medium (Highlighted) */}
                    <td className="py-4 px-4 text-center bg-emerald-950/30 border-x border-emerald-500/20 font-bold">
                      {typeof item.medium === 'boolean' ? (
                        item.medium ? (
                          <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-slate-600 mx-auto" />
                        )
                      ) : (
                        <span className="font-black text-emerald-300">{item.medium}</span>
                      )}
                    </td>

                    {/* Premium */}
                    <td className="py-4 px-4 text-center">
                      {typeof item.premium === 'boolean' ? (
                        item.premium ? (
                          <Check className="w-5 h-5 text-amber-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-slate-600 mx-auto" />
                        )
                      ) : (
                        <span className="font-black text-amber-300">{item.premium}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-slate-800 bg-slate-950">
                  <td className="py-4 px-5 sm:px-7 text-xs text-slate-400 font-medium">
                    * সকল প্যাকেজেই গুগল শিট ও ক্লাউড ড্রাইভের আজীবন ফ্রি ব্যবহার নিশ্চিত।
                  </td>
                  <td className="py-4 px-4 text-center">
                    <button
                      onClick={() => onSelectPackage('basic')}
                      className="px-3.5 py-2 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition-colors cursor-pointer"
                    >
                      বেসিক
                    </button>
                  </td>
                  <td className="py-4 px-4 text-center bg-emerald-950/40 border-x border-emerald-500/30">
                    <button
                      onClick={() => onSelectPackage('medium')}
                      className="px-4 py-2 text-xs font-black bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 rounded-xl transition-all shadow-md shadow-emerald-500/20 hover:scale-105 cursor-pointer"
                    >
                      মিডিয়াম
                    </button>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <button
                      onClick={() => onSelectPackage('premium')}
                      className="px-3.5 py-2 text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl transition-colors cursor-pointer"
                    >
                      প্রিমিয়াম
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
