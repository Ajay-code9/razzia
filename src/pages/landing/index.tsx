import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatPill } from "@/components/ui/StatPill";
import {
  Zap,
  ShieldCheck,
  Store,
  CheckCircle2,
  Star,
  ArrowRight,
  Truck,
  Clock,
  CreditCard,
  Lock,
  Smartphone,
  TrendingUp,
  Users,
} from "lucide-react";

/* ─── Data ─────────────────────────────────────────────────────── */

const reasons = [
  {
    icon: Smartphone,
    title: "Interactive live shows",
    body: "Watch local brands go live, interact in real-time, and see products in action before buying.",
  },
  {
    icon: CreditCard,
    title: "Instant in-stream checkout",
    body: "Buy items instantly while watching the stream without ever leaving the video interface.",
  },
  {
    icon: Zap,
    title: "Rapid local delivery",
    body: "Your purchases are dispatched immediately and delivered to your doorstep in minutes.",
  },
];

const featuredProducts = [
  {
    name: "Limited Edition Sneakers",
    price: "KES 8,500",
    seller: "Kicks City",
    rating: 4.9,
    reviews: 312,
    tag: "Live Drop",
    photo: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=360&fit=crop&auto=format",
    photoAlt: "Pair of stylish limited edition sneakers",
  },
  {
    name: "Noise-Cancelling Headphones",
    price: "KES 12,999",
    seller: "Tech Haven",
    rating: 4.8,
    reviews: 145,
    tag: "Flash Sale",
    photo: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=360&fit=crop&auto=format",
    photoAlt: "Premium wireless noise-cancelling headphones",
  },
  {
    name: "Vintage Denim Jacket",
    price: "KES 3,200",
    seller: "Thrift Kulture",
    rating: 4.7,
    reviews: 89,
    tag: "1 Left",
    photo: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=360&fit=crop&auto=format",
    photoAlt: "Stylish vintage denim jacket",
  },
];

const faqs = [
  {
    q: "How does live shopping work on Razzia?",
    a: "Simply join a live stream on the app. The seller broadcasts video on the top half of the screen, and you can browse and buy their featured products instantly on the bottom half.",
  },
  {
    q: "How fast is the delivery?",
    a: "Purchases made during live streams are prepared instantly. Our local riders pick them up and deliver them to your doorstep, often within 30 minutes of your purchase.",
  },
  {
    q: "Can anyone go live and sell?",
    a: "Yes! Whether you are a local boutique, a content creator, or a major brand, you can register as a vendor, list your products, and start broadcasting to customers.",
  },
  {
    q: "What payment options are supported?",
    a: "We support M-Pesa, Airtel Money, Visa, Mastercard, and Bank Transfers. Checkout happens seamlessly within the live stream interface without interrupting the video.",
  },
];

const testimonials = [
  {
    name: "Angela M.",
    role: "Customer",
    quote: "I love being able to see the actual fabric of the clothes on the live stream before I buy. The instant checkout is dangerous but so convenient!",
    photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Brian K.",
    role: "Vendor",
    quote: "Going live completely changed my business. I can demonstrate my tech gadgets to hundreds of people at once and see sales coming in real-time.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Dennis O.",
    role: "Driver",
    quote: "Live stream drops mean a huge rush of orders all from the same location. It's incredibly efficient for me to pick up and deliver in batches.",
    photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&h=80&fit=crop&auto=format",
  },
];



/* ─── Hooks ─────────────────────────────────────────────────────── */

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

function useCountUp(target: number, start: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, visible } = useReveal();
  const count = useCountUp(value, visible);
  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl font-extrabold text-razzia-500">{visible ? count : 0}{suffix}</p>
      <p className="mt-1 text-sm text-smoke-600">{label}</p>
    </div>
  );
}

function Reveal({
  children, delay = 0, direction = "up", className = "",
}: {
  children: React.ReactNode; delay?: number; direction?: "up" | "left" | "right" | "none"; className?: string;
}) {
  const { ref, visible } = useReveal();
  const translate = direction === "up" ? "translateY(28px)" : direction === "left" ? "translateX(-28px)" : direction === "right" ? "translateX(28px)" : "none";
  return (
    <div ref={ref} className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : translate,
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s cubic-bezier(.22,1,.36,1) ${delay}ms`,
      }}>
      {children}
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState<"customers" | "vendors" | "drivers">("customers");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const tabContent = {
    customers: {
      title: "For Customers",
      desc: "Join live streams, interact with sellers in real-time, and purchase directly from the video feed.",
      steps: [
        { label: "Join the live drop", detail: "Swipe through live streams of your favorite local brands and creators." },
        { label: "Engage in real-time", detail: "Ask questions, see product demos, and chat with the host instantly." },
        { label: "One-click in-stream order", detail: "Buy the featured item directly on the screen using M-Pesa or card." },
        { label: "Rapid delivery", detail: "Watch your assigned rider bring your new purchase straight to you." },
      ],
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&h=380&fit=crop&auto=format",
      imageAlt: "Customer watching a live stream on their mobile device",
    },
    vendors: {
      title: "For Creators & Vendors",
      desc: "Go live from your phone. Broadcast on the top half of the screen while your products are listed below for instant sales.",
      steps: [
        { label: "Setup your live shop", detail: "Add your exciting products and set up your seller profile." },
        { label: "Go live instantly", detail: "Start broadcasting directly from your smartphone camera." },
        { label: "Showcase & sell", detail: "Demonstrate products live. Items appear below the video for buyers." },
        { label: "Instant payouts", detail: "Get paid straight to your bank or mobile money account instantly." },
      ],
      image: "https://images.unsplash.com/photo-1516280440502-861f4384a513?w=500&h=380&fit=crop&auto=format",
      imageAlt: "Vendor broadcasting a live product showcase on their phone",
    },
    drivers: {
      title: "For Drivers",
      desc: "Deliver exciting products purchased during live drops, keeping the momentum going from stream to doorstep.",
      steps: [
        { label: "Apply online", detail: "Submit your license and vehicle registration document." },
        { label: "Go online", detail: "Receive instant notifications for nearby pickup tasks from live sellers." },
        { label: "Deliver route", detail: "Follow the optimized maps for quick customer dropoffs." },
        { label: "Track earnings", detail: "Monitor your delivery tips and base pay balance." },
      ],
      image: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=700&h=520&fit=crop&auto=format",
      imageAlt: "Delivery rider on motorcycle fulfilling orders",
    },
  };

  return (
    <Layout>
      {/* ── Background Blobs ────────────────────────────────────────── */}
      <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden -z-20 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-razzia-100/60 blur-[100px] animate-wave-morph mix-blend-multiply" />
        <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-razzia-50/80 blur-[80px] animate-wave-morph mix-blend-multiply" style={{ animationDelay: '2s' }} />
      </div>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-6 pt-20 pb-16 md:grid-cols-2 lg:pt-24 lg:pb-20">
        
        {/* Left */}
        <div>

          <h1 style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(24px)", transition: "opacity .7s ease 120ms, transform .7s cubic-bezier(.22,1,.36,1) 120ms" }}
            className="mt-5 text-4xl font-extrabold leading-tight text-smoke-900 md:text-6xl">
            Experience live{" "}
            <span className="relative text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, var(--razzia-500), #ff8fa3)" }}>
              shopping
            </span>{" "}
            from local creators.
          </h1>

          <p style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(20px)", transition: "opacity .7s ease 240ms, transform .7s cubic-bezier(.22,1,.36,1) 240ms" }}
            className="mt-5 max-w-xl text-lg text-smoke-600 leading-relaxed">
            Watch vendors showcase products live on video. See it in action, interact in real-time, and buy it instantly with seamless delivery.
          </p>

          <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(18px)", transition: "opacity .7s ease 360ms, transform .7s cubic-bezier(.22,1,.36,1) 360ms" }}
            className="mt-8 flex flex-wrap gap-3">
            <div className="relative overflow-hidden rounded-full">
              <Button href="/landing/register">Start selling</Button>
              <div className="shimmer-btn pointer-events-none absolute inset-0" />
            </div>
            <Button href="/landing/shop" variant="secondary">
              Explore shop <ArrowRight className="ml-1 inline h-4 w-4" />
            </Button>
          </div>

          <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(14px)", transition: "opacity .7s ease 480ms, transform .7s cubic-bezier(.22,1,.36,1) 480ms" }}
            className="mt-8 flex flex-wrap gap-3">
            <StatPill value="2x" label="faster deliveries" />
            <StatPill value="24/7" label="order support" />
            <StatPill value="100%" label="secure payments" />
          </div>
        </div>

        {/* Right */}
        <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(30px) scale(.97)", transition: "opacity .8s ease 200ms, transform .8s cubic-bezier(.22,1,.36,1) 200ms" }}
          className="relative rounded-[2.5rem] bg-white p-4 soft-shadow">
          <div className="relative mx-auto max-w-sm overflow-hidden rounded-[2rem]">
            <Image
              alt="Live stream creator interacting with audience"
              className="h-72 w-full object-cover rounded-[2rem] hover:scale-105 transition-transform duration-700"
              height={460}
              src="https://images.unsplash.com/photo-1621570169569-8fc97e33e143?w=600&h=460&fit=crop&auto=format"
              width={460}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-razzia-900/40 to-transparent" />
          </div>

        </div>
      </section>

      {/* ── Trust ticker ──────────────────────────────────────── */}
      <section className="overflow-hidden border-y border-razzia-100 bg-razzia-50 py-5">
        <div className="animate-marquee-x flex w-max gap-12 px-6 text-sm font-semibold text-razzia-600 uppercase tracking-widest">
          {[...Array(2)].map((_, r) =>
            ["Trusted by 500+ creators", "Live interactive streams", "Instant in-video checkout", "Real-time engagement", "Rapid local delivery", "Swipe through live drops"].map((t) => (
              <span className="shrink-0 flex items-center gap-2" key={`${r}-${t}`}>
                <CheckCircle2 className="h-4 w-4 text-razzia-500 shrink-0" />
                {t}
              </span>
            ))
          )}
        </div>
      </section>

      {/* ── Stats bar ─────────────────────────────────────────── */}
      <section className="bg-surface-50 border-b border-line-100 py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatedStat value={500} suffix="+" label="Active vendor partners" />
          <AnimatedStat value={1200} suffix="+" label="Daily orders fulfilled" />
          <AnimatedStat value={5} suffix="" label="Cities across East Africa" />
          <AnimatedStat value={99} suffix="%" label="Payment success rate" />
        </div>
      </section>

      {/* ── Why Razzia ────────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20" id="about">
        <Reveal direction="up">
          <SectionHeading
            description="The most engaging way to shop online, bringing the human connection back to e-commerce."
            eyebrow="Why choose Razzia"
            title="Live video showcases, instant purchases, real-time engagement"
          />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={i * 100} direction="up">
                <Card className="bento-card group h-full p-8 border border-line-100">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-razzia-50 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-7 w-7 text-razzia-500" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-xl font-bold text-smoke-900 group-hover:text-razzia-500 transition-colors">{reason.title}</h3>
                  <p className="mt-3 leading-relaxed text-smoke-600">{reason.body}</p>
                  <div className="mt-4 h-0.5 w-0 bg-razzia-500 transition-all duration-500 group-hover:w-full rounded-full" />
                </Card>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 bg-slate-50 border-y border-line-100" id="how-it-works">

        {/* Background grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, black 1px, transparent 0)", backgroundSize: "32px 32px" }} />

        {/* Decorative glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[600px] rounded-full bg-razzia-100 opacity-60 blur-[100px]" />

        <div className="relative mx-auto w-full max-w-7xl px-6">

          {/* Header */}
          <Reveal direction="up">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-razzia-100 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-razzia-500 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-razzia-500 pulse-btn inline-block" />
                How it works
              </span>
              <h2 className="mt-5 text-4xl font-extrabold text-smoke-900 md:text-5xl">
                Simple steps for{" "}
                <span className="text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(135deg,#ea3b0c,#ff6f43)" }}>
                  everyone.
                </span>
              </h2>
              <p className="mt-4 text-smoke-600 max-w-xl mx-auto">
                Each role has a clear, guided flow from sign-up to success — built for speed.
              </p>
            </div>
          </Reveal>

          {/* Role tabs */}
          <Reveal delay={120}>
            <div className="mt-10 flex justify-center">
              <div className="inline-flex rounded-2xl border border-line-100 bg-white p-1.5 gap-1 shadow-sm">
                {(["customers", "vendors", "drivers"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    type="button"
                    className={`relative overflow-hidden rounded-xl px-7 py-2.5 text-sm font-semibold transition-all duration-300 ${
                      activeTab === tab
                        ? "bg-razzia-500 text-white shadow-lg shadow-razzia-500/30"
                        : "text-smoke-600 hover:text-smoke-900 hover:bg-razzia-50"
                    }`}
                  >
                    {activeTab === tab && <div className="shimmer-btn pointer-events-none absolute inset-0" />}
                    {tab === "customers" ? "Customers" : tab === "vendors" ? "Vendors" : "Drivers"}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Main content */}
          <Reveal delay={200}>
            <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[1fr_1.1fr]">

              {/* Left: Steps panel */}
              <div className="flex flex-col justify-between rounded-3xl border border-line-100 bg-white p-8 shadow-sm">

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-razzia-500 mb-1">
                    {activeTab === "customers" ? "Customer journey" : activeTab === "vendors" ? "Vendor journey" : "Driver journey"}
                  </p>
                  <h3 className="text-2xl font-extrabold text-smoke-900">
                    {tabContent[activeTab].title}
                  </h3>
                  <p className="mt-2 text-sm text-smoke-600 leading-relaxed">
                    {tabContent[activeTab].desc}
                  </p>
                </div>

                {/* Steps with animated connector */}
                <ol className="mt-8 space-y-0">
                  {tabContent[activeTab].steps.map((step, index) => (
                    <li key={step.label} className="flex gap-4">
                      {/* Step indicator + connector line */}
                      <div className="flex flex-col items-center">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-razzia-500 text-xs font-extrabold text-white shadow-lg shadow-razzia-500/30 ring-4 ring-razzia-50">
                          {index + 1}
                        </div>
                        {index < tabContent[activeTab].steps.length - 1 && (
                          <div className="mt-1 w-px flex-1 bg-gradient-to-b from-razzia-200 to-transparent" style={{ minHeight: "28px" }} />
                        )}
                      </div>
                      {/* Step text */}
                      <div className={`pb-6 ${index === tabContent[activeTab].steps.length - 1 ? "pb-0" : ""}`}>
                        <h4 className="text-sm font-bold text-smoke-900">{step.label}</h4>
                        <p className="mt-1 text-xs leading-relaxed text-smoke-500">{step.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                {/* Bottom CTA */}
                <div className="mt-8 pt-6 border-t border-line-100">
                  <Button
                    href={activeTab === "customers" ? "/landing/shop" : activeTab === "vendors" ? "/landing/register" : "/landing/driver"}
                    className="!bg-razzia-500 !text-white !font-semibold hover:!bg-razzia-600 w-full justify-center"
                  >
                    {activeTab === "customers" ? "Start ordering" : activeTab === "vendors" ? "Become a vendor" : "Apply as driver"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Right: Image with overlay stats */}
              <div className="relative overflow-hidden rounded-3xl min-h-[420px] lg:min-h-0">
                <Image
                  alt={tabContent[activeTab].imageAlt}
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-700"
                  fill
                  src={tabContent[activeTab].image}
                  style={{ objectFit: "cover" }}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

                {/* Floating stat cards */}
                {activeTab === "customers" && (
                  <>
                    <div className="float-a absolute top-5 right-5 flex items-center gap-3 rounded-2xl border border-line-100 bg-white/95 px-4 py-3 backdrop-blur-md shadow-xl">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-smoke-900">Order confirmed</p>
                        <p className="text-[10px] text-smoke-600">Delivery in 28 min</p>
                      </div>
                    </div>
                    <div className="float-b absolute bottom-16 left-5 flex items-center gap-3 rounded-2xl border border-line-100 bg-white/95 px-4 py-3 backdrop-blur-md shadow-xl">
                      <Star className="h-5 w-5 text-amber-500 fill-current shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-smoke-900">4.9 avg rating</p>
                        <p className="text-[10px] text-smoke-600">From 12,400+ orders</p>
                      </div>
                    </div>
                  </>
                )}
                {activeTab === "vendors" && (
                  <>
                    <div className="float-a absolute top-5 right-5 flex items-center gap-3 rounded-2xl border border-line-100 bg-white/95 px-4 py-3 backdrop-blur-md shadow-xl">
                      <TrendingUp className="h-5 w-5 text-emerald-500 shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-smoke-900">KES 84,320</p>
                        <p className="text-[10px] text-smoke-600">Today&apos;s revenue</p>
                      </div>
                    </div>
                    <div className="float-b absolute bottom-16 left-5 flex items-center gap-3 rounded-2xl border border-line-100 bg-white/95 px-4 py-3 backdrop-blur-md shadow-xl">
                      <Store className="h-5 w-5 text-razzia-500 shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-smoke-900">48 active orders</p>
                        <p className="text-[10px] text-smoke-600">Across 3 product lines</p>
                      </div>
                    </div>
                  </>
                )}
                {activeTab === "drivers" && (
                  <>
                    <div className="float-a absolute top-5 right-5 flex items-center gap-3 rounded-2xl border border-line-100 bg-white/95 px-4 py-3 backdrop-blur-md shadow-xl">
                      <Truck className="h-5 w-5 text-razzia-500 shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-smoke-900">14 deliveries</p>
                        <p className="text-[10px] text-smoke-600">Completed today</p>
                      </div>
                    </div>
                    <div className="float-b absolute bottom-16 left-5 flex items-center gap-3 rounded-2xl border border-line-100 bg-white/95 px-4 py-3 backdrop-blur-md shadow-xl">
                      <Zap className="h-5 w-5 text-amber-500 shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-smoke-900">KES 4,850 earned</p>
                        <p className="text-[10px] text-smoke-600">Payout ready now</p>
                      </div>
                    </div>
                  </>
                )}

                {/* Bottom label */}
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
                  <p className="text-xs font-semibold text-white/80 uppercase tracking-widest">
                    {tabContent[activeTab].imageAlt}
                  </p>
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </section>


      {/* ── Marketplace Showcase ─────────────────────────────── */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20" id="showcase">
        <Reveal direction="up">
          <SectionHeading
            description="Explore high-quality grocery baskets and daily items from our top neighborhood stores."
            eyebrow="Marketplace Showcase"
            title="Trending packs and fresh products near you"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product, i) => (
            <Reveal key={product.name} delay={i * 120} direction="up">
              <Card className="group flex h-full flex-col overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_24px_50px_rgba(20,20,20,0.09)] transition-all duration-400 !p-0">
                {/* Product photo */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    alt={product.photoAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    height={360}
                    src={product.photo}
                    width={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <span className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-smoke-900 shadow-sm border border-line-100/50">
                    {product.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-1.5">
                    <span className="flex text-amber-400">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </span>
                    <span className="text-xs font-bold text-smoke-900">{product.rating}</span>
                    <span className="text-[10px] text-smoke-600">({product.reviews} reviews)</span>
                  </div>

                  <h3 className="mt-3 text-lg font-bold text-smoke-900 transition-colors group-hover:text-razzia-500">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-xs text-smoke-600">
                    Store: <span className="font-semibold text-smoke-900">{product.seller}</span>
                  </p>

                  <div className="mt-auto flex items-center justify-between border-t border-line-100/60 pt-4">
                    <span className="text-base font-extrabold text-razzia-600">{product.price}</span>
                    <Button className="!px-4 !py-2 !text-xs" variant="secondary" href="/landing/shop">
                      Order Now
                    </Button>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Payment channels ─────────────────────────────────── */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 border-t border-line-100" id="payment">
        <Reveal direction="up">
          <SectionHeading
            description="Checkout with the method your customers already trust."
            eyebrow="Payment options"
            title="Pay your way with secure channels"
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-5">

          {/* M-Pesa */}
          <Reveal delay={0} direction="up">
            <Card className="group text-center hover:border-razzia-300 hover:shadow-[0_14px_30px_rgba(20,20,20,0.06)] hover:-translate-y-1 transition-all duration-300">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00a550]/10 transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 64 64" className="h-9 w-9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="64" height="64" rx="12" fill="#00a550"/>
                  <text x="50%" y="38" textAnchor="middle" fill="white" fontFamily="Arial Black, sans-serif" fontSize="11" fontWeight="900" letterSpacing="-0.5">M-PESA</text>
                  <path d="M18 24 Q32 16 46 24" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="font-bold text-smoke-900">M-Pesa</p>
              <p className="mt-1 text-xs text-smoke-500">Instant mobile checkout</p>
            </Card>
          </Reveal>

          {/* Airtel Money */}
          <Reveal delay={80} direction="up">
            <Card className="group text-center hover:border-razzia-300 hover:shadow-[0_14px_30px_rgba(20,20,20,0.06)] hover:-translate-y-1 transition-all duration-300">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e40000]/10 transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 64 64" className="h-9 w-9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="64" height="64" rx="12" fill="#e40000"/>
                  {/* Airtel wave mark */}
                  <path d="M12 36 Q20 20 32 28 Q44 36 52 20" stroke="white" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <text x="50%" y="52" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontSize="9.5" fontWeight="700" letterSpacing="0.5">AIRTEL</text>
                </svg>
              </div>
              <p className="font-bold text-smoke-900">Airtel Money</p>
              <p className="mt-1 text-xs text-smoke-500">Airtel subscribers</p>
            </Card>
          </Reveal>

          {/* Visa */}
          <Reveal delay={160} direction="up">
            <Card className="group text-center hover:border-razzia-300 hover:shadow-[0_14px_30px_rgba(20,20,20,0.06)] hover:-translate-y-1 transition-all duration-300">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1a1f71]/10 transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 80 50" className="h-10 w-14" xmlns="http://www.w3.org/2000/svg">
                  <rect width="80" height="50" rx="7" fill="#1a1f71"/>
                  <text x="50%" y="34" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="900" fontStyle="italic" letterSpacing="1">VISA</text>
                </svg>
              </div>
              <p className="font-bold text-smoke-900">Visa</p>
              <p className="mt-1 text-xs text-smoke-500">Secure card payment</p>
            </Card>
          </Reveal>

          {/* Mastercard */}
          <Reveal delay={240} direction="up">
            <Card className="group text-center hover:border-razzia-300 hover:shadow-[0_14px_30px_rgba(20,20,20,0.06)] hover:-translate-y-1 transition-all duration-300">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 52 34" className="h-9 w-14" xmlns="http://www.w3.org/2000/svg">
                  {/* Left circle (red) */}
                  <circle cx="19" cy="17" r="15" fill="#EB001B"/>
                  {/* Right circle (orange) */}
                  <circle cx="33" cy="17" r="15" fill="#F79E1B"/>
                  {/* Overlap blend — orange-red */}
                  <path d="M26 5.8 A15 15 0 0 1 26 28.2 A15 15 0 0 1 26 5.8Z" fill="#FF5F00"/>
                </svg>
              </div>
              <p className="font-bold text-smoke-900">Mastercard</p>
              <p className="mt-1 text-xs text-smoke-500">Global card network</p>
            </Card>
          </Reveal>

          {/* Bank Transfer */}
          <Reveal delay={320} direction="up">
            <Card className="group text-center hover:border-razzia-300 hover:shadow-[0_14px_30px_rgba(20,20,20,0.06)] hover:-translate-y-1 transition-all duration-300">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 24 24" className="h-7 w-7 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 21h18"/>
                  <path d="M3 10h18"/>
                  <path d="M5 6l7-3 7 3"/>
                  <path d="M4 10v11"/>
                  <path d="M20 10v11"/>
                  <path d="M8 14v3"/>
                  <path d="M12 14v3"/>
                  <path d="M16 14v3"/>
                </svg>
              </div>
              <p className="font-bold text-smoke-900">Bank Transfer</p>
              <p className="mt-1 text-xs text-smoke-500">Direct bank payment</p>
            </Card>
          </Reveal>

        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="bg-white border-y border-line-100 py-20" id="testimonials">
        <div className="mx-auto w-full max-w-7xl px-6">
          <Reveal direction="up">
            <SectionHeading
              description="Real feedback from people using Razzia every week."
              eyebrow="What people say"
              title="Trusted by customers, sellers, and riders"
            />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item, i) => (
              <Reveal key={item.name} delay={i * 110} direction="up">
                <Card className="group flex h-full flex-col hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(20,20,20,0.07)] transition-all duration-300">
                  <div className="flex text-amber-400 gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-smoke-600 italic">&ldquo;{item.quote}&rdquo;</p>
                  <div className="mt-5 flex items-center gap-3 border-t border-line-100 pt-4">
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                      <Image alt={item.name} className="h-full w-full object-cover" height={40} src={item.photo} width={40} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-smoke-900">{item.name}</p>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-smoke-600">{item.role}</p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-4xl px-6 py-20" id="faq">
        <Reveal direction="up">
          <SectionHeading
            description="Got questions about ordering, payments, or setting up a vendor account? We have answers."
            eyebrow="Help & Support"
            title="Frequently Asked Questions"
          />
        </Reveal>
        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <Reveal key={index} delay={index * 80} direction="up">
                <div className={`overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen ? "border-razzia-200 shadow-[0_8px_24px_rgba(234,59,12,.08)]" : "border-line-100 bg-white"}`}>
                  <button
                    className="flex w-full items-center justify-between px-6 py-5 text-left font-bold text-smoke-900 outline-none transition-colors hover:text-razzia-500"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    type="button"
                  >
                    <span>{faq.q}</span>
                    <span className={`ml-4 shrink-0 flex h-6 w-6 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? "border-razzia-300 bg-razzia-50 text-razzia-500 rotate-180" : "border-line-100 text-smoke-600"}`}>
                      <ArrowRight className={`h-3 w-3 rotate-90 transition-transform duration-300 ${isOpen ? "text-razzia-500" : "text-smoke-400"}`} />
                    </span>
                  </button>
                  <div className={`overflow-hidden px-6 transition-all duration-400 ease-in-out ${isOpen ? "max-h-[200px] pb-5 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="text-sm leading-relaxed text-smoke-600">{faq.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-16">
        <Reveal direction="up">
          <div className="relative overflow-hidden rounded-3xl text-white"
            style={{ background: "linear-gradient(135deg, var(--razzia-500) 0%, var(--razzia-600) 55%, var(--razzia-700) 100%)" }}>
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-white/30 to-transparent pointer-events-none" />
            <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white opacity-10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-white opacity-10 blur-2xl" />

            <div className="relative grid items-center gap-10 px-8 py-14 lg:grid-cols-[1.3fr_1fr] lg:py-16">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/80 pulse-btn inline-block" />
                  Mobile first experience
                </span>

                <h2 className="mt-5 text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
                  Download Razzia.<br />
                  <span className="text-white/70">Run daily commerce</span><br />
                  from your phone.
                </h2>

                <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75">
                  Manage shopping, selling, and delivery in one platform made for local communities — available anywhere, anytime.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <div className="relative overflow-hidden rounded-full">
                    <Button className="!bg-white !text-razzia-600 !font-bold !px-6 !py-3 !text-sm hover:!bg-white/90" href="/landing/login">
                      Get started free
                    </Button>
                    <div className="shimmer-btn pointer-events-none absolute inset-0" />
                  </div>
                  <Button
                    className="!border-white/30 !bg-white/15 !text-white !font-semibold !px-6 !py-3 !text-sm hover:!bg-white/25 hover:!border-white/50"
                    href="/landing/driver"
                    variant="secondary"
                  >
                    Join as driver <ArrowRight className="ml-1 inline h-4 w-4" />
                  </Button>
                </div>
                <p className="mt-6 text-xs text-white/50">Free to join · No setup fees · Cancel anytime</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { Icon: Clock, title: "Under 30 min", desc: "Average delivery time" },
                  { Icon: Lock, title: "100% Secure", desc: "Encrypted payments" },
                  { Icon: Smartphone, title: "M-Pesa ready", desc: "Instant checkout" },
                  { Icon: Users, title: "1,800+ Riders", desc: "Always nearby" },
                ].map((f) => (
                  <div
                    key={f.title}
                    className="flex flex-col gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
                  >
                    <f.Icon className="h-6 w-6 text-white/80" strokeWidth={1.75} />
                    <div>
                      <p className="text-sm font-bold text-white">{f.title}</p>
                      <p className="text-xs text-white/65">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
}
