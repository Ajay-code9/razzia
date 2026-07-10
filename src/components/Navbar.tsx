import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/context/AuthContext";

type MenuItem = {
  label: string;
  href?: string;
  dropdownItems?: Array<{ label: string; href: string }>;
};

const navItems: MenuItem[] = [
  { href: "/landing", label: "Home" },
  { href: "/landing/about", label: "About" },
  {
    label: "Platform",
    dropdownItems: [
      { label: "Customer App", href: "/landing/shop" },
      { label: "Merchant Dashboard", href: "/landing/dashboard" },
      { label: "Driver Hub", href: "/landing/driver" },
    ],
  },
  { href: "/landing/partners", label: "Partners" },
  {
    label: "Company",
    dropdownItems: [
      { label: "Investors", href: "/landing/investors" },
      { label: "Contact", href: "/landing/contact" },
    ],
  },
  {
    label: "Resources",
    dropdownItems: [
      { label: "FAQs", href: "/landing/faq" },
      { label: "Privacy Policy", href: "/landing/privacy" },
      { label: "Terms & Conditions", href: "/landing/terms" },
      { label: "Subscription Agreement", href: "/landing/subscription" },
    ],
  },
];

export function Navbar() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const toggleExpand = (label: string) => {
    setExpandedMenu(expandedMenu === label ? null : label);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMobileMenuOpen(false);
      setExpandedMenu(null);
    };
    router.events?.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events?.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  // Close mobile menu if window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  const onLogout = () => {
    logout();
    void router.push("/landing");
  };

  const homeOrDashboard =
    user?.role === "driver" ? "/landing/driver" : "/landing/dashboard";

  const isMainActive = (item: MenuItem) => {
    if (item.href) {
      return router.pathname === item.href;
    }
    if (item.dropdownItems) {
      return item.dropdownItems.some((sub) => router.pathname === sub.href);
    }
    return false;
  };

  const isDarkHeroTop = router.pathname === "/landing" && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isDarkHeroTop
            ? "bg-transparent border-transparent"
            : isScrolled
              ? "bg-white/95 backdrop-blur-lg border-b border-line-100 shadow-sm"
              : "bg-white/40 backdrop-blur-md border-b border-transparent"
          }`}
      >
        <div
          className={`mx-auto flex w-full max-w-7xl items-center justify-between px-6 transition-all duration-300 ${isScrolled ? "py-2.5" : "py-5"
            }`}
        >
          <Link className="relative block w-24 h-12" href="/landing">
            <div className={`absolute -top-2 left-0 z-50 flex items-center justify-center rounded-full transition-all duration-300 ${isDarkHeroTop ? "bg-white shadow-md p-1" : "drop-shadow-lg"}`}>
              <Image
                alt="Razzia logo"
                src="/razzia-logo.svg"
                width={96}
                height={96}
                priority
                unoptimized
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-1 text-sm font-bold lg:flex">
            {navItems.map((item) => {
              if (item.dropdownItems) {
                return (
                  <div className="relative group py-2 cursor-pointer" key={item.label}>
                    <span
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300 ${isMainActive(item)
                          ? "!text-razzia-500 bg-razzia-50"
                          : isDarkHeroTop
                            ? "!text-white hover:bg-white/15"
                            : "!text-smoke-700 hover:!text-smoke-900 hover:bg-smoke-50"
                        }`}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" strokeWidth={2.5} />
                    </span>
                    <div className="absolute top-full left-0 mt-1 min-w-[200px] rounded-2xl border border-line-100 bg-white p-2 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                      {item.dropdownItems.map((subItem) => (
                        <Link
                          href={subItem.href}
                          key={subItem.label}
                          className={`block rounded-xl px-4 py-2.5 text-sm transition-colors ${router.pathname === subItem.href
                              ? "bg-razzia-50 text-razzia-700 font-semibold"
                              : "text-smoke-600 hover:bg-surface-50 hover:text-smoke-900"
                            }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  className={`px-3 py-1.5 rounded-full transition-all duration-300 ${isMainActive(item)
                      ? "!text-razzia-500 bg-razzia-50"
                      : isDarkHeroTop
                        ? "!text-white hover:bg-white/15"
                        : "!text-smoke-700 hover:!text-smoke-900 hover:bg-smoke-50"
                    }`}
                  href={item.href || "#"}
                  key={item.label}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-6">
            {/* User actions & Mobile Toggle */}
            <div className="flex items-center gap-3">
              {/* Desktop only buttons */}
              <div className="hidden lg:flex items-center gap-3">
                {user ? (
                  <>
                    <Button href={homeOrDashboard} variant="secondary">
                      Dashboard
                    </Button>
                    <Button onClick={onLogout} variant="ghost" className={isDarkHeroTop ? "!text-white hover:!bg-white/10" : ""}>
                      Log out
                    </Button>
                  </>
                ) : (
                  <Link
                    href="/landing/shop"
                    className={`rounded-full px-8 py-3 font-black shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center border border-white/20
                      ${isDarkHeroTop
                        ? "bg-white text-razzia-600 hover:bg-smoke-50 hover:shadow-[0_10px_30px_rgba(255,255,255,0.3)]"
                        : "bg-gradient-to-r from-razzia-500 to-razzia-600 text-white hover:shadow-[0_10px_30px_rgba(255,38,92,0.3)]"
                      }`}
                  >
                    Download App
                  </Link>
                )}
              </div>

              {/* Mobile only buttons */}
              <div className="lg:hidden flex items-center gap-2">
                {user ? (
                  <Button href={homeOrDashboard} variant="secondary" className="px-3 h-9 text-sm">Dashboard</Button>
                ) : (
                  <Link
                    href="/landing/shop"
                    className={`rounded-full px-5 py-2 text-sm font-bold shadow-md transition-all active:scale-95 flex items-center justify-center
                      ${isDarkHeroTop
                        ? "bg-white text-razzia-600 hover:bg-smoke-50"
                        : "bg-gradient-to-r from-razzia-500 to-razzia-600 text-white"
                      }`}
                  >
                    Download App
                  </Link>
                )}
                <button
                  className={`p-2 rounded-xl transition-all duration-300 flex items-center justify-center
                    ${isDarkHeroTop ? "text-white hover:bg-white/10" : "text-smoke-900 hover:bg-surface-50"}`}
                  onClick={() => setIsMobileMenuOpen(true)}
                >
                  <Menu size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[60] bg-smoke-900/40 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Drawer Panel */}
          <div
            className="absolute top-0 right-0 h-full w-[80%] sm:w-[50%] bg-white shadow-2xl animate-in slide-in-from-right duration-300 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cute Ambient Background inside Drawer */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-razzia-100/60 rounded-full blur-[80px] mix-blend-multiply" />
              <div className="absolute top-1/2 -left-20 w-64 h-64 bg-blue-100/60 rounded-full blur-[80px] mix-blend-multiply" />
              <div className="absolute -bottom-20 right-0 w-64 h-64 bg-purple-100/60 rounded-full blur-[80px] mix-blend-multiply" />
            </div>
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, black 1px, transparent 0)", backgroundSize: "24px 24px" }} />

            <div className="p-6 flex flex-col h-full overflow-y-auto relative z-10">
              {/* Header of Drawer */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-line-100">
                <span className="font-extrabold text-xl text-smoke-900 tracking-tight">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-surface-50 text-smoke-600 hover:bg-razzia-50 hover:text-razzia-500 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-2 flex-grow">
                {navItems.map((item) => {
                  if (item.dropdownItems) {
                    const isExpanded = expandedMenu === item.label;
                    return (
                      <div key={item.label} className="flex flex-col">
                        <button
                          onClick={() => toggleExpand(item.label)}
                          className="flex items-center justify-between py-3 text-lg font-bold text-smoke-900 transition-colors"
                        >
                          {item.label}
                          <span className={`text-[12px] text-smoke-400 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>▼</span>
                        </button>
                        {isExpanded && (
                          <div className="flex flex-col pl-4 border-l-2 border-line-100 ml-2 space-y-1 mb-2 animate-in fade-in slide-in-from-top-2 duration-200">
                            {item.dropdownItems.map((subItem) => (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`py-2.5 text-base font-semibold transition-colors ${router.pathname === subItem.href
                                    ? "text-razzia-500"
                                    : "text-smoke-600 active:text-smoke-900"
                                  }`}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      href={item.href || "#"}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`py-3 text-lg font-bold transition-colors ${isMainActive(item) ? "text-razzia-500" : "text-smoke-900"
                        }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Footer Action Buttons */}
              <div className="pt-6 mt-6 border-t border-line-100 flex flex-col gap-3">
                {user ? (
                  <>
                    <Button href={homeOrDashboard} className="w-full justify-center py-6 text-lg">Dashboard</Button>
                    <Button onClick={() => { onLogout(); setIsMobileMenuOpen(false); }} variant="secondary" className="w-full justify-center py-6 text-lg">Log out</Button>
                  </>
                ) : (
                  <>
                    <Button href="/landing/register" className="w-full justify-center py-6 text-lg">Become a vendor</Button>
                    <Button href="/landing/login" variant="secondary" className="w-full justify-center py-6 text-lg">Log in</Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

