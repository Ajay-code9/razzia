import Link from "next/link";

const links = {
  company: ["About", "Partners", "Investors", "Contact"],
  support: ["Help Center", "FAQs", "Delivery Guide", "Vendor Guide"],
  legal: ["Terms of Service", "Privacy Policy", "Cookie Notice"],
};

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line-100 bg-smoke-900 text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <h3 className="text-2xl font-bold">Razzia</h3>
          <p className="mt-4 text-sm text-zinc-300">
            Neighborhood marketplace for essentials, local shops, and fast
            doorstep delivery.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-zinc-300">
            Company
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-zinc-100">
            {links.company.map((item) => (
              <li key={item}>
                <Link className="hover:text-razzia-300" href="/landing">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-zinc-300">
            Support
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-zinc-100">
            {links.support.map((item) => (
              <li key={item}>
                <Link className="hover:text-razzia-300" href="/landing">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-zinc-300">
            Legal
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-zinc-100">
            {links.legal.map((item) => (
              <li key={item}>
                <Link className="hover:text-razzia-300" href="/landing">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-sm text-zinc-300">
        © {new Date().getFullYear()} Razzia Technologies. All rights reserved.
      </div>
    </footer>
  );
}
