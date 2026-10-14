export interface DemoApp {
  id: string;
  name: string;
  category: string;
  categoryEn: string;
  tagline: string;
  description: string;
  demoUrl: string;
  requiresAuth: boolean;
  credentials?: {
    usernameLabel?: string;
    username?: string;
    passwordLabel?: string;
    password?: string;
  };
  features: string[];
  techStack: string[];
  bestFor: string[];
  previewTheme: {
    badgeColor: string;
    accentColor: string;
    btnClass: string;
    icon: 'Zap' | 'Store' | 'Layers' | 'Shirt' | 'BatteryCharging';
  };
}

export const DEMO_APPS: DemoApp[] = [
  {
    id: 'smart-cloud-billing',
    name: 'Smart Cloud Billing & POS',
    category: 'সরাসরি ওপেন এক্সেস ওয়েব অ্যাপ',
    categoryEn: 'Instant Open Access Billing System',
    tagline: 'লগইন ঝামেলা ছাড়া সরাসরি ওপেন এক্সেস স্মার্ট সেলস ও ইনভয়েস জেনারেটর',
    description: 'কোনো ইউজার আইডি বা পাসওয়ার্ড ছাড়াই সরাসরি ভিজিট করে টেস্ট করার উপযুক্ত হাই-স্পিড গুগল অ্যাপস স্ক্রিপ্ট বিলিং সিস্টেম। দ্রুত ক্যাশ মেমো, স্টক কাউন্ট ও সেলস হিস্ট্রি।',
    demoUrl: 'https://script.google.com/macros/s/AKfycbzT5v6byi1FOmz4pkYeNmsCz1s4dZspqltpguYPX3t89cWNnDcYM14vsvtg3XoFp7UcMA/exec',
    requiresAuth: false,
    features: [
      'সরাসরি ওপেন এক্সেস — কোনো আইডি বা পাসওয়ার্ড প্রয়োজন নেই',
      '১-ক্লিকে ফাস্ট ক্যাশ মেমো ও কাস্টমার ইনভয়েস প্রিন্টিং',
      'সহজ গুগল শিট ডাটাবেস অটো-সিঙ্ক ও হিস্ট্রি',
      'মোবাইল ও পিসিতে ইনস্ট্যান্ট রেসপনসিভ ইউজার ইন্টারফেস'
    ],
    techStack: ['Google Apps Script', 'Google Sheets DB', 'Vanilla JS', 'Tailwind CSS'],
    bestFor: ['জেনারেল রিটেইল স্টোর', 'মুদি ও ডিপার্টমেন্টাল শপ', 'স্টেশনারি ও কসমেটিক্স শপ'],
    previewTheme: {
      badgeColor: 'border-emerald-500/40 text-emerald-300 bg-emerald-950/60',
      accentColor: 'text-emerald-400',
      btnClass: 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-emerald-500/25',
      icon: 'Zap',
    }
  },
  {
    id: 'retail-inventory-pos',
    name: 'Retail Store & Inventory Manager',
    category: 'পাসওয়ার্ড প্রোটেক্টেড পিওএস',
    categoryEn: 'Password Protected Retail Manager',
    tagline: 'পাসওয়ার্ড সিকিউরিটি সহ আধুনিক স্টোর ও ইনভেন্টরি ম্যানেজমেন্ট সিস্টেম',
    description: 'দোকানের ক্যাশিয়ার ও সেলস টিমের জন্য তৈরি সিকিউরড গুগল অ্যাপস স্ক্রিপ্ট অ্যাপ্লিকেশন। স্টক অ্যালার্ট, বারকোড স্ক্যানিং ও ডেইলি সেলস সামারি।',
    demoUrl: 'https://script.google.com/macros/s/AKfycbzwstAmVU0s5DFKt22tICz9_lJy7irNu-6MToj7N8bCwxWDwAC2j-Mwlk7H57nJM302cQ/exec',
    requiresAuth: true,
    credentials: {
      passwordLabel: 'Password',
      password: 'Random@#$12345',
    },
    features: [
      'মাস্টার পাসওয়ার্ড সিকিউরিটি প্রোটেকশন',
      'প্রোডাক্ট স্টক কোয়ান্টিটি ও লো-স্টক নোটিফিকেশন',
      'ক্যাশ ও অনলাইন পেমেন্ট মেথড সাপোর্ট',
      'দৈনিক ও মাসিক লাভ-ক্ষতি ক্যালকুলেটর'
    ],
    techStack: ['Google Apps Script', 'Google Sheets DB', 'Modern HTML5/JS'],
    bestFor: ['সুপারশপ ও মিনিমার্ট', 'ইলেকট্রনিক্স এক্সেসরিজ', 'হোলসেল ও পাইকারি বিক্রেতা'],
    previewTheme: {
      badgeColor: 'border-cyan-500/40 text-cyan-300 bg-cyan-950/60',
      accentColor: 'text-cyan-400',
      btnClass: 'bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 shadow-cyan-500/25',
      icon: 'Store',
    }
  },
  {
    id: 'enterprise-pos-ledger',
    name: 'Enterprise POS & Due Ledger',
    category: 'কমপ্লিট রোল-বেসড পিওএস ও লেজার',
    categoryEn: 'Full RBAC Enterprise POS',
    tagline: 'অ্যাডমিন ইউজারনেম ও পাসওয়ার্ড ভিত্তিক প্রফেশনাল পিওএস ও বাকির খাতা',
    description: 'উন্নত কাস্টমার লেজার, বাকির খাতা, সাপ্লায়ার হিসাব এবং রোল-বেসড কন্ট্রোল সহ গুগল ক্লাউড এন্টারপ্রাইজ রিটেইল সলিউশন।',
    demoUrl: 'https://script.google.com/macros/s/AKfycbyXfCyOJ7Y8r2logzZ2KhXRJhPFPTXjTIhz1qJHEEBnVQ0Qz5Y7YLH2ZYJSUyoiPAZJHA/exec',
    requiresAuth: true,
    credentials: {
      usernameLabel: 'Username',
      username: 'admin',
      passwordLabel: 'Password',
      password: 'Random@#$12345',
    },
    features: [
      'সম্পূর্ণ অ্যাডমিন ও ইউজার রোল অথেন্টিকেশন',
      'কাস্টমার ওয়াইজ বাকির খাতা ও অটো ব্যালেন্স ট্র্যাকিং',
      'সাপ্লায়ার পারচেজ ও পেমেন্ট হিস্ট্রি লেজার',
      'থার্মাল পিওএস রসিদ ও A4 ইনভয়েস প্রিন্ট'
    ],
    techStack: ['Google Apps Script', 'Google Sheets DB', 'Tailwind', 'Secure Auth API'],
    bestFor: ['বড় পাইকারি ও খুচরা দোকান', 'হার্ডওয়্যার ও স্যানিটারি শপ', 'ডিলারশিপ ও ডিস্ট্রিবিউটর'],
    previewTheme: {
      badgeColor: 'border-purple-500/40 text-purple-300 bg-purple-950/60',
      accentColor: 'text-purple-400',
      btnClass: 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-purple-500/25',
      icon: 'Layers',
    }
  },
  {
    id: 'fashion-garments-pos',
    name: 'Fashion Garments POS',
    category: 'পোশাক, গার্মেন্টস ও বুটিক ইনভেন্টরি',
    categoryEn: 'Fashion & Garments Retail POS',
    tagline: 'পোশাকের সাইজ, কালার ভ্যারিয়েন্ট ও বারকোড ভিত্তিক অটোমেটেড বিলিং ও স্টক সিস্টেম',
    description: 'ক্লথিং শোরুম, বুটিক শপ, গার্মেন্টস রিটেইল ও জুতার দোকানের জন্য বিশেষায়িত গুগল অ্যাপস স্ক্রিপ্ট পিওএস। এতে রয়েছে সাইজ ও কালার ভ্যারিয়েন্ট, ইনস্ট্যান্ট বারকোড স্ক্যান, কাস্টমার ডিউ লেজার এবং থার্মাল রিসিপ্ট প্রিন্ট।',
    demoUrl: 'https://script.google.com/macros/s/AKfycbxzg1q311ERkeFJ3U7zc9LllYNaAMOLByp8dbH5Dorw0TE7Sx9YLJ3pScvSAwwxV3s_FA/exec',
    requiresAuth: true,
    credentials: {
      usernameLabel: 'Login',
      username: 'Admin',
      passwordLabel: 'PIN',
      password: '1234',
    },
    features: [
      'সাইজ ও কালার ভ্যারিয়েন্ট স্টক ট্র্যাকিং (S, M, L, XL, XXL)',
      'বারকোড / কিউআর কোড স্ক্যানার ও লেবেল প্রিন্টার সাপোর্ট',
      'ইনস্ট্যান্ট থার্মাল ক্যাশ মেমো প্রিন্ট (58mm / 80mm POS)',
      'কাস্টমার বাকির খাতা ও এসএমএস ইনভয়েস ফরম্যাট'
    ],
    techStack: ['Google Apps Script', 'Google Sheets DB', 'HTML5/Tailwind', 'RESTful API'],
    bestFor: ['গার্মেন্টস ও পোশাক শোরুম', 'লেডিস ও জেন্টস বুটিক শপ', 'জুতার দোকান (Footwear)'],
    previewTheme: {
      badgeColor: 'border-amber-500/40 text-amber-300 bg-amber-950/60',
      accentColor: 'text-amber-400',
      btnClass: 'bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 shadow-amber-500/25',
      icon: 'Shirt',
    }
  },
  {
    id: 'janani-battery-pos',
    name: 'M/S Janani Battery House POS',
    category: 'ব্যাটারি, আইপিএস, ইলেকট্রনিক্স ও অটো পার্টস',
    categoryEn: 'Battery, Electronics & Auto Spares POS',
    tagline: 'ব্যাটারি সিরিয়াল নম্বর, ওয়ারেন্টি ট্র্যাকিং ও সাপ্লায়ার-কাস্টমার লেজার পিওএস',
    description: 'ব্যাটারি দোকান, আইপিএস শোরুম, ইলেকট্রনিক্স ও অটোমোটিভ পার্টস শপের জন্য সম্পূর্ণ সমাধান। ব্যাটারির স্বতন্ত্র সিরিয়াল নম্বর ট্র্যাকিং, ওয়ারেন্টি ক্লেইম রেজিস্টার এবং পুরোনো ব্যাটারি এক্সচেঞ্জ হিসাব।',
    demoUrl: 'https://script.google.com/macros/s/AKfycbwbtEyntJDadPaXrDQnAIaLiXorJ_GzDogIbKtHwiUQZw8ip9L6ANgpH8W-gRNIleFGVg/exec',
    requiresAuth: true,
    credentials: {
      usernameLabel: 'User',
      username: 'admin',
      passwordLabel: 'Password',
      password: 'Random@#$12345',
    },
    features: [
      'প্রতিটি ব্যাটারির ইউনিক সিরিয়াল নম্বর ও বারকোড ট্র্যাকিং',
      'ওয়ারেন্টি পিরিয়ড ও গ্যারান্টি কার্ড স্বয়ংক্রিয় ম্যানেজমেন্ট',
      'পুরোনো ব্যাটারি এক্সচেঞ্জ (Scrap/Old Battery) হিসাব',
      'সাপ্লায়ার ও কাস্টমার কমপ্লিট লেজার / বাকির খাতা'
    ],
    techStack: ['Google Apps Script', 'Google Sheets DB', 'JavaScript ES6'],
    bestFor: ['ব্যাটারি শপ ও ডিলারশিপ', 'আইপিএস ও সোলার শোরুম', 'অটোমোবাইল ও মোটর পার্টস স্টোর'],
    previewTheme: {
      badgeColor: 'border-blue-500/40 text-blue-300 bg-blue-950/60',
      accentColor: 'text-blue-400',
      btnClass: 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-blue-500/25',
      icon: 'BatteryCharging',
    }
  }
];
