import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Layout } from "@/components/Layout";
import { Heart, Store, Play, Apple, Info, ChevronLeft, ChevronRight, VolumeX, Share, X, Gift } from "lucide-react";
import Link from "next/link";

/* ─── Components ─────────────────────────────────────────────────── */

function PhoneMockup({ 
  imageSrc, 
  title, 
  name, 
  likes,
  floatingIcon = true,
  className = ""
}: { 
  imageSrc: string; 
  title: string; 
  name: string; 
  likes: string;
  floatingIcon?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative mx-auto w-full max-w-[320px] rounded-[3.5rem] border-[10px] border-white bg-white shadow-2xl overflow-hidden aspect-[9/19.5] group ${className}`}>
      {/* Notch */}
      <div className="absolute top-0 left-1/2 h-6 w-32 -translate-x-1/2 rounded-b-3xl bg-black z-30" />
      
      {/* Screen Content */}
      <div className="relative h-full w-full bg-black overflow-hidden rounded-[2.5rem]">
        <Image src={imageSrc} alt="Live Stream" fill className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-[2s]" />
        
        {/* Stream UI Overlay */}
        <div className="absolute inset-0 flex flex-col justify-between p-4 pb-6 pointer-events-none">
          
          {/* Top bar */}
          <div className="mt-8 z-10 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full shrink-0 overflow-hidden relative shadow-lg">
                 <Image src={imageSrc} fill alt="Avatar" className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-semibold text-[13px] leading-tight truncate drop-shadow-md">{title}</h4>
                <p className="text-white/80 text-[11px] font-medium drop-shadow-md">{name} <span className="mx-1 text-white/50">•</span> 👁 7909</p>
              </div>
              <div className="ml-auto shrink-0 flex items-center gap-3">
                <VolumeX className="w-5 h-5 text-white drop-shadow-md" />
                <Share className="w-5 h-5 text-white drop-shadow-md" />
                <X className="w-5 h-5 text-white drop-shadow-md" />
              </div>
            </div>
            <div className="flex items-center gap-2 ml-12">
              <span className="bg-razzia-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider drop-shadow-md">LIVE</span>
              <span className="border border-white/50 text-white backdrop-blur-sm text-[10px] font-semibold px-2 py-0.5 rounded-full drop-shadow-md">Follow</span>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="space-y-4 z-10 pointer-events-auto">
            {/* Chat */}
            <div className="text-white text-[11px] space-y-1.5 drop-shadow-lg max-w-[80%] font-medium">
              <p><span className="font-bold text-white">Santeesantee</span> Tell me about it.</p>
              <p><span className="font-bold text-white">suirenee</span> You have beautiful thoughts!</p>
              <p><span className="font-bold text-white">xhaleyx</span> Woww</p>
              <p><span className="font-bold text-white">Davidopelnn</span> Thanks for the amazing story</p>
              <p><span className="font-bold text-white">Donnykk</span> That's gorgeous</p>
              <div className="bg-black/40 backdrop-blur-md rounded-full px-2.5 py-1.5 inline-flex items-center gap-1.5 mt-1 border border-white/10">
                <span className="text-yellow-400">🔔</span>
                <span className="text-[10px] font-bold text-yellow-400">Notification</span>
                <span className="text-[10px] text-white">2 weeks after you order</span>
                <ChevronRight className="w-3 h-3 text-white/50" />
              </div>
            </div>
            
            {/* Input & Actions */}
            <div className="flex items-center gap-3">
              <div className="relative hover:scale-110 transition-transform cursor-pointer">
                <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center shrink-0">
                  <Store className="h-6 w-6 text-razzia-500" strokeWidth={2.5} />
                </div>
                <div className="absolute -top-2 -right-2 h-5 w-5 bg-razzia-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold">24</div>
              </div>
              <div className="h-10 flex-1 bg-black/40 backdrop-blur-md rounded-full border border-white/20 px-4 flex items-center">
                <span className="text-white/50 text-xs font-medium">Please enter message</span>
              </div>
              <div className="flex items-center gap-3 shrink-0 text-white cursor-pointer">
                 <div className="relative hover:scale-110 transition-transform">
                   <Gift className="h-6 w-6 text-white drop-shadow-md" />
                   <div className="absolute -top-1 -right-1 h-3.5 w-3.5 bg-razzia-500 rounded-full flex items-center justify-center text-[8px] text-white font-bold">2</div>
                 </div>
                 <div className="flex flex-col items-center hover:scale-110 transition-transform">
                   <Heart className="h-6 w-6 text-white drop-shadow-md" strokeWidth={2} />
                   <span className="text-[9px] font-bold mt-0.5 drop-shadow-md text-white/90">{likes}</span>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Heart Animations */}
        {floatingIcon && (
          <div className="absolute bottom-28 right-4 animate-float-fast z-0">
             <Heart className="h-8 w-8 text-razzia-400 fill-razzia-400 opacity-60 drop-shadow-lg" />
          </div>
        )}
      </div>
    </div>
  );
}

function ScrollObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);
  return null;
}

/* ─── Page ───────────────────────────────────────────────────────── */

export default function LandingPage() {
  
  
  return (
    <Layout>
      <ScrollObserver />
      {/* 
        ========================================================================
        SECTION 1: HERO (SOLID RED)
        ========================================================================
      */}
      <section className="relative w-full bg-razzia-500 pt-28 pb-16 lg:pt-32 lg:pb-16 z-20">
        
        {/* Abstract Floating Circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-razzia-600 to-razzia-400 rounded-full blur-2xl opacity-60 animate-pulse-glow" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-razzia-700 to-razzia-500 rounded-full translate-x-1/4 translate-y-1/4 opacity-80" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-razzia-400 to-razzia-300 rounded-full blur-xl opacity-70 animate-float-slow" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 grid gap-12 lg:grid-cols-2 items-center z-10">
          
          {/* Left: Typography & CTA */}
          <div>
            <h1 className=" text-6xl font-black text-white md:text-8xl leading-[1.05] tracking-tighter drop-shadow-sm">
              See It LIVE.<br />
              Shop It Now.
            </h1>

            <p className=" mt-6 text-xl text-white/90 md:text-2xl font-light max-w-lg leading-relaxed">
              Join the most engaging shopping experience. Watch local creators, interact in real-time, and grab exclusive drops instantly.
            </p>

            <div className=" mt-12">
              <Link href="/landing/shop" className="inline-flex items-center gap-2 rounded-full bg-white text-razzia-500 px-8 py-4 text-lg font-black shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all hover:scale-105 active:scale-95 group">
                SHOP LIVE <Play className="w-5 h-5 ml-1 fill-razzia-500 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* App Store Badges removed as per request */}
          </div>

          {/* Right: Overlapping Phone */}
          <div className=" relative lg:translate-y-16 xl:translate-y-20 z-30 drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
            <PhoneMockup 
              imageSrc="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&h=1600&fit=crop"
              title="Makeup Masterclass 💋"
              name="Beauty by Bella"
              likes="12.4k"
              className="lg:scale-110"
            />
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 2: WHO IS RAZZIA? (DARK BACKGROUND)
        ========================================================================
      */}
      <section className="relative w-full overflow-hidden bg-smoke-900 pt-32 pb-24 lg:pt-48 lg:pb-32 z-10">
        {/* Abstract background circles */}
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gradient-to-r from-razzia-600 to-razzia-400 rounded-full blur-xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
        
        <div className="relative mx-auto w-full max-w-7xl px-6 grid gap-16 lg:grid-cols-2 items-center z-10">
          
          {/* Left: Phone */}
          <div className={`order-2 lg:order-1 relative transition-all duration-1000 transform     `}>
            <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-razzia-500 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />
            <PhoneMockup 
              imageSrc="https://images.unsplash.com/photo-1588629910531-df13b2ce43c6?w=800&h=1600&fit=crop"
              title="Studio Setup Revealed"
              name="Tech Tips Live"
              likes="8.9k"
            />
          </div>

          {/* Right: Text */}
          <div className={`order-1 lg:order-2 lg:pl-12 transition-all duration-1000 delay-300 transform     `}>
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-razzia-400 to-razzia-600 tracking-tighter">
              Beyond Shopping.
            </h2>
            <p className="mt-8 text-xl text-smoke-300 leading-relaxed font-light max-w-lg">
              More than just a store—it's a live experience. <br/><br/>
              Razzia brings the hustle and energy of the marketplace straight to your screen. We're breaking down the walls between sellers and buyers, combining live entertainment with instant checkout for a shopping experience like never before.
            </p>
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 3: EVERYONE CAN SELL (LIGHT BACKGROUND)
        ========================================================================
      */}
      <section className="relative w-full overflow-hidden bg-surface-50 py-16 lg:py-24">
        
        {/* Abstract background circles */}
        <div className={`absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-razzia-500 to-razzia-300 rounded-full blur-2xl opacity-80 translate-x-1/2 -translate-y-1/2 shadow-2xl transition-all duration-[2s]     `} />
        <div className={`absolute top-[60%] md:top-1/4 -right-8 md:right-[10%] w-32 h-32 bg-white rounded-full border-[16px] border-razzia-500 shadow-xl opacity-40 md:opacity-100 transition-all duration-[2s] delay-500     `} />

        <div className="relative mx-auto w-full max-w-7xl px-6 grid gap-16 lg:grid-cols-2 items-center z-10">
          
          {/* Left: Text */}
          <div className={`lg:pr-12 transition-all duration-1000 transform     `}>
            <h2 className="text-5xl md:text-7xl font-black text-smoke-900 tracking-tighter">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-razzia-500 to-razzia-400">Turn Views</span> into Sales
            </h2>
            <p className="mt-8 text-xl text-smoke-600 leading-relaxed font-light max-w-lg">
              Whether you're a local boutique or a rising influencer, Razzia gives you the stage. <br/><br/>
              Go live from your phone, showcase your passion, and watch your community—and your business—grow instantly.
            </p>
          </div>

          {/* Right: Phone */}
          <div className={`relative transition-all duration-1000 delay-300 transform     `}>
            <PhoneMockup 
              imageSrc="https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=800&h=1600&fit=crop"
              title="Summer Collection Drop"
              name="Streetwear Kings"
              likes="15.8k"
            />
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 4: COMMUNICATE DIRECTLY
        ========================================================================
      */}
      <section className="relative w-full overflow-hidden bg-white py-16 lg:py-24">
        {/* Abstract background circles */}
        <div className={`absolute top-1/4 left-10 w-64 h-64 bg-razzia-50 rounded-full blur-2xl opacity-80 transition-all duration-[2s]  - `} />
        <div className={`absolute bottom-10 right-1/4 w-96 h-96 bg-razzia-50 rounded-full blur-3xl opacity-60 transition-all duration-[2s] delay-300   `} />

        <div className="relative mx-auto w-full max-w-7xl px-6 grid gap-16 lg:grid-cols-2 items-center z-10">
          
          {/* Left: Phone */}
          <div className={`order-2 lg:order-1 relative transition-all duration-1000 transform     `}>
            <PhoneMockup 
              imageSrc="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&h=1600&fit=crop"
              title="Exclusive Sneaker Drop"
              name="Sarah's Closet"
              likes="22.1k"
            />
          </div>

          {/* Right: Text */}
          <div className={`order-1 lg:order-2 lg:pl-12 transition-all duration-1000 delay-300 transform     `}>
            <h2 className="text-5xl md:text-7xl font-black text-smoke-900 tracking-tighter">
              Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-razzia-500 to-razzia-400">Connections</span>
            </h2>
            <p className="mt-8 text-xl text-smoke-600 leading-relaxed font-light max-w-lg">
              Don't just add to cart—say hello! <br/><br/>
              Ask questions, request specific product demonstrations, and chat directly with the people behind your favorite products.
            </p>
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 5: CATCH THE DROP
        ========================================================================
      */}
      <section className="relative w-full overflow-hidden bg-razzia-50 py-16 lg:py-24">
        
        <div className="relative mx-auto w-full max-w-7xl px-6 grid gap-16 lg:grid-cols-2 items-center z-10">
          
          {/* Left: Text */}
          <div className={`lg:pr-12 transition-all duration-1000 transform     `}>
            <h2 className="text-5xl md:text-7xl font-black text-smoke-900 tracking-tighter">
              Catch the <span className="text-transparent bg-clip-text bg-gradient-to-r from-razzia-500 to-razzia-600">Flash Drops</span>
            </h2>
            <p className="mt-8 text-xl text-smoke-600 leading-relaxed font-light max-w-lg">
              FOMO is real. <br/><br/>
              Grab exclusive items and limited-time discounts right from the live stream. When the drop happens, you have to be fast!
            </p>
          </div>

          {/* Right: Phone */}
          <div className={`relative transition-all duration-1000 delay-300 transform     `}>
            <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-gradient-to-br from-razzia-500 to-razzia-600 rounded-full shadow-2xl -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />
            
            <div className="relative">
              <PhoneMockup 
                imageSrc="https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=1600&fit=crop"
                title="Q&A Session"
                name="Beauty Box"
                likes="45k"
                floatingIcon={false}
              />
              {/* Product Card Overlay inside Phone */}
              <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-11/12 max-w-[280px] bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-4 animate-slide-up border border-white z-30">
                <div className="relative h-32 w-full rounded-xl overflow-hidden mb-3 shadow-inner">
                  <Image src="https://images.unsplash.com/photo-1512413914840-a309e3948e9c?w=400&h=400&fit=crop" fill alt="Product" className="object-cover" />
                  <span className="absolute top-2 left-2 bg-black text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-lg shadow-black/50">Live Drop</span>
                </div>
                <h5 className="font-bold text-sm text-smoke-900 truncate">Limited Edition Kit</h5>
                <p className="text-xs text-smoke-500 line-clamp-1 mt-0.5">Only 10 left in stock!</p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-2">
                    <span className="text-razzia-500 font-extrabold text-lg">KES 4,500</span>
                    <span className="text-smoke-400 text-xs line-through font-semibold">6,000</span>
                  </div>
                  <span className="text-xs font-bold text-razzia-500 bg-razzia-100 px-2 py-1 rounded shadow-sm">-25%</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 6: MEET OUR TOP CREATORS
        ========================================================================
      */}
      <section className="relative w-full overflow-hidden bg-razzia-500 pt-24 pb-32 lg:pt-32 lg:pb-48">
        <div className={`relative mx-auto w-full max-w-7xl px-6 z-10 text-center transition-all duration-1000 transform     `}>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter drop-shadow-sm">
            Discover Top Creators
          </h2>
          <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-xl mx-auto font-light">
            Tune in daily to watch Razzia's most loved vendors showcase their latest drops, share styling tips, and entertain.
          </p>

          <div className="relative mt-16 group">
            <button 
              onClick={() => {
                const el = document.getElementById("creators-scroll");
                if (el) el.scrollBy({ left: -320, behavior: 'smooth' });
              }}
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 bg-white text-razzia-500 rounded-full p-3 shadow-xl hover:scale-110 transition-all duration-300  group-hover:opacity-100 hidden md:block"
            >
              <ChevronLeft size={28} />
            </button>
            <div 
              id="creators-scroll"
              className="flex overflow-x-auto gap-6 pb-12 pt-4 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {[
                { name: "Aisha", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop", desc: "Don't be fooled by her chic look. Aisha's charms will bring smiles to your face." },
                { name: "Kamau", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop", desc: "Come and chat with your friendly neighborhood tech expert." },
                { name: "Zawadi", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop", desc: "A talented designer, Zawadi will reveal all her beauty and fashion secrets." },
                { name: "Brian", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop", desc: "Feeling down? Brian will make you laugh and forget about all your worries." },
                { name: "Naomi", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop", desc: "Your ultimate guide to affordable and trendy streetwear styling." },
                { name: "Dennis", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop", desc: "Sneakerhead and fitness guru, Dennis always brings the heat live." },
                { name: "Wanjiku", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop", desc: "Catch her live for the best home decor and lifestyle hacks daily." },
                { name: "Kevin", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop", desc: "The gaming king. Tuning into Kevin's stream is always a good time." }
              ].map((creator, i) => (
                <div 
                  key={i} 
                  className="bg-white rounded-[2rem] p-8 shadow-xl flex flex-col items-center text-center transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl min-w-[280px] sm:min-w-[300px] max-w-[300px] snap-center relative overflow-hidden group/card"
                >
                  {/* Background flair animation */}
                  <div className="absolute inset-0 bg-gradient-to-br from-razzia-50 to-transparent  group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-razzia-50 shadow-md relative z-10 transition-transform duration-500 group-hover/card:scale-110 group-hover/card:border-razzia-100">
                    <Image src={creator.img} alt={creator.name} width={128} height={128} className="object-cover w-full h-full" />
                  </div>
                  <h3 className="text-2xl font-bold text-smoke-900 mb-3 relative z-10 transition-colors duration-300 group-hover/card:text-razzia-500">{creator.name}</h3>
                  <p className="text-sm text-smoke-500 leading-relaxed relative z-10">
                    {creator.desc}
                  </p>
                </div>
              ))}
            </div>
            <button 
              onClick={() => {
                const el = document.getElementById("creators-scroll");
                if (el) el.scrollBy({ left: 320, behavior: 'smooth' });
              }}
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 bg-white text-razzia-500 rounded-full p-3 shadow-xl hover:scale-110 transition-all duration-300  group-hover:opacity-100 hidden md:block"
            >
              <ChevronRight size={28} />
            </button>
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 7: BECOME A VENDOR
        ========================================================================
      */}
      <section className="relative w-full bg-smoke-900 py-16 text-center border-t border-white/10">
        <div className="relative mx-auto w-full max-w-3xl px-6 z-10 transition-all duration-1000 transform">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
            Take Center Stage
          </h2>
          <p className="mt-6 text-xl text-smoke-300 font-light">
            Ready to revolutionize your business? Join the live commerce movement today.
          </p>
          <div className="mt-12">
            <Link href="/landing/register" className="inline-block bg-white text-smoke-900 font-black text-xl px-10 py-5 rounded-full shadow-[0_10px_40px_rgba(255,255,255,0.15)] hover:shadow-[0_15px_50px_rgba(255,255,255,0.25)] hover:scale-105 transition-all">
              Start Selling on Razzia
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
}
