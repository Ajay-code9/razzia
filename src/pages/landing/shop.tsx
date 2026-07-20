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
    const featureReveal1 = useReveal(0);
  const featureReveal2 = useReveal(150);
    
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative mx-auto w-full max-w-7xl overflow-hidden px-6 pt-28 pb-12 lg:pt-36 lg:pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-60 -z-10" />
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-razzia-100 rounded-full blur-[100px] opacity-60 -z-10" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-amber-100 rounded-full blur-[80px] opacity-50 -z-10" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div  >

            <h1 className="mt-6 text-5xl font-extrabold leading-[1.1] text-smoke-900 md:text-6xl lg:text-7xl">
              Your favorite <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-razzia-600 to-amber-500">creators<svg className="absolute w-full h-3 -bottom-1 left-0 text-amber-400 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg></span>, live and direct.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-smoke-600 leading-relaxed">
              Join live streams, interact with local creators, and shop exclusive product drops instantly. Entertainment meets shopping in your pocket.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/landing/register" className="h-14 px-8 text-base shadow-[0_0_20px_rgba(255,51,102,0.2)] hover:shadow-[0_0_30px_rgba(255,51,102,0.4)] transition-shadow">Get the App</Button>
              <Button href="#features" variant="secondary" className="h-14 px-8 text-base bg-white border border-line-100 hover:bg-razzia-50">Explore Features</Button>
            </div>
          </div>

          <div className="relative h-[400px] flex justify-center items-center mt-16 lg:mt-8 phone-container cursor-pointer">
            {/* Custom Phone Mockup */}
            <div className="phone-mockup relative w-[260px] h-[520px] rounded-[36px] border-[6px] border-smoke-900 bg-white shadow-2xl overflow-hidden z-10 animate-float-slow scale-75 md:scale-90 origin-top">
              <div className="absolute top-0 inset-x-0 h-6 bg-smoke-900 rounded-b-3xl w-1/2 mx-auto z-20" />
              
              {/* App UI Mockup */}
              <div className="p-4 pt-12 h-full bg-surface-50 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-smoke-600">Watching Live From</p>
                    <p className="font-bold text-sm">Nairobi Creators ▼</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-razzia-100 flex justify-center items-center text-razzia-600"><Search size={18} /></div>
                </div>

                {/* Animated Order Tracker */}
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-line-100">
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-bold text-sm">Live Drop Active</p>
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
                  <h3 className="font-bold text-lg relative z-10">Exclusive Live Drop: Sneakers</h3>
                  <p className="text-xs relative z-10">Ending in 10 minutes</p>
                </div>

                <p className="font-bold text-sm mt-2">Live Now</p>
                 <div className="flex gap-3 overflow-hidden">
                  {[
                    { name: "Aisha's Shop", category: "Fashion", avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop" },
                    { name: "Kamau Tech", category: "Gadgets", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
                    { name: "Zawadi Art", category: "Handmade", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" }
                  ].map((creator, i) => (
                    <div key={i} className="min-w-[120px] bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-full mb-2 relative overflow-hidden border border-razzia-100">
                        <img src={creator.avatar} alt={creator.name} className="w-full h-full object-cover" />
                      </div>
                      <p className="text-[10px] font-bold text-smoke-900 truncate w-full">{creator.name}</p>
                      <p className="text-[8px] text-razzia-500 font-semibold">{creator.category}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Infinite Ticker Tape */}
      <div className="w-full bg-razzia-500 py-4 overflow-hidden flex whitespace-nowrap text-white font-bold tracking-widest uppercase text-sm">
        <div className="flex shrink-0 gap-8 animate-marquee-x min-w-full justify-around items-center">
          <span>Live Drops</span> • <span>Exclusive Fashion</span> • <span>Tech Gadgets</span> • <span>Streetwear</span> • <span>Handcrafted</span> • 
          <span>Live Drops</span> • <span>Exclusive Fashion</span> • <span>Tech Gadgets</span> • <span>Streetwear</span> • <span>Handcrafted</span> •
        </div>
        <div className="flex shrink-0 gap-8 animate-marquee-x min-w-full justify-around items-center">
          <span>Live Drops</span> • <span>Exclusive Fashion</span> • <span>Tech Gadgets</span> • <span>Streetwear</span> • <span>Handcrafted</span> • 
          <span>Live Drops</span> • <span>Exclusive Fashion</span> • <span>Tech Gadgets</span> • <span>Streetwear</span> • <span>Handcrafted</span> •
        </div>
      </div>

      {/* Features Bento Grid */}
      <section id="features" className="py-24 bg-surface-50">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-smoke-900 md:text-5xl">Watch, interact, and <br/>buy instantly.</h2>
            <p className="mt-4 text-lg text-smoke-600">Experience the thrill of live shopping. Razzia connects you directly with creators and brands in real-time.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div  
              className="bento-card md:col-span-2 rounded-3xl bg-white border border-line-100 p-8 md:p-12 shadow-sm relative overflow-hidden group">
              <div className="relative z-10 w-full md:w-1/2">
                <div className="w-14 h-14 rounded-2xl bg-razzia-50 text-razzia-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MapPin size={28} />
                </div>
                <h3 className="text-2xl font-bold text-smoke-900">Live Discovery</h3>
                <p className="mt-4 text-smoke-600">Swipe through engaging live streams. Discover new products as they are demonstrated live by your favorite local creators.</p>
              </div>
              <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-tl from-razzia-50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
              {/* Decorative Map graphic */}
              <div className="absolute right-[-10%] bottom-[-20%] w-[60%] h-[120%] bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] opacity-10 group-hover:rotate-3 transition-transform duration-1000" />
            </div>

            <div  
              className="bento-card rounded-3xl bg-white border border-line-100 p-8 shadow-sm text-smoke-900 relative overflow-hidden group cursor-default">
              <div className="w-14 h-14 rounded-2xl bg-razzia-50 text-razzia-600 flex items-center justify-center mb-6 group-hover:bg-razzia-500 group-hover:text-white transition-colors duration-500">
                <Zap size={28} />
              </div>
              <h3 className="text-2xl font-bold">Instant Action</h3>
              <p className="mt-4 text-smoke-600">See something you like on stream? Buy it with one tap without ever leaving the video player.</p>
              
              {/* Lightning background element */}
              <Zap size={200} className="absolute -bottom-10 -right-10 text-razzia-500 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700" />
            </div>

            <div  
              className="bento-card md:col-span-3 rounded-3xl bg-surface-50 border border-line-100 p-8 md:p-12 shadow-sm text-smoke-900 flex flex-col md:flex-row items-center justify-between gap-10 group">
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold mb-4 group-hover:text-razzia-600 transition-colors duration-500">Seamless Checkout with Razzia Pay</h3>
                <p className="text-smoke-600 text-lg">No more fumbling with cards or cash. Use your built-in Razzia Wallet for instant, zero-fee transactions across the entire marketplace.</p>

              </div>
              <div className="md:w-1/2 flex justify-center">
                 <div className="w-full max-w-sm h-48 bg-white rounded-2xl border border-line-200 p-6 flex flex-col justify-between shadow-lg group-hover:border-razzia-200 group-hover:translate-y-[-10px] transition-all duration-500">
                   <div className="flex justify-between items-center text-smoke-900">
                     <span className="font-bold text-xl">Razzia Wallet</span>
                     <ShieldCheck size={24} className="text-razzia-500" />
                   </div>
                   <div>
                     <p className="text-smoke-500 text-sm">Available Balance</p>
                     <p className="text-4xl font-extrabold tracking-tight text-smoke-900">KES 14,250</p>
                   </div>
                   
                   {/* Shimmer effect inside the card */}
                   <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-razzia-100 opacity-30 group-hover:animate-[shimmer_1.5s_infinite]" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 overflow-hidden relative">
        {/* Floating background blobs for CTA */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-razzia-200/50 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-200/50 rounded-full blur-[120px] -z-10" />

        <div  
          className="mx-auto w-full max-w-5xl px-6">
          <div className="rounded-[40px] bg-slate-50 border border-line-100 p-10 md:p-20 text-center shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-razzia-50 opacity-10 group-hover:opacity-20 transition-opacity duration-1000" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)", backgroundSize: "24px 24px" }} />
            
            {/* Animated Glow behind text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-razzia-100/50 rounded-full blur-[80px] animate-[pulse_4s_ease-in-out_infinite]" />
            
            <h2 className="text-3xl font-extrabold text-smoke-900 md:text-5xl relative z-10 group-hover:scale-105 transition-transform duration-700">
              Ready to watch and shop?
            </h2>
            <p className="mt-6 text-lg text-smoke-600 max-w-2xl mx-auto relative z-10">
              Download the Razzia App today and join thousands of users experiencing the future of live shoppertainment.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 relative z-10">
              <Button href="#" className="h-14 px-8 text-base bg-razzia-500 text-white hover:bg-razzia-600 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,51,102,0.2)] animate-pulse-glow">Download for iOS</Button>
              <Button href="#" className="h-14 px-8 text-base !bg-transparent border border-line-200 text-smoke-700 hover:bg-surface-50 hover:scale-105 transition-all">Download for Android</Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
