import { ShieldCheck } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SidebarScrollspy } from "@/components/SidebarScrollspy";

const headings = [
  { id: "introduction", title: "Introduction" },
  { id: "collection", title: "Collection of Your Information" },
  { id: "use", title: "Use of Your Information" },
  { id: "disclosure", title: "Disclosure of Your Information" },
  { id: "retention", title: "Data Retention" },
  { id: "international", title: "International Data Transfers" },
  { id: "rights", title: "Your User Rights" },
  { id: "tracking", title: "Tracking Technologies" },
  { id: "security", title: "Security of Your Information" },
];

export default function PrivacyPage() {
  return (
    <Layout>
      <section className="relative bg-[#FAFAFA] pt-28 pb-8 lg:pt-32 lg:pb-8 border-b border-line-100 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, black 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="mx-auto w-full max-w-4xl px-6 relative z-10 text-center">
          <div className="w-12 h-12 bg-green-50 text-green-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
            <ShieldCheck size={24} />
          </div>
          <h1 className="text-2xl font-extrabold text-smoke-900 tracking-tight md:text-3xl lg:text-4xl mb-3">Privacy Policy</h1>
          <p className="text-sm md:text-base text-smoke-600 font-light">Last updated: October 2026</p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-[#FAFAFA] relative">
        {/* Cute Ambient Background */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-[10%] -left-[10%] w-[40rem] h-[40rem] bg-pink-200/40 rounded-full blur-[120px] mix-blend-multiply" />
          <div className="absolute top-[20%] -right-[10%] w-[35rem] h-[35rem] bg-blue-200/40 rounded-full blur-[120px] mix-blend-multiply" />
          <div className="absolute -bottom-[10%] left-[20%] w-[45rem] h-[45rem] bg-purple-200/40 rounded-full blur-[120px] mix-blend-multiply" />
        </div>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, black 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        
        <div className="mx-auto w-full max-w-7xl px-6 flex flex-col lg:flex-row gap-8 relative z-10">
          
          <SidebarScrollspy headings={headings} />

          <div className="lg:w-3/4 pb-8 space-y-8">
            
             {/* Introduction */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-line-100 shadow-sm prose prose-smoke max-w-none">
              <h2 id="introduction" className="text-2xl font-bold text-smoke-900 mt-0 scroll-mt-32">Introduction</h2>
              <p className="text-smoke-600 leading-relaxed mb-6">
                Razzia Technologies Limited (“we” or “us” or “our”) strictly respects the privacy of our ecosystem participants (“user” or “you”). This extensive Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our digital marketplace, merchant dashboard, and mobile applications (collectively, the “Platform”). Please read this Privacy Policy carefully. IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT ACCESS THE PLATFORM.
              </p>
              <p className="text-smoke-600 leading-relaxed mb-0">
                We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the “Last updated” date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates. Your continued use of the Platform after the date such revised Privacy Policy is posted will constitute your acceptance of those changes.
              </p>
            </div>

             {/* Collection */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-line-100 shadow-sm prose prose-smoke max-w-none">
              <h2 id="collection" className="text-2xl font-bold text-smoke-900 mt-0 scroll-mt-32">Collection of Your Information</h2>
              <p className="text-smoke-600 leading-relaxed mb-4">We may collect information about you in various ways through the Platform. The information we may collect includes:</p>

          <h2 id="collection" className="text-2xl font-bold text-smoke-900 mt-12 scroll-mt-32">Collection of Your Information</h2>
          <p className="text-smoke-600 leading-relaxed mb-4">We may collect information about you in various ways through the Platform. The information we may collect includes:</p>
          <ul className="list-disc pl-5 text-smoke-600 space-y-3 mb-8 marker:text-razzia-500">
            <li><strong>Personal Data:</strong> Information such as your name, email address, physical address, and phone number voluntarily given when participating in Platform activities or registering an account.</li>
            <li><strong>Derivative Data:</strong> Information collected automatically by our servers during your interaction with the Platform, such as IP addresses, browser types, and access times.</li>
            <li><strong>Financial Data:</strong> Information related to your payment method (e.g., valid credit card number, card brand, mobile money wallet details) collected securely when using paid services via Razzia Pay.</li>
            <li><strong>Data from Social Networks:</strong> Information from social networking sites when you choose to connect them to the Platform.</li>
            <li><strong>Geo-Location Information:</strong> Location data collected continuously or while using the app to facilitate hyper-local delivery services and rider tracking.</li>
            <li><strong>Mobile Device Access:</strong> Permissions for certain features on your mobile device, including camera access for KYC verification.</li>
            <li><strong>Mobile Device Data:</strong> Information such as your device ID, model, and manufacturer for analytics and optimization.</li>
              </ul>
            </div>

             {/* Use */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-line-100 shadow-sm prose prose-smoke max-w-none">
              <h2 id="use" className="text-2xl font-bold text-smoke-900 mt-0 scroll-mt-32">Use of Your Information</h2>
              <p className="text-smoke-600 leading-relaxed mb-4">We use information collected through the Platform to provide you with a smooth, efficient, and highly customized experience. This strictly includes:</p>
              <ul className="list-disc pl-5 text-smoke-600 space-y-3 mb-0 marker:text-razzia-500">
            <li>Administering sweepstakes, promotions, and marketplace discounts.</li>
            <li>Assisting law enforcement and responding to legal processes to ensure ecosystem safety.</li>
            <li>Compiling statistical data for internal use to optimize logistics algorithms.</li>
            <li>Delivering targeted advertising, local store recommendations, and promotional materials.</li>
            <li>Managing your account, processing Razzia Pay settlements, and issuing refunds.</li>
            <li>Enabling user-to-user communications (e.g., Rider to Customer chat).</li>
            <li>Increasing the efficiency of the Platform and debugging errors.</li>
            <li>Monitoring market trends and improving the overall user experience.</li>
            <li>Preventing fraudulent activities, chargebacks, and protecting against criminal activity.</li>
              </ul>
            </div>

             {/* Disclosure */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-line-100 shadow-sm prose prose-smoke max-w-none">
              <h2 id="disclosure" className="text-2xl font-bold text-smoke-900 mt-0 scroll-mt-32">Disclosure of Your Information</h2>
              <p className="text-smoke-600 leading-relaxed mb-4">We may share your information in the following circumstances to ensure the Platform operates effectively:</p>
              <ul className="list-disc pl-5 text-smoke-600 space-y-3 mb-0 marker:text-razzia-500">
            <li><strong>By Law or to Protect Rights:</strong> To comply with legal requirements, AML regulations, or protect the rights and safety of our community.</li>
            <li><strong>Third-Party Service Providers:</strong> For services performed on our behalf, such as payment processing, SMS delivery, and cloud infrastructure hosting.</li>
            <li><strong>Marketing Communications:</strong> With your explicit consent for marketing and promotional purposes.</li>
            <li><strong>Interactions with Other Users:</strong> To facilitate interactions within the Platform, such as sharing your delivery address with the assigned Rider.</li>
            <li><strong>Affiliates & Business Partners:</strong> Shared with verified partners to offer you specific local products or integrated services.</li>
            <li><strong>Sale or Bankruptcy:</strong> Transferred in cases of business reorganization, acquisition, or bankruptcy.</li>
              </ul>
            </div>

             {/* Retention */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-line-100 shadow-sm prose prose-smoke max-w-none relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
              <h2 id="retention" className="text-2xl font-bold text-smoke-900 mt-0 scroll-mt-32">Data Retention</h2>
              <p className="text-smoke-600 leading-relaxed mb-4">
                We retain your personal information only for as long as is strictly necessary to fulfill the purposes set out in this Privacy Policy. This includes retaining data to comply with our legal and regulatory obligations, resolve disputes, and enforce our legal agreements. 
              </p>
              <p className="text-smoke-600 leading-relaxed mb-0">
                Once your data is no longer necessary for the services provided, or if you request account deletion, we securely delete or anonymize your information in accordance with global data protection standards (e.g., GDPR, CCPA).
              </p>
            </div>

             {/* International */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-line-100 shadow-sm prose prose-smoke max-w-none">
              <h2 id="international" className="text-2xl font-bold text-smoke-900 mt-0 scroll-mt-32">International Data Transfers</h2>
              <p className="text-smoke-600 leading-relaxed mb-0">
                Razzia operates globally. This means your data may be transferred to, and processed in, countries other than the country in which you reside. These countries may have data protection laws that are different to the laws of your country. However, we have taken appropriate safeguards to require that your personal information remains protected in accordance with this Privacy Policy, such as utilizing Standard Contractual Clauses approved by relevant data protection authorities.
              </p>
            </div>

             {/* Rights */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-line-100 shadow-sm prose prose-smoke max-w-none relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-green-50 rounded-full blur-3xl opacity-50 pointer-events-none transform translate-x-1/4 translate-y-1/4" />
              <h2 id="rights" className="text-2xl font-bold text-smoke-900 mt-0 scroll-mt-32">Your User Rights</h2>
              <p className="text-smoke-600 leading-relaxed mb-4">Depending on your location, you may have specific rights regarding your personal information:</p>
              <ul className="list-disc pl-5 text-smoke-600 space-y-3 mb-0 marker:text-razzia-500">
                <li><strong>The Right to Access:</strong> You have the right to request copies of your personal data.</li>
                <li><strong>The Right to Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate.</li>
                <li><strong>The Right to Erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
                <li><strong>The Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal data.</li>
                <li><strong>The Right to Data Portability:</strong> You have the right to request that we transfer the data that we have collected to another organization, or directly to you.</li>
              </ul>
            </div>

             {/* Tracking */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-line-100 shadow-sm prose prose-smoke max-w-none">
              <h2 id="tracking" className="text-2xl font-bold text-smoke-900 mt-0 scroll-mt-32">Tracking Technologies</h2>
              <p className="text-smoke-600 leading-relaxed mb-0">
                We use cookies, web beacons, and other tracking technologies to customize the Platform and improve your experience. You may disable cookies in your browser, but this may affect the Platform's functionality (e.g., maintaining active sessions). We also partner with third-party vendors to track user activity for analytics and advertising purposes.
              </p>
            </div>

             {/* Security */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-line-100 shadow-sm prose prose-smoke max-w-none">
              <h2 id="security" className="text-2xl font-bold text-smoke-900 mt-0 scroll-mt-32">Security of Your Information</h2>
              <p className="text-smoke-600 leading-relaxed mb-0">
                We utilize bank-grade administrative, technical, and physical security measures to protect your personal information. However, no data transmission method can guarantee complete security over the internet, and we cannot guarantee your information's safety against interception by highly sophisticated unauthorized parties.
              </p>
            </div>

             {/* Contact */}
            <div className="bg-gradient-to-br from-surface-100 to-white p-6 md:p-8 rounded-[2rem] border border-line-200 shadow-sm">
              <h3 className="text-2xl font-bold text-smoke-900 mb-2">Have Questions?</h3>
              <p className="text-smoke-600 leading-relaxed mb-6">
                If you have questions, comments, or wish to exercise your data rights regarding this Privacy Policy, our Data Protection Officer is ready to help.
              </p>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-xl border border-line-100 shadow-sm text-razzia-600 font-bold">
                privacy@razzia.com
              </div>
            </div>



          </div>
        </div>
      </section>
    </Layout>
  );
}
