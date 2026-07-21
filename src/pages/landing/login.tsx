import { useMemo, useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/Button";
import type { UserRole } from "@/context/AuthContext";
import { useAuth } from "@/context/AuthContext";
import { getRouteByRole } from "@/lib/routeByRole";

const roleOptions: Array<{ value: UserRole; label: string }> = [
  { value: "customer", label: "Customer" },
  { value: "vendor", label: "Vendor" },
  { value: "driver", label: "Driver" },
];

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"customer" | "vendor" | "driver">("vendor");

  const displayName = useMemo(() => email.split("@")[0] || "Razzia User", [email]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void router.push(getRouteByRole(role));
  };

  return (
    <Layout>
      <section className="mx-auto grid min-h-[72vh] w-full max-w-7xl items-center gap-10 px-6 py-12 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-razzia-500">
            Welcome back
          </p>
          <h1 className="mt-3 text-4xl font-extrabold text-smoke-900">
            Log in to continue your flow.
          </h1>
          <p className="mt-4 text-smoke-600">
            Access vendor tools, order tracking, or driver tasks using your role.
          </p>
          <p className="mt-6 text-sm text-smoke-600">
            New to Razzia?{" "}
            <Link className="font-semibold text-razzia-500" href="/landing/register">
              Create an account
            </Link>
          </p>
        </div>

        <form
          className="rounded-3xl border border-line-100 bg-white p-7 shadow-[0_12px_35px_rgba(20,20,20,0.08)]"
          onSubmit={onSubmit}
        >
          <label className="block text-sm font-semibold text-smoke-900">
            Email
            <input
              className="mt-2 w-full rounded-xl border border-line-100 px-4 py-3 outline-none focus:border-razzia-400"
              onChange={(event) => setEmail(event.target.value)}
              required
              type="email"
              value={email}
            />
          </label>

          <p className="mt-4 text-sm font-semibold text-smoke-900">Choose role</p>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {roleOptions.map((option) => (
              <button
                className={`rounded-xl border px-3 py-2 text-sm font-semibold transition-colors ${
                  option.value === role
                    ? "border-razzia-500 bg-razzia-500 text-white"
                    : "border-line-100 text-smoke-600 hover:border-razzia-300"
                }`}
                key={option.value}
                onClick={() => setRole(option.value)}
                type="button"
              >
                {option.label}
              </button>
            ))}
          </div>

          <Button className="mt-6 w-full" type="submit">
            Log in
          </Button>
        </form>
      </section>
    </Layout>
  );
}
