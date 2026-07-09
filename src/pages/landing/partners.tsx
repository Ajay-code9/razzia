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
      <section className="relative overflow-hidden bg-surface-50 pt-20 pb-16 lg:pt-24 lg:pb-24">
        {/* Glow */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-96 w-[800px] rounded-full bg-razzia-100 opacity-60 blur-3xl" />

        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:gap-20 relative z-10">
          
          {/* Left Text */}
          <div ref={heroReveal.ref} style={{ opacity: heroReveal.isVisible ? 1 : 0, transform: heroReveal.isVisible ? "none" : "translateY(40px)", transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)" }}
            className="flex-1 lg:max-w-2xl text-center lg:text-left">
            <h1 className="text-5xl font-extrabold leading-[1.05] text-smoke-900 md:text-6xl lg:text-7xl tracking-tight">
              Curated <br />
              <span className="text-razzia-500">live creators.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-smoke-600 max-w-xl mx-auto lg:mx-0">
              We handpick the most engaging creators, boutique brands, and authentic sellers in your city. Experience interactive commerce at its absolute best.
            </p>
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
              <Button href="#categories" className="h-14 px-8 text-base bg-razzia-500 text-white hover:bg-razzia-600 hover:scale-105 transition-transform shadow-lg hover:shadow-xl border-none">
                Explore Creators
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none relative mt-10 lg:mt-0" style={{ opacity: heroReveal.isVisible ? 1 : 0, transform: heroReveal.isVisible ? "none" : "scale(0.95)", transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 200ms" }}>
            <div className="relative rounded-[2.5rem] bg-white p-4 shadow-xl border border-line-100">
              <div className="relative h-[400px] lg:h-[500px] w-full overflow-hidden rounded-[2rem]">
                <img 
                  alt="Live streamer showcasing products" 
                  src="https://images.unsplash.com/photo-1621570169569-8fc97e33e143?auto=format&fit=crop&w=800&q=80" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Infinite Scrolling Partner Showcase */}
      <div className="w-full bg-razzia-50 py-5 overflow-hidden flex whitespace-nowrap text-razzia-600 font-bold tracking-widest uppercase text-sm border-y border-razzia-100">
        <div className="flex shrink-0 gap-16 animate-marquee-x min-w-full justify-around items-center">
          <span className="flex items-center gap-3"><ShoppingBag size={20} /> THRIFT KULTURE</span>
          <span className="flex items-center gap-3"><ShoppingBag size={20} /> SNEAKER CITY</span>
          <span className="flex items-center gap-3"><Smartphone size={20} /> TECH HAVEN</span>
          <span className="flex items-center gap-3"><Star size={20} /> BEAUTY BLENDS</span>
          <span className="flex items-center gap-3"><HeartHandshake size={20} /> ARTISAN HUB</span>
        </div>
        <div className="flex shrink-0 gap-16 animate-marquee-x min-w-full justify-around items-center">
          <span className="flex items-center gap-3"><ShoppingBag size={20} /> THRIFT KULTURE</span>
          <span className="flex items-center gap-3"><ShoppingBag size={20} /> SNEAKER CITY</span>
          <span className="flex items-center gap-3"><Smartphone size={20} /> TECH HAVEN</span>
          <span className="flex items-center gap-3"><Star size={20} /> BEAUTY BLENDS</span>
          <span className="flex items-center gap-3"><HeartHandshake size={20} /> ARTISAN HUB</span>
        </div>
      </div>

      {/* Massive Image Bento Grid */}
      <section id="categories" className="py-32 bg-white relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-razzia-100 opacity-60 rounded-full blur-[150px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl text-smoke-900">
              <h2 className="text-4xl font-extrabold md:text-6xl tracking-tight">Browse by Category</h2>
              <p className="mt-4 text-xl text-smoke-600">The best spots in town, organized for your convenience.</p>
            </div>
          </div>

          <div ref={gridReveal.ref} style={{ opacity: gridReveal.isVisible ? 1 : 0, transform: gridReveal.isVisible ? "none" : "translateY(50px)", transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)" }}
            className="grid md:grid-cols-3 gap-6 auto-rows-[400px]">
            
            {/* Mega Card: Fashion */}
            <div className="image-card md:col-span-2 md:row-span-2 relative rounded-[40px] overflow-hidden group cursor-pointer border border-line-100 soft-shadow">
              <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=80" alt="Fashion and Apparel" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
              
              <div className="absolute top-8 right-8">
                <span className="bg-white/90 backdrop-blur-md border border-razzia-100 text-razzia-600 font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                  <ShoppingBag size={16} className="text-razzia-500" /> 240+ Brands
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <h3 className="text-4xl md:text-6xl font-extrabold text-smoke-900 mb-4">Fashion & Apparel</h3>
                <p className="text-smoke-600 text-lg md:text-xl max-w-md mb-8">From vintage streetwear to exclusive local drops. Demonstrated live on video, delivered in minutes.</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-razzia-50 text-razzia-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-razzia-500 group-hover:text-white transition-all shadow-sm">
                    <ChevronRight size={24} />
                  </div>
                  <span className="text-razzia-600 font-bold uppercase tracking-widest text-sm group-hover:text-razzia-500 transition-colors">Explore Fashion</span>
                </div>
              </div>
            </div>

            {/* Regular Card: Beauty */}
            <div className="image-card relative rounded-[40px] overflow-hidden group cursor-pointer border border-line-100 soft-shadow">
              <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80" alt="Beauty and Cosmetics" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="w-12 h-12 rounded-2xl bg-razzia-50 text-razzia-500 flex items-center justify-center mb-6 shadow-sm border border-razzia-100 group-hover:scale-110 transition-transform">
                  <Star size={24} />
                </div>
                <h3 className="text-3xl font-bold text-smoke-900 mb-2">Beauty & Cosmetics</h3>
                <p className="text-smoke-600 font-medium">Skincare routines, makeup tutorials, and beauty drops.</p>
              </div>
            </div>

            {/* Regular Card: Electronics */}
            <div className="image-card relative rounded-[40px] overflow-hidden group cursor-pointer border border-line-100 soft-shadow">
              <img src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=800&q=80" alt="Electronics" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center mb-6 shadow-sm border border-blue-100 group-hover:scale-110 transition-transform">
                  <Smartphone size={24} />
                </div>
                <h3 className="text-3xl font-bold text-smoke-900 mb-2">Tech & Audio</h3>
                <p className="text-smoke-600 font-medium">Phones, laptops, and genuine accessories.</p>
              </div>
            </div>

            {/* Long Card: Handcrafted */}
            <div className="image-card md:col-span-3 relative rounded-[40px] overflow-hidden group cursor-pointer h-[300px] border border-line-100 soft-shadow">
              <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1600&q=80" alt="Handcrafted Arts" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
              
              <div className="absolute inset-y-0 left-0 p-8 md:p-12 flex flex-col justify-center max-w-xl">
                <span className="inline-block px-3 py-1 bg-razzia-100 text-razzia-600 border border-razzia-200 text-xs font-bold uppercase tracking-widest rounded-full mb-4 w-fit">Exclusive Pieces</span>
                <h3 className="text-4xl md:text-5xl font-extrabold text-smoke-900 mb-4">Handcrafted & Art</h3>
                <p className="text-smoke-600 text-lg font-medium">Unique, artisan-made jewelry, home decor, and crafts directly from the makers.</p>
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
             { name: "Sneaker City", type: "Streetwear", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80", rating: "4.9" },
             { name: "Thrift Kulture", type: "Vintage Fashion", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80", rating: "4.8" },
             { name: "Beauty Blends", type: "Cosmetics", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80", rating: "4.9" },
             { name: "Tech Haven", type: "Electronics", img: "https://images.unsplash.com/photo-1531297172868-9f140cece061?auto=format&fit=crop&w=600&q=80", rating: "4.9" },
             { name: "Artisan Hub", type: "Handcrafted", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80", rating: "4.8" }
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
      <section className="py-32 relative overflow-hidden bg-razzia-500 flex items-center justify-center">
        {/* Dynamic Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        
        {/* Massive Glows */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/40 rounded-full blur-[150px] mix-blend-overlay animate-pulse-glow" />
        
        <div ref={ctaReveal.ref} style={{ opacity: ctaReveal.isVisible ? 1 : 0, transform: ctaReveal.isVisible ? "scale(1)" : "scale(0.9)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
          className="mx-auto w-full max-w-4xl px-6 relative z-10 text-center">
          
          <div className="w-20 h-20 bg-white rounded-3xl mx-auto flex items-center justify-center text-razzia-500 mb-8 shadow-2xl rotate-12 hover:rotate-0 transition-transform cursor-pointer">
            <HeartHandshake size={40} />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight">
            Join the creators.
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12 font-medium">
            Over 2,000 creators and brands are already growing their revenue with Razzia. Go live today and reach thousands of new viewers.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button href="/landing/register" className="h-16 px-12 text-lg !bg-white !border-white !text-razzia-500 hover:scale-105 transition-transform shadow-[0_20px_40px_rgba(0,0,0,0.1)] rounded-full">
              Become a Creator
            </Button>
            <Button href="/landing/contact" className="h-16 px-12 text-lg !bg-transparent border-2 border-white/40 !text-white hover:!bg-white/20 hover:scale-105 transition-transform rounded-full">
              Partner with Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
