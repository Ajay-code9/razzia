import Link from "next/link";

const companyLinks = [
  { label: "About Us", href: "/landing/about" },
  { label: "Partners", href: "/landing/partners" },
  { label: "Investors", href: "/landing/investors" },
  { label: "Contact", href: "/landing/contact" },
];

const platformLinks = [
  { label: "Customer App", href: "/landing/shop" },
  { label: "Merchant Dashboard", href: "/landing/dashboard" },
  { label: "Driver Hub", href: "/landing/driver" },
  { label: "Razzia Pay", href: "/landing/razzia-pay" },
];

const supportLinks = [
  { label: "Help Center", href: "/landing/contact" },
  { label: "FAQs", href: "/landing/contact" },
  { label: "Delivery Guide", href: "/landing/contact" },
  { label: "Vendor Guide", href: "/landing/partners" },
  { label: "Report an Issue", href: "/landing/contact" },
];

const legalLinks = [
  { label: "Terms of Service", href: "/landing" },
  { label: "Privacy Policy", href: "/landing" },
  { label: "Cookie Notice", href: "/landing" },
];

const cities = ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret"];

const linkStyle: React.CSSProperties = { color: "rgba(255,255,255,0.55)" };
const mutedStyle: React.CSSProperties = { color: "rgba(255,255,255,0.30)" };

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer
      className="relative mt-0"
      style={{ background: "linear-gradient(170deg,#0d0d0d 0%,#111 60%,#1a0800 100%)" }}
    >
      {/* ── Wavy top border (white wave dipping into dark footer) ── */}
      <div
        className="absolute left-0 w-full overflow-hidden leading-none pointer-events-none"
        style={{ top: "-79px", height: "80px" }}
      >
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 L1440,0 L1440,20 C1200,80 960,30 720,55 C480,80 240,15 0,45 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* ── Orange glow accent ── */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-64 w-[700px] rounded-full bg-razzia-600 opacity-[0.07] blur-3xl" />

      {/* ── Dot grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-16 pb-0">

        {/* ── Main grid ── */}
        <div
          className="grid gap-12 pb-14"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="grid gap-10 lg:grid-cols-[1.8fr_1fr_1fr_1fr]">

            {/* Brand column */}
            <div>
              <div className="flex items-center gap-2">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-xl shrink-0"
                  style={{ background: "linear-gradient(135deg,#ea3b0c,#a32b0c)" }}
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <span className="text-2xl font-extrabold text-white tracking-tight">Razzia</span>
              </div>

              <p className="mt-5 text-sm leading-relaxed max-w-xs" style={linkStyle}>
                Your neighborhood marketplace for groceries, daily essentials, and fast doorstep delivery — built for local communities.
              </p>

              {/* Social icons */}
              <div className="mt-6 flex gap-3">
                {[
                  { Icon: TwitterIcon, label: "Twitter", href: "#" },
                  { Icon: InstagramIcon, label: "Instagram", href: "#" },
                  { Icon: FacebookIcon, label: "Facebook", href: "#" },
                  { Icon: LinkedInIcon, label: "LinkedIn", href: "#" },
                ].map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
                    style={{
                      border: "1px solid rgba(255,255,255,0.12)",
                      background: "rgba(255,255,255,0.06)",
                      color: "rgba(255,255,255,0.55)",
                    }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>

              {/* City badges */}
              <div className="mt-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={mutedStyle}>
                  Available in
                </p>
                <div className="flex flex-wrap gap-2">
                  {cities.map((city) => (
                    <span
                      key={city}
                      className="rounded-full px-3 py-1 text-xs font-medium"
                      style={{
                        border: "1px solid rgba(255,255,255,0.1)",
                        background: "rgba(255,255,255,0.05)",
                        color: "rgba(255,255,255,0.55)",
                      }}
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4
                className="text-xs font-bold uppercase mb-5"
                style={{ letterSpacing: "0.18em", color: "#ff6f43" }}
              >
                Company
              </h4>
              <ul className="space-y-3">
                {companyLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm transition-all duration-200 hover:translate-x-1 inline-block"
                      style={linkStyle}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Platform */}
            <div>
              <h4
                className="text-xs font-bold uppercase mb-5"
                style={{ letterSpacing: "0.18em", color: "#ff6f43" }}
              >
                Platform
              </h4>
              <ul className="space-y-3">
                {platformLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm transition-all duration-200 hover:translate-x-1 inline-block"
                      style={linkStyle}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support + Newsletter */}
            <div>
              <h4
                className="text-xs font-bold uppercase mb-5"
                style={{ letterSpacing: "0.18em", color: "#ff6f43" }}
              >
                Support
              </h4>
              <ul className="space-y-3">
                {supportLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm transition-all duration-200 hover:translate-x-1 inline-block"
                      style={linkStyle}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Newsletter */}
              <div className="mt-10">
                <p
                  className="text-xs font-bold uppercase mb-3"
                  style={{ letterSpacing: "0.18em", color: "#ff6f43" }}
                >
                  Stay updated
                </p>
                <div
                  className="flex overflow-hidden rounded-xl"
                  style={{ border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.05)" }}
                >
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white outline-none min-w-0"
                    style={{ color: "white" }}
                  />
                  <button
                    type="button"
                    className="shrink-0 px-4 py-2.5 text-xs font-bold text-white transition-opacity hover:opacity-90"
                    style={{ background: "linear-gradient(135deg,#ea3b0c,#a32b0c)" }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-6">
          <p className="text-xs" style={mutedStyle}>
            © {new Date().getFullYear()} Razzia Technologies Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5">
            {legalLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs transition-colors hover:text-white"
                style={mutedStyle}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
