import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  ShieldCheck, 
  ArrowRight, 
  Printer, 
  ExternalLink, 
  MessageCircle, 
  Sparkles,
  CheckCircle2,
  Lock,
  ArrowLeft,
  Smartphone,
  RotateCcw
} from 'lucide-react';
import { PRICING_PACKAGES } from '../data/packagesData';
import { DEMO_APPS } from '../data/appsData';
import { SITE_CONFIG } from '../data/siteConfig';
import { ReceiptInvoice, ReceiptData } from './ReceiptInvoice';

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
  
  // Verification form state (Minimal & Intuitive)
  const [senderNumber, setSenderNumber] = useState('');
  const [trxId, setTrxId] = useState('');
  const [clientName, setClientName] = useState('');
  const [shopName, setShopName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  
  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [receiptData, setReceiptData] = useState<ReceiptData | null>(null);

  const currentPackage = PRICING_PACKAGES.find(p => p.id === selectedPackageId) || PRICING_PACKAGES[1];
  const selectedAppObj = DEMO_APPS.find(a => a.id === selectedAppId);
  const appDisplayName = selectedAppObj?.name || 'ডিলারশিপ ম্যানেজমেন্ট সিস্টেম';
  const appCategoryName = selectedAppObj?.category || 'ইনভেন্টরি ও পিওএস';

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
      const todayFormatted = new Intl.DateTimeFormat('bn-BD', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }).format(new Date());

      const data: ReceiptData = {
        invoiceNumber: generatedInvoice,
        orderDate: todayFormatted,
        clientName: clientName.trim(),
        shopName: shopName.trim(),
        clientEmail: clientEmail.trim(),
        clientPhone: clientPhone.trim() || senderNumber.trim(),
        senderNumber: senderNumber.trim(),
        trxId: trxId.trim().toUpperCase(),
        packageName: currentPackage.nameBn,
        packagePrice: currentPackage.priceFormatted,
        packagePriceBdt: currentPackage.priceBdt,
        appName: appDisplayName,
        appCategory: appCategoryName
      };

      setReceiptData(data);
      setIsSubmitting(false);
      setIsVerified(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 800);
  };

  const handlePrint = () => {
    window.print();
  };

  const generateWhatsAppConfirmation = () => {
    if (!receiptData) return '';
    const text = `*আসসালামু আলাইকুম! আমি DokanHisab-এ বিকাশ পেমেন্ট সম্পন্ন করেছি।*
----------------------------------------
*ইনভয়েস আইডি:* ${receiptData.invoiceNumber}
*প্যাকেজ:* ${receiptData.packageName} (${receiptData.packagePrice})
*সফটওয়্যার:* ${receiptData.appName}
----------------------------------------
*পেমেন্ট তথ্য (বিকাশ পার্সোনাল):*
• প্রেরক বিকাশ নম্বর: ${receiptData.senderNumber}
• ট্রানজেকশন আইডি (TrxID): ${receiptData.trxId}
• প্রদেয় ফি: ${receiptData.packagePrice}
----------------------------------------
*গ্রাহকের তথ্য:*
• নাম: ${receiptData.clientName || 'উলেখিত নেই'}
• দোকানের নাম: ${receiptData.shopName || 'উলেখিত নেই'}
• ড্রাইভ ইমেইল: ${receiptData.clientEmail || 'উলেখিত নেই'}
• যোগাযোগ নম্বর: ${receiptData.clientPhone}
----------------------------------------
দয়া করে আমার পেমেন্ট কনফার্ম করে সোর্স কোড ড্রাইভ এক্সেস ও সেটআপ শিডিউল প্রদান করুন।`;

    return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans pb-20">
      {/* Top Simple Sticky Bar (No-Print) */}
      <div className="no-print border-b border-slate-800 bg-slate-900/90 backdrop-blur-md py-3.5 sm:py-4 sticky top-16 z-30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="text-xs font-bold text-slate-300 hover:text-white px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>হোমে ফিরুন</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-600/40 px-3 py-1 rounded-full">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>১০০% নিরাপদ বিকাশ পার্সোনাল পেমেন্ট</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-6 sm:mt-8">
        
        {/* IF ALREADY VERIFIED: SHOW SUCCESS & BEAUTIFULLY STYLED 1-PAGE MODERN RECEIPT */}
        {isVerified && receiptData ? (
          <div className="space-y-6">
            {/* Quick Action Ribbon (No-Print) */}
            <div className="no-print bg-emerald-950/40 border border-emerald-500/40 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-black shrink-0">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white">
                    অর্ডার সফল ও এক্সেস আনলক হয়েছে!
                  </h3>
                  <p className="text-xs text-slate-300">
                    ইনভয়েস: <strong className="font-mono text-amber-300">{receiptData.invoiceNumber}</strong> • TrxID: <strong className="font-mono text-emerald-400">{receiptData.trxId}</strong>
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                <a
                  href="https://drive.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl flex items-center gap-1.5 shadow-md transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>ড্রাইভ কোড খুলুন</span>
                </a>

                <a
                  href={generateWhatsAppConfirmation()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp-এ পাঠান</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsVerified(false)}
                  className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded-xl flex items-center gap-1 transition-colors cursor-pointer"
                  title="নতুন পেমেন্ট ফরম"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>নতুন অর্ডার</span>
                </button>
              </div>
            </div>

            {/* THE MODERN SINGLE PAGE RECEIPT COMPONENT */}
            <ReceiptInvoice 
              data={receiptData}
              onPrint={handlePrint}
              onOpenDrive={() => window.open('https://drive.google.com', '_blank')}
              onWhatsAppPing={() => window.open(generateWhatsAppConfirmation(), '_blank')}
            />
          </div>
        ) : (
          /* ULTRA MINIMAL & EASY PAYMENT PIPELINE (Single Clean Page) */
          <div>
            {/* Minimal Pipeline Breadcrumb / Header */}
            <div className="text-center max-w-xl mx-auto mb-6">
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                সহজ ও দ্রুত পেমেন্ট পাইপলাইন
              </span>
              <h2 className="text-xl sm:text-3xl font-black text-white mt-1">
                বিকাশ পার্সোনাল সেন্ড মানি ও এক্সেস
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                নিচের বিকাশ নাম্বারে সেন্ড মানি করে TrxID দিন, তাৎক্ষণিক কোড ও রিসিট পেয়ে যাবেন
              </p>
            </div>

            {/* 3 Step Pill Indicator */}
            <div className="mb-6 flex items-center justify-center gap-2 text-xs font-bold">
              <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                ১. প্যাকেজ নিশ্চিত
              </span>
              <span className="text-slate-600">→</span>
              <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30">
                ২. বিকাশ সেন্ড মানি
              </span>
              <span className="text-slate-600">→</span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                ৩. TrxID দিয়ে রিসিট
              </span>
            </div>

            {/* 2-Column Clean Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Left Column (5 Cols): Package Selection + bKash Details */}
              <div className="lg:col-span-5 space-y-4">
                
                {/* Package Quick Selector */}
                <div className="bg-slate-900 rounded-2xl border border-slate-800 p-4 sm:p-5 shadow-lg">
                  <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider block mb-2">
                    সার্ভিস প্যাকেজ নির্বাচন করুন:
                  </span>
                  
                  <div className="grid grid-cols-3 gap-2">
                    {PRICING_PACKAGES.map((pkg) => (
                      <button
                        key={pkg.id}
                        type="button"
                        onClick={() => setSelectedPackageId(pkg.id)}
                        className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                          selectedPackageId === pkg.id
                            ? 'border-emerald-400 bg-emerald-950/60 ring-1 ring-emerald-400 text-white'
                            : 'border-slate-800 bg-slate-950 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <div className="text-[11px] font-bold truncate">{pkg.nameBn.replace(' প্যাকেজ', '')}</div>
                        <div className="text-sm font-black font-mono text-amber-300 mt-0.5">{pkg.priceFormatted}</div>
                      </button>
                    ))}
                  </div>

                  {/* Software Dropdown/Selector */}
                  <div className="mt-3.5 pt-3 border-t border-slate-800">
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      সফটওয়্যার নির্বাচন:
                    </label>
                    <select
                      value={selectedAppId}
                      onChange={(e) => setSelectedAppId(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs font-bold text-white focus:outline-none focus:border-amber-400"
                    >
                      {DEMO_APPS.map((app) => (
                        <option key={app.id} value={app.id}>
                          {app.name} ({app.category})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* bKash Personal Card */}
                <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border border-pink-500/40 p-5 shadow-xl relative overflow-hidden">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-pink-600 text-white flex items-center justify-center font-black text-xs shadow-sm">
                        বিকাশ
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-white">bKash Personal</h4>
                        <span className="text-[10px] text-pink-400 font-bold">সেন্ড মানি (Send Money)</span>
                      </div>
                    </div>
                    <span className="text-[10px] bg-pink-950 text-pink-300 border border-pink-700/50 px-2 py-0.5 rounded-full font-bold">
                      একমাত্র মাধ্যম
                    </span>
                  </div>

                  {/* Big Number Copy Box */}
                  <div className="mt-4 bg-slate-950 p-4 rounded-xl border border-pink-500/30 text-center">
                    <span className="text-[11px] text-slate-400 block mb-0.5">
                      প্রাপক বিকাশ নম্বর (সেন্ড মানি করুন):
                    </span>
                    <div className="text-2xl font-black font-mono text-pink-400 tracking-wider">
                      {SITE_CONFIG.bkashNumber}
                    </div>
                    
                    <button
                      type="button"
                      onClick={handleCopyNumber}
                      className="mt-3 w-full py-2 px-3 bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-white" />
                          <span>নাম্বার কপি হয়েছে!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>বিকাশ নম্বর কপি করুন</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Amount to send */}
                  <div className="mt-3 bg-slate-950/70 p-3 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400">পাঠাতে হবে (টাকা):</span>
                    <span className="text-lg font-black font-mono text-amber-300">
                      {currentPackage.priceFormatted}
                    </span>
                  </div>

                  {/* 3 Simple instructions */}
                  <div className="mt-3 pt-3 border-t border-slate-800 text-[11px] text-slate-300 space-y-1">
                    <p className="flex items-center gap-1.5">
                      <span className="w-3.5 h-3.5 rounded-full bg-slate-800 text-pink-400 text-[9px] font-bold flex items-center justify-center shrink-0">১</span>
                      <span>বিকাশে <strong>Send Money</strong> করে {currentPackage.priceFormatted} পাঠান</span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <span className="w-3.5 h-3.5 rounded-full bg-slate-800 text-pink-400 text-[9px] font-bold flex items-center justify-center shrink-0">২</span>
                      <span>বিকাশ থেকে প্রাপ্ত <strong>TrxID</strong> কপি করুন</span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <span className="w-3.5 h-3.5 rounded-full bg-slate-800 text-pink-400 text-[9px] font-bold flex items-center justify-center shrink-0">৩</span>
                      <span>ডানপাশের ফরমে TrxID দিয়ে এক্সেস নিন</span>
                    </p>
                  </div>
                </div>

              </div>

              {/* Right Column (7 Cols): Ultra Easy TrxID Submission Form */}
              <div className="lg:col-span-7 bg-slate-900 rounded-2xl border border-slate-800 p-5 sm:p-7 shadow-xl">
                <div className="pb-3 border-b border-slate-800 mb-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-white">
                      পেমেন্ট নিশ্চিতকরণ ও এক্সেস আনলক
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      আপনার বিকাশ তথ্য দিয়ে সাথে সাথে কোড ও ইনভয়েস রিসিট গ্রহণ করুন
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-300 hidden sm:inline">
                    {currentPackage.priceFormatted}
                  </span>
                </div>

                <form onSubmit={handleVerifyPayment} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    
                    {/* Sender Number */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
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
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        বিকাশ TrxID (ট্রানজেকশন আইডি) *
                      </label>
                      <input
                        type="text"
                        required
                        value={trxId}
                        onChange={(e) => setTrxId(e.target.value)}
                        placeholder="যেমন: BKG892JK10"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400 font-mono font-bold uppercase"
                      />
                    </div>

                    {/* Client Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
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
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        দোকানের নাম (ঐচ্ছিক)
                      </label>
                      <input
                        type="text"
                        value={shopName}
                        onChange={(e) => setShopName(e.target.value)}
                        placeholder="যেমন: ভাই ভাই স্টোর"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400"
                      />
                    </div>

                    {/* Client Email for Google Drive */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-slate-300 mb-1">
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
                        এই ইমেইলে সরাসরি গুগল ড্রাইভ সোর্স কোড ফাইল শেয়ার করা হবে
                      </span>
                    </div>

                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>যাচাই হচ্ছে...</span>
                      ) : (
                        <>
                          <span>পেমেন্ট সাবমিট ও রিসিট ডাউনলোড করুন</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>যাচাইকৃত সিকিউর পেমেন্ট</span>
                  </div>
                  <div>
                    সরাসরি কল/হোয়াটসঅ্যাপ: <strong className="text-white font-mono">{SITE_CONFIG.displayPhone}</strong>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
