import { useState } from "react";
import { ChevronDown, Store, Navigation, User, Wallet, HelpCircle } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SidebarScrollspy } from "@/components/SidebarScrollspy";

const headings = [
  { id: "vendors", title: "For Vendors" },
  { id: "riders", title: "For Riders" },
  { id: "users", title: "For Customers" },
  { id: "payments", title: "Payments & Wallet" },
];

function AccordionItem({ question, answer }: { question: string, answer: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-line-100 last:border-0 bg-white hover:bg-surface-50 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none group"
      >
        <span className="font-bold text-smoke-900 group-hover:text-razzia-600 transition-colors text-lg">{question}</span>
        <ChevronDown size={24} className={`text-smoke-400 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 text-razzia-500" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 px-6 ${isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="text-smoke-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-24 border-b border-line-100 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, black 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="mx-auto w-full max-w-4xl px-6 relative z-10 text-center">
          <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
            <HelpCircle size={32} />
          </div>
          <h1 className="text-4xl font-extrabold text-smoke-900 tracking-tight md:text-5xl lg:text-6xl mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-smoke-600 font-light">Find answers to common questions about using the Razzia platform.</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-[#FAFAFA] relative">
        {/* Cute Ambient Background */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-[10%] -left-[10%] w-[40rem] h-[40rem] bg-blue-200/40 rounded-full blur-[120px] mix-blend-multiply" />
          <div className="absolute top-[20%] -right-[10%] w-[35rem] h-[35rem] bg-teal-200/40 rounded-full blur-[120px] mix-blend-multiply" />
          <div className="absolute -bottom-[10%] left-[20%] w-[45rem] h-[45rem] bg-indigo-200/40 rounded-full blur-[120px] mix-blend-multiply" />
        </div>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, black 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        
        <div className="mx-auto w-full max-w-7xl px-6 flex flex-col lg:flex-row gap-12 relative z-10">
          
          <SidebarScrollspy headings={headings} />

          <div className="lg:w-3/4 space-y-12 pb-24">
          
          {/* Vendors */}
          <div id="vendors" className="scroll-mt-32 bg-white p-8 md:p-10 rounded-[2rem] border border-line-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
            <div className="flex items-center gap-3 mb-8 relative z-10">
              <Store className="text-razzia-500" size={32}/>
              <h2 className="text-3xl font-bold text-smoke-900">For Vendors</h2>
            </div>
            <div className="rounded-[2rem] border border-line-100 shadow-sm overflow-hidden">
              <AccordionItem 
                question="How do I register my store on Razzia?" 
                answer="Registering is simple. Click the 'Become a Vendor' button on our homepage, fill out your business details, upload required documentation (such as business registration and ID), and submit. Our onboarding team will review your application and approve your account usually within 24 to 48 hours." 
              />
              <AccordionItem 
                question="What percentage commission does Razzia charge on sales?" 
                answer="We operate on a transparent, performance-based model. We take a flat percentage commission only on successful orders processed through the platform. There are no hidden subscription fees, meaning you only pay when you make a sale." 
              />
              <AccordionItem 
                question="How do I update my menu or product list?" 
                answer="You can instantly manage your entire catalog directly from your Razzia Merchant Dashboard. Changes to prices, adding new images, hiding out-of-stock items, and updating descriptions are reflected on the customer app in real-time." 
              />
              <AccordionItem 
                question="How are payments settled?" 
                answer="All transactions are securely processed through Razzia Pay. Your earnings are settled directly to your designated bank account or mobile money wallet on a rolling daily or weekly schedule, depending on your selected preference in the dashboard." 
              />
              <AccordionItem 
                question="What happens if an order is delayed or canceled?" 
                answer="If a customer cancellation occurs before you begin preparation, the order is voided and no charges apply. If a delay happens due to rider availability, our logistics team automatically re-routes dispatch. You can track all statuses live on your Merchant Dashboard." 
              />
              <AccordionItem 
                question="Can I run promotions or discounts through Razzia?" 
                answer="Absolutely! The Merchant Dashboard includes a comprehensive marketing suite allowing you to run flash sales, percentage discounts, and free delivery campaigns to boost your visibility and attract new customers." 
              />
            </div>
          </div>

          {/* Riders */}
          <div id="riders" className="scroll-mt-32 bg-white p-8 md:p-10 rounded-[2rem] border border-line-100 shadow-sm relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-50 rounded-full blur-3xl opacity-50 pointer-events-none transform translate-x-1/4 translate-y-1/4" />
            <div className="flex items-center gap-3 mb-8 relative z-10">
              <Navigation className="text-razzia-500" size={32}/>
              <h2 className="text-3xl font-bold text-smoke-900">For Riders</h2>
            </div>
            <div className="rounded-[2rem] border border-line-100 shadow-sm overflow-hidden">
              <AccordionItem 
                question="How do I join as a Razzia rider?" 
                answer="Download the Razzia Driver app from the App Store or Google Play, submit your identification (ID, driving license if applicable) and vehicle documents, and complete our brief orientation module. Once verified, you can go online and start earning immediately." 
              />
              <AccordionItem 
                question="How are delivery requests assigned?" 
                answer="Our intelligent dispatch algorithm assigns orders automatically based on your proximity to the vendor, current traffic conditions, and your vehicle type to ensure maximum earning efficiency and minimum idle time." 
              />
              <AccordionItem 
                question="When and how do riders get paid?" 
                answer="Riders receive their earnings directly into their mobile money wallets. We offer flexible payout options so you can access your cash when you need it, including daily cash-outs for completed trips." 
              />
              <AccordionItem 
                question="What happens if an item is damaged during delivery?" 
                answer="Safety is our priority. If an incident occurs and an item is damaged, report it immediately via the Driver App support chat. Our support team handles the resolution with the customer and vendor. Do not attempt to resolve it directly with the customer." 
              />
              <AccordionItem 
                question="Are there incentives for riders?" 
                answer="Yes. We frequently offer peak-hour multipliers (surge pricing), bad weather bonuses, and weekly milestone incentives to help you maximize your earnings during busy periods." 
              />
              <AccordionItem 
                question="What should I do if I cannot complete a delivery?" 
                answer="If you experience a vehicle breakdown or an emergency, use the SOS/Help button in the Driver app. The order will be immediately re-assigned to another nearby rider to ensure the customer receives their order." 
              />
            </div>
          </div>

          {/* Users */}
          <div id="users" className="scroll-mt-32 bg-white p-8 md:p-10 rounded-[2rem] border border-line-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full blur-3xl opacity-50 pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
            <div className="flex items-center gap-3 mb-8 relative z-10">
              <User className="text-razzia-500" size={32}/>
              <h2 className="text-3xl font-bold text-smoke-900">For Users</h2>
            </div>
            <div className="rounded-[2rem] border border-line-100 shadow-sm overflow-hidden">
              <AccordionItem 
                question="How do I place an order on Razzia?" 
                answer="Simply download the Razzia app, browse your favorite local vendors, add items to your cart, select your delivery address, and check out securely. You will receive real-time updates as your order is prepared and dispatched." 
              />
              <AccordionItem 
                question="What payment methods are available?" 
                answer="We support all major payment methods including mobile money (M-Pesa, Airtel Money), debit/credit cards, and the Razzia Wallet for seamless, one-tap checkout." 
              />
              <AccordionItem 
                question="How long does delivery take?" 
                answer="Delivery times vary based on the vendor's preparation time and distance from your location. The app provides a highly accurate Estimated Time of Arrival (ETA) before you check out and updates live during transit." 
              />
              <AccordionItem 
                question="What happens if my order arrives late or is incorrect?" 
                answer="Our 24/7 support team is always ready to help. Use the in-app help center to report any issues with your order, and we'll ensure you get a replacement, account credit, or a full refund." 
              />
              <AccordionItem 
                question="Can I track my delivery in real-time?" 
                answer="Yes! Once your order is picked up by the rider, you can track their exact location on the live map until they reach your doorstep." 
              />
              <AccordionItem 
                question="Does Razzia offer promotions or discounts?" 
                answer="Yes! We regularly offer promo codes, free delivery campaigns, and exclusive discounts from partner vendors. Make sure to enable push notifications so you never miss a deal." 
              />
            </div>
          </div>

          {/* Payments */}
          <div id="payments" className="scroll-mt-32 bg-white p-8 md:p-10 rounded-[2rem] border border-line-100 shadow-sm relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-50 rounded-full blur-3xl opacity-50 pointer-events-none transform -translate-x-1/2 translate-y-1/2" />
            <div className="flex items-center gap-3 mb-8 relative z-10">
              <Wallet className="text-razzia-500" size={32}/>
              <h2 className="text-3xl font-bold text-smoke-900">Payments & Wallet</h2>
            </div>
            
            <div className="space-y-4 relative z-10">
              <AccordionItem 
                question="How do I top up my Razzia Wallet?" 
                answer="You can top up your wallet directly from the app using M-Pesa, credit/debit cards, or direct bank transfer. The funds will reflect immediately for mobile money top-ups."
              />
              <AccordionItem 
                question="Are my card details secure?" 
                answer="Yes. We do not store your full card details on our servers. All transactions are processed through highly secure, PCI-DSS compliant third-party payment gateways."
              />
              <AccordionItem 
                question="How long do refunds take to process?" 
                answer="Refunds to your Razzia Wallet are instant. If you request a refund to your original payment method (like a bank account or card), it may take 3-5 business days depending on your bank."
              />
              <AccordionItem 
                question="Is there a limit on how much I can hold in my wallet?" 
                answer="Standard accounts have a wallet limit in compliance with local AML regulations. You can increase this limit by completing a simple KYC verification process in the app settings."
              />
            </div>
          </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
