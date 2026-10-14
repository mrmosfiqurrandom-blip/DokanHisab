/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PricingSection } from './components/PricingSection';
import { SavingsCalculator } from './components/SavingsCalculator';
import { WhyGasPos } from './components/WhyGasPos';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { DemoProjectsView } from './components/DemoProjectsView';
import { PaymentCheckoutPage } from './components/PaymentCheckoutPage';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { DemoApp } from './data/appsData';
import { Play, Layers, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'demos' | 'payment'>('home');
  const [orderPackageId, setOrderPackageId] = useState<'basic' | 'medium' | 'premium'>('medium');
  const [orderAppId, setOrderAppId] = useState<string>('smart-cloud-billing');
  const [demoModalApp, setDemoModalApp] = useState<DemoApp | null>(null);

  // When client clicks any service/package, open the dedicated bKash payment processing page
  const handleSelectServiceToBuy = (packageId?: 'basic' | 'medium' | 'premium', appId?: string) => {
    if (packageId) setOrderPackageId(packageId);
    if (appId) setOrderAppId(appId);
    setActiveView('payment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDemoDetails = (app: DemoApp) => {
    setDemoModalApp(app);
  };

  const handleNavigate = (view: 'home' | 'demos' | 'payment') => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-400 selection:text-slate-950 flex flex-col font-sans relative">
      {/* Top Clean Navbar */}
      <Navbar 
        onOpenOrderModal={() => handleSelectServiceToBuy('medium')} 
        onNavigate={handleNavigate}
        activeView={activeView}
      />

      {/* View 1: Dedicated bKash Payment Page (Opens only when client clicks a service to buy) */}
      {activeView === 'payment' && (
        <PaymentCheckoutPage
          initialPackageId={orderPackageId}
          initialAppId={orderAppId}
          onBackToHome={() => handleNavigate('home')}
        />
      )}

      {/* View 2: Dedicated Live Demo Projects Showcase */}
      {activeView === 'demos' && (
        <DemoProjectsView
          onSelectAppForOrder={(appId) => handleSelectServiceToBuy('medium', appId)}
          onOpenDemoDetails={handleOpenDemoDetails}
          onBackToHome={() => handleNavigate('home')}
        />
      )}

      {/* View 3: Clean, Minimal, Uncluttered Home & Packages Page */}
      {activeView === 'home' && (
        <main className="flex-1">
          {/* Hero Section */}
          <Hero 
            onOpenOrderModal={() => handleSelectServiceToBuy('medium')} 
            onViewDemos={() => handleNavigate('demos')}
          />

          {/* Quick Demo Showcase Ribbon */}
          <section className="bg-gradient-to-r from-slate-900 via-emerald-950/40 to-slate-900 border-y border-emerald-500/30 py-5 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-center md:text-left">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/40">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-white">
                    আমাদের ৫টি পূর্ণাঙ্গ লাইভ ডেমো অ্যাপ্লিকেশন টেস্ট করুন
                  </h3>
                  <p className="text-xs text-slate-300 font-medium">
                    ওপেন এক্সেস লিঙ্ক, মাস্টার পাসওয়ার্ড এবং অ্যাডমিন ক্রেডেনশিয়াল অন্তর্ভুক্ত।
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  onClick={() => handleNavigate('demos')}
                  className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-md transition-all active:scale-95 cursor-pointer flex items-center gap-1.5"
                >
                  <Play className="w-4 h-4 fill-slate-950" />
                  <span>ডেমো প্রজেক্টস দেখুন</span>
                </button>
              </div>
            </div>
          </section>

          {/* 3-Tier Packages & Pricing (Clicking opens bKash Payment Page) */}
          <PricingSection onSelectPackage={(pkgId) => handleSelectServiceToBuy(pkgId)} />

          {/* Interactive Savings Calculator */}
          <SavingsCalculator />

          {/* Core Advantages: Why DokanHisab GAS POS */}
          <WhyGasPos />

          {/* FAQ Accordion */}
          <FaqSection />
        </main>
      )}

      {/* Clean Footer */}
      <Footer />

      {/* Dedicated Floating WhatsApp Icon in Bottom Right Corner */}
      <FloatingWhatsApp />

      {/* Demo Guidance & Credentials Modal */}
      <DemoModal
        app={demoModalApp}
        onClose={() => setDemoModalApp(null)}
        onOrderThisApp={(appId) => {
          setDemoModalApp(null);
          handleSelectServiceToBuy('medium', appId);
        }}
      />
    </div>
  );
}
