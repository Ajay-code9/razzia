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
        .dash-container:hover .dash-mockup { transform: rotateY(8deg) rotateX(4deg) scale(1.02); box-shadow: -20px 30px 60px rgba(0,0,0,0.5), 0 0 40px rgba(255,51,102,0.15); }
        
        .bento-card { transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .bento-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px -15px rgba(0,0,0,0.5); }
        
        .scan-container { position: relative; overflow: hidden; }
        .scan-container::after { content: ''; position: absolute; left: 0; width: 100%; height: 2px; background: rgba(34, 197, 94, 0.8); box-shadow: 0 0 10px 2px rgba(34, 197, 94, 0.5); animation: scan-line 3s linear infinite; }
      `}} />

      {/* Dark Theme Wrapper */}
      <div className="bg-slate-50 min-h-screen text-smoke-900">
        
        {/* Hero Section */}
        <section className="relative mx-auto w-full max-w-7xl overflow-hidden px-6 pt-20 pb-12 lg:pt-24 lg:pb-20">
          {/* Subtle grid background */}
          <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
          
          {/* Glow Effects */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-razzia-100 rounded-full blur-[100px] opacity-60 -z-10" />

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div ref={heroReveal.ref} style={{ opacity: heroReveal.isVisible ? 1 : 0, transform: heroReveal.isVisible ? "none" : "translateY(30px)", transition: "all 0.8s cubic-bezier(0.2, 1, 0.3, 1)" }}>

              <h1 className="mt-6 text-5xl font-extrabold leading-[1.1] md:text-6xl lg:text-7xl">
                Broadcast your products like a <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-razzia-500 to-amber-500">top creator.<svg className="absolute w-full h-3 -bottom-1 left-0 text-razzia-500 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg></span>
              </h1>
              <p className="mt-6 max-w-lg text-lg text-smoke-600 leading-relaxed">
                Go live, engage your audience in real-time, and watch the sales roll in instantly from a single, powerful streaming dashboard built for modern vendors.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/landing/register" className="h-14 px-8 text-base shadow-[0_0_20px_rgba(255,51,102,0.15)] hover:shadow-[0_0_40px_rgba(255,51,102,0.25)] hover:-translate-y-1 transition-all">Become a Vendor</Button>
                <Button href="#features" variant="secondary" className="h-14 px-8 text-base bg-white border border-line-200 text-smoke-700 hover:bg-surface-50 hover:-translate-y-1 transition-all shadow-sm">View Features</Button>
              </div>
            </div>

            <div className="relative h-[350px] lg:h-[450px] w-full flex justify-center items-center mt-10 lg:mt-0 dash-container cursor-pointer">
              {/* Dashboard Mockup (Tablet/Desktop style) */}
              <div className="dash-mockup relative w-full max-w-lg rounded-2xl border border-line-200 bg-white shadow-xl p-4 z-10 scale-75 md:scale-90 origin-center">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400 hover:scale-125 transition-transform" />
                    <div className="w-3 h-3 rounded-full bg-amber-400 hover:scale-125 transition-transform" />
                    <div className="w-3 h-3 rounded-full bg-green-400 hover:scale-125 transition-transform" />
                  </div>
                  <div className="px-3 py-1 bg-green-500/10 text-green-600 rounded-full text-xs font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Live System
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-surface-50 p-4 rounded-xl border border-line-100 hover:bg-surface-100 transition-colors">
                    <p className="text-xs text-smoke-500">Today's Revenue</p>
                    <p className="text-2xl font-bold text-smoke-900 mt-1">KES 84,320</p>
                    <p className="text-xs text-green-500 mt-2 flex items-center gap-1"><ArrowUpRight size={12}/> +14.5%</p>
                  </div>
                  <div className="bg-surface-50 p-4 rounded-xl border border-line-100 hover:bg-surface-100 transition-colors">
                    <p className="text-xs text-smoke-500">Active Orders</p>
                    <p className="text-2xl font-bold text-smoke-900 mt-1">12</p>
                    <p className="text-xs text-amber-500 mt-2 flex items-center gap-1"><Zap size={12}/> 3 preparing</p>
                  </div>
                </div>

                <div className="bg-surface-50 p-4 rounded-xl border border-line-100 group">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-xs text-smoke-500">Sales Overview</p>
                    <BarChart3 size={14} className="text-smoke-400 group-hover:text-razzia-500 transition-colors" />
                  </div>
                  <div className="h-24 flex items-end justify-between gap-2">
                    {[40, 70, 45, 90, 60, 110, 85].map((h, i) => (
                      <div key={i} className="w-full bg-gradient-to-t from-razzia-500 to-amber-400 rounded-t-sm opacity-90 animate-grow-bar" style={{ height: `${h}%`, animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                </div>
              </div>


            </div>
          </div>
        </section>

        {/* Infinite Dark Ticker Tape */}
        <div className="w-full bg-white border-y border-line-100 py-4 overflow-hidden flex whitespace-nowrap text-smoke-500 font-mono text-sm tracking-wider">
          <div className="flex shrink-0 gap-12 animate-scroll-dark min-w-full justify-around items-center">
            <span>LIVE VIEWERS <span className="text-green-500">↑ 24%</span></span> • 
            <span>ACTIVE STREAMS <span className="text-smoke-900">1,402</span></span> • 
            <span>INSTANT CHECKOUTS <span className="text-amber-500">8.5K</span></span> • 
            <span>ENGAGEMENT RATE <span className="text-smoke-900">92%</span></span> • 
            <span>LIVE VIEWERS <span className="text-green-500">↑ 24%</span></span> • 
            <span>ACTIVE STREAMS <span className="text-smoke-900">1,402</span></span> •
          </div>
          <div className="flex shrink-0 gap-12 animate-scroll-dark min-w-full justify-around items-center">
            <span>LIVE VIEWERS <span className="text-green-500">↑ 24%</span></span> • 
            <span>ACTIVE STREAMS <span className="text-smoke-900">1,402</span></span> • 
            <span>INSTANT CHECKOUTS <span className="text-amber-500">8.5K</span></span> • 
            <span>ENGAGEMENT RATE <span className="text-smoke-900">92%</span></span> • 
            <span>LIVE VIEWERS <span className="text-green-500">↑ 24%</span></span> • 
            <span>ACTIVE STREAMS <span className="text-smoke-900">1,402</span></span> •
          </div>
        </div>

        {/* Features Bento Grid */}
        <section id="features" className="py-16 lg:py-20 bg-white relative">
          <div className="mx-auto w-full max-w-7xl px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold md:text-5xl text-smoke-900">Built for live engagement.</h2>
              <p className="mt-4 text-lg text-smoke-600">Powerful streaming and analytics tools hidden behind a simple, intuitive interface so you can focus on entertaining and selling.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div ref={featureReveal1.ref} style={{ opacity: featureReveal1.isVisible ? 1 : 0, transform: featureReveal1.isVisible ? "none" : "translateY(30px)", transition: "all 0.6s ease 0ms" }}
                className="bento-card md:col-span-2 rounded-3xl bg-surface-50 border border-line-100 p-8 md:p-12 shadow-sm relative overflow-hidden group">
                <div className="relative z-10 w-full md:w-2/3">
                  <div className="w-14 h-14 rounded-2xl bg-white text-razzia-500 flex items-center justify-center mb-6 shadow-sm group-hover:bg-razzia-500 group-hover:text-white transition-colors duration-500">
                    <BarChart3 size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-smoke-900">Real-Time Analytics</h3>
                  <p className="mt-4 text-smoke-600 text-lg group-hover:text-smoke-900 transition-colors">Stop guessing. Track your live viewers, engagement metrics, and instant stream revenue with beautiful, easy-to-read charts while you broadcast.</p>
                </div>
                <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-[#FDF3F2] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute -right-20 -bottom-20 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none text-razzia-500">
                  <BarChart3 size={300} />
                </div>
              </div>

              <div ref={featureReveal2.ref} style={{ opacity: featureReveal2.isVisible ? 1 : 0, transform: featureReveal2.isVisible ? "none" : "translateY(30px)", transition: "all 0.6s ease 150ms" }}
                className="bento-card rounded-3xl bg-razzia-500 p-8 shadow-[0_0_30px_rgba(255,51,102,0.15)] hover:shadow-[0_0_50px_rgba(255,51,102,0.3)] text-white relative overflow-hidden group">
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
                className="bento-card md:col-span-3 rounded-3xl bg-surface-50 border border-line-100 p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-10 group">
                <div className="md:w-1/2">
                  <h3 className="text-3xl font-bold mb-4 text-smoke-900 group-hover:text-green-600 transition-colors duration-500">In-Stream Product Drops</h3>
                  <p className="text-smoke-600 text-lg group-hover:text-smoke-900 transition-colors">Pin products directly to the bottom of your live feed. Your viewers can tap, buy, and get back to watching the stream without any friction.</p>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="scan-container grid grid-cols-2 gap-4 w-full max-w-sm bg-white p-6 rounded-2xl border border-line-200 group-hover:border-green-500/30 transition-colors duration-500 shadow-sm">
                    {["Sneakers", "Jackets", "Headphones", "Watches"].map((item, i) => (
                      <div key={i} className="bg-surface-50 border border-line-100 p-4 rounded-xl flex items-center justify-between hover:bg-surface-100 transition-colors">
                        <span className="font-semibold text-sm text-smoke-800">{item}</span>
                        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-slate-50 overflow-hidden relative border-t border-line-100">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-razzia-100 rounded-full blur-[100px] pointer-events-none opacity-50" />
          
          <div ref={ctaReveal.ref} style={{ opacity: ctaReveal.isVisible ? 1 : 0, transform: ctaReveal.isVisible ? "scale(1)" : "scale(0.95)", transition: "all 0.8s ease" }}
            className="mx-auto w-full max-w-5xl px-6 relative z-10">
            <div className="rounded-[40px] bg-razzia-500 p-10 md:p-20 text-center shadow-[0_20px_60px_rgba(255,51,102,0.15)] hover:shadow-[0_20px_80px_rgba(255,51,102,0.25)] transition-shadow duration-700 relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/5 opacity-20 group-hover:scale-110 transition-transform duration-1000" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)", backgroundSize: "24px 24px" }} />
              <h2 className="text-3xl font-extrabold text-white md:text-5xl relative z-10 group-hover:-translate-y-2 transition-transform duration-500">
                Start streaming today.
              </h2>
              <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto relative z-10">
                Join thousands of creators and merchants using Razzia to build their audience, launch live drops, and drive instant sales.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4 relative z-10">
                <Button href="/landing/register" className="h-14 px-8 text-base bg-white text-razzia-500 hover:bg-slate-50 border-white shadow-2xl hover:scale-105 transition-transform">Create Merchant Account</Button>
                <Button href="/landing/contact" className="h-14 px-8 text-base bg-transparent border border-white/30 text-white hover:bg-white/10 hover:scale-105 transition-transform">Talk to Sales</Button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
