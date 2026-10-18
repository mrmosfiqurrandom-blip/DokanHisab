import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  ShieldCheck, 
  ArrowRight, 
  Printer, 
  ExternalLink, 
  FileText, 
  Download, 
  MessageCircle, 
  Sparkles,
  CheckCircle2,
  Lock,
  Smartphone,
  ChevronRight,
  HelpCircle,
  Clock,
  ArrowLeft
} from 'lucide-react';
import { PRICING_PACKAGES } from '../data/packagesData';
import { DEMO_APPS } from '../data/appsData';
import { SITE_CONFIG } from '../data/siteConfig';

interface PaymentCheckoutPageProps {
  initialPackageId?: 'basic' | 'medium' | 'premium';
  initialAppId?: string;
  onBackToHome: () => void;
}

export const PaymentCheckoutPage: React.FC<PaymentCheckoutPageProps> = ({
  initialPackageId = 'medium',
  initialAppId = 'dealership-management-system',
  onBackToHome
}) => {
  const [selectedPackageId, setSelectedPackageId] = useState<'basic' | 'medium' | 'premium'>(initialPackageId);
  const [selectedAppId, setSelectedAppId] = useState<string>(initialAppId);
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(2); // Default to Step 2 (payment) or let them review
  
  // Verification form state
  const [senderNumber, setSenderNumber] = useState('');
  const [trxId, setTrxId] = useState('');
  const [clientName, setClientName] = useState('');
  const [shopName, setShopName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  
  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [invoiceNumber, setInvoiceNumber] = useState('');

  const currentPackage = PRICING_PACKAGES.find(p => p.id === selectedPackageId) || PRICING_PACKAGES[1];
  const selectedAppObj = DEMO_APPS.find(a => a.id === selectedAppId);
  const appDisplayName = selectedAppId === 'all'
    ? '৪টি পূর্ণাঙ্গ পিওএস সোর্স কোড বান্ডিল'
    : selectedAppObj?.name || 'ডিলারশিপ ম্যানেজমেন্ট সিস্টেম';

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(SITE_CONFIG.bkashRawNumber);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleVerifyPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trxId.trim() || !senderNumber.trim()) {
      alert('দয়া করে আপনার বিকাশ নম্বর এবং ট্রানজেকশন আইডি (TrxID) প্রদান করুন।');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedInvoice = `DH-INV-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setInvoiceNumber(generatedInvoice);
      setIsSubmitting(false);
      setIsVerified(true);
      setCurrentStep(4);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1200);
  };

  const generateWhatsAppConfirmation = () => {
    const text = `*আসসালামু আলাইকুম! আমি DokanHisab-এ বিকাশ পেমেন্ট সম্পন্ন করেছি।*
----------------------------------------
*ইনভয়েস আইডি:* ${invoiceNumber}
*প্যাকেজ:* ${currentPackage.nameBn} (${currentPackage.priceFormatted})
*সফটওয়্যার:* ${appDisplayName}
----------------------------------------
*পেমেন্ট তথ্য (বিকাশ পার্সোনাল):*
• প্রেরক বিকাশ নম্বর: ${senderNumber}
• ট্রানজেকশন আইডি (TrxID): ${trxId}
• প্রদেয় ফি: ${currentPackage.priceFormatted}
----------------------------------------
*গ্রাহকের তথ্য:*
• নাম: ${clientName || 'উলেখিত নেই'}
• দোকানের নাম: ${shopName || 'উলেখিত নেই'}
• ড্রাইভ ইমেইল: ${clientEmail || 'উলেখিত নেই'}
• যোগাযোগ নম্বর: ${clientPhone || senderNumber}
----------------------------------------
দয়া করে আমার পেমেন্ট কনফার্ম করে সোর্স কোড ড্রাইভ এক্সেস ও সেটআপ শিডিউল প্রদান করুন।`;

    return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans pb-24">
      {/* Top Header */}
      <div className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md py-4 sm:py-5 sticky top-16 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="text-xs font-bold text-slate-400 hover:text-white px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>হোম পেজে ফিরুন</span>
            </button>
            <span className="text-sm font-black text-white hidden sm:inline">
              বিকাশ পেমেন্ট পাইপলাইন
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-600/40 px-3 py-1.5 rounded-xl">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>নিরাপদ বিকাশ পার্সোনাল পেমেন্ট</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8">
        
        {/* VISUAL PAYMENT PIPELINE PROGRESS BAR */}
        <div className="mb-8 bg-slate-900/90 rounded-2xl border border-slate-800 p-4 sm:p-5 shadow-lg">
          <div className="text-[11px] font-black text-amber-400 uppercase tracking-widest mb-3">
            পেমেন্ট ও ডেলিভারি পাইপলাইন প্রসেস (Payment Pipeline)
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 text-xs">
            {/* Step 1 */}
            <div 
              onClick={() => !isVerified && setCurrentStep(1)}
              className={`p-2.5 rounded-xl border flex items-center gap-2.5 transition-all cursor-pointer ${
                currentStep === 1 
                  ? 'border-amber-400 bg-amber-950/40 text-amber-300 font-black' 
                  : 'border-slate-800 bg-slate-950 text-slate-400'
              }`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                currentStep >= 1 ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-400'
              }`}>
                ১
              </div>
              <div className="truncate">
                <div className="font-bold">সার্ভিস ও অ্যাপ</div>
                <div className="text-[10px] text-slate-500 truncate">{currentPackage.nameBn}</div>
              </div>
            </div>

            {/* Step 2 */}
            <div 
              onClick={() => !isVerified && setCurrentStep(2)}
              className={`p-2.5 rounded-xl border flex items-center gap-2.5 transition-all cursor-pointer ${
                currentStep === 2 
                  ? 'border-pink-500 bg-pink-950/40 text-pink-300 font-black' 
                  : 'border-slate-800 bg-slate-950 text-slate-400'
              }`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                currentStep >= 2 ? 'bg-pink-500 text-white' : 'bg-slate-800 text-slate-400'
              }`}>
                ২
              </div>
              <div className="truncate">
                <div className="font-bold">বিকাশ সেন্ড মানি</div>
                <div className="text-[10px] text-slate-500 font-mono">{currentPackage.priceFormatted}</div>
              </div>
            </div>

            {/* Step 3 */}
            <div 
              onClick={() => !isVerified && setCurrentStep(3)}
              className={`p-2.5 rounded-xl border flex items-center gap-2.5 transition-all cursor-pointer ${
                currentStep === 3 
                  ? 'border-emerald-400 bg-emerald-950/40 text-emerald-300 font-black' 
                  : 'border-slate-800 bg-slate-950 text-slate-400'
              }`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                currentStep >= 3 ? 'bg-emerald-400 text-slate-950' : 'bg-slate-800 text-slate-400'
              }`}>
                ৩
              </div>
              <div className="truncate">
                <div className="font-bold">TrxID ভেরিফিকেশন</div>
                <div className="text-[10px] text-slate-500">তথ্য ও সাবমিট</div>
              </div>
            </div>

            {/* Step 4 */}
            <div className={`p-2.5 rounded-xl border flex items-center gap-2.5 transition-all ${
              isVerified || currentStep === 4 
                ? 'border-emerald-500 bg-emerald-950/70 text-emerald-300 font-black' 
                : 'border-slate-800 bg-slate-950 text-slate-500 opacity-60'
            }`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                isVerified ? 'bg-emerald-400 text-slate-950' : 'bg-slate-800 text-slate-500'
              }`}>
                ৪
              </div>
              <div className="truncate">
                <div className="font-bold">এক্সেস আনলক</div>
                <div className="text-[10px] text-slate-500">কোড ও সেটআপ</div>
              </div>
            </div>
          </div>
        </div>

        {/* STEP 4: IF VERIFIED, SHOW SUCCESS & CODE ACCESS */}
        {isVerified ? (
          <div className="bg-slate-900 rounded-3xl border-2 border-emerald-500 p-6 sm:p-10 shadow-2xl animate-fade-in">
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40 animate-pulse">
                <Check className="w-8 h-8" />
              </div>
              <span className="text-xs font-black text-emerald-400 uppercase tracking-widest bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-700/50">
                পেমেন্ট রিসিভ ও অর্ডার নিশ্চিত
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white mt-3">
                অভিনন্দন! আপনার অর্ডার সফলভাবে সম্পন্ন হয়েছে
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 font-medium">
                ইনভয়েস নম্বর: <strong className="font-mono text-amber-300">{invoiceNumber}</strong> • বিকাশ TrxID: <strong className="font-mono text-emerald-400">{trxId}</strong>
              </p>
            </div>

            {/* Unlocked Access Box */}
            <div className="mt-8 bg-slate-950 rounded-2xl p-6 border border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-3 mb-4 gap-2">
                <div>
                  <span className="text-sm font-black text-white block">
                    আপনার আনলকড সোর্স কোড ও এক্সেস প্যানেল:
                  </span>
                  <span className="text-xs text-slate-400">
                    নির্বাচিত সফটওয়্যার: <strong className="text-emerald-400">{appDisplayName}</strong>
                  </span>
                </div>
                <span className="text-xs text-amber-400 font-mono font-bold bg-amber-950/60 px-3 py-1 rounded-lg border border-amber-800/60 self-start sm:self-auto">
                  {currentPackage.nameBn} - {currentPackage.priceFormatted}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Drive Access Button */}
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-emerald-400" />
                      <span>গুগল ড্রাইভ সোর্স কোড রিপো</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {clientEmail ? `${clientEmail} এ ফুল এক্সেস প্রস্তুত` : 'মাস্টার কোড রিপোজিটরি'}
                    </div>
                  </div>
                  <a
                    href="https://drive.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl flex items-center gap-1 shadow-md transition-all cursor-pointer"
                  >
                    <span>ড্রাইভ খুলুন</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* PDF Setup Guide */}
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-amber-400" />
                      <span>ডিপ্লয়মেন্ট ও সেটআপ গাইড (PDF)</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      ধাপে ধাপে ইনস্টল করার পূর্ণাঙ্গ নির্দেশিকা
                    </div>
                  </div>
                  <button
                    onClick={() => alert('ডকুমেন্টেশন ফাইলটি ড্রাইভ ফোল্ডারে শেয়ার করা হয়েছে।')}
                    className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl flex items-center gap-1 border border-slate-700 transition-all cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>ডাউনলোড</span>
                  </button>
                </div>
              </div>

              {/* Live AnyDesk Setup notice if Medium or Premium */}
              {selectedPackageId !== 'basic' && (
                <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-emerald-950/60 to-slate-900 border border-emerald-500/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-slate-200 font-medium">
                      যেহেতু আপনি <strong>{currentPackage.nameBn}</strong> নিয়েছেন, আমাদের এক্সপার্ট টিম সরাসরি AnyDesk বা Google Meet-এ আপনার স্ক্রিনে ফুল সেটআপ সম্পন্ন করে দেবে।
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Direct WhatsApp Confirmation Ping Button */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <button
                onClick={() => window.print()}
                className="w-full sm:w-auto px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border border-slate-700 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>পেমেন্ট স্লিপ প্রিন্ট করুন</span>
              </button>

              <a
                href={generateWhatsAppConfirmation()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3.5 px-6 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-sm rounded-xl shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 active:scale-95 transition-all text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp-এ TrxID পাঠান ও সেটআপ শিডিউল নিন</span>
              </a>
            </div>
          </div>
        ) : (
          /* STANDARD PIPELINE LAYOUT */
          <div className="space-y-6">
            
            {/* STEP 1 SECTION: Package & Software Selector */}
            <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-7 shadow-xl">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 text-xs font-black flex items-center justify-center">
                    ১
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-white">
                    সার্ভিস প্যাকেজ ও সফটওয়্যার নির্বাচন
                  </h3>
                </div>
                <span className="text-xs text-amber-300 font-mono font-bold">
                  মোট প্রদেয়: {currentPackage.priceFormatted}
                </span>
              </div>

              {/* 3 Packages Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                {PRICING_PACKAGES.map((pkg) => (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setSelectedPackageId(pkg.id)}
                    className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all ${
                      selectedPackageId === pkg.id
                        ? 'border-emerald-400 bg-emerald-950/40 ring-1 ring-emerald-400'
                        : 'border-slate-800 bg-slate-950 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-white">{pkg.nameBn}</span>
                      {pkg.isPopular && (
                        <span className="text-[9px] bg-emerald-500 text-slate-950 px-1.5 py-0.2 rounded font-black uppercase">
                          জনপ্রিয়
                        </span>
                      )}
                    </div>
                    <div className="text-lg font-black font-mono text-amber-300 mt-1">
                      {pkg.priceFormatted}
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                      {pkg.subtitleBn}
                    </p>
                  </button>
                ))}
              </div>

              {/* POS Software Application Selection */}
              <div>
                <label className="block text-xs font-black text-slate-300 uppercase mb-2">
                  কোন অ্যাপ্লিকেশনের সোর্স কোড বা সেটআপ নিতে চান?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                  {DEMO_APPS.map((app) => (
                    <button
                      key={app.id}
                      type="button"
                      onClick={() => setSelectedAppId(app.id)}
                      className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                        selectedAppId === app.id
                          ? 'border-amber-400 bg-amber-950/40 ring-1 ring-amber-400'
                          : 'border-slate-800 bg-slate-950 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-xs font-black text-white truncate">{app.name}</div>
                      <div className="text-[10px] text-slate-400 truncate mt-0.5">{app.category}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* STEP 2 & 3: bKash Card (Left) & Verification Form (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Left Column: STEP 2 - Official bKash Send Money Card */}
              <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl border border-pink-500/50 p-6 sm:p-7 shadow-2xl relative overflow-hidden">
                {/* Ambient pink accent */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-pink-600 to-rose-500 text-white flex items-center justify-center font-black text-base shadow-md">
                      বিকাশ
                    </div>
                    <div>
                      <h3 className="text-base font-black text-white">bKash Personal</h3>
                      <p className="text-[11px] font-bold text-pink-400">সেন্ড মানি (Send Money)</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-pink-950 text-pink-300 border border-pink-700/60 px-2.5 py-0.5 rounded-full font-bold">
                    একমাত্র পেমেন্ট মাধ্যম
                  </span>
                </div>

                {/* Big Number Copy Box */}
                <div className="mt-5 bg-slate-950 p-5 rounded-2xl border border-pink-500/40 text-center shadow-inner">
                  <span className="text-xs text-slate-300 font-bold block mb-1">
                    বিকাশ পার্সোনাল নম্বর (সেন্ড মানি করুন):
                  </span>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-pink-400 tracking-wider">
                    {SITE_CONFIG.bkashNumber}
                  </div>
                  
                  <button
                    type="button"
                    onClick={handleCopyNumber}
                    className="mt-3.5 w-full py-2.5 px-4 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white font-black text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-4 h-4 text-white" />
                        <span>নাম্বার কপি হয়েছে!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>বিকাশ নম্বর কপি করুন</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Summary Amount */}
                <div className="mt-4 bg-slate-950/80 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 font-medium block">প্রদেয় টাকার পরিমাণ:</span>
                    <div className="text-2xl font-black font-mono text-amber-300">
                      {currentPackage.priceFormatted}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800 block">
                      ০৳ অতিরিক্ত চার্জ
                    </span>
                    <span className="text-[10px] text-slate-500 mt-0.5 block">
                      {currentPackage.nameBn}
                    </span>
                  </div>
                </div>

                {/* 5 Easy Steps */}
                <div className="mt-5 pt-4 border-t border-slate-800">
                  <div className="text-xs font-black text-slate-200 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5 text-pink-400" />
                    <span>পেমেন্ট করার সহজ ৫টি ধাপ:</span>
                  </div>
                  <ol className="space-y-2 text-xs text-slate-300 font-medium">
                    <li className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-slate-800 text-pink-400 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">১</span>
                      <span>বিকাশ অ্যাপ ওপেন করুন অথবা <code className="text-pink-400 font-mono">*247#</code> ডায়াল করুন।</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-slate-800 text-pink-400 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">২</span>
                      <span><strong>"Send Money (সেন্ড মানি)"</strong> অপশন সিলেক্ট করুন।</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-slate-800 text-pink-400 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">৩</span>
                      <span>প্রাপক নম্বরে <strong>01770-607870</strong> লিখুন বা পেস্ট করুন।</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-slate-800 text-pink-400 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">৪</span>
                      <span>টাকার পরিমাণ লিখুন: <strong>{currentPackage.priceFormatted}</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-slate-800 text-pink-400 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">৫</span>
                      <span>পিন দিয়ে কনফার্ম করে প্রাপ্ত <strong>TrxID</strong> পাশের ফরমে প্রদান করুন।</span>
                    </li>
                  </ol>
                </div>
              </div>

              {/* Right Column: STEP 3 - Transaction Submission Form */}
              <div className="lg:col-span-7 bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-xl">
                <div className="pb-4 border-b border-slate-800 mb-6 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-emerald-400 text-slate-950 text-xs font-black flex items-center justify-center">
                        ৩
                      </span>
                      <span className="text-xs font-black text-emerald-400 uppercase tracking-wider">
                        লেনদেন যাচাইকরণ ও এক্সেস আনলক
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                      বিকাশ ট্রানজেকশন আইডি ফরম
                    </h3>
                  </div>
                  <div className="text-right hidden sm:block">
                    <span className="text-[11px] font-bold text-slate-400">সহায়তার জন্য:</span>
                    <div className="text-xs font-mono font-bold text-amber-300">{SITE_CONFIG.displayPhone}</div>
                  </div>
                </div>

                <form onSubmit={handleVerifyPayment} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Sender bKash Number */}
                    <div>
                      <label className="block text-xs text-slate-300 font-bold mb-1">
                        যে বিকাশ নম্বর থেকে টাকা পাঠিয়েছেন *
                      </label>
                      <input
                        type="tel"
                        required
                        value={senderNumber}
                        onChange={(e) => setSenderNumber(e.target.value)}
                        placeholder="01XXXXXXXXX"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-pink-500 font-mono"
                      />
                    </div>

                    {/* TrxID */}
                    <div>
                      <label className="block text-xs text-slate-300 font-bold mb-1">
                        বিকাশ ট্রানজেকশন আইডি (TrxID) *
                      </label>
                      <input
                        type="text"
                        required
                        value={trxId}
                        onChange={(e) => setTrxId(e.target.value)}
                        placeholder="যেমন: BKG892JK10"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400 font-mono uppercase font-bold"
                      />
                    </div>

                    {/* Client Name */}
                    <div>
                      <label className="block text-xs text-slate-300 font-bold mb-1">
                        আপনার নাম *
                      </label>
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="আপনার পূর্ণ নাম"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400"
                      />
                    </div>

                    {/* Shop Name */}
                    <div>
                      <label className="block text-xs text-slate-300 font-bold mb-1">
                        দোকানের নাম *
                      </label>
                      <input
                        type="text"
                        required
                        value={shopName}
                        onChange={(e) => setShopName(e.target.value)}
                        placeholder="যেমন: ভাই ভাই ট্রেডার্স"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400"
                      />
                    </div>

                    {/* Gmail / Google Drive Email */}
                    <div>
                      <label className="block text-xs text-slate-300 font-bold mb-1">
                        ড্রাইভ সোর্স কোড এক্সেস এর জন্য জিমেইল (Gmail) *
                      </label>
                      <input
                        type="email"
                        required
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="yourname@gmail.com"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400"
                      />
                      <span className="text-[10px] text-slate-500 mt-1 block">
                        এই ইমেইলে গুগল ড্রাইভ সোর্স কোড শেয়ার করা হবে
                      </span>
                    </div>

                    {/* WhatsApp Phone */}
                    <div>
                      <label className="block text-xs text-slate-300 font-bold mb-1">
                        হোয়াটসঅ্যাপ নম্বর *
                      </label>
                      <input
                        type="tel"
                        required
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        placeholder="01XXXXXXXXX"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400"
                      />
                      <span className="text-[10px] text-slate-500 mt-1 block">
                        জরুরি সহায়তা ও সেটআপ কলের জন্য
                      </span>
                    </div>
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-sm rounded-xl shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>পেমেন্ট তথ্য ভেরিফাই হচ্ছে...</span>
                      ) : (
                        <>
                          <span>পেমেন্ট ভেরিফাই করুন ও এক্সেস আনলক করুন</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>

                <div className="mt-5 pt-4 border-t border-slate-800 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>যেকোনো প্রয়োজনে সরাসরি বিকাশ হেল্পলাইন কল বা হোয়াটসঅ্যাপ: <strong className="text-white font-mono">{SITE_CONFIG.displayPhone}</strong></span>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};
