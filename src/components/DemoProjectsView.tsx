import React, { useState } from 'react';
import { 
  ExternalLink, 
  Copy, 
  Check, 
  Key, 
  ShoppingBag, 
  Sparkles, 
  Truck, 
  Cpu, 
  Store, 
  Shirt, 
  ArrowLeft,
  Search,
  CheckCircle2,
  ShieldCheck,
  MessageCircle
} from 'lucide-react';
import { DEMO_APPS, DemoApp } from '../data/appsData';
import { SITE_CONFIG } from '../data/siteConfig';

interface DemoProjectsViewProps {
  onSelectAppForOrder: (appId: string) => void;
  onOpenDemoDetails: (app: DemoApp) => void;
  onBackToHome: () => void;
}

export const DemoProjectsView: React.FC<DemoProjectsViewProps> = ({
  onSelectAppForOrder,
  onOpenDemoDetails,
  onBackToHome
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCopy = (text: string, keyId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(keyId);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const filteredApps = DEMO_APPS.filter(app => {
    return (
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Truck': return <Truck className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Store': return <Store className="w-5 h-5" />;
      case 'Shirt': return <Shirt className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans pb-24">
      {/* Top Banner / Header */}
      <div className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md pt-8 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>৪টি লাইভ অ্যাপ্লিকেশন টেস্ট রেডি</span>
                <span className="text-slate-600">|</span>
                <span>Google Apps Script Solutions</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-normal">
                লাইভ ডেমো প্রজেক্ট গ্যালারি
              </h1>
              <p className="mt-2 text-sm sm:text-base text-slate-300 font-medium max-w-2xl leading-relaxed">
                আপনার ব্যবসার জন্য সবচেয়ে উপযোগী সফটওয়্যারটি সরাসরি টেস্ট করে দেখুন। 
                নিচের যেকোনো অ্যাপে ক্লিক করে মোবাইল বা কম্পিউটারে লাইভ পরীক্ষা করতে পারবেন।
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onBackToHome}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold border border-slate-700 transition-colors cursor-pointer flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>হোম পেজে ফিরুন</span>
              </button>
            </div>
          </div>

          {/* Search Box */}
          <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 font-medium">
              সবগুলো প্রজেক্টে একই ডেমো লগইন: User: <code className="text-emerald-400 font-bold">admin</code> | Pass: <code className="text-amber-300 font-bold">Random@#$12345</code>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="প্রজেক্ট সার্চ করুন..."
                className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 font-medium"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className="group relative rounded-3xl border border-slate-800 bg-slate-900/90 hover:border-slate-700 backdrop-blur-md shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header Card */}
              <div className="p-6 sm:p-7 border-b border-slate-800/80">
                <div className="flex items-start justify-between gap-3">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-950 border border-slate-800 text-amber-300 shadow-inner group-hover:scale-105 transition-transform">
                    {renderIcon(app.previewTheme.icon)}
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md border ${app.previewTheme.badgeColor}`}>
                    {app.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white mt-4 group-hover:text-amber-300 transition-colors">
                  {app.name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                  {app.description}
                </p>
              </div>

              {/* Credentials Strip */}
              <div className="p-4 bg-slate-950/80 border-b border-slate-800 text-xs">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-bold text-amber-400 mb-1">
                    <span className="flex items-center gap-1.5">
                      <Key className="w-3.5 h-3.5" />
                      <span>ডেমো লগইন ক্রেডেনশিয়াল:</span>
                    </span>
                    <span className="text-slate-500 font-normal">ক্লিক করে কপি করুন</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="flex items-center justify-between bg-slate-900 px-3 py-2 rounded-xl border border-slate-800">
                      <div className="flex items-center gap-2 truncate">
                        <span className="text-slate-400 text-xs font-bold">User:</span>
                        <code className="text-emerald-300 font-mono font-bold text-xs">
                          {app.credentials.username}
                        </code>
                      </div>
                      <button
                        onClick={() => handleCopy(app.credentials.username, `${app.id}-u`)}
                        className="text-slate-400 hover:text-white text-xs font-bold px-2 py-0.5 rounded hover:bg-slate-800 cursor-pointer"
                      >
                        {copiedKey === `${app.id}-u` ? <span className="text-emerald-400">কপিড</span> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    <div className="flex items-center justify-between bg-slate-900 px-3 py-2 rounded-xl border border-slate-800">
                      <div className="flex items-center gap-2 truncate">
                        <span className="text-slate-400 text-xs font-bold">Pass:</span>
                        <code className="text-amber-300 font-mono font-bold text-xs truncate">
                          {app.credentials.password}
                        </code>
                      </div>
                      <button
                        onClick={() => handleCopy(app.credentials.password, `${app.id}-p`)}
                        className="text-slate-400 hover:text-white text-xs font-bold px-2 py-0.5 rounded hover:bg-slate-800 cursor-pointer"
                      >
                        {copiedKey === `${app.id}-p` ? <span className="text-emerald-400">কপিড</span> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features list */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-black text-slate-300 uppercase tracking-wider mb-3">
                    মূল ফিচারসমূহ:
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {app.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="font-semibold text-slate-200">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800 text-xs text-slate-400 font-medium">
                  <span className="font-bold text-slate-300">যাদের জন্য উপযোগী:</span> {app.bestFor.join(' • ')}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <a
                  href={app.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl font-black text-xs sm:text-sm bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
                >
                  <span>ডেমো টেস্ট করুন</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => onSelectAppForOrder(app.id)}
                  className="py-3 px-4 rounded-xl font-black text-xs sm:text-sm bg-amber-400 hover:bg-amber-300 text-slate-950 flex items-center justify-center gap-1.5 cursor-pointer transition-all active:scale-95 shadow-md"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>অর্ডার ও বিকাশ পেমেন্ট</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Application Banner */}
        <div className="mt-12 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-emerald-950/40 to-slate-900 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl">
          <div>
            <div className="text-xs font-black text-amber-400 uppercase tracking-wider">
              কাস্টম রিকোয়ারমেন্ট সলিউশন
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              আপনার কি নিজস্ব ধরনের নির্দিষ্ট কোনো সিস্টেম প্রয়োজন?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1 max-w-xl">
              যেকোনো ধরণের বিজনেস লজিক, ফর্মুলা বা স্পেসিফিক ফিল্ড দিয়ে গুগল অ্যাপস স্ক্রিপ্ট তৈরি করে দেওয়া হয়।
            </p>
          </div>

          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent('আসসালামু আলাইকুম! DokanHisab থেকে আমার ব্যবসার জন্য কাস্টম গুগল অ্যাপস স্ক্রিপ্ট সফটওয়্যার তৈরি করতে চাই।')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-lg transition-all active:scale-95 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp-এ বিস্তারিত পাঠান ({SITE_CONFIG.displayPhone})</span>
          </a>
        </div>
      </div>
    </div>
  );
};
