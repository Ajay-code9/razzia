import { FileText } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SidebarScrollspy } from "@/components/SidebarScrollspy";

const headings = [
  { id: "changes", title: "1. Changes & Acceptance" },
  { id: "provision", title: "2. Provision of Services and Charges" },
  { id: "payment", title: "3. Payment Terms & Settlement" },
  { id: "limitations", title: "4. User Limitations and Security" },
  { id: "content", title: "5. User Content and Ownership" },
  { id: "api", title: "6. API Access & Third Parties" },
  { id: "warranties", title: "7. Warranties and Liability" },
  { id: "slas", title: "8. Uptime & SLAs" },
  { id: "refunds", title: "9. Refunds & Cancellations" },
  { id: "termination", title: "10. Termination" },
];

export default function SubscriptionPage() {
  return (
    <Layout>
      <section className="relative bg-[#FAFAFA] pt-24 pb-16 lg:pt-24 lg:pb-16 border-b border-line-100 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, black 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="mx-auto w-full max-w-4xl px-6 relative z-10 text-center">
          <div className="w-16 h-16 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
            <FileText size={32} />
          </div>
          <h1 className="text-4xl font-extrabold text-smoke-900 tracking-tight md:text-5xl lg:text-6xl mb-6">Subscription Agreement</h1>
          <p className="text-lg text-smoke-600 font-light">Please carefully read this agreement before using Razzia Merchant Services.</p>
        </div>
      </section>

      <section className="py-24 bg-[#FAFAFA] relative">
        {/* Cute Ambient Background */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-[10%] -left-[10%] w-[40rem] h-[40rem] bg-purple-200/40 rounded-full blur-[120px] mix-blend-multiply" />
          <div className="absolute top-[20%] -right-[10%] w-[35rem] h-[35rem] bg-indigo-200/40 rounded-full blur-[120px] mix-blend-multiply" />
          <div className="absolute -bottom-[10%] left-[20%] w-[45rem] h-[45rem] bg-pink-200/40 rounded-full blur-[120px] mix-blend-multiply" />
        </div>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, black 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        
        <div className="mx-auto w-full max-w-7xl px-6 flex flex-col lg:flex-row gap-12 relative z-10">
          
          <SidebarScrollspy headings={headings} />

          <div className="lg:w-3/4 pb-24 space-y-12">
            
            {/* Changes */}
            <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-line-100 shadow-sm prose prose-smoke max-w-none">
              <h2 id="changes" className="text-2xl font-bold text-smoke-900 mt-0 scroll-mt-32">1. Changes & Acceptance</h2>
              <p className="text-smoke-600 leading-relaxed mb-0">
                From time to time, Razzia Technologies Limited ("Razzia") may update the terms and conditions of this Master Subscription Agreement without prior notice. If you elect not to accept the new terms, Razzia may terminate this Agreement and discontinue providing the Merchant Dashboard and associated API Services ("Services"). Your continued use of the Services after an update constitutes explicit consent to such changes.
              </p>
            </div>

            {/* Provision */}
            <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-line-100 shadow-sm prose prose-smoke max-w-none">
              <h2 id="provision" className="text-2xl font-bold text-smoke-900 mt-0 scroll-mt-32">2. Provision of Services and Charges</h2>
              <p className="text-smoke-600 leading-relaxed mb-6">
            In consideration of the agreed "Charges" (which may be a flat percentage commission on successfully fulfilled orders or a recurring SaaS fee, as specified in your onboarding contract), Razzia will provide the Services. Taxes, excluding federal or state taxes directly owed by Razzia, are your responsibility.
              </p>
              <p className="text-smoke-600 leading-relaxed mb-0">
                Razzia may allow a trial period for premium features as solely determined by Razzia. During this Trial Period, specific promotional Charges may apply. If the Trial Period ends without payment provision or transition to a standard tier, Razzia reserves the right to suspend your account and delete related data.
              </p>
            </div>

            {/* Payment */}
            <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-line-100 shadow-sm prose prose-smoke max-w-none relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full blur-3xl opacity-50 pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
              <h2 id="payment" className="text-2xl font-bold text-smoke-900 mt-0 scroll-mt-32">3. Payment Terms & Settlement</h2>
              <p className="text-smoke-600 leading-relaxed mb-0">
            Payment and settlements are made through Razzia Pay (our accepted automated clearing mechanism). Any negative balances resulting from chargebacks, refunds, or finance charges will be automatically deducted from your rolling balance. Costs incurred for collection of severe overdue payments are also payable by you.
              </p>
            </div>

            {/* Limitations */}
            <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-line-100 shadow-sm prose prose-smoke max-w-none">
              <h2 id="limitations" className="text-2xl font-bold text-smoke-900 mt-0 scroll-mt-32">4. User Limitations and Security</h2>
              <p className="text-smoke-600 leading-relaxed mb-6">
                As a condition of using the Services, you warrant strict compliance with all local health, safety, and legal standards. You must refrain from unauthorized use of the platform. Excessive bandwidth use on the Merchant API may result in immediate account throttling or suspension to protect ecosystem stability.
              </p>
              <p className="text-smoke-600 leading-relaxed mb-0">
                Your dashboard username and password are for your exclusive use. Any unauthorized access must be reported to Razzia immediately. You are solely responsible for the actions of any staff members given access to your merchant instance.
              </p>
            </div>

            {/* Content */}
            <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-line-100 shadow-sm prose prose-smoke max-w-none">
              <h2 id="content" className="text-2xl font-bold text-smoke-900 mt-0 scroll-mt-32">5. User Content and Ownership</h2>
              <p className="text-smoke-600 leading-relaxed mb-6">
            You retain full ownership of the Content (menus, product images, pricing data) shared via the Services. Razzia holds no liability for third-party misuse of Content or for its transfer across unsecure networks. You grant Razzia a global, royalty-free license to display your Content to end-users to facilitate marketplace sales.
              </p>
              <p className="text-smoke-600 leading-relaxed mb-0">
                Razzia owns the Services, the API, and the Website software completely. Unauthorized copying, reverse engineering, or scraping is strictly prohibited, and copyright infringement may result in severe liability.
              </p>
            </div>

            {/* API */}
            <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-line-100 shadow-sm prose prose-smoke max-w-none">
              <h2 id="api" className="text-2xl font-bold text-smoke-900 mt-0 scroll-mt-32">6. API Access & Third Parties</h2>
              <p className="text-smoke-600 leading-relaxed mb-0">
                API access is governed by this Agreement. Razzia reserves the right to modify, deprecate, or suspend API access at our discretion to maintain system integrity. Furthermore, Razzia integrates various third-party e-commerce and logistics tools, disclaiming any direct affiliation or liability for third-party inaccuracy or downtime.
              </p>
            </div>

            {/* Warranties */}
            <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-line-100 shadow-sm prose prose-smoke max-w-none">
              <h2 id="warranties" className="text-2xl font-bold text-smoke-900 mt-0 scroll-mt-32">7. Warranties and Liability</h2>
              <p className="text-smoke-600 leading-relaxed mb-6">
            Razzia provides the Services and the Dashboard “as is,” strictly disclaiming all warranties (express or implied) to the maximum extent permitted by law. To the maximum extent allowed by law, Razzia limits liability for any Consequential Losses, including lost profits, arising from service interruptions.
              </p>
              <p className="text-smoke-600 leading-relaxed mb-0">
                You agree to fully indemnify Razzia against any Claims arising from your use of the Services, including but not limited to customer claims regarding food safety, product quality, or delivery disputes.
              </p>
            </div>

            {/* SLAs */}
            <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-line-100 shadow-sm prose prose-smoke max-w-none relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none transform translate-x-1/4 -translate-y-1/4" />
              <h2 id="slas" className="text-2xl font-bold text-smoke-900 mt-0 scroll-mt-32">8. Uptime & SLAs</h2>
              <p className="text-smoke-600 leading-relaxed mb-0">
                Razzia aims to provide 99.9% uptime for the Merchant Dashboard and API Services. Scheduled maintenance windows will be communicated at least 48 hours in advance. In the event of an unscheduled outage exceeding 4 hours, eligible premium merchants may apply for service credits equal to 10% of their monthly recurring SaaS fee.
              </p>
            </div>

            {/* Refunds */}
            <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-line-100 shadow-sm prose prose-smoke max-w-none">
              <h2 id="refunds" className="text-2xl font-bold text-smoke-900 mt-0 scroll-mt-32">9. Refunds & Cancellations</h2>
              <p className="text-smoke-600 leading-relaxed mb-0">
                Merchants on paid SaaS tiers may cancel their subscription at any time. Cancellations take effect at the end of the current billing cycle. We do not provide prorated refunds for mid-cycle cancellations. Commission charges on successfully delivered orders are non-refundable unless a systemic platform error caused a duplicate charge.
              </p>
            </div>

            {/* Termination */}
            <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-line-100 shadow-sm prose prose-smoke max-w-none relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-red-50 rounded-full blur-3xl opacity-50 pointer-events-none transform translate-x-1/4 translate-y-1/4" />
              <h2 id="termination" className="text-2xl font-bold text-smoke-900 mt-0 scroll-mt-32">10. Termination</h2>
              <p className="text-smoke-600 leading-relaxed mb-0">
                You may terminate the Services via the account dashboard or by contacting your account manager. Termination may result in the immediate deletion of stored Content and the settlement of any final pending payouts.
              </p>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
