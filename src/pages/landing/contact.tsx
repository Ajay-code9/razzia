import { useState, useEffect, useRef } from "react";
import { Mail, MessageSquare, Phone, MapPin, ArrowRight, Building, HelpCircle, Send } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/Button";

function useReveal(delayOffset = 0) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delayOffset);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delayOffset]);
  return { ref, isVisible };
}

export default function ContactPage() {
  const heroReveal = useReveal(0);
  const cardsReveal = useReveal(150);
  const formReveal = useReveal(200);

  return (
    <Layout>
      <style dangerouslySetInnerHTML={{ __html: `
        .contact-input { width: 100%; border: 1px solid var(--line-200); border-radius: 0.75rem; padding: 1rem 1.25rem; font-size: 1rem; color: var(--smoke-900); background: var(--surface-50); transition: all 0.2s ease; }
        .contact-input:focus { outline: none; border-color: var(--razzia-500); box-shadow: 0 0 0 4px rgba(234, 59, 12, 0.1); background: white; }
        .contact-label { display: block; font-size: 0.875rem; font-weight: 700; color: var(--smoke-700); margin-bottom: 0.5rem; }
        
        .bento-hover { transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .bento-hover:hover { transform: translateY(-8px); box-shadow: 0 30px 60px -15px rgba(0,0,0,0.1); }
      `}} />

      {/* Hero Section */}
      <section className="relative bg-[#FAFAFA] pt-32 pb-24 overflow-hidden border-b border-line-100">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, black 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        
        <div className="mx-auto w-full max-w-7xl px-6 relative z-10">
          <div ref={heroReveal.ref} style={{ opacity: heroReveal.isVisible ? 1 : 0, transform: heroReveal.isVisible ? "none" : "translateY(30px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
            className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-white border border-line-200 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm rotate-3">
              <MessageSquare size={28} className="text-razzia-500" />
            </div>
            <h1 className="text-5xl font-extrabold leading-[1.1] text-smoke-900 md:text-7xl tracking-tight mb-6">
              Get in touch.
            </h1>
            <p className="text-xl leading-relaxed text-smoke-600 font-light">
              Whether you want to partner with us, have a question about your order, or just want to say hi, our team is always ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-24 bg-white relative">
        <div className="mx-auto w-full max-w-7xl px-6 grid lg:grid-cols-12 gap-16">
          
          {/* Left Column: Contact Methods & Offices */}
          <div className="lg:col-span-5 space-y-12">
            
            <div ref={cardsReveal.ref} style={{ opacity: cardsReveal.isVisible ? 1 : 0, transform: cardsReveal.isVisible ? "none" : "translateY(30px)", transition: "all 0.8s ease" }}
              className="space-y-6">
              
              <div className="bento-hover bg-surface-50 border border-line-100 rounded-3xl p-8 group cursor-pointer">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                  <HelpCircle size={24} />
                </div>
                <h3 className="text-2xl font-bold text-smoke-900 mb-2">Customer Support</h3>
                <p className="text-smoke-600 mb-6">Issues with your order or account? Our support team is available 24/7.</p>
                <a href="mailto:support@razzia.com" className="font-bold text-blue-600 flex items-center gap-2 group-hover:gap-3 transition-all">
                  support@razzia.com <ArrowRight size={16} />
                </a>
              </div>

              <div className="bento-hover bg-surface-50 border border-line-100 rounded-3xl p-8 group cursor-pointer">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-razzia-500 mb-6 group-hover:scale-110 transition-transform">
                  <Building size={24} />
                </div>
                <h3 className="text-2xl font-bold text-smoke-900 mb-2">Sales & Partnerships</h3>
                <p className="text-smoke-600 mb-6">Interested in bringing Razzia to your business or city? Let's talk scale.</p>
                <a href="mailto:partners@razzia.com" className="font-bold text-razzia-600 flex items-center gap-2 group-hover:gap-3 transition-all">
                  partners@razzia.com <ArrowRight size={16} />
                </a>
              </div>

            </div>

            <div className="pt-12 border-t border-line-100">
              <h3 className="text-lg font-bold text-smoke-900 mb-6 flex items-center gap-2">
                <MapPin size={20} className="text-smoke-400" /> Our Headquarters
              </h3>
              <div className="flex gap-6 items-start">
                <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-sm shrink-0">
                  <img src="https://images.unsplash.com/photo-1547471080-7fc2caa7f2a6?auto=format&fit=crop&w=400&q=80" alt="Nairobi" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-smoke-900 mb-1">Nairobi, Kenya</h4>
                  <p className="text-smoke-600 text-sm leading-relaxed">
                    14th Floor, Sanlam Tower<br />
                    Waiyaki Way, Westlands<br />
                    Nairobi 00100
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7" ref={formReveal.ref} style={{ opacity: formReveal.isVisible ? 1 : 0, transform: formReveal.isVisible ? "none" : "translateX(30px)", transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)" }}>
            
            <div className="bg-white border border-line-200 shadow-2xl rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-razzia-50 rounded-full blur-[100px] -z-10 pointer-events-none opacity-60" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-amber-50 rounded-full blur-[100px] -z-10 pointer-events-none opacity-60" />
              
              <h2 className="text-3xl font-extrabold text-smoke-900 mb-8">Send us a message</h2>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="contact-label">First Name</label>
                    <input type="text" className="contact-input" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="contact-label">Last Name</label>
                    <input type="text" className="contact-input" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="contact-label">Email Address</label>
                  <input type="email" className="contact-input" placeholder="jane@company.com" />
                </div>

                <div>
                  <label className="contact-label">Topic</label>
                  <div className="relative">
                    <select className="contact-input appearance-none cursor-pointer">
                      <option>General Inquiry</option>
                      <option>Customer Support</option>
                      <option>Vendor Partnership</option>
                      <option>Press & Media</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-smoke-400">
                      ▼
                    </div>
                  </div>
                </div>

                <div>
                  <label className="contact-label">Message</label>
                  <textarea className="contact-input resize-y min-h-[150px]" placeholder="How can we help you?"></textarea>
                </div>

                <div className="pt-4">
                  <Button type="submit" className="w-full h-14 text-lg bg-smoke-900 hover:bg-smoke-800 text-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                    Send Message <Send size={18} />
                  </Button>
                </div>
                
                <p className="text-xs text-smoke-400 text-center mt-6">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </p>

              </form>
            </div>

          </div>

        </div>
      </section>
    </Layout>
  );
}
