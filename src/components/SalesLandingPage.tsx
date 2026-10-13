import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Play, 
  ExternalLink, 
  Copy, 
  Check, 
  MessageCircle, 
  ShoppingBag, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Star, 
  Zap, 
  TrendingUp, 
  Printer, 
  Database, 
  Cloud,
  ChevronRight,
  User,
  Phone,
  Building,
  Key,
  Shirt,
  BatteryCharging
} from 'lucide-react';
import { DEMO_APPS, DemoApp } from '../data/appsData';
import { PRICING_PACKAGES } from '../data/packagesData';
import { SITE_CONFIG } from '../data/siteConfig';

interface SalesLandingPageProps {
  appId: 'fashion-garments-pos' | 'janani-battery-pos' | 'all';
  onBackToMain: () => void;
  onOpenOrderModal: (packageId?: 'basic' | 'medium' | 'premium', appId?: string) => void;
}

export const SalesLandingPage: React.FC<SalesLandingPageProps> = ({
  appId,
  onBackToMain,
  onOpenOrderModal
}) => {
  const [selectedAppId, setSelectedAppId] = useState<'fashion-garments-pos' | 'janani-battery-pos'>(
    appId === 'janani-battery-pos' ? 'janani-battery-pos' : 'fashion-garments-pos'
  );
  const [selectedPackageId, setSelectedPackageId] = useState<'basic' | 'medium' | 'premium'>('medium');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Quick Inline Order Form state
  const [name, setName] = useState('');
  const [shopName, setShopName] = useState('');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState('');
  const [notes, setNotes] = useState('');

  // Countdown timer for urgency
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 28, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const currentApp = DEMO_APPS.find(a => a.id === selectedAppId) || DEMO_APPS[0];
  const isGarment = selectedAppId === 'fashion-garments-pos';
  const currentPackage = PRICING_PACKAGES.find(p => p.id === selectedPackageId) || PRICING_PACKAGES[1];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleDirectWhatsAppOrder = () => {
    const message = `*আসসালামু আলাইকুম! DokanHisab থেকে সরাসরি পিওএস অর্ডার করতে চাই।*
----------------------------------------
*নির্বাচিত অ্যাপ্লিকেশন:* ${currentApp.name}
*প্যাকেজ:* ${currentPackage.nameBn} (${currentPackage.priceFormatted})
----------------------------------------
*অর্ডারকারীর তথ্য:*
• নাম: ${name || 'নাম উল্লেখ নেই'}
• দোকানের নাম: ${shopName || 'দোকান উল্লেখ নেই'}
• মোবাইল নম্বর: ${phone || 'নম্বর উল্লেখ নেই'}
• জেলা / ঠিকানা: ${district || 'ঠিকানা উল্লেখ নেই'}
${notes ? `• বিশেষ চাহিদা: ${notes}` : ''}
----------------------------------------
দয়া করে দ্রুত সেটআপ ও ডেলিভারির প্রক্রিয়া সম্পন্ন করুন। ধন্যবাদ!`;

    const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Top Notification Bar with Countdown */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 px-4 py-2 text-center text-xs sm:text-sm font-black text-slate-950 flex flex-wrap items-center justify-center gap-2 shadow-md">
        <span className="flex items-center gap-1">
          <Zap className="w-4 h-4 fill-slate-950" />
          <span>বিশেষ লিমিটেড অফার: গুগল ক্লাউড পিওএস সফটওয়্যারে আজীবন ০৳ মাসিক ফি!</span>
        </span>
        <span className="bg-slate-950 text-amber-300 px-2.5 py-0.5 rounded-full font-mono text-xs font-black">
          বাকি সময়: {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
        </span>
      </div>

      {/* Landing Page Sub-Navigation */}
      <div className="border-b border-slate-800 bg-slate-900/90 sticky top-0 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToMain}
              className="text-xs font-bold text-slate-400 hover:text-white px-2.5 py-1.5 rounded-lg bg-slate-800 transition-colors cursor-pointer"
            >
              ← মেইন পেজে ফিরুন
            </button>
            <span className="text-sm font-black text-white hidden sm:inline">
              DokanHisab সেলস পেজ
            </span>
          </div>

          {/* App Switcher Tabs */}
          <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setSelectedAppId('fashion-garments-pos')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                isGarment
                  ? 'bg-emerald-500 text-slate-950 shadow-md font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Shirt className="w-3.5 h-3.5" />
              <span>গার্মেন্টস পিওএস</span>
            </button>
            <button
              onClick={() => setSelectedAppId('janani-battery-pos')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                !isGarment
                  ? 'bg-blue-500 text-slate-950 shadow-md font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BatteryCharging className="w-3.5 h-3.5" />
              <span>ব্যাটারি হাউস পিওএস</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Sales Pitch */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-emerald-500/40 text-xs font-bold text-emerald-300 mb-4">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>১০০% রেডিমেড ফুললি ফাংশনাল ক্লাউড পিওএস</span>
            <span className="text-slate-600">|</span>
            <span className="text-amber-300">আজীবন ব্যবহারের লাইসেন্স</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
            আপনার {isGarment ? 'পোশাকের শোরুম ও গার্মেন্টস' : 'ব্যাটারি, আইপিএস ও ইলেকট্রনিক্স'} ব্যবসার সম্পূর্ণ অটোমেশন{' '}
            <span className={`text-transparent bg-clip-text ${
              isGarment 
                ? 'bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300' 
                : 'bg-gradient-to-r from-blue-400 via-cyan-300 to-amber-300'
            }`}>
              DokanHisab
            </span>{' '}
            ক্লাউড সফটওয়্যারে
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed">
            {currentApp.description} কোনো মাসিক সার্ভার ফি নেই—আপনার সমস্ত ডাটা থাকবে আপনার ব্যক্তিগত গুগল ড্রাইভে নিরাপদ।
          </p>

          {/* Quick Demo Access Bar */}
          <div className="mt-8 max-w-2xl mx-auto bg-slate-900/90 rounded-2xl p-4 border border-amber-500/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left w-full sm:w-auto">
              <div className="flex items-center gap-2 text-xs font-black text-amber-400">
                <Key className="w-3.5 h-3.5 text-amber-400" />
                <span>লাইভ ডেমো ক্রেডেনশিয়াল:</span>
              </div>
              <div className="flex items-center gap-3 mt-1 text-xs font-mono font-bold">
                <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-800 text-emerald-400">
                  {currentApp.credentials.usernameLabel}: {currentApp.credentials.username}
                </span>
                <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-800 text-amber-300">
                  {currentApp.credentials.passwordLabel}: {currentApp.credentials.password}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => handleCopy(`${currentApp.credentials.username} / ${currentApp.credentials.password}`, 'sales-cred')}
                className="flex-1 sm:flex-none px-3 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                {copiedKey === 'sales-cred' ? 'কপি হয়েছে' : 'কপি করুন'}
              </button>
              <a
                href={currentApp.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-md"
              >
                <span>সরাসরি টেস্ট করুন</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="py-12 bg-slate-900/60 border-y border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-center text-white mb-8">
            কেন এই সফটওয়্যারটি আপনার ব্যবসার জন্য অপরিহার্য?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {currentApp.features.map((feat, idx) => (
              <div key={idx} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 shadow-md flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm font-bold text-slate-200">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Order Form on Landing Page */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl border-2 border-emerald-500/50 p-6 sm:p-10 shadow-2xl">
          <div className="text-center mb-8">
            <span className="text-xs font-black text-amber-400 uppercase tracking-wider">
              তাত্ক্ষণিক অর্ডার ও বুকিং
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white mt-1">
              আজই আপনার দোকানের জন্য সংগ্রহ করুন
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
              ফরমটি পূরণ করে WhatsApp-এ পাঠান, আমাদের টিম সরাসরি আপনাকে সেটআপ বুঝিয়ে দেবে।
            </p>
          </div>

          {/* Package Selection */}
          <div className="mb-6">
            <label className="block text-xs font-black text-slate-300 uppercase mb-2">
              প্যাকেজ নির্বাচন করুন:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {PRICING_PACKAGES.map((pkg) => (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => setSelectedPackageId(pkg.id)}
                  className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all ${
                    selectedPackageId === pkg.id
                      ? 'border-emerald-400 bg-emerald-950/60 ring-1 ring-emerald-400'
                      : 'border-slate-800 bg-slate-950 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-white">{pkg.nameBn}</span>
                    {pkg.isPopular && (
                      <span className="text-[10px] bg-emerald-400 text-slate-950 px-1.5 py-0.2 rounded font-black">
                        পপুলার
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-1">{pkg.subtitleBn}</div>
                  <div className="text-lg font-black font-mono text-amber-300 mt-2">
                    {pkg.priceFormatted}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Form Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-xs text-slate-300 font-bold mb-1">আপনার নাম *</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="আপনার নাম"
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400 font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-300 font-bold mb-1">দোকানের নাম *</label>
              <div className="relative">
                <Building className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                <input
                  type="text"
                  value={shopName}
                  onChange={(e) => setShopName(e.target.value)}
                  placeholder="দোকান বা শোরুমের নাম"
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400 font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-300 font-bold mb-1">মোবাইল / হোয়াটসঅ্যাপ নম্বর *</label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="01XXXXXXXXX"
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400 font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-300 font-bold mb-1">ঠিকানা / জেলা</label>
              <input
                type="text"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                placeholder="যেমন: ধানমন্ডি, ঢাকা"
                className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400 font-medium"
              />
            </div>
          </div>

          {/* Pricing Summary & Direct WhatsApp Order */}
          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs text-slate-400 font-bold">মোট প্রদেয় এককালীন ফি:</div>
              <div className="text-3xl font-black font-mono text-amber-300 mt-0.5">
                {currentPackage.priceFormatted}
              </div>
              <div className="text-xs text-emerald-400 font-bold">০৳ মাসিক ফি • আজীবন লাইসেন্স</div>
            </div>

            <button
              onClick={handleDirectWhatsAppOrder}
              className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-sm rounded-xl shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>হোয়াটসঅ্যাপে অর্ডার পাঠান ({SITE_CONFIG.displayPhone})</span>
            </button>
          </div>

          <div className="mt-4 text-center text-xs text-slate-400 font-medium flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>সরাসরি কথা বলুন: {SITE_CONFIG.displayPhone} • AnyDesk / Meet-এ লাইভ সেটআপ সহায়তা</span>
          </div>
        </div>
      </section>
    </div>
  );
};
