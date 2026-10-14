import React, { useState } from 'react';
import { X, ExternalLink, Copy, Check, Key, User, ShieldCheck, CheckCircle2, Zap } from 'lucide-react';
import { DemoApp } from '../data/appsData';

interface DemoModalProps {
  app: DemoApp | null;
  onClose: () => void;
  onOrderThisApp: (appId: string) => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ app, onClose, onOrderThisApp }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!app) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="bg-slate-900 text-white rounded-3xl max-w-xl w-full border border-slate-700 shadow-2xl overflow-hidden my-6">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <div>
            <div className="text-xs text-emerald-400 font-bold uppercase tracking-wider">লাইভ ডেমো গাইড</div>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              {app.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-5">
          <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
            {app.tagline}
          </p>

          {/* Credentials Card */}
          <div className="bg-slate-950 rounded-2xl p-4.5 border border-amber-500/30">
            {!app.requiresAuth ? (
              <div className="flex items-center gap-2.5 text-xs font-bold text-emerald-300 bg-emerald-950/40 p-3 rounded-xl border border-emerald-800/40">
                <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>সরাসরি ওপেন এক্সেস — কোনো ইউজার আইডি বা পাসওয়ার্ড লাগবে না। নিচের বাটনে ক্লিক করে সরাসরি টেস্ট করুন।</span>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-amber-300 mb-3">
                  <Key className="w-4 h-4 text-amber-400" />
                  <span>লগইন এক্সেস কোড (কপি করুন):</span>
                </div>

                <div className="space-y-2.5">
                  {app.credentials?.username && (
                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <User className="w-4 h-4 text-slate-400" />
                        <span className="text-xs text-slate-400 font-bold">{app.credentials.usernameLabel || 'Username'}:</span>
                        <code className="text-xs font-mono font-bold text-emerald-300 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                          {app.credentials.username}
                        </code>
                      </div>
                      <button
                        onClick={() => handleCopy(app.credentials?.username || '', 'modal-user')}
                        className="text-slate-400 hover:text-white text-xs font-bold cursor-pointer"
                      >
                        {copiedKey === 'modal-user' ? (
                          <span className="text-emerald-400 flex items-center gap-1"><Check className="w-3.5 h-3.5" /> কপিড</span>
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  )}

                  {app.credentials?.password && (
                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Key className="w-4 h-4 text-slate-400" />
                        <span className="text-xs text-slate-400 font-bold">{app.credentials.passwordLabel || 'Password'}:</span>
                        <code className="text-xs font-mono font-bold text-amber-300 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                          {app.credentials.password}
                        </code>
                      </div>
                      <button
                        onClick={() => handleCopy(app.credentials?.password || '', 'modal-pass')}
                        className="text-slate-400 hover:text-white text-xs font-bold cursor-pointer"
                      >
                        {copiedKey === 'modal-pass' ? (
                          <span className="text-emerald-400 flex items-center gap-1"><Check className="w-3.5 h-3.5" /> কপিড</span>
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Test checklist */}
          <div>
            <div className="text-xs font-black text-slate-200 uppercase tracking-wider mb-2.5">
              ডেমোতে যা যা টেস্ট করে দেখতে পারেন:
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-medium">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>নতুন একটি টেস্ট বিক্রয় সম্পন্ন করে থার্মাল ক্যাশ মেমো প্রিন্ট করুন।</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>ইনভেন্টরিতে নতুন প্রোডাক্ট এন্ট্রি বা স্টক কোয়ান্টিটি আপডেট দেখুন।</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>কাস্টমার বাকির খাতা ও পেমেন্ট রিসিভ হিস্ট্রি চেক করুন।</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>মোবাইল ব্রাউজারেও লিঙ্কটি ওপেন করে রেসপনসিভনেস যাচাই করুন।</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 sm:p-6 border-t border-slate-800 bg-slate-950 flex items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onOrderThisApp(app.id);
            }}
            className="px-5 py-2.5 text-xs sm:text-sm font-extrabold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors cursor-pointer"
          >
            অর্ডার করুন
          </button>

          <a
            href={app.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-black text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 rounded-xl transition-all shadow-md shadow-emerald-500/20"
          >
            <span>ব্রাউজারে ডেমো ওপেন করুন</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
