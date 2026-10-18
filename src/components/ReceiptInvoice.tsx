import React from 'react';
import { 
  Printer, 
  CheckCircle2, 
  ExternalLink, 
  MessageCircle, 
  ShieldCheck, 
  Sparkles,
  Download
} from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

export interface ReceiptData {
  invoiceNumber: string;
  orderDate: string;
  clientName: string;
  shopName: string;
  clientEmail: string;
  clientPhone: string;
  senderNumber: string;
  trxId: string;
  packageName: string;
  packagePrice: string;
  packagePriceBdt: number;
  appName: string;
  appCategory: string;
}

interface ReceiptInvoiceProps {
  data: ReceiptData;
  onPrint: () => void;
  onOpenDrive?: () => void;
  onWhatsAppPing?: () => void;
}

export const ReceiptInvoice: React.FC<ReceiptInvoiceProps> = ({
  data,
  onPrint,
  onOpenDrive,
  onWhatsAppPing
}) => {
  return (
    <div className="w-full">
      {/* Action Toolbar on Screen (Hidden on Print) */}
      <div className="no-print flex flex-wrap items-center justify-between gap-3 mb-4 bg-slate-900/90 border border-slate-800 p-3.5 sm:p-4 rounded-2xl">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-black text-white">
            অফিসিয়াল ইনভয়েস ও ক্যাশ মেমো প্রস্তুত
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onPrint}
            className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl flex items-center gap-1.5 shadow-md transition-all cursor-pointer active:scale-95"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>প্রিন্ট / PDF সংরক্ষণ (১ পৃষ্ঠা)</span>
          </button>
        </div>
      </div>

      {/* THE PRINTABLE RECEIPT CARD:
          Engineered to be 100% single page, ultra-clean, minimal, and high-contrast */}
      <div 
        id="printable-receipt"
        className="w-full max-w-3xl mx-auto bg-white text-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200 relative overflow-hidden text-left"
        style={{ color: '#0f172a' }}
      >
        {/* Top Watermark / Ambient Accent */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500" />

        {/* Header: Brand & Invoice Meta */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center font-black text-lg shadow-sm">
                দ
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                  DokanHisab
                </h1>
                <p className="text-[11px] font-bold text-slate-500 -mt-0.5">
                  গুগল অ্যাপস স্ক্রিপ্ট ক্লাউড পিওএস
                </p>
              </div>
            </div>
            <div className="mt-2 text-xs text-slate-600 font-medium">
              <p>হেল্পলাইন: <span className="font-mono font-bold text-slate-800">{SITE_CONFIG.displayPhone}</span> (হোয়াটসঅ্যাপ/কল)</p>
              <p>সার্ভার: গুগল ক্লাউড শিট ডাটাবেস (০৳ মাসিক ফি)</p>
            </div>
          </div>

          <div className="text-left sm:text-right">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-300 mb-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>পরিশোধিত (PAID - bKash)</span>
            </span>
            <div className="text-xs text-slate-600">
              <p>ইনভয়েস নং: <strong className="font-mono font-bold text-slate-900">{data.invoiceNumber}</strong></p>
              <p>তারিখ: <strong className="text-slate-900">{data.orderDate}</strong></p>
            </div>
          </div>
        </div>

        {/* 2-Column Details: Billed To & Payment Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 py-5 border-b border-slate-200 text-xs">
          {/* Left Column: Billed To */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-2">
              বিল প্রাপক (গ্রাহকের তথ্য):
            </span>
            <div className="space-y-1 text-slate-800 font-medium">
              <p className="text-sm font-black text-slate-950">{data.clientName || 'সম্মানিত ক্লায়েন্ট'}</p>
              {data.shopName && (
                <p className="text-xs font-bold text-slate-700">{data.shopName}</p>
              )}
              <p>মোবাইল: <strong className="font-mono text-slate-900">{data.clientPhone || data.senderNumber}</strong></p>
              <p>ড্রাইভ এক্সেস ইমেইল: <strong className="font-mono text-slate-900">{data.clientEmail || 'জিমেইল প্রদান করা হয়নি'}</strong></p>
            </div>
          </div>

          {/* Right Column: Payment Details */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-2">
              পেমেন্ট ও ট্রানজেকশন তথ্য:
            </span>
            <div className="space-y-1 text-slate-800 font-medium">
              <p>পেমেন্ট মাধ্যম: <strong className="text-pink-600 font-black">বিকাশ পার্সোনাল (Send Money)</strong></p>
              <p>প্রাপক নম্বর: <strong className="font-mono text-slate-900">{SITE_CONFIG.bkashNumber}</strong></p>
              <p>প্রেরক বিকাশ: <strong className="font-mono text-slate-900">{data.senderNumber}</strong></p>
              <p>বিকাশ TrxID: <strong className="font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">{data.trxId}</strong></p>
            </div>
          </div>
        </div>

        {/* Itemized Table */}
        <div className="py-5">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-[11px] font-black text-slate-500 uppercase tracking-wider">
                <th className="pb-2">বিবরণ (আইটেম ও সার্ভিস)</th>
                <th className="pb-2 text-center">পরিমাণ</th>
                <th className="pb-2 text-right">মূল্য (এককালীন)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3">
                  <div className="font-black text-slate-900 text-sm">
                    {data.appName}
                  </div>
                  <div className="text-[11px] text-slate-600 mt-0.5">
                    প্যাকেজ: <strong className="text-slate-800">{data.packageName}</strong> • গুগল অ্যাপস স্ক্রিপ্ট পিওএস
                  </div>
                  <div className="text-[10px] text-emerald-700 mt-0.5 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 inline" />
                    <span>১০০% আজীবন লাইসেন্স ও সম্পূর্ণ গুগল শিট ডাটাবেস অন্তর্ভুক্ত</span>
                  </div>
                </td>
                <td className="py-3 text-center font-mono font-bold text-slate-700">১</td>
                <td className="py-3 text-right font-mono font-black text-slate-950 text-sm">
                  {data.packagePrice}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Totals & Calculations */}
        <div className="pt-3 pb-5 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="text-xs text-slate-500 max-w-sm">
            <p className="font-bold text-slate-700">আজীবন চার্জমুক্ত সুবিধা:</p>
            <p className="text-[11px] text-slate-600">গুগল শিট ও ড্রাইভ ব্যবহারের কারণে ভবিষ্যতে কোনো মাসিক বা বাৎসরিক সার্ভার ফি প্রদান করতে হবে না।</p>
          </div>

          <div className="w-full sm:w-64 bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1.5 text-xs">
            <div className="flex justify-between text-slate-600">
              <span>সাবটোটাল:</span>
              <span className="font-mono font-bold text-slate-800">{data.packagePrice}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>ক্লাউড সার্ভার ফি:</span>
              <span className="font-mono font-bold text-emerald-600">০ ৳ (আজীবন ফ্রি)</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>সার্ভিস ও ভ্যাট:</span>
              <span className="font-mono font-bold text-emerald-600">০ ৳</span>
            </div>
            <div className="pt-2 border-t border-slate-300 flex justify-between items-baseline text-sm font-black text-slate-950">
              <span>সর্বমোট পরিশোধিত:</span>
              <span className="font-mono text-base text-emerald-700 font-black">{data.packagePrice}</span>
            </div>
          </div>
        </div>

        {/* Seal / Verification Footer */}
        <div className="pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-600 text-[11px]">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>সিস্টেম জেনারেটেড ডিজিটাল ইনভয়েস কপি। কোনো ফিজিক্যাল স্বাক্ষরের প্রয়োজন নেই।</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="border border-emerald-600/50 bg-emerald-50 px-3 py-1 rounded-lg text-[10px] font-black uppercase text-emerald-800 tracking-wider">
              ✓ Verified & Authorized
            </div>
            <div className="text-[11px] font-bold text-slate-700">
              DokanHisab Sales
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
