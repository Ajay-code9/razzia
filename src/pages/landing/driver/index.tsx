import Link from "next/link";
import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/Card";
import { useAuth } from "@/context/AuthContext";

export default function DriverDashboardPage() {
  const { user } = useAuth();

  return (
    <Layout>
      <section className="mx-auto w-full max-w-7xl px-6 py-12">
        <header className="rounded-3xl border border-line-100 bg-white p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-razzia-500">
            Driver workspace
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-smoke-900">
            Ready to deliver, {user?.name ?? "Driver"}?
          </h1>
          <p className="mt-3 text-smoke-600">
            Accept nearby deliveries, manage your route, and monitor earnings.
          </p>
        </header>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card>
            <p className="text-sm text-smoke-600">Today&apos;s earnings</p>
            <p className="mt-2 text-3xl font-bold text-smoke-900">KES 4,870</p>
          </Card>
          <Card>
            <p className="text-sm text-smoke-600">Completed rides</p>
            <p className="mt-2 text-3xl font-bold text-smoke-900">11</p>
          </Card>
          <Card>
            <p className="text-sm text-smoke-600">Current rating</p>
            <p className="mt-2 text-3xl font-bold text-smoke-900">4.9</p>
          </Card>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <Card>
            <h2 className="text-xl font-bold text-smoke-900">Active delivery</h2>
            <p className="mt-3 text-smoke-600">Order ID: RZ-1942</p>
            <p className="mt-1 text-smoke-600">Pickup: Kibo Mart, Westlands</p>
            <p className="mt-1 text-smoke-600">Dropoff: Ngong Road, Kilimani</p>
            <p className="mt-3 text-sm font-semibold text-razzia-600">
              Estimated completion: 18 minutes
            </p>
            <Link
              className="mt-4 inline-block rounded-full bg-razzia-500 px-5 py-2.5 text-sm font-semibold text-white"
              href="/landing/driver/deliveries"
            >
              View all deliveries
            </Link>
          </Card>

          <Card>
            <h2 className="text-xl font-bold text-smoke-900">Map preview</h2>
            <div className="mt-4 h-52 rounded-2xl bg-gradient-to-br from-razzia-100 to-white" />
          </Card>
        </div>
      </section>
    </Layout>
  );
}
