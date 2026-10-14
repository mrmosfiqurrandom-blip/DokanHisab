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
  AlertCircle
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
  initialAppId = 'fashion-garments-pos',
  onBackToHome
}) => {
  const [selectedPackageId, setSelectedPackageId] = useState<'basic' | 'medium' | 'premium'>(initialPackageId);
  const [selectedAppId, setSelectedAppId] = useState<string>(initialAppId);
  
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
  const appDisplayName = selectedAppId === 'both' 
    ? 'ফ্যাশন পিওএস + ব্যাটারি হাউস পিওএস (কম্বো বান্ডিল)' 
    : selectedAppId === 'all'
    ? 'অল-ইন-ওয়ান ৫টি পিওএস সোর্স কোড বান্ডিল'
    : selectedAppObj?.name || 'নির্বাচিত সফটওয়্যার';

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
      <div className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="text-xs font-bold text-slate-400 hover:text-white px-3 py-1.5 rounded-xl bg-slate-800 transition-colors cursor-pointer"
            >
              ← হোম স্টোর
            </button>
            <span className="text-sm font-black text-white hidden sm:inline">
              বিকাশ পেমেন্ট ও অটোমেটেড এক্সেস ইউনিট
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-600/40 px-3 py-1 rounded-xl">
            <Lock className="w-3.5 h-3.5" />
            <span>নিরাপদ বিকাশ পেমেন্ট গেটওয়ে</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* If payment verified, show Success and Instant Access Delivery */}
        {isVerified ? (
          <div className="bg-slate-900 rounded-3xl border-2 border-emerald-500/80 p-6 sm:p-10 shadow-2xl">
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40 animate-pulse">
                <Check className="w-8 h-8" />
              </div>
              <span className="text-xs font-black text-emerald-400 uppercase tracking-widest bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-700/50">
                পেমেন্ট রিসিভ সফল
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white mt-3">
                ধন্যবাদ! আপনার অর্ডারটি নিশ্চিত করা হয়েছে
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 font-medium">
                ইনভয়েস নম্বর: <strong className="font-mono text-amber-300">{invoiceNumber}</strong> • TrxID: <strong className="font-mono text-emerald-400">{trxId}</strong>
              </p>
            </div>

            {/* Unlocked Access Box */}
            <div className="mt-8 bg-slate-950 rounded-2xl p-6 border border-slate-800">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <span className="text-sm font-black text-white">
                  আপনার আনলকড সোর্স কোড ও এক্সেস প্যানেল:
                </span>
                <span className="text-xs text-amber-400 font-mono font-bold">
                  {currentPackage.nameBn} - {currentPackage.priceFormatted}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Drive Access Button */}
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-emerald-400" />
                      <span>গুগল ড্রাইভ সোর্স কোড লিঙ্ক</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {clientEmail ? `${clientEmail} এ এক্সেস দেওয়া হয়েছে` : 'ইনস্ট্যান্ট মাস্টার কোড রিপো'}
                    </div>
                  </div>
                  <a
                    href="https://drive.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl flex items-center gap-1 shadow-md transition-all cursor-pointer"
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
                      <span>ডিপ্লয়মেন্ট ও সেটআপ ডকুমেন্টেশন</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      ধাপে ধাপে ইনস্টল করার পূর্ণাঙ্গ গাইড (PDF)
                    </div>
                  </div>
                  <button
                    onClick={() => alert('ডকুমেন্টেশন ফাইলটি আপনার ড্রাইভ ফোল্ডারে যুক্ত করা হয়েছে।')}
                    className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl flex items-center gap-1 border border-slate-700 transition-all cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>গাইড</span>
                  </button>
                </div>
              </div>

              {/* Live AnyDesk Setup notice if Medium or Premium */}
              {selectedPackageId !== 'basic' && (
                <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-emerald-950/60 to-slate-900 border border-emerald-500/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-slate-200 font-medium">
                      যেহেতু আপনি <strong>{currentPackage.nameBn}</strong> নিয়েছেন, আমাদের এক্সপার্ট টিম সরাসরি AnyDesk / Google Meet-এ আপনার স্ক্রিনে ফুল সেটআপ করে দেবে।
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
                className="w-full sm:flex-1 py-3.5 px-6 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-sm rounded-xl shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp-এ TrxID কনফার্ম করুন ও সাপোর্ট নিন</span>
              </a>
            </div>
          </div>
        ) : (
          /* Payment Processing Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Step 1 - bKash Send Money Card */}
            <div className="lg:col-span-5 bg-slate-900 rounded-3xl border border-pink-500/40 p-6 sm:p-7 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-pink-600 text-white flex items-center justify-center font-black text-base shadow-md">
                    বিকাশ
                  </div>
                  <div>
                    <h3 className="text-base font-black text-white">bKash Personal</h3>
                    <p className="text-[11px] font-bold text-pink-400">সেন্ড মানি (Send Money)</p>
                  </div>
                </div>
                <span className="text-[10px] bg-pink-950 text-pink-300 border border-pink-700/50 px-2 py-0.5 rounded-full font-bold">
                  একমাত্র পেমেন্ট মাধ্যম
                </span>
              </div>

              {/* Number Copy Box */}
              <div className="mt-5 bg-slate-950 p-4 rounded-2xl border border-pink-500/30 text-center">
                <span className="text-xs text-slate-400 font-bold block mb-1">
                  বিকাশ পার্সোনাল নাম্বার (সেন্ড মানি করুন):
                </span>
                <div className="text-2xl sm:text-3xl font-black font-mono text-pink-400 tracking-wider">
                  {SITE_CONFIG.bkashNumber}
                </div>
                <button
                  type="button"
                  onClick={handleCopyNumber}
                  className="mt-3 w-full py-2.5 px-4 bg-pink-600 hover:bg-pink-500 text-white font-black text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>নাম্বার কপি হয়েছে!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>বিকাশ নাম্বার কপি করুন</span>
                    </>
                  )}
                </button>
              </div>

              {/* Exact Payment Amount */}
              <div className="mt-4 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 font-medium">প্রদেয় টাকার পরিমাণ:</span>
                  <div className="text-xl font-black font-mono text-amber-300">
                    {currentPackage.priceFormatted}
                  </div>
                </div>
                <span className="text-[11px] text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                  ০৳ অতিরিক্ত চার্জ
                </span>
              </div>

              {/* Step-by-Step Guide */}
              <div className="mt-5 pt-4 border-t border-slate-800">
                <div className="text-xs font-black text-slate-200 uppercase tracking-wider mb-2.5">
                  পেমেন্ট করার সহজ ধাপসমূহ:
                </div>
                <ol className="space-y-2 text-xs text-slate-300 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-slate-800 text-pink-400 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">১</span>
                    <span>বিকাশ অ্যাপ অথবা <code className="text-pink-400">*247#</code> ডায়াল করুন।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-slate-800 text-pink-400 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">২</span>
                    <span><strong>"Send Money"</strong> অপশন সিলেক্ট করুন।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-slate-800 text-pink-400 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">৩</span>
                    <span>প্রাপক নাম্বারে <strong>01770-607870</strong> লিখুন।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-slate-800 text-pink-400 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">৪</span>
                    <span>টাকার পরিমাণ লিখুন: <strong>{currentPackage.priceFormatted}</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-slate-800 text-pink-400 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">৫</span>
                    <span>পিন দিয়ে সেন্ড মানি কনফার্ম করুন এবং পাওয়া <strong>TrxID</strong> পাশের ফরমে দিন।</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Right Column: Step 2 - Package Check & TrxID Verification Form */}
            <div className="lg:col-span-7 bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-xl">
              <div className="pb-4 border-b border-slate-800 mb-6">
                <span className="text-xs font-black text-emerald-400 uppercase tracking-wider">
                  ধাপ ২: পেমেন্ট তথ্য সাবমিট ও কোড রিসিভ
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                  বিকাশ লেনদেন ভেরিফিকেশন ফরম
                </h3>
              </div>

              {/* Package Selector */}
              <div className="mb-6">
                <label className="block text-xs font-black text-slate-300 uppercase mb-2">
                  ১. প্যাকেজ নির্বাচন:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {PRICING_PACKAGES.map((pkg) => (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => setSelectedPackageId(pkg.id)}
                      className={`p-2.5 rounded-xl border text-left cursor-pointer transition-all ${
                        selectedPackageId === pkg.id
                          ? 'border-amber-400 bg-amber-950/40 ring-1 ring-amber-400'
                          : 'border-slate-800 bg-slate-950 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-xs font-black text-white">{pkg.nameBn}</div>
                      <div className="text-sm font-black font-mono text-amber-300 mt-1">
                        {pkg.priceFormatted}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Verification Form */}
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
                      className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-pink-500 font-mono"
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
                      className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400 font-mono uppercase"
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
                      className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400"
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
                      placeholder="যেমন: রফিক গার্মেন্টস"
                      className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400"
                    />
                  </div>

                  {/* Gmail / Google Drive Email for Access */}
                  <div>
                    <label className="block text-xs text-slate-300 font-bold mb-1">
                      ড্রাইভ এক্সেস এর জন্য জিমেইল (Gmail) *
                    </label>
                    <input
                      type="email"
                      required
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="yourname@gmail.com"
                      className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400"
                    />
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
                      className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-sm rounded-xl shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>পেমেন্ট ও TrxID ভেরিফাই হচ্ছে...</span>
                    ) : (
                      <>
                        <span>পেমেন্ট ভেরিফাই করুন ও এক্সেস আনলক করুন</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              <div className="mt-4 pt-3 border-t border-slate-800 text-center text-xs text-slate-400 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>যেকোনো প্রয়োজনে সরাসরি বিকাশ হেল্পলাইন: {SITE_CONFIG.displayPhone}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
