import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/Card";

const deliveries = [
  {
    id: "DL-510",
    route: "Westlands → Kileleshwa",
    pay: "KES 380",
    status: "Available",
  },
  {
    id: "DL-509",
    route: "Kilimani → Lavington",
    pay: "KES 340",
    status: "In progress",
  },
  {
    id: "DL-508",
    route: "CBD → South B",
    pay: "KES 410",
    status: "Completed",
  },
];

export default function DriverDeliveriesPage() {
  return (
    <Layout>
      <section className="mx-auto w-full max-w-7xl px-6 py-12">
        <header>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-razzia-500">
            Driver tasks
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-smoke-900">
            Deliveries and earnings overview
          </h1>
        </header>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card>
            <p className="text-sm text-smoke-600">Week earnings</p>
            <p className="mt-2 text-3xl font-bold text-smoke-900">KES 21,540</p>
          </Card>
          <Card>
            <p className="text-sm text-smoke-600">Trips completed</p>
            <p className="mt-2 text-3xl font-bold text-smoke-900">46</p>
          </Card>
          <Card>
            <p className="text-sm text-smoke-600">Average completion time</p>
            <p className="mt-2 text-3xl font-bold text-smoke-900">22 min</p>
          </Card>
        </div>

        <Card className="mt-6">
          <h2 className="text-xl font-bold text-smoke-900">Recent deliveries</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-line-100 text-smoke-600">
                  <th className="py-2">Delivery ID</th>
                  <th className="py-2">Route</th>
                  <th className="py-2">Pay</th>
                  <th className="py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {deliveries.map((delivery) => (
                  <tr className="border-b border-line-100/80" key={delivery.id}>
                    <td className="py-3 font-semibold text-smoke-900">{delivery.id}</td>
                    <td className="py-3 text-smoke-600">{delivery.route}</td>
                    <td className="py-3 text-smoke-600">{delivery.pay}</td>
                    <td className="py-3">
                      <span className="rounded-full bg-razzia-50 px-3 py-1 text-xs font-semibold text-razzia-700">
                        {delivery.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </section>
    </Layout>
  );
}
