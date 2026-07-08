import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useAuth } from "@/context/AuthContext";

const stats = [
  { label: "Orders today", value: "48" },
  { label: "Revenue today", value: "KES 84,320" },
  { label: "Products live", value: "126" },
];

const orders = [
  { id: "RZ-1941", customer: "J. Mwangi", total: "KES 2,430", status: "Packed" },
  { id: "RZ-1940", customer: "A. Kendi", total: "KES 1,190", status: "Preparing" },
  { id: "RZ-1939", customer: "M. Otieno", total: "KES 3,200", status: "Dispatched" },
];

export default function VendorDashboardPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      void router.push("/landing/login");
    }
  }, [router, user]);

  return (
    <Layout>
      <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-10 lg:grid-cols-[240px_1fr]">
        <aside className="rounded-2xl border border-line-100 bg-white p-5">
          <h2 className="text-lg font-bold text-smoke-900">Vendor panel</h2>
          <p className="mt-2 text-sm text-smoke-600">{user?.name ?? "Vendor"}</p>
          <nav className="mt-6 space-y-2 text-sm font-semibold">
            <Link className="block rounded-xl bg-razzia-50 px-3 py-2 text-razzia-700" href="/landing/dashboard">
              Dashboard
            </Link>
            <Link className="block rounded-xl px-3 py-2 text-smoke-600 hover:bg-surface-50" href="/landing/shop">
              Shop preview
            </Link>
            <Link className="block rounded-xl px-3 py-2 text-smoke-600 hover:bg-surface-50" href="/landing/register">
              Team access
            </Link>
          </nav>
        </aside>

        <div className="space-y-6">
          <header className="rounded-2xl border border-line-100 bg-white p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-razzia-500">
              Seller workspace
            </p>
            <h1 className="mt-2 text-3xl font-bold text-smoke-900">
              Good evening, {user?.name ?? "Vendor"}.
            </h1>
          </header>

          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((item) => (
              <Card key={item.label}>
                <p className="text-sm text-smoke-600">{item.label}</p>
                <p className="mt-1 text-2xl font-bold text-smoke-900">{item.value}</p>
              </Card>
            ))}
          </div>

          <Card>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl font-bold text-smoke-900">Recent orders</h2>
              <Button variant="secondary">Export CSV</Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-line-100 text-smoke-600">
                    <th className="py-2">Order ID</th>
                    <th className="py-2">Customer</th>
                    <th className="py-2">Total</th>
                    <th className="py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr className="border-b border-line-100/80" key={order.id}>
                      <td className="py-3 font-semibold text-smoke-900">{order.id}</td>
                      <td className="py-3 text-smoke-600">{order.customer}</td>
                      <td className="py-3 text-smoke-600">{order.total}</td>
                      <td className="py-3">
                        <span className="rounded-full bg-razzia-50 px-3 py-1 text-xs font-semibold text-razzia-700">
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl font-bold text-smoke-900">Products</h2>
              <Button>Add product</Button>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {["Fresh Produce Bundle", "Weekly Household Pack", "Premium Grain Set", "Kitchen Essentials"].map(
                (item) => (
                  <div
                    className="flex items-center justify-between rounded-xl border border-line-100 px-4 py-3"
                    key={item}
                  >
                    <p className="font-semibold text-smoke-900">{item}</p>
                    <button className="text-sm font-semibold text-razzia-600" type="button">
                      Edit
                    </button>
                  </div>
                ),
              )}
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
