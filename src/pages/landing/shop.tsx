import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const categories = ["Groceries", "Fresh produce", "Home essentials", "Health", "Tech"];

const products = [
  { name: "Family Grocery Basket", price: "KES 2,100", seller: "Kibo Mart" },
  { name: "Farm Fresh Vegetables", price: "KES 680", seller: "Green Leaf Store" },
  { name: "Starter Cleaning Pack", price: "KES 1,290", seller: "Home Care Hub" },
  { name: "Healthy Breakfast Set", price: "KES 940", seller: "Daily Foods" },
  { name: "Office Quick Snacks", price: "KES 760", seller: "Quick Buy" },
  { name: "Weekly Family Fruit Box", price: "KES 1,430", seller: "Fresh Spot" },
];

export default function ShopPage() {
  return (
    <Layout>
      <section className="mx-auto w-full max-w-7xl px-6 py-12">
        <header>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-razzia-500">
            Seller showcase
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-smoke-900">
            Explore local shops and featured products.
          </h1>
        </header>

        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              className="rounded-full border border-line-100 bg-white px-4 py-2 text-sm font-semibold text-smoke-600 hover:border-razzia-300"
              key={category}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item) => (
            <Card className="flex flex-col" key={item.name}>
              <div className="h-36 rounded-2xl bg-gradient-to-br from-razzia-100 to-white" />
              <h2 className="mt-4 text-lg font-bold text-smoke-900">{item.name}</h2>
              <p className="mt-1 text-sm text-smoke-600">{item.seller}</p>
              <p className="mt-2 text-sm font-semibold text-razzia-600">{item.price}</p>
              <Button className="mt-4 w-full" variant="secondary">
                Add to cart
              </Button>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
}
