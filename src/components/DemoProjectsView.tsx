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
  Zap,
  Store,
  Layers,
  Shirt,
  BatteryCharging,
  ArrowRight,
  ShieldCheck,
  Search,
  Filter
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
  const [filter, setFilter] = useState<string>('all');
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
    const matchesFilter = filter === 'all' 
      ? true 
      : filter === 'open' 
      ? !app.requiresAuth 
      : filter === 'protected' 
      ? app.requiresAuth 
      : true;
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-6 h-6" />;
      case 'Store': return <Store className="w-6 h-6" />;
      case 'Layers': return <Layers className="w-6 h-6" />;
      case 'Shirt': return <Shirt className="w-6 h-6" />;
      case 'BatteryCharging': return <BatteryCharging className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans pb-24">
      {/* Top Banner / Header */}
      <div className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md pt-8 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>৫টি লাইভ অ্যাপ্লিকেশন টেস্ট রেডি</span>
                <span className="text-slate-600">|</span>
                <span>Google Apps Script Projects</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-normal">
                লাইভ ডেমো প্রজেক্ট গ্যালারি
              </h1>
              <p className="mt-2 text-sm sm:text-base text-slate-300 font-medium max-w-2xl leading-relaxed">
                আপনার ব্যবসায়ের জন্য সবচেয়ে উপযোগী সফটওয়্যারটি সরাসরি টেস্ট করে দেখুন। 
                নিচের যেকোনো অ্যাপে ক্লিক করে মোবাইল বা কম্পিউটারে লাইভ পরীক্ষা করতে পারবেন।
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onBackToHome}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold border border-slate-700 transition-colors cursor-pointer"
              >
                ← হোম স্টোরে ফিরুন
              </button>
            </div>
          </div>

          {/* Interactive Controls & Filters */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  filter === 'all'
                    ? 'bg-amber-400 text-slate-950 shadow-md font-black'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                সবগুলো প্রজেক্ট ({DEMO_APPS.length})
              </button>

              <button
                onClick={() => setFilter('open')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  filter === 'open'
                    ? 'bg-emerald-400 text-slate-950 shadow-md font-black'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>ওপেন এক্সেস (পাসওয়ার্ডবিহীন)</span>
              </button>

              <button
                onClick={() => setFilter('protected')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  filter === 'protected'
                    ? 'bg-blue-400 text-slate-950 shadow-md font-black'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <Key className="w-3.5 h-3.5" />
                <span>সিকিউরড লগইন সহ</span>
              </button>
            </div>

            {/* Search Box */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="প্রজেক্ট সার্চ করুন..."
                className="w-full pl-9 pr-3 py-1.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 font-medium"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApps.map((app) => {
            return (
              <div
                key={app.id}
                className="group relative rounded-3xl border border-slate-800 bg-slate-900/90 hover:border-slate-700 backdrop-blur-md shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
              >
                {/* Header Card */}
                <div className="p-6 border-b border-slate-800/80">
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-950 border border-slate-800 text-amber-300 shadow-inner group-hover:scale-105 transition-transform">
                      {renderIcon(app.previewTheme.icon)}
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${app.previewTheme.badgeColor}`}>
                      {app.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white mt-3.5 group-hover:text-amber-300 transition-colors">
                    {app.name}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 font-medium line-clamp-2 leading-relaxed">
                    {app.description}
                  </p>
                </div>

                {/* Credentials / Access Strip */}
                <div className="p-4 bg-slate-950/80 border-b border-slate-800 text-xs">
                  {!app.requiresAuth ? (
                    <div className="flex items-center justify-between text-emerald-300 font-bold bg-emerald-950/40 p-2 rounded-xl border border-emerald-800/40">
                      <div className="flex items-center gap-1.5">
                        <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>সরাসরি ওপেন এক্সেস (আইডি/পাসওয়ার্ড লাগবে না)</span>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] font-bold text-amber-400 mb-1">
                        <span>ডেমো লগইন তথ্য:</span>
                        <span className="text-slate-500 font-normal">ক্লিক করে কপি করুন</span>
                      </div>

                      {app.credentials?.username && (
                        <div className="flex items-center justify-between bg-slate-900 px-2.5 py-1.5 rounded-lg border border-slate-800">
                          <div className="flex items-center gap-2 truncate">
                            <span className="text-slate-500 text-[11px] font-bold">User:</span>
                            <code className="text-emerald-300 font-mono font-bold text-xs truncate">
                              {app.credentials.username}
                            </code>
                          </div>
                          <button
                            onClick={() => handleCopy(app.credentials?.username || '', `${app.id}-u`)}
                            className="text-slate-400 hover:text-white text-[11px] font-bold px-1.5 py-0.5 rounded hover:bg-slate-800 cursor-pointer"
                          >
                            {copiedKey === `${app.id}-u` ? <span className="text-emerald-400">কপিড</span> : <Copy className="w-3 h-3" />}
                          </button>
                        </div>
                      )}

                      {app.credentials?.password && (
                        <div className="flex items-center justify-between bg-slate-900 px-2.5 py-1.5 rounded-lg border border-slate-800">
                          <div className="flex items-center gap-2 truncate">
                            <span className="text-slate-500 text-[11px] font-bold">Pass:</span>
                            <code className="text-amber-300 font-mono font-bold text-xs truncate">
                              {app.credentials.password}
                            </code>
                          </div>
                          <button
                            onClick={() => handleCopy(app.credentials?.password || '', `${app.id}-p`)}
                            className="text-slate-400 hover:text-white text-[11px] font-bold px-1.5 py-0.5 rounded hover:bg-slate-800 cursor-pointer"
                          >
                            {copiedKey === `${app.id}-p` ? <span className="text-emerald-400">কপিড</span> : <Copy className="w-3 h-3" />}
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Features preview */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <ul className="space-y-2 text-xs text-slate-300">
                    {app.features.slice(0, 3).map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="font-semibold text-slate-300">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 font-medium">
                    <span className="font-bold text-slate-300">উপযোগী:</span> {app.bestFor.slice(0, 2).join(' • ')}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-5 pt-0 flex items-center gap-2">
                  <a
                    href={app.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl font-black text-xs bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-95"
                  >
                    <span>{app.requiresAuth ? 'ডেমো টেস্ট করুন' : 'সরাসরি ওপেন করুন'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => onSelectAppForOrder(app.id)}
                    className="py-2.5 px-3 rounded-xl font-bold text-xs bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 flex items-center justify-center gap-1 cursor-pointer transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
                    <span>অর্ডার</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Application Banner */}
        <div className="mt-12 rounded-3xl p-6 bg-gradient-to-r from-slate-900 via-emerald-950/40 to-slate-900 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <div className="text-xs font-black text-amber-400 uppercase tracking-wider">
              কাস্টম রিকোয়ারমেন্ট সলিউশন
            </div>
            <h3 className="text-xl font-black text-white mt-1">
              আপনার কি নিজস্ব ধরণের নির্দিষ্ট কোনো সিস্টেম প্রয়োজন?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
              যেকোনো ধরণের বিজনেস লজিক, ফর্মুলা বা স্পেসিফিক ফিল্ড দিয়ে গুগল অ্যাপস স্ক্রিপ্ট তৈরি করে দেওয়া হয়।
            </p>
          </div>

          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent('আসসালামু আলাইকুম! DokanHisab থেকে আমার ব্যবসার জন্য কাস্টম গুগল অ্যাপস স্ক্রিপ্ট সফটওয়্যার তৈরি করতে চাই।')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-lg transition-all active:scale-95"
          >
            কাস্টম রিকোয়ারমেন্ট পাঠান ({SITE_CONFIG.displayPhone})
          </a>
        </div>
      </div>
    </div>
  );
};
