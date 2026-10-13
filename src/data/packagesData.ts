export interface PricingPackage {
  id: 'basic' | 'medium' | 'premium';
  nameBn: string;
  nameEn: string;
  badge?: string;
  isPopular?: boolean;
  priceBdt: number;
  priceFormatted: string;
  subtitleBn: string;
  descriptionBn: string;
  targetAudienceBn: string;
  deliveryTimeBn: string;
  featuresIncluded: {
    textBn: string;
    isKey?: boolean;
    note?: string;
  }[];
  featuresNotIncluded: string[];
}

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'basic',
    nameBn: 'বেসিক প্যাকেজ',
    nameEn: 'Source Code Only',
    priceBdt: 2000,
    priceFormatted: '২,০০০ ৳',
    subtitleBn: 'শুধু সোর্স কোড সংগ্রহ করে নিজে সেটআপ করতে ইচ্ছুক ইউজার ও ডেভেলপারদের জন্য',
    descriptionBn: 'সম্পূর্ণ গুগল অ্যাপস স্ক্রিপ্ট ব্যাকএন্ড ও ফ্রন্টএন্ড সোর্স কোড। সাথে গুগল শিট ডাটাবেস টেমপ্লেট এবং পূর্ণাঙ্গ সেলফ-ডিপ্লয়মেন্ট ডকুমেন্টেশন গাইড।',
    targetAudienceBn: 'যারা টেকনিক্যালি অভিজ্ঞ এবং নিজে নিজে গুগল ড্রাইভে কোড বসিয়ে নিতে পারবেন।',
    deliveryTimeBn: 'পেমেন্টের সাথে সাথে ইনস্ট্যান্ট ডেলিভারি (Instant Drive Link)',
    featuresIncluded: [
      { textBn: 'সম্পূর্ণ মূল সোর্স কোড (.gs ফাইল ও ফ্রন্টএন্ড কোড)', isKey: true },
      { textBn: 'রেডিমেড গুগল শিট ডাটাবেস টেবিল ও স্ট্রাকচার ফাইল', isKey: true },
      { textBn: 'স্টেপ-বাই-স্টেপ সেলফ ডিপ্লয়মেন্ট পিডিএফ গাইড ও টেক্সট নির্দেশিকা' },
      { textBn: '১০০% আনরেস্ট্রিক্টেড লাইফটাইম ব্যবহারের লাইসেন্স' },
      { textBn: 'ভবিষ্যতে আপনার প্রয়োজনমতো নিজস্ব কাস্টমাইজেশনের স্বাধীনতা' },
      { textBn: 'কোনো মাসিক বা বাৎসরিক সার্ভার রিনিউয়াল চার্জ নেই (0 ৳ হোস্টিং)' }
    ],
    featuresNotIncluded: [
      'ব্যক্তিগত লাইভ ইনস্টলেশন ও রিমোট সেটআপ সাপোর্ট',
      'দোকানের নাম, লোগো ও প্রিন্টার হেডার সেটিং করে দেওয়া',
      'প্রোডাক্ট লিস্ট বা ক্যাটালগ এন্ট্রি সহায়তা',
      'লাইভ অনবোর্ডিং বা স্টাফ ট্রেনিং'
    ]
  },
  {
    id: 'medium',
    nameBn: 'মিডিয়াম প্যাকেজ',
    nameEn: 'Full Code + Setup Support',
    isPopular: true,
    badge: 'সর্বাধিক জনপ্রিয় / Recommended',
    priceBdt: 4000,
    priceFormatted: '৪,০০০ ৳',
    subtitleBn: 'সোর্স কোডের সাথে ক্লায়েন্টের গুগল অ্যাকাউন্টে পূর্ণাঙ্গ সেটআপ ও সাপোর্ট',
    descriptionBn: 'আপনার গুগল ড্রাইভ ও জিমেইল অ্যাকাউন্টে আমরা সরাসরি AnyDesk / Google Meet / TeamViewer এর মাধ্যমে ফুল সিস্টেম ডিপ্লয় ও কনফিগারেশন করে দেব।',
    targetAudienceBn: 'দোকানদার ও ব্যবসায়ীদের জন্য যারা কোনো ঝামেলা ছাড়া রেডিমেড রানিং সিস্টেম চান।',
    deliveryTimeBn: '২ থেকে ৪ ঘণ্টার মধ্যে কমপ্লিট সেটআপ ও হ্যান্ডওভার',
    featuresIncluded: [
      { textBn: 'সম্পূর্ণ মূল সোর্স কোড ও গুগল শিট ডাটাবেস টেমপ্লেট', isKey: true },
      { textBn: 'আপনার জিমেইল/গুগল ড্রাইভে লাইভ সেটআপ ও ওয়েব অ্যাপ ডিপ্লয়মেন্ট', isKey: true },
      { textBn: 'দোকানের নাম, ব্র্যান্ড লোগো, ফোন নম্বর ও এড্রেস কনফিগারেশন', isKey: true },
      { textBn: 'ক্যাশ মেমো / ইনভয়েস থার্মাল প্রিন্টার সাইজ ফরম্যাটিং (58mm/80mm)' },
      { textBn: 'গুগল শিট পারমিশন ও সিকিউরিটি অ্যাক্সেস কন্ট্রোল সেটআপ' },
      { textBn: 'সিস্টেম চালানো শেখার জন্য লাইভ ডেমো ও হ্যান্ডস-অন গাইডেন্স' },
      { textBn: '৩০ দিনের ফ্রি টেকনিক্যাল সাপোর্ট ও বাগ ফিক্সিং গ্যারান্টি', isKey: true },
      { textBn: 'কোনো মাসিক বা বাৎসরিক সার্ভার চার্জ নেই (লাইফটাইম ফ্রি হোস্টিং)' }
    ],
    featuresNotIncluded: [
      'বাল্ক প্রোডাক্ট ডাটা এন্ট্রি (১০০+ আইটেম ইনপুট সার্ভিস)',
      'কাস্টম বিজনেস লজিক বা অতিরিক্ত নতুন ফিচার কোডিং'
    ]
  },
  {
    id: 'premium',
    nameBn: 'প্রিমিয়াম প্যাকেজ',
    nameEn: 'Turnkey All-in-One Solution',
    priceBdt: 6000,
    priceFormatted: '৬,০০০ ৳',
    badge: 'ভিআইপি কমপ্লিট সলিউশন',
    subtitleBn: 'সোর্স কোড + ফুল সেটআপ + ক্লায়েন্টের প্রোডাক্ট লিস্ট ডাটা এন্ট্রি ও কাস্টমাইজেশন',
    descriptionBn: 'সম্পূর্ণ ঝামেলামুক্ত টার্নকি সলিউশন। আপনার দোকানের বিদ্যমান প্রোডাক্ট ক্যাটালগ ডাটাবেসে এন্ট্রি করে রেডি-টু-সেল সফটওয়্যার ডেলিভারি এবং ভিআইপি সাপোর্ট।',
    targetAudienceBn: 'যাদের অনেক প্রোডাক্ট রয়েছে এবং সফটওয়্যার সাথে সাথে বিক্রয়ের জন্য প্রস্তুত চান।',
    deliveryTimeBn: '২৪ ঘণ্টার মধ্যে প্রোডাক্ট ডাটা সহ সম্পূর্ণ রেডিমেড ডেলিভারি',
    featuresIncluded: [
      { textBn: 'সম্পূর্ণ সোর্স কোড + গুগল শিট ডাটাবেস লাইফটাইম লাইসেন্স', isKey: true },
      { textBn: 'ক্লায়েন্টের গুগল অ্যাকাউন্টে এক্সপার্ট সেটআপ ও ডিপ্লয়মেন্ট', isKey: true },
      { textBn: 'দোকানের প্রোডাক্ট ক্যাটালগ ও প্রারম্ভিক স্টক এন্ট্রি (Excel / PDF / ছবি থেকে)', isKey: true },
      { textBn: 'কাস্টম রিকোয়ারমেন্ট এডজাস্টমেন্ট (বিশেষ ফিল্ড, ভ্যাট/ট্যাক্স, ডিসকাউন্ট রুলস)', isKey: true },
      { textBn: 'দোকানের ব্র্যান্ডিং, লোগো, ফুটার নোট ও কাস্টম ক্যাশ মেমো ডিজাইন' },
      { textBn: 'দোকানের স্টাফ ও সেলস পারসনদের জন্য ওয়ান-টু-ওয়ান ট্রেনিং সেশন' },
      { textBn: '৯০ দিনের প্রায়োরিটি ভিআইপি হোয়াটসঅ্যাপ ও ফোন কল সাপোর্ট', isKey: true },
      { textBn: 'ডাটাবেস সেফটি, অটো শিট ব্যাকআপ ও সিকিউরিটি অডিট' },
      { textBn: 'ভবিষ্যতের আপডেট ও গাইডে আজীবন ডিসকাউন্ট' }
    ],
    featuresNotIncluded: []
  }
];

export interface ComparisonFeature {
  featureNameBn: string;
  featureDescBn: string;
  basic: boolean | string;
  medium: boolean | string;
  premium: boolean | string;
}

export const COMPARISON_FEATURES: ComparisonFeature[] = [
  {
    featureNameBn: 'কমপ্লিট সোর্স কোড ফাইল (.gs + HTML/JS)',
    featureDescBn: 'সম্পূর্ণ মডিফায়েবল আসল সোর্স কোড লাইফটাইম ওনারশিপ',
    basic: true,
    medium: true,
    premium: true,
  },
  {
    featureNameBn: 'গুগল শিট ডাটাবেস স্ট্রাকচার',
    featureDescBn: 'সবগুলো টেবিল, ফর্মুলা ও ডাটা লিঙ্ক সহ মাস্টার শিট',
    basic: true,
    medium: true,
    premium: true,
  },
  {
    featureNameBn: 'মাসিক বা বাৎসরিক ফি',
    featureDescBn: 'গুগলের ফ্রি হোস্টিংয়ে চলায় সার্ভার বাবদ কোনো খরচ নেই',
    basic: '০ ৳ (লাইফটাইম)',
    medium: '০ ৳ (লাইফটাইম)',
    premium: '০ ৳ (লাইফটাইম)',
  },
  {
    featureNameBn: 'রিমোট ইনস্টলেশন ও ডিপ্লয়মেন্ট',
    featureDescBn: 'AnyDesk / Meet দিয়ে ক্লায়েন্টের ড্রাইভ ও অ্যাকাউন্টে ডিপ্লয়',
    basic: false,
    medium: true,
    premium: true,
  },
  {
    featureNameBn: 'শপ লোগো, নাম ও ইনভয়েস কাস্টমাইজেশন',
    featureDescBn: 'আপনার প্রতিষ্ঠানের পরিচিতি দিয়ে ক্যাশ মেমো সাজানো',
    basic: false,
    medium: true,
    premium: true,
  },
  {
    featureNameBn: 'প্রোডাক্ট ও ইনভেন্টরি ডাটা এন্ট্রি',
    featureDescBn: 'বিদ্যমান পণ্যের তালিকা শিটে এন্ট্রি করে সরাসরি বিক্রয়ের জন্য রেডি করা',
    basic: false,
    medium: false,
    premium: '১০০-৩০০+ পণ্য এন্ট্রি',
  },
  {
    featureNameBn: 'কাস্টম ফিচার ও রিকোয়ারমেন্ট এডিশন',
    featureDescBn: 'বিশেষ ভ্যাট, ডিসকাউন্ট বা অতিরিক্ত ফিল্ড যুক্ত করা',
    basic: false,
    medium: false,
    premium: true,
  },
  {
    featureNameBn: 'স্টাফ ট্রেনিং ও লাইভ অনবোর্ডিং',
    featureDescBn: 'সেলসম্যানদের ক্যাশ মেমো কাটা ও স্টক চেক শেখানো',
    basic: false,
    medium: 'বেসিক গাইড',
    premium: 'পূর্ণাঙ্গ ট্রেনিং সেশন',
  },
  {
    featureNameBn: 'সাপোর্ট পিরিয়ড',
    featureDescBn: 'যেকোনো কারিগরি সমস্যায় সরাসরি যোগাযোগ',
    basic: 'সেলফ-ডকুমেন্টেশন',
    medium: '৩০ দিন লাইভ সাপোর্ট',
    premium: '৯০ দিন ভিআইপি প্রায়োরিটি',
  },
];
