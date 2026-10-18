export interface DemoApp {
  id: string;
  name: string;
  category: string;
  categoryEn: string;
  tagline: string;
  description: string;
  demoUrl: string;
  requiresAuth: boolean;
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
    btnClass: string;
    icon: 'Truck' | 'Cpu' | 'Store' | 'Shirt';
  };
}

export const DEMO_APPS: DemoApp[] = [
  {
    id: 'dealership-management-system',
    name: 'ডিলারশিপ ম্যানেজমেন্ট সিস্টেম',
    category: 'ডিলারশিপ ও ডিস্ট্রিবিউশন ইনভেন্টরি',
    categoryEn: 'Dealership & Distribution Management',
    tagline: 'ডিলার ও পাইকারি ডিস্ট্রিবিউটরদের জন্য স্টক, সাপ্লায়ার ও কাস্টমার লেজার অটোমেশন',
    description: 'ডিলারশিপ, হোলসেল ডিস্ট্রিবিউশন ও বড় গুদামের চালান, ক্যাশ/বাকির হিসাব, ব্যাংক ট্রানজেকশন ও লাভ-ক্ষতি সহজে পরিচালনার জন্য প্রফেশনাল গুগল অ্যাপস স্ক্রিপ্ট সমাধান।',
    demoUrl: 'https://script.google.com/macros/s/AKfycby76f2Em4dLFYF0orBQLD6exPFXQbQc_W0K1JeV6H7Ul1NdXHmOdADounTKMfCUzMz4/exec',
    requiresAuth: true,
    credentials: {
      usernameLabel: 'User',
      username: 'admin',
      passwordLabel: 'Password',
      password: 'Random@#$12345',
    },
    features: [
      'ডিলারশিপ প্রোডাক্ট ক্যাটালগ ও বাল্ক স্টক কাউন্ট',
      'সাপ্লায়ার পারচেজ, পেমেন্ট ও কাস্টমার বাকির খাতা',
      'চালান জেনারেশন ও থার্মাল/A4 ইনভয়েস প্রিন্টিং',
      'দৈনিক, মাসিক ও বাৎসরিক লাভ-ক্ষতির পূর্ণ হিসাব'
    ],
    techStack: ['Google Apps Script', 'Google Sheets DB', 'HTML5/Tailwind', 'Secure API'],
    bestFor: ['ডিলারশিপ ও ডিস্ট্রিবিউটর', 'পাইকারি বাণিজ্যিক প্রতিষ্ঠান', 'উৎপাদন ও সাপ্লাই এজেন্সি'],
    previewTheme: {
      badgeColor: 'border-amber-500/40 text-amber-300 bg-amber-950/60',
      accentColor: 'text-amber-400',
      btnClass: 'bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 shadow-amber-500/25',
      icon: 'Truck',
    }
  },
  {
    id: 'electronic-hardware-shop',
    name: 'Electronic Hardware Shop System',
    category: 'ইলেকট্রনিক্স ও হার্ডওয়্যার পিওএস',
    categoryEn: 'Electronics & Hardware Retail POS',
    tagline: 'ইলেকট্রনিক্স, পার্টস, সিরিয়াল ও ওয়ারেন্টি ট্র্যাকিং ভিত্তিক কমপ্লিট রিটেইল সফটওয়্যার',
    description: 'ইলেকট্রনিক্স শোরুম, হার্ডওয়্যার, স্যানিটারি ও ইলেকট্রিক ইকুইপমেন্টের জন্য বিশেষায়িত সিস্টেম। সিরিয়াল নম্বর ট্র্যাকিং, দ্রুত বারকোড ক্যাশ মেমো ও কাস্টমার বাকির খাতা।',
    demoUrl: 'https://script.google.com/macros/s/AKfycbzO5c7E9kI7DIFOpQ8pJFIbMolVvnmf2Gh2QZz7RwPKC8KKVnApKL5NA_0FIqWjrjJQ/exec',
    requiresAuth: true,
    credentials: {
      usernameLabel: 'User',
      username: 'admin',
      passwordLabel: 'Password',
      password: 'Random@#$12345',
    },
    features: [
      'সিরিয়াল নম্বর ও ওয়ারেন্টি পিরিয়ড ট্র্যাকিং',
      'ইনস্ট্যান্ট বারকোড স্ক্যানিং ও ক্যাশ মেমো প্রিন্ট',
      'হার্ডওয়্যার ক্যাটাগরি ও লো-স্টক নোটিফিকেশন',
      'কাস্টমার ডিউ খাতা ও পেমেন্ট রিসিভ হিস্ট্রি'
    ],
    techStack: ['Google Apps Script', 'Google Sheets DB', 'JavaScript ES6', 'Modern CSS3'],
    bestFor: ['ইলেকট্রনিক্স শোরুম ও দোকান', 'হার্ডওয়্যার ও স্যানিটারি শপ', 'মোটর পার্টস ও ইলেকট্রিক স্টোর'],
    previewTheme: {
      badgeColor: 'border-cyan-500/40 text-cyan-300 bg-cyan-950/60',
      accentColor: 'text-cyan-400',
      btnClass: 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-cyan-500/25',
      icon: 'Cpu',
    }
  },
  {
    id: 'traders-pos-system',
    name: 'ট্রেডার্স POS System',
    category: 'ট্রেডার্স ও হোলসেল-রিটেইল পিওএস',
    categoryEn: 'Traders Wholesale & Retail POS',
    tagline: 'সাধারণ ট্রেডিং ও বাণিজ্যিক প্রতিষ্ঠানের জন্য হাই-স্পিড বিলিং ও লেজার সিস্টেম',
    description: 'যেকোনো পাইকারি ও খুচরা ট্রেডিং বিজনেসের জন্য নির্ভরযোগ্য গুগল অ্যাপস স্ক্রিপ্ট অ্যাপ্লিকেশন। দ্রুত বিলিং, নগদ ও বাকির আলাদা খাতা এবং স্প্রেডশিট ডাটাবেস।',
    demoUrl: 'https://script.google.com/macros/s/AKfycbzwstAmVU0s5DFKt22tICz9_lJy7irNu-6MToj7N8bCwxWDwAC2j-Mwlk7H57nJM302cQ/exec',
    requiresAuth: true,
    credentials: {
      usernameLabel: 'User',
      username: 'admin',
      passwordLabel: 'Password',
      password: 'Random@#$12345',
    },
    features: [
      'খুচরা ও পাইকারি ডাবল রেট প্রাইসিং সাপোর্ট',
      '১-ক্লিকে কাস্টমার রসিদ ও ইনভয়েস প্রিন্ট',
      'দৈনিক ক্রয়-বিক্রয় ও লাভ-ক্ষতির ব্যালেন্স শিট',
      'মোবাইল ও পিসিতে সমান গতিতে ব্যবহারের সুবিধা'
    ],
    techStack: ['Google Apps Script', 'Google Sheets DB', 'Vanilla JS', 'Tailwind'],
    bestFor: ['জেনারেল ট্রেডার্স ও মার্চেন্ট', 'মুদি ও জেনারেল ডিপার্টমেন্টাল স্টোর', 'পাইকারি বাণিজ্যিক আড়ত'],
    previewTheme: {
      badgeColor: 'border-emerald-500/40 text-emerald-300 bg-emerald-950/60',
      accentColor: 'text-emerald-400',
      btnClass: 'bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 shadow-emerald-500/25',
      icon: 'Store',
    }
  },
  {
    id: 'fashion-store-pos',
    name: 'Fashion Store POS',
    category: 'ফ্যাশন শপ, গার্মেন্টস ও ক্লথিং রিটেইল',
    categoryEn: 'Fashion Apparel & Boutique POS',
    tagline: 'পোশাকের সাইজ, কালার ভ্যারিয়েন্ট ও বারকোড ভিত্তিক অটোমেটেড বিলিং সফটওয়্যার',
    description: 'পোশাকের শোরুম, গার্মেন্টস রিটেইল ও বুটিকের জন্য সম্পূর্ণ সমাধান। সাইজ ও কালার ভ্যারিয়েন্ট স্টক ট্র্যাকিং, বারকোড রিডার সাপোর্ট, ডিসকাউন্ট ও থার্মাল প্রিন্ট।',
    demoUrl: 'https://script.google.com/macros/s/AKfycbwbssamVW7Jp21R1w4g2fvgJe8jNISSKdsggM_FxjA1DWfmzwkgfG1epGBoYM-3OoOn/exec',
    requiresAuth: true,
    credentials: {
      usernameLabel: 'User',
      username: 'admin',
      passwordLabel: 'Password',
      password: 'Random@#$12345',
    },
    features: [
      'সাইজ (S, M, L, XL, XXL) ও কালার ভ্যারিয়েন্ট ট্র্যাকিং',
      'ইনস্ট্যান্ট বারকোড স্ক্যান ও দ্রুত ক্যাশ মেমো',
      'কাস্টমার বাকির খাতা ও এসএমএস ইনভয়েস সুবিধা',
      'থার্মাল রসিদ প্রিন্টার (58mm/80mm) অটো সাপোর্ট'
    ],
    techStack: ['Google Apps Script', 'Google Sheets DB', 'HTML5/Tailwind', 'Secure API'],
    bestFor: ['গার্মেন্টস ও পোশাক শোরুম', 'লেডিস ও জেন্টস বুটিক', 'জুতা ও ফ্যাশন এক্সেসরিজ শপ'],
    previewTheme: {
      badgeColor: 'border-purple-500/40 text-purple-300 bg-purple-950/60',
      accentColor: 'text-purple-400',
      btnClass: 'bg-gradient-to-r from-purple-400 to-indigo-400 text-slate-950 shadow-purple-500/25',
      icon: 'Shirt',
    }
  }
];
