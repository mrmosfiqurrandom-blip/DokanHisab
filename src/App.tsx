/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SavingsCalculator } from './components/SavingsCalculator';
import { WhyGasPos } from './components/WhyGasPos';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { DemoProjectsView } from './components/DemoProjectsView';
import { PaymentCheckoutPage } from './components/PaymentCheckoutPage';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { DemoApp } from './data/appsData';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'demos' | 'payment'>('home');
  const [orderPackageId, setOrderPackageId] = useState<'basic' | 'medium' | 'premium'>('medium');
  const [orderAppId, setOrderAppId] = useState<string>('dealership-management-system');
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
          {/* Hero Section with top image slider and 3 clean service packages */}
          <Hero 
            onOpenOrderModal={(pkgId, appId) => handleSelectServiceToBuy(pkgId, appId)} 
            onViewDemos={() => handleNavigate('demos')}
          />

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
