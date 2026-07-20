import { Scale } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SidebarScrollspy } from "@/components/SidebarScrollspy";

const headings = [
  { id: "overview", title: "1. Overview" },
  { id: "definitions", title: "2. Definitions" },
  { id: "responsibilities", title: "3. User Responsibilities" },
  { id: "content", title: "4. Content Uploading & Conduct" },
  { id: "performance", title: "5. Performance & Suspension" },
  { id: "liability", title: "6. Liability & Indemnification" },
  { id: "termination", title: "7. Account Termination" },
  { id: "disputes", title: "8. Dispute Resolution" },
  { id: "general", title: "9. General Provisions" },
];

export default function TermsPage() {
  return (
    <Layout>
      <section className="relative bg-[#FAFAFA] pt-24 pb-8 lg:pt-28 lg:pb-8 border-b border-line-100 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, black 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="mx-auto w-full max-w-4xl px-6 relative z-10 text-center">
          <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
            <Scale size={24} />
          </div>
          <h1 className="text-2xl font-extrabold text-smoke-900 tracking-tight md:text-3xl lg:text-4xl mb-3">Terms & Conditions</h1>
          <p className="text-sm md:text-base text-smoke-600 font-light">Please carefully read the Terms of Use before using the Razzia Platform.</p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-[#FAFAFA] relative">
        {/* Cute Ambient Background */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-[10%] -left-[10%] w-[40rem] h-[40rem] bg-orange-200/40 rounded-full blur-[120px] mix-blend-multiply" />
          <div className="absolute top-[20%] -right-[10%] w-[35rem] h-[35rem] bg-blue-200/40 rounded-full blur-[120px] mix-blend-multiply" />
          <div className="absolute -bottom-[10%] left-[20%] w-[45rem] h-[45rem] bg-yellow-200/40 rounded-full blur-[120px] mix-blend-multiply" />
        </div>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, black 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        
        <div className="mx-auto w-full max-w-7xl px-6 flex flex-col lg:flex-row gap-8 relative z-10">
          
          <SidebarScrollspy headings={headings} />

          <div className="lg:w-3/4 pb-8 space-y-8">
            
             {/* Overview */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-line-100 shadow-sm prose prose-smoke max-w-none">
              <h2 id="overview" className="text-2xl font-bold text-smoke-900 mt-0 scroll-mt-32">1. Overview</h2>
              <p className="text-smoke-600 leading-relaxed mb-6">
                Your use of the Platform (hereinafter defined) is subject to these Terms of Use. By using the Platform, you will be deemed to have accepted and agreed to be bound by these Terms of Use and create a legal relationship between the Company and yourself. The Company may make changes to these Terms of Use from time to time by posting the revised version on the Platform. Your continued use of the Platform following changes constitutes your acceptance of those changes.
              </p>
              <p className="text-smoke-600 leading-relaxed mb-0">
                After downloading the application and/or accessing the web platform, you will be deemed to accept the Terms and Conditions upon clicking the “Accept” option or by simply continuing to use the service. The Services offered by the Company can only be utilized by persons over the age of 18 (eighteen). The Company reserves the right to verify the authenticity of personal information you provide.
              </p>
            </div>

             {/* Definitions */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-line-100 shadow-sm prose prose-smoke max-w-none">
              <h2 id="definitions" className="text-2xl font-bold text-smoke-900 mt-0 scroll-mt-32">2. Definitions</h2>
              <ul className="list-disc pl-5 text-smoke-600 space-y-3 mb-0 marker:text-razzia-500">
            <li><strong>Company:</strong> Means Razzia Technologies Limited, a company incorporated in Kenya.</li>
            <li><strong>Platform:</strong> Means the Razzia ecosystem, including the Customer App, Driver App, Merchant Dashboard, and web interfaces.</li>
            <li><strong>Services:</strong> Means the digital marketplace, logistics facilitation, and Razzia Pay services available to Users.</li>
            <li><strong>Intellectual Property:</strong> Means all design rights, database rights, copyrights, trademarks, logos, and code owned by the Company.</li>
              </ul>
            </div>

             {/* Responsibilities */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-line-100 shadow-sm prose prose-smoke max-w-none relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
              <h2 id="responsibilities" className="text-2xl font-bold text-smoke-900 mt-0 scroll-mt-32">3. User Responsibilities</h2>
              <p className="text-smoke-600 leading-relaxed mb-4">You are strictly responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to:</p>
              <ul className="list-disc pl-5 text-smoke-600 space-y-3 mb-0 marker:text-razzia-500">
                <li>Provide accurate, current, and complete information during the registration process.</li>
                <li>Promptly update your account information to keep it accurate, current, and complete.</li>
                <li>Notify the Company immediately of any unauthorized use of your account or any other breach of security.</li>
                <li>Take full responsibility for all activities that occur under your account, accepting all risks of unauthorized access.</li>
              </ul>
            </div>

             {/* Content */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-line-100 shadow-sm prose prose-smoke max-w-none">
              <h2 id="content" className="text-2xl font-bold text-smoke-900 mt-0 scroll-mt-32">4. Content Uploading & Conduct</h2>
              <p className="text-smoke-600 leading-relaxed mb-4">By uploading content on the Platform or interacting with other Users, you warrant that:</p>
              <ul className="list-disc pl-5 text-smoke-600 space-y-3 mb-8 marker:text-razzia-500">
            <li>The content is legal and lawful under the laws of your jurisdiction.</li>
            <li>You are the legal and beneficial owner of the product or service offered for sale, and such product is free of any encumbrance.</li>
            <li>The provision of the content does not constitute an infringement of any intellectual property rights or trade secrets.</li>
          </ul>
              <p className="text-smoke-600 leading-relaxed mb-0">
                <strong>Anti-Money Laundering (AML):</strong> By utilizing the services, you represent and warrant that the funds spent or received through the platform are not proceeds of crime under the Proceeds of Crime and Anti-Money Laundering Act. The Company may be required by law to disclose your name and transaction information to relevant authorities.
              </p>
            </div>

             {/* Performance */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-line-100 shadow-sm prose prose-smoke max-w-none">
              <h2 id="performance" className="text-2xl font-bold text-smoke-900 mt-0 scroll-mt-32">5. Performance & Suspension</h2>
              <p className="text-smoke-600 leading-relaxed mb-6">
                The Company shall use all reasonable efforts to ensure the Platform is available at all times. However, the Platform is provided on an ‘as is’ basis. The Company cannot guarantee that the Platform will always be available and/or error-free. The Company shall not incur any liability for any direct or indirect loss (including loss of profit or revenue) suffered by yourself as a consequence of Platform unavailability.
              </p>
              <p className="text-smoke-600 leading-relaxed mb-4">You agree that you will not use the Platform:</p>
              <ul className="list-disc pl-5 text-smoke-600 space-y-3 mb-8 marker:text-razzia-500">
            <li>In any way that breaches any applicable laws or promotes unlawful activities.</li>
            <li>To transmit unsolicited advertising or promotional material.</li>
            <li>To gain unauthorized access, interfere with, alter, modify, re-engineer, or damage the Platform's infrastructure.</li>
            <li>To resell or charge others for use of or access to the Platform without prior written consent.</li>
          </ul>
              <p className="text-smoke-600 leading-relaxed mb-0">
                The Company may immediately suspend or terminate your access in connection with any breach of security, violation of these Terms, or upon instruction from governmental authorities.
              </p>
            </div>

             {/* Liability */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-line-100 shadow-sm prose prose-smoke max-w-none">
              <h2 id="liability" className="text-2xl font-bold text-smoke-900 mt-0 scroll-mt-32">6. Liability & Indemnification</h2>
              <p className="text-smoke-600 leading-relaxed mb-6">
                The Company acts strictly as a digital marketplace connecting Users, Vendors, and Riders. We do not warrant, represent, or assume responsibility for any product or service offered by a Vendor through the Platform. You assume the sole risk of using the Platform.
              </p>
              <p className="text-smoke-600 leading-relaxed mb-0">
                Should the Company be found liable under applicable law, the Company’s maximum liability to you, whether in contract or tort, is strictly limited to the amount paid on the goods and services relating to the specific transaction from which the dispute arose. You agree to indemnify and hold blameless the Company, its officers, and employees from any claims arising from your breach of these Terms.
              </p>
            </div>

             {/* Termination */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-line-100 shadow-sm prose prose-smoke max-w-none relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-orange-50 rounded-full blur-3xl opacity-50 pointer-events-none transform translate-x-1/4 translate-y-1/4" />
              <h2 id="termination" className="text-2xl font-bold text-smoke-900 mt-0 scroll-mt-32">7. Account Termination</h2>
              <p className="text-smoke-600 leading-relaxed mb-0">
                You may terminate your account at any time via the settings menu in the App or Dashboard. Upon termination, you remain liable for all outstanding obligations incurred prior to termination. The Company reserves the right to retain certain data as required by law (e.g. transaction records for tax and AML purposes) even after account termination.
              </p>
            </div>

             {/* Disputes */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-line-100 shadow-sm prose prose-smoke max-w-none">
              <h2 id="disputes" className="text-2xl font-bold text-smoke-900 mt-0 scroll-mt-32">8. Dispute Resolution</h2>
              <p className="text-smoke-600 leading-relaxed mb-0">
                Any dispute, controversy, or claim arising out of or relating to this contract, or the breach, termination, or invalidity thereof, shall be settled by arbitration in accordance with the Nairobi Centre for International Arbitration Rules. The language to be used in the arbitral proceedings shall be English.
              </p>
            </div>

             {/* General */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-line-100 shadow-sm prose prose-smoke max-w-none">
              <h2 id="general" className="text-2xl font-bold text-smoke-900 mt-0 scroll-mt-32">9. General Provisions</h2>
              <ul className="list-disc pl-5 text-smoke-600 space-y-3 mb-0 marker:text-razzia-500">
            <li><strong>Severance:</strong> If any provision of these Terms becomes invalid or unenforceable, the validity of the remaining provisions shall not be affected.</li>
            <li><strong>Intellectual Property:</strong> All IP rights in the Platform are owned by the Company. You may not copy or distribute any content without express permission.</li>
            <li><strong>Governing Law:</strong> These Terms shall be governed and construed in accordance with the Laws of Kenya. All disputes shall be finally settled by the Courts of Kenya.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
