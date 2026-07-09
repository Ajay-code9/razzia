import { useEffect, useRef, useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/Button";
import { 
  ShieldCheck, Zap, Wallet, 
  LineChart, Smartphone, CreditCard, Lock, 
  CheckCircle2, TrendingUp, Building2
} from "lucide-react";

// --- Hook for scroll animations ---
function useReveal() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

// --- Sections ---

function HeroSection() {
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => { 
    const timer = setTimeout(() => setHeroVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0d0d0d]">
      <style dangerouslySetInnerHTML={{__html: `
        .animated-gradient {
          background-size: 200% auto;
          animation: shine 4s linear infinite;
        }
        @keyframes shine {
          to { background-position: 200% center; }
        }
        .float-a { animation: floatA 6s ease-in-out infinite; }
        .float-b { animation: floatB 7s ease-in-out infinite; }
        @keyframes floatA {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes floatB {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(12px); }
        }
        .shimmer-btn::before {
          content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent);
          transform: skewX(-20deg); animation: shimmerBtn 3s infinite;
        }
        @keyframes shimmerBtn {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        .pulse-dot { animation: pulseDot 2s infinite; }
        @keyframes pulseDot {
          0% { box-shadow: 0 0 0 0 rgba(234, 59, 12, 0.4); }
          70% { box-shadow: 0 0 0 6px rgba(234, 59, 12, 0); }
          100% { box-shadow: 0 0 0 0 rgba(234, 59, 12, 0); }
        }
      `}} />

      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-razzia-600 opacity-[0.1] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[600px] rounded-full bg-amber-600 opacity-[0.05] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 lg:pt-20 lg:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* Left Content */}
          <div>
            <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(20px)", transition: "opacity .7s ease 0ms, transform .7s ease 0ms" }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-razzia-400">
                <span className="h-1.5 w-1.5 rounded-full bg-razzia-500 pulse-dot inline-block" />
                Wallet & Payments
              </span>
            </div>

            <h1 style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(28px)", transition: "opacity .7s ease 120ms, transform .7s ease 120ms" }}
              className="mt-6 text-4xl font-extrabold leading-[1.1] text-white md:text-5xl lg:text-6xl">
              The engine powering{" "}
              <span className="text-transparent bg-clip-text animated-gradient block mt-1"
                style={{ backgroundImage: "linear-gradient(135deg, #ff6f43, #ea3b0c, #c9330a, #ff6f43)" }}>
                street commerce.
              </span>
            </h1>

            <p style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(20px)", transition: "opacity .7s ease 240ms, transform .7s ease 240ms" }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-white/60">
              Experience fast, secure, and seamless digital payments inside the Razzia ecosystem. Whether you&apos;re a shopper, vendor, or rider, money moves at the speed of the city.
            </p>

            <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(16px)", transition: "opacity .7s ease 360ms, transform .7s ease 360ms" }}
              className="mt-8 flex flex-wrap gap-4">
              <div className="relative overflow-hidden rounded-full">
                <Button href="/landing/register" className="!px-7 !py-3.5 !text-base">Get Started</Button>
                <div className="shimmer-btn pointer-events-none absolute inset-0" />
              </div>
              <Button href="/landing/contact" variant="secondary"
                className="!border-white/15 !text-white !bg-white/5 hover:!bg-white/10 !px-7 !py-3.5 !text-base">
                View Documentation
              </Button>
            </div>
          </div>

          {/* Right Visual (Mock App/Wallet UI) */}
          <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "scale(0.95)", transition: "opacity 1s ease 200ms, transform 1s ease 200ms" }}
            className="relative hidden lg:block h-[500px]">
            
            {/* Main Phone Frame */}
            <div className="absolute top-4 right-10 w-[280px] h-[580px] rounded-[40px] border-[8px] border-[#1a1a1a] bg-[#0d0d0d] shadow-2xl overflow-hidden z-10"
              style={{ boxShadow: "0 25px 50px -12px rgba(234, 59, 12, 0.2)" }}>
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1a1a] rounded-b-2xl z-20" />
              
              {/* App Screen */}
              <div className="p-5 pt-10 h-full flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div className="h-8 w-8 rounded-full bg-white/10" />
                  <div className="h-5 w-16 rounded-full bg-white/10" />
                </div>
                
                <div className="mt-2 rounded-2xl bg-gradient-to-br from-razzia-500 to-razzia-700 p-5 shadow-lg">
                  <p className="text-white/80 text-xs font-medium">Available Balance</p>
                  <p className="text-white text-3xl font-bold mt-1 tracking-tight">KES 24,500</p>
                  <div className="mt-4 flex gap-2">
                    <div className="flex-1 h-8 rounded-lg bg-white/20" />
                    <div className="flex-1 h-8 rounded-lg bg-white/20" />
                  </div>
                </div>

                <p className="text-white font-semibold text-sm mt-2">Recent Activity</p>
                <div className="flex flex-col gap-3">
                  {[
                    { label: "Mama Mboga", amount: "-KES 450", time: "Today, 14:30" },
                    { label: "Wallet Top-up", amount: "+KES 5,000", time: "Today, 09:15", green: true },
                    { label: "City Butchery", amount: "-KES 1,200", time: "Yesterday" },
                    { label: "Rider Tip", amount: "-KES 100", time: "Yesterday" },
                  ].map((tx, i) => (
                    <div key={i} className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-white/10" />
                        <div>
                          <p className="text-white text-xs font-medium">{tx.label}</p>
                          <p className="text-white/40 text-[10px]">{tx.time}</p>
                        </div>
                      </div>
                      <p className={`text-xs font-bold ${tx.green ? 'text-emerald-400' : 'text-white'}`}>{tx.amount}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="float-a absolute top-20 right-72 z-20 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/80 px-4 py-3 backdrop-blur-md shadow-2xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Payment Sent</p>
                <p className="text-xs text-white/50">Instant transfer to vendor</p>
              </div>
            </div>

            <div className="float-b absolute bottom-32 -right-8 z-20 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/80 px-4 py-3 backdrop-blur-md shadow-2xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/20 text-amber-400">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Driver Earnings</p>
                <p className="text-xs text-white/50">+ KES 3,200 today</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Wave bottom separator */}
      <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-none" style={{ height: "60px" }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 C240,0 480,0 720,30 C960,60 1200,60 1440,30 L1440,60 L0,60 Z" fill="#fff" />
        </svg>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const { ref, visible } = useReveal();
  
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "One-Click Checkout",
      desc: "Shoppers complete purchases instantly. Send an M-Pesa push directly to their phone, zero friction at the cart.",
      color: "text-amber-400",
      bg: "bg-amber-400/10"
    },
    {
      icon: <Wallet className="h-6 w-6" />,
      title: "Vendor Payouts",
      desc: "Vendors aren't kept waiting. Earnings hit their digital wallets instantly upon delivery confirmation, ready to withdraw.",
      color: "text-emerald-400",
      bg: "bg-emerald-400/10"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Driver Wallet",
      desc: "Riders manage their daily cash flow, tips, and delivery fees in one place, cashing out whenever they need to.",
      color: "text-blue-400",
      bg: "bg-blue-400/10"
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Unified Ledger",
      desc: "A single, transparent source of truth for all transactions. Export records, track expenses, and monitor growth.",
      color: "text-purple-400",
      bg: "bg-purple-400/10"
    }
  ];

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-smoke-900 md:text-4xl">Built for the hustle.</h2>
          <p className="mt-4 text-lg text-smoke-600">
            Razzia combines the convenience of a digital wallet with the infrastructure needed to power thousands of local businesses.
          </p>
        </div>

        <div ref={ref} className="mt-16 grid gap-6 md:grid-cols-2">
          {features.map((f, i) => (
            <div key={i} 
              style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 100}ms` }}
              className="group relative overflow-hidden rounded-3xl border border-line-100 bg-surface-50 p-8 transition-all hover:border-razzia-200 hover:shadow-xl hover:bg-white">
              <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${f.bg} ${f.color} transition-transform group-hover:scale-110 group-hover:-rotate-3`}>
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-smoke-900">{f.title}</h3>
              <p className="mt-3 leading-relaxed text-smoke-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const { ref, visible } = useReveal();
  
  return (
    <section className="bg-surface-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-razzia-500">The Workflow</span>
          <h2 className="mt-3 text-3xl font-extrabold text-smoke-900 md:text-4xl">Start moving money in seconds.</h2>
        </div>

        <div ref={ref} className="grid gap-8 md:grid-cols-3">
          {[
            { step: "01", title: "Connect", desc: "Link your preferred payment method—M-Pesa, Airtel Money, or Card—to your Razzia account securely." },
            { step: "02", title: "Transact", desc: "Pay for local goods, cover delivery fees, or tip riders instantly with one tap during checkout." },
            { step: "03", title: "Track", desc: "Monitor your spending, manage vendor payouts, and export transaction histories from your dashboard." }
          ].map((s, i) => (
            <div key={i}
              style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: `all 0.6s ease ${i * 150}ms` }}
              className="relative rounded-3xl bg-white p-8 shadow-sm border border-line-100">
              <div className="mb-4 text-5xl font-black text-line-100">{s.step}</div>
              <h3 className="text-xl font-bold text-smoke-900">{s.title}</h3>
              <p className="mt-3 text-smoke-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SecuritySection() {
  const { ref, visible } = useReveal();

  return (
    <section className="relative overflow-hidden bg-[#0d0d0d] py-24">
      {/* Background styling */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[800px] rounded-full bg-razzia-600 opacity-[0.05] blur-[100px]" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          
          <div ref={ref}>
            <span className="text-sm font-bold uppercase tracking-widest text-razzia-400">Security & Compliance</span>
            <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl leading-tight">
              Bank-grade security.<br/>
              <span className="text-white/40">Street-level speed.</span>
            </h2>
            <p className="mt-6 text-lg text-white/50 leading-relaxed">
              We use industry-leading security protocols to protect every transaction. Your data is encrypted, your funds are safeguarded, and our systems actively detect fraud before it happens.
            </p>
            
            <div className="mt-10 flex flex-col gap-5">
              {[
                { title: "256-bit SSL Encryption", desc: "All data and transactions are securely encrypted end-to-end." },
                { title: "CBK Compliant Partners", desc: "We operate in strict accordance with Central Bank of Kenya regulations." },
                { title: "AI Fraud Prevention", desc: "Real-time monitoring flags anomalous spending patterns instantly." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4" style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateX(-20px)", transition: `all 0.5s ease ${i * 150}ms` }}>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-razzia-500/20 text-razzia-400">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                    <p className="mt-1 text-sm text-white/40">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4" style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "scale(0.95)", transition: "all 0.8s ease 200ms" }}>
            <div className="flex flex-col justify-center items-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
              <Lock className="h-10 w-10 text-emerald-400 mb-4" />
              <h4 className="text-lg font-bold text-white">Encrypted</h4>
              <p className="text-xs text-white/40 mt-2">End-to-end protection</p>
            </div>
            <div className="flex flex-col justify-center items-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm text-center translate-y-8">
              <Building2 className="h-10 w-10 text-blue-400 mb-4" />
              <h4 className="text-lg font-bold text-white">Regulated</h4>
              <p className="text-xs text-white/40 mt-2">Compliant operations</p>
            </div>
            <div className="col-span-2 flex justify-center items-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm mt-4">
              <div className="text-center flex gap-6 items-center flex-wrap justify-center">
                <span className="text-white/60 font-semibold flex items-center gap-2"><CreditCard className="w-5 h-5"/> Visa / Mastercard</span>
                <span className="text-white/60 font-semibold flex items-center gap-2"><Smartphone className="w-5 h-5"/> M-Pesa / Airtel</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[40px] bg-[#0d0d0d] px-8 py-20 text-center shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-razzia-600/20 to-transparent opacity-50" />
          
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold text-white md:text-5xl tracking-tight">
              Ready to power up your payments?
            </h2>
            <p className="mt-6 text-lg text-white/60">
              Join the thousands of local businesses and shoppers trusting Razzia Pay for fast, secure, and reliable digital transactions.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/landing/register" className="!px-8 !py-4 !text-base">
                Create Free Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function RazziaPayPage() {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SecuritySection />
      <CTASection />
    </Layout>
  );
}
