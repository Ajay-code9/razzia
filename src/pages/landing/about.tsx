import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Heart, Eye, Zap, Globe, ShieldCheck, Users,
  CheckCircle2, ArrowRight, Award, Building2,
  Lock, Star,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

/* ─── Hooks ─────────────────────────────────────────────── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function useCountUp(target: number, start: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let t: number | null = null;
    const step = (ts: number) => {
      if (!t) t = ts;
      const p = Math.min((ts - t) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function Reveal({
  children, delay = 0, direction = "up", className = "",
}: {
  children: React.ReactNode; delay?: number;
  direction?: "up" | "left" | "right" | "none"; className?: string;
}) {
  const { ref, visible } = useReveal();
  const t = direction === "up" ? "translateY(32px)"
    : direction === "left" ? "translateX(-32px)"
    : direction === "right" ? "translateX(32px)" : "none";
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "none" : t,
      transition: `opacity .65s ease ${delay}ms, transform .65s cubic-bezier(.22,1,.36,1) ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

function Counter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { ref, visible } = useReveal();
  const count = useCountUp(target, visible);
  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-extrabold text-razzia-500 md:text-5xl tabular-nums">
        {visible ? count.toLocaleString() : 0}{suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-smoke-500">{label}</p>
    </div>
  );
}

/* ─── Data ───────────────────────────────────────────────── */
const values = [
  { icon: Heart, title: "Community First", body: "Every feature we build is designed with the neighborhood in mind — empowering local businesses, not just big corporations." },
  { icon: Eye, title: "Radical Transparency", body: "No hidden fees. No vague pricing. Every vendor and driver knows exactly what they earn and what Razzia takes." },
  { icon: Zap, title: "Speed & Reliability", body: "We obsess over delivery times and uptime because we know your customers, and your business, depend on us." },
  { icon: Globe, title: "Inclusive Commerce", body: "Whether a small kiosk or a large grocery chain, Razzia gives you the same powerful tools to grow your reach." },
];

const milestones = [
  { year: "2022", title: "The Idea", body: "Razzia was founded in Nairobi by two tech entrepreneurs frustrated that great local shops had no digital presence." },
  { year: "2023", title: "Beta Launch", body: "Launched with 50 hand-picked vendor partners across Westlands. First 1,000 deliveries completed in 90 days." },
  { year: "2024", title: "City Scale", body: "Expanded to 500+ vendors, 1,200+ daily orders, and entered Mombasa and Kisumu markets." },
  { year: "2025", title: "Razzia Pay", body: "Launched our own payment layer enabling instant M-Pesa and bank payouts for vendors and drivers." },
  { year: "2026", title: "East Africa", body: "Operating in 5 cities with 15,000+ active users and partnerships with 2,500+ local merchants." },
];

const team = [
  { name: "Amara Osei", role: "Co-Founder & CEO", photo: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=300&h=300&fit=crop&auto=format" },
  { name: "Brian Mwangi", role: "Co-Founder & CTO", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&auto=format" },
  { name: "Cynthia Achieng", role: "Head of Operations", photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&fit=crop&auto=format" },
  { name: "David Kariuki", role: "Head of Growth", photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=300&fit=crop&auto=format" },
  { name: "Faith Njeri", role: "Head of Design", photo: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=300&h=300&fit=crop&auto=format" },
  { name: "Kevin Otieno", role: "Lead Engineer", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&auto=format" },
];

const trustBadges = [
  { icon: ShieldCheck, label: "SSL Secured", sub: "End-to-end encryption" },
  { icon: Building2, label: "CBK Licensed", sub: "Central Bank approved" },
  { icon: Award, label: "PCI Compliant", sub: "Payment card security" },
  { icon: Lock, label: "ISO 27001", sub: "Information security" },
];

const techPartners = [
  { name: "AWS", color: "#FF9900", abbr: "AWS" },
  { name: "Google Cloud", color: "#4285F4", abbr: "GCP" },
  { name: "M-Pesa", color: "#00a550", abbr: "MPesa" },
  { name: "Safaricom", color: "#00a550", abbr: "Saf" },
  { name: "Visa", color: "#1a1f71", abbr: "VISA" },
  { name: "Stripe", color: "#635BFF", abbr: "Str" },
];

/* ─── Page ───────────────────────────────────────────────── */
export default function AboutPage() {
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeroVisible(true), 80); return () => clearTimeout(t); }, []);

  return (
    <Layout>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse-ring{0%{box-shadow:0 0 0 0 rgba(234,59,12,.35);}70%{box-shadow:0 0 0 12px rgba(234,59,12,0);}100%{box-shadow:0 0 0 0 rgba(234,59,12,0);}}
        @keyframes float-a{0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);}}
        @keyframes float-b{0%,100%{transform:translateY(0);}50%{transform:translateY(10px);}}
        @keyframes shimmer{0%{background-position:-400px 0;}100%{background-position:400px 0;}}
        @keyframes gradient-shift{0%,100%{background-position:0% 50%;}50%{background-position:100% 50%;}}
        @keyframes scan-line{0%{transform:translateY(-100%);}100%{transform:translateY(600%);}}
        .pulse-dot{animation:pulse-ring 2s cubic-bezier(.66,0,0,1) infinite;}
        .float-a{animation:float-a 4s ease-in-out infinite;}
        .float-b{animation:float-b 5.5s ease-in-out infinite;}
        .shimmer-btn{background:linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent);background-size:400px 100%;animation:shimmer 2.4s linear infinite;}
        .animated-gradient{background-size:200% 200%;animation:gradient-shift 5s ease infinite;}
        .grid-bg{background-image:radial-gradient(circle at 1px 1px,#e5e7eb 1px,transparent 0);background-size:28px 28px;}
        .scan-line{animation:scan-line 3s ease-in-out infinite;}
      `}} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0d0d0d]">
        {/* Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px,white 1px,transparent 0)", backgroundSize: "32px 32px" }} />
        {/* Glow */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-razzia-600 opacity-[0.15] blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-[400px] rounded-full bg-razzia-800 opacity-[0.08] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 lg:pt-32 lg:pb-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left */}
            <div>
              <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(20px)", transition: "opacity .7s ease 0ms, transform .7s ease 0ms" }}>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-razzia-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-razzia-500 pulse-dot inline-block" />
                  About Razzia
                </span>
              </div>

              <h1 style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(28px)", transition: "opacity .7s ease 120ms, transform .7s ease 120ms" }}
                className="mt-3 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
                Built for the{" "}
                <span className="text-transparent bg-clip-text animated-gradient"
                  style={{ backgroundImage: "linear-gradient(135deg,#ff6f43,#ea3b0c,#c9330a,#ff6f43)" }}>
                  streets.
                </span>
                <br />
                <span className="text-white/70">Scaled for</span>{" "}
                the city.
              </h1>

              <p style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(20px)", transition: "opacity .7s ease 240ms, transform .7s ease 240ms" }}
                className="mt-3 max-w-lg text-base leading-relaxed text-white/55">
                Razzia was born from a simple frustration — great local shops were invisible online. We built the platform that brings your neighborhood marketplace to the modern customer.
              </p>

              <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(16px)", transition: "opacity .7s ease 360ms, transform .7s ease 360ms" }}
                className="mt-5 flex flex-wrap gap-3">
                <div className="relative overflow-hidden rounded-full">
                  <Button href="/landing/register" className="!px-7 !py-3">Join Razzia</Button>
                  <div className="shimmer-btn pointer-events-none absolute inset-0" />
                </div>
                <Button href="/landing/contact" variant="secondary"
                  className="!border-white/20 !text-white !bg-white/5 hover:!bg-white/10 !px-7 !py-3">
                  Get in touch <ArrowRight className="ml-2 inline h-4 w-4" />
                </Button>
              </div>

              {/* Quick stats */}
              <div style={{ opacity: heroVisible ? 1 : 0, transition: "opacity .7s ease 480ms" }}
                className="mt-6 flex flex-wrap gap-5 border-t border-white/10 pt-5">
                {[
                  { val: "15K+", label: "Active Users" },
                  { val: "2.5K+", label: "Vendors" },
                  { val: "50K+", label: "Deliveries" },
                  { val: "5", label: "Cities" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-xl font-extrabold text-razzia-400">{s.val}</p>
                    <p className="text-xs text-white/40 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>


            {/* Right: photo collage — overlapping */}
            <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "scale(.95)", transition: "opacity .9s ease 200ms, transform .9s ease 200ms" }}
              className="relative hidden lg:block">
              <div className="relative h-[360px] w-full">

                {/* Main image — top-left, large */}
                <div className="absolute left-0 top-0 w-[62%] h-[75%] overflow-hidden rounded-3xl border-2 border-white/10 shadow-2xl">
                  <Image alt="Nairobi local market" fill
                    src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=500&h=500&fit=crop&auto=format"
                    style={{ objectFit: "cover" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Second image — bottom-right, overlapping main */}
                <div className="float-b absolute bottom-0 right-0 w-[58%] h-[65%] overflow-hidden rounded-3xl border-4 border-[#0d0d0d] shadow-2xl z-10">
                  <Image alt="Happy customer" fill
                    src="https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=500&h=500&fit=crop&auto=format"
                    style={{ objectFit: "cover" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Rating badge — anchored to top-right of second image */}
                <div className="float-a absolute top-2 right-2 flex items-center gap-2 rounded-2xl border border-white/15 bg-black/70 px-3 py-2 backdrop-blur-md shadow-xl z-20">
                  <Star className="h-4 w-4 text-amber-400 fill-current shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-white">4.9 / 5.0 rating</p>
                    <p className="text-[10px] text-white/55">12,400+ reviews</p>
                  </div>
                </div>

                {/* Deliveries badge — anchored to bottom-left of main image */}
                <div className="float-b absolute bottom-[26%] left-2 flex items-center gap-2 rounded-2xl border border-white/15 bg-black/70 px-3 py-2 backdrop-blur-md shadow-xl z-20">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-white">50K+ deliveries</p>
                    <p className="text-[10px] text-white/55">Completed this year</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-none" style={{ height: "72px" }}>
          <svg viewBox="0 0 1440 72" preserveAspectRatio="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,48 C360,0 1080,72 1440,24 L1440,72 L0,72 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── ANIMATED COUNTERS ─────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal direction="up">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 rounded-full border border-razzia-100 bg-razzia-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-razzia-500">
                By the numbers
              </span>
              <h2 className="mt-4 text-4xl font-extrabold text-smoke-900">
                Growing every day
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <Reveal delay={0} direction="up"><Counter target={15000} suffix="+" label="Active Users" /></Reveal>
            <Reveal delay={100} direction="up"><Counter target={2500} suffix="+" label="Vendors Onboarded" /></Reveal>
            <Reveal delay={200} direction="up"><Counter target={50000} suffix="+" label="Deliveries Completed" /></Reveal>
            <Reveal delay={300} direction="up"><Counter target={5} suffix="" label="Cities Live" /></Reveal>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ─────────────────────────────────── */}
      <section className="border-y border-line-100 bg-surface-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal direction="left">
              <div className="relative h-full overflow-hidden rounded-3xl p-8 text-white"
                style={{ background: "linear-gradient(135deg,#ea3b0c,#a32b0c)" }}>
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{ backgroundImage: "radial-gradient(circle at 1px 1px,white 1px,transparent 0)", backgroundSize: "24px 24px" }} />
                <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white opacity-10 blur-2xl" />
                <span className="text-xs font-bold uppercase tracking-widest text-razzia-100">Our Mission</span>
                <h3 className="mt-4 text-3xl font-extrabold leading-snug">
                  Powering the next wave of local commerce
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/80">
                  Every neighborhood vendor deserves the same digital infrastructure as the largest retail chains. Razzia is an end-to-end platform for ordering, delivery, payments, and growth — designed from the ground up for African markets.
                </p>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[["500+","Vendors"],["1,200+","Daily Orders"],["99%","Uptime"]].map(([v,l]) => (
                    <div key={l} className="rounded-2xl bg-white/10 p-3 text-center backdrop-blur-sm">
                      <p className="text-lg font-extrabold">{v}</p>
                      <p className="text-[10px] text-white/70 mt-0.5">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="flex flex-col gap-6 h-full">
                <div className="rounded-3xl border border-line-100 bg-white p-8 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-razzia-50 mb-4">
                    <Globe className="h-6 w-6 text-razzia-500" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-xl font-extrabold text-smoke-900">Our Vision</h3>
                  <p className="mt-3 text-sm leading-relaxed text-smoke-600">
                    To become the leading marketplace platform in East Africa — empowering local commerce and building stronger communities through technology.
                  </p>
                </div>
                <div className="rounded-3xl border border-line-100 bg-white p-8 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 mb-4">
                    <Users className="h-6 w-6 text-emerald-600" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-xl font-extrabold text-smoke-900">Community Driven</h3>
                  <p className="mt-3 text-sm leading-relaxed text-smoke-600">
                    Razzia is built with and for the community — our roadmap is shaped by real feedback from vendors, riders, and customers across East Africa.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ──────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal direction="up">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 rounded-full border border-razzia-100 bg-razzia-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-razzia-500">
                What we stand for
              </span>
              <h2 className="mt-4 text-4xl font-extrabold text-smoke-900">Our core values</h2>
              <p className="mt-3 text-smoke-500 max-w-xl mx-auto">Every product decision, partnership, and line of code is guided by these principles.</p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 100} direction="up">
                  <Card className="group h-full hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(234,59,12,0.08)] hover:border-razzia-100 transition-all duration-300">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-razzia-50 transition-all duration-300 group-hover:bg-razzia-500 group-hover:scale-110">
                      <Icon className="h-6 w-6 text-razzia-500 transition-colors duration-300 group-hover:text-white" strokeWidth={1.75} />
                    </div>
                    <h3 className="text-base font-bold text-smoke-900 group-hover:text-razzia-500 transition-colors">{v.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-smoke-500">{v.body}</p>
                    <div className="mt-5 h-0.5 w-0 bg-razzia-500 rounded-full transition-all duration-500 group-hover:w-full" />
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── JOURNEY / TIMELINE ───────────────────────────────── */}
      <section className="relative overflow-hidden py-24"
        style={{ background: "linear-gradient(160deg,#0d0d0d,#1a1a1a)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px,white 1px,transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="pointer-events-none absolute top-0 left-1/4 h-72 w-72 rounded-full bg-razzia-600 opacity-[0.08] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal direction="up">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-razzia-400">
                Our journey
              </span>
              <h2 className="mt-4 text-4xl font-extrabold text-white md:text-5xl">
                Paving the way for{" "}
                <span className="text-transparent bg-clip-text animated-gradient"
                  style={{ backgroundImage: "linear-gradient(135deg,#ff6f43,#ea3b0c)" }}>
                  community commerce
                </span>
              </h2>
              <p className="mt-4 text-white/40 max-w-xl mx-auto">
                From a small idea to a growing platform — here are the milestones that define us.
              </p>
            </div>
          </Reveal>

          <div className="relative">
            {/* Center vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-razzia-500/60 via-razzia-500/20 to-transparent hidden lg:block" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 100} direction={i % 2 === 0 ? "left" : "right"}>
                  <div className={`flex items-center gap-6 lg:gap-0 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                    {/* Content card */}
                    <div className="w-full lg:w-[calc(50%-2.5rem)]">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm hover:border-razzia-500/30 hover:bg-white/[0.06] transition-all duration-300">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-razzia-400">{m.year}</span>
                        <h4 className="mt-2 text-lg font-bold text-white">{m.title}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-white/50">{m.body}</p>
                      </div>
                    </div>
                    {/* Center node */}
                    <div className="hidden lg:flex shrink-0 w-20 justify-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-razzia-500 text-xs font-extrabold text-white shadow-lg shadow-razzia-900/50 ring-4 ring-razzia-500/20">
                        {m.year.slice(2)}
                      </div>
                    </div>
                    {/* Empty side */}
                    <div className="hidden lg:block w-[calc(50%-2.5rem)]" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal direction="up">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 rounded-full border border-razzia-100 bg-razzia-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-razzia-500">
                The team
              </span>
              <h2 className="mt-4 text-4xl font-extrabold text-smoke-900">
                Meet the people behind Razzia
              </h2>
              <p className="mt-3 text-smoke-500 max-w-xl mx-auto">
                A small, focused team obsessed with building great local commerce technology.
              </p>
              <div className="mt-6 flex justify-center gap-8">
                {[["25+","Team Members"],["5","Yrs Experience"],["100%","Local Team"]].map(([v,l]) => (
                  <div key={l} className="text-center">
                    <p className="text-2xl font-extrabold text-razzia-500">{v}</p>
                    <p className="text-xs text-smoke-500 mt-0.5">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 80} direction="up">
                <div className="group relative overflow-hidden rounded-3xl border border-line-100 hover:border-razzia-200 hover:shadow-[0_20px_40px_rgba(234,59,12,0.08)] transition-all duration-300">
                  {/* Photo */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image alt={member.name} fill src={member.photo} style={{ objectFit: "cover" }}
                      className="transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  </div>
                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-base font-bold text-white">{member.name}</h3>
                    <p className="mt-0.5 text-xs font-semibold text-razzia-300 uppercase tracking-wider">{member.role}</p>
                  </div>
                  {/* Hover border glow */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                    style={{ boxShadow: "inset 0 0 0 1.5px #ea3b0c40" }} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST & COMPLIANCE ───────────────────────────────── */}
      <section className="border-y border-line-100 bg-surface-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal direction="up">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 rounded-full border border-razzia-100 bg-razzia-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-razzia-500">
                Trust & Security
              </span>
              <h2 className="mt-4 text-4xl font-extrabold text-smoke-900">Trusted & Registered</h2>
              <p className="mt-3 text-smoke-500 max-w-xl mx-auto">
                Razzia is fully registered under Kenyan law, committed to transparency and regulatory compliance.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-14">
            {trustBadges.map((b, i) => {
              const Icon = b.icon;
              return (
                <Reveal key={b.label} delay={i * 80} direction="up">
                  <div className="group rounded-2xl border border-line-100 bg-white p-6 text-center hover:-translate-y-1 hover:border-razzia-200 hover:shadow-[0_12px_30px_rgba(234,59,12,0.07)] transition-all duration-300">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-razzia-50 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6 text-razzia-500" strokeWidth={1.75} />
                    </div>
                    <p className="font-bold text-smoke-900">{b.label}</p>
                    <p className="mt-1 text-xs text-smoke-500">{b.sub}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Tech Partners */}
          <Reveal direction="up" delay={200}>
            <div className="rounded-3xl border border-line-100 bg-white p-8">
              <p className="text-center text-xs font-bold uppercase tracking-widest text-smoke-400 mb-8">Technology Partners</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {techPartners.map((p) => (
                  <div key={p.name}
                    className="flex items-center gap-2 rounded-2xl border border-line-100 bg-surface-50 px-5 py-3 hover:border-line-200 hover:-translate-y-0.5 transition-all duration-200">
                    <div className="h-3 w-3 rounded-full" style={{ background: p.color }} />
                    <span className="text-sm font-bold text-smoke-700">{p.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal direction="up">
          <div className="relative overflow-hidden rounded-3xl text-white"
            style={{ background: "linear-gradient(135deg,#ea3b0c 0%,#c9330a 55%,#a32b0c 100%)" }}>
            <div className="absolute inset-0 pointer-events-none opacity-[0.07]"
              style={{ backgroundImage: "radial-gradient(circle at 1px 1px,white 1px,transparent 0)", backgroundSize: "28px 28px" }} />
            <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white opacity-[0.06] blur-3xl" />

            <div className="relative grid items-center gap-8 px-8 py-14 lg:grid-cols-[1fr_auto]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/80 pulse-dot inline-block" />
                  Be part of the story
                </span>
                <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
                  Join us on our mission.
                </h2>
                <p className="mt-3 max-w-xl text-white/75">
                  Whether you are a vendor, a rider, or a customer — Razzia is built for you. Join thousands already transforming local commerce in East Africa.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:flex-col lg:items-start">
                <div className="relative overflow-hidden rounded-full">
                  <Button className="!bg-white !text-razzia-600 !font-bold !px-7" href="/landing/register">
                    Get started free
                  </Button>
                  <div className="shimmer-btn pointer-events-none absolute inset-0" />
                </div>
                <Button
                  className="!border-white/30 !bg-white/15 !text-white !font-semibold !px-7 hover:!bg-white/25"
                  href="/landing/careers" variant="secondary">
                  View careers
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
}
