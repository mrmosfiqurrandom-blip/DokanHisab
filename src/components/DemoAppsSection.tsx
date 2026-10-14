import React, { useState } from 'react';
import { 
  ExternalLink, 
  Copy, 
  Check, 
  Key, 
  User, 
  CheckCircle2, 
  ShoppingBag, 
  Sparkles,
  Shirt,
  BatteryCharging,
  ArrowRight,
  ShieldCheck,
  Eye
} from 'lucide-react';
import { DEMO_APPS, DemoApp } from '../data/appsData';

interface DemoAppsSectionProps {
  onSelectAppForOrder: (appId: string) => void;
  onOpenDemoDetails: (app: DemoApp) => void;
}

export const DemoAppsSection: React.FC<DemoAppsSectionProps> = ({ 
  onSelectAppForOrder,
  onOpenDemoDetails 
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, keyId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(keyId);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  return (
    <section id="demos" className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2"></div>
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-bold mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>লাইভ এক্সেস উন্মুক্ত</span>
            <span className="text-slate-600">|</span>
            <span>১০০% কার্যকরী ডেমো</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-normal">
            লাইভ ডেমো অ্যাপ্লিকেশনসমূহ
          </h2>
          <p className="mt-3 text-base text-slate-300 font-medium max-w-2xl mx-auto">
            নিচের ইউজারনেম ও পাসওয়ার্ড ব্যবহার করে সরাসরি ওয়েব অ্যাপ্লিকেশনটি টেস্ট করুন। 
            মোবাইল বা কম্পিউটার—যেকোনো ডিভাইসে পরীক্ষা করে দেখতে পারেন।
          </p>
        </div>

        {/* Demo Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {DEMO_APPS.map((app) => {
            const isGarment = app.id === 'fashion-garments-pos';
            const theme = isGarment
              ? {
                  border: 'border-emerald-500/40 hover:border-emerald-400',
                  bgGradient: 'from-emerald-950/30 via-slate-900 to-slate-900',
                  iconBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
                  badgeText: 'text-emerald-300 bg-emerald-950/80 border-emerald-700/50',
                  btnLaunch: 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-emerald-500/25',
                  credentialBox: 'border-emerald-800/50 bg-emerald-950/40'
                }
              : {
                  border: 'border-blue-500/40 hover:border-blue-400',
                  bgGradient: 'from-blue-950/30 via-slate-900 to-slate-900',
                  iconBg: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
                  badgeText: 'text-blue-300 bg-blue-950/80 border-blue-700/50',
                  btnLaunch: 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-slate-950 shadow-blue-500/25',
                  credentialBox: 'border-blue-800/50 bg-blue-950/40'
                };

            return (
              <div 
                key={app.id}
                className={`group relative rounded-3xl border ${theme.border} bg-gradient-to-b ${theme.bgGradient} backdrop-blur-md shadow-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Top Header */}
                <div className="p-6 sm:p-8 border-b border-slate-800/80">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-inner ${theme.iconBg}`}>
                        {isGarment ? (
                          <Shirt className="w-7 h-7" />
                        ) : (
                          <BatteryCharging className="w-7 h-7" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${theme.badgeText}`}>
                            {app.category}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                          {app.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-slate-300 font-medium leading-relaxed">
                    {app.description}
                  </p>
                </div>

                {/* Glowing Credentials Box */}
                <div className={`p-5 sm:p-6 border-b border-slate-800 ${theme.credentialBox}`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                      <Key className="w-4 h-4 text-amber-400" />
                      <span>ডেমো লগইন তথ্য (ক্লিক করে কপি করুন):</span>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400">
                      ১-ক্লিক কপি
                    </span>
                  </div>

                  {!app.requiresAuth ? (
                    <div className="flex items-center justify-between text-xs font-bold text-emerald-300 bg-slate-900/90 p-3 rounded-xl border border-emerald-700/50">
                      <span>সরাসরি ওপেন এক্সেস — কোনো আইডি বা পাসওয়ার্ড প্রয়োজন নেই</span>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* User / ID Box */}
                      {app.credentials?.username && (
                        <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-700/80 flex items-center justify-between shadow-inner">
                          <div className="flex items-center gap-2 truncate">
                            <User className="w-4 h-4 text-slate-400 shrink-0" />
                            <span className="text-xs text-slate-400 font-bold shrink-0">
                              {app.credentials.usernameLabel || 'User'}:
                            </span>
                            <code className="text-xs font-mono font-bold text-emerald-300 bg-slate-950 px-2 py-0.5 rounded border border-slate-700 truncate">
                              {app.credentials.username}
                            </code>
                          </div>
                          <button
                            onClick={() => handleCopy(app.credentials?.username || '', `${app.id}-user`)}
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0 ml-2"
                            title="কপি করুন"
                          >
                            {copiedKey === `${app.id}-user` ? (
                              <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-bold">
                                <Check className="w-3.5 h-3.5" /> কপিড
                              </span>
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      )}

                      {/* Password Box */}
                      {app.credentials?.password && (
                        <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-700/80 flex items-center justify-between shadow-inner">
                          <div className="flex items-center gap-2 truncate">
                            <Key className="w-4 h-4 text-slate-400 shrink-0" />
                            <span className="text-xs text-slate-400 font-bold shrink-0">
                              {app.credentials.passwordLabel || 'Pass'}:
                            </span>
                            <code className="text-xs font-mono font-bold text-amber-300 bg-slate-950 px-2 py-0.5 rounded border border-slate-700 truncate">
                              {app.credentials.password}
                            </code>
                          </div>
                          <button
                            onClick={() => handleCopy(app.credentials?.password || '', `${app.id}-pass`)}
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0 ml-2"
                            title="কপি করুন"
                          >
                            {copiedKey === `${app.id}-pass` ? (
                              <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-bold">
                                <Check className="w-3.5 h-3.5" /> কপিড
                              </span>
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Features List */}
                <div className="p-6 sm:p-8 flex-1">
                  <div className="text-xs font-extrabold text-slate-200 uppercase tracking-wider mb-3">
                    প্রধান সুবিধাসমূহ:
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                    {app.features.slice(0, 5).map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="font-semibold text-slate-200">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-4 border-t border-slate-800 text-xs">
                    <span className="font-bold text-slate-400">উপযোগী ব্যবসা: </span>
                    <span className="text-slate-300 font-medium">
                      {app.bestFor.join(' • ')}
                    </span>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 sm:p-8 pt-0 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={app.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-extrabold text-xs sm:text-sm shadow-lg transition-all hover:scale-[1.02] active:scale-95 ${theme.btnLaunch}`}
                  >
                    <span>সরাসরি ডেমো ওপেন করুন</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => onSelectAppForOrder(app.id)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4 text-amber-400" />
                    <span>অর্ডার করুন</span>
                  </button>

                  <button
                    onClick={() => onOpenDemoDetails(app)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>গাইড</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Application Banner */}
        <div className="mt-10 max-w-4xl mx-auto rounded-2xl p-5 sm:p-6 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 mx-auto sm:mx-0 border border-indigo-500/30">
              <Sparkles className="w-5 h-5 text-indigo-300" />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-base">
                নির্দিষ্ট কোনো ব্যবসার জন্য কাস্টম গুগল অ্যাপস স্ক্রিপ্ট চান?
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm mt-0.5 font-medium">
                ফার্মেসি, রেস্টুরেন্ট, মোবাইল শপ বা যেকোনো কাস্টম অটোমেশন দ্রুত তৈরি করে দেওয়া হয়।
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectAppForOrder('custom')}
            className="shrink-0 px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 text-white font-extrabold rounded-xl text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
          >
            কাস্টম সফটওয়্যার রিকোয়ারমেন্ট
          </button>
        </div>
      </div>
    </section>
  );
};
