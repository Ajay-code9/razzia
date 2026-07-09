import { useState, useEffect, useRef } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/Button";
import { Truck, MapPin, Navigation, Clock, CreditCard, ShieldCheck, Store, Map, Wallet, CheckCircle } from "lucide-react";

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

export default function DriverHubPage() {
  const heroReveal = useReveal(0);
  const featureReveal1 = useReveal(0);
  const featureReveal2 = useReveal(150);
  const featureReveal3 = useReveal(300);
  const ctaReveal = useReveal(100);

  return (
    <Layout>
      {/* CSS Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        @keyframes float-medium { 0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); } 50% { transform: translateY(-20px) rotate(-3deg) scale(1.05); } }
        @keyframes scroll-x { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes draw-path { 0% { stroke-dashoffset: 1000; } 100% { stroke-dashoffset: 0; } }
        @keyframes pulse-ring { 0% { transform: scale(0.8); opacity: 0.5; } 100% { transform: scale(2.5); opacity: 0; } }
        @keyframes radar-spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 5s ease-in-out infinite; }
        .animate-scroll { animation: scroll-x 20s linear infinite; }
        .animate-draw { stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: draw-path 3s linear infinite alternate; }
        
        .bg-dots { background-image: radial-gradient(circle at 2px 2px, var(--line-100) 1px, transparent 0); background-size: 24px 24px; }
        
        .map-container { perspective: 1000px; }
        .map-mockup { transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.6s ease; transform-style: preserve-3d; }
        .map-container:hover .map-mockup { transform: rotateY(-10deg) rotateX(5deg) scale(1.02); box-shadow: 20px 30px 60px rgba(0,0,0,0.15), 0 0 40px rgba(16, 185, 129, 0.2); }
        
        .bento-card { transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .bento-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px -15px rgba(0,0,0,0.1); }
      `}} />

      {/* Hero Section */}
      <section className="relative mx-auto w-full max-w-7xl overflow-hidden px-6 pt-24 pb-12 lg:pt-32 lg:pb-20">
        <div className="absolute inset-0 bg-dots opacity-70 -z-10" />
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-green-100 rounded-full blur-[120px] opacity-60 -z-10" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-amber-100 rounded-full blur-[80px] opacity-50 -z-10" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={heroReveal.ref} style={{ opacity: heroReveal.isVisible ? 1 : 0, transform: heroReveal.isVisible ? "none" : "translateY(30px)", transition: "all 0.8s cubic-bezier(0.2, 1, 0.3, 1)" }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-green-700">
              <Truck size={14} />
              Razzia Driver Hub
            </span>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.1] text-smoke-900 md:text-6xl lg:text-7xl">
              Turn your <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-amber-500">free time<svg className="absolute w-full h-3 -bottom-1 left-0 text-green-400 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg></span> into earnings.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-smoke-600 leading-relaxed">
              Join the Razzia delivery fleet. Enjoy flexible hours, instant payouts, and the freedom to work whenever and wherever you want.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/landing/register" className="h-14 px-8 text-base bg-green-600 hover:bg-green-700 shadow-[0_0_20px_rgba(22,163,74,0.3)] hover:shadow-[0_0_30px_rgba(22,163,74,0.5)] hover:-translate-y-1 transition-all border-green-600">Become a Driver</Button>
              <Button href="#features" variant="secondary" className="h-14 px-8 text-base bg-white border border-line-100 hover:bg-surface-50 hover:-translate-y-1 transition-all">How it works</Button>
            </div>
          </div>

          <div className="relative h-[400px] flex justify-center items-center mt-10 lg:mt-0 map-container cursor-pointer">
            {/* Custom Map Mockup */}
            <div className="map-mockup relative w-full max-w-md h-[400px] rounded-[36px] border-[6px] border-white bg-surface-50 shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden z-10 animate-float scale-75 md:scale-90 origin-center">
              
              {/* Real Embedded Map of Dubai, UAE */}
              <div className="absolute inset-0 bg-[#e5e7eb] opacity-80 mix-blend-luminosity">
                <iframe 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight={0} 
                  marginWidth={0} 
                  src="https://www.openstreetmap.org/export/embed.html?bbox=55.25%2C25.18%2C55.32%2C25.24&amp;layer=mapnik" 
                  className="w-full h-full object-cover pointer-events-none"
                  title="Dubai Map"
                />
              </div>
              {/* Animated Route Line (SVG) */}
              <svg className="absolute inset-0 w-full h-full drop-shadow-md z-0" viewBox="0 0 400 400" preserveAspectRatio="none">
                <path d="M100,160 Q150,80 250,120 T280,240" fill="none" stroke="rgba(22,163,74,0.3)" strokeWidth="8" strokeLinecap="round" />
                <path d="M100,160 Q150,80 250,120 T280,240" fill="none" stroke="#16a34a" strokeWidth="8" strokeLinecap="round" className="animate-draw" />
              </svg>

              {/* Map UI Elements */}
              <div className="absolute top-4 inset-x-4 bg-white/90 backdrop-blur rounded-2xl p-4 shadow-sm border border-line-100 flex items-center justify-between z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Navigation size={20} fill="currentColor" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Delivering to Client</p>
                    <p className="text-xs text-smoke-600">1.2 km away • ~4 mins</p>
                  </div>
                </div>
              </div>

              {/* Map Pins with pulsing circles */}
              <div className="absolute top-[40%] left-1/4 -mt-6 -ml-3 text-smoke-900 drop-shadow-lg z-10 group">
                <div className="absolute inset-0 bg-smoke-900 rounded-full animate-[pulse-ring_2s_infinite] -z-10" />
                <Store size={32} fill="white" className="group-hover:scale-125 transition-transform" />
              </div>
              <div className="absolute top-[60%] left-[70%] -mt-6 -ml-3 text-green-600 drop-shadow-lg z-10 group">
                <div className="absolute inset-0 bg-green-600 rounded-full animate-[pulse-ring_2s_infinite] -z-10" style={{ animationDelay: '1s' }} />
                <Truck size={32} fill="currentColor" className="text-white bg-green-600 rounded-full p-1 group-hover:scale-125 transition-transform" />
              </div>

              {/* Bottom Card */}
              <div className="absolute bottom-0 inset-x-0 bg-white rounded-t-[30px] p-6 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-20 group">
                <div className="w-12 h-1 bg-line-100 rounded-full mx-auto mb-4 group-hover:bg-line-200 transition-colors" />
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs text-smoke-600 mb-1">Estimated Earnings</p>
                    <p className="text-3xl font-bold">KES 350</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-smoke-900 flex items-center justify-center text-white shadow-lg hover:bg-black transition-colors cursor-pointer hover:scale-110">
                    <CheckCircle size={24} />
                  </div>
                </div>
              </div>
            </div>

            {/* Extra Floating Icons */}
            <div className="absolute top-10 right-4 w-14 h-14 rounded-2xl bg-white/90 backdrop-blur shadow-lg flex items-center justify-center text-green-500 animate-float-medium z-0 border border-green-100" style={{ animationDelay: '0.5s' }}>
              <Wallet size={28} />
            </div>

            <div className="absolute bottom-24 -left-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur shadow-lg flex items-center justify-center text-amber-500 animate-float-medium z-0 border border-amber-100" style={{ animationDelay: '1.2s' }}>
              <Map size={24} />
            </div>

            {/* Floating Element 1 */}
            <div className="absolute top-1/3 -right-12 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-float z-20 hover:scale-105 transition-transform cursor-pointer border border-line-100">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500">
                <Clock size={24} />
              </div>
              <div>
                <p className="font-bold text-sm">Flexible Hours</p>
                <p className="text-xs text-smoke-600">Online 4h 20m</p>
              </div>
            </div>

            {/* Floating Element 2 */}
            <div className="absolute bottom-16 -left-16 bg-smoke-900 text-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-float z-20 hover:scale-105 transition-transform cursor-pointer" style={{ animationDelay: "1.5s" }}>
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                <CreditCard size={20} />
              </div>
              <div>
                <p className="font-bold text-sm">Instant Pay</p>
                <p className="text-xs text-white/70">KES 4,500 Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Ticker Tape */}
      <div className="w-full bg-[#facc15] py-4 overflow-hidden flex whitespace-nowrap text-smoke-900 font-bold tracking-widest uppercase text-sm">
        <div className="flex shrink-0 gap-12 animate-scroll min-w-full justify-around items-center">
          <span>FLEXIBLE HOURS</span> • <span>WEEKLY PAYOUTS</span> • <span>BE YOUR OWN BOSS</span> • <span>FAST SUPPORT</span> • <span>FLEXIBLE HOURS</span> • <span>WEEKLY PAYOUTS</span> •
        </div>
        <div className="flex shrink-0 gap-12 animate-scroll min-w-full justify-around items-center">
          <span>FLEXIBLE HOURS</span> • <span>WEEKLY PAYOUTS</span> • <span>BE YOUR OWN BOSS</span> • <span>FAST SUPPORT</span> • <span>FLEXIBLE HOURS</span> • <span>WEEKLY PAYOUTS</span> •
        </div>
      </div>

      {/* Features Bento Grid */}
      <section id="features" className="py-24 bg-surface-50 relative overflow-hidden">
        {/* Background decorative path */}
        <svg className="absolute left-0 top-0 w-full h-full opacity-[0.03] pointer-events-none" viewBox="0 0 1000 1000" preserveAspectRatio="none">
           <path d="M0,100 C300,300 700,-100 1000,200 L1000,1000 L0,1000 Z" fill="currentColor" />
        </svg>
        
        <div className="mx-auto w-full max-w-7xl px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-smoke-900 md:text-5xl">Hit the road, <br/>make bank.</h2>
            <p className="mt-4 text-lg text-smoke-600">Our app is built to maximize your time. Smart routing and stacked orders mean more money in your pocket.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div ref={featureReveal1.ref} style={{ opacity: featureReveal1.isVisible ? 1 : 0, transform: featureReveal1.isVisible ? "none" : "translateY(30px)", transition: "all 0.6s ease 0ms" }}
              className="bento-card md:col-span-2 rounded-3xl bg-white border border-line-100 p-8 md:p-12 shadow-sm relative overflow-hidden group">
              <div className="relative z-10 w-full md:w-2/3">
                <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Navigation size={28} />
                </div>
                <h3 className="text-2xl font-bold text-smoke-900">Optimized Routing</h3>
                <p className="mt-4 text-smoke-600">The app automatically calculates the fastest routes, taking traffic and multiple drop-offs into account, so you can complete more deliveries per hour.</p>
              </div>
              <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-tl from-green-50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Decorative dashed path appearing on hover */}
              <svg className="absolute right-[-10%] bottom-[-10%] w-[50%] h-[100%] z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700" viewBox="0 0 200 200">
                <path d="M20,180 Q100,20 180,180" fill="none" stroke="#16a34a" strokeWidth="4" strokeDasharray="10 10" className="animate-[draw-path_5s_linear_infinite]" />
              </svg>
            </div>

            <div ref={featureReveal2.ref} style={{ opacity: featureReveal2.isVisible ? 1 : 0, transform: featureReveal2.isVisible ? "none" : "translateY(30px)", transition: "all 0.6s ease 150ms" }}
              className="bento-card rounded-3xl bg-smoke-900 p-8 shadow-sm text-white relative overflow-hidden group">
              <div className="w-14 h-14 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-500">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-bold">Safety First</h3>
              <p className="mt-4 text-white/70">24/7 in-app support and safety features ensure you're never alone on the road.</p>
              
              {/* Radar spin animation */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 border-4 border-white/5 rounded-full z-0 pointer-events-none group-hover:border-amber-500/10 transition-colors">
                 <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent animate-[radar-spin_3s_linear_infinite]" />
              </div>
            </div>

            <div ref={featureReveal3.ref} style={{ opacity: featureReveal3.isVisible ? 1 : 0, transform: featureReveal3.isVisible ? "none" : "translateY(30px)", transition: "all 0.6s ease 300ms" }}
              className="bento-card md:col-span-3 rounded-3xl bg-green-600 p-8 md:p-12 shadow-sm text-white flex flex-col md:flex-row items-center justify-between gap-10 group">
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold mb-4 group-hover:text-green-200 transition-colors duration-500">Get Paid Instantly</h3>
                <p className="text-white/90 text-lg">Why wait a week? Earnings are deposited directly into your Razzia Wallet after every delivery. Cash out instantly, zero fees.</p>
                <Button href="/landing/razzia-pay" variant="secondary" className="mt-8 hover:scale-105 transition-transform !bg-white !text-green-700 hover:!bg-surface-50 border-transparent shadow-lg">Learn about Payouts</Button>
              </div>
              <div className="md:w-1/2 flex justify-center">
                 <div className="w-full max-w-sm h-48 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 flex flex-col justify-between shadow-2xl group-hover:rotate-1 group-hover:scale-105 transition-transform duration-500 relative overflow-hidden">
                   <div className="flex justify-between items-center relative z-10">
                     <span className="font-bold text-xl flex items-center gap-2"><Wallet size={20}/> Driver Wallet</span>
                   </div>
                   <div className="relative z-10">
                     <p className="text-white/80 text-sm">Today's Earnings</p>
                     <p className="text-4xl font-extrabold">KES 3,450</p>
                   </div>
                   {/* Light beam passing over card */}
                   <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-[shimmer_1.5s_infinite]" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Floating background blobs */}
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-green-500/20 rounded-full blur-[100px] -z-10" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-amber-500/20 rounded-full blur-[100px] -z-10" />

        <div ref={ctaReveal.ref} style={{ opacity: ctaReveal.isVisible ? 1 : 0, transform: ctaReveal.isVisible ? "scale(1)" : "scale(0.95)", transition: "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)" }}
          className="mx-auto w-full max-w-5xl px-6 relative z-10">
          <div className="rounded-[40px] bg-gradient-to-br from-smoke-900 to-[#1a1a1a] p-10 md:p-20 text-center shadow-[0_0_50px_rgba(22,163,74,0.15)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/5 opacity-10 group-hover:opacity-20 transition-opacity duration-700" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)", backgroundSize: "24px 24px" }} />
            
            {/* Animated Glow behind text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/20 rounded-full blur-[80px] animate-[pulse_4s_ease-in-out_infinite]" />
            
            <h2 className="text-3xl font-extrabold text-white md:text-5xl relative z-10 group-hover:-translate-y-2 transition-transform duration-500">
              Start earning today.
            </h2>
            <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto relative z-10">
              Sign up takes less than 5 minutes. Download the app, complete your profile, and you could be making your first delivery today.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 relative z-10">
              <Button href="#" className="h-14 px-8 text-base !bg-green-600 !border-green-600 !text-white hover:!bg-green-500 hover:scale-105 transition-all shadow-[0_0_20px_rgba(22,163,74,0.4)] animate-[pulse_2s_infinite]">Apply Now</Button>
              <Button href="#" className="h-14 px-8 text-base !bg-transparent border border-white/30 !text-white hover:!bg-white/10 hover:scale-105 transition-all">Requirements</Button>
            </div>
          </div>
        </div>
        
        {/* Missing keyframes for shimmer used in CTA */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes shimmer { 100% { left: 200%; } }
        `}} />
      </section>
    </Layout>
  );
}
