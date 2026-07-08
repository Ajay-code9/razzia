import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/context/AuthContext";

const navItems = [
  { href: "/landing", label: "Home" },
  { href: "/landing#how-it-works", label: "How it works" },
  { href: "/landing/dashboard", label: "Vendors" },
  { href: "/landing/driver", label: "Drivers" },
  { href: "/landing/shop", label: "Shop" },
];

export function Navbar() {
  const router = useRouter();
  const { user, logout } = useAuth();

  const onLogout = () => {
    logout();
    void router.push("/landing");
  };

  const homeOrDashboard =
    user?.role === "driver" ? "/landing/driver" : "/landing/dashboard";

  return (
    <header className="sticky top-0 z-30 border-b border-line-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <Link className="flex items-center gap-3" href="/landing">
          <Image alt="Razzia logo" src="/logo.png" width={36} height={36} />
          <span className="text-xl font-extrabold tracking-tight text-smoke-900">
            Razzia
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-smoke-600 lg:flex">
          {navItems.map((item) => (
            <Link
              className={
                router.asPath === item.href
                  ? "text-razzia-500"
                  : "transition-colors hover:text-smoke-900"
              }
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Button href={homeOrDashboard} variant="secondary">
                Dashboard
              </Button>
              <Button onClick={onLogout} variant="ghost">
                Log out
              </Button>
            </>
          ) : (
            <>
              <Button href="/landing/login" variant="ghost">
                Log in
              </Button>
              <Button href="/landing/register">Become a vendor</Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
