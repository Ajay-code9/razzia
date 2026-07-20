import { useState, useEffect, useRef } from "react";
import { ArrowRight, Globe, ShieldCheck, PieChart, TrendingUp, Users, Building, Activity, Store } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/Button";

// useReveal hook for elegant, smooth scroll animations
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

export default function InvestorsPage() {
  const heroReveal = useReveal(0);
  const imageReveal = useReveal(200);
  const metricsReveal = useReveal(150);
  const thesisReveal = useReveal(100);
  const ctaReveal = useReveal(50);

  return (
    <Layout>
      <style dangerouslySetInnerHTML={{ __html: `
        .text-gradient-primary { background: linear-gradient(135deg, var(--razzia-500) 0%, #ff8fa3 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .soft-shadow { box-shadow: 0 20px 40px -15px rgba(0,0,0,0.05); }
        .bento-card { transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .bento-card:hover { transform: translateY(-5px); box-shadow: 0 30px 60px -15px rgba(255, 51, 102, 0.15); border-color: rgba(255, 51, 102, 0.2); }
      `}} />

      {/* Elegant Modern Hero Section */}
      <section className="relative bg-[#FAFAFA] pt-24 pb-16 lg:pt-24 lg:pb-16 overflow-hidden border-b border-line-100">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, black 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        
        <div className="mx-auto w-full max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-6" ref={heroReveal.ref} style={{ opacity: heroReveal.isVisible ? 1 : 0, transform: heroReveal.isVisible ? "none" : "translateY(30px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}>

            <h1 className="text-5xl font-extrabold leading-[1.1] text-smoke-900 md:text-6xl tracking-tight mb-8">
              Join us in shaping the future of <span className="text-gradient-primary">live shoppertainment.</span>
            </h1>
            <div className="space-y-6 text-lg leading-relaxed text-smoke-600">
              <p>
                We invite you to be a vital part of our vision for the future at Razzia. By investing in our platform, you're backing a revolution in how people discover, interact with, and purchase products online.
              </p>
              <p>
                At Razzia, we merge the engagement of social media with the conversion of e-commerce. Your investment will help us scale our creator network and build the next generation of interactive shopping.
              </p>
            </div>
            
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="#invest" className="h-14 px-8 text-base bg-razzia-500 text-white hover:bg-razzia-600 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 border-none rounded-xl">
                Discuss Opportunities
              </Button>
              <Button href="/landing/contact" variant="secondary" className="h-14 px-8 text-base bg-white border border-line-200 hover:bg-surface-50 hover:-translate-y-1 transition-all rounded-xl shadow-sm text-smoke-700">
                Request Deck
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6" ref={imageReveal.ref} style={{ opacity: imageReveal.isVisible ? 1 : 0, transform: imageReveal.isVisible ? "none" : "translateY(30px)", transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)" }}>
            {/* Beautifully framed professional image */}
            <div className="relative rounded-[2rem] p-2 bg-white border border-line-100 soft-shadow rotate-1 hover:rotate-0 transition-transform duration-700">
              <div className="rounded-[1.5rem] overflow-hidden relative h-[500px]">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                  alt="Modern Creators Team" 
                  className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                {/* Floating stat card over image */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-xl p-4 flex items-center justify-between border border-white/20 shadow-xl">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                       <TrendingUp size={20} />
                     </div>
                     <div>
                       <p className="text-xs font-bold text-smoke-500 uppercase">Q3 Growth</p>
                       <p className="text-lg font-extrabold text-smoke-900">+340% YoY</p>
                     </div>
                   </div>
                   <Button variant="secondary" className="!text-xs !h-8 !px-3 rounded-lg border-line-200">View Report</Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Financial Traction Dashboard */}
      <section className="py-12 lg:py-16 bg-white border-b border-line-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-razzia-50 rounded-full blur-[100px] -z-10" />
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-smoke-900 tracking-tight mb-4 md:text-4xl">Proven Unit Economics</h2>
            <p className="text-lg text-smoke-600">Our growth is consistent, our margins are healthy, and our platform is rapidly scaling across key urban centers.</p>
          </div>

          <div ref={metricsReveal.ref} style={{ opacity: metricsReveal.isVisible ? 1 : 0, transform: metricsReveal.isVisible ? "none" : "translateY(30px)", transition: "all 0.8s ease" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {[
              { icon: Activity, title: "Monthly GMV", value: "$4.2M", desc: "Gross Merchandise Value" },
              { icon: Store, title: "Active Creators", value: "2,400+", desc: "Verified live streamers & brands" },
              { icon: Users, title: "Retention Rate", value: "78%", desc: "Cohort Month 6 average" },
              { icon: Building, title: "Revenue Run Rate", value: "$8.5M", desc: "Annualized platform revenue" },
            ].map((metric, i) => {
              const Icon = metric.icon;
              return (
              <div key={i} className="bg-white p-8 rounded-3xl border border-line-100 soft-shadow group hover:border-razzia-200 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-surface-50 text-razzia-500 flex items-center justify-center mb-6 group-hover:bg-razzia-50 transition-colors">
                  <Icon size={24} />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-smoke-500 mb-1">{metric.title}</p>
                <h3 className="text-3xl font-extrabold text-smoke-900 mb-2">{metric.value}</h3>
                <p className="text-sm text-smoke-500">{metric.desc}</p>
              </div>
            )})}

          </div>
        </div>
      </section>

      {/* Investment Thesis - Bento Grid */}
      <section className="py-12 lg:py-16 bg-[#FAFAFA] relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-extrabold text-smoke-900 tracking-tight md:text-4xl">Investment Thesis</h2>
            <p className="mt-4 text-lg text-smoke-600 max-w-2xl">Why Razzia represents a highly compelling, generational opportunity in the East African market.</p>
          </div>

          <div ref={thesisReveal.ref} style={{ opacity: thesisReveal.isVisible ? 1 : 0, transform: thesisReveal.isVisible ? "none" : "translateY(30px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
            className="grid md:grid-cols-3 gap-6">
            
            <div className="bento-card bg-white rounded-3xl p-10 border border-line-100 group">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Globe size={28} />
              </div>
              <h3 className="text-2xl font-bold text-smoke-900 mb-4">$80B Addressable Market</h3>
              <p className="text-smoke-600 leading-relaxed">
                Live commerce is the fastest-growing segment in global e-commerce. Razzia is bringing the proven 'shoppertainment' model to untapped emerging markets.
              </p>
            </div>

            <div className="bento-card bg-white rounded-3xl p-10 border border-line-100 group">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <PieChart size={28} />
              </div>
              <h3 className="text-2xl font-bold text-smoke-900 mb-4">Sticky Ecosystem</h3>
              <p className="text-smoke-600 leading-relaxed">
                By combining interactive social video, instant one-tap checkout, and built-in creator analytics, we create a highly engaging loop that drives unprecedented conversion and retention rates.
              </p>
            </div>

            <div className="bento-card bg-white rounded-3xl p-10 border border-line-100 group">
              <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-bold text-smoke-900 mb-4">Rapid Path to Profitability</h3>
              <p className="text-smoke-600 leading-relaxed">
                Our creators see up to 10x higher conversion rates than traditional e-commerce. Every stream generates highly scalable revenue through transaction fees, tipping, and sponsored placements.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Elegant CTA */}
      <section id="invest" className="py-12 lg:py-16 bg-white text-smoke-900 relative overflow-hidden border-t border-line-100">
        {/* Subtle light leak */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-razzia-100/50 rounded-full blur-[120px] pointer-events-none" />
        
        <div ref={ctaReveal.ref} style={{ opacity: ctaReveal.isVisible ? 1 : 0, transform: ctaReveal.isVisible ? "none" : "translateY(20px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
          className="mx-auto w-full max-w-4xl px-6 text-center relative z-10">
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Ready to invest?
          </h2>
          <p className="text-xl text-smoke-600 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Let’s embark on this exciting journey together. We’d love to discuss the investment opportunities available and show you how you can play an essential role in our success.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button href="/landing/contact" className="h-14 px-10 text-base bg-razzia-500 text-white hover:bg-razzia-600 transition-colors shadow-[0_0_20px_rgba(255,51,102,0.3)] border-none rounded-xl">
              Schedule a Meeting
            </Button>
            <Button href="/landing/about" className="h-14 px-10 text-base !bg-transparent border border-line-200 !text-smoke-700 hover:bg-surface-50 transition-colors rounded-xl">
              View Master Plan
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
