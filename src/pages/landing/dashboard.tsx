import { useState, useEffect, useRef } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/Button";
import { Store, TrendingUp, Package, BarChart3, ArrowUpRight, Zap, Users, Wallet, CreditCard } from "lucide-react";

// useReveal hook for scroll animations
function useReveal(delayOffset = 0) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delayOffset);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delayOffset]);
  return { ref, isVisible };
}

export default function MerchantDashboardPage() {
  const heroReveal = useReveal(0);
  const featureReveal1 = useReveal(0);
  const featureReveal2 = useReveal(150);
  const featureReveal3 = useReveal(300);
  const ctaReveal = useReveal(100);

  return (
    <Layout>
      {/* CSS Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-a { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-12px) rotate(1deg); } }
        @keyframes float-b { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(15px) rotate(-2deg); } }
        @keyframes scroll-x-dark { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes grow-bar { 0% { height: 0%; opacity: 0; } 50%, 100% { opacity: 0.8; } }
        @keyframes scan-line { 0% { top: -10%; } 100% { top: 110%; } }
        
        .animate-float-a { animation: float-a 5s ease-in-out infinite; }
        .animate-float-b { animation: float-b 6s ease-in-out infinite; }
        .animate-scroll-dark { animation: scroll-x-dark 25s linear infinite; }
        .animate-grow-bar { animation: grow-bar 3s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite alternate; }
        
        .dash-container { perspective: 1200px; }
        .dash-mockup { transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.6s ease; transform-style: preserve-3d; }
        .dash-container:hover .dash-mockup { transform: rotateY(8deg) rotateX(4deg) scale(1.02); box-shadow: -20px 30px 60px rgba(0,0,0,0.5), 0 0 40px rgba(234,59,12,0.1); }
        
        .bento-card { transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .bento-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px -15px rgba(0,0,0,0.5); }
        
        .scan-container { position: relative; overflow: hidden; }
        .scan-container::after { content: ''; position: absolute; left: 0; width: 100%; height: 2px; background: rgba(34, 197, 94, 0.8); box-shadow: 0 0 10px 2px rgba(34, 197, 94, 0.5); animation: scan-line 3s linear infinite; }
      `}} />

      {/* Dark Theme Wrapper */}
      <div className="bg-[#0d0d0d] min-h-screen text-white">
        
        {/* Hero Section */}
        <section className="relative mx-auto w-full max-w-7xl overflow-hidden px-6 pt-24 pb-12 lg:pt-32 lg:pb-20">
          {/* Subtle grid background */}
          <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
          
          {/* Glow Effects */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-razzia-600 rounded-full blur-[120px] opacity-20 -z-10" />

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div ref={heroReveal.ref} style={{ opacity: heroReveal.isVisible ? 1 : 0, transform: heroReveal.isVisible ? "none" : "translateY(30px)", transition: "all 0.8s cubic-bezier(0.2, 1, 0.3, 1)" }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-razzia-400">
                <Store size={14} />
                Razzia Merchant Dashboard
              </span>
              <h1 className="mt-6 text-5xl font-extrabold leading-[1.1] md:text-6xl lg:text-7xl">
                Run your street business like a <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-razzia-400 to-amber-300">tech giant.<svg className="absolute w-full h-3 -bottom-1 left-0 text-razzia-500 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg></span>
              </h1>
              <p className="mt-6 max-w-lg text-lg text-white/60 leading-relaxed">
                Take control of your inventory, track real-time sales, and manage deliveries from a single, powerful command center built for local vendors.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/landing/register" className="h-14 px-8 text-base shadow-[0_0_20px_rgba(234,59,12,0.3)] hover:shadow-[0_0_40px_rgba(234,59,12,0.6)] hover:-translate-y-1 transition-all">Become a Vendor</Button>
                <Button href="#features" variant="secondary" className="h-14 px-8 text-base !bg-transparent border border-white/20 !text-white hover:!bg-white/10 hover:-translate-y-1 transition-all">View Features</Button>
              </div>
            </div>

            <div className="relative h-[350px] lg:h-[450px] w-full flex justify-center items-center mt-10 lg:mt-0 dash-container cursor-pointer">
              {/* Dashboard Mockup (Tablet/Desktop style) */}
              <div className="dash-mockup relative w-full max-w-lg rounded-2xl border border-white/10 bg-[#141414] shadow-2xl p-4 z-10 scale-75 md:scale-90 origin-center">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 hover:scale-125 transition-transform" />
                    <div className="w-3 h-3 rounded-full bg-amber-500 hover:scale-125 transition-transform" />
                    <div className="w-3 h-3 rounded-full bg-green-500 hover:scale-125 transition-transform" />
                  </div>
                  <div className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Live System
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <p className="text-xs text-white/50">Today's Revenue</p>
                    <p className="text-2xl font-bold text-white mt-1">KES 84,320</p>
                    <p className="text-xs text-green-400 mt-2 flex items-center gap-1"><ArrowUpRight size={12}/> +14.5%</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <p className="text-xs text-white/50">Active Orders</p>
                    <p className="text-2xl font-bold text-white mt-1">12</p>
                    <p className="text-xs text-amber-400 mt-2 flex items-center gap-1"><Zap size={12}/> 3 preparing</p>
                  </div>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/5 group">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-xs text-white/50">Sales Overview</p>
                    <BarChart3 size={14} className="text-white/30 group-hover:text-razzia-400 transition-colors" />
                  </div>
                  <div className="h-24 flex items-end justify-between gap-2">
                    {[40, 70, 45, 90, 60, 110, 85].map((h, i) => (
                      <div key={i} className="w-full bg-gradient-to-t from-razzia-600 to-amber-500 rounded-t-sm opacity-80 animate-grow-bar" style={{ height: `${h}%`, animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Extra Floating Icons */}
              <div className="absolute top-10 left-4 w-12 h-12 rounded-full bg-[#1a1a1a] border border-white/10 shadow-lg flex items-center justify-center text-razzia-500 animate-float-a z-0" style={{ animationDelay: '0.5s' }}>
                <Wallet size={20} />
              </div>

              <div className="absolute bottom-10 right-4 w-14 h-14 rounded-full bg-[#1a1a1a] border border-white/10 shadow-lg flex items-center justify-center text-blue-400 animate-float-b z-0" style={{ animationDelay: '2.5s' }}>
                <Users size={24} />
              </div>

              {/* Floating Element 1 */}
              <div className="absolute -left-6 bottom-32 bg-[#1a1a1a] border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-float-b z-20 hover:scale-105 transition-transform cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-razzia-500/20 flex items-center justify-center text-razzia-400">
                  <Package size={24} />
                </div>
                <div>
                  <p className="font-bold text-sm">Low Stock Alert</p>
                  <p className="text-xs text-white/60">Tomatoes (2kg left)</p>
                </div>
              </div>

              {/* Floating Element 2 */}
              <div className="absolute -right-4 top-24 bg-[#1a1a1a] border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-float-a z-20 hover:scale-105 transition-transform cursor-pointer" style={{ animationDelay: "1s" }}>
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm">New Order</p>
                  <p className="text-xs text-white/60">#RZ-1941 • KES 2,430</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Infinite Dark Ticker Tape */}
        <div className="w-full bg-[#0a0a0a] border-y border-white/5 py-4 overflow-hidden flex whitespace-nowrap text-white/40 font-mono text-sm tracking-wider">
          <div className="flex shrink-0 gap-12 animate-scroll-dark min-w-full justify-around items-center">
            <span>LIVE SALES <span className="text-green-400">↑ 24%</span></span> • 
            <span>ACTIVE VENDORS <span className="text-white">15,402</span></span> • 
            <span>AVG DELIVERY <span className="text-amber-400">12 MIN</span></span> • 
            <span>CUSTOMER SATISFACTION <span className="text-white">4.9/5</span></span> • 
            <span>LIVE SALES <span className="text-green-400">↑ 24%</span></span> • 
            <span>ACTIVE VENDORS <span className="text-white">15,402</span></span> •
          </div>
          <div className="flex shrink-0 gap-12 animate-scroll-dark min-w-full justify-around items-center">
            <span>LIVE SALES <span className="text-green-400">↑ 24%</span></span> • 
            <span>ACTIVE VENDORS <span className="text-white">15,402</span></span> • 
            <span>AVG DELIVERY <span className="text-amber-400">12 MIN</span></span> • 
            <span>CUSTOMER SATISFACTION <span className="text-white">4.9/5</span></span> • 
            <span>LIVE SALES <span className="text-green-400">↑ 24%</span></span> • 
            <span>ACTIVE VENDORS <span className="text-white">15,402</span></span> •
          </div>
        </div>

        {/* Features Bento Grid */}
        <section id="features" className="py-24 bg-[#0a0a0a] relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
          <div className="mx-auto w-full max-w-7xl px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold md:text-5xl">Built for the hustle.</h2>
              <p className="mt-4 text-lg text-white/60">Powerful tools hidden behind a simple, intuitive interface so you can focus on what you do best: selling.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div ref={featureReveal1.ref} style={{ opacity: featureReveal1.isVisible ? 1 : 0, transform: featureReveal1.isVisible ? "none" : "translateY(30px)", transition: "all 0.6s ease 0ms" }}
                className="bento-card md:col-span-2 rounded-3xl bg-[#141414] border border-white/10 p-8 md:p-12 shadow-sm relative overflow-hidden group">
                <div className="relative z-10 w-full md:w-2/3">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 text-razzia-400 flex items-center justify-center mb-6 group-hover:bg-razzia-500 group-hover:text-white transition-colors duration-500">
                    <BarChart3 size={28} />
                  </div>
                  <h3 className="text-2xl font-bold">Real-Time Analytics</h3>
                  <p className="mt-4 text-white/60 text-lg group-hover:text-white/80 transition-colors">Stop guessing. Track your daily revenue, identify your best-selling items, and understand your customers with beautiful, easy-to-read charts.</p>
                </div>
                <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-tl from-razzia-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute -right-20 -bottom-20 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                  <BarChart3 size={300} />
                </div>
              </div>

              <div ref={featureReveal2.ref} style={{ opacity: featureReveal2.isVisible ? 1 : 0, transform: featureReveal2.isVisible ? "none" : "translateY(30px)", transition: "all 0.6s ease 150ms" }}
                className="bento-card rounded-3xl bg-razzia-600 p-8 shadow-[0_0_30px_rgba(234,59,12,0.1)] hover:shadow-[0_0_50px_rgba(234,59,12,0.3)] text-white relative overflow-hidden group">
                <div className="w-14 h-14 rounded-2xl bg-black/20 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap size={28} />
                </div>
                <h3 className="text-2xl font-bold">Instant Payouts</h3>
                <p className="mt-4 text-white/90">Money flows instantly to your Razzia Wallet. Withdraw to your bank or mobile money anytime, anywhere.</p>
                
                {/* Floating Coins Effect inside card */}
                <CreditCard className="absolute top-10 -right-4 text-white/20 animate-float-a" size={60} />
                <Wallet className="absolute bottom-10 -left-6 text-white/20 animate-float-b" size={80} style={{ animationDelay: '1s' }} />
              </div>

              <div ref={featureReveal3.ref} style={{ opacity: featureReveal3.isVisible ? 1 : 0, transform: featureReveal3.isVisible ? "none" : "translateY(30px)", transition: "all 0.6s ease 300ms" }}
                className="bento-card md:col-span-3 rounded-3xl bg-[#141414] border border-white/10 p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-10 group">
                <div className="md:w-1/2">
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-green-400 transition-colors duration-500">Effortless Inventory</h3>
                  <p className="text-white/60 text-lg group-hover:text-white/80 transition-colors">Add products with a single snap from your phone camera. Our system auto-categorizes and tracks stock levels, alerting you before you run out.</p>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="scan-container grid grid-cols-2 gap-4 w-full max-w-sm bg-[#0d0d0d] p-6 rounded-2xl border border-white/10 group-hover:border-green-500/30 transition-colors duration-500">
                    {["Groceries", "Fresh Veg", "Dairy", "Snacks"].map((item, i) => (
                      <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between hover:bg-white/10 transition-colors">
                        <span className="font-semibold text-sm">{item}</span>
                        <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#0d0d0d] overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-razzia-600/20 rounded-full blur-[150px] pointer-events-none" />
          
          <div ref={ctaReveal.ref} style={{ opacity: ctaReveal.isVisible ? 1 : 0, transform: ctaReveal.isVisible ? "scale(1)" : "scale(0.95)", transition: "all 0.8s ease" }}
            className="mx-auto w-full max-w-5xl px-6 relative z-10">
            <div className="rounded-[40px] bg-razzia-600 p-10 md:p-20 text-center shadow-[0_0_60px_rgba(234,59,12,0.2)] hover:shadow-[0_0_100px_rgba(234,59,12,0.4)] transition-shadow duration-700 relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/5 opacity-20 group-hover:scale-110 transition-transform duration-1000" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)", backgroundSize: "24px 24px" }} />
              <h2 className="text-3xl font-extrabold text-white md:text-5xl relative z-10 group-hover:-translate-y-2 transition-transform duration-500">
                Grow your business today.
              </h2>
              <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto relative z-10">
                Join thousands of merchants using Razzia to digitize their storefronts, reach more customers, and manage deliveries effortlessly.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4 relative z-10">
                <Button href="/landing/register" className="h-14 px-8 text-base bg-smoke-900 text-white hover:bg-black border-smoke-900 shadow-2xl hover:scale-105 transition-transform">Create Merchant Account</Button>
                <Button href="/landing/contact" className="h-14 px-8 text-base bg-transparent border border-white/30 text-white hover:bg-white/10 hover:scale-105 transition-transform">Talk to Sales</Button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
