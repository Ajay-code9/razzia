import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-surface-50 text-smoke-900">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
