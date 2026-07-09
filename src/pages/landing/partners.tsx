import { useState, useEffect, useRef } from "react";
import { Store, ShoppingBag, Coffee, Smartphone, HeartHandshake, CheckCircle, TrendingUp, Star, ChevronRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/Button";

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

export default function PartnersPage() {
  const heroReveal = useReveal(0);
  const gridReveal = useReveal(150);
  const ctaReveal = useReveal(100);

  return (
    <Layout>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-up { 0% { transform: translateY(0); } 100% { transform: translateY(-50%); } }
        @keyframes scroll-down { 0% { transform: translateY(-50%); } 100% { transform: translateY(0); } }
        @keyframes scroll-x { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes pulse-glow { 0%, 100% { opacity: 0.6; transform: scale(1); } 50% { opacity: 1; transform: scale(1.05); } }
        
        .animate-scroll-up { animation: scroll-up 30s linear infinite; }
        .animate-scroll-down { animation: scroll-down 30s linear infinite; }
        .animate-scroll-x { animation: scroll-x 20s linear infinite; }
        
        .glass-panel { background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.2); }
        .dark-glass-panel { background: rgba(0, 0, 0, 0.4); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1); }
        
        .image-card { transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
        .image-card img { transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
        .image-card:hover img { transform: scale(1.1); }
        .image-card:hover { transform: translateY(-10px); box-shadow: 0 30px 60px rgba(0,0,0,0.2); z-index: 10; }
        
        .text-gradient { background: linear-gradient(135deg, #fff 0%, #a5b4fc 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
      `}} />

      {/* Epic Hero Section with Parallax Image Columns */}
      <section className="relative h-[90vh] min-h-[700px] overflow-hidden bg-[#050505] flex items-center">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10 pointer-events-none" />
        
        {/* Animated Background Columns */}
        <div className="absolute inset-y-0 right-0 w-[60%] flex gap-4 opacity-50 z-0 transform rotate-12 scale-125 translate-x-[10%]">
          {/* Column 1 */}
          <div className="flex flex-col gap-4 animate-scroll-up w-1/3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={`c1-${i}`} className="h-64 rounded-3xl overflow-hidden shadow-2xl">
                <img src={`https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80`} className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" alt="Restaurant" />
              </div>
            ))}
          </div>
          {/* Column 2 */}
          <div className="flex flex-col gap-4 animate-scroll-down w-1/3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={`c2-${i}`} className="h-80 rounded-3xl overflow-hidden shadow-2xl">
                <img src={`https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80`} className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" alt="Supermarket" />
              </div>
            ))}
          </div>
          {/* Column 3 */}
          <div className="flex flex-col gap-4 animate-scroll-up w-1/3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={`c3-${i}`} className="h-64 rounded-3xl overflow-hidden shadow-2xl">
                <img src={`https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80`} className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" alt="Food" />
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-7xl px-6 relative z-20">
          <div ref={heroReveal.ref} style={{ opacity: heroReveal.isVisible ? 1 : 0, transform: heroReveal.isVisible ? "none" : "translateY(40px)", transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)" }}
            className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-2 text-xs font-bold uppercase tracking-widest text-white mb-8">
              <Star size={14} className="text-amber-400" fill="currentColor" />
              The City's Best
            </span>
            <h1 className="text-6xl font-extrabold leading-[1.05] text-white md:text-7xl lg:text-8xl tracking-tight">
              Curated <br />
              <span className="text-gradient">local flavor.</span>
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-white/70 max-w-xl">
              We handpick the finest restaurants, freshest markets, and most reliable stores in your city. Experience local commerce at its absolute best.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Button href="#categories" className="h-14 px-8 text-base bg-white text-black hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] border-none">
                Explore Partners
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Scrolling Partner Showcase */}
      <div className="w-full bg-razzia-600 py-4 overflow-hidden flex whitespace-nowrap text-white font-bold tracking-widest uppercase text-sm border-y border-razzia-700">
        <div className="flex shrink-0 gap-16 animate-scroll-x min-w-full justify-around items-center">
          <span className="flex items-center gap-3"><ShoppingBag size={20} /> KIBO MART</span>
          <span className="flex items-center gap-3"><Coffee size={20} /> URBAN BURGER CO.</span>
          <span className="flex items-center gap-3"><Store size={20} /> FRESH FARMS</span>
          <span className="flex items-center gap-3"><Smartphone size={20} /> TECH HAVEN</span>
          <span className="flex items-center gap-3"><Coffee size={20} /> MAMA'S KITCHEN</span>
        </div>
        <div className="flex shrink-0 gap-16 animate-scroll-x min-w-full justify-around items-center">
          <span className="flex items-center gap-3"><ShoppingBag size={20} /> KIBO MART</span>
          <span className="flex items-center gap-3"><Coffee size={20} /> URBAN BURGER CO.</span>
          <span className="flex items-center gap-3"><Store size={20} /> FRESH FARMS</span>
          <span className="flex items-center gap-3"><Smartphone size={20} /> TECH HAVEN</span>
          <span className="flex items-center gap-3"><Coffee size={20} /> MAMA'S KITCHEN</span>
        </div>
      </div>

      {/* Massive Image Bento Grid */}
      <section id="categories" className="py-32 bg-[#050505] relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-razzia-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl text-white">
              <h2 className="text-4xl font-extrabold md:text-6xl tracking-tight">Browse by Category</h2>
              <p className="mt-4 text-xl text-white/60">The best spots in town, organized for your convenience.</p>
            </div>
          </div>

          <div ref={gridReveal.ref} style={{ opacity: gridReveal.isVisible ? 1 : 0, transform: gridReveal.isVisible ? "none" : "translateY(50px)", transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)" }}
            className="grid md:grid-cols-3 gap-6 auto-rows-[400px]">
            
            {/* Mega Card: Restaurants */}
            <div className="image-card md:col-span-2 md:row-span-2 relative rounded-[40px] overflow-hidden group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80" alt="Restaurant Food" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              <div className="absolute top-8 right-8">
                <span className="dark-glass-panel text-white font-bold px-4 py-2 rounded-full flex items-center gap-2">
                  <Coffee size={16} className="text-amber-400" /> 240+ Partners
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-4">Restaurants</h3>
                <p className="text-white/80 text-lg md:text-xl max-w-md mb-8">From fine dining to the best local street food. Hot, fresh, and delivered in minutes.</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-400 transition-all">
                    <ChevronRight size={24} />
                  </div>
                  <span className="text-white font-bold uppercase tracking-widest text-sm">Explore Food</span>
                </div>
              </div>
            </div>

            {/* Regular Card: Groceries */}
            <div className="image-card relative rounded-[40px] overflow-hidden group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80" alt="Supermarket" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="w-12 h-12 rounded-2xl bg-green-500 text-white flex items-center justify-center mb-6 shadow-lg">
                  <Store size={24} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Groceries</h3>
                <p className="text-white/70">Fresh produce, daily essentials, and bulk shopping.</p>
              </div>
            </div>

            {/* Regular Card: Electronics */}
            <div className="image-card relative rounded-[40px] overflow-hidden group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=800&q=80" alt="Electronics" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="w-12 h-12 rounded-2xl bg-blue-500 text-white flex items-center justify-center mb-6 shadow-lg">
                  <Smartphone size={24} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Tech & Audio</h3>
                <p className="text-white/70">Phones, laptops, and genuine accessories.</p>
              </div>
            </div>

            {/* Long Card: Pharmacy/Health */}
            <div className="image-card md:col-span-3 relative rounded-[40px] overflow-hidden group cursor-pointer h-[300px]">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80" alt="Pharmacy" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
              
              <div className="absolute inset-y-0 left-0 p-8 md:p-12 flex flex-col justify-center max-w-xl">
                <span className="inline-block px-3 py-1 bg-red-500 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-4 w-fit">24/7 Delivery</span>
                <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Pharmacies & Health</h3>
                <p className="text-white/80 text-lg">Over-the-counter medicine, wellness products, and personal care items delivered securely.</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Partner Spotlight Carousel */}
      <section className="py-32 bg-white relative overflow-hidden border-t border-line-100">
        <div className="mx-auto max-w-7xl px-6 mb-16 text-center">
           <h2 className="text-4xl font-extrabold text-smoke-900 md:text-6xl tracking-tight mb-6">Partner Spotlight</h2>
           <p className="text-xl text-smoke-600 max-w-2xl mx-auto">Discover the fan favorites. These businesses consistently deliver incredible quality and service on Razzia.</p>
        </div>

        {/* Horizontal Scrolling Gallery */}
        <div className="flex gap-8 px-6 pb-12 overflow-x-auto snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
           {[
             { name: "Urban Burger Co.", type: "American • Fast Food", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80", rating: "4.9" },
             { name: "Fresh Farms", type: "Organic Groceries", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80", rating: "4.8" },
             { name: "Kibo Mart", type: "Supermarket", img: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=600&q=80", rating: "4.7" },
             { name: "Tech Haven", type: "Electronics", img: "https://images.unsplash.com/photo-1531297172868-9f140cece061?auto=format&fit=crop&w=600&q=80", rating: "4.9" },
             { name: "Mama's Kitchen", type: "Local Cuisine", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80", rating: "4.8" }
           ].map((spotlight, i) => (
             <div key={i} className="min-w-[350px] md:min-w-[450px] snap-center group cursor-pointer">
               <div className="w-full h-[300px] md:h-[400px] rounded-[30px] overflow-hidden mb-6 relative shadow-lg">
                 <img src={spotlight.img} alt={spotlight.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-smoke-900 px-3 py-1.5 rounded-full font-bold text-sm flex items-center gap-1 shadow-xl">
                   <Star size={14} className="text-amber-500" fill="currentColor"/> {spotlight.rating}
                 </div>
               </div>
               <h3 className="text-2xl font-bold text-smoke-900 mb-1 group-hover:text-razzia-500 transition-colors">{spotlight.name}</h3>
               <p className="text-smoke-500 font-medium">{spotlight.type}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Massive CTA */}
      <section className="py-32 relative overflow-hidden bg-razzia-600 flex items-center justify-center">
        {/* Dynamic Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        
        {/* Massive Glows */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/30 rounded-full blur-[150px] mix-blend-overlay animate-[pulse-glow_4s_ease-in-out_infinite]" />
        
        <div ref={ctaReveal.ref} style={{ opacity: ctaReveal.isVisible ? 1 : 0, transform: ctaReveal.isVisible ? "scale(1)" : "scale(0.9)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
          className="mx-auto w-full max-w-4xl px-6 relative z-10 text-center">
          
          <div className="w-20 h-20 bg-white rounded-3xl mx-auto flex items-center justify-center text-razzia-600 mb-8 shadow-2xl rotate-12 hover:rotate-0 transition-transform cursor-pointer">
            <HeartHandshake size={40} />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight">
            Join the best.
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12 font-medium">
            Over 2,000 local businesses are already growing their revenue with Razzia. List your shop today and reach thousands of new customers.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button href="/landing/register" className="h-16 px-12 text-lg !bg-white !border-white !text-razzia-600 hover:scale-105 transition-transform shadow-[0_20px_40px_rgba(0,0,0,0.2)] rounded-full">
              List your Business
            </Button>
            <Button href="/landing/contact" className="h-16 px-12 text-lg !bg-transparent border-2 border-white/30 !text-white hover:!bg-white/10 hover:scale-105 transition-transform rounded-full">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
