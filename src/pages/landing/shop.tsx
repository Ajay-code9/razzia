import { useState, useEffect, useRef } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/Button";
import { ShoppingBag, Star, Zap, ShieldCheck, MapPin, Search, ShoppingCart, Coffee, Utensils } from "lucide-react";

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

export default function CustomerAppPage() {
  const heroReveal = useReveal(0);
  const featureReveal1 = useReveal(0);
  const featureReveal2 = useReveal(150);
  const featureReveal3 = useReveal(300);
  const ctaReveal = useReveal(100);

  return (
    <Layout>
      {/* CSS Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-slow { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-15px) rotate(2deg); } }
        @keyframes float-fast { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(-2deg); } }
        @keyframes float-medium { 0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); } 50% { transform: translateY(-25px) rotate(5deg) scale(1.05); } }
        @keyframes scroll-x { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes progress-fill { 0% { width: 0%; } 100% { width: 100%; } }
        
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 5s ease-in-out infinite; }
        .animate-scroll { animation: scroll-x 20s linear infinite; }
        .animate-progress { animation: progress-fill 4s ease-in-out infinite alternate; }

        .bg-grid-pattern { background-image: radial-gradient(circle at 2px 2px, var(--line-100) 1px, transparent 0); background-size: 32px 32px; }
        
        .phone-container { perspective: 1000px; }
        .phone-mockup { transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1); transform-style: preserve-3d; }
        .phone-container:hover .phone-mockup { transform: rotateY(-10deg) rotateX(5deg) scale(1.02); }
        .bento-card { transition: all 0.3s ease; }
        .bento-card:hover { transform: translateY(-5px); box-shadow: 0 20px 40px -15px rgba(0,0,0,0.1); }
      `}} />

      {/* Hero Section */}
      <section className="relative mx-auto w-full max-w-7xl overflow-hidden px-6 pt-24 pb-12 lg:pt-32 lg:pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-60 -z-10" />
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-razzia-100 rounded-full blur-[100px] opacity-60 -z-10" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-amber-100 rounded-full blur-[80px] opacity-50 -z-10" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={heroReveal.ref} style={{ opacity: heroReveal.isVisible ? 1 : 0, transform: heroReveal.isVisible ? "none" : "translateY(30px)", transition: "all 0.8s cubic-bezier(0.2, 1, 0.3, 1)" }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-razzia-200 bg-razzia-50 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-razzia-600">
              <ShoppingBag size={14} />
              Razzia Customer App
            </span>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.1] text-smoke-900 md:text-6xl lg:text-7xl">
              Your entire <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-razzia-600 to-amber-500">neighborhood<svg className="absolute w-full h-3 -bottom-1 left-0 text-amber-400 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg></span>, delivered.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-smoke-600 leading-relaxed">
              Discover local hidden gems, shop your favorite markets, and get everything delivered to your door in minutes. The city is now in your pocket.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/landing/register" className="h-14 px-8 text-base shadow-[0_0_20px_rgba(234,59,12,0.2)] hover:shadow-[0_0_30px_rgba(234,59,12,0.4)] transition-shadow">Get the App</Button>
              <Button href="#features" variant="secondary" className="h-14 px-8 text-base bg-white border border-line-100 hover:bg-surface-50">Explore Features</Button>
            </div>
          </div>

          <div className="relative h-[400px] flex justify-center items-center mt-10 lg:mt-0 phone-container cursor-pointer">
            {/* Custom Phone Mockup */}
            <div className="phone-mockup relative w-[260px] h-[520px] rounded-[36px] border-[6px] border-smoke-900 bg-white shadow-2xl overflow-hidden z-10 animate-float-slow scale-75 md:scale-90 origin-top">
              <div className="absolute top-0 inset-x-0 h-6 bg-smoke-900 rounded-b-3xl w-1/2 mx-auto z-20" />
              
              {/* App UI Mockup */}
              <div className="p-4 pt-12 h-full bg-surface-50 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-smoke-600">Delivering to</p>
                    <p className="font-bold text-sm">Westlands, Nairobi ▼</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-razzia-100 flex justify-center items-center text-razzia-600"><Search size={18} /></div>
                </div>

                {/* Animated Order Tracker */}
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-line-100">
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-bold text-sm">Arriving in 15 mins</p>
                    <span className="flex h-2 w-2 rounded-full bg-green-500">
                      <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
                    </span>
                  </div>
                  <div className="w-full bg-line-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full animate-progress" />
                  </div>
                </div>

                <div className="h-32 rounded-2xl bg-gradient-to-br from-razzia-400 to-amber-400 p-4 text-white flex flex-col justify-end relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-700" />
                  <h3 className="font-bold text-lg relative z-10">50% Off Fresh Produce</h3>
                  <p className="text-xs relative z-10">Valid until Sunday</p>
                </div>

                <p className="font-bold text-sm mt-2">Featured Stores</p>
                <div className="flex gap-3 overflow-hidden">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="min-w-[120px] bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 rounded-full bg-razzia-50 mb-2" />
                      <div className="h-3 w-16 bg-line-100 rounded mb-1" />
                      <div className="h-2 w-10 bg-line-100 rounded" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Extra Floating Icons */}
            <div className="absolute top-10 left-10 w-14 h-14 rounded-2xl bg-white/80 backdrop-blur shadow-lg flex items-center justify-center text-razzia-500 animate-float-medium z-0" style={{ animationDelay: '0.2s' }}>
              <ShoppingCart size={28} />
            </div>
            
            <div className="absolute bottom-20 right-12 w-16 h-16 rounded-full bg-white/80 backdrop-blur shadow-lg flex items-center justify-center text-amber-500 animate-float-medium z-0" style={{ animationDelay: '1.5s' }}>
              <Coffee size={32} />
            </div>

            <div className="absolute top-1/2 -left-4 w-12 h-12 rounded-xl bg-white/80 backdrop-blur shadow-lg flex items-center justify-center text-blue-500 animate-float-medium z-0" style={{ animationDelay: '2.5s' }}>
              <Utensils size={24} />
            </div>

            {/* Floating Badges */}
            <div className="absolute top-20 -right-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-float-fast z-20">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="font-bold text-sm">Secure Payment</p>
                <p className="text-xs text-smoke-600">Powered by Razzia Pay</p>
              </div>
            </div>

            <div className="absolute bottom-32 -left-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-float-slow z-20" style={{ animationDelay: "1s" }}>
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                <Star size={24} fill="currentColor" />
              </div>
              <div>
                <p className="font-bold text-sm">Top Rated</p>
                <p className="text-xs text-smoke-600">Kibo Groceries - 4.9</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Ticker Tape */}
      <div className="w-full bg-razzia-600 py-4 overflow-hidden flex whitespace-nowrap text-white font-bold tracking-widest uppercase text-sm">
        <div className="flex shrink-0 gap-8 animate-scroll min-w-full justify-around items-center">
          <span>Fresh Groceries</span> • <span>Hot Meals</span> • <span>Pharmacy</span> • <span>Fashion</span> • <span>Electronics</span> • 
          <span>Fresh Groceries</span> • <span>Hot Meals</span> • <span>Pharmacy</span> • <span>Fashion</span> • <span>Electronics</span> •
        </div>
        <div className="flex shrink-0 gap-8 animate-scroll min-w-full justify-around items-center">
          <span>Fresh Groceries</span> • <span>Hot Meals</span> • <span>Pharmacy</span> • <span>Fashion</span> • <span>Electronics</span> • 
          <span>Fresh Groceries</span> • <span>Hot Meals</span> • <span>Pharmacy</span> • <span>Fashion</span> • <span>Electronics</span> •
        </div>
      </div>

      {/* Features Bento Grid */}
      <section id="features" className="py-24 bg-surface-50">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-smoke-900 md:text-5xl">Everything you need, <br/>delivered fast.</h2>
            <p className="mt-4 text-lg text-smoke-600">From daily essentials to midnight cravings, the Razzia app connects you with the best local businesses.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div ref={featureReveal1.ref} style={{ opacity: featureReveal1.isVisible ? 1 : 0, transform: featureReveal1.isVisible ? "none" : "translateY(30px)", transition: "all 0.6s ease 0ms" }}
              className="bento-card md:col-span-2 rounded-3xl bg-white border border-line-100 p-8 md:p-12 shadow-sm relative overflow-hidden group">
              <div className="relative z-10 w-full md:w-1/2">
                <div className="w-14 h-14 rounded-2xl bg-razzia-50 text-razzia-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MapPin size={28} />
                </div>
                <h3 className="text-2xl font-bold text-smoke-900">Hyper-Local Discovery</h3>
                <p className="mt-4 text-smoke-600">Find stores right around your corner. We prioritize local vendors so you get fresher items, faster, while supporting your community.</p>
              </div>
              <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-tl from-razzia-50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
              {/* Decorative Map graphic */}
              <div className="absolute right-[-10%] bottom-[-20%] w-[60%] h-[120%] bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] opacity-10 group-hover:rotate-3 transition-transform duration-1000" />
            </div>

            <div ref={featureReveal2.ref} style={{ opacity: featureReveal2.isVisible ? 1 : 0, transform: featureReveal2.isVisible ? "none" : "translateY(30px)", transition: "all 0.6s ease 150ms" }}
              className="bento-card rounded-3xl bg-smoke-900 p-8 shadow-sm text-white relative overflow-hidden group cursor-default">
              <div className="w-14 h-14 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-6 group-hover:bg-razzia-500 group-hover:text-white transition-colors duration-500">
                <Zap size={28} />
              </div>
              <h3 className="text-2xl font-bold">Lightning Fast</h3>
              <p className="mt-4 text-white/70">Optimized routing means our drivers get your order to you while it's still hot (or cold).</p>
              
              {/* Lightning background element */}
              <Zap size={200} className="absolute -bottom-10 -right-10 text-white opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700" />
            </div>

            <div ref={featureReveal3.ref} style={{ opacity: featureReveal3.isVisible ? 1 : 0, transform: featureReveal3.isVisible ? "none" : "translateY(30px)", transition: "all 0.6s ease 300ms" }}
              className="bento-card md:col-span-3 rounded-3xl bg-razzia-600 p-8 md:p-12 shadow-sm text-white flex flex-col md:flex-row items-center justify-between gap-10 group">
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold mb-4 group-hover:text-amber-300 transition-colors duration-500">Seamless Checkout with Razzia Pay</h3>
                <p className="text-white/80 text-lg">No more fumbling with cards or cash. Use your built-in Razzia Wallet for instant, zero-fee transactions across the entire marketplace.</p>
                <Button href="/landing/razzia-pay" variant="secondary" className="mt-8 hover:scale-105 transition-transform">Learn about Razzia Pay</Button>
              </div>
              <div className="md:w-1/2 flex justify-center">
                 <div className="w-full max-w-sm h-48 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 flex flex-col justify-between shadow-2xl group-hover:translate-y-[-10px] transition-transform duration-500">
                   <div className="flex justify-between items-center">
                     <span className="font-bold text-xl">Razzia Wallet</span>
                     <ShieldCheck size={24} />
                   </div>
                   <div>
                     <p className="text-white/60 text-sm">Available Balance</p>
                     <p className="text-4xl font-extrabold tracking-tight">KES 14,250</p>
                   </div>
                   
                   {/* Shimmer effect inside the card */}
                   <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-[shimmer_1.5s_infinite]" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 overflow-hidden relative">
        {/* Floating background blobs for CTA */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-razzia-500/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[120px] -z-10" />

        <div ref={ctaReveal.ref} style={{ opacity: ctaReveal.isVisible ? 1 : 0, transform: ctaReveal.isVisible ? "scale(1)" : "scale(0.95)", transition: "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)" }}
          className="mx-auto w-full max-w-5xl px-6">
          <div className="rounded-[40px] bg-gradient-to-br from-smoke-900 to-[#1a1a1a] p-10 md:p-20 text-center shadow-[0_0_50px_rgba(234,59,12,0.15)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/5 opacity-10 group-hover:opacity-20 transition-opacity duration-1000" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)", backgroundSize: "24px 24px" }} />
            
            {/* Animated Glow behind text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-razzia-500/20 rounded-full blur-[80px] animate-[pulse_4s_ease-in-out_infinite]" />
            
            <h2 className="text-3xl font-extrabold text-white md:text-5xl relative z-10 group-hover:scale-105 transition-transform duration-700">
              Ready to shop local?
            </h2>
            <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto relative z-10">
              Download the Razzia App today and get 20% off your first three orders. Join thousands of users supporting street commerce.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 relative z-10">
              <Button href="#" className="h-14 px-8 text-base bg-white !text-smoke-900 hover:scale-105 transition-all border-white shadow-[0_0_20px_rgba(255,255,255,0.4)] animate-[pulse_2s_infinite]">Download for iOS</Button>
              <Button href="#" className="h-14 px-8 text-base !bg-transparent border border-white/30 !text-white hover:!bg-white/10 hover:scale-105 transition-all">Download for Android</Button>
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
