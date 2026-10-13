export interface DemoApp {
  id: string;
  name: string;
  category: string;
  categoryEn: string;
  tagline: string;
  description: string;
  demoUrl: string;
  credentials: {
    usernameLabel: string;
    username: string;
    passwordLabel: string;
    password: string;
  };
  features: string[];
  techStack: string[];
  bestFor: string[];
  previewTheme: {
    badgeColor: string;
    accentColor: string;
    gradient: string;
    icon: string;
  };
}

export const DEMO_APPS: DemoApp[] = [
  {
    id: 'fashion-garments-pos',
    name: 'Fashion Garments POS',
    category: 'পোশাক, গার্মেন্টস ও বুটিক ইনভেন্টরি',
    categoryEn: 'Fashion & Garments Retail POS',
    tagline: 'পোশাকের সাইজ, কালার ভ্যারিয়েন্ট ও বারকোড ভিত্তিক অটোমেটেড বিলিং ও স্টক সিস্টেম',
    description: 'ক্লথিং শোরুম, বুটিক শপ, গার্মেন্টস রিটেইল ও জুতার দোকানের জন্য বিশেষায়িত গুগল অ্যাপস স্ক্রিপ্ট পিওএস। এতে রয়েছে ইনস্ট্যান্ট বারকোড স্ক্যান, কাস্টমার ডিউ লেজার, ডিসকাউন্ট ক্যালকুলেশন এবং থার্মাল রিসিপ্ট প্রিন্টিং।',
    demoUrl: 'https://script.google.com/macros/s/AKfycbxzg1q311ERkeFJ3U7zc9LllYNaAMOLByp8dbH5Dorw0TE7Sx9YLJ3pScvSAwwxV3s_FA/exec',
    credentials: {
      usernameLabel: 'Login',
      username: 'Admin',
      passwordLabel: 'PIN',
      password: '1234',
    },
    features: [
      'সাইজ ও কালার ভ্যারিয়েন্ট স্টক ট্র্যাকিং (S, M, L, XL, XXL)',
      'বারকোড / কিউআর কোড জেনারেশন ও স্ক্যানার সাপোর্ট',
      'ইনস্ট্যান্ট থার্মাল ক্যাশ মেমো প্রিন্ট (58mm / 80mm POS)',
      'কাস্টমার বাকির খাতা ও এসএমএস/ইনভয়েস শেয়ারিং',
      'দৈনিক বিক্রয়, মোট লাভ ও খরচের স্বয়ংক্রিয় হিসাব',
      'গুগল শিটে আনলিমিটেড প্রোডাক্ট ও সেলস ডাটা ব্যাকআপ',
      'সহজ টাচ-ফ্রেন্ডলি ফাস্ট বিলিং ইন্টারফেস'
    ],
    techStack: ['Google Apps Script', 'Google Sheets DB', 'HTML5/Tailwind', 'RESTful GAS API'],
    bestFor: ['গার্মেন্টস ও পোশাক শোরুম', 'লেডিস ও জেন্টস বুটিক শপ', 'জুতার দোকান (Footwear)', 'টেইলার্স ও ফেব্রিক স্টোর'],
    previewTheme: {
      badgeColor: 'border-emerald-200 text-emerald-800 bg-emerald-50/70',
      accentColor: 'text-emerald-700',
      gradient: 'from-emerald-950 via-stone-900 to-stone-900',
      icon: 'Shirt',
    }
  },
  {
    id: 'janani-battery-pos',
    name: 'M/S Janani Battery House POS',
    category: 'ব্যাটারি, আইপিএস, ইলেকট্রনিক্স ও অটো পার্টস',
    categoryEn: 'Battery, Electronics & Auto Spares POS',
    tagline: 'ব্যাটারি সিরিয়াল নম্বর, ওয়ারেন্টি ট্র্যাকিং ও সাপ্লায়ার-কাস্টমার লেজার পিওএস',
    description: 'ব্যাটারি দোকান, আইপিএস শোরুম, ইলেকট্রনিক্স ও অটোমোটিভ পার্টস শপের জন্য সম্পূর্ণ সমাধান। ব্যাটারির স্বতন্ত্র সিরিয়াল নম্বর ট্র্যাকিং, ওয়ারেন্টি ক্লেইম রেজিস্টার, পুরোনো ব্যাটারি এক্সচেঞ্জ হিসাব এবং বাকির খাতা পরিচালনা।',
    demoUrl: 'https://script.google.com/macros/s/AKfycbwbtEyntJDadPaXrDQnAIaLiXorJ_GzDogIbKtHwiUQZw8ip9L6ANgpH8W-gRNIleFGVg/exec',
    credentials: {
      usernameLabel: 'User',
      username: 'admin',
      passwordLabel: 'Password',
      password: 'Random@#$12345',
    },
    features: [
      'প্রতিটি ব্যাটারির ইউনিক সিরিয়াল নম্বর ও বারকোড ট্র্যাকিং',
      'ওয়ারেন্টি পিরিয়ড ও গ্যারান্টি কার্ড স্বয়ংক্রিয় ম্যানেজমেন্ট',
      'পুরোনো ব্যাটারি এক্সচেঞ্জ (Scrap/Old Battery) ও অ্যাডজাস্টমেন্ট',
      'সাপ্লায়ার ও কাস্টমার কমপ্লিট লেজার / বাকির খাতা',
      'ইনভয়েস ভ্যাট, ডিসকাউন্ট ও ট্র্যাকিং নাম্বার সাপোর্ট',
      'মাসিক ও বাৎসরিক লাভ-ক্ষতি স্টেটমেন্ট Google Sheet-এ',
      'আইপিএস, ব্যাটারি ও সোলার ইকুইপমেন্ট ক্যাটাগরি ফিল্টারিং'
    ],
    techStack: ['Google Apps Script', 'Google Sheets DB', 'JavaScript ES6', 'Modern CSS3 UI'],
    bestFor: ['ব্যাটারি শপ ও ডিলারশিপ', 'আইপিএস ও সোলার শোরুম', 'ইলেকট্রনিক্স ও হার্ডওয়্যার শপ', 'অটোমোবাইল ও মোটর পার্টস স্টোর'],
    previewTheme: {
      badgeColor: 'border-blue-200 text-blue-800 bg-blue-50/70',
      accentColor: 'text-blue-700',
      gradient: 'from-blue-950 via-stone-900 to-stone-900',
      icon: 'BatteryCharging',
    }
  }
];
