import Image from "next/image";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatPill } from "@/components/ui/StatPill";

const reasons = [
  {
    title: "Rapid doorstep delivery",
    body: "Smart dispatch and nearby riders help your orders reach home in less time.",
  },
  {
    title: "Protected checkout",
    body: "Every payment channel is encrypted and monitored for secure transactions.",
  },
  {
    title: "Built for local sellers",
    body: "Razzia helps neighborhood shops grow sales without complicated setup.",
  },
];

const steps = {
  customers: ["Create your account", "Find products nearby", "Place your order", "Track to your door"],
  vendors: ["Submit shop profile", "Add products", "Receive and pack orders", "Get paid safely"],
  drivers: ["Apply and verify", "Go online for tasks", "Deliver with route guidance", "Withdraw earnings"],
};

const testimonials = [
  {
    name: "Angela M.",
    role: "Customer",
    quote:
      "Razzia made grocery shopping very easy for my family. Delivery is fast and support is always polite.",
  },
  {
    name: "Brian K.",
    role: "Vendor",
    quote:
      "Our small shop now reaches many more customers every week. Listing products is simple and clear.",
  },
  {
    name: "Dennis O.",
    role: "Driver",
    quote:
      "I can choose my hours and still earn steadily. The delivery flow is smooth and reliable.",
  },
];

export default function LandingPage() {
  return (
    <Layout>
      <section className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-razzia-500">
            Local commerce, redesigned
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-smoke-900 md:text-6xl">
            Your trusted neighborhood marketplace.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-smoke-600">
            Razzia connects customers, shops, and riders in one clean
            experience for fast ordering and dependable delivery.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/landing/register">Start selling</Button>
            <Button href="/landing/shop" variant="secondary">
              Explore shop
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <StatPill value="2x" label="faster deliveries" />
            <StatPill value="24/7" label="order support" />
            <StatPill value="100%" label="secure payments" />
          </div>
        </div>

        <div className="rounded-3xl border border-line-100 bg-white p-6 shadow-[0_16px_40px_rgba(20,20,20,0.08)]">
          <div className="relative mx-auto max-w-sm overflow-hidden rounded-3xl border border-line-100 bg-gradient-to-b from-razzia-100 to-white p-4">
            <Image
              alt="Razzia app preview"
              className="mx-auto rounded-2xl"
              height={460}
              src="/logo.png"
              width={460}
            />
          </div>
        </div>
      </section>

      <section className="border-y border-line-100 bg-white py-7">
        <div className="mx-auto grid w-full max-w-7xl gap-5 px-6 text-sm font-semibold text-smoke-600 md:grid-cols-4">
          <p>Trusted by independent sellers</p>
          <p>Smart rider assignment</p>
          <p>Secure M-Pesa and card checkout</p>
          <p>Real-time order tracking</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20">
        <SectionHeading
          description="Designed for reliability from checkout to doorstep handoff."
          eyebrow="Why choose Razzia"
          title="Fast delivery, safe payments, real local support"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reasons.map((reason) => (
            <Card key={reason.title}>
              <h3 className="text-xl font-bold text-smoke-900">{reason.title}</h3>
              <p className="mt-3 text-smoke-600">{reason.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-white py-20" id="how-it-works">
        <div className="mx-auto w-full max-w-7xl px-6">
          <SectionHeading
            description="Each role has a clear, simple flow from sign up to success."
            eyebrow="How it works"
            title="Simple steps for customers, vendors, and drivers"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <Card>
              <h3 className="text-lg font-bold text-smoke-900">Customers</h3>
              <ol className="mt-4 space-y-3 text-smoke-600">
                {steps.customers.map((step, index) => (
                  <li key={step}>
                    <span className="mr-2 font-semibold text-razzia-500">
                      {index + 1}.
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </Card>
            <Card>
              <h3 className="text-lg font-bold text-smoke-900">Vendors</h3>
              <ol className="mt-4 space-y-3 text-smoke-600">
                {steps.vendors.map((step, index) => (
                  <li key={step}>
                    <span className="mr-2 font-semibold text-razzia-500">
                      {index + 1}.
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </Card>
            <Card>
              <h3 className="text-lg font-bold text-smoke-900">Drivers</h3>
              <ol className="mt-4 space-y-3 text-smoke-600">
                {steps.drivers.map((step, index) => (
                  <li key={step}>
                    <span className="mr-2 font-semibold text-razzia-500">
                      {index + 1}.
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20">
        <SectionHeading
          description="Checkout with the method your customers already trust."
          eyebrow="Payment options"
          title="Pay your way with secure channels"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-5">
          {["M-Pesa", "Airtel Money", "Visa", "Mastercard", "Bank Transfer"].map(
            (method) => (
              <Card className="text-center" key={method}>
                <p className="font-semibold text-smoke-900">{method}</p>
              </Card>
            ),
          )}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-6">
          <SectionHeading
            description="Real feedback from people using Razzia every week."
            eyebrow="What people say"
            title="Trusted by customers, sellers, and riders"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.name}>
                <p className="text-smoke-600">“{item.quote}”</p>
                <p className="mt-5 font-bold text-smoke-900">{item.name}</p>
                <p className="text-sm text-smoke-600">{item.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-razzia-500 px-8 py-12 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-razzia-100">
            Mobile first experience
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Download Razzia and run daily commerce from your phone.
          </h2>
          <p className="mt-4 max-w-2xl text-razzia-50">
            Manage shopping, selling, and delivery in one platform made for
            local communities.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button className="!bg-white !text-razzia-600" href="/landing/login">
              Get started
            </Button>
            <Button
              className="!border-white !text-white hover:!bg-razzia-600"
              href="/landing/driver"
              variant="secondary"
            >
              Join as driver
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-8">
        <Card className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-razzia-500">
              Need help?
            </p>
            <h3 className="mt-2 text-2xl font-bold text-smoke-900">
              Browse quick answers before you contact support.
            </h3>
          </div>
          <Button href="/landing">Open FAQs</Button>
        </Card>
      </section>
    </Layout>
  );
}
