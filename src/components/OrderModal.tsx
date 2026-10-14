import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  MessageCircle, 
  Printer, 
  Copy, 
  Check, 
  ShoppingBag, 
  Sparkles, 
  Building, 
  Phone, 
  User, 
  MapPin, 
  FileText,
  CreditCard
} from 'lucide-react';
import { PRICING_PACKAGES } from '../data/packagesData';
import { DEMO_APPS } from '../data/appsData';
import { SITE_CONFIG } from '../data/siteConfig';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackageId?: 'basic' | 'medium' | 'premium';
  initialAppId?: string;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  initialPackageId = 'medium',
  initialAppId = 'fashion-garments-pos',
}) => {
  const [selectedPackageId, setSelectedPackageId] = useState<'basic' | 'medium' | 'premium'>(initialPackageId);
  const [selectedAppId, setSelectedAppId] = useState<string>(initialAppId);
  
  const [clientName, setClientName] = useState('');
  const [shopName, setShopName] = useState('');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedPayment, setSelectedPayment] = useState<'bKash' | 'Nagad' | 'Rocket' | 'Bank'>('bKash');
  const [copiedPayment, setCopiedPayment] = useState(false);
  const [showSlip, setShowSlip] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  useEffect(() => {
    if (initialPackageId) setSelectedPackageId(initialPackageId);
    if (initialAppId) setSelectedAppId(initialAppId);
  }, [initialPackageId, initialAppId]);

  useEffect(() => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setOrderNumber(`DH-${new Date().getFullYear()}-${randomNum}`);
  }, [isOpen]);

  if (!isOpen) return null;

  const currentPackage = PRICING_PACKAGES.find(p => p.id === selectedPackageId) || PRICING_PACKAGES[1];
  const selectedAppObj = DEMO_APPS.find(a => a.id === selectedAppId);
  const appDisplayName = selectedAppId === 'both' 
    ? 'ফ্যাশন পিওএস + ব্যাটারি হাউস পিওএস (কম্বো বান্ডিল)' 
    : selectedAppId === 'custom'
    ? 'কাস্টম গুগল অ্যাপস স্ক্রিপ্ট সফটওয়্যার'
    : selectedAppObj?.name || 'নির্বাচিত সফটওয়্যার';

  const generateWhatsAppMessage = () => {
    return `*আসসালামু আলাইকুম! আমি DokanHisab থেকে পিওএস অর্ডার করতে চাই।*
----------------------------------------
*অর্ডার আইডি:* ${orderNumber}
*প্যাকেজ:* ${currentPackage.nameBn} (${currentPackage.priceFormatted})
*সফটওয়্যার:* ${appDisplayName}
----------------------------------------
*গ্রাহকের তথ্য:*
• নাম: ${clientName || 'উলেখিত নেই'}
• দোকানের নাম: ${shopName || 'উলেখিত নেই'}
• মোবাইল নম্বর: ${phone || 'উলেখিত নেই'}
• জেলা / ঠিকানা: ${district || 'উলেখিত নেই'}
• পেমেন্ট মেথড: ${selectedPayment}
${notes ? `• বিশেষ চাহিদা/নোট: ${notes}` : ''}
----------------------------------------
দয়া করে পরবর্তী প্রসেস ও ডেলিভারি কনফার্ম করুন। ধন্যবাদ!`;
  };

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(generateWhatsAppMessage());
    const waUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`;
    window.open(waUrl, '_blank');
  };

  const handleCopyPaymentNumber = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPayment(true);
    setTimeout(() => setCopiedPayment(false), 2000);
  };

  const handlePrintSlip = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="bg-slate-900 text-white rounded-3xl max-w-2xl w-full border border-slate-700 shadow-2xl overflow-hidden my-6">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase">
              <span>অর্ডার ও বুকিং ফরম</span>
              <span className="text-slate-600">|</span>
              <span className="font-mono text-emerald-400">{orderNumber}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              গুগল অ্যাপস স্ক্রিপ্ট পিওএস সফটওয়্যার
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Step 1: Choose Application */}
          <div>
            <label className="block text-xs font-black text-slate-200 uppercase tracking-wider mb-2.5">
              ১. কোন অ্যাপ্লিকেশনটি নিতে চান?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {DEMO_APPS.map((app) => (
                <button
                  key={app.id}
                  type="button"
                  onClick={() => setSelectedAppId(app.id)}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                    selectedAppId === app.id
                      ? 'border-emerald-400 bg-emerald-950/50 shadow-md ring-1 ring-emerald-400'
                      : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
                  }`}
                >
                  <div className="text-sm font-extrabold text-white">{app.name}</div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5 line-clamp-1">{app.category}</div>
                </button>
              ))}
              <button
                type="button"
                onClick={() => setSelectedAppId('both')}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                  selectedAppId === 'both'
                    ? 'border-emerald-400 bg-emerald-950/50 shadow-md ring-1 ring-emerald-400'
                    : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
                }`}
              >
                <div className="text-sm font-extrabold text-white">উভয় সফটওয়্যার (কম্বো অফার)</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">গার্মেন্টস + ব্যাটারি হাউস পিওএস</div>
              </button>
              <button
                type="button"
                onClick={() => setSelectedAppId('custom')}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                  selectedAppId === 'custom'
                    ? 'border-emerald-400 bg-emerald-950/50 shadow-md ring-1 ring-emerald-400'
                    : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
                }`}
              >
                <div className="text-sm font-extrabold text-white">কাস্টম রিকোয়ারমেন্ট</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">আপনার নিজস্ব স্পেসিফিকেশন</div>
              </button>
            </div>
          </div>

          {/* Step 2: Choose Package */}
          <div>
            <label className="block text-xs font-black text-slate-200 uppercase tracking-wider mb-2.5">
              ২. প্যাকেজ নির্বাচন করুন:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {PRICING_PACKAGES.map((pkg) => (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => setSelectedPackageId(pkg.id)}
                  className={`p-3.5 rounded-2xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                    selectedPackageId === pkg.id
                      ? 'border-amber-400 bg-amber-950/30 shadow-md ring-1 ring-amber-400'
                      : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-black text-white">{pkg.nameBn}</span>
                      {pkg.isPopular && (
                        <span className="text-[10px] bg-emerald-500 text-slate-950 px-1.5 py-0.2 rounded font-black">
                          পপুলার
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-slate-400 font-medium mt-1 leading-tight">{pkg.subtitleBn}</div>
                  </div>
                  <div className="mt-4 pt-2 border-t border-slate-800 text-lg font-black font-mono text-amber-300">
                    {pkg.priceFormatted}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Client Details */}
          <div>
            <label className="block text-xs font-black text-slate-200 uppercase tracking-wider mb-2.5">
              ৩. আপনার ও প্রতিষ্ঠানের তথ্য:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-slate-300 font-bold mb-1">
                  আপনার নাম *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="যেমন: মোঃ রফিকুল ইসলাম"
                    className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-300 font-bold mb-1">
                  দোকান / ব্যবসার নাম *
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={shopName}
                    onChange={(e) => setShopName(e.target.value)}
                    placeholder="যেমন: রফিক ক্লথিং স্টোর"
                    className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-300 font-bold mb-1">
                  মোবাইল / হোয়াটসঅ্যাপ নম্বর *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="যেমন: 017XXXXXXXX"
                    className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-300 font-bold mb-1">
                  জেলা / বাজার লোকেশন
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    placeholder="যেমন: মিরপুর ১০, ঢাকা"
                    className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>
            </div>

            <div className="mt-3">
              <label className="block text-xs text-slate-300 font-bold mb-1">
                বিশেষ কোনো নোট বা প্রোডাক্ট লিস্ট সম্পর্কিত নির্দেশনা (ঐচ্ছিক):
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="যেমন: আমার দোকানে প্রায় ২০০টি আইটেম আছে, অথবা প্রিন্টারে বিশেষ লোগো বসাতে হবে..."
                className="w-full p-3 text-xs sm:text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-400"
              />
            </div>
          </div>

          {/* Step 4: Payment Methods Info */}
          <div className="bg-slate-950 rounded-2xl p-4.5 border border-pink-500/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-black text-slate-200 uppercase tracking-wider">
                ৪. পেমেন্ট তথ্য (বিকাশ পার্সোনাল):
              </span>
              <span className="text-xs text-pink-400 font-bold">
                শুধুমাত্র বিকাশ পার্সোনাল (Send Money)
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium mb-3">
              অর্ডারের পর নিচের বিকাশ নাম্বারে সেন্ড মানি করে WhatsApp-এ ট্রানজেকশন আইডি (TrxID) দিলে তাৎক্ষণিক সোর্স কোড এক্সেস ও সেটআপ বুঝিয়ে দেওয়া হবে।
            </p>

            <div className="bg-slate-900 p-3.5 rounded-xl border border-pink-500/30 flex items-center justify-between">
              <div>
                <div className="font-black text-pink-400 text-sm">bKash Personal (সেন্ড মানি)</div>
                <div className="font-mono text-white text-base font-black tracking-wider mt-0.5">01770-607870</div>
              </div>
              <button
                type="button"
                onClick={() => handleCopyPaymentNumber('01770607870')}
                className="px-3 py-1.5 bg-pink-600 hover:bg-pink-500 text-white rounded-lg text-xs font-black flex items-center gap-1 cursor-pointer transition-colors shadow-sm"
                title="কপি করুন"
              >
                {copiedPayment ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>কপি হয়েছে</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>কপি</span>
                  </>
                )}
              </button>
            </div>

            {copiedPayment && (
              <div className="mt-2 text-xs text-emerald-400 font-bold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> পেমেন্ট নম্বর কপি হয়েছে!
              </div>
            )}
          </div>

          {/* Slip view */}
          {showSlip && (
            <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 text-slate-200">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                <span className="font-black text-sm text-amber-300">অর্ডার ইনভয়েস স্লিপ #{orderNumber}</span>
                <button
                  type="button"
                  onClick={handlePrintSlip}
                  className="inline-flex items-center gap-1 px-3 py-1 text-xs bg-amber-400 text-slate-950 rounded-lg font-black cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" /> প্রিন্ট স্লিপ
                </button>
              </div>
              <div className="text-xs space-y-1 font-medium">
                <p><strong>ক্লায়েন্ট:</strong> {clientName || 'নাম উল্লেখ নেই'} ({shopName || 'দোকান উল্লেখ নেই'})</p>
                <p><strong>মোবাইল:</strong> {phone || 'নম্বর উল্লেখ নেই'}</p>
                <p><strong>প্যাকেজ:</strong> {currentPackage.nameBn} - {currentPackage.priceFormatted}</p>
                <p><strong>সফটওয়্যার:</strong> {appDisplayName}</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-5 sm:p-6 border-t border-slate-800 bg-slate-950 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <span className="font-bold">মোট প্রদেয়:</span>
            <span className="font-mono text-xl font-black text-amber-300">
              {currentPackage.priceFormatted}
            </span>
            <span className="text-slate-500">(এককালীন)</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setShowSlip(!showSlip)}
              className="px-4 py-2.5 text-xs font-bold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 inline mr-1" />
              {showSlip ? 'স্লিপ লুকান' : 'স্লিপ দেখুন'}
            </button>

            <button
              type="button"
              onClick={handleWhatsAppOrder}
              className="flex-1 sm:flex-none px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp-এ অর্ডার পাঠান</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
