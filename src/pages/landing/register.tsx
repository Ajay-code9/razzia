import { useState, type FormEvent } from "react";
import { useRouter } from "next/router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/Button";
import type { UserRole } from "@/context/AuthContext";
import { useAuth } from "@/context/AuthContext";
import { getRouteByRole } from "@/lib/routeByRole";

export default function RegisterPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<UserRole>("vendor");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login({ name, email, role });
    void router.push(getRouteByRole(role));
  };

  return (
    <Layout>
      <section className="mx-auto grid min-h-[72vh] w-full max-w-7xl items-center gap-10 px-6 py-12 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-razzia-500">
            Create account
          </p>
          <h1 className="mt-3 text-4xl font-extrabold text-smoke-900">
            Join the Razzia marketplace.
          </h1>
          <p className="mt-4 text-smoke-600">
            Sign up as customer, vendor, or driver and start using the platform
            instantly.
          </p>
        </div>

        <form
          className="rounded-3xl border border-line-100 bg-white p-7 shadow-[0_12px_35px_rgba(20,20,20,0.08)]"
          onSubmit={onSubmit}
        >
          <div className="space-y-4">
            <label className="block text-sm font-semibold text-smoke-900">
              Full name
              <input
                className="mt-2 w-full rounded-xl border border-line-100 px-4 py-3 outline-none focus:border-razzia-400"
                onChange={(event) => setName(event.target.value)}
                required
                value={name}
              />
            </label>
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
            <label className="block text-sm font-semibold text-smoke-900">
              Password
              <input
                className="mt-2 w-full rounded-xl border border-line-100 px-4 py-3 outline-none focus:border-razzia-400"
                minLength={6}
                onChange={(event) => setPassword(event.target.value)}
                required
                type="password"
                value={password}
              />
            </label>
            <label className="block text-sm font-semibold text-smoke-900">
              Role
              <select
                className="mt-2 w-full rounded-xl border border-line-100 px-4 py-3 outline-none focus:border-razzia-400"
                onChange={(event) => setRole(event.target.value as UserRole)}
                value={role}
              >
                <option value="customer">Customer</option>
                <option value="vendor">Vendor</option>
                <option value="driver">Driver</option>
              </select>
            </label>
          </div>
          <Button className="mt-6 w-full" type="submit">
            Register and continue
          </Button>
        </form>
      </section>
    </Layout>
  );
}
