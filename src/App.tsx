/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DemoAppsSection } from './components/DemoAppsSection';
import { PricingSection } from './components/PricingSection';
import { FeatureMatrix } from './components/FeatureMatrix';
import { SavingsCalculator } from './components/SavingsCalculator';
import { WhyGasPos } from './components/WhyGasPos';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { DemoModal } from './components/DemoModal';
import { StickyBottomCta } from './components/StickyBottomCta';
import { SalesLandingPage } from './components/SalesLandingPage';
import { DemoApp } from './data/appsData';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'sales'>('home');
  const [salesAppTarget, setSalesAppTarget] = useState<'fashion-garments-pos' | 'janani-battery-pos'>('fashion-garments-pos');
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [orderPackageId, setOrderPackageId] = useState<'basic' | 'medium' | 'premium'>('medium');
  const [orderAppId, setOrderAppId] = useState<string>('fashion-garments-pos');
  const [demoModalApp, setDemoModalApp] = useState<DemoApp | null>(null);

  const handleOpenOrder = (packageId?: 'basic' | 'medium' | 'premium', appId?: string) => {
    if (packageId) setOrderPackageId(packageId);
    if (appId) setOrderAppId(appId);
    setIsOrderModalOpen(true);
  };

  const handleSelectPackageFromPricing = (packageId: 'basic' | 'medium' | 'premium') => {
    setOrderPackageId(packageId);
    setIsOrderModalOpen(true);
  };

  const handleSelectAppForOrder = (appId: string) => {
    setOrderAppId(appId);
    setIsOrderModalOpen(true);
  };

  const handleOpenDemoDetails = (app: DemoApp) => {
    setDemoModalApp(app);
  };

  const handleOpenSalesPage = (appId?: 'fashion-garments-pos' | 'janani-battery-pos') => {
    if (appId) setSalesAppTarget(appId);
    setActiveView('sales');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-400 selection:text-slate-950 flex flex-col font-sans">
      {/* Top Navigation with DokanHisab brand */}
      <Navbar 
        onOpenOrderModal={() => handleOpenOrder('medium')} 
        onOpenSalesPage={() => handleOpenSalesPage('fashion-garments-pos')}
        activeView={activeView}
      />

      {/* Main Content: Conditional between Home Store and Dedicated Sales Landing Page */}
      {activeView === 'sales' ? (
        <SalesLandingPage
          appId={salesAppTarget}
          onBackToMain={() => {
            setActiveView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenOrderModal={handleOpenOrder}
        />
      ) : (
        <main className="flex-1">
          {/* Hero Section */}
          <Hero onOpenOrderModal={() => handleOpenOrder('medium')} />

          {/* Dedicated Sales Landing Page CTA Ribbon */}
          <div className="bg-gradient-to-r from-emerald-950/80 via-slate-900 to-indigo-950/80 border-y border-emerald-500/30 py-3.5 px-4 text-center">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
              <span className="font-bold text-slate-200">
                🚀 সরাসরি প্রোডাক্টের ডেডিকেটেড সেলস ও ফিচার ল্যান্ডিং পেজ দেখতে চান?
              </span>
              <button
                onClick={() => handleOpenSalesPage('fashion-garments-pos')}
                className="px-4 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs transition-all shadow-md active:scale-95 cursor-pointer shrink-0"
              >
                সেলস ল্যান্ডিং পেজে যান →
              </button>
            </div>
          </div>

          {/* Live Demo Applications Section */}
          <DemoAppsSection 
            onSelectAppForOrder={handleSelectAppForOrder}
            onOpenDemoDetails={handleOpenDemoDetails}
          />

          {/* 3-Tier Pricing Section */}
          <PricingSection onSelectPackage={handleSelectPackageFromPricing} />

          {/* Detailed Feature Matrix Table */}
          <FeatureMatrix onSelectPackage={handleSelectPackageFromPricing} />

          {/* Interactive Savings Calculator */}
          <SavingsCalculator />

          {/* Why Google Apps Script? */}
          <WhyGasPos />

          {/* FAQ Accordion */}
          <FaqSection />
        </main>
      )}

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky CTA Bar */}
      <StickyBottomCta onOpenOrderModal={() => handleOpenOrder('medium')} />

      {/* Interactive Order Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        initialPackageId={orderPackageId}
        initialAppId={orderAppId}
      />

      {/* Demo Guidance & Credentials Modal */}
      <DemoModal
        app={demoModalApp}
        onClose={() => setDemoModalApp(null)}
        onOrderThisApp={(appId) => {
          setDemoModalApp(null);
          handleSelectAppForOrder(appId);
        }}
      />
    </div>
  );
}
